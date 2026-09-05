const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

css = css.replace(/&\.acc-focus-ring \*:focus-visible \{[\s\S]*?\}/, '');

css = css.replace(/&\.acc-high-contrast \{/g, '@media (prefers-contrast: more) {\n  :root {');
css = css.replace(/&\.acc-reduced-motion \{/g, '@media (prefers-reduced-motion: reduce) {\n  :root {');
css = css.replace(/&\.acc-dark-mode \{/g, '@media (prefers-color-scheme: dark) {\n  :root {');

fs.writeFileSync('src/index.css', css, 'utf8');
console.log("CSS patched.");
