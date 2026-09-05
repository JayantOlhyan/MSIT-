const fs = require('fs');

const files = [
    'src/data/pages/placementData.js',
    'src/data/pages/aboutData.js',
    'src/data/pages/quickLinksData.js',
    'src/data/pages/academicData.js',
    'src/data/pages/admissionData.js',
    'src/data/pages/campusLifeData.js'
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // We will find `bulletPoints: [` and parse the array elements inside
    // Because some arrays span multiple lines, we can use a more generic approach:
    // We'll replace all occurrences of `"Some String"` or `'Some String'` inside the bulletPoints array.
    // Wait, let's just find bulletPoints: [...] block and replace the strings inside it.
    
    const regex = /bulletPoints:\s*\[(.*?)\]/gs;
    content = content.replace(regex, (match, arrayContent) => {
        // If the array already contains '{', it might be already objects
        if (arrayContent.includes('{')) {
            // Check if ALL are objects
            return match;
        }
        
        // Otherwise, it's a list of strings like "A", "B", "C"
        // Let's parse them by splitting on commas, but safely
        const items = arrayContent.split(',').map(s => s.trim()).filter(s => s);
        
        const newItems = items.map(item => {
            if (item.startsWith('"') || item.startsWith("'") || item.startsWith('`')) {
                // Remove quotes
                let str = item.slice(1, -1);
                // Create a reasonable detail text
                let detail = `Click here to learn more about ${str.replace(/<[^>]+>/g, '').trim().toLowerCase()}. This section provides comprehensive information and resources tailored to this topic.`;
                return `\n            { label: ${item}, detail: "${detail}" }`;
            }
            return item;
        });
        
        return `bulletPoints: [${newItems.join(',')}\n        ]`;
    });

    fs.writeFileSync(file, content, 'utf8');
});

console.log("Transformed bulletPoints successfully!");
