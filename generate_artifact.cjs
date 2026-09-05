const fs = require('fs');
const path = require('path');

const brainDir = '/Users/jayantolhyan/.gemini/antigravity/brain/3e62a5f7-845d-4715-8f46-9a978baf5726/scratch';
if (!fs.existsSync(brainDir)) {
    fs.mkdirSync(brainDir, { recursive: true });
}

let md = "# Campus Images\n\n";

const files = fs.readdirSync('public/campus');
files.forEach(f => {
    if (f.endsWith('.webp')) {
        const srcPath = path.join('public/campus', f);
        const destPath = path.join(brainDir, f);
        fs.copyFileSync(srcPath, destPath);
        md += `## ${f}\n![${f}](${destPath})\n\n`;
    }
});

// also grab campus-hero.webp
fs.copyFileSync('public/campus-hero.webp', path.join(brainDir, 'campus-hero.webp'));
md += `## campus-hero.webp\n![campus-hero.webp](${path.join(brainDir, 'campus-hero.webp')})\n\n`;

fs.writeFileSync(path.join('/Users/jayantolhyan/.gemini/antigravity/brain/3e62a5f7-845d-4715-8f46-9a978baf5726', 'image_review.md'), md);
console.log("Artifact created");
