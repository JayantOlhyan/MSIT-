const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

// The original CSS has `html { ... }` which closes around line 265 or something.
// Let's remove the nested classes and append them to the end of the file as media queries.

// 1. Remove acc-focus-ring completely.
css = css.replace(/\/\* Accessibility Focus Ring - Conditional \*\/[\s\S]*?&\.acc-focus-ring \*:focus-visible \{[\s\S]*?outline-offset: 2px;\s*\}/, '');

// 2. Extract high contrast
const hcRegex = /\/\* High Contrast Mode Overrides \*\/[\s\S]*?&\.acc-high-contrast \{([\s\S]*?)\/\* Reduced Motion Mode \*\//;
const hcMatch = css.match(hcRegex);
let hcContent = '';
if (hcMatch) {
    // Note: the regex captures until the next comment, so we need to fix the closing brace manually.
    // Actually it's easier to just do regex to find the exact block.
}

// Let's do it an easier way.
// Just replace `&.acc-something {` with `} @media (...) { :root {`
// Because `}` will close `html {`, then we start `@media`, and then `:root {`.
// But wait, the original file has OTHER things inside `html {` AFTER these accessibility blocks.
// Let's see what's after `.acc-dark-mode` inside `html`.
