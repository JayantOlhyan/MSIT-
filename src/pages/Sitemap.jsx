import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';

const Sitemap = () => {
    const siteLinks = [
        {
            category: "Institutional",
            links: [
                { label: "Home", path: "/" },
                { label: "About MSIT", path: "/about" },
                { label: "Vision & Mission", path: "/vision-mission" },
                { label: "History & Legacy", path: "/history" },
                { label: "Director's Message", path: "/fromdesk" },
                { label: "Governing Body", path: "/govern" },
                { label: "Administration", path: "/administration" },
                { label: "Faculty & Staff", path: "/faculty" },
                { label: "Campus Facilities", path: "/facilities" },
                { label: "Virtual Tour", path: "/virtual-tour" },
                { label: "Mandatory Disclosures", path: "/mandatory-disclosures" },
                { label: "SMES Society", path: "/smes" },
                { label: "Contact Us", path: "/contact" },
            ]
        },
        {
            category: "Academics",
            links: [
                { label: "Computer Science & Engineering", path: "/cse" },
                { label: "Information Technology", path: "/it" },
                { label: "Electronics & Communication", path: "/ece" },
                { label: "Electrical & Electronics", path: "/eee" },
                { label: "Applied Sciences (1st Year)", path: "/applied-sciences" },
                { label: "Academic Calendar", path: "/academic-calendar" },
                { label: "Syllabus", path: "/syllabus" },
                { label: "Time Table", path: "/timetable" },
                { label: "Information Bulletin (Brochure)", path: "/brochure" },
                { label: "Online Fee Payment", path: "/online-fee" },
            ]
        },
        {
            category: "Student Life & Placement",
            links: [
                { label: "Placements Overview", path: "/placements" },
                { label: "Internship Cell", path: "/internship-cell" },
                { label: "Scholarships", path: "/scholarships" },
                { label: "Societies & Clubs", path: "/society" },
                { label: "IEEE Student Branch", path: "/society-ieee" },
                { label: "Research & Publications", path: "/research" },
                { label: "Events & News", path: "/events" },
                { label: "Alumni Network", path: "/alumni-network" },
                { label: "Student Portal", path: "/student-portal" },
                { label: "Anti-Ragging Guidelines", path: "/antiragging" },
                { label: "POSH Cell", path: "/posh" },
                { label: "Disaster Management", path: "/disaster" },
                { label: "Student Discipline", path: "/discipline" },
                { label: "Search Portal", path: "/search" },
                { label: "Meet the Team", path: "/team" },
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            <SEO 
                title="Sitemap" 
                description="Explore the full structure and navigation of the Maharaja Surajmal Institute of Technology website. Find every department, academy resource, and institutional page." 
                canonicalPath="/sitemap"
            />
            <PageHero 
                title="Website" 
                accentTitle="Sitemap" 
                description="A comprehensive index of all pages and resources available on the MSIT digital portal."
                breadcrumbs={[{ label: 'Institutional' }, { label: 'Sitemap' }]}
            />
            
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {siteLinks.map((section, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-card border border-slate-100">
                            <h2 className="text-xl font-bold text-title mb-6 pb-4 border-b border-slate-100">
                                {section.category}
                            </h2>
                            <ul className="space-y-4">
                                {section.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <Link 
                                            to={link.path} 
                                            className="group flex items-center justify-between text-body hover:text-primary transition-colors py-1"
                                        >
                                            <span className="font-medium">{link.label}</span>
                                            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Sitemap;
