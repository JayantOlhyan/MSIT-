const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/pages/aboutData.js');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
    /\{ label: "Anti-Ragging Helpline", detail: ".*?" \}/,
    `{ label: "Anti-Ragging Helpline", detail: "National Anti-Ragging Helpline: 1800-180-5522. You can also contact the MSIT campus squad at antiragging@msit.in for immediate assistance." }`
);

content = content.replace(
    /\{ label: "Hostel Warden Contact", detail: ".*?" \}/,
    `{ label: "Hostel Warden Contact", detail: "For Maharaja Mahendra Pratap Hostel queries, contact the Chief Warden at warden@msit.in or call the hostel administration desk at +91 11-25528117." }`
);

content = content.replace(
    /\{ label: "Grievance Portal", detail: ".*?" \}/,
    `{ label: "Grievance Portal", detail: "Students and staff can register their complaints and grievances online through our dedicated portal. All issues are addressed strictly within 48 hours." }`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Updated contact info.");
