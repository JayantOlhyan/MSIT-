import { searchSite } from '../src/search/searchSite.js';
import { searchIndex } from '../src/data/searchIndex.js';
import { pagesData } from '../src/data/pagesData.js';

/**
 * Automated Verification Script for MSIT Site Search
 * Validates:
 * 1. Expected queries return target URLs in the top 3 of their group or overall
 * 2. Every result URL's path is a real route
 * 3. No URL points to excluded routes (/admin, /404, /500, /search, /student-portal)
 * 4. Every #anchor in the index is unique per page
 */

console.log('\n🔍 [Verifying Search Coverage, Matching & Linking]...\n');

let failed = false;

// 1. Excluded routes check
const excludedRoutes = ['/admin', '/404', '/500', '/search', '/student-portal'];

// Real routes whitelist
const explicitRoutes = new Set([
    '/',
    '/search',
    '/placements',
    '/virtual-tour',
    '/team',
    '/academic-calendar',
    '/syllabus',
    '/timetable',
    '/brochure',
    '/admin',
    '/privacy',
    '/terms',
    '/facilities',
    '/faculty',
    '/sitemap',
    '/500'
]);

// Add all dynamic pagesData slugs
Object.keys(pagesData).forEach(slug => {
    explicitRoutes.add(`/${slug}`);
});

function getPath(url) {
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    return url.split('?')[0].split('#')[0];
}

// Check every indexed page URL
let urlErrors = 0;
const pageAnchors = new Map(); // path -> Set of anchors

searchIndex.pages.forEach(p => {
    const rawUrl = p.url;
    if (rawUrl.startsWith('http://') || rawUrl.startsWith('https://')) return;

    const path = getPath(rawUrl);

    // Excluded routes check
    if (excludedRoutes.includes(path)) {
        console.error(`❌ Excluded route found in searchIndex: ${rawUrl}`);
        urlErrors++;
    }

    // Real route check
    if (!explicitRoutes.has(path) && !path.startsWith('/news-event/')) {
        console.error(`❌ Unrecognized route in searchIndex: ${rawUrl}`);
        urlErrors++;
    }

    // Anchor uniqueness per page
    if (rawUrl.includes('#')) {
        const anchor = rawUrl.split('#')[1];
        if (!pageAnchors.has(path)) {
            pageAnchors.set(path, new Set());
        }
        const set = pageAnchors.get(path);
        if (set.has(anchor)) {
            console.error(`❌ Duplicate anchor #${anchor} on page ${path}`);
            urlErrors++;
        } else {
            set.add(anchor);
        }
    }
});

if (urlErrors > 0) {
    console.error(`❌ Index validation failed with ${urlErrors} URL errors.`);
    failed = true;
} else {
    console.log(`✓ All ${searchIndex.pages.length} indexed URLs are valid and anchors are unique per page.`);
}

