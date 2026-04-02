import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown, ChevronRight, ArrowRight, User, Book, Hash, HelpCircle, MessageSquare, TrendingUp } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { searchIndex } from '../data/searchIndex';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState({ faculty: [], pages: [], qa: [] });
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 49);
        };

        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setSearchOpen(true);
            }
            if (e.key === 'Escape') {
                setSearchOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
        setSearchQuery('');
        setSearchResults({ faculty: [], pages: [], qa: [] });
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (!query.trim()) {
            setSearchResults({ faculty: [], pages: [], qa: [] });
            return;
        }

        const lQuery = query.toLowerCase();

        const facultyMatches = searchIndex.faculty.filter(f => 
            f.name.toLowerCase().includes(lQuery) || 
            f.dept.toLowerCase().includes(lQuery) ||
            f.role.toLowerCase().includes(lQuery)
        );

        const pageMatches = searchIndex.pages.filter(p => 
            p.title.toLowerCase().includes(lQuery) || 
            p.keywords.toLowerCase().includes(lQuery)
        );

        const qaMatches = searchIndex.qa.filter(q => 
            q.q.toLowerCase().includes(lQuery) || 
            q.keywords.toLowerCase().includes(lQuery)
        );

        setSearchResults({
            faculty: facultyMatches.slice(0, 3),
            pages: pageMatches.slice(0, 4),
            qa: qaMatches.slice(0, 2)
        });
    };

    const megaMenuData = {
        about: [
            { name: "About MSIT", url: "/about" },
            { name: "Vision & Mission", url: "/vision-mission" },
            { name: "History & Legacy", url: "/history" },
            { name: "Leadership Team", url: "/administration" },
            { name: "Campus & Facilities", url: "/facilities" },
            { name: "Surajmal Memorial Education Society", url: "/smes" }
        ],
        admission: [
            { name: "Info Brochure", url: "/brochure" },
            { name: "Online Fee Payment", url: "/online-fee" },
            { name: "Scholarships", url: "/scholarships" },
            { name: "Mandatory Disclosures", url: "/mandatory-disclosures" }
        ],
        academics: [
            { name: "Computer Science (CSE)", url: "/cse" },
            { name: "Information Technology (IT)", url: "/it" },
            { name: "Electronics & Comm. (ECE)", url: "/ece" },
            { name: "Electrical Engineering (EEE)", url: "/eee" },
            { name: "Applied Sciences", url: "/applied-sciences" },
            { name: "Academic Calendar", url: "/academic-calendar" },
            { name: "Time Table & Syllabus", url: "/timetable" },
            { name: "Research & Innovation", url: "/research" }
        ],
        life: [
            { name: "Student Societies", url: "/society" },
            { name: "Events & Festivals", url: "/events" },
            { name: "Anti-Ragging", url: "/antiragging" },
            { name: "Internal Complaint Committee", url: "/posh" },
            { name: "Disaster Management", url: "/disaster" },
            { name: "Discipline Committee", url: "/discipline" }
        ],
        placements: [
            { name: "Careers & Placements", url: "/placements" },
            { name: "Internship Cell", url: "/internship-cell" }
        ],
        student: [
            { name: "Student Login Portal", url: "https://msit.techtron.net/", external: true },
            { name: "MSIT Central", url: "https://central.msit.in/", external: true },
            { name: "Moodle (LMS)", url: "http://moodle.msit.in/", external: true },
            { name: "Library Portal", url: "http://library.msit.in/", external: true },
            { name: "Placement Portal", url: "https://placement.msit.in/", external: true },
            { name: "NISP (Startup & Innovation)", url: "http://nisp.msit.in/", external: true },
            { name: "NPTEL Videos", url: "http://nptel.ac.in/", external: true },
            { name: "Grievance Portal", url: "http://grievance.msit.in", external: true },
            { name: "Higher Studies Form", url: "https://docs.google.com/forms/d/e/1FAIpQLSfQa8YcM9Pq4kN10V8TJ_KDw8cdGphCi6b6QNw66bWfm7RkvQ/viewform?usp=sf_link", external: true },
            { name: "Attendance Rules", url: "/attendance" }
        ]
    };

    const isHomePage = location.pathname === '/';
    const isTransparent = isHomePage && !isScrolled && !isMenuOpen;

    const headerContainerClass = isHomePage
        ? `fixed top-0 left-0 w-full z-[60] transition-colors duration-300 ${isTransparent ? 'bg-transparent' : 'bg-white shadow-lg py-1'}`
        : `sticky top-0 z-[60] w-full transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white shadow-lg py-1' : 'bg-white/95 backdrop-blur-sm py-2'}`;

    const textStyle = isTransparent ? 'text-white hover:text-slate-200' : 'text-slate-700 hover:text-blue-600';
    const mutedTextStyle = isTransparent ? 'text-white/80' : 'text-slate-500';
    const logoColorStyle = isTransparent ? 'text-white' : 'text-[#1e4a9b]';
    const logoSubStyle = isTransparent ? 'text-white/90' : 'text-[#f05023]';

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-[60] flex flex-col">
                {/* Tier 1: Persistent Branding & Utility Bar (Transparent on Home, White on Scroll) */}
                <div className={`transition-all duration-300 py-3 px-4 lg:px-6 xl:px-12 border-b relative z-20 ${
                    isTransparent 
                        ? 'bg-transparent border-transparent' 
                        : 'bg-white border-slate-100 shadow-sm text-slate-800'
                }`}>
                    <div className="w-full max-w-[1536px] mx-auto flex justify-between items-center">
                        {/* Logo Area */}
                        <Link to="/" className="flex items-center gap-3 lg:gap-4 cursor-pointer select-none">
                            <img 
                                src="/msit-logo.png" 
                                alt="MSIT Logo" 
                                className={`h-10 md:h-12 lg:h-14 w-auto object-contain shrink-0 transition-all duration-300 ${isTransparent ? 'brightness-[1.2]' : ''}`} 
                                loading="eager" 
                            />
                            <div className="flex flex-col justify-center">
                                <span className={`font-['Libre_Baskerville',serif] font-black text-[14px] md:text-[18px] lg:text-[24px] tracking-tight leading-tight transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-[#1e4a9b]'}`}>
                                    <span className="hidden sm:inline text-balance">Maharaja Surajmal Institute of Technology</span>
                                    <span className="sm:hidden text-base font-black">MSIT Delhi</span>
                                </span>
                            </div>
                        </Link>

                        <div className={`hidden xl:flex items-center space-x-6 text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${isTransparent ? 'text-white/80' : 'text-slate-500'}`}>
                            <span className={isTransparent ? 'text-white/40' : 'text-slate-400'}>Contact:</span>
                            <div className="flex space-x-6">
                                <a href="https://msit.techtron.net/" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isTransparent ? 'hover:text-white' : 'hover:text-[#1e4a9b]'}`}>Student Portal</a>
                                <Link to="/faculty" className={`transition-colors ${isTransparent ? 'hover:text-white' : 'hover:text-[#1e4a9b]'}`}>Faculty Directory</Link>
                                <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isTransparent ? 'hover:text-white' : 'hover:text-[#1e4a9b]'}`}>Campus Mail</a>
                            </div>
                            <div className={`w-px h-3 mx-2 ${isTransparent ? 'bg-white/20' : 'bg-slate-200'}`}></div>
                            <button onClick={toggleSearch} className={`flex items-center gap-2 transition-colors ${isTransparent ? 'hover:text-white' : 'hover:text-[#1e4a9b]'}`} aria-label="Search">
                                <Search className="w-4 h-4" /> <span>Search</span>
                            </button>
                        </div>

                        <div className="xl:hidden flex items-center gap-3 shrink-0">
                            <button onClick={toggleSearch} className={`p-2 transition-colors ${isTransparent ? 'text-white' : 'text-slate-700'}`}>
                                <Search className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="w-10 h-10 relative focus:outline-none flex justify-center items-center group cursor-pointer"
                                aria-label="Toggle Menu"
                            >
                                <span className={`block w-6 h-[2px] rounded-full absolute transition-all duration-300 ease-in-out ${isTransparent ? 'bg-white' : 'bg-slate-900'} ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
                                <span className={`block w-6 h-[2px] rounded-full absolute transition-all duration-300 ease-in-out ${isTransparent ? 'bg-white' : 'bg-slate-900'} ${isMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`}></span>
                                <span className={`block w-6 h-[2px] rounded-full absolute transition-all duration-300 ease-in-out ${isTransparent ? 'bg-white' : 'bg-slate-900'} ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
                            </button>
                        </div>
                    </div>
                </div>

                <div 
                    className={`transition-all duration-300 px-4 lg:px-6 xl:px-12 border-b transition-all duration-300 ${
                        isTransparent 
                            ? 'bg-transparent border-transparent py-3' 
                            : 'bg-white shadow-md border-slate-100 py-1.5'
                    }`}
                >
                    <div className="w-full max-w-[1536px] mx-auto">
                        <nav className="hidden xl:flex justify-center items-center space-x-10 text-[14px]">
                            {['About', 'Admission & Aid', 'Academics', 'Life at MSIT', 'Placements', 'Student Portal'].map((item, idx) => {
                                const key = item.split(' ')[0].toLowerCase();
                                return (
                                    <div
                                        key={idx}
                                        className="relative group px-1 py-1 shrink-0"
                                        onMouseEnter={() => setActiveDropdown(key)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <button className={`flex items-center gap-1.5 font-bold uppercase tracking-wider transition-colors whitespace-nowrap ${isTransparent ? 'text-white hover:text-blue-200' : 'text-slate-800 hover:text-[#1e4a9b]'}`}>
                                            {item}
                                            <ChevronDown className={`w-3.5 h-3.5 transition-all duration-300 shrink-0 ${isTransparent ? 'text-white/60' : 'text-slate-400'}`} />
                                        </button>

                                        <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-4 cursor-default transition-all duration-300 origin-top pointer-events-auto ${activeDropdown === key ? 'opacity-100 scale-100 translate-y-0 visible text-left' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
                                            <div className="bg-white shadow-2xl rounded-xl border border-slate-100 p-8 w-[550px]">
                                                <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                                                    {megaMenuData[key]?.map((link, i) => (
                                                        link.external ? (
                                                            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" onClick={() => setActiveDropdown(null)} className="text-[13px] font-medium text-slate-600 hover:text-[#1e4a9b] hover:underline underline-offset-4 flex items-center group/link">
                                                                {link.name}
                                                                <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all shrink-0" />
                                                            </a>
                                                        ) : (
                                                            <Link key={i} to={link.url} onClick={() => setActiveDropdown(null)} className="text-[13px] font-medium text-slate-600 hover:text-[#1e4a9b] hover:underline underline-offset-4 flex items-center group/link">
                                                                {link.name}
                                                                <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all shrink-0" />
                                                            </Link>
                                                        )
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            <Link to="/contact" className={`font-bold uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 ${isTransparent ? 'text-white hover:text-blue-200' : 'text-slate-800 hover:text-[#1e4a9b]'}`}>Contact</Link>
                        </nav>
                    </div>
                </div>
            </header>


            {/* Mobile Nav Overlay (Smooth Sliding Drawer) */}
            <div className={`fixed inset-0 z-50 bg-white overflow-y-auto block xl:hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] pt-24 pb-12 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
                <div className="p-6 sm:p-8 flex flex-col space-y-4 max-w-lg mx-auto">
                    {Object.entries(megaMenuData).map(([key, items], idx) => (
                        <div key={idx} className="border-b border-slate-50 py-2">
                            <div className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3 mt-4 px-2">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                            <div className="space-y-1">
                                {items.map((link, i) => (
                                    link.external ? (
                                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="block w-full text-left py-2 px-4 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
                                            {link.name}
                                        </a>
                                    ) : (
                                        <Link key={i} to={link.url} onClick={() => setIsMenuOpen(false)} className="block w-full text-left py-2 px-4 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
                                            {link.name}
                                        </Link>
                                    )
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="pt-10 space-y-4 pb-20">
                        <button className="w-full py-5 text-center rounded-2xl bg-slate-900 text-white font-bold text-lg shadow-xl hover:bg-slate-800 transition-all active:scale-95 cursor-pointer">Apply Now</button>
                        <button className="w-full py-5 text-center rounded-2xl border-2 border-slate-200 text-slate-700 font-bold text-lg hover:bg-slate-50 transition-all active:scale-95 cursor-pointer">Visit Campus</button>
                    </div>
                </div>
            </div>

            {/* Search Modal */}
            {searchOpen && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-start justify-center pt-24 px-4 animate-fade-in" onClick={toggleSearch}>
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden animate-slide-up relative" onClick={(e) => e.stopPropagation()}>
                        <div className="p-6 border-b border-slate-100 flex items-center gap-4">
                            <Search className="w-6 h-6 text-slate-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => handleSearch(e.target.value)}
                                placeholder="Search faculty, departments, or ask a question..."
                                className="w-full text-xl font-light focus:outline-none text-slate-900 placeholder-slate-300 bg-transparent"
                                autoFocus
                            />
                            <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded bg-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                                <span className="px-1 italic">esc</span> to close
                            </div>
                        </div>

                        <div className="max-h-[60vh] overflow-y-auto p-4 custom-scrollbar">
                            {!searchQuery && (
                                <div className="p-4">
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 px-2">Quick Access</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {[
                                            { name: 'Admissions 2026', icon: <Hash size={14} />, url: '/brochure' },
                                            { name: 'Faculty Directory', icon: <User size={14} />, url: '/faculty' },
                                            { name: 'Academic Calendar', icon: <Book size={14} />, url: '/academic-calendar' },
                                            { name: 'Placements', icon: <TrendingUp size={14} />, url: '/placements' }
                                        ].map(item => (
                                            <Link key={item.name} to={item.url} onClick={toggleSearch} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 text-slate-600 transition-colors group">
                                                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                                    {item.icon}
                                                </div>
                                                <span className="text-sm font-medium">{item.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {searchQuery && (
                                <div className="space-y-6 p-2">
                                    {/* AI-Style Quick Answers */}
                                    {searchResults.qa.length > 0 && (
                                        <div>
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-3 px-2 flex items-center gap-2">
                                                <MessageSquare size={12} /> Quick Answer
                                            </h4>
                                            {searchResults.qa.map((qa, i) => (
                                                <div key={i} className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50 mb-2">
                                                    <p className="text-xs font-semibold text-blue-900 mb-1">Q: {qa.q}</p>
                                                    <p className="text-sm text-slate-700 leading-relaxed font-light">{qa.a}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Faculty Results */}
                                    {searchResults.faculty.length > 0 && (
                                        <div>
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 px-2">Faculty</h4>
                                            <div className="space-y-1">
                                                {searchResults.faculty.map((f, i) => (
                                                    <Link key={i} to={f.url} onClick={toggleSearch} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600">
                                                                <User size={18} />
                                                            </div>
                                                            <div>
                                                                <div className="text-sm font-semibold text-slate-900 leading-none mb-1">{f.name}</div>
                                                                <div className="text-xs text-slate-500">{f.role} • {f.dept}</div>
                                                            </div>
                                                        </div>
                                                        <ArrowRight size={14} className="text-slate-300 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Page Results */}
                                    {searchResults.pages.length > 0 && (
                                        <div>
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 px-2">Pages & Navigation</h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                                                {searchResults.pages.map((p, i) => (
                                                    <Link key={i} to={p.url} onClick={toggleSearch} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 text-slate-600 transition-colors group">
                                                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                                            <Hash size={14} />
                                                        </div>
                                                        <span className="text-sm font-medium">{p.title}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {searchResults.faculty.length === 0 && searchResults.pages.length === 0 && searchResults.qa.length === 0 && (
                                        <div className="text-center py-12">
                                            <Search className="w-12 h-12 text-slate-100 mx-auto mb-4" />
                                            <p className="text-slate-400 font-light italic">No results found for "{searchQuery}"</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex justify-center">
                             <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-4">
                                <span className="flex items-center gap-1.5"><HelpCircle size={12} className="text-blue-400"/> Ask anything about MSIT</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
