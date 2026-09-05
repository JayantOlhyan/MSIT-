const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/pages/DynamicPage.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const anchorStr = `    // Prevent body scroll when modal is open`;
const newEffect = `    useEffect(() => {
        setActiveHighlightIndex(null);
    }, [slug]);

    // Prevent body scroll when modal is open`;

if (content.includes(anchorStr)) {
    content = content.replace(anchorStr, newEffect);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully added useEffect for slug');
} else {
    console.error('Could not find anchor string.');
}
