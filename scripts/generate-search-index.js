import { searchIndex } from '../src/data/searchIndex.js';

/**
 * Automated Search Index Auditor & Verification Script
 * Ensures search index statistics are clean and all entries are valid.
 */
function verifySearchIndex() {
    const { faculty, pages, qa } = searchIndex;

    console.log('\n🔍 [Automated Search Index System]');
    console.log(`✓ Indexed ${faculty.length} Faculty Members & Staff across all departments`);
    console.log(`✓ Indexed ${pages.length} Pages & Navigation Routes (Static + Dynamic)`);
    console.log(`✓ Indexed ${qa.length} Quick Answer Entries`);

    // Verify valid structure
    let errors = 0;
    pages.forEach(p => {
        if (!p.title || !p.url) {
            console.error(`❌ Invalid page entry found:`, p);
            errors++;
        }
    });

    faculty.forEach(f => {
        if (!f.name || !f.role) {
            console.error(`❌ Invalid faculty entry found:`, f);
            errors++;
        }
    });

    if (errors === 0) {
        console.log('✓ Search index integrity check passed with 0 errors!\n');
    } else {
        console.error(`⚠️ Search index verification completed with ${errors} issues.\n`);
        process.exit(1);
    }
}

verifySearchIndex();
