import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distPath = path.join(projectRoot, 'dist');

// Read VITE_SITE_URL from environment or fallback
const siteUrl = (process.env.VITE_SITE_URL || 'https://msit-website.netlify.app').replace(/\/+$/, "");

function runVerification() {
    console.log('Running SEO Indexing Infrastructure Verification...');
    let failed = false;

    function assert(condition, message) {
        if (!condition) {
            console.error(`✕ FAIL: ${message}`);
            failed = true;
        } else {
            console.log(`✓ PASS: ${message}`);
        }
    }

    // 1. Verify robots.txt
    const robotsPath = path.join(distPath, 'robots.txt');
    assert(fs.existsSync(robotsPath), 'robots.txt exists in dist/');
    if (fs.existsSync(robotsPath)) {
        const content = fs.readFileSync(robotsPath, 'utf8');
        assert(content.includes(`Sitemap: ${siteUrl}/sitemap.xml`), `robots.txt contains sitemap URL pointing to ${siteUrl}`);
        assert(content.includes('Disallow: /admin'), 'robots.txt disallows /admin');
        assert(content.includes('Disallow: /.netlify'), 'robots.txt disallows /.netlify');
        assert(content.includes('Disallow: /500'), 'robots.txt disallows /500');
    }

    // 2. Verify sitemap.xml
    const sitemapPath = path.join(distPath, 'sitemap.xml');
    assert(fs.existsSync(sitemapPath), 'sitemap.xml exists in dist/');
    if (fs.existsSync(sitemapPath)) {
        const content = fs.readFileSync(sitemapPath, 'utf8');
        
        // Homepage check (weekly, 1.0)
        assert(content.includes(`<loc>${siteUrl}/</loc><lastmod>`) && content.includes('<changefreq>weekly</changefreq><priority>1.0</priority>'), 'Sitemap has homepage with weekly/1.0');
        
        // Placements check (weekly, 0.8)
        assert(content.includes(`<loc>${siteUrl}/placements</loc><lastmod>`) && content.includes('<changefreq>weekly</changefreq><priority>0.8</priority>'), 'Sitemap has placements with weekly/0.8');

        // Department check (monthly, 0.8)
        assert(content.includes(`<loc>${siteUrl}/cse</loc><lastmod>`) && content.includes('<changefreq>monthly</changefreq><priority>0.8</priority>'), 'Sitemap has CSE with monthly/0.8');
        assert(content.includes(`<loc>${siteUrl}/it</loc><lastmod>`) && content.includes('<changefreq>monthly</changefreq><priority>0.8</priority>'), 'Sitemap has IT with monthly/0.8');

        // Others check (monthly, 0.6)
        assert(content.includes(`<loc>${siteUrl}/about</loc><lastmod>`) && content.includes('<changefreq>monthly</changefreq><priority>0.6</priority>'), 'Sitemap has /about with monthly/0.6');
        assert(content.includes(`<loc>${siteUrl}/virtual-tour</loc><lastmod>`) && content.includes('<changefreq>monthly</changefreq><priority>0.6</priority>'), 'Sitemap has /virtual-tour with monthly/0.6');
    }

    // 3. Verify static HTML directories and files exist
    const expectedHTMLFiles = [
        'index.html',
        'about/index.html',
        'cse/index.html',
        'it/index.html',
        'placements/index.html',
        'faculty/index.html'
    ];

    expectedHTMLFiles.forEach(file => {
        const filePath = path.join(distPath, file);
        assert(fs.existsSync(filePath), `Static file ${file} exists in dist/`);
    });

    // 4. Verify distinct <head> tags
    const testCases = {
        'index.html': {
            title: 'Maharaja Surajmal Institute of Technology (MSIT)',
            desc: 'Maharaja Surajmal Institute of Technology (MSIT) is a premier engineering college in Delhi offering top-tier B.Tech programs, placements, and innovation.',
            schemaType: 'EducationalOrganization'
        },
        'about/index.html': {
            title: 'Defining Excellence | MSIT',
            desc: 'Discover the legacy of Maharaja Surajmal Institute of Technology. Learn about our mission to provide excellence in engineering and technology since 2001.',
            schemaType: null
        },
        'cse/index.html': {
            title: 'Computer Science & Engineering (CSE) | MSIT',
            desc: 'The Computer Science and Engineering department at MSIT offers advanced curriculum in AI, software engineering, and systems for aspiring tech leaders.',
            schemaType: 'Course'
        },
        'placements/index.html': {
            title: 'Careers & Placements | MSIT',
            desc: 'Experience record-breaking placements at Maharaja Surajmal Institute of Technology. Our graduates secure top roles at Google, Microsoft, Amazon, and MAANG.',
            schemaType: null
        }
    };

    for (const [file, meta] of Object.entries(testCases)) {
        const filePath = path.join(distPath, file);
        if (fs.existsSync(filePath)) {
            const html = fs.readFileSync(filePath, 'utf8');
            
            // Check title
            assert(html.includes(`<title>${meta.title}</title>`), `${file} has correct title: "${meta.title}"`);
            
            // Check description
            assert(html.includes(`<meta name="description" content="${meta.desc}" />`), `${file} has correct meta description`);
            
            // Check canonical
            const expectedPath = file === 'index.html' ? '' : `/${path.dirname(file)}`;
            const expectedCanonical = `${siteUrl}${expectedPath}`;
            assert(html.includes(`<link rel="canonical" href="${expectedCanonical}" />`), `${file} has canonical pointing to ${expectedCanonical}`);

            // Check JSON-LD Schema
            if (meta.schemaType) {
                assert(html.includes(`"@type": "${meta.schemaType}"`), `${file} contains schema of type "${meta.schemaType}"`);
            }
        }
    }

    if (failed) {
        console.error('\n✕ SEO Indexing Infrastructure Verification FAILED!');
        process.exit(1);
    } else {
        console.log('\n✓ SEO Indexing Infrastructure Verification PASSED!');
    }
}

runVerification();
