const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/pages/academicData.js');
let content = fs.readFileSync(filePath, 'utf8');

// IT
content = content.replace(
    'bulletPoints: ["Cloud & DevOps Labs", "Cybersecurity Research", "Full-Stack Development"]',
    'bulletPoints: [\n            { label: "Cloud & DevOps Labs", detail: "State-of-the-art labs equipped with modern DevOps pipelines and cloud infrastructure for hands-on learning." },\n            { label: "Cybersecurity Research", detail: "Advanced research facilities focusing on network security, ethical hacking, and cryptography protocols." },\n            { label: "Full-Stack Development", detail: "Comprehensive training in modern web technologies including scalable database architectures and UI/UX." }\n        ]'
);

// CSE
content = content.replace(
    'bulletPoints: ["Analytical Excellence", "Ethical Innovation", "Professional Leadership", "State-of-the-Art Labs"]',
    'bulletPoints: [\n            { label: "Analytical Excellence", detail: "Deep insight into mathematical, scientific, and analytical skills required for lifelong learning and problem-solving." },\n            { label: "Ethical Innovation", detail: "Promoting technological innovation coupled with ethical practices and a strong commitment to society." },\n            { label: "Professional Leadership", detail: "Equipping students with technical knowledge and team spirit to pursue successful professional careers." },\n            { label: "State-of-the-Art Labs", detail: "Computing hubs equipped with high-performance systems and environments for AI, OS, and Data Analytics." }\n        ]'
);

// ECE
content = content.replace(
    'bulletPoints: ["VLSI Design Lab", "IoT & Embedded Systems", "Digital Signal Processing"]',
    'bulletPoints: [\n            { label: "VLSI Design Lab", detail: "Hands-on experience in circuit design, microprocessor architecture, and VLSI applications." },\n            { label: "IoT & Embedded Systems", detail: "Building the physical layer of the digital revolution with sensors, microcontrollers, and IoT protocols." },\n            { label: "Digital Signal Processing", detail: "Advanced simulation software and hardware tools for communication systems and signal processing." }\n        ]'
);

// EEE
content = content.replace(
    'bulletPoints: ["Renewable Energy Research", "Power Systems Lab", "Robotics & Automation"]',
    'bulletPoints: [\n            { label: "Renewable Energy Research", detail: "Exploring sustainable power generation and smart grid interfaces for a greener future." },\n            { label: "Power Systems Lab", detail: "Working with industrial motors, heavy electrical engineering equipment, and precise control mechanisms." },\n            { label: "Robotics & Automation", detail: "Programming robotic arms and developing advanced control systems for modern automation needs." }\n        ]'
);

// Applied Sciences
content = content.replace(
    'bulletPoints: ["Engineering Mathematics", "Applied Physics Labs", "Professional Communication"]',
    'bulletPoints: [\n            { label: "Engineering Mathematics", detail: "Rigorous training in foundational mathematics to build strong analytical thinking muscles." },\n            { label: "Applied Physics Labs", detail: "Deep scientific comprehension through hands-on experiments and foundational physics principles." },\n            { label: "Professional Communication", detail: "Developing effective communication and presentation skills essential for future engineering careers." }\n        ]'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated academicData.js');
