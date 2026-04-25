import React from 'react';
import { Link } from 'react-router-dom';
import { Sitemap as SitemapIcon, ChevronRight } from 'lucide-react';
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
                { label: "Administration", path: "/administration" },
                { label: "Mandatory Disclosures", path: "/mandatory-disclosures" },
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
            ]
        },
        {
            category: "Student Life & Placement",
            links: [
                { label: "Placements Overview", path: "/placements" },
                { label: "Scholarships", path: "/scholarships" },
                { label: "Societies & Clubs", path: "/society" },
                { label: "Events & News", path: "/events" },
                { label: "Alumni Network", path: "/alumni-network" },
                { label: "Student Portal", path: "/student-portal" },
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
