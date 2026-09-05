const fs = require('fs');

const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.jsx') || file.endsWith('.js')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // Fix ServerError.jsx display
    if (content.includes('+91 9667344125')) {
        content = content.replace('+91 9667344125', '+91 96673 44125');
        changed = true;
    }
    
    // Fix Header.jsx
    if (content.includes('011-65215941')) {
        content = content.replace('011-65215941', '+91 11 6521 5941');
        content = content.replace('tel:01165215941', 'tel:+911165215941');
        changed = true;
    }
    
    // Fix Placements.jsx
    if (content.includes('011-65215944')) {
        content = content.replace('011-65215944', '+91 11 6521 5944');
        content = content.replace('tel:01165215944', 'tel:+911165215944');
        changed = true;
    }
    
    // Fix societiesData.js
    if (content.includes('+91 11 2555 2641')) {
        content = content.replace('+91 11 2555 2641', '+91 11 2555 2641'); // already okay format but let's check tel
        // actually let's just make sure all +91 have spaces correctly
    }
    
    // In DynamicPage.jsx and Placements.jsx, tel:${selectedMember.phone}
    // we should strip spaces from the phone number when putting it in the tel link.
    if (content.includes('href={`tel:${selectedMember.phone}`}') && !content.includes('.replace')) {
        content = content.replace(/href=\{`tel:\$\{selectedMember\.phone\}`\}/g, "href={`tel:${selectedMember.phone.replace(/\\s+/g, '')}`}");
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});

console.log("Done fixing phone numbers.");
