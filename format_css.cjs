const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

css = css.replace(/@media \(prefers-contrast: more\) \{\n  :root \{([\s\S]*?)  \}\n\}/g, (match, p1) => {
    return `@media (prefers-contrast: more) {\n  html {${p1}  }\n}`;
});

css = css.replace(/@media \(prefers-reduced-motion: reduce\) \{\n  :root \{\n    \* \{([\s\S]*?)    \}\n  \}\n\}/g, (match, p1) => {
    return `@media (prefers-reduced-motion: reduce) {\n    * {${p1}    }\n}`;
});

css = css.replace(/@media \(prefers-color-scheme: dark\) \{\n  :root \{([\s\S]*?)  \}\n\}/g, (match, p1) => {
    return `@media (prefers-color-scheme: dark) {\n  html {${p1}  }\n}`;
});

fs.writeFileSync('src/index.css', css, 'utf8');
