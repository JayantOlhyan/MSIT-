import { facultyMembers } from './facultyData.js';
import { pagesData } from './pagesData.js';

/**
 * Static core routes for primary site navigation
 */
const staticPages = [
    { title: "Home", url: "/", keywords: "home, main, mainpage, index, maharaja surajmal institute of technology, msit" },
    { title: "Faculty & Staff Directory", url: "/faculty", keywords: "faculty, teachers, staff, directory, prof, assistant, associate, hod, dean, professors" },
    { title: "Academic Calendar", url: "/academic-calendar", keywords: "calendar, dates, exams, holidays, schedule, academic, mid term, end term" },
    { title: "Syllabus Index", url: "/syllabus", keywords: "syllabus, curriculum, course, subjects, study, btech, cse, it, ece, eee" },
    { title: "Time Table", url: "/timetable", keywords: "timetable, schedule, classes, periods, timing, section, routine" },
    { title: "Information Bulletin (Brochure)", url: "/brochure", keywords: "brochure, bulletin, admissions, booklet, prospectus, seat matrix, eligibility" },
    { title: "Online Fee Payment", url: "/online-fee", keywords: "fees, payment, online, tuition, transaction, portal, bank, fee structure" },
    { title: "Placements Overview", url: "/placements", keywords: "placements, jobs, salary, companies, recruit, package, highest package, average package" },
    { title: "Internship Cell", url: "/internship-cell", keywords: "internship, training, summer, stipend, cell, industry training" },
    { title: "Scholarships & Financial Aid", url: "/scholarships", keywords: "scholarships, aid, financial, grant, support, fee waiver, ews" },
    { title: "Student Societies & Clubs", url: "/society", keywords: "societies, clubs, techsoc, iosd, cultural, extracurricular, student life, music, dance, drama" },
    { title: "IEEE Student Branch", url: "/society-ieee", keywords: "ieee, society, branch, research, networking, student chapter" },
    { title: "NDLI Club", url: "/society-ndli", keywords: "ndli, club, library, digital library, event registration, national digital library, society, student chapter" },
    { title: "GeekRoom MSIT", url: "/society-geekroom", keywords: "geekroom, geek room, hackathon, coding, tech community, web development, app development, ai, ml, society, techsoc" },
    { title: "Research & Publications", url: "/research", keywords: "research, journals, papers, patents, projects, publications, scopus, ieee" },
    { title: "Events & News", url: "/events", keywords: "events, news, updates, festivals, notices, hackathons, workshops" },
    { title: "Alumni Network", url: "/alumni-network", keywords: "alumni, meet, network, seniors, graduation, passout" },
    { title: "Student Login Portal", url: "https://examweb.ggsipu.ac.in/web/login.jsp", keywords: "student, login, moodle, central, attendance, marks, portal, ggsipu" },
    { title: "Attendance Rules", url: "/attendance", keywords: "attendance, rules, policy, criteria, leave, medical, detention, 75%" },
    { title: "Privacy Policy", url: "/privacy", keywords: "privacy, policy, data, security, terms" },
    { title: "Terms of Use", url: "/terms", keywords: "terms, conditions, use, legal, agreement" },
    { title: "Anti-Ragging Guidelines", url: "/antiragging", keywords: "antiragging, ragging, policy, safety, discipline, helpline" },
    { title: "POSH Cell (Women Safety)", url: "/posh", keywords: "posh, women, safety, harassment, complaint, committee" },
    { title: "POSH Act Guidelines", url: "/posh-guidelines", keywords: "posh, guidelines, rules, safety, harassment, act" },
    { title: "Lodge a POSH Complaint", url: "/posh-complaint", keywords: "posh, complaint, lodge, report, harass, harassment, sexual, form" },
    { title: "ICC Committee Members", url: "/posh-members", keywords: "posh, members, committee, icc, board, members, representatives" },
    { title: "Disaster Management", url: "/disaster", keywords: "disaster, management, safety, emergency, drill, fire safety" },
    { title: "Student Discipline Committee", url: "/discipline", keywords: "discipline, rules, conduct, behavior, suspension, code of conduct" },
    { title: "Meet the Core Team", url: "/team", keywords: "team, developers, project, creators, website, jayant, pawan, abhay" },
    { title: "Website Sitemap", url: "/sitemap", keywords: "sitemap, directory, index, all pages, navigation" },
    { title: "Global Search Portal", url: "/search", keywords: "search, find, query, search page, lookup, directory" }
];

