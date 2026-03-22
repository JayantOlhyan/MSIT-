import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Beaker, Book, Home, Trophy, Activity, ChevronRight, Server, Cpu, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

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

            {/* Hero Header */}
            <div className="bg-slate-950 text-white py-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center text-blue-400 gap-2 mb-4 font-medium tracking-wide text-sm">
                        <Link to="/" className="hover:text-blue-300 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span>Facilities</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Campus Facilities</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
                        MSIT provides a state-of-the-art environment designed to foster innovation, research, and holistic student development.
                    </p>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-slate-200 sticky top-0 bg-white/80 backdrop-blur-md z-20">
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
                                        <div key={lidx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
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
                    <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
                        <div className="order-2 md:order-1">
                            <h3 className="text-3xl font-bold text-slate-900 mb-6">Central Library & Information Center</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Our library is an intellectual hub housing over 50,000+ volumes, 100+ national and international journals, and a dedicated Digital Library section with access to IEEE Explorer and DELNET.
                            </p>
                            <div className="space-y-4">
                                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                                    <h4 className="font-bold text-blue-900 mb-1">Book Bank Facility</h4>
                                    <p className="text-sm text-blue-700">Providing dedicated sets of textbooks to students for the entire semester.</p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-1">E-Resources</h4>
                                    <p className="text-sm text-slate-600">Access to online journals, project reports, and a massive research database.</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 rounded-3xl overflow-hidden shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1000" alt="MSIT Library" className="w-full h-[400px] object-cover" />
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
