const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

// The CSS structure is:
// html {
//   ... standard html rules ...
//   &.acc-focus-ring ... { ... }
//   &.acc-high-contrast { ... }
//   &.acc-reduced-motion { ... }
//   &.acc-dark-mode { ... }
//   background-color: #ffffff;
// }

// 1. Remove acc-focus-ring
css = css.replace(/\/\* Accessibility Focus Ring - Conditional \*\/[\s\S]*?&\.acc-focus-ring \*:focus-visible \{[\s\S]*?outline-offset: 2px;\s*\}/, '');

// 2. Change acc-high-contrast to @media (prefers-contrast: more) { :root {
css = css.replace(/&\.acc-high-contrast \{/, '} /* end html */\n\n@media (prefers-contrast: more) {\n:root {');
// Wait, replacing it with `} /* end html */` breaks the rest of the file because the original closing brace for html will be left hanging at line 189!
// Instead, let's pull all these blocks OUT of the `html { }` string block.

let htmlBlockRegex = /html \{([\s\S]*?)\n\}\n\nbody \{/;
let htmlMatch = css.match(htmlBlockRegex);
if (htmlMatch) {
    let innerHtml = htmlMatch[1];
    
    // Clean out focus ring
    innerHtml = innerHtml.replace(/\/\* Accessibility Focus Ring - Conditional \*\/[\s\S]*?&\.acc-focus-ring \*:focus-visible \{[\s\S]*?outline-offset: 2px;\s*\}/, '');
    
    // Extract high contrast
    let highContrastRegex = /\/\* High Contrast Mode Overrides \*\/[\s\S]*?&\.acc-high-contrast \{([\s\S]*?)\n  \}\n\n  \/\* Reduced/;
    let hcMatch = innerHtml.match(highContrastRegex);
    let hcBlock = hcMatch ? hcMatch[1] : '';
    innerHtml = innerHtml.replace(highContrastRegex, '\n  /* Reduced'); // removes it
    
    // Extract reduced motion
    let reducedMotionRegex = /\/\* Reduced Motion Mode \*\/[\s\S]*?&\.acc-reduced-motion \{([\s\S]*?)\n  \}\n\n  \/\* Engineered/;
    let rmMatch = innerHtml.match(reducedMotionRegex);
    let rmBlock = rmMatch ? rmMatch[1] : '';
    innerHtml = innerHtml.replace(reducedMotionRegex, '\n  /* Engineered'); // removes it
    
    // Extract dark mode
    let darkModeRegex = /\/\* Engineered High-End Dark Mode \(Targeted Overrides\) \*\/[\s\S]*?&\.acc-dark-mode \{([\s\S]*?)\n  \}\n\n  background-color/;
    let dmMatch = innerHtml.match(darkModeRegex);
    let dmBlock = dmMatch ? dmMatch[1] : '';
    innerHtml = innerHtml.replace(darkModeRegex, '\n  background-color'); // removes it

    // Construct the new media queries
    let newCSS = `
/* Media queries replacing explicit acc- classes */
@media (prefers-contrast: more) {
  :root {${hcBlock}
  }
}

@media (prefers-reduced-motion: reduce) {
  :root {${rmBlock}
  }
}

@media (prefers-color-scheme: dark) {
  :root {${dmBlock}
  }
}
`;
    
    let replacement = `html {${innerHtml}\n}\n${newCSS}\nbody {`;
    css = css.replace(htmlBlockRegex, replacement);
    fs.writeFileSync('src/index.css', css, 'utf8');
    console.log("CSS rewrote successfully.");
} else {
    console.log("Could not find html block.");
}
