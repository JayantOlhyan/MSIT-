import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown, ChevronRight, ArrowRight, User, Book, Hash, HelpCircle, MessageSquare, TrendingUp, Sun, Moon, Bell } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { searchIndex } from '../data/searchIndex';
import { useAccessibility } from '../context/AccessibilityContext';

const Header = () => {
    const { settings, toggleDarkMode } = useAccessibility();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [openMobileSections, setOpenMobileSections] = useState({});
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState({ faculty: [], pages: [], qa: [], events: [] });
    const location = useLocation();
    const hoverTimeoutRef = React.useRef(null);

    const toggleMobileSection = (key) => {
        setOpenMobileSections(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const [openMobileSubs, setOpenMobileSubs] = useState({});
    const toggleMobileSub = (key) => {
        setOpenMobileSubs(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

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
        setSearchResults({ faculty: [], pages: [], qa: [], events: [] });
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
            f.role.toLowerCase().includes(lQuery) ||
            (f.keywords && f.keywords.includes(lQuery))
        );

        const pageMatches = searchIndex.pages.filter(p =>
            p.title.toLowerCase().includes(lQuery) ||
            p.keywords.toLowerCase().includes(lQuery)
        );

        const qaMatches = searchIndex.qa.filter(q =>
            q.q.toLowerCase().includes(lQuery) ||
            q.keywords.toLowerCase().includes(lQuery)
        );

        const eventMatches = searchIndex.events ? searchIndex.events.filter(e =>
            e.title.toLowerCase().includes(lQuery) ||
            e.label.toLowerCase().includes(lQuery) ||
            (e.category && e.category.toLowerCase().includes(lQuery)) ||
            (e.summary && e.summary.toLowerCase().includes(lQuery)) ||
            (e.keywords && e.keywords.toLowerCase().includes(lQuery))
        ) : [];

        setSearchResults({
            faculty: facultyMatches.slice(0, 3),
            pages: pageMatches.slice(0, 4),
            qa: qaMatches.slice(0, 2),
            events: eventMatches.slice(0, 3)
        });
    };

    const megaMenuData = {
        about: [
            { name: "About MSIT", url: "/about" },
            { name: "Vision & Mission", url: "/vision-mission" },
            { name: "History & Legacy", url: "/history" },
            { name: "Governing Body", url: "/govern" },
            { name: "From The Desk", url: "/fromdesk" },
            { name: "Campus & Facilities", url: "/facilities" },
            { name: "Library Portal", url: "http://library.msit.in/", external: true },
            { name: "Surajmal Memorial Education Society", url: "/smes" }
        ],
        admission: [
            { name: "Info Brochure", url: "/brochure" },
            { name: "Online Fee Payment", url: "/online-fee" },
            { name: "Scholarships", url: "/scholarships" },
            { name: "Mandatory Disclosures", url: "/mandatory-disclosures" }
        ],
        academics: [
            { 
                name: "B.Tech Programmes", 
                url: "#",
                subItems: [
                    { name: "Computer Science (CSE)", url: "/cse" },
                    { name: "Information Technology (IT)", url: "/it" },
                    { name: "Electronics & Comm. (ECE)", url: "/ece" },
                    { name: "Electrical Engineering (EEE)", url: "/eee" }
                ]
            },
            { name: "Applied Sciences", url: "/applied-sciences" },
            { name: "Academic Calendar", url: "/academic-calendar" },
            { name: "Time Table & Syllabus", url: "/timetable" },
            { name: "Research & Innovation", url: "/research" }
        ],
        life: [
            { name: "Student Societies", url: "/society" },
            { name: "Events & Festivals", url: "/events" },
            { name: "Newsletters & Magazines", url: "/newsletters-magazines" },
            { name: "Anti-Ragging", url: "/antiragging" },
            { name: "Disaster Management", url: "/disaster" },
            { name: "Discipline Committee", url: "/discipline" },
            { name: "Student Grievance Cell", url: "/student-grievance" }
        ],
        placements: [
            { name: "Careers & Placements", url: "/placements" },
            { name: "Internship Cell", url: "/internship-cell" },
            { name: "Placement Portal", url: "https://placement.msit.in/", external: true }
        ],
        student: [
            { name: "Student Login Portal", url: "https://examweb.ggsipu.ac.in/web/login.jsp", external: true },
            { name: "Moodle (LMS)", url: "http://moodle.msit.in/", external: true },
            { name: "NISP (Startup & Innovation)", url: "http://nisp.msit.in/", external: true },
            { name: "NPTEL Videos", url: "http://nptel.ac.in/", external: true },
            { name: "Student Grievance Cell (SGRC)", url: "/student-grievance" },
            { name: "Higher Studies Form", url: "https://docs.google.com/forms/d/e/1FAIpQLSfQa8YcM9Pq4kN10V8TJ_KDw8cdGphCi6b6QNw66bWfm7RkvQ/viewform?usp=sf_link", external: true },
            { name: "Attendance Rules", url: "/attendance" }
        ]
    };

    const isHomePage = location.pathname === '/';
    const isTransparent = isHomePage && !isScrolled && !isMenuOpen;

    const headerContainerClass = isHomePage
        ? `fixed top-0 left-0 w-full z-[60] transition-colors duration-300 ${isTransparent ? 'bg-transparent' : 'bg-white dark:bg-[#070b16]/95 dark:border-b dark:border-white/10 shadow-card py-1'}`
        : `sticky top-0 z-[60] w-full transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white dark:bg-[#070b16]/95 dark:border-b dark:border-white/10 shadow-card py-1' : 'bg-white/95 dark:bg-[#070b16]/90 backdrop-blur-md dark:border-b dark:border-white/10 py-2'}`;

    const isPathActive = (path) => location.pathname === path;
    const isCategoryActive = (categoryKey) => {
        return megaMenuData[categoryKey]?.some(link => 
            isPathActive(link.url) || (link.subItems && link.subItems.some(sub => isPathActive(sub.url)))
        );
    };

    const handleMouseEnter = (key) => {
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = setTimeout(() => {
            setActiveDropdown(key);
        }, 200);
    };

    const handleMouseLeave = () => {
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 150);
    };

    return (
        <>
            <a href="#main-content" className="skip-link sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 bg-white text-blue-600 p-2 rounded z-[100]">Skip to main content</a>
            <header role="navigation" className={`${headerContainerClass} flex flex-col`}>
                {/* Tier 1: Persistent Branding & Utility Bar (Transparent on Home, White on Scroll) */}
                <div className={`transition-all duration-300 py-3 px-4 lg:px-6 xl:px-12 relative z-20 ${isTransparent
                        ? 'bg-transparent'
                        : 'bg-white dark:bg-[#070b16] text-title dark:text-white'
                    }`}>
                    <div className="w-full max-w-screen-2xl mx-auto flex justify-between items-center">
                        {/* Logo Area */}
                        <Link to="/" className="flex items-center gap-3 lg:gap-4 cursor-pointer select-none">
                            <img
                                id="header-logo"
                                src="/msit-logo.webp"
                                alt="Maharaja Surajmal Institute of Technology (MSIT) Official Logo - Main Campus Entrance"
                                className={`h-10 md:h-12 lg:h-14 w-auto object-contain shrink-0 transition-all duration-300 ${isTransparent ? 'brightness-[1.2]' : ''}`}
                                loading="eager"
                                fetchpriority="high"
                                decoding="async"
                                width="120"
                                height="112"
                            />
                            <div className="flex flex-col justify-center">
                                <span className={`font-['Libre_Baskerville',serif] font-black text-sm md:text-base lg:text-xl tracking-tight leading-tight transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-primary dark:text-blue-400'}`}>
                                    <span className="hidden sm:inline text-balance">Maharaja Surajmal Institute of Technology</span>
                                    <span className="sm:hidden text-base font-black">MSIT Delhi</span>
                                </span>
                            </div>
                        </Link>

                        <div className={`hidden xl:flex items-center space-x-6 text-xs font-black uppercase tracking-[0.2em] transition-colors duration-300 ${isTransparent ? 'text-white/80' : 'text-muted dark:text-slate-300'}`}>
                            <div className="flex items-center space-x-6">
                                <Link to="/faculty" className={`transition-colors ${isTransparent ? 'hover:text-white' : 'hover:text-primary dark:hover:text-blue-400'}`}>Faculty Directory</Link>
                                <Link to="/virtual-tour" className={`transition-colors ${isTransparent ? 'hover:text-white' : 'hover:text-primary dark:hover:text-blue-400'}`}>Campus Tour</Link>
                                <a
                                    href="https://ipu.admissions.nic.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${isTransparent
                                            ? 'bg-white text-primary hover:bg-blue-50 hover:scale-105 active:scale-95'
                                            : 'bg-primary text-white hover:bg-[#153a7a] hover:scale-105 active:scale-95 shadow-md shadow-blue-900/10'
                                        }`}
                                >
                                    Apply Now
                                </a>
                            </div>
                            <div className={`w-px h-3 mx-2 ${isTransparent ? 'bg-white/20' : 'bg-slate-200 dark:bg-white/10'}`}></div>
                            
                            {/* Theme Toggle Button */}
                            <button
                                onClick={toggleDarkMode}
                                className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${
                                    isTransparent
                                        ? 'text-white/80 hover:text-white hover:bg-white/10'
                                        : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                                }`}
                                aria-label={settings.darkMode ? "Switch to light mode" : "Switch to dark mode"}
                                title={settings.darkMode ? "Switch to light mode" : "Switch to dark mode"}
                            >
                                {settings.darkMode ? (
                                    <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
                                ) : (
                                    <Moon className="w-4 h-4 text-slate-700 hover:-rotate-12 transition-transform" />
                                )}
                            </button>

                            <button onClick={toggleSearch} className={`flex items-center gap-2 transition-colors ${isTransparent ? 'hover:text-white' : 'hover:text-primary dark:hover:text-blue-400'}`} aria-label="Search (Ctrl + K)">
                                <Search className="w-4 h-4" /> <span>Search</span>
                            </button>
                        </div>

                        <div className="xl:hidden flex items-center gap-2 shrink-0">
                            {/* Mobile Theme Toggle Button */}
                            <button
                                onClick={toggleDarkMode}
                                className={`p-2 transition-colors rounded-full cursor-pointer ${isTransparent ? 'text-white' : 'text-slate-700 dark:text-slate-200'}`}
                                aria-label={settings.darkMode ? "Switch to light mode" : "Switch to dark mode"}
                                title={settings.darkMode ? "Switch to light mode" : "Switch to dark mode"}
                            >
                                {settings.darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
                            </button>

                            <button onClick={toggleSearch} className={`p-2 transition-colors ${isTransparent ? 'text-white' : 'text-slate-700 dark:text-slate-200'}`} aria-label="Open global search overlay (Ctrl + K)">
                                <Search className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="w-10 h-10 relative focus:outline-none flex justify-center items-center group cursor-pointer"
                                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                            >
                                <span className={`block w-6 h-0.5 rounded-full absolute transition-all duration-300 ease-in-out ${isTransparent ? 'bg-white' : 'bg-slate-900 dark:bg-white'} ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
                                <span className={`block w-6 h-0.5 rounded-full absolute transition-all duration-300 ease-in-out ${isTransparent ? 'bg-white' : 'bg-slate-900 dark:bg-white'} ${isMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`}></span>
                                <span className={`block w-6 h-0.5 rounded-full absolute transition-all duration-300 ease-in-out ${isTransparent ? 'bg-white' : 'bg-slate-900 dark:bg-white'} ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={`transition-all duration-300 px-4 lg:px-6 xl:px-12 ${isTransparent
                            ? 'bg-transparent py-3'
                            : 'bg-white dark:bg-[#090e1c] py-1.5'
                        }`}
                >
                    <div className="w-full max-w-screen-2xl mx-auto">
                        <nav className="hidden xl:flex justify-center items-center space-x-10 text-sm">
                            {['About', 'Admission & Aid', 'Academics', 'Life at MSIT', 'Placements', 'Student Portal'].map((item, idx) => {
                                const key = item.split(' ')[0].toLowerCase();
                                return (
                                    <div
                                        key={idx}
                                        className="relative group px-1 py-1 shrink-0"
                                        onMouseEnter={() => handleMouseEnter(key)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <button className={`flex items-center gap-1.5 font-bold uppercase tracking-wider transition-colors whitespace-nowrap relative py-1 ${isCategoryActive(key)
                                                ? (isTransparent ? 'text-white' : 'text-primary')
                                                : (isTransparent ? 'text-white hover:text-blue-200' : 'text-title hover:text-primary')
                                            }`}>
                                            {item}
                                            <ChevronDown className={`w-3.5 h-3.5 transition-all duration-300 shrink-0 ${isCategoryActive(key) ? (isTransparent ? 'text-white' : 'text-primary') : (isTransparent ? 'text-white/60' : 'text-slate-400')}`} />
                                        </button>

                                        <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-4 cursor-default transition-all duration-300 origin-top pointer-events-auto ${activeDropdown === key ? 'opacity-100 scale-100 translate-y-0 visible text-left' : 'opacity-0 scale-95 -translate-y-2 invisible'
                                            }`}>
                                            <div className="bg-white dark:bg-[#131c31] shadow-card rounded-xl border border-slate-100 dark:border-white/10 p-6 w-80">
                                                <div className="flex flex-col space-y-3.5">
                                                     {megaMenuData[key]?.map((link, i) => {
                                                         if (link.subItems) {
                                                             const isAnySubActive = link.subItems.some(sub => isPathActive(sub.url));
                                                             return (
                                                                 <div key={i} className="group/sub w-full py-1 flex flex-col">
                                                                     <div className="flex items-center justify-between w-full py-1 cursor-pointer text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 transition-colors">
                                                                         <span className={isAnySubActive ? 'text-primary dark:text-blue-400 font-bold' : 'font-semibold text-sm'}>{link.name}</span>
                                                                         <ChevronDown className={`w-4 h-4 text-slate-400 group-hover/sub:text-primary dark:group-hover/sub:text-blue-400 transition-transform duration-300 delay-200 group-hover/sub:rotate-180 ${isAnySubActive ? 'text-primary dark:text-blue-400' : ''}`} />
                                                                     </div>
                                                                     
                                                                     <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 delay-200 group-hover/sub:max-h-60 group-hover/sub:opacity-100 group-hover/sub:mt-1 group-hover/sub:mb-2 pl-4 border-l-2 border-slate-100/80 dark:border-white/10 flex flex-col space-y-2.5">
                                                                         {link.subItems.map((sub, j) => (
                                                                             <Link
                                                                                 key={j}
                                                                                 to={sub.url}
                                                                                 onClick={() => setActiveDropdown(null)}
                                                                                 className={`text-sm font-semibold transition-all flex items-center justify-between group/sublink py-1 ${isPathActive(sub.url) ? 'text-primary dark:text-blue-400 font-bold' : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-blue-400'}`}
                                                                             >
                                                                                 <span>{sub.name}</span>
                                                                                 <ArrowRight className={`w-3.5 h-3.5 transition-all shrink-0 text-primary dark:text-blue-400 ${isPathActive(sub.url) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover/sublink:opacity-100 group-hover/sublink:translate-x-0'}`} />
                                                                             </Link>
                                                                         ))}
                                                                     </div>
                                                                 </div>
                                                             );
                                                         }
                                                         return link.external ? (
                                                             <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" onClick={() => setActiveDropdown(null)} className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 transition-colors flex items-center justify-between group/link py-1">
                                                                 <span>{link.name}</span>
                                                                 <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all shrink-0 text-primary dark:text-blue-400" />
                                                             </a>
                                                         ) : (
                                                             <Link key={i} to={link.url} onClick={() => setActiveDropdown(null)} className={`text-sm font-semibold transition-all flex items-center justify-between group/link py-1 ${isPathActive(link.url) ? 'text-primary dark:text-blue-400 font-bold' : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-blue-400'
                                                                 }`}>
                                                                 <span>{link.name}</span>
                                                                 <ArrowRight className={`w-3.5 h-3.5 transition-all shrink-0 text-primary dark:text-blue-400 ${isPathActive(link.url) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0'}`} />
                                                             </Link>
                                                         );
                                                     })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            <Link to="/contact" className={`font-bold uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 relative py-1 ${isPathActive('/contact')
                                    ? (isTransparent ? 'text-white' : 'text-primary')
                                    : (isTransparent ? 'text-white hover:text-blue-200' : 'text-title hover:text-primary')
                                }`}>
                                Contact
                                {isPathActive('/contact') && (
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${isTransparent ? 'bg-white' : 'bg-primary'} animate-in fade-in slide-in-from-left-2 duration-500`}></span>
                                )}
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>


            {/* Mobile Nav Overlay (Smooth Sliding Drawer) */}
            <div className={`fixed inset-0 z-50 bg-white dark:bg-[#0a0f1d] text-slate-900 dark:text-slate-100 overflow-y-auto scrollbar-hide block xl:hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] pt-24 pb-12 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
                <div className="p-6 sm:p-10 max-w-lg sm:max-w-4xl md:max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3 sm:gap-y-8">
                        {Object.entries(megaMenuData).map(([key, items], idx) => {
                            const isExpanded = openMobileSections[key];
                            return (
                                <div key={idx} className="border-b border-slate-100 dark:border-white/10 sm:border-none pb-2 sm:pb-0">
                                    <button
                                        onClick={() => toggleMobileSection(key)}
                                        className="w-full flex items-center justify-between text-xs font-black uppercase tracking-[0.25em] text-slate-900 dark:text-white border-b sm:border-b-0 border-slate-100 dark:border-white/10 pb-3 sm:pb-3 mb-2 sm:mb-4 px-2 text-left cursor-pointer sm:cursor-default"
                                    >
                                        <span>{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                        <ChevronDown className={`w-4 h-4 text-slate-500 dark:text-slate-400 transition-transform duration-300 sm:hidden ${isExpanded ? 'rotate-180 text-primary dark:text-blue-400' : ''}`} />
                                    </button>
                                    <div className={`space-y-1 transition-all duration-300 overflow-hidden sm:max-h-none sm:opacity-100 sm:block ${isExpanded ? 'max-h-[600px] opacity-100 mb-3' : 'max-h-0 opacity-0 sm:max-h-none sm:opacity-100'
                                        }`}>
                                         {items.map((link, i) => {
                                             if (link.subItems) {
                                                 const isAnySubActive = link.subItems.some(sub => isPathActive(sub.url));
                                                 return (
                                                     <div key={i} className="w-full">
                                                         <button
                                                             onClick={() => toggleMobileSub(link.name)}
                                                             className={`w-full flex items-center justify-between py-2 px-4 text-base font-semibold rounded-xl transition-colors cursor-pointer text-left ${isAnySubActive ? 'bg-blue-50/40 dark:bg-blue-500/20 text-primary dark:text-blue-400 font-bold' : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'}`}
                                                         >
                                                             <span>{link.name}</span>
                                                             <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${openMobileSubs[link.name] ? 'rotate-180 text-primary dark:text-blue-400' : ''}`} />
                                                         </button>
                                                         <div className={`pl-4 space-y-1 overflow-hidden transition-all duration-300 ${openMobileSubs[link.name] ? 'max-h-[300px] opacity-100 my-1' : 'max-h-0 opacity-0'}`}>
                                                             {link.subItems.map((sub, j) => (
                                                                 <Link
                                                                     key={j}
                                                                     to={sub.url}
                                                                     onClick={() => setIsMenuOpen(false)}
                                                                     className={`block w-full text-left py-2 px-4 text-sm transition-colors rounded-xl ${isPathActive(sub.url) ? 'bg-blue-50/80 dark:bg-blue-500/20 text-primary dark:text-blue-400 font-bold border-l-4 border-primary' : 'font-semibold text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'}`}
                                                                 >
                                                                     {sub.name}
                                                                 </Link>
                                                             ))}
                                                         </div>
                                                     </div>
                                                 );
                                             }
                                             return link.external ? (
                                                 <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="block w-full text-left py-2 px-4 text-base font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 rounded-xl transition-colors">
                                                     {link.name}
                                                 </a>
                                             ) : (
                                                 <Link key={i} to={link.url} onClick={() => setIsMenuOpen(false)} className={`block w-full text-left py-2 px-4 text-base transition-colors rounded-xl ${isPathActive(link.url) ? 'bg-blue-50 dark:bg-blue-500/20 text-primary dark:text-blue-400 font-bold border-l-4 border-primary' : 'font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                                                     }`}>
                                                     {link.name}
                                                 </Link>
                                             );
                                         })}
                                     </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom Area with Contact Links & Action Buttons */}
                    <div className="pt-8 mt-6 border-t border-slate-100 dark:border-white/10 pb-20">
                        {/* Contact Section */}
                        <div className="mb-6">
                            <div className="text-xs font-black uppercase tracking-[0.25em] text-slate-900 dark:text-white pb-3 mb-2 px-2">Contact</div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
                                <Link to="/faculty" onClick={() => setIsMenuOpen(false)} className="block w-full text-left py-2 px-4 text-base font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 rounded-xl transition-colors">
                                    Faculty Directory
                                </Link>
                                <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="block w-full text-left py-2 px-4 text-base font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 rounded-xl transition-colors">
                                    Campus Mail
                                </a>
                                <a href="tel:+911165215941" onClick={() => setIsMenuOpen(false)} className="block w-full text-left py-2 px-4 text-base font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 rounded-xl transition-colors">
                                    Reception: +91 11 6521 5941
                                </a>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <a
                                href="https://ipu.admissions.nic.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-4 text-center rounded-2xl bg-slate-900 dark:bg-primary dark:hover:bg-blue-600 text-white font-bold text-base shadow-card hover:bg-slate-800 transition-all active:scale-95 cursor-pointer"
                            >
                                Apply Now
                            </a>
                            <Link to="/virtual-tour" onClick={() => setIsMenuOpen(false)} className="w-full py-4 text-center rounded-2xl border-2 border-slate-200 dark:border-white/20 text-slate-700 dark:text-slate-200 font-bold text-base hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95 cursor-pointer block">Visit Campus</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search Modal */}
            {searchOpen && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4 animate-fade-in" onClick={toggleSearch}>
                    <div className="bg-white dark:bg-[#131c31] rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl w-full max-w-3xl overflow-hidden animate-slide-up relative border border-slate-100 dark:border-white/10" onClick={(e) => e.stopPropagation()}>
                        
                        {/* Search Input Bar */}
                        <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-white/10 flex items-center gap-4 bg-white dark:bg-[#131c31] relative z-10">
                            <div className="w-10 h-10 rounded-xl bg-blue-50/80 dark:bg-blue-500/20 flex items-center justify-center text-primary dark:text-blue-400 shrink-0">
                                <Search className="w-5 h-5" />
                            </div>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => handleSearch(e.target.value)}
                                placeholder="Search faculty, departments, courses, or fees..."
                                className="w-full text-lg sm:text-xl font-normal focus:outline-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 bg-transparent"
                                autoFocus
                            />
                            {searchQuery && (
                                <button 
                                    onClick={() => handleSearch('')}
                                    className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors shrink-0"
                                    aria-label="Clear query"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            )}
                            <button
                                onClick={toggleSearch}
                                className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white flex items-center justify-center transition-all shrink-0 cursor-pointer"
                                aria-label="Close search modal"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Popular Suggestion Chips */}
                        <div className="px-6 py-3 bg-slate-50/60 dark:bg-[#0e1629] border-b border-slate-100 dark:border-white/10 flex items-center gap-2 overflow-x-auto scrollbar-hide text-xs font-semibold">
                            <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px] shrink-0 mr-1">Try Searching:</span>
                            {[
                                { label: '👨‍🏫 Faculty Directory', query: 'Faculty' },
                                { label: '💻 Computer Science', query: 'CSE' },
                                { label: '💼 Placements', query: 'Placements' },
                                { label: '📅 Academic Calendar', query: 'Calendar' },
                                { label: '📜 Syllabus Index', query: 'Syllabus' },
                                { label: '💳 Online Fee', query: 'Fee' }
                            ].map((tag, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleSearch(tag.query)}
                                    className="px-3 py-1.5 rounded-full bg-white dark:bg-[#1a253e] border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-blue-900/30 transition-all whitespace-nowrap shadow-2xs shrink-0 cursor-pointer"
                                >
                                    {tag.label}
                                </button>
                            ))}
                        </div>

                        <div className="max-h-[60vh] overflow-y-auto p-5 sm:p-6 scrollbar-hide">
                            {!searchQuery && (
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between px-1 mb-2">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                            <TrendingUp size={14} className="text-blue-500" /> Quick Access
                                        </h4>
                                        <span className="text-[11px] font-bold text-slate-400">Popular Portals</span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {[
                                            { name: 'Faculty & Staff Directory', desc: '125+ Expert Professors & HODs', icon: <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />, bg: 'bg-blue-50 dark:bg-blue-500/10', url: '/faculty' },
                                            { name: 'Admissions 2026', desc: 'Information Bulletin & Seat Matrix', icon: <Hash className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />, bg: 'bg-emerald-50 dark:bg-emerald-500/10', url: '/brochure' },
                                            { name: 'Placements Overview', desc: 'Recruiters, Salary Records & LPA', icon: <TrendingUp className="w-5 h-5 text-rose-600 dark:text-rose-400" />, bg: 'bg-rose-50 dark:bg-rose-500/10', url: '/placements' },
                                            { name: 'Academic Calendar', desc: 'Schedules, Exam Dates & Holidays', icon: <Book className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />, bg: 'bg-indigo-50 dark:bg-indigo-500/10', url: '/academic-calendar' },
                                            { name: 'Online Fee Payment', desc: 'Pay Tuition Fees Securely Online', icon: <HelpCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />, bg: 'bg-purple-50 dark:bg-purple-500/10', url: '/online-fee' },
                                            { name: 'Campus Virtual Tour', desc: 'Explore MSIT Campus 3D Layout', icon: <Search className="w-5 h-5 text-amber-600 dark:text-amber-400" />, bg: 'bg-amber-50 dark:bg-amber-500/10', url: '/virtual-tour' }
                                        ].map(item => (
                                            <Link 
                                                key={item.name} 
                                                to={item.url} 
                                                onClick={toggleSearch} 
                                                className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-[#182238] border border-slate-200/70 dark:border-white/10 hover:border-blue-300 dark:hover:border-blue-500/50 hover:shadow-card hover:bg-blue-50/30 dark:hover:bg-slate-800/80 transition-all duration-300 group cursor-pointer"
                                            >                      >
                                                <div className="flex items-center gap-3.5 min-w-0">
                                                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.bg} group-hover:scale-105 transition-transform shrink-0 shadow-2xs`}>
                                                        {item.icon}
                                                    </div>
                                                    <div className="min-w-0">
                                                        <div className="text-sm font-bold text-slate-850 group-hover:text-primary transition-colors truncate">{item.name}</div>
                                                        <div className="text-xs text-slate-400 font-medium truncate">{item.desc}</div>
                                                    </div>
                                                </div>
                                                <ChevronRight size={16} className="text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {searchQuery && (
                                <div className="space-y-6">
                                    {/* AI-Style Quick Answers */}
                                    {searchResults.qa.length > 0 && (
                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 px-1 flex items-center gap-2">
                                                <MessageSquare size={14} className="text-blue-500" /> Quick Answer
                                            </h4>
                                            {searchResults.qa.map((qa, i) => (
                                                <div key={i} className="p-5 bg-gradient-to-r from-blue-50/80 to-indigo-50/50 dark:from-blue-950/50 dark:to-indigo-950/40 rounded-2xl border border-blue-100 dark:border-blue-500/20 shadow-2xs mb-3">
                                                    <p className="text-xs font-bold text-blue-950 dark:text-blue-300 mb-1.5 flex items-center gap-1.5">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                                                        {qa.q}
                                                    </p>
                                                    <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal">{qa.a}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Faculty Results */}
                                    {searchResults.faculty.length > 0 && (
                                        <div>
                                            <div className="flex items-center justify-between mb-3 px-1">
                                                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                                    <User size={14} className="text-slate-400" /> Faculty & Staff
                                                </h4>
                                                <span className="text-[11px] font-bold text-primary dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded-md">
                                                    {searchResults.faculty.length} found
                                                </span>
                                            </div>
                                            <div className="space-y-2">
                                                {searchResults.faculty.map((f, i) => (
                                                    <Link 
                                                        key={i} 
                                                        to={f.url} 
                                                        onClick={toggleSearch} 
                                                        className="flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-[#182238] border border-slate-100 dark:border-white/10 hover:border-blue-300 dark:hover:border-blue-500/50 hover:bg-blue-50/40 dark:hover:bg-slate-800/80 hover:shadow-card transition-all duration-300 group"
                                                    >
                                                        <div className="flex items-center gap-3.5">
                                                            <div className="w-11 h-11 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 shrink-0 group-hover:border-primary/40 transition-colors">
                                                                <img 
                                                                    src={f.img || '/faculty/staff-avatar.webp'} 
                                                                    alt={f.name} 
                                                                    className="w-full h-full object-cover" 
                                                                    onError={(e) => { e.target.onerror = null; e.target.src = '/faculty/staff-avatar.webp'; }}
                                                                />
                                                            </div>
                                                            <div>
                                                                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors leading-tight mb-0.5">{f.name}</div>
                                                                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                                                                    {f.role} • <span className="font-bold text-primary/80 dark:text-blue-400">{f.dept}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <ChevronRight size={16} className="text-slate-300 dark:text-slate-500 group-hover:text-primary dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0" />
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Page Results */}
                                    {searchResults.pages.length > 0 && (
                                        <div>
                                            <div className="flex items-center justify-between mb-3 px-1">
                                                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                                    <Hash size={14} className="text-slate-400" /> Pages & Navigation
                                                </h4>
                                                <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                                                    {searchResults.pages.length} matches
                                                </span>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                {searchResults.pages.map((p, i) => (
                                                    <Link 
                                                        key={i} 
                                                        to={p.url} 
                                                        onClick={toggleSearch} 
                                                        className="flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-[#182238] border border-slate-100 dark:border-white/10 hover:border-blue-300 dark:hover:border-blue-500/50 hover:bg-blue-50/40 dark:hover:bg-slate-800/80 hover:shadow-card text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-blue-400 transition-all duration-300 group"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors shrink-0">
                                                                <Hash size={14} />
                                                            </div>
                                                            <span className="text-sm font-bold truncate">{p.title}</span>
                                                        </div>
                                                        <ChevronRight size={14} className="text-slate-300 dark:text-slate-500 group-hover:text-primary dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0" />
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Categorized Events & Notices Results */}
                                    {searchResults.events && searchResults.events.length > 0 && (
                                        <div>
                                            <div className="flex items-center justify-between mb-3 px-1">
                                                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                                    <Bell size={14} className="text-amber-500" /> Notices, News & Updates
                                                </h4>
                                                <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-2 py-0.5 rounded-md">
                                                    {searchResults.events.length} found
                                                </span>
                                            </div>
                                            <div className="space-y-2">
                                                {searchResults.events.map((ev, i) => (
                                                    <Link 
                                                        key={i} 
                                                        to={ev.url} 
                                                        onClick={toggleSearch} 
                                                        className="flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-[#182238] border border-slate-100 dark:border-white/10 hover:border-blue-300 dark:hover:border-blue-500/50 hover:bg-blue-50/40 dark:hover:bg-slate-800/80 hover:shadow-card transition-all duration-300 group"
                                                    >
                                                        <div className="min-w-0 pr-3">
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                                                                    {ev.label}
                                                                </span>
                                                                <span className="text-[11px] text-slate-400 font-medium">{ev.date}</span>
                                                            </div>
                                                            <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors truncate">
                                                                {ev.title}
                                                            </div>
                                                        </div>
                                                        <ChevronRight size={16} className="text-slate-300 dark:text-slate-500 group-hover:text-primary dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0" />
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {searchResults.faculty.length === 0 && searchResults.pages.length === 0 && searchResults.qa.length === 0 && (!searchResults.events || searchResults.events.length === 0) && (
                                        <div className="text-center py-12 bg-slate-50/50 dark:bg-[#182238]/50 rounded-2xl border border-dashed border-slate-200 dark:border-white/10">
                                            <Search className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
                                            <h3 className="text-base font-bold text-slate-800 dark:text-white mb-1">No matches found</h3>
                                            <p className="text-slate-400 dark:text-slate-400 text-xs font-normal max-w-sm mx-auto">We couldn't find anything matching "{searchQuery}". Check for typos or try searching a department like 'CSE' or 'Placements'.</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Footer Bar */}
                        <div className="p-4 bg-slate-50/80 dark:bg-[#0c1322] border-t border-slate-100 dark:border-white/10 flex items-center justify-between px-6 text-xs text-slate-500 dark:text-slate-400">
                            <div className="flex items-center gap-2 font-medium">
                                <HelpCircle size={14} className="text-blue-500 dark:text-blue-400" />
                                <span>Searching <strong>125+ Faculty</strong> &amp; <strong>37+ Pages</strong></span>
                            </div>
                            <Link 
                                to="/sitemap" 
                                onClick={toggleSearch} 
                                className="font-bold text-primary hover:underline flex items-center gap-1"
                            >
                                <span>Browse Full Sitemap</span>
                                <ChevronRight size={14} />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
