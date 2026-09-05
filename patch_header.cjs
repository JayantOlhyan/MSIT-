const fs = require('fs');

let header = fs.readFileSync('src/components/Header.jsx', 'utf8');

// Remove desktop accessibility button and preceding separator
header = header.replace(/<div className=\{\`w-px h-3 mx-2 \$\{isTransparent \? 'bg-white\/20' : 'bg-slate-200'\}\`\}><\/div>\s*<button\s*onClick=\{\(\) => setIsModalOpen\(true\)\}\s*className=\{\`flex items-center gap-1\.5 transition-colors \$\{isTransparent \? 'hover:text-white' : 'hover:text-primary'\}\`\}\s*aria-label="Accessibility settings \(Alt \+ A\)"\s*title="Accessibility Options \(Alt \+ A\)"\s*>\s*<Accessibility className="w-4 h-4" \/> <span>Accessibility<\/span>\s*<\/button>/g, '');

// Remove mobile accessibility button
header = header.replace(/<button\s*onClick=\{\(\) => setIsModalOpen\(true\)\}\s*className=\{\`p-2 transition-colors \$\{isTransparent \? 'text-white' : 'text-slate-700'\}\`\}\s*aria-label="Accessibility settings \(Alt \+ A\)"\s*title="Accessibility Options \(Alt \+ A\)"\s*>\s*<Accessibility className="w-5 h-5" \/>\s*<\/button>/g, '');

fs.writeFileSync('src/components/Header.jsx', header, 'utf8');
console.log("Header patched.");
