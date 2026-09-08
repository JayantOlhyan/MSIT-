import React, { useState, useMemo } from 'react';
import { 
    BookOpen, 
    Calendar, 
    Clock, 
    Search, 
    ChevronRight, 
    Download, 
    Globe, 
    Briefcase, 
    Sparkles, 
    Cpu, 
    Radio, 
    PenTool, 
    FileText, 
    ArrowRight,
    Building2,
    GraduationCap,
    ExternalLink
} from 'lucide-react';

const PUBLICATIONS_DATA = [
    // COLLEGE LEVEL (1 Magazine & 1 Newsletter)
    {
        id: "college-magazine",
        name: "MSIT Annual College Magazine",
        publisher: "MSIT Editorial Board (College Level)",
        category: "College Level",
        type: "Magazine",
        description: "The flagship annual college magazine featuring institutional achievements, faculty publications, campus highlights, creative student writing, and year-in-review.",
        frequency: "Annual (1 per Year)",
        pdfLink: "https://www.msit.in/media/2024/07/18/msit-information-bulletin-2024-25.pdf",
        popularity: 99,
        dateAdded: "2026-06-30",
        gradient: "from-amber-600 to-orange-800",
        icon: "BookOpen"
    },
    {
        id: "college-newsletter",
        name: "MSIT Annual Institutional Newsletter",
        publisher: "MSIT Director's Office (College Level)",
        category: "College Level",
        type: "Newsletter",
        description: "The official yearly institutional newsletter documenting NAAC & NBA milestones, NIRF rankings, policy updates, and campus infrastructure developments.",
        frequency: "Annual (1 per Year)",
        pdfLink: "https://www.msit.in/media/2024/07/18/msit-information-bulletin-2024-25.pdf",
        popularity: 97,
        dateAdded: "2026-07-01",
        gradient: "from-blue-600 to-indigo-900",
        icon: "Building2"
    },

    // CSE DEPARTMENT (1 Newsletter & 1 Magazine)
    {
        id: "cse-newsletter",
        name: "CSE Department Annual Newsletter",
        publisher: "Computer Science & Engineering Dept",
        category: "Departmental",
        type: "Newsletter",
        description: "Annual newsletter highlighting CSE research papers, hackathon winners, coding lab milestones, and departmental workshops.",
        frequency: "Annual (1 per Year)",
        pdfLink: "https://www.msit.in/media/2024/07/18/msit-information-bulletin-2024-25.pdf",
        popularity: 94,
        dateAdded: "2026-07-15",
        gradient: "from-blue-700 to-slate-900",
        icon: "Cpu"
    },
    {
        id: "cse-magazine",
        name: "TechBytes — CSE Annual Magazine",
        publisher: "Computer Science & Engineering Dept",
        category: "Departmental",
        type: "Magazine",
        description: "Annual technical magazine featuring student software innovations, AI/ML research articles, algorithms breakdown, and alumni interviews.",
        frequency: "Annual (1 per Year)",
        pdfLink: "https://www.msit.in/media/2024/07/18/msit-information-bulletin-2024-25.pdf",
        popularity: 93,
        dateAdded: "2026-07-20",
        gradient: "from-indigo-600 to-blue-900",
        icon: "BookOpen"
    },

    // IT DEPARTMENT (1 Newsletter & 1 Magazine)
    {
        id: "it-newsletter",
        name: "IT Department Annual Newsletter",
        publisher: "Information Technology Dept",
        category: "Departmental",
        type: "Newsletter",
        description: "Yearly summary of IT department placements, open-source contributions, faculty achievements, and industry collaboration events.",
        frequency: "Annual (1 per Year)",
        pdfLink: "https://www.msit.in/media/2024/07/18/msit-information-bulletin-2024-25.pdf",
        popularity: 92,
        dateAdded: "2026-07-12",
        gradient: "from-cyan-600 to-blue-900",
        icon: "Globe"
    },
    {
        id: "it-magazine",
        name: "BitStream — IT Annual Magazine",
        publisher: "Information Technology Dept",
        category: "Departmental",
        type: "Magazine",
        description: "Annual magazine focusing on cloud computing, cybersecurity, web technology trends, and student project portfolios.",
        frequency: "Annual (1 per Year)",
        pdfLink: "https://www.msit.in/media/2024/07/18/msit-information-bulletin-2024-25.pdf",
        popularity: 91,
        dateAdded: "2026-07-18",
        gradient: "from-sky-700 to-indigo-900",
        icon: "BookOpen"
    },

    // ECE DEPARTMENT (1 Newsletter & 1 Magazine)
    {
        id: "ece-newsletter",
        name: "ECE Department Annual Newsletter",
        publisher: "Electronics & Communication Dept",
        category: "Departmental",
        type: "Newsletter",
        description: "Annual newsletter detailing VLSI lab developments, robotics workshops, semiconductor research, and ECE faculty seminars.",
        frequency: "Annual (1 per Year)",
        pdfLink: "https://www.msit.in/media/2024/07/18/msit-information-bulletin-2024-25.pdf",
        popularity: 88,
        dateAdded: "2026-07-10",
        gradient: "from-rose-600 to-rose-900",
        icon: "Radio"
    },
    {
        id: "ece-magazine",
        name: "CircuitPulse — ECE Annual Magazine",
        publisher: "Electronics & Communication Dept",
        category: "Departmental",
        type: "Magazine",
        description: "Annual technical magazine highlighting embedded systems, IoT innovations, circuit design papers, and student hardware projects.",
        frequency: "Annual (1 per Year)",
        pdfLink: "https://www.msit.in/media/2024/07/18/msit-information-bulletin-2024-25.pdf",
        popularity: 87,
        dateAdded: "2026-07-22",
        gradient: "from-pink-700 to-rose-950",
        icon: "BookOpen"
    },

    // EEE DEPARTMENT (1 Newsletter & 1 Magazine)
    {
        id: "eee-newsletter",
        name: "EEE Department Annual Newsletter",
        publisher: "Electrical & Electronics Dept",
        category: "Departmental",
        type: "Newsletter",
        description: "Yearly newsletter covering renewable energy lab projects, power systems research, smart grid technology, and student achievements.",
        frequency: "Annual (1 per Year)",
        pdfLink: "https://www.msit.in/media/2024/07/18/msit-information-bulletin-2024-25.pdf",
        popularity: 85,
        dateAdded: "2026-07-08",
        gradient: "from-emerald-600 to-teal-900",
        icon: "Sparkles"
    },
    {
        id: "eee-magazine",
        name: "Electra — EEE Annual Magazine",
        publisher: "Electrical & Electronics Dept",
        category: "Departmental",
        type: "Magazine",
        description: "Annual departmental magazine featuring articles on electric vehicles, automation, green energy, and electrical engineering breakthroughs.",
        frequency: "Annual (1 per Year)",
        pdfLink: "https://www.msit.in/media/2024/07/18/msit-information-bulletin-2024-25.pdf",
        popularity: 84,
        dateAdded: "2026-07-25",
        gradient: "from-teal-700 to-emerald-950",
        icon: "BookOpen"
    },

    // APPLIED SCIENCES (1 Newsletter & 1 Magazine)
    {
        id: "as-newsletter",
        name: "Applied Sciences Annual Newsletter",
        publisher: "Applied Sciences Department (1st Year)",
        category: "Departmental",
        type: "Newsletter",
        description: "Annual newsletter for 1st-year B.Tech students covering foundation labs, induction programs, physics & chemistry research, and math seminars.",
        frequency: "Annual (1 per Year)",
        pdfLink: "https://www.msit.in/media/2024/07/18/msit-information-bulletin-2024-25.pdf",
        popularity: 86,
        dateAdded: "2026-07-05",
        gradient: "from-purple-600 to-indigo-900",
        icon: "FileText"
    },
    {
        id: "as-magazine",
        name: "Genesis — Applied Sciences Annual Magazine",
        publisher: "Applied Sciences Department (1st Year)",
        category: "Departmental",
        type: "Magazine",
        description: "Annual magazine showcasing fresh 1st-year student talent, scientific essays, environmental projects, and academic orientation highlights.",
        frequency: "Annual (1 per Year)",
        pdfLink: "https://www.msit.in/media/2024/07/18/msit-information-bulletin-2024-25.pdf",
        popularity: 85,
        dateAdded: "2026-07-28",
        gradient: "from-violet-700 to-purple-950",
        icon: "BookOpen"
    }
];

