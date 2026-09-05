import React, { useState, useMemo } from 'react';
import { 
    BookOpen, 
    Calendar, 
    Clock, 
    Search, 
    X, 
    Check, 
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
    Mail,
    Bell,
    ExternalLink
} from 'lucide-react';

const PUBLICATIONS_DATA = [
    {
        id: "wds-newsletter",
        name: "WDS Newsletter",
        publisher: "Web Development Society",
        category: "Societies",
        type: "Newsletter",
        description: "Updates on workshops, hackathons, open-source projects, modern web resources, and developer opportunities at MSIT.",
        frequency: "Monthly",
        popularity: 95,
        dateAdded: "2026-08-15",
        gradient: "from-blue-600 to-indigo-900",
        icon: "Globe"
    },
    {
        id: "placement-bulletin",
        name: "Placement Bulletin",
        publisher: "Training & Placement Cell",
        category: "Bulletins",
        type: "Bulletin",
        description: "Stay ahead with active recruitment drives, internship opportunities, pre-placement preparation talks, and interview resources.",
        frequency: "Weekly",
        popularity: 98,
        dateAdded: "2026-08-20",
        gradient: "from-slate-900 to-slate-800",
        icon: "Briefcase"
    },
    {
        id: "activities-digest",
        name: "Student Activities Digest",
        publisher: "Student Welfare Committee",
        category: "Bulletins",
        type: "Bulletin",
        description: "Your weekly digest of campus fests, departmental hackathons, sports meets, coding competitions, and student club activities.",
        frequency: "Weekly",
        popularity: 92,
        dateAdded: "2026-08-10",
        gradient: "from-emerald-600 to-teal-900",
        icon: "Sparkles"
    },
    {
        id: "ai-ml-digest",
        name: "AI & ML Digest",
        publisher: "Artificial Intelligence Society",
        category: "Societies",
        type: "Newsletter",
        description: "Curated research advancements, deep learning projects, workshops, and AI model showcases compiled by MSIT student researchers.",
        frequency: "Monthly",
        popularity: 90,
        dateAdded: "2026-08-01",
        gradient: "from-indigo-900 to-purple-950",
        icon: "Cpu"
    },
    {
        id: "annual-magazine",
        name: "MSIT Annual Magazine",
        publisher: "MSIT Editorial Board",
        category: "Magazines",
        type: "Magazine",
        description: "A comprehensive look back at MSIT's achievements, cultural breakthroughs, faculty papers, creative articles, and student contributions.",
        frequency: "Annual",
        popularity: 88,
        dateAdded: "2026-06-30",
        gradient: "from-amber-600 to-orange-800",
        icon: "BookOpen"
    },
    {
        id: "ece-newsletter",
        name: "ECE Newsletter",
        publisher: "Electronics & Communication Department",
        category: "Departments",
        type: "Newsletter",
        description: "Research publications, VLSI lab milestones, IoT project highlights, and faculty seminar reports from the ECE Department.",
        frequency: "Semester-wise",
        popularity: 82,
        dateAdded: "2026-07-15",
        gradient: "from-rose-600 to-rose-900",
        icon: "Radio"
    },
    {
        id: "literary-magazine",
        name: "The Literary Mirror",
        publisher: "Literary Society",
        category: "Magazines",
        type: "Magazine",
        description: "Poems, short stories, philosophical essays, and artworks contributed by the creative minds of MSIT students.",
        frequency: "Bi-Annual",
        popularity: 85,
        dateAdded: "2026-07-01",
        gradient: "from-cyan-600 to-blue-900",
        icon: "PenTool"
    },
    {
        id: "research-journal",
        name: "MSIT Journal of Research",
        publisher: "MSIT Research & Development Cell",
        category: "Journals",
        type: "Journal",
        description: "Bi-annual peer-reviewed journal featuring original research papers, engineering developments, and scientific case studies.",
        frequency: "Bi-Annual",
        popularity: 80,
        dateAdded: "2026-05-15",
        gradient: "from-slate-700 to-slate-900",
        icon: "FileText"
    }
];

