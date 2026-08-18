import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Beaker, Book, Home, Trophy, Activity, Server, Cpu, Database, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const Facilities = () => {
    const [activeTab, setActiveTab] = useState('labs');

    const tabs = [
        { id: 'labs', label: 'Laboratories', icon: <Beaker className="w-4 h-4" /> },
        { id: 'library', label: 'Library', icon: <Book className="w-4 h-4" /> },
        { id: 'hostel', label: 'Hostel', icon: <Home className="w-4 h-4" /> },
        { id: 'sports', label: 'Sports', icon: <Trophy className="w-4 h-4" /> },
        { id: 'medical', label: 'Medical', icon: <Activity className="w-4 h-4" /> },
    ];

    const labContent = [
        {
            dept: "Computer Science & Engineering",
            labs: [
                { name: "Programming Lab", specs: "i7 Processors, 16GB RAM, Ubuntu/Windows Dual Boot", software: "Python, C++, Java, VS Code" },
                { name: "Network Lab", specs: "Cisco Routers, Switches, Packet Tracer", software: "Wireshark, NS2" },
                { name: "OS & DBMS Lab", specs: "Enterprise Servers, Oracle Database", software: "MySQL, PostgreSQL, Linux" }
            ]
        },
        {
            dept: "Electronics & Communication",
            labs: [
                { name: "Digital Electronics Lab", specs: "Breadboards, IC Testers, Signal Generators", software: "Logisim, Multisim" },
                { name: "Communication Lab", specs: "Spectrum Analyzers, Oscilloscopes", software: "MATLAB" }
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <SEO 
                title="Campus Facilities" 
                description="Explore MSIT's world-class facilities including advanced laboratories, a vast central library, sports grounds, and on-campus medical center."
                canonicalPath="/facilities"
            />

            <PageHero 
                title="World-Class" 
                accentTitle="Campus Facilities" 
                description="MSIT provides a state-of-the-art environment designed to foster innovation, research, and holistic student development."
                breadcrumbs={[{ label: 'Facilities' }]}
                heroImage="/campus-hero.webp"
                heroImageAlt="Modern academic infrastructure and lab facilities at the MSIT Janakpuri campus"
            />

            {/* Tab Navigation */}
            <div className="border-b border-slate-200 sticky top-[68px] xl:top-[128px] bg-white/80 backdrop-blur-md z-20">
                <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
                    <div className="flex gap-8 py-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-1 py-2 text-sm font-semibold transition-all relative whitespace-nowrap ${
                                    activeTab === tab.id ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'
                                }`}
                            >
                                {tab.icon}
                                {tab.label}
                                {activeTab === tab.id && (
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                {activeTab === 'labs' && (
                    <div className="space-y-12 animate-fade-in">
                        {labContent.map((section, idx) => (
                            <div key={idx}>
                                <h3 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-blue-600 pl-4">{section.dept}</h3>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {section.labs.map((lab, lidx) => (
                                        <div key={lidx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-card-hover transition-shadow">
                                            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                                                <Cpu className="w-6 h-6" />
                                            </div>
                                            <h4 className="text-lg font-bold text-slate-900 mb-3">{lab.name}</h4>
                                            <div className="space-y-3 text-sm">
                                                <p className="text-slate-500 flex items-start gap-2">
                                                    <Server className="w-4 h-4 shrink-0 mt-0.5 text-blue-400" />
                                                    <span><strong>Hardware:</strong> {lab.specs}</span>
                                                </p>
                                                <p className="text-slate-500 flex items-start gap-2">
                                                    <Database className="w-4 h-4 shrink-0 mt-0.5 text-blue-400" />
                                                    <span><strong>Software:</strong> {lab.software}</span>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'library' && (
                    <div className="grid md:grid-cols-2 gap-12 items-start animate-fade-in">
                        <div className="order-2 md:order-1 space-y-6">
                            <div>
                                <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-2">Academic Core</span>
                                <h3 className="text-3xl font-extrabold text-slate-900 leading-tight">Central Library & Information Center</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed font-light text-lg">
                                Powered by the industry-standard <strong>Koha online OPAC catalog</strong>, MSIT Central Library acts as an intellectual nerve center. The facility manages a massive inventory of over 50,000+ volumes, 100+ national and international printed journals, and provides round-the-clock digital availability to students.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100 flex gap-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                                        <Book className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-blue-900 mb-1">Book Bank Facility</h4>
                                        <p className="text-sm text-blue-700">Students are issued complete sets of textbooks for all syllabus courses, valid for the entire academic semester.</p>
                                    </div>
                                </div>

                                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex gap-4">
                                    <div className="w-10 h-10 bg-slate-200 rounded-xl flex items-center justify-center text-slate-600 shrink-0">
                                        <Database className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Subscribed E-Resources</h4>
                                        <p className="text-sm text-slate-600">Direct on-campus and remote authorization for major platforms including <strong>IEEE Xplore</strong>, <strong>SpringerNature</strong>, <strong>Sage</strong>, <strong>DELNET</strong>, and <strong>SCC Online</strong>.</p>
                                    </div>
                                </div>

                                <div className="p-5 bg-emerald-50/50 rounded-2xl border border-emerald-100/50 flex gap-4">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                                        <Server className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-emerald-900 mb-1">Digital Repositories & Modules</h4>
                                        <p className="text-sm text-emerald-700">Access previous year's GGSIPU question papers, AICTE e-KUMBH books, Swayam, NPTEL course videos, and National Digital Library of India (NDLI).</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <a 
                                    href="http://library.msit.in/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-md hover:shadow-lg transition-all"
                                >
                                    <BookOpen className="w-5 h-5" />
                                    Launch OPAC Library Portal
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 rounded-3xl overflow-hidden shadow-card">
                            <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1000" alt="Modern MSIT Central Library showing the spacious reading area and technical book collection" className="w-full h-[clamp(300px,50vh,500px)] object-cover" />
                        </div>
                    </div>
                )}

                {activeTab === 'hostel' && (
                    <div className="bg-slate-950 text-white rounded-3xl p-12 relative overflow-hidden animate-fade-in">
                        <div className="max-w-xl relative z-10">
                            <h3 className="text-3xl font-bold mb-6">Campus Accommodation</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                Separate hostels for boys and girls provide a "home away from home" experience with 24/7 security, high-speed Wi-Fi, and nutritious dining facilities.
                            </p>
                            <ul className="grid grid-cols-2 gap-4 text-sm font-medium">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> 24/7 Power Backup</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> RO Drinking Water</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Sports Courts</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Hygienic Mess</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Facilities;