const PREVIOUS_ISSUES = [
    { name: "MSIT Annual College Magazine 2025", volume: "Vol. 4 (2025–26)", downloadUrl: "https://www.msit.in/media/2024/07/18/msit-information-bulletin-2024-25.pdf", coverGradient: "from-amber-500 to-orange-700" },
    { name: "MSIT Annual Institutional Newsletter 2025", volume: "Vol. 4 (2025–26)", downloadUrl: "https://www.msit.in/media/2024/07/18/msit-information-bulletin-2024-25.pdf", coverGradient: "from-blue-600 to-indigo-800" },
    { name: "MSIT Annual College Magazine 2024", volume: "Vol. 3 (2024–25)", downloadUrl: "https://www.msit.in/media/2024/07/18/msit-information-bulletin-2024-25.pdf", coverGradient: "from-amber-600 to-orange-800" },
    { name: "MSIT Annual College Magazine 2023", volume: "Vol. 2 (2023–24)", downloadUrl: "https://www.msit.in/media/2024/07/18/msit-information-bulletin-2024-25.pdf", coverGradient: "from-amber-700 to-orange-900" }
];

const IconRenderer = ({ iconName, className }) => {
    switch (iconName) {
        case "Building2": return <Building2 className={className} />;
        case "Globe": return <Globe className={className} />;
        case "Briefcase": return <Briefcase className={className} />;
        case "Sparkles": return <Sparkles className={className} />;
        case "Cpu": return <Cpu className={className} />;
        case "Radio": return <Radio className={className} />;
        case "PenTool": return <PenTool className={className} />;
        case "FileText": return <FileText className={className} />;
        default: return <BookOpen className={className} />;
    }
};

