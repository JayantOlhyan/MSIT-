import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [searchOpen, setSearchOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleSearch = () => setSearchOpen(!searchOpen);

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
            { name: "Applied Sciences", url: "/ap" },
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

    return (
        <>
            {/* =========================================
              SECTION 1: TOP UTILITY BAR 
              ========================================= */}
            <div className="bg-slate-900 text-slate-300 text-xs py-2 px-6 flex justify-between items-center z-50 relative">
                <div className="flex space-x-6 overflow-x-auto whitespace-nowrap hide-scrollbar">
                    <a href="https://msit.techtron.net/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 uppercase tracking-widest font-medium">Current Students</a>
                    <Link to="/administration" className="hover:text-white transition-colors duration-300 uppercase tracking-widest font-medium hidden sm:block">Faculty & Staff</Link>
                    <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 uppercase tracking-widest font-medium hidden sm:block">Campus Mail</a>
                    <a href="http://grievance.msit.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 uppercase tracking-widest font-medium hidden md:block">Grievances</a>
                </div>
                <div className="flex space-x-3 shrink-0">
                    <Link to="/facilities" className="px-4 py-1.5 border border-slate-600 rounded text-white hover:bg-slate-800 transition-colors hidden sm:block">Visit Campus</Link>
                    <Link to="/brochure" className="px-4 py-1.5 bg-white text-slate-900 rounded font-semibold hover:bg-slate-100 transition-colors">Apply Now</Link>
                </div>
            </div>

            {/* =========================================
              SECTION 2: MAIN HEADER / NAVIGATION
              ========================================= */}
            <header
                className={`sticky top-0 z-40 transition-all duration-300 w-full ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-5'
                    }`}
            >
                <div className="max-w-[1536px] mx-auto px-4 lg:px-8 xl:px-12 flex justify-between items-center">

                    {/* Logo Area */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2 xl:gap-3 cursor-pointer select-none me-auto pr-4 lg:pr-8 max-w-[50%] md:max-w-none">
                        <img src="/msit-logo.png" alt="MSIT Logo" className="h-10 md:h-12 lg:h-16 xl:h-[72px] w-auto object-contain shrink-0 drop-shadow-sm" />
                        <div className="flex flex-col justify-center transform lg:-translate-y-0.5 font-sans">
                            <span className="font-bold text-[13px] md:text-xl lg:text-[22px] xl:text-[25px] text-[#1e4a9b] tracking-tight leading-none mb-0.5 md:mb-1 whitespace-nowrap">
                                Maharaja Surajmal Institute of Technology
                            </span>
                            <span className="hidden md:block text-[8px] lg:text-[9.5px] xl:text-[10px] font-semibold tracking-wide text-[#f05023] leading-tight whitespace-nowrap">
                                Affiliated to GGSIPU | NAAC Accredited 'A' Grade | NBA (CSE, IT, ECE, EEE)
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 shrink-0 text-[13px] xl:text-[14px]">
                        {['About', 'Admission & Aid', 'Academics', 'Life at MSIT', 'Placements', 'Student Portal'].map((item, idx) => {
                            const key = item.split(' ')[0].toLowerCase();
                            return (
                                <div
                                    key={idx}
                                    className="relative group px-1.5 xl:px-3 py-2 shrink-0"
                                    onMouseEnter={() => setActiveDropdown(key)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <button className="flex items-center gap-1.5 font-medium text-slate-700 group-hover:text-slate-900 transition-colors whitespace-nowrap">
                                        {item}
                                        <ChevronDown className="w-3 h-3 text-slate-400 group-hover:text-slate-900 group-hover:-rotate-180 transition-all duration-300 shrink-0" />
                                    </button>

                                    {/* Mega Menu Dropdown */}
                                    <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white shadow-2xl rounded-2xl border border-slate-100 p-8 w-[500px] transition-all duration-300 origin-top pointer-events-auto ${activeDropdown === key ? 'opacity-100 scale-100 translate-y-0 visible text-left' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
                                        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                            {megaMenuData[key]?.map((link, i) => (
                                                link.external ? (
                                                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" onClick={() => setActiveDropdown(null)} className="text-sm text-slate-600 hover:text-slate-900 hover:underline underline-offset-4 flex items-center group/link">
                                                        {link.name}
                                                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all shrink-0" />
                                                    </a>
                                                ) : (
                                                    <Link key={i} to={link.url} onClick={() => setActiveDropdown(null)} className="text-sm text-slate-600 hover:text-slate-900 hover:underline underline-offset-4 flex items-center group/link">
                                                        {link.name}
                                                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all shrink-0" />
                                                    </Link>
                                                )
                                            ))}
                                        </div>
                                        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                                            <div className="text-sm font-semibold text-slate-900">Explore all in {item}</div>
                                            <a href="https://www.msit.in/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center hover:bg-slate-100 cursor-pointer shrink-0">
                                                <ArrowRight className="w-4 h-4 text-slate-900" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        <a href="#" className="px-1.5 xl:px-3 py-2 font-medium text-slate-700 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Contact</a>

                        <div className="w-px h-5 bg-slate-200 mx-1 xl:mx-2 shrink-0"></div>

                        <button onClick={toggleSearch} className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all shrink-0" aria-label="Search">
                            <Search className="w-4 h-4 xl:w-5 xl:h-5" />
                        </button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex items-center gap-4">
                        <button onClick={toggleSearch} className="p-2 text-slate-600 hover:text-slate-900">
                            <Search className="w-5 h-5" />
                        </button>
                        <button onClick={() => setIsMenuOpen(true)} className="p-2 text-slate-900 focus:outline-none">
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Nav Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 bg-white overflow-y-auto animate-fade-in block lg:hidden">
                    <div className="p-6 flex justify-between items-center border-b border-slate-100 bg-white sticky top-0">
                        <span className="font-bold text-2xl tracking-tight text-slate-900">MSIT Navigation</span>
                        <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-full bg-slate-100 text-slate-900">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="p-6 flex flex-col space-y-2">
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

                        <div className="pt-8 space-y-4 pb-12">
                            <button className="w-full py-4 text-center rounded-lg bg-slate-900 text-white font-medium text-lg shadow-md">Apply Now</button>
                            <button className="w-full py-4 text-center rounded-lg border-2 border-slate-200 text-slate-700 font-medium text-lg">Visit Campus</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Search Modal */}
            {searchOpen && (
                <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-start justify-center pt-24 px-4 animate-fade-in">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-6 md:p-8 animate-slide-up relative">
                        <button onClick={toggleSearch} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-all">
                            <X className="w-6 h-6" />
                        </button>

                        <form onSubmit={(e) => {
                            e.preventDefault();
                            const query = e.target.searchQuery.value;
                            if (query) {
                                window.location.href = `/search?q=${encodeURIComponent(query)}`;
                                toggleSearch();
                            }
                        }} className="flex items-center border-b-2 border-slate-900 pb-4 mt-4">
                            <button type="submit">
                                <Search className="w-8 h-8 text-slate-900 mr-4" />
                            </button>
                            <input
                                type="search"
                                name="searchQuery"
                                placeholder="What are you looking for?"
                                className="w-full text-2xl md:text-3xl font-light focus:ring-0 focus:outline-none border-none text-slate-900 placeholder-slate-300 bg-transparent"
                                autoFocus
                            />
                        </form>

                        <div className="mt-8">
                            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Quick Links</h4>
                            <div className="flex flex-wrap gap-2">
                                {['Admissions 2026', 'Faculty Directory', 'Academic Calendar', 'Placements', 'Campus Map'].map(term => (
                                    <Link
                                        key={term}
                                        to={`/search?q=${encodeURIComponent(term)}`}
                                        onClick={toggleSearch}
                                        className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm rounded-full cursor-pointer transition-colors"
                                    >
                                        {term}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
