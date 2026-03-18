import React from 'react';
import { BookOpen, Download, FileText, LayoutTemplate, Layers } from 'lucide-react';
import SEO from '../components/SEO';

const Syllabus = () => {
    const syllabi = [
        { name: "First Year (Common to all streams)", link: "https://www.msit.in/media/syllabus/first-year-common-to-all-streams.pdf", category: "Foundation" },
        { name: "First Year Syllabus (w.e.f 2021)", link: "https://www.msit.in/media/syllabus/first-year-syllabus-wef-2021.pdf", category: "Foundation" },
        { name: "Computer Science & Engineering", link: "https://www.msit.in/media/syllabus/computer-science-engineering_IKgCTCO.pdf", category: "Departmental" },
        { name: "Information Technology", link: "https://www.msit.in/media/syllabus/information-technology.pdf", category: "Departmental" },
        { name: "Electronics & Communication Engineering", link: "https://www.msit.in/media/syllabus/electronics-communication-engineering_yd43pKx.pdf", category: "Departmental" },
        { name: "Electrical & Electronics Engineering", link: "https://www.msit.in/media/syllabus/electrical-electronics-engineering.pdf", category: "Departmental" },
        { name: "Syllabus (w.e.f 2021)", link: "https://www.msit.in/media/syllabus/syllabus-wef-2021.pdf", category: "General" },
        { name: "B.Tech Complete Scheme", link: "https://www.msit.in/media/syllabus/btech-complete-scheme_5DxArTo.pdf", category: "General" },
    ];

    const foundationSyllabi = syllabi.filter(s => s.category === "Foundation");
    const departmentalSyllabi = syllabi.filter(s => s.category === "Departmental");
    const generalSyllabi = syllabi.filter(s => s.category === "General");

    const SyllabusCard = ({ item, icon: Icon }) => (
        <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-start gap-5 hover:border-blue-200"
        >
            <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                <Icon className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
            </div>
            <div className="flex-grow">
                <h3 className="font-bold text-slate-800 group-hover:text-blue-700 transition-colors leading-snug pr-4">
                    {item.name}
                </h3>
                <div className="flex items-center mt-3 text-sm font-medium text-slate-500 group-hover:text-blue-600 transition-colors">
                    <Download className="w-4 h-4 mr-1.5" /> Download PDF
                </div>
            </div>
        </a>
    );

    return (
        <main className="min-h-screen bg-slate-50 py-16">
            <SEO 
                title="Curriculum & Syllabus" 
                description="Download the complete B.Tech syllabus and curriculum schemes for CSE, IT, ECE, and EEE departments at MSIT New Delhi." 
                canonicalPath="/syllabus"
            />
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-wider mb-6">
                        <BookOpen className="w-4 h-4" /> Academic Resources
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Curriculum & Syllabus</h1>
                    <p className="text-xl text-slate-600 font-light max-w-3xl leading-relaxed">
                        Access detailed, up-to-date syllabi for all engineering branches and academic years as prescribed by Guru Gobind Singh Indraprastha University.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Departmental */}
                    <div className="lg:col-span-2 space-y-12">

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center border-b border-slate-200 pb-4">
                                <LayoutTemplate className="w-6 h-6 mr-3 text-blue-600" /> Departmental Syllabi
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {departmentalSyllabi.map((item, idx) => (
                                    <SyllabusCard key={idx} item={item} icon={FileText} />
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center border-b border-slate-200 pb-4">
                                <Layers className="w-6 h-6 mr-3 text-emerald-600" /> First Year / Foundation
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {foundationSyllabi.map((item, idx) => (
                                    <SyllabusCard key={idx} item={item} icon={BookOpen} />
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* Right Column: General / Schemes */}
                    <div>
                        <div className="bg-slate-900 rounded-2xl p-8 text-white sticky top-32 shadow-xl shadow-slate-900/10">
                            <h3 className="text-xl font-bold mb-6 flex items-center">
                                <FileText className="w-5 h-5 mr-3 text-blue-400" /> Comprehensive Schemes
                            </h3>
                            <div className="space-y-4">
                                {generalSyllabi.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block bg-slate-800 hover:bg-slate-700/80 p-5 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all group"
                                    >
                                        <h4 className="font-semibold text-slate-200 group-hover:text-white mb-2 pr-2 leading-tight">{item.name}</h4>
                                        <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 flex items-center">
                                            <Download className="w-3 h-3 mr-1" /> View Document
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="mt-8 pt-8 border-t border-slate-700">
                                <p className="text-sm text-slate-400 font-light leading-relaxed">
                                    The schemes define the credit requirements, subjects breakdown, and evaluation criteria for the full 4-year B.Tech journey.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </main>
    );
};

export default Syllabus;
