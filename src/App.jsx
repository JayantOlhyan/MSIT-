import React, { useState, useEffect, useRef } from 'react';
import {
    Menu, X, Search, ChevronDown, ChevronRight, ArrowRight,
    Phone, Mail, MapPin, Users, Award, BookOpen, GraduationCap,
    Play, Facebook, Twitter, Instagram, Linkedin, Youtube,
    TrendingUp, Globe, Heart, Lightbulb, Target, Check, ExternalLink
} from 'lucide-react';

const App = () => {
    // --- State Hooks ---
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const [activeNewsTab, setActiveNewsTab] = useState('all');
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImage, setLightboxImage] = useState('');

    // --- Refs & Scroll Logic ---
    const heroRef = useRef(null);
    const [heroVisible, setHeroVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setHeroVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (heroRef.current) observer.observe(heroRef.current);
        return () => observer.disconnect();
    }, []);

    // --- Testimonial Carousel ---
    const testimonials = [
        {
            name: "Priya Sharma",
            year: "22",
            major: "Computer Science & Engineering",
            quote: "MSIT has shaped me into the professional I am today. The faculty mentorship, hands-on projects, and industry exposure prepared me exceptionally well for my career at Google. The connections I made here will last a lifetime.",
            company: "Google"
        },
        {
            name: "Rahul Verma",
            year: "23",
            major: "Information Technology",
            quote: "The rigorous academic environment at MSIT pushes you to be your absolute best. I was able to participate in cutting-edge research and hackathons that gave me the edge I needed for my role at Microsoft.",
            company: "Microsoft"
        },
        {
            name: "Ananya Iyer",
            year: "21",
            major: "Electronics & Communication",
            quote: "I never realized how much potential I had until I stepped foot on the MSIT campus. The professors saw something in me and nurtured my skills in chip design and embedded systems. I'm infinitely grateful.",
            company: "Apple"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    // --- Handlers ---
    const toggleSearch = () => setSearchOpen(!searchOpen);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    const openLightbox = (imageLabel) => {
        setLightboxImage(imageLabel);
        setLightboxOpen(true);
    };

    // --- Data ---
    const stats = [
        { icon: <Users size={40} className="mb-4 text-slate-800" />, value: "3,000+", label: "STUDENTS ENROLLED" },
        { icon: <Award size={40} className="mb-4 text-slate-800" />, value: "95%", label: "PLACEMENT RATE" },
        { icon: <GraduationCap size={40} className="mb-4 text-slate-800" />, value: "200+", label: "EXPERT FACULTY" },
        { icon: <TrendingUp size={40} className="mb-4 text-slate-800" />, value: "50+", label: "YEARS OF EXCELLENCE" }
    ];

    const departments = [
        {
            name: "Computer Science & Engineering",
            code: "CSE",
            students: 480,
            icon: "💻",
            desc: "Master software architecture, artificial intelligence, and scalable systems.",
            accredited: true
        },
        {
            name: "Information Technology",
            code: "IT",
            students: 240,
            icon: "🌐",
            desc: "Focus on network security, cloud infrastructure, and data analytics.",
            accredited: true
        },
        {
            name: "Electronics & Communication",
            code: "ECE",
            students: 180,
            icon: "📡",
            desc: "Pioneer the hardware of tomorrow with embedded systems and VLSI design.",
            accredited: true
        },
        {
            name: "Electrical & Electronics",
            code: "EEE",
            students: 120,
            icon: "⚡",
            desc: "Innovate sustainable power systems, control engineering, and robotics.",
            accredited: true
        }
    ];

    const megaMenuData = {
        about: [
            { name: "About MSIT", url: "https://www.msit.in/about" },
            { name: "Vision & Mission", url: "https://www.msit.in/visionmission" },
            { name: "History & Legacy", url: "https://www.msit.in/history" },
            { name: "Leadership Team", url: "https://www.msit.in/administration" },
            { name: "Campus & Facilities", url: "https://www.msit.in/facilities" },
            { name: "Surajmal Memorial Education Society", url: "http://surajmalmemorialeducationsociety.org/" }
        ],
        admission: [
            { name: "Info Brochure", url: "https://www.msit.in/brochure" },
            { name: "Online Fee Payment", url: "https://www.msit.in/online_fee" },
            { name: "Scholarships", url: "https://www.msit.in/media/navigations/scholarships.pdf" },
            { name: "Mandatory Disclosures", url: "https://drive.google.com/drive/folders/1iCJGAK-_Y8yyAFabZyUJRj2l2kyGEHgy" }
        ],
        academics: [
            { name: "Computer Science (CSE)", url: "https://www.msit.in/cse" },
            { name: "Information Technology (IT)", url: "https://www.msit.in/it" },
            { name: "Electronics & Comm. (ECE)", url: "https://www.msit.in/ece" },
            { name: "Electrical Engineering (EEE)", url: "https://www.msit.in/eee" },
            { name: "Applied Sciences", url: "https://www.msit.in/ap" },
            { name: "Academic Calendar", url: "https://www.msit.in/academic-calendar" },
            { name: "Time Table & Syllabus", url: "https://www.msit.in/timetable" },
            { name: "Research & Innovation", url: "https://www.msit.in/Research" }
        ],
        life: [
            { name: "Student Societies", url: "https://www.msit.in/society" },
            { name: "Events & Festivals", url: "https://www.msit.in/events" },
            { name: "Anti-Ragging", url: "https://www.msit.in/antiragging" },
            { name: "Internal Complaint Committee", url: "https://www.msit.in/posh" },
            { name: "Disaster Management", url: "https://www.msit.in/disaster" },
            { name: "Discipline Committee", url: "https://www.msit.in/discipline" }
        ],
        placements: [
            { name: "Careers & Placements", url: "https://www.msit.in/placements" },
            { name: "Internship Cell", url: "https://www.msit.in/internship-cell" }
        ]
    };

    return (
        <div className="font-sans text-slate-700 w-full min-h-screen selection:bg-slate-200 selection:text-slate-900 bg-white">

            {/* =========================================
          SECTION 1: TOP UTILITY BAR 
          ========================================= */}
            <div className="bg-slate-900 text-slate-300 text-xs py-2 px-6 flex justify-between items-center z-50 relative">
                <div className="flex space-x-6 overflow-x-auto whitespace-nowrap hide-scrollbar">
                    <a href="https://www.msit.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 uppercase tracking-widest font-medium">Current Students</a>
                    <a href="https://www.msit.in/administration" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 uppercase tracking-widest font-medium hidden sm:block">Faculty & Staff</a>
                    <a href="https://gmail.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 uppercase tracking-widest font-medium hidden sm:block">Campus Mail</a>
                    <a href="http://grievance.msit.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 uppercase tracking-widest font-medium hidden md:block">Grievances</a>
                </div>
                <div className="flex space-x-3 shrink-0">
                    <button className="px-4 py-1.5 border border-slate-600 rounded text-white hover:bg-slate-800 transition-colors hidden sm:block">Visit Campus</button>
                    <button className="px-4 py-1.5 bg-white text-slate-900 rounded font-semibold hover:bg-slate-100 transition-colors">Apply Now</button>
                </div>
            </div>

            {/* =========================================
          SECTION 2: MAIN HEADER / NAVIGATION
          ========================================= */}
            <header
                className={`sticky top-0 z-40 transition-all duration-300 w-full ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                    {/* Logo Area */}
                    <div className="flex-shrink-0 flex items-center gap-3 desktop-logo-resize cursor-pointer mr-4">
                        <img src="/msit-logo.png" alt="MSIT Logo" className="h-12 md:h-16 lg:h-20 w-auto object-contain" />
                        <div className="flex flex-col justify-center">
                            <span className="font-bold text-lg md:text-2xl lg:text-[28px] text-[#1e4a9b] tracking-tight leading-none mb-1">
                                Maharaja Surajmal Institute of Technology
                            </span>
                            <span className="text-[8px] md:text-[10px] lg:text-[11px] font-medium text-[#f05023] leading-tight max-w-lg lg:max-w-3xl">
                                Affiliated to GGSIPU | NAAC Accredited 'A' Grade | NBA (CSE, IT, ECE,EEE) | Approved by AICTE | ISO 9001:2015 Certified
                            </span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {['About', 'Admission & Aid', 'Academics', 'Life at MSIT', 'Placements'].map((item, idx) => {
                            const key = item.split(' ')[0].toLowerCase();
                            return (
                                <div
                                    key={idx}
                                    className="relative group px-4 py-2"
                                    onMouseEnter={() => setActiveDropdown(key)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <button className="flex items-center gap-1.5 text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                                        {item}
                                        <ChevronDown className="w-3 h-3 text-slate-400 group-hover:text-slate-900 group-hover:-rotate-180 transition-all duration-300" />
                                    </button>

                                    {/* Mega Menu Dropdown */}
                                    <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white shadow-2xl rounded-2xl border border-slate-100 p-8 w-[500px] transition-all duration-300 origin-top pointer-events-auto ${activeDropdown === key ? 'opacity-100 scale-100 translate-y-0 visible text-left' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
                                        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                            {megaMenuData[key]?.map((link, i) => (
                                                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-slate-900 hover:underline underline-offset-4 flex items-center group/link">
                                                    {link.name}
                                                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                                                </a>
                                            ))}
                                        </div>
                                        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                                            <div className="text-sm font-semibold text-slate-900">Explore all in {item}</div>
                                            <a href="https://www.msit.in/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center hover:bg-slate-100 cursor-pointer">
                                                <ArrowRight className="w-4 h-4 text-slate-900" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        <a href="#" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">Contact</a>

                        <div className="w-px h-5 bg-slate-200 mx-2"></div>

                        <button onClick={toggleSearch} className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all" aria-label="Search">
                            <Search className="w-5 h-5" />
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
                                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="block w-full text-left py-2 px-4 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
                                            {link.name}
                                        </a>
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

                        <div className="flex items-center border-b-2 border-slate-900 pb-4 mt-4">
                            <Search className="w-8 h-8 text-slate-900 mr-4" />
                            <input
                                type="search"
                                placeholder="What are you looking for?"
                                className="w-full text-2xl md:text-3xl font-light focus:ring-0 focus:outline-none border-none text-slate-900 placeholder-slate-300 bg-transparent"
                                autoFocus
                            />
                        </div>

                        <div className="mt-8">
                            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Quick Links</h4>
                            <div className="flex flex-wrap gap-2">
                                {['Academic Calendar', 'Fees Structure', 'Placement Report 2024', 'Faculty Directory', 'Campus Map'].map(link => (
                                    <a key={link} href="#" className="px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-medium hover:bg-slate-200 hover:text-slate-900 transition-colors">
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* =========================================
          SECTION 3: HERO SECTION 
          ========================================= */}
            <section ref={heroRef} className="relative w-full h-screen min-h-[700px] flex items-center bg-slate-900 overflow-hidden">
                {/* Interactive Campus Background Image */}
                <div className="absolute inset-0 z-0 group overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transition-transform duration-[20s] ease-out hover:scale-110"
                        style={{ backgroundImage: "url('/campus-hero.jpg')" }}
                    ></div>
                    {/* Premium dark gradient overlays for maximum text readability and aesthetic */}
                    <div className="absolute inset-0 bg-slate-950/60 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-slate-900/40"></div>
                    {/* Grid pattern overlay for tech aesthetic */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHYxSDB6bTAgMHY0MGgxVjB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+Cjwvc3ZnPg==')] opacity-30"></div>
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 flex flex-col items-center sm:items-start text-center sm:text-left transition-all duration-1000 transform">

                    <div className={`mt-auto mb-6 opacity-0 translate-y-8 animate-[slideUp_1s_ease-out_0.2s_forwards] flex flex-wrap justify-center sm:justify-start gap-3`}>
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs font-semibold uppercase tracking-wider text-slate-300">
                            <Check className="w-3 h-3 mr-1.5 text-emerald-400" /> NAAC 'A' Grade
                        </span>
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs font-semibold uppercase tracking-wider text-slate-300">
                            <Award className="w-3 h-3 mr-1.5 pl-[1px]" /> NBA Accredited
                        </span>
                        <span className="hidden md:inline-flex items-center px-4 py-1.5 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs font-semibold uppercase tracking-wider text-slate-300">
                            50+ Years of Excellence
                        </span>
                    </div>

                    <h1 className={`text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-light tracking-tight text-white leading-[0.9] opacity-0 animate-[slideUp_1s_ease-out_0.4s_forwards]`}>
                        More Than <br />
                        <span className="font-semibold text-white">Ready.</span>
                    </h1>

                    <div className={`w-32 h-1 bg-white mt-10 mb-8 rounded-full opacity-0 animate-[slideUp_1s_ease-out_0.6s_forwards]`}></div>

                    <p className={`text-xl sm:text-2xl font-light text-slate-300 max-w-3xl leading-relaxed mb-12 opacity-0 animate-[slideUp_1s_ease-out_0.8s_forwards]`}>
                        Preparing tomorrow's engineers and innovators through uncompromising academic excellence, active industry collaboration, and transformative learning experiences.
                    </p>

                    <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto opacity-0 animate-[slideUp_1s_ease-out_1s_forwards]`}>
                        <button onClick={() => scrollToSection('programs')} className="px-10 py-5 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-white/10 flex items-center justify-center">
                            Explore Programs <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                        <button className="px-10 py-5 border-2 border-slate-500 text-white font-semibold rounded-lg hover:border-white hover:bg-white/5 transition-all duration-300 flex items-center justify-center">
                            Take Virtual Tour <Play className="w-5 h-5 ml-2" />
                        </button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 animate-pulse hover:opacity-100 cursor-pointer" onClick={() => scrollToSection('news')}>
                    <span className="text-[10px] uppercase tracking-widest text-white mb-2 font-medium">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
                </div>
            </section>

            {/* =========================================
          SECTION 4: ANNOUNCEMENT TICKER
          ========================================= */}
            <div className="bg-slate-100 border-b border-slate-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-6 flex items-center">
                    <div className="bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded mr-4 shrink-0">Alert</div>
                    <div className="text-sm font-medium text-slate-600 truncate flex-grow">
                        Admission for B.Tech lateral entry programs is now open. <a href="#" className="text-slate-900 underline underline-offset-2 ml-2 hover:text-slate-600 transition-colors">Apply before May 15.</a>
                    </div>
                </div>
            </div>

            {/* =========================================
          SECTION 5: NEWS, EVENTS & STORIES
          ========================================= */}
            <section id="news" className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight">News, Events, and Stories</h2>
                        </div>
                        <div className="flex gap-4">
                            {['all', 'news', 'events', 'stories'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveNewsTab(tab)}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeNewsTab === tab ? 'bg-slate-900 text-white shadow-md' : 'bg-transparent text-slate-600 hover:bg-slate-200'}`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { label: "NEWS", title: "MSIT receives $12M grant to establish cutting-edge AI & Quantum Labs", date: "MAR 02, 2026", color: "border-blue-600" },
                            { label: "EVENT", title: "Global Web3 & Blockchain Summit to be hosted at MSIT Campus", date: "FEB 28, 2026", color: "border-emerald-500" },
                            { label: "STORY", title: "From Campus to Cupertino: How 5 MSIT grads secured roles at Apple", date: "FEB 15, 2026", color: "border-purple-500" }
                        ].map((item, i) => (
                            <div key={i} className={`bg-white rounded-xl shadow-sm hover:shadow-xl border-l-4 ${item.color} p-8 flex flex-col justify-between group transform hover:-translate-y-1 transition-all duration-300 cursor-pointer`}>
                                <div>
                                    <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-4">{item.label}</span>
                                    <h3 className="text-xl font-semibold text-slate-900 leading-snug mb-6 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                                </div>
                                <div className="flex justify-between items-center mt-auto pt-6 border-t border-slate-100">
                                    <span className="text-sm font-medium text-slate-400">{item.date}</span>
                                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================
          SECTION 6: STATS SHOWCASE
          ========================================= */}
            <section className="py-24 bg-white relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 text-center divide-x-0 md:divide-x divide-slate-100">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col items-center group">
                                <div className="transform group-hover:scale-110 transition-transform duration-500 ease-out">{stat.icon}</div>
                                <div className="text-5xl md:text-6xl font-light text-slate-900 mb-2 tracking-tight group-hover:text-blue-700 transition-colors">{stat.value}</div>
                                <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
            </section>

            {/* =========================================
          SECTION 7: THE MSIT DIFFERENCE
          ========================================= */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                {/* Decorative circle */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full translate-x-1/2 -translate-y-1/2 opacity-50 blur-3xl"></div>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-5xl md:text-6xl font-light text-slate-900 tracking-tight mb-8">The MSIT Difference</h2>
                    <div className="w-24 h-1 bg-slate-900 mx-auto rounded-full mb-12"></div>

                    <h3 className="text-3xl font-medium text-slate-800 mb-8 leading-tight">More than ready. <span className="font-light text-slate-500">MSIT Ready.</span></h3>

                    <p className="text-xl text-slate-600 leading-relaxed font-light mb-8">
                        We believe that an elite engineering education best prepares you for tremendous academic achievement, profound professional success, and a highly purposeful life. From our rigorous curriculums to thoughtful mentorship from faculty and industry titans, MSIT helps you discover your true potential.
                    </p>

                    <p className="text-xl font-medium text-slate-900">
                        You'll graduate ready for anything—and ready for everything.
                    </p>
                </div>

                {/* 4-Image Grid Placeholder representing Premium Tech Vibe */}
                <div className="max-w-[1400px] mx-auto px-6 mt-24">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[
                            { label: "Research Excellence", bg: "from-slate-700 to-slate-900", icon: "🔬" },
                            { label: "Collaborative Learning", bg: "from-indigo-900 to-slate-900", icon: "👥" },
                            { label: "Modern Campus", bg: "from-blue-900 to-slate-900", icon: "🏛️" },
                            { label: "Student Success", bg: "from-emerald-900 to-slate-900", icon: "🎓" }
                        ].map((img, i) => (
                            <div key={i} className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden group shadow-lg cursor-pointer">
                                <div className={`absolute inset-0 bg-gradient-to-br ${img.bg} transition-transform duration-700 group-hover:scale-110 flex items-center justify-center`}>
                                    <span className="text-7xl opacity-20 transform group-hover:scale-125 transition-all duration-500">{img.icon}</span>
                                </div>
                                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent">
                                    <div className="text-white font-medium text-xl tracking-wide group-hover:-translate-y-2 transition-transform duration-300">{img.label}</div>
                                    <div className="w-10 h-0.5 bg-white/50 mt-3 group-hover:w-full transition-all duration-500 delay-100"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================
          SECTION 8: ACADEMIC PROGRAMS
          ========================================= */}
            <section id="programs" className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-20 text-center">
                        <span className="text-sm font-extrabold uppercase tracking-widest text-slate-400 mb-3 block">B.Tech Degrees</span>
                        <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight">Academic Programs</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {departments.map((dept, i) => (
                            <div key={i} className="group border border-slate-100 rounded-3xl p-10 lg:p-12 hover:border-slate-300 hover:shadow-2xl transition-all duration-500 bg-gradient-to-b from-white to-slate-50/50">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="text-6xl grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 origin-left">{dept.icon}</div>
                                    {dept.accredited && (
                                        <div className="px-3 py-1 bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider rounded-full">
                                            NBA ACCREDITED
                                        </div>
                                    )}
                                </div>
                                <div className="mb-2 text-sm font-bold text-slate-400 tracking-widest uppercase">{dept.code}</div>
                                <h3 className="text-3xl font-light text-slate-900 leading-tight mb-4 group-hover:text-blue-700 transition-colors">{dept.name}</h3>
                                <p className="text-slate-600 text-lg leading-relaxed font-light mb-8">{dept.desc}</p>

                                <div className="flex justify-between items-center pt-8 border-t border-slate-100 w-full">
                                    <div className="flex items-center text-slate-500 text-sm font-medium">
                                        <Users className="w-4 h-4 mr-2" /> {dept.students} Students
                                    </div>
                                    <a href="#" className="flex items-center text-slate-900 font-semibold group/link">
                                        Explore <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================
          SECTION 9: VALUE & OUTCOMES
          ========================================= */}
            <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
                {/* Subtle pattern background */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] mask-image-[linear-gradient(to_bottom,transparent,black,transparent)]"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-20">

                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Value & Outcomes</h2>
                        <h3 className="text-2xl font-medium text-slate-400 mb-10">The absolute return on your investment.</h3>

                        <div className="space-y-8 mb-12">
                            {[
                                { title: "Top-tier engineering education in Delhi NCR", desc: "Consistently recognized for academic rigor, modern pedagogy, and profound industry readiness." },
                                { title: "95% unparalleled placement success rate", desc: "Virtually all graduates are employed at top firms or pursuing higher education globally within six months." },
                                { title: "Strong global alumni network", desc: "Lifelong connections, mentorship from leaders, and professional development opportunities worldwide." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start">
                                    <div className="mt-1 bg-white rounded-full p-1 mr-5 shrink-0 flex items-center justify-center">
                                        <Check className="w-4 h-4 text-slate-900 font-bold" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-medium mb-1">{item.title}</h4>
                                        <p className="text-slate-400 font-light leading-relaxed text-sm md:text-base">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-x-4 gap-y-6 pt-8 border-t border-slate-700 mb-10">
                            <div>
                                <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Highest Package</div>
                                <div className="text-3xl font-light">₹45 LPA</div>
                            </div>
                            <div>
                                <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Top Recruiters</div>
                                <div className="text-3xl font-light">100+</div>
                            </div>
                        </div>

                        <button className="px-8 py-4 border-2 border-slate-600 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                            Learn about career outcomes
                        </button>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        {/* Abstract conceptual visual for outcomes */}
                        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 border border-slate-700 p-8 relative flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden group">
                            <div className="absolute inset-0 bg-slate-800 mix-blend-color"></div>
                            <div className="w-[120%] h-[120%] absolute -right-20 -bottom-20 bg-gradient-to-tl from-indigo-600/30 to-transparent rounded-full blur-3xl group-hover:from-indigo-500/40 transition-all duration-700"></div>
                            <TrendingUp className="w-48 h-48 text-indigo-400 group-hover:scale-110 transition-transform duration-700 opacity-80" strokeWidth={1} />
                        </div>
                    </div>

                </div>
            </section>

            {/* =========================================
          SECTION 10: DISTINGUISHING FACTORS
          ========================================= */}
            <section className="py-32 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight text-center mb-20">The distinguishing factors <br className="hidden md:block" />of an MSIT education</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Academic Rigor & Excellence",
                                desc: "Depth of knowledge and exceptional breadth of experience in cutting-edge, rapidly evolving engineering disciplines.",
                                link: "Explore academics",
                                icon: <BookOpen className="w-10 h-10 text-slate-700" strokeWidth={1.5} />
                            },
                            {
                                title: "Mentorship & Guidance",
                                desc: "Deep, highly meaningful mentorship from accomplished faculty, successful alumni, and leading industry professionals.",
                                link: "Meet our faculty",
                                icon: <Heart className="w-10 h-10 text-slate-700" strokeWidth={1.5} />
                            },
                            {
                                title: "Career Preparation",
                                desc: "Deliberately connect your natural passions, values, and aptitudes to your highest professional aspirations.",
                                link: "Explore career services",
                                icon: <Target className="w-10 h-10 text-slate-700" strokeWidth={1.5} />
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col group border border-slate-100">
                                <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center p-12 bg-gradient-to-br from-slate-100 to-slate-200">
                                    <div className="w-24 h-24 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                        {card.icon}
                                    </div>
                                </div>
                                <div className="p-10 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">{card.title}</h3>
                                    <p className="text-slate-600 leading-relaxed font-light flex-grow mb-8">{card.desc}</p>
                                    <a href="#" className="inline-flex items-center text-slate-900 font-semibold uppercase tracking-wider text-sm group/link">
                                        {card.link} <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================
          SECTION 11: STUDENT TESTIMONIALS (CAROUSEL)
          ========================================= */}
            <section className="py-24 md:py-32 bg-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="flex justify-center mb-16">
                        <span className="text-sm font-bold uppercase tracking-widest text-slate-400 border border-slate-200 px-4 py-2 rounded-full">Alumni Voices</span>
                    </div>

                    <div className="relative min-h-[400px] flex items-center">
                        {testimonials.map((test, index) => (
                            <div
                                key={index}
                                className={`absolute top-0 left-0 w-full h-full flex flex-col items-center text-center transition-all duration-700 ease-in-out ${index === currentTestimonial ? 'opacity-100 translate-x-0 z-20' : 'opacity-0 translate-x-12 z-10'}`}
                            >
                                {/* Minimalist modern avatar placeholder */}
                                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-100 to-blue-50 border-2 border-white shadow-lg mb-8 flex items-center justify-center text-indigo-300 font-light text-3xl">
                                    {test.name.charAt(0)}
                                </div>

                                <p className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-800 leading-tight md:leading-snug max-w-4xl italic mb-10 text-balance">
                                    "{test.quote}"
                                </p>

                                <div>
                                    <div className="font-semibold text-slate-900 text-lg">{test.name}, '{test.year}</div>
                                    <div className="text-slate-500 font-medium mb-1">{test.major}</div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-blue-600 mt-3">{test.company}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-3 mt-12">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentTestimonial(idx)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentTestimonial ? 'bg-slate-900 w-8' : 'bg-slate-300 hover:bg-slate-400'}`}
                                aria-label={`Go to slide ${idx + 1}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================
          SECTION 12: PLACEMENT SUCCESS STORIES
          ========================================= */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-light text-slate-900 tracking-tight mb-2">Placement Success</h2>
                    <p className="text-slate-500 mb-16">Our students lead engineering at the world's most innovative companies</p>

                    {/* Elegant text-based logo representations since we don't have SVG assets */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center opacity-70 mb-20 max-w-4xl mx-auto">
                        {['Google', 'Microsoft', 'Amazon', 'Adobe', 'Goldman Sachs', 'Stripe', 'Morgan Stanley', 'Deloitte'].map((company, i) => (
                            <div key={i} className="text-xl md:text-2xl font-bold text-slate-400 hover:text-slate-900 transition-colors cursor-pointer select-none">
                                {company}
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto gap-8">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full justify-center md:divide-x divide-slate-100">
                            <div className="text-center px-4">
                                <div className="text-4xl md:text-5xl font-light text-slate-900 mb-1">95%</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Placement Rate</div>
                            </div>
                            <div className="text-center px-4 hidden md:block">
                                <div className="text-4xl md:text-5xl font-light text-slate-900 mb-1">₹45 <span className="text-2xl">LPA</span></div>
                                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Highest Package</div>
                            </div>
                            <div className="text-center px-4">
                                <div className="text-4xl md:text-5xl font-light text-slate-900 mb-1">500+</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Offers in 2024</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                            View Complete 2024 Placement Report <ExternalLink className="w-4 h-4 ml-2 pb-[1px]" />
                        </a>
                    </div>
                </div>
            </section>

            {/* =========================================
          SECTION 13: UNIVERSITY HIGHLIGHTS
          ========================================= */}
            <section className="py-32 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-20">University Highlights</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "Innovation & Research", icon: <Lightbulb className="w-12 h-12 mb-6 text-indigo-400" strokeWidth={1} />, desc: "State-of-the-art research facilities, dedicated maker labs, and active collaborative projects with global tech partners driving hardware and software innovation.", link: "Explore research" },
                            { title: "Industry Partnerships", icon: <Globe className="w-12 h-12 mb-6 text-blue-400" strokeWidth={1} />, desc: "Unmatched pipelines to Microsoft, Google, TCS, and rising tech startups ensuring real-world experience through premium internships and mentorships.", link: "View our partners" },
                            { title: "Campus Excellence", icon: <MapPin className="w-12 h-12 mb-6 text-emerald-400" strokeWidth={1} />, desc: "Intelligent, modern facilities, a vibrant student life culture, incredibly diverse academic organizations, and a highly supportive community in New Delhi.", link: "Take campus tour" }
                        ].map((highlight, i) => (
                            <div key={i} className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 rounded-3xl p-10 md:p-12 flex flex-col transition-all duration-300 group cursor-pointer">
                                {highlight.icon}
                                <h3 className="text-2xl font-semibold mb-4">{highlight.title}</h3>
                                <p className="text-slate-400 font-light leading-relaxed mb-10 flex-grow">{highlight.desc}</p>
                                <div className="flex items-center font-medium text-sm tracking-wide text-white group-hover:text-indigo-400 transition-colors">
                                    {highlight.link} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================
          SECTION 14: EVENTS & ACHIEVEMENTS (TIMELINE)
          ========================================= */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-16">
                        <h2 className="text-4xl font-light text-slate-900 tracking-tight">Recent Events & Achievements</h2>
                        <div className="hidden md:flex gap-3">
                            {['All', 'Conferences', 'Competitions', 'Festivals'].map((tab, i) => (
                                <button key={i} className={`text-sm font-medium pb-2 border-b-2 transition-colors ${i === 0 ? 'text-slate-900 border-slate-900' : 'text-slate-400 border-transparent hover:text-slate-900'}`}>{tab}</button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative">
                        {/* Timeline conceptual styling */}
                        <div className="absolute top-6 left-0 w-full h-px bg-slate-100 hidden lg:block"></div>

                        {[
                            { date: "Feb 27-28, 2026", title: "NCRTCES-2026 Conference", desc: "National Conference on Recent Trends in Computer Sci." },
                            { date: "Jan 2026", title: "Smart Delhi Ideathon", desc: "First Prize Winners for Urban Mobility Solution" },
                            { date: "Mar 26-27, 2025", title: "ICAIA International Conf.", desc: "Hosting researchers from 15 global universities" },
                            { date: "Annual 2025", title: "Avensis Techfest", desc: "North India's largest technical symposium" }
                        ].map((event, i) => (
                            <div key={i} className="relative pt-8 lg:pt-16 group">
                                <div className="hidden lg:block absolute top-0 left-0 w-12 h-12 bg-white border border-slate-200 rounded-full z-10 -translate-y-1/2 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-50 transition-colors">
                                    <div className="w-3 h-3 bg-slate-200 rounded-full group-hover:bg-blue-500 transition-colors"></div>
                                </div>
                                <div className="text-sm font-bold tracking-widest text-slate-400 mb-3">{event.date}</div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-2 leading-snug">{event.title}</h3>
                                <p className="text-slate-600 font-light text-sm leading-relaxed">{event.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================
          SECTION 15: CAMPUS VIRTUAL TOUR
          ========================================= */}
            <section className="py-32 bg-slate-100 relative overflow-hidden flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 bg-slate-900/5 mix-blend-multiply"></div>
                <div className="relative z-10 max-w-3xl mx-auto px-6">
                    <div className="w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center mx-auto mb-10 cursor-pointer hover:scale-110 transition-transform duration-300 group" onClick={() => openLightbox('Virtual Tour Launch')}>
                        <Play className="w-8 h-8 text-slate-900 ml-1 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-6">Explore Our Campus</h2>
                    <p className="text-xl text-slate-600 font-light mb-12">Take a fully immersive 360° virtual tour of our world-class laboratories, extensive libraries, and intelligent learning spaces.</p>
                    <button className="px-10 py-5 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors shadow-xl">
                        Start Virtual Tour
                    </button>
                    <div className="mt-16 flex flex-wrap justify-center gap-4">
                        {['Main Block', 'AI Labs', 'Library', 'Sports Complex', 'Auditorium'].map((loc, i) => (
                            <span key={i} className="px-5 py-2.5 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 shadow-sm hover:border-slate-400 cursor-pointer transition-colors" onClick={() => openLightbox(loc)}>
                                {loc}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal (for Tour/Images) */}
            {lightboxOpen && (
                <div className="fixed inset-0 bg-slate-900/95 z-[100] flex flex-col items-center justify-center p-4" onClick={() => setLightboxOpen(false)}>
                    <button className="absolute top-6 right-6 p-2 text-white/50 hover:text-white rounded-full transition-colors">
                        <X className="w-8 h-8" />
                    </button>
                    <div className="w-full max-w-5xl aspect-video bg-slate-800 rounded-lg border border-slate-700 shadow-2xl flex items-center justify-center flex-col" onClick={(e) => e.stopPropagation()}>
                        <Play className="w-16 h-16 text-white/20 mb-4" />
                        <div className="text-white text-xl font-light tracking-widest">{lightboxImage} Viewer Placeholder</div>
                    </div>
                </div>
            )}

            {/* =========================================
          SECTION 16: CALL-TO-ACTION / LEAD
          ========================================= */}
            <section className="py-24 relative overflow-hidden group">
                {/* Parallax Background */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed transition-transform duration-[15s] ease-out group-hover:scale-110"
                    style={{ backgroundImage: "url('/campus-hero.jpg')" }}
                ></div>
                {/* Brand-colored dark overlay */}
                <div className="absolute inset-0 z-0 bg-indigo-950/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950/90 to-transparent"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Ready to Start Your Journey?</h2>
                    <p className="text-xl text-indigo-100 font-light mb-12">Subscribe to our admissions newsletter for deadline updates, campus news, and exclusive insights into life at MSIT.</p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <div className="relative flex-grow">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full pl-12 pr-4 py-4 rounded-xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-500/50 shadow-lg font-medium"
                                required
                            />
                        </div>
                        <button className="px-8 py-4 bg-white text-indigo-950 font-bold rounded-xl shadow-lg hover:bg-indigo-50 transition-colors whitespace-nowrap">
                            Subscribe Now
                        </button>
                    </form>
                    <p className="text-sm text-indigo-200/70 mt-6 font-light">We respect your inbox. Unsubscribe securely at any time.</p>
                </div>
            </section>

            {/* =========================================
          SECTION 17: FOOTER
          ========================================= */}
            <footer className="bg-slate-950 pt-24 pb-12 border-t border-slate-900 text-slate-400">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">

                        {/* Col 1 */}
                        <div className="lg:col-span-2 pr-4">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded bg-white flex items-center justify-center">
                                    <span className="text-slate-950 text-xl font-bold tracking-tighter">M</span>
                                </div>
                                <span className="font-bold text-2xl tracking-tight text-white">MSIT</span>
                            </div>
                            <p className="text-slate-400 font-light leading-relaxed mb-8 max-w-sm">
                                Shaping tomorrow's engineers and innovators through exceptional academic rigor and profound industry immersion.
                            </p>
                            <div className="space-y-4 text-sm font-light">
                                <div className="flex items-start">
                                    <MapPin className="w-5 h-5 mr-3 text-slate-600 shrink-0 mt-0.5" />
                                    <span>C-4, Janakpuri<br />New Delhi - 110058, India</span>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 mr-3 text-slate-600" />
                                    <span>011-65215941</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="w-5 h-5 mr-3 text-slate-600" />
                                    <span>info@msit.in</span>
                                </div>
                            </div>
                        </div>

                        {/* Col 2 */}
                        <div>
                            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Quick Links</h4>
                            <ul className="space-y-4 font-light text-sm">
                                <li><a href="https://www.msit.in/about" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">About MSIT</a></li>
                                <li><a href="https://www.msit.in/online_fee" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Admissions 2026</a></li>
                                <li><a href="https://www.msit.in/cse" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Academic Programs</a></li>
                                <li><a href="https://www.msit.in/society" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Campus Life</a></li>
                                <li><a href="https://www.msit.in/placements" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Placement Records</a></li>
                                <li><a href="https://www.msit.in/contact" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Col 3 */}
                        <div>
                            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Resources</h4>
                            <ul className="space-y-4 font-light text-sm">
                                <li><a href="https://www.msit.in/timetable" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Student Portal</a></li>
                                <li><a href="https://www.msit.in/administration" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Faculty Portal</a></li>
                                <li><a href="http://library.msit.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Library & E-Resources</a></li>
                                <li><a href="http://www.ipu.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GGSIPU Affiliation</a></li>
                                <li><a href="https://www.msit.in/iqac" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">NAAC & NBA Stats</a></li>
                                <li><a href="https://www.msit.in/nirf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">NIRF Rankings</a></li>
                            </ul>
                        </div>

                        {/* Col 4 */}
                        <div>
                            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Connect</h4>
                            <div className="flex gap-4 mb-8">
                                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all"><Facebook className="w-4 h-4" /></a>
                                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all"><Twitter className="w-4 h-4" /></a>
                                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all"><Linkedin className="w-4 h-4" /></a>
                                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all"><Instagram className="w-4 h-4" /></a>
                            </div>
                            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-4">Brochure</h4>
                            <button className="text-sm font-medium text-white px-5 py-2.5 rounded border border-slate-700 hover:bg-slate-800 transition-colors bg-slate-900 inline-flex items-center">
                                Download Prospectus
                            </button>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-slate-900 text-xs font-light flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500">
                        <div>&copy; {new Date().getFullYear()} Maharaja Surajmal Institute of Technology. All rights reserved.</div>
                        <div className="flex gap-6">
                            <a href="https://www.msit.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="https://www.msit.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms of Use</a>
                            <a href="https://www.msit.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Accessibility</a>
                            <a href="https://www.msit.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Sitemap</a>
                        </div>
                        <div className="flex items-center">Made with <Heart className="w-3 h-3 mx-1 text-red-500" /> in Delhi</div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