const NewslettersMagazines = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState('Popular');

    // Filter & Sort
    const filteredPublications = useMemo(() => {
        let list = [...PUBLICATIONS_DATA];

        if (selectedCategory !== 'All') {
            list = list.filter(pub => {
                if (selectedCategory === 'Newsletters') return pub.type === 'Newsletter';
                if (selectedCategory === 'Magazines') return pub.type === 'Magazine';
                if (selectedCategory === 'College Level') return pub.category === 'College Level';
                if (selectedCategory === 'Departmental') return pub.category === 'Departmental';
                return true;
            });
        }

        if (sortBy === 'Popular') {
            list.sort((a, b) => b.popularity - a.popularity);
        } else if (sortBy === 'A-Z') {
            list.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'Recently Added') {
            list.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        }

        return list;
    }, [selectedCategory, sortBy]);

    return (
        <div className="w-full text-slate-800">
            <section className="max-w-7xl mx-auto px-6 py-12">

                {/* OFFICIAL ANNUAL PUBLICATION FRAMEWORK BANNER */}
                <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-card space-y-4 mb-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="flex items-center gap-2 text-amber-400 font-extrabold text-xs uppercase tracking-widest">
                        <span>🏛️</span> Official MSIT Publication Framework
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black">Annual Institutional & Departmental Releases</h2>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light max-w-3xl">
                        In accordance with MSIT academic policy, publications are produced on a strict annual cycle: the <strong>college produces 1 Magazine & 1 Newsletter</strong> every year, and <strong>each academic department produces 1 Newsletter & 1 Magazine</strong> every year.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                            <Building2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                            <div>
                                <h3 className="text-xs font-bold text-blue-300 uppercase tracking-wider">
                                    College-Level (2 Annual Publications)
                                </h3>
                                <p className="text-xs text-slate-300 font-light mt-1 leading-relaxed">
                                    1 Annual College Magazine (MSIT Editorial Board) + 1 Annual Institutional Newsletter (Director's Office).
                                </p>
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                            <GraduationCap className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                                <h3 className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                                    Departmental (2 per Department per Year)
                                </h3>
                                <p className="text-xs text-slate-300 font-light mt-1 leading-relaxed">
                                    Each department (CSE, IT, ECE, EEE, Applied Sciences) publishes 1 Annual Newsletter & 1 Annual Magazine every year.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    
                    {/* LEFT 2/3 COLUMN: filters and grid */}
                    <div className="w-full lg:w-2/3 space-y-10">
                        
                        {/* Horizontal Filter Bar & Sorting */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-6 gap-6 select-none">
                            {/* Categories */}
                            <div className="flex flex-wrap gap-2.5">
                                {['All', 'Newsletters', 'Magazines', 'College Level', 'Departmental'].map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg border transition-all cursor-pointer ${
                                            selectedCategory === category
                                                ? 'bg-slate-900 border-slate-900 text-white shadow-xs'
                                                : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>

                            {/* Sort Dropdown */}
                            <div className="flex items-center gap-2 shrink-0">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sort by:</span>
                                <select 
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-800 outline-none focus:border-slate-400"
                                >
                                    <option value="Popular">Popular</option>
                                    <option value="A-Z">A–Z</option>
                                    <option value="Recently Added">Recently Added</option>
                                </select>
                            </div>
                        </div>

                        {/* All Publications Grid */}
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-black uppercase tracking-widest text-slate-500">
                                    {selectedCategory === 'All' ? 'Annual Publications Catalog' : `${selectedCategory} (${filteredPublications.length})`}
                                </h3>
                                <span className="text-xs text-slate-400 font-medium">100% Annual Frequency</span>
                            </div>

                            {filteredPublications.length === 0 ? (
                                <div className="p-12 text-center bg-slate-50 rounded-2xl border border-slate-100">
                                    <p className="text-sm text-slate-400 font-medium">No publications found matching this category filter.</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {filteredPublications.map(pub => (
                                        <div 
                                            key={pub.id} 
                                            className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs flex gap-5 hover:shadow-card transition-all duration-300 relative overflow-hidden group"
                                        >
                                            {/* Left column artwork cover */}
                                            <div className={`w-28 h-auto bg-gradient-to-br ${pub.gradient} rounded-xl p-4 flex flex-col justify-between text-white shrink-0 relative overflow-hidden`}>
                                                <div className="absolute top-0 right-0 w-12 h-12 bg-white/5 rounded-full blur-md"></div>
                                                <span className="px-2 py-0.5 bg-white/10 text-[8px] font-black uppercase tracking-wider rounded border border-white/5 w-fit">
                                                    {pub.type}
                                                </span>
                                                <IconRenderer iconName={pub.icon} className="w-8 h-8 text-white/90 group-hover:scale-110 transition-transform" />
                                            </div>

                                            {/* Right column description / info */}
                                            <div className="flex flex-col justify-between flex-1 select-none">
                                                <div>
                                                    <h4 className="font-extrabold text-slate-900 text-sm mb-1 leading-snug">{pub.name}</h4>
                                                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded w-fit block mb-2">
                                                        {pub.publisher}
                                                    </span>
                                                    <p className="text-xs text-slate-500 font-light leading-relaxed line-clamp-3 mb-4">{pub.description}</p>
                                                </div>

                                                <div className="space-y-3 pt-3 border-t border-slate-100">
                                                    <div className="flex justify-between items-center text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                                                        <span>📅 Frequency: Annual</span>
                                                        <span>🏷️ {pub.category}</span>
                                                    </div>

                                                    <a
                                                        href={pub.pdfLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-full py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all cursor-pointer flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-xs"
                                                    >
                                                        <Download className="w-3.5 h-3.5" /> Download Publication PDF
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                    </div>

                    {/* RIGHT 1/3 COLUMN: Previous Issues Archive */}
                    <div className="w-full lg:w-1/3 space-y-8 select-none">
                        
                        {/* Information Note */}
                        <div className="bg-blue-50/70 border border-blue-100 rounded-3xl p-6 space-y-3">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-2">
                                📌 Publication Schedule
                            </h3>
                            <p className="text-xs text-slate-600 leading-relaxed font-light">
                                Every year, MSIT publishes <strong>1 College Magazine + 1 College Newsletter</strong>, and <strong>each academic department publishes 1 Annual Newsletter + 1 Annual Magazine</strong>.
                            </p>
                        </div>

                        {/* Previous Issues Panel */}
                        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-card space-y-6">
                            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Archived Annual Issues</h3>
                            </div>

                            <div className="space-y-4">
                                {PREVIOUS_ISSUES.map((issue, idx) => (
                                    <div key={idx} className="flex gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors group border border-slate-100">
                                        {/* Cover */}
                                        <div className={`w-12 h-16 bg-gradient-to-br ${issue.coverGradient} rounded-md shadow-xs shrink-0 flex items-end p-1.5 text-white`}>
                                            <BookOpen className="w-4 h-4 opacity-80" />
                                        </div>
                                        {/* Links */}
                                        <div className="flex flex-col justify-center">
                                            <h4 className="font-extrabold text-slate-900 text-xs line-clamp-1 group-hover:text-blue-600 transition-colors">{issue.name}</h4>
                                            <span className="text-[10px] text-slate-400 font-bold mb-2">{issue.volume}</span>
                                            <a 
                                                href={issue.downloadUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="inline-flex items-center gap-1 text-[10px] font-black text-blue-600 uppercase tracking-wider hover:text-blue-800 transition-colors"
                                            >
                                                <Download className="w-3 h-3" /> Download PDF
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default NewslettersMagazines;
