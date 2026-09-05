const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/pages/DynamicPage.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const oldStr = 'className={`hover:text-accent transition-colors cursor-pointer w-full ${isActive ? \'text-accent font-bold font-sans\' : \'\'}`}';
const newStr = 'className={`transition-colors w-full ${(detailText || slug === \'online-fee\' || slug === \'events\') ? \'hover:text-accent cursor-pointer\' : \'cursor-default\'} ${isActive ? \'text-accent font-bold font-sans\' : \'\'}`}';

if (content.includes(oldStr)) {
    content = content.replace(oldStr, newStr);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully updated cursor logic');
} else {
    console.error('Could not find the target string to replace.');
}
