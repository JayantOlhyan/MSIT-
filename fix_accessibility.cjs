const fs = require('fs');

// 1. Footer.jsx
let footer = fs.readFileSync('src/components/Footer.jsx', 'utf8');
footer = footer.replace(/import \{ useAccessibility \} from '\.\.\/context\/AccessibilityContext';\n/, '');
footer = footer.replace(/const \{ setIsModalOpen \} = useAccessibility\(\);\n\s*/, '');
footer = footer.replace(/<button[^>]*onClick=\{\(\) => setIsModalOpen\(true\)\}[^>]*>[\s\S]*?<\/button>\n\s*/g, '');
fs.writeFileSync('src/components/Footer.jsx', footer);

// 2. Layout.jsx
let layout = fs.readFileSync('src/components/Layout.jsx', 'utf8');
layout = layout.replace(/import AccessibilityModal from '\.\/AccessibilityModal';\n/, '');
layout = layout.replace(/<AccessibilityModal \/>\n\s*/, '');
fs.writeFileSync('src/components/Layout.jsx', layout);

// 3. App.jsx
let app = fs.readFileSync('src/App.jsx', 'utf8');
app = app.replace(/import \{ AccessibilityProvider \} from '\.\/context\/AccessibilityContext';\n/, '');
app = app.replace(/<AccessibilityProvider>\n/g, '');
app = app.replace(/<\/AccessibilityProvider>\n/g, '');
fs.writeFileSync('src/App.jsx', app);

// 4. Header.jsx
let header = fs.readFileSync('src/components/Header.jsx', 'utf8');
header = header.replace(/import \{ useAccessibility \} from '\.\.\/context\/AccessibilityContext';\n/, '');
fs.writeFileSync('src/components/Header.jsx', header);

// 5. OpeningAnimation.jsx
let opening = fs.readFileSync('src/components/OpeningAnimation.jsx', 'utf8');
opening = opening.replace(/import \{ useAccessibility \} from '\.\.\/context\/AccessibilityContext';\n/, '');
opening = opening.replace(/const \{ settings \} = useAccessibility\(\);\n/, '');
opening = opening.replace(/settings\.reducedMotion/g, "window.matchMedia('(prefers-reduced-motion: reduce)').matches");
fs.writeFileSync('src/components/OpeningAnimation.jsx', opening);

// 6. NotFound.jsx
let notfound = fs.readFileSync('src/pages/NotFound.jsx', 'utf8');
notfound = notfound.replace(/import \{ useAccessibility \} from '\.\.\/context\/AccessibilityContext';\n/, '');
notfound = notfound.replace(/const \{ settings \} = useAccessibility\(\);\n/, '');
notfound = notfound.replace(/settings\.reducedMotion/g, "window.matchMedia('(prefers-reduced-motion: reduce)').matches");
fs.writeFileSync('src/pages/NotFound.jsx', notfound);

console.log("Done");
