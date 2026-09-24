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
    { title: "eCell & Incubation Cell", url: "/society-ecell", keywords: "ecell, e-cell, incubation, startup, entrepreneurship, nisp, investor, pitch, business, funding, lab 218" },
    { title: "Unnat Bharat Abhiyan (UBA) Cell", url: "/society-uba", keywords: "uba, unnat bharat abhiyan, rural development, social responsibility, village survey, community service, nss, adopted villages" },
    { title: "SPARK Research Hub", url: "/society-spark", keywords: "spark, research, think tank, papers, ieee, scopus, grants, publication, latex, student research" },
    { title: "Research & Publications", url: "/research", keywords: "research, journals, papers, patents, projects, publications, scopus, ieee" },
    { title: "Events & News", url: "/events", keywords: "events, news, updates, festivals, notices, hackathons, workshops" },
    { title: "Alumni Network", url: "/alumni-network", keywords: "alumni, meet, network, seniors, graduation, passout" },
    { title: "Student Login Portal", url: "https://examweb.ggsipu.ac.in/web/login.jsp", keywords: "student, login, moodle, central, attendance, marks, portal, ggsipu" },
    { title: "Attendance Rules", url: "/attendance", keywords: "attendance, rules, policy, criteria, leave, medical, detention, 75%" },
    { title: "Privacy Policy", url: "/privacy", keywords: "privacy, policy, data, security, terms" },
    { title: "Terms of Use", url: "/terms", keywords: "terms, conditions, use, legal, agreement" },
    { title: "Anti-Ragging Guidelines", url: "/antiragging", keywords: "antiragging, ragging, policy, safety, discipline, helpline" },
    { title: "Disaster Management", url: "/disaster", keywords: "disaster, management, safety, emergency, drill, fire safety" },
    { title: "Student Discipline Committee", url: "/discipline", keywords: "discipline, rules, conduct, behavior, suspension, code of conduct" },
    { title: "Student Grievance Redressal Committee (SGRC)", url: "/student-grievance", keywords: "grievance, sgrc, complaint, academic, marks, fee, harassment, ombudsman, aicte" },
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
        ...(data.bulletPoints || []).map(b => (typeof b === 'string' ? b : `${b.label || ''} ${b.detail || ''}`))
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
        a: "For immediate assistance, please contact the Administration Office at MSIT Janakpuri. Phone: 011-45037193 or Email: director@msit.in",
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
 * Curated news, events, notices and categorized updates for site-wide discovery
 */
