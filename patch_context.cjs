const fs = require('fs');
let context = fs.readFileSync('src/context/AccessibilityContext.jsx', 'utf8');

// Change defaults to false
context = context.replace(/focusHighlight: true/g, 'focusHighlight: false');

// Remove class application
const useEffRegex = /        \/\/ Apply classes[\s\S]*?        \/\/ Handle text scaling/;
context = context.replace(useEffRegex, '        // Classes are now handled by media queries natively.\n        // Handle text scaling');

fs.writeFileSync('src/context/AccessibilityContext.jsx', context, 'utf8');
console.log("Context patched");
