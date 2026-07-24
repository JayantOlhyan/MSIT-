import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pagesData } from '../src/data/pagesData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distPath = path.join(projectRoot, 'dist');

// Read VITE_SITE_URL from environment or fallback
const siteUrl = (process.env.VITE_SITE_URL || 'https://msit-website.netlify.app').replace(/\/+$/, "");

// 1. Generate robots.txt
function generateRobotsTxt() {
    const robotsContent = `Sitemap: ${siteUrl}/sitemap.xml

User-agent: *
Allow: /
Disallow: /admin/
Disallow: /admin
Disallow: /.netlify
Disallow: /500
Disallow: /search
Disallow: /api/
`;
    
    fs.writeFileSync(path.join(distPath, 'robots.txt'), robotsContent, 'utf8');
    console.log(`✓ Generated dist/robots.txt pointing to ${siteUrl}/sitemap.xml`);
}

// 2. Define static routes metadata
const staticRoutes = {
    '/': {
        title: 'Home',
        description: 'Maharaja Surajmal Institute of Technology (MSIT) is a premier engineering college in Delhi offering top-tier B.Tech programs, placements, and innovation.',
        schema: {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Maharaja Surajmal Institute of Technology",
            "alternateName": "MSIT",
            "url": siteUrl,
            "logo": `${siteUrl}/msit-logo.webp`,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "C-4, Janakpuri",
                "addressLocality": "New Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110058",
                "addressCountry": "IN"
            },
            "sameAs": [
                "https://www.linkedin.com/school/maharaja-surajmal-institute-of-technology-msitnewdelhi/"
            ]
        }
    },
    '/placements': {
        title: 'Placements',
        description: 'Explore stellar placement records at Maharaja Surajmal Institute of Technology. Our graduates secure top roles at Google, Microsoft, and Amazon with 95%+ success.'
    },
    '/search': {
        title: 'Search',
        description: 'Search for courses, departments, faculty, and academic resources at Maharaja Surajmal Institute of Technology. Find the information you need quickly today.'
    },
    '/virtual-tour': {
        title: 'Virtual Campus Tour',
        description: 'Experience Maharaja Surajmal Institute of Technology from anywhere in the world. Take our immersive 360° virtual tour of blocks, labs, and facilities.'
    },
    '/team': {
        title: 'Meet The Team',
        description: 'Discover the core development team and faculty coordinators who built the Maharaja Surajmal Institute of Technology website.'
    },
    '/academic-calendar': {
        title: 'Academic Calendar',
        description: 'Stay updated with the MSIT academic calendar. Find critical dates for semester starts, examinations, and holidays.'
    },
    '/syllabus': {
        title: 'Syllabus',
        description: 'Access official B.Tech syllabi for all departments at Maharaja Surajmal Institute of Technology.'
    },
    '/timetable': {
        title: 'Time Table',
        description: 'View and download current semester class schedules and lab timetables for all departments at Maharaja Surajmal Institute of Technology. Stay organized.'
    },
    '/brochure': {
        title: 'Information Brochure',
        description: 'Download the official MSIT admission brochure for the 2026-27 session. Get detailed information on courses, infrastructure, and Maharaja Surajmal Institute.'
    },
    '/admin': {
        title: 'Admin Dashboard',
        description: 'Access the MSIT secure administrative dashboard to manage website content, news, events, and campus stories for Maharaja Surajmal Institute of Technology.'
    },
    '/privacy': {
        title: 'Privacy Policy',
        description: 'Read the official Privacy Policy of Maharaja Surajmal Institute of Technology (MSIT). Learn how we protect student data and user privacy.'
    },
    '/terms': {
        title: 'Terms of Use',
        description: 'Review the terms and conditions for using the Maharaja Surajmal Institute of Technology (MSIT) official website and digital services.'
    },
    '/facilities': {
        title: 'Campus Facilities',
        description: 'Explore MSIT\'s world-class facilities including advanced laboratories, a vast central library, sports grounds, and on-campus medical center.'
    },
    '/faculty': {
        title: 'Premium Faculty Directory',
        description: 'Explore the comprehensive profiles, research strengths, and detailed metrics of the distinguished faculty at MSIT.'
    },
    '/sitemap': {
        title: 'Sitemap - Maharaja Surajmal Institute of Technology',
        description: 'Explore all pages, sections, academic directories, student portals, and policy links of MSIT using our dynamic, Apple-style sitemap.'
    },
    '/student-portal': {
        title: 'Student ERP Login Portal',
        description: 'Secure login portal to the Maharaja Surajmal Institute of Technology Student ERP/Central hub.'
    },
    '/500': {
        title: '500 Server Error',
        description: 'The Maharaja Surajmal Institute of Technology server encountered an internal error. We are working to resolve it. Contact support if the issue persists.'
    }
};

