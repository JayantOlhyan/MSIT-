const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/pages/NewsDetail.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const oldStr = `                                        <a 
                                            key={idx}
                                            href={file.url}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                alert(\`Simulating download for: \${file.name}\`);
                                            }}
                                            className="flex items-start gap-4 p-4 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-2xl group transition-all"
                                        >`;

const newStr = `                                        <a 
                                            key={idx}
                                            href={file.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            download
                                            className="flex items-start gap-4 p-4 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-2xl group transition-all"
                                        >`;

if (content.includes(oldStr)) {
    content = content.replace(oldStr, newStr);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully updated NewsDetail.jsx');
} else {
    console.error('Could not find the target string to replace.');
}