const PREVIOUS_ISSUES = [
    { name: "MSIT Annual Magazine", volume: "2025 — Vol. 4", readUrl: "#", downloadUrl: "#", coverGradient: "from-amber-500 to-orange-700" },
    { name: "MSIT Annual Magazine", volume: "2024 — Vol. 3", readUrl: "#", downloadUrl: "#", coverGradient: "from-amber-600 to-orange-800" },
    { name: "MSIT Annual Magazine", volume: "2023 — Vol. 2", readUrl: "#", downloadUrl: "#", coverGradient: "from-amber-700 to-orange-900" },
    { name: "MSIT Annual Magazine", volume: "2022 — Vol. 1", readUrl: "#", downloadUrl: "#", coverGradient: "from-slate-600 to-slate-800" }
];

const IconRenderer = ({ iconName, className }) => {
    switch (iconName) {
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
    // State hooks
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState('Popular');
    const [subscribedList, setSubscribedList] = useState([]);
    const [checkoutOpen, setCheckoutOpen] = useState(false);
    const [checkoutEmail, setCheckoutEmail] = useState('');
    const [checkoutSuccess, setCheckoutSuccess] = useState(false);
    const [emailError, setEmailError] = useState('');

    // Categories filter helper
    const filteredPublications = useMemo(() => {
        let list = [...PUBLICATIONS_DATA];

        // Apply Category
        if (selectedCategory !== 'All') {
            list = list.filter(pub => {
                if (selectedCategory === 'Newsletters') return pub.type === 'Newsletter';
                if (selectedCategory === 'Magazines') return pub.type === 'Magazine';
                if (selectedCategory === 'Journals') return pub.type === 'Journal';
                if (selectedCategory === 'Societies') return pub.category === 'Societies';
                if (selectedCategory === 'Departments') return pub.category === 'Departments';
                if (selectedCategory === 'Bulletins') return pub.category === 'Bulletins';
                return true;
            });
        }

        // Apply Sorting
        if (sortBy === 'Popular') {
            list.sort((a, b) => b.popularity - a.popularity);
        } else if (sortBy === 'A-Z') {
            list.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'Recently Added') {
            list.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        }

        return list;
    }, [selectedCategory, sortBy]);

    // Popular Subscriptions (Top 5 by popularity)
    const popularPublications = useMemo(() => {
        return [...PUBLICATIONS_DATA]
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, 5);
    }, []);

    // Toggle Subscription
    const toggleSubscribe = (pubId) => {
        setSubscribedList(prev => 
            prev.includes(pubId) ? prev.filter(id => id !== pubId) : [...prev, pubId]
        );
    };

    // Subscribed Items details
    const selectedPublicationsDetails = useMemo(() => {
        return PUBLICATIONS_DATA.filter(pub => subscribedList.includes(pub.id));
    }, [subscribedList]);

    // Handle checkout submission
    const handleCheckoutSubmit = (e) => {
        e.preventDefault();
        setEmailError('');

        if (subscribedList.length === 0) {
            setEmailError('Please select at least one publication to subscribe.');
            return;
        }

        if (!checkoutEmail) {
            setEmailError('Email address is required.');
            return;
        }

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(checkoutEmail)) {
            setEmailError('Please enter a valid email address.');
            return;
        }

        setCheckoutSuccess(true);
    };

    const handleCloseCheckout = () => {
        setCheckoutOpen(false);
        setCheckoutSuccess(false);
        setCheckoutEmail('');
        setEmailError('');
    };

    const handlePreviousIssueAction = (issueName, action) => {
        alert(`The action "${action}" is registered. Downloading/reading previous issues of ${issueName} will be connected to the static file server.`);
    };

    return (
        <div className="w-full text-slate-800">
            {/* Main Interactive Workspace Split */}

            {/* Main Interactive Workspace Split */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    
                    {/* LEFT 2/3 COLUMN: filters, popular and grid */}
                    <div className="w-full lg:w-2/3 space-y-12">
                        
                        {/* Horizontal Filter Bar & Sorting */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-6 gap-6 select-none">
                            {/* Categories */}
                            <div className="flex flex-wrap gap-2.5">
                                {['All', 'Newsletters', 'Magazines', 'Journals', 'Societies', 'Departments', 'Bulletins'].map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg border transition-all cursor-pointer ${
                                            selectedCategory === category
                                                ? 'bg-slate-900 border-slate-900 text-white shadow-xs'
                                                : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-350'
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

                        {/* SECTION: Popular Subscriptions */}
                        {selectedCategory === 'All' && (
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-black uppercase tracking-widest text-slate-455 flex items-center gap-1.5">
                                        <Bell className="w-4 h-4 text-amber-500" /> Popular Subscriptions
                                    </h3>
                                </div>
                                <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin select-none snap-x snap-mandatory">
                                    {popularPublications.map(pub => {
                                        const isSubbed = subscribedList.includes(pub.id);
                                        return (
                                            <div 
                                                key={pub.id} 
                                                className="w-72 bg-white border border-slate-100 rounded-2xl p-5 shadow-card shrink-0 flex flex-col justify-between snap-start hover:shadow-card-hover transition-shadow duration-300"
                                            >
                                                <div>
                                                    {/* Decorative Card Cover Header */}
                                                    <div className={`h-24 bg-gradient-to-br ${pub.gradient} rounded-xl p-4 flex flex-col justify-between text-white relative overflow-hidden mb-4`}>
                                                        <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
                                                        <span className="px-2 py-0.5 bg-white/10 text-[9px] font-black uppercase tracking-wider rounded border border-white/5 w-fit">
                                                            {pub.type}
                                                        </span>
                                                        <IconRenderer iconName={pub.icon} className="w-7 h-7 text-white/90" />
                                                    </div>

                                                    <h4 className="font-extrabold text-slate-900 text-sm mb-1 line-clamp-1">{pub.name}</h4>
                                                    <p className="text-[10px] font-bold text-blue-600 mb-2 uppercase tracking-wide">{pub.publisher}</p>
                                                    <p className="text-xs text-slate-500 font-light leading-relaxed line-clamp-3 mb-4">{pub.description}</p>
                                                </div>

                                                <div className="space-y-3.5">
                                                    <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold border-t border-slate-55 pt-3">
                                                        <span>Frequency: {pub.frequency}</span>
                                                        <span className="uppercase">{pub.category}</span>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={() => toggleSubscribe(pub.id)}
                                                        className={`w-full py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all cursor-pointer flex justify-center items-center gap-1.5 ${
                                                            isSubbed
                                                                ? 'bg-blue-50 border border-blue-200 text-blue-600 hover:bg-blue-100'
                                                                : 'bg-slate-900 border border-transparent text-white hover:bg-slate-800 shadow-xs'
                                                        }`}
                                                    >
                                                        {isSubbed ? (
                                                            <>
                                                                <Check className="w-3.5 h-3.5" /> Subscribed
                                                            </>
                                                        ) : (
                                                            'Subscribe'
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* SECTION: All Publications Grid */}
                        <div className="space-y-6">
                            <h3 className="text-sm font-black uppercase tracking-widest text-slate-455">
                                {selectedCategory === 'All' ? 'All Publications' : `${selectedCategory} (${filteredPublications.length})`}
                            </h3>

                            {filteredPublications.length === 0 ? (
                                <div className="p-12 text-center bg-slate-50 rounded-2xl border border-slate-100">
                                    <p className="text-sm text-slate-400 font-medium">No publications found matching this category filter.</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {filteredPublications.map(pub => {
                                        const isSubbed = subscribedList.includes(pub.id);
                                        return (
                                            <div 
                                                key={pub.id} 
                                                className="bg-white border border-slate-150 rounded-2xl p-5 shadow-xs flex gap-5 hover:shadow-card transition-shadow duration-300 relative overflow-hidden"
                                            >
                                                {/* Left column artwork cover */}
                                                <div className={`w-28 h-auto bg-gradient-to-br ${pub.gradient} rounded-xl p-4 flex flex-col justify-between text-white shrink-0 relative overflow-hidden`}>
                                                    <div className="absolute top-0 right-0 w-12 h-12 bg-white/5 rounded-full blur-md"></div>
                                                    <span className="px-2 py-0.5 bg-white/10 text-[8px] font-black uppercase tracking-wider rounded border border-white/5 w-fit">
                                                        {pub.type}
                                                    </span>
                                                    <IconRenderer iconName={pub.icon} className="w-8 h-8 text-white/90" />
                                                </div>

                                                {/* Right column description / info */}
                                                <div className="flex flex-col justify-between flex-1 select-none">
                                                    <div>
                                                        <h4 className="font-extrabold text-slate-900 text-sm mb-1 leading-snug">{pub.name}</h4>
                                                        <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded w-fit block mb-3">
                                                            {pub.publisher}
                                                        </span>
                                                        <p className="text-xs text-slate-500 font-light leading-relaxed line-clamp-3 mb-4">{pub.description}</p>
                                                    </div>

                                                    <div className="space-y-3 pt-3 border-t border-slate-100">
                                                        <div className="flex justify-between items-center text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                                                            <span>📅 {pub.frequency}</span>
                                                            <span>🏷️ {pub.category}</span>
                                                        </div>

                                                        <button
                                                            type="button"
                                                            onClick={() => toggleSubscribe(pub.id)}
                                                            className={`w-full py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all cursor-pointer flex justify-center items-center gap-1.5 ${
                                                                isSubbed
                                                                    ? 'bg-blue-50 border border-blue-200 text-blue-600 hover:bg-blue-100'
                                                                    : 'bg-slate-900 border border-transparent text-white hover:bg-slate-800'
                                                            }`}
                                                        >
                                                            {isSubbed ? (
                                                                <>
                                                                    <Check className="w-3.5 h-3.5" /> Subscribed
                                                                </>
                                                            ) : (
                                                                'Subscribe'
                                                            )}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                    </div>

                    {/* RIGHT 1/3 COLUMN: selection panel and previous issues */}
                    <div className="w-full lg:w-1/3 space-y-8 select-none print:hidden">
                        
                        {/* Your Selection Panel */}
                        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-card space-y-6">
                            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Your Selection</h3>
                                <span className="bg-blue-600 text-white font-extrabold text-xs px-2.5 py-1 rounded-full">
                                    {subscribedList.length}
                                </span>
                            </div>

                            {subscribedList.length === 0 ? (
                                <div className="py-6 text-center space-y-2">
                                    <p className="text-xs text-slate-500 font-medium">No publications selected yet.</p>
                                    <p className="text-[10px] text-slate-400 font-light">Choose publications on the left to subscribe.</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {selectedPublicationsDetails.map(pub => (
                                        <div key={pub.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${pub.gradient} flex items-center justify-center text-white shrink-0`}>
                                                    <IconRenderer iconName={pub.icon} className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <h5 className="font-bold text-slate-955 text-xs line-clamp-1">{pub.name}</h5>
                                                    <span className="text-[9px] text-slate-400 font-semibold uppercase">{pub.frequency}</span>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => toggleSubscribe(pub.id)}
                                                className="w-6 h-6 hover:bg-slate-200/60 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                                                aria-label={`Remove ${pub.name}`}
                                            >
                                                <X className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    ))}

                                    <button
                                        type="button"
                                        onClick={() => setCheckoutOpen(true)}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all shadow-md text-xs tracking-wider uppercase cursor-pointer flex justify-center items-center gap-2"
                                    >
                                        View Selection <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Previous Issues Panel */}
                        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-card space-y-6">
                            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Previous Issues</h3>
                                <button 
                                    onClick={() => alert("Explore All Publications list will be connected soon.")}
                                    className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:text-blue-700 transition-colors"
                                >
                                    View All
                                </button>
                            </div>

                            <div className="space-y-4">
                                {PREVIOUS_ISSUES.map((issue, idx) => (
                                    <div key={idx} className="flex gap-4 p-3 hover:bg-slate-50/50 rounded-xl transition-colors">
                                        {/* Cover */}
                                        <div className={`w-12 h-16 bg-gradient-to-br ${issue.coverGradient} rounded-md shadow-xs shrink-0 flex items-end p-1.5 text-white`}>
                                            <BookOpen className="w-4 h-4 opacity-80" />
                                        </div>
                                        {/* Links */}
                                        <div className="flex flex-col justify-center">
                                            <h5 className="font-extrabold text-slate-900 text-xs line-clamp-1">{issue.name}</h5>
                                            <span className="text-[10px] text-slate-400 font-bold mb-1.5">{issue.volume}</span>
                                            <div className="flex gap-3 text-[10px] font-black text-blue-600 uppercase tracking-wider">
                                                <button onClick={() => handlePreviousIssueAction(issue.name, "Read Online")} className="hover:text-blue-800 transition-colors">Read Online</button>
                                                <span className="text-slate-200">|</span>
                                                <button onClick={() => handlePreviousIssueAction(issue.name, "Download PDF")} className="hover:text-blue-800 transition-colors">Download PDF</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* STICKY BOTTOM BAR ON MOBILE/TABLET */}
            {subscribedList.length > 0 && !checkoutOpen && (
                <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-4 flex items-center justify-between z-40 lg:hidden shadow-2xl border-t border-slate-800 animate-slide-in select-none">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                            <Mail className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider">{subscribedList.length} publications selected</p>
                            <p className="text-[9px] text-slate-400 font-medium">Stay updated with the latest from MSIT</p>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={() => setCheckoutOpen(true)}
                        className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-lg"
                    >
                        Proceed to Subscribe <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            )}

            {/* CONFIRMATION / CHECKOUT MODAL AREA */}
            {checkoutOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in select-none">
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-md" onClick={handleCloseCheckout}></div>
                    
                    {/* Modal Box */}
                    <div className="relative bg-white w-full max-w-lg p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-200 animate-scale-in">
                        <button
                            type="button"
                            onClick={handleCloseCheckout}
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        {!checkoutSuccess ? (
                            <form onSubmit={handleCheckoutSubmit} className="space-y-6">
                                <div className="border-b border-slate-100 pb-4">
                                    <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Your MSIT Subscriptions</h3>
                                    <p className="text-xs text-slate-500 font-light mt-1">Review your selected publications and enter your email address to complete subscription.</p>
                                </div>

                                {/* Selection List */}
                                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                                    {selectedPublicationsDetails.map(pub => (
                                        <div key={pub.id} className="flex items-center gap-3 p-2 bg-slate-50 rounded-xl border border-slate-100">
                                            <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-extrabold text-slate-800 text-xs truncate">{pub.name}</h4>
                                                <p className="text-[9px] text-slate-400 font-semibold uppercase">{pub.publisher}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Form Input */}
                                <div className="space-y-2">
                                    <label className="block text-[10px] font-black uppercase tracking-wider text-slate-500">Email Address</label>
                                    <div className="relative">
                                        <input 
                                            type="email" 
                                            value={checkoutEmail}
                                            onChange={(e) => setCheckoutEmail(e.target.value)}
                                            placeholder="Enter your email address"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-350 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-xs font-semibold bg-white text-slate-800"
                                            required
                                        />
                                        <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                                    </div>
                                    {emailError && (
                                        <p className="text-[10px] text-rose-500 font-semibold">{emailError}</p>
                                    )}
                                </div>

                                {/* Action */}
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all shadow-md text-xs tracking-wider uppercase cursor-pointer"
                                >
                                    Subscribe to Selected Publications
                                </button>
                            </form>
                        ) : (
                            /* SUCCESS VIEW */
                            <div className="text-center py-4 space-y-5">
                                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-100 shadow-md">
                                    <Check className="w-8 h-8 stroke-[3]" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">You're all set!</h3>
                                    <p className="text-xs text-slate-500 font-light leading-relaxed">
                                        You've subscribed to <strong className="text-slate-800 font-bold">{subscribedList.length} MSIT publications</strong>.
                                    </p>
                                </div>

                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-600 font-light leading-relaxed">
                                    Your selected publications will be delivered regularly to:<br />
                                    <strong className="text-slate-800 font-bold">{checkoutEmail}</strong>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleCloseCheckout}
                                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl text-xs tracking-wider uppercase transition-colors cursor-pointer"
                                >
                                    Manage Subscriptions
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewslettersMagazines;