export const searchEvents = [
    {
        id: 12,
        title: "MSIT Academic Calendar & Examination Schedule Released for 2026 Sessions",
        label: "ACADEMICS",
        category: "Academics",
        date: "APR 05, 2026",
        url: "/academic-calendar",
        summary: "Official academic calendar, mid-term datesheets, semester break timings, and university end-term examination guidelines published for B.Tech students.",
        keywords: "academics, academic calendar, datesheet, exams, evaluation, schedule, syllabus, classes"
    },
    {
        id: 13,
        title: "GGSIPU Curriculum Upgrade: Advanced AI, Cloud Architecture & Autonomous Electives Adopted",
        label: "ACADEMICS",
        category: "Academics",
        date: "MAR 18, 2026",
        url: "/syllabus",
        summary: "Curriculum overhaul across CSE, IT, ECE, and EEE departments introduces industry-aligned electives, quantum computing fundamentals, and autonomous project credits.",
        keywords: "academics, curriculum, syllabus, electives, ai, cloud, btech, cse, it, ece, eee"
    },
    {
        id: 14,
        title: "Admissions Open for B.Tech Batch 2026–30: Information Brochure & Counseling Schedule",
        label: "ADMISSIONS",
        category: "Admissions",
        date: "APR 02, 2026",
        url: "/brochure",
        summary: "Complete admission guidelines, seat matrix for 1st & 2nd shift programs, GGSIPU CET / JEE Main cutoff trends, and online application portal are now active.",
        keywords: "admissions, brochure, bulletin, jee main, cutoff, seat matrix, eligibility, counseling"
    },
    {
        id: 15,
        title: "MSIT Merit-cum-Means Scholarships & Financial Assistance Schemes Announced for 2026-27",
        label: "ADMISSIONS",
        category: "Admissions",
        date: "MAR 12, 2026",
        url: "/scholarships",
        summary: "Institutional scholarships, EWS fee waivers, and Delhi Government financial assistance portals open with awards up to 100% tuition coverage for deserving scholars.",
        keywords: "admissions, scholarships, fee waiver, financial aid, ews, merit, assistance"
    },
    {
        id: 16,
        title: "MSIT 2026 Placement Season Reaches ₹1.2 Cr International Offer & 95%+ Placement Rate",
        label: "PLACEMENTS",
        category: "Placements",
        date: "MAR 28, 2026",
        url: "/placements",
        summary: "Over 250+ top global recruiters including Google, Amazon, Microsoft, Apple, and ION Trading extend 850+ job offers to graduating engineers.",
        keywords: "placements, jobs, offers, highest package, google, microsoft, apple, salary, lpa"
    },
    {
        id: 17,
        title: "Summer Internship Drive 2026: 180+ Pre-Placement Offers (PPOs) Bagged by 3rd-Year Engineers",
        label: "PLACEMENTS",
        category: "Placements",
        date: "FEB 20, 2026",
        url: "/internship-cell",
        summary: "MSIT Training & Placement Cell concludes high-stipend corporate internship hiring with premier software, semiconductor, and fintech firms.",
        keywords: "placements, internship, ppo, stipend, training, cell, recruitment"
    },
    {
        id: 18,
        title: "Urgent Examination Notice: End-Term Theory & Practical Datesheet Published",
        label: "NOTICES",
        category: "Notices",
        date: "APR 08, 2026",
        url: "/news-event/18",
        summary: "All regular and reappear candidates are instructed to review the official university datesheet, verify admit cards, and note hall ticket release dates.",
        keywords: "notices, examination, datesheet, hall ticket, circular, exams, practical, theory"
    },
    {
        id: 19,
        title: "Mandatory Notice regarding 75% Attendance Compliance for Examination Eligibility",
        label: "NOTICES",
        category: "Notices",
        date: "MAR 15, 2026",
        url: "/attendance",
        summary: "In accordance with GGSIPU Ordinance 11, students falling below statutory attendance thresholds must submit medical documentation to HOD offices immediately.",
        keywords: "notices, attendance, 75%, detention, medical, ordinance 11, rules, eligibility"
    },
    {
        id: 20,
        title: "MSIT Faculty & Scholars Publish 45+ Research Papers in IEEE, Springer & Scopus Q1 Journals",
        label: "RESEARCH",
        category: "Research",
        date: "MAR 10, 2026",
        url: "/research",
        summary: "Significant academic milestone in generative AI, VLSI chip architecture, biomedical robotics, and clean renewable energy systems by MSIT research teams.",
        keywords: "research, papers, publications, scopus, ieee, journals, patents, citations"
    },
    {
        id: 1,
        title: "Department of CSE receives CSR Research Grant from Petronet LNG Ltd. for AI Center of Excellence",
        label: "NEWS",
        category: "Research",
        date: "MAR 02, 2026",
        url: "/news-event/1",
        summary: "The new research grant will drive interdisciplinary AI research, high-performance computing, and industry collaboration at MSIT.",
        keywords: "news, research, grant, petronet, cse, ai center of excellence"
    },
    {
        id: 10,
        title: "MSC MSIT Organizes HackMSIT 1.0 Hackathon",
        label: "EVENT",
        category: "Events",
        date: "APR 10, 2026",
        url: "/news-event/10",
        summary: "36-hour non-stop student hackathon with 500+ participants building open-source projects, AI prototypes, and developer tools.",
        keywords: "event, hackathon, hackmsit, coding, projects, competition"
    }
];

/**
 * Exported searchIndex object automatically kept up to date
 */
export const searchIndex = {
    faculty: generatedFaculty,
    pages: generatedPages,
    qa: qaData,
    events: searchEvents
};