/**
 * Dynamically generated page index from pagesData
 */
const dynamicPages = Object.entries(pagesData).map(([slug, data]) => ({
    title: data.title,
    url: `/${slug}`,
    keywords: [
        data.title,
        data.subtitle,
        data.category,
        data.seo_description,
        ...(data.bulletPoints || [])
    ].filter(Boolean).join(", ").toLowerCase()
}));

// Combine static & dynamic pages, deduplicating by URL
const pageMap = new Map();
[...staticPages, ...dynamicPages].forEach(page => {
    if (!pageMap.has(page.url)) {
        pageMap.set(page.url, page);
    } else {
        // Merge keywords if already exists
        const existing = pageMap.get(page.url);
        pageMap.set(page.url, {
            ...existing,
            keywords: `${existing.keywords}, ${page.keywords}`
        });
    }
});

const generatedPages = Array.from(pageMap.values());

/**
 * Dynamically generated faculty index from facultyData.js
 */
const generatedFaculty = facultyMembers.map(f => ({
    id: f.id,
    name: f.name,
    role: f.role,
    dept: f.dept || "Faculty",
    img: f.img,
    url: `/faculty?id=${f.id}`,
    keywords: [
        f.name,
        f.role,
        f.dept,
        f.email,
        f.qual,
        ...(f.goodAt || []),
        f.bio
    ].filter(Boolean).join(" ").toLowerCase()
}));

/**
 * Curated Q&A entries
 */
export const qaData = [
    {
        q: "Where is MSIT located?",
        a: "Maharaja Surajmal Institute of Technology is at C-4 Janakpuri, New Delhi. The campus is 2.5km from Janakpuri West Metro Station.",
        keywords: "address, location, place, office, route, map, janakpuri, metro, new delhi"
    },
    {
        q: "How to contact the college?",
        a: "For immediate assistance, please contact the Administration Office at MSIT Janakpuri. Phone: +91 96673 44125 or Email: info@msit.in",
        keywords: "phone, inquiry, help, call, contact, mobile, mail, email, address"
    },
    {
        q: "What are the B.Tech programs offered?",
        a: "MSIT offers B.Tech in Computer Science (CSE), Information Technology (IT), Electronics & Communication (ECE), and Electrical & Electronics (EEE).",
        keywords: "courses, branches, majors, btech, stream, degree, cse, it, ece, eee, admissions"
    },
    {
        q: "What is the highest placement package?",
        a: "MSIT has a stellar placement record, with the highest package reaching over 50 LPA at top recruiters like Google, Microsoft, and Amazon. The average package is around 8-9 LPA.",
        keywords: "placements, jobs, salary, package, highest, average, careers, lpa, recruiters, amazon, google, microsoft"
    },
    {
        q: "How to pay college fees online?",
        a: "Fees can be paid online through the Online Fee Payment portal at /online-fee using net banking, UPI, or debit/credit cards.",
        keywords: "fee, online, payment, pay, banking, cost, tuition, upi, portal"
    },
    {
        q: "Where can I find the exam syllabus?",
        a: "The syllabus for all engineering courses is available at /syllabus. You can select your branch (CSE, IT, ECE, EEE) to download it.",
        keywords: "syllabus, exam, curriculum, study, download, courses, subjects, ipu, ggsipu"
    },
    {
        q: "What societies and clubs are active at MSIT?",
        a: "MSIT has vibrant student societies including TechSoc, IOSD (Software), IEEE Student Branch, and cultural clubs for dance, music, and drama. Explore them at /society.",
        keywords: "societies, clubs, technical, dance, music, extracurricular, active, techsoc, iosd, ieee"
    }
];

/**
 * Exported searchIndex object automatically kept up to date
 */
export const searchIndex = {
    faculty: generatedFaculty,
    pages: generatedPages,
    qa: qaData
};
