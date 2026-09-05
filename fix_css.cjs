const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

// First, restore the original strings to make parsing easier, or just parse carefully.
// Actually, let's just use git checkout to restore index.css and do it properly.
