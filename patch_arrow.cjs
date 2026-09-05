const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/pages/DynamicPage.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const oldStr = `<ArrowRight className={\`w-4 h-4 mr-3 mt-0.5 shrink-0 transition-all duration-300 \${isActive ? 'rotate-90 text-accent' : 'text-slate-500'}\`} />`;

const newStr = `<ArrowRight className={\`w-4 h-4 mr-3 mt-0.5 shrink-0 transition-all duration-300 \${isActive ? 'text-accent' : 'text-slate-500'} \${activeHighlightIndex === i && detailText ? 'rotate-90' : ''}\`} />`;

if (content.includes(oldStr)) {
    content = content.replace(oldStr, newStr);
    
    // Also add setActiveHighlightIndex(null) in the useEffect
    const useEffectOld = `    useEffect(() => {
        if (slug === 'online-fee') {`;
    const useEffectNew = `    useEffect(() => {
        setActiveHighlightIndex(null);
        if (slug === 'online-fee') {`;
    
    if (content.includes(useEffectOld)) {
        content = content.replace(useEffectOld, useEffectNew);
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully updated arrow rotation logic');
} else {
    console.error('Could not find the target string to replace.');
}