// 2. Golden query verification table
const testCases = [
    {
        query: 'library',
        group: 'pages',
        check: (results) => results.slice(0, 3).some(r => r.url.includes('/facilities') && r.url.includes('library'))
    },
    {
        query: 'libary',
        group: 'pages',
        check: (results) => results.slice(0, 3).some(r => r.url.includes('/facilities') && r.url.includes('library'))
    },
    {
        query: 'ground',
        group: 'pages',
        check: (results, all) => {
            const hasSportsInTop3 = results.slice(0, 3).some(r => r.url.includes('/facilities') && r.url.includes('sports'));
            const noFacultyAhead = all.faculty.length === 0 || !all.faculty.some(f => (f.name || '').toLowerCase().includes('ground'));
            return hasSportsInTop3 && noFacultyAhead;
        }
    },
    {
        query: 'football',
        group: 'pages',
        check: (results) => results.slice(0, 3).some(r => r.url.includes('/facilities') && r.url.includes('sports'))
    },
    {
        query: 'cricket',
        group: 'pages',
        check: (results) => results.slice(0, 3).some(r => r.url.includes('/facilities') && r.url.includes('sports'))
    },
    {
        query: 'basketball',
        group: 'pages',
        check: (results) => results.slice(0, 3).some(r => r.url.includes('/virtual-tour'))
    },
    {
        query: 'canteen',
        group: 'pages',
        check: (results) => results.slice(0, 3).some(r => r.url.includes('canteen') || (r.title && r.title.toLowerCase().includes('canteen')))
    },
    {
        query: 'auditorium',
        group: 'pages',
        check: (results) => results.slice(0, 3).some(r => (r.title && r.title.toLowerCase().includes('auditorium')) || (r.body && r.body.toLowerCase().includes('auditorium')))
    },
    {
        query: 'hostel',
        group: 'pages',
        check: (results) => results.slice(0, 3).some(r => (r.title && r.title.toLowerCase().includes('hostel')) || (r.url && r.url.includes('hostel')))
    },
    {
        query: 'naac',
        group: 'pages',
        check: (results) => results.slice(0, 3).some(r => r.url.includes('/mandatory-disclosures'))
    },
    {
        query: 'nirf',
        group: 'pages',
        check: (results) => results.slice(0, 3).some(r => r.url.includes('/mandatory-disclosures'))
    },
    {
        query: 'anti ragging',
        group: 'pages',
        check: (results) => results.slice(0, 3).some(r => r.url.includes('/antiragging'))
    },
    {
        query: 'antiragging',
        group: 'pages',
        check: (results) => results.slice(0, 3).some(r => r.url.includes('/antiragging'))
    },
    {
        query: 'placement',
        group: 'pages',
        check: (results) => results.slice(0, 3).some(r => r.url === '/placements')
    },
    {
        query: 'plcement',
        group: 'pages',
        check: (results) => results.slice(0, 3).some(r => r.url === '/placements')
    },
    {
        query: 'fee',
        group: 'pages',
        check: (results) => results.slice(0, 3).some(r => r.url === '/online-fee')
    },
    {
        query: 'hod cse',
        group: 'faculty',
        check: (results) => results.slice(0, 3).some(f => (f.role || '').toLowerCase().includes('hod') && (f.dept || '').toLowerCase() === 'cse')
    },
    {
        query: 'Geetika Dhand',
        group: 'faculty',
        check: (results) => results.length > 0 && results[0].name.toLowerCase().includes('geetika dhand')
    },
    {
        query: 'syllabus',
        group: 'pages',
        check: (results) => results.slice(0, 3).some(r => r.url === '/syllabus')
    },
    {
        query: 'ieee',
        group: 'pages',
        check: (results) => results.slice(0, 3).some(r => r.url.includes('/society-ieee'))
    },
    {
        query: 'academic calendar',
        group: 'pages',
        check: (results) => results.slice(0, 3).some(r => r.url === '/academic-calendar')
    },
    {
        query: 'bus',
        group: 'pages',
        check: (results) => {
            // Syllabus and eCell must NOT be #1
            if (results.length === 0) return true;
            const topUrl = results[0].url;
            return topUrl !== '/syllabus' && topUrl !== '/society-ecell';
        }
    }
];

testCases.forEach(({ query, group, check }) => {
    const all = searchSite(query);
    const results = all[group] || [];
    const passed = check(results, all);
    if (!passed) {
        console.error(`❌ Query test failed for "${query}": Top 3 in ${group}:`, results.slice(0, 3).map(r => r.url || r.name));
        failed = true;
    } else {
        const top3 = results.slice(0, 3).map(r => r.url || r.name).join(', ');
        console.log(`✓ "${query}" passed (Top 3 ${group}: ${top3})`);
    }
});

if (failed) {
    console.error('\n❌ Search verification failed.\n');
    process.exit(1);
} else {
    console.log('\n✓ All golden query assertions passed successfully!\n');
}