// 3. Inject metadata into HTML
function injectMetadata(html, routePath, metadata) {
    const siteTitle = "Maharaja Surajmal Institute of Technology (MSIT)";
    const pageTitle = (metadata.title && metadata.title !== "Home") ? `${metadata.title} | MSIT` : siteTitle;
    const description = metadata.description || '';
    const canonicalUrl = `${siteUrl}${routePath === '/' ? '' : routePath}`.replace(/\/+$/, "");

    let modifiedHtml = html;

    // Replace Title tag
    modifiedHtml = modifiedHtml.replace(/<title>[^<]+<\/title>/g, `<title>${pageTitle}</title>`);

    // Replace Meta description (handle name="description" and content attributes)
    const descRegex = /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/gi;
    if (descRegex.test(modifiedHtml)) {
        modifiedHtml = modifiedHtml.replace(descRegex, `<meta name="description" content="${description}" />`);
    } else {
        // Append it after charset if not found
        modifiedHtml = modifiedHtml.replace(/<head>/gi, `<head>\n  <meta name="description" content="${description}" />`);
    }

    // Replace og:title
    modifiedHtml = modifiedHtml.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/gi, `<meta property="og:title" content="${pageTitle}" />`);

    // Replace og:description
    modifiedHtml = modifiedHtml.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/gi, `<meta property="og:description" content="${description}" />`);

    // Replace og:url
    modifiedHtml = modifiedHtml.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/gi, `<meta property="og:url" content="${canonicalUrl}" />`);

    // Replace twitter:title
    modifiedHtml = modifiedHtml.replace(/<meta\s+(property|name)="twitter:title"\s+content="[^"]*"\s*\/?>/gi, `<meta name="twitter:title" content="${pageTitle}" />`);

    // Replace twitter:description
    modifiedHtml = modifiedHtml.replace(/<meta\s+(property|name)="twitter:description"\s+content="[^"]*"\s*\/?>/gi, `<meta name="twitter:description" content="${description}" />`);

    // Add Canonical link
    const canonicalRegex = /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/gi;
    const canonicalLink = `<link rel="canonical" href="${canonicalUrl}" />\n  <link rel="alternate" hreflang="en-IN" href="${canonicalUrl}" />\n  <link rel="alternate" hreflang="x-default" href="${canonicalUrl}" />`;
    if (canonicalRegex.test(modifiedHtml)) {
        modifiedHtml = modifiedHtml.replace(canonicalRegex, canonicalLink);
    } else {
        modifiedHtml = modifiedHtml.replace(/<\/head>/gi, `  ${canonicalLink}\n</head>`);
    }

    // Inject custom JSON-LD schema if present
    if (metadata.schema) {
        const schemaString = `\n  <script type="application/ld+json">\n    ${JSON.stringify(metadata.schema, null, 4).replace(/\n/g, '\n    ')}\n  </script>`;
        modifiedHtml = modifiedHtml.replace(/<\/head>/gi, `${schemaString}\n</head>`);
    }

    return modifiedHtml;
}

// 4. Main Prerender Execution
function run() {
    const templateHtml = fs.readFileSync(path.join(distPath, 'index.html'), 'utf8');

    // Make sure dist/robots.txt is generated
    generateRobotsTxt();

    // Collect all routes
    const routesToPrerender = {};

    // Load static routes
    for (const [route, meta] of Object.entries(staticRoutes)) {
        routesToPrerender[route] = meta;
    }

    // Load dynamic routes from pagesData
    for (const [slug, pageData] of Object.entries(pagesData)) {
        const route = `/${slug}`;
        
        // Define Course schema if it's a department page
        const isDepartment = ['cse', 'it', 'ece', 'eee', 'applied-sciences'].includes(slug);
        const schema = isDepartment ? {
            "@context": "https://schema.org",
            "@type": "Course",
            "name": pageData.title,
            "description": pageData.seo_description || pageData.subtitle,
            "provider": {
                "@type": "EducationalOrganization",
                "name": "Maharaja Surajmal Institute of Technology",
                "url": siteUrl
            }
        } : null;

        routesToPrerender[route] = {
            title: pageData.title,
            description: pageData.seo_description || pageData.subtitle,
            schema
        };
    }

    // Prerender each route
    console.log(`Prerendering ${Object.keys(routesToPrerender).length} routes...`);
    for (const [route, metadata] of Object.entries(routesToPrerender)) {
        const modifiedHtml = injectMetadata(templateHtml, route, metadata);

        if (route === '/') {
            // Write directly to index.html
            fs.writeFileSync(path.join(distPath, 'index.html'), modifiedHtml, 'utf8');
            console.log(`  → Prerendered / (dist/index.html)`);
        } else {
            // Write to dist/[route]/index.html
            const routeDir = path.join(distPath, route.substring(1));
            fs.mkdirSync(routeDir, { recursive: true });
            fs.writeFileSync(path.join(routeDir, 'index.html'), modifiedHtml, 'utf8');
            console.log(`  → Prerendered ${route} (${routeDir}/index.html)`);
        }
    }

    console.log('✓ Prerendering and SEO injection completed successfully!');
}

run();
