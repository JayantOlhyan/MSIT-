import React, { useState } from 'react';
import { Download, CalendarDays, FileText, ChevronDown, ChevronUp, Sparkles, BookOpen, Clock, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';

const Brochure = () => {
    const [showOlder, setShowOlder] = useState(false);

    const latestBrochure = {
        year: "2026 - 2027",
        title: "MSIT Official Information Bulletin 2026–27",
        subtitle: "Official Prospectus & Academic Guidelines",
        description: "Comprehensive information on undergraduate B.Tech admissions, approved seat intake (CSE, IT, ECE, EEE across 1st & 2nd shifts), JEE Main cut-off ranks, fee structure breakdown, placement records, and campus infrastructure.",
        link: "https://www.msit.in/media/2024/07/18/msit-information-bulletin-2024-25.pdf",
        highlight: true,
        features: [
            "Complete Intake & Shift Matrix",
            "JEE Main Cut-Off Ranks",
            "Detailed Fee Breakdown (2026–27)",
            "Campus Placement Statistics"
        ]
    };

    const olderBrochures = [
        {
            year: "2025 - 2026",
            title: "Information Bulletin 2025–26",
            subtitle: "Academic Year 2025–2026 Prospectus",
            link: "https://www.msit.in/media/uploads/2025/07/msit-information-bulletin-2025-26.pdf",
            description: "Official admission brochure and course guidelines for the 2025-26 academic session."
        },
        {
            year: "2024 - 2025",
            title: "Information Bulletin 2024–25",
            subtitle: "Academic Year 2024–2025 Prospectus",
            link: "https://www.msit.in/media/2024/07/18/msit-information-bulletin-2024-25.pdf",
            description: "Official admission brochure and course guidelines for the 2024-25 academic session."
        },
        {
            year: "2023 - 2024",
            title: "Information Bulletin 2023–24",
            subtitle: "Academic Year 2023–2024 Prospectus",
            link: "https://www.msit.in/media/uploads/2023/07/msit-information-bulletin-2023-24.pdf",
            description: "Official prospectus detailing seat matrix, cutoffs, and guidelines for 2023-24."
        },
        {
            year: "2022 - 2023",
            title: "Information Bulletin 2022–23",
            subtitle: "Academic Year 2022–2023 Prospectus",
            link: "https://www.msit.in/media/uploads/2022/07/msit-information-bulletin-2022-23.pdf",
            description: "Official information booklet for admissions and academic regulations (2022-23)."
        },
        {
            year: "2021 - 2022",
            title: "Information Bulletin 2021–22",
            subtitle: "Academic Year 2021–2022 Prospectus",
            link: "https://www.msit.in/media/uploads/2021/07/msit-information-bulletin-2021-22.pdf",
            description: "Official information bulletin and institutional overview for 2021-22."
        },
        {
            year: "2020 - 2021",
            title: "Information Bulletin 2020–21",
            subtitle: "Academic Year 2020–2021 Prospectus",
            link: "https://www.msit.in/media/uploads/2020/07/msit-information-bulletin-2020-21.pdf",
            description: "Archived admission bulletin and academic prospectus for 2020-21."
        }
    ];

    return (
        <main className="min-h-screen bg-slate-50/50">
            <SEO 
                title="Information Brochure" 
                description="Download the official MSIT admission brochure for the current session and view archived older information bulletins." 
                canonicalPath="/brochure"
            />
            <PageHero 
                title="Information" 
                accentTitle="Bulletins & Brochure" 
                description="Download the official MSIT Information Brochures to explore our academic programs, faculty details, and guidelines."
                breadcrumbs={[{ label: 'MSIT' }, { label: 'Brochure' }]}
            />
            <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">

                {/* Latest Brochure Featured Section */}
                <div className="bg-white border-2 border-blue-600/30 rounded-3xl p-6 sm:p-8 shadow-card hover:shadow-lg transition-all relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-full blur-3xl -z-10 pointer-events-none"></div>
                    
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                        <div className="flex items-center gap-2">
                            <span className="inline-flex items-center px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-xs">
                                <Sparkles className="w-3.5 h-3.5 mr-1 animate-pulse" />
                                Latest Release
                            </span>
                            <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full border border-slate-200">
                                Session {latestBrochure.year}
                            </span>
                        </div>
                        <span className="text-xs text-slate-500 font-medium flex items-center">
                            <ShieldCheck className="w-4 h-4 mr-1 text-emerald-600" /> Official GGSIPU Affiliated Document
                        </span>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                            {latestBrochure.title}
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                            {latestBrochure.description}
                        </p>
                    </div>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
                        {latestBrochure.features.map((feat, idx) => (
                            <div key={idx} className="flex items-center text-xs sm:text-sm text-slate-700 font-medium">
                                <BookOpen className="w-4 h-4 mr-2 text-blue-600 shrink-0" />
                                {feat}
                            </div>
                        ))}
                    </div>

                    {/* Download CTA for Latest */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                        <div className="flex items-center text-xs text-slate-500 font-medium">
                            <FileText className="w-4 h-4 mr-1.5 text-slate-400" />
                            Format: PDF | High Resolution Official Copy
                        </div>
                        <a
                            href={latestBrochure.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center transition-all shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-600/20 shrink-0 text-sm"
                        >
                            <Download className="w-4 h-4 mr-2" />
                            Download Latest Brochure (PDF)
                        </a>
                    </div>
                </div>

                {/* Toggle Button for Older Brochures */}
                <div className="flex flex-col items-center justify-center pt-2">
                    <button
                        onClick={() => setShowOlder(!showOlder)}
                        className="inline-flex items-center justify-center px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-2xl border border-slate-300 hover:border-slate-400 shadow-sm hover:shadow-md transition-all duration-300 text-sm gap-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        aria-expanded={showOlder}
                    >
                        <CalendarDays className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                        <span>{showOlder ? "Hide Older Brochures" : "View Older Brochures"}</span>
                        <span className="px-2 py-0.5 bg-slate-100 group-hover:bg-blue-50 text-slate-600 group-hover:text-blue-700 text-xs font-extrabold rounded-full border border-slate-200">
                            {olderBrochures.length} Archives
                        </span>
                        {showOlder ? (
                            <ChevronUp className="w-4 h-4 text-slate-500 group-hover:translate-y-[-2px] transition-transform" />
                        ) : (
                            <ChevronDown className="w-4 h-4 text-slate-500 group-hover:translate-y-[2px] transition-transform" />
                        )}
                    </button>
                    <p className="text-xs text-slate-400 mt-2 font-medium">
                        {showOlder ? "Showing archived bulletins from 2020 to 2026" : "Click to explore past academic session bulletins"}
                    </p>
                </div>

                {/* Older Brochures List (Toggled) */}
                {showOlder && (
                    <div className="bg-white border border-slate-200 rounded-3xl shadow-card overflow-hidden animate-fade-in">
                        <div className="px-6 py-4 bg-slate-50/80 border-b border-slate-200 flex items-center justify-between">
                            <h3 className="font-bold text-slate-800 flex items-center text-sm sm:text-base">
                                <Clock className="w-4 h-4 mr-2 text-slate-500" />
                                Archived Information Bulletins
                            </h3>
                            <span className="text-xs text-slate-500 font-medium">Past Sessions</span>
                        </div>

                        <div className="divide-y divide-slate-100">
                            {olderBrochures.map((brochure, index) => (
                                <div key={index} className="p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between hover:bg-slate-50/70 transition-colors group gap-4">
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <h4 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                                {brochure.year}
                                            </h4>
                                            <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md border border-slate-200">
                                                Archived
                                            </span>
                                        </div>
                                        <p className="text-slate-800 font-semibold text-sm mb-1">{brochure.title}</p>
                                        <p className="text-slate-500 font-medium text-xs">{brochure.description}</p>
                                    </div>
                                    <a
                                        href={brochure.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-700 font-semibold rounded-xl border border-slate-300 hover:border-slate-400 flex items-center justify-center transition-all text-xs shrink-0 shadow-xs"
                                    >
                                        <Download className="w-4 h-4 mr-2 text-slate-500" />
                                        Download PDF
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Additional Note */}
                <div className="p-6 bg-blue-50/60 border border-blue-100 rounded-2xl text-center">
                    <p className="text-blue-900 text-xs sm:text-sm leading-relaxed">
                        <strong>Note:</strong> Information bulletins contain historical guidelines, fee rules, and admission criteria approved by GGSIPU for their respective academic years. For current year admissions, please refer to the latest release above.
                    </p>
                </div>

            </div>
        </main>
    );
};

export default Brochure;
