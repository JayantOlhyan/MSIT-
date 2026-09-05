const fs = require('fs');

const files = [
    'src/data/pages/placementData.js',
    'src/data/pages/aboutData.js',
    'src/data/pages/quickLinksData.js',
    'src/data/pages/academicData.js',
    'src/data/pages/admissionData.js',
    'src/data/pages/campusLifeData.js'
];

let strings = [];
files.forEach(f => {
    const content = fs.readFileSync(f, 'utf8');
    const regex = /bulletPoints:\s*\[(.*?)\]/gs;
    let match;
    while ((match = regex.exec(content)) !== null) {
        const arrStr = match[1];
        // Split by comma, but be careful with quotes
        const items = arrStr.split(',').map(s => s.trim());
        items.forEach(item => {
            if (item.startsWith('"') || item.startsWith("'") || item.startsWith('`')) {
                strings.push(item);
            }
        });
    }
});

console.log(Array.from(new Set(strings)).join('\n'));
