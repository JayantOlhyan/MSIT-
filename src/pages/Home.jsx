import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    Check, Award, ArrowRight, Play, X, Mail, Globe, ChevronDown,
    Users, BookOpen, GraduationCap, TrendingUp, Lightbulb, Target, ExternalLink, Building2, Camera
} from 'lucide-react';
import SEO from '../components/SEO';

const stats = [
    { icon: <GraduationCap />, value: "95%+", label: "PLACEMENT RATE" },
    { icon: <Building2 />, value: "250+", label: "RECRUITING COMPANIES" },
    { icon: <Award />, value: "₹1.2Cr", label: "HIGHEST PACKAGE OFFERED" },
    { icon: <Users />, value: "4500+", label: "STUDENTS ENROLLED" },
    { icon: <TrendingUp />, value: "150+", label: "EXPERT FACULTY" }
];

const CAMPUS_GALLERY = [
    {
        id: 'main-block',
        title: '8-Storey Main Academic Building',
        category: 'Academics',
        image: '/campus/main-academic-building.webp',
        desc: 'The iconic 8-storey red brick academic centerpiece of MSIT and its expansive green lawns.'
    },
    {
        id: 'main-gate',
        title: 'Institute Main Entrance Gate',
        category: 'Campus',
        image: '/campus/msit-main-gate.webp',
        desc: 'Security-guarded grand entrance on C-4 Janakpuri with palm-lined boulevard.'
    },
    {
        id: 'central-library',
        title: 'Central Library Reading Hall',
        category: 'Academics',
        image: '/campus/central-library-hall.webp',
        desc: 'Spacious reading hall with over 65,000+ volumes, IEEE digital access, and quiet study carrels.'
    },
    {
        id: 'auditorium',
        title: 'Auditorium & Cultural Stage',
        category: 'Campus Life',
        image: '/campus/auditorium-cultural-fest.webp',
        desc: 'MSIT Auditorium during Genesis & Avensis fests, decorated with dancer silhouettes and banners.'
    },
    {
        id: 'sports-ground',
        title: 'Outdoor Sports & Badminton Arena',
        category: 'Sports',
        image: '/campus/sports-badminton-ground.webp',
        desc: 'Outdoor courts with badminton nets and athletic facilities overlooking the campus block.'
    },
    {
        id: 'student-courtyard',
        title: 'Student Plaza & Courtyard Gathering',
        category: 'Campus Life',
        image: '/campus/student-gathering-courtyard.webp',
        desc: 'Vibrant outdoor student gathering in the courtyard with classic red brick balustrades.'
    },
    {
        id: 'surajmal-statue',
        title: 'Maharaja Surajmal Memorial Statue',
        category: 'Heritage',
        image: '/campus/maharaja-surajmal-statue.webp',
        desc: 'Commemorative bronze bust of Bharatpur ruler Maharaja Surajmal (1707–1763).'
    },
    {
        id: 'foundation-stone',
        title: 'Historic Foundation Stone (1978)',
        category: 'Heritage',
        image: '/campus/foundation-stone-plaque.webp',
        desc: 'Plaque commemorating the stone laid by President Neelam Sanjiva Reddy & Chaudhary Charan Singh.'
    },
    {
        id: 'pathway-block',
        title: 'Academic Block Walkway & Arches',
        category: 'Academics',
        image: '/campus/campus-pathway-block.webp',
        desc: 'Interlocking brick walkways connecting department wings under tree shade.'
    },
    {
        id: 'canteen-kiosk',
        title: 'Tree-Shaded Canteen & Food Kiosk',
        category: 'Campus Life',
        image: '/campus/campus-canteen-kiosk.webp',
        desc: 'Outdoor student cafeteria and refreshment kiosk shaded by lush green trees.'
    },
    {
        id: 'ecell-foyer',
        title: 'Student Innovation & E-Cell Foyer',
        category: 'Campus Life',
        image: '/campus/ecell-noticeboard-entrance.webp',
        desc: 'Academic entrance steps featuring E-Cell E-Summit notice board and student activity bulletins.'
    },
    {
        id: 'panoramic-field',
        title: 'Panoramic Sports Field & Dual Blocks',
        category: 'Campus',
        image: '/campus/campus-panoramic-field.webp',
        desc: 'Wide panoramic perspective across the sports grounds capturing both institute buildings.'
    },
    {
        id: 'side-avenue',
        title: 'Landscaped Avenue & Greenery',
        category: 'Campus',
        image: '/campus/campus-side-avenue.webp',
        desc: 'Clean concrete avenue lined with manicured hedges and flowering shrubs.'
    }
];

const Home = () => {
    const [activeNewsTab, setActiveNewsTab] = useState('all');
    // ... rest of state
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [activeStatIndex, setActiveStatIndex] = useState(0);
    const statsContainerRef = useRef(null);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImage, setLightboxImage] = useState(null);
    const [galleryFilter, setGalleryFilter] = useState('All');

    const [testimonials] = useState(() => {
        const stored = localStorage.getItem('msit_testimonials_v2');
        if (stored) return JSON.parse(stored);
        const defaults = [
            {
                id: 1,
                name: "Priya Sharma",
                year: "22",
                major: "Computer Science & Engineering",
                quote: "MSIT has shaped me into the professional I am today. The faculty mentorship, hands-on projects, and industry exposure prepared me exceptionally well for my career at Google. The connections I made here will last a lifetime.",
                company: "Google",
                image: "/priya-sharma.webp"
            },
            {
                id: 2,
                name: "Rahul Verma",
                year: "23",
                major: "Information Technology",
                quote: "The rigorous academic environment at MSIT pushes you to be your absolute best. I was able to participate in cutting-edge research and hackathons that gave me the edge I needed for my role at Microsoft.",
                company: "Microsoft",
                image: "/rahul-verma.webp"
            },
            {
                id: 3,
                name: "Ananya Iyer",
                year: "21",
                major: "Electronics & Communication",
                quote: "I never realized how much potential I had until I stepped foot on the MSIT campus. The professors saw something in me and nurtured my skills in chip design and embedded systems. I'm infinitely grateful.",
                company: "Apple",
                image: "/ananya-iyer.webp"
            },
            {
                id: 4,
                name: "Prasanjeet Parasar",
                year: "23",
                major: "Computer Science & Engineering",
                quote: "In the Stakeholder Round, candidates are assessed not just on technical skills but also on how well they understand the company and their own profiles. Resumes need to be polished and error-free, tailored to highlight experiences and skills most relevant to the role.",
                company: "ION",
                image: "/prasanjeet-parasar.webp"
            },
            {
                id: 5,
                name: "Kartikay Arya",
                year: "23",
                major: "Computer Science & Engineering (2nd Shift)",
                quote: "Secured All India Rank 1 (AIR-1) in the SSC Navy examination upon graduating from MSIT. The discipline and support of the faculty helped me prepare for my career in the armed forces.",
                company: "Indian Navy",
                image: "/kartikay-arya.webp"
            },
            {
                id: 6,
                name: "Varun Bansal",
                year: "19",
                major: "Electronics & Communication Engineering",
                quote: "MSIT is more than a college; it is a community that shapes your future. Sponsoring NCI-TIDE 2025 is my way of giving back and maintaining the enduring bond between mentors and alumni.",
                company: "Elegance Spark Innovation",
                image: "/varun-bansal.webp"
            },
            {
                id: 7,
                name: "Saransh Kapoor",
                year: "25",
                major: "Computer Science & Engineering",
                quote: "Keep your answers short, crisp, and polite during interview rounds. A combination of humility, confidence, and clear communication can make a lasting impression on interviewers.",
                company: "ION",
                image: "/saransh-kapoor.webp"
            }
        ];
        localStorage.setItem('msit_testimonials_v2', JSON.stringify(defaults));
        return defaults;
    });

    // Campus Highlights state 
    const [currentHighlight, setCurrentHighlight] = useState(0);
    const [highlights] = useState(() => {
        const stored = localStorage.getItem('msit_highlights_v2') || localStorage.getItem('msit_highlights');
        if (stored) return JSON.parse(stored);
        const defaults = [
            { id: 1, image: "/campus/main-academic-building.webp", quote: "Ranked among the Top Engineering Colleges in Delhi-NCR by NIRF / Times Engineering Survey.", source: "Times Engineering Ranking" },
            { id: 2, image: "/campus/central-library-hall.webp", quote: "Accredited with 'A' Grade for institutional quality and academic governance.", source: "National Assessment and Accreditation Council (NAAC)" },
            { id: 3, image: "/campus/student-gathering-courtyard.webp", quote: "B.Tech programs in CSE, IT, ECE, and EEE accredited for outcome-based education.", source: "National Board of Accreditation (NBA)" }
        ];
        localStorage.setItem('msit_highlights_v2', JSON.stringify(defaults));
        return defaults;
    });

    useEffect(() => {
        if (highlights.length === 0) return;
        const timer = setInterval(() => {
            setCurrentHighlight((prev) => (prev + 1) % highlights.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [highlights]);


    const [touchStartX, setTouchStartX] = useState(null);


    const [touchEndX, setTouchEndX] = useState(null);

    const handleTouchStart = (e) => {
        setTouchEndX(null);
        setTouchStartX(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEndX(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStartX || !touchEndX) return;
        const distance = touchStartX - touchEndX;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }
        if (isRightSwipe) {
            setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        }
    };


    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    useEffect(() => {
        const container = statsContainerRef.current;
        if (!container) return;

        const options = {
            root: container,
            threshold: 0.5,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = parseInt(entry.target.getAttribute('data-index'));
                    setActiveStatIndex(index);
                }
            });
        }, options);

        const children = Array.from(container.children);
        children.forEach(child => observer.observe(child));

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 150; // Account for fixed header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const openLightbox = (target) => {
        if (typeof target === 'string') {
            if (target === 'Virtual Tour Launch') {
                setLightboxImage({ type: 'video', title: 'MSIT Virtual Tour Video Walkthrough', url: 'https://www.youtube.com/embed/WY6dTTsE4cY?autoplay=1&mute=0' });
            } else {
                const found = CAMPUS_GALLERY.find(g => 
                    g.title.toLowerCase().includes(target.toLowerCase()) || 
                    g.id.toLowerCase().includes(target.toLowerCase()) ||
                    target.toLowerCase().includes(g.id.replace('-', ' '))
                );
                if (found) {
                    setLightboxImage({ type: 'image', title: found.title, image: found.image, desc: found.desc });
                } else {
                    setLightboxImage({ type: 'image', title: target, image: '/campus/main-academic-building.webp', desc: 'MSIT Campus Facility' });
                }
            }
        } else {
            setLightboxImage(target);
        }
        setLightboxOpen(true);
    };


    const departments = [
        {
            name: "Computer Science & Engineering",
            code: "CSE",
            students: 240,
            icon: "💻",
            desc: "Master software architecture, artificial intelligence, and scalable systems.",
            accredited: true
        },
        {
            name: "Information Technology",
            code: "IT",
            students: 120,
            icon: "🌐",
            desc: "Focus on network security, cloud infrastructure, and data analytics.",
            accredited: true
        },
        {
            name: "Electronics & Communication",
            code: "ECE",
            students: 120,
            icon: "🛰️",
            desc: "Pioneer the hardware of tomorrow with embedded systems and VLSI design.",
            accredited: true
        },
        {
            name: "Electrical & Electronics",
            code: "EEE",
            students: 60,
            icon: "⚡",
            desc: "Innovate sustainable power systems, control engineering, and robotics.",
            accredited: true
        }
    ];

    const [events] = useState(() => {
        const storedEvents = localStorage.getItem('msit_events_v2');
        if (storedEvents) return JSON.parse(storedEvents);
        const defaultEvents = [
            { id: 1, label: "NEWS", title: "Department of CSE receives CSR Research Grant from Petronet LNG Ltd. for AI Center of Excellence", date: "MAR 02, 2026", link: "#", color: "border-blue-600" },
            { id: 2, label: "EVENT", title: "Global Web3 & Blockchain Summit to be hosted at MSIT Campus", date: "FEB 28, 2026", link: "#", color: "border-emerald-500" },
            { id: 3, label: "STORY", title: "MSIT Alumni community secures offers across Google, Microsoft, Amazon, and ION Trading with highest domestic package of ₹45+ LPA", date: "FEB 15, 2026", link: "#", color: "border-purple-500" },
            { id: 4, label: "STORY", title: "Grand Finale of SIH 2025 Concludes: MSIT Declared Winner in Ministry of AYUSH Category", date: "DEC 12, 2025", link: "#", color: "border-blue-600" },
            { id: 5, label: "EVENT", title: "MSIT to Host 4th International Conference on Artificial Intelligence and Applications (ICAIA 2026)", date: "NOV 19, 2026", link: "#", color: "border-emerald-500" },
            { id: 6, label: "NEWS", title: "MSIT establishes state-of-the-art AICTE IDEA Lab & Advanced Multidisciplinary Research Facilities", date: "AUG 15, 2025", link: "#", color: "border-purple-500" },
            { id: 7, label: "EVENT", title: "MSIT Conducts National Conference NCI-TIDE 2025", date: "DEC 15, 2025", link: "#", color: "border-blue-600" },
            { id: 8, label: "EVENT", title: "Placement Cell Conducts Placement Preparation Session with ION Alumni and Seniors", date: "AUG 30, 2024", link: "#", color: "border-emerald-500" },
            { id: 9, label: "EVENT", title: "E-Cell MSIT Organizes Flagship E-Summit 2026", date: "MAR 26, 2026", link: "#", color: "border-purple-500" },
            { id: 10, label: "EVENT", title: "MSC MSIT Organizes HackMSIT 1.0 Hackathon", date: "APR 10, 2026", link: "#", color: "border-blue-600" },
            { id: 11, label: "STORY", title: "Team 'Courtroom Cartel' Secures First Prize in Smart India Hackathon 2023", date: "DEC 20, 2023", link: "#", color: "border-emerald-500" }
        ];
        localStorage.setItem('msit_events_v2', JSON.stringify(defaultEvents));
        return defaultEvents;
    });

    const filteredEvents = activeNewsTab === 'all'
        ? events
        : events.filter(e => e.label.toLowerCase() === activeNewsTab || (activeNewsTab === 'stories' && e.label === 'STORY'));

    const homeSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Maharaja Surajmal Institute of Technology",
        "alternateName": "MSIT",
        "url": "https://msit-website.netlify.app",
        "logo": "https://msit-website.netlify.app/msit-logo.webp",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "C-4, Janakpuri",
            "addressLocality": "New Delhi",
            "addressRegion": "Delhi",
            "postalCode": "110058",
            "addressCountry": "IN"
        },
        "sameAs": [
            "https://www.linkedin.com/school/maharaja-surajmal-institute-of-technology-msitnewdelhi/"
        ]
    };

    return (
        <main>
            <SEO 
                title="Home" 
                description="Maharaja Surajmal Institute of Technology (MSIT) is a premier engineering college in Delhi offering top-tier B.Tech programs, placements, and innovation." 
                schema={homeSchema}
            />
            {/* HERO SECTION */}
            <section className="relative w-full h-[100vh] min-h-[clamp(500px,80vh,700px)] flex items-center justify-center bg-slate-900 overflow-hidden">
                {/* LCP Discovery - Hidden High Priority Image for CSS background */}
                <img 
                    src="/campus/main-academic-building.webp" 
                    alt="MSIT Main 8-Storey Academic Building" 
                    className="sr-only" 
                    fetchpriority="high" 
                    loading="eager" 
                    decoding="async"
                />
                {/* Interactive Campus Background Image */}
                <div className="absolute inset-0 z-0 group overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transition-transform duration-[20s] ease-out group-hover:scale-105"
                        style={{ backgroundImage: "url('/campus/main-academic-building.webp')" }}
                    ></div>
                    {/* Dark gradient overlays */}
                    <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-slate-900/60"></div>
                </div>

                {/* Giant Centered Text */}
                <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center text-center -mt-[6vh] pointer-events-none">
                    <h1 
                        id="hero-title"
                        className="font-serif font-black tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/100 to-white/20 leading-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-1000 ease-out select-none uppercase"
                        style={{ fontSize: 'clamp(5rem, 24vw, 32vh)' }}
                    >
                        MSIT
                    </h1>
                    <div id="hero-divider" className="h-1.5 w-24 sm:w-32 bg-white/40 mt-8 rounded-full blur-[0.5px]"></div>
                </div>

                {/* Explore Banner at Bottom */}
                <div 
                    id="hero-banner"
                    className="absolute bottom-0 left-0 w-full bg-primary py-6 cursor-pointer hover:bg-primary/90 transition-all duration-500 z-20 flex justify-center items-center group/banner border-t border-white/5"
                    onClick={() => scrollToSection('news')}
                >
                    <span className="text-white font-bold text-sm tracking-[0.2em] uppercase flex items-center gap-4 group-hover/banner:translate-y-[-2px] transition-transform">
                        Explore <ChevronDown className="w-5 h-5 animate-bounce text-blue-300" />
                    </span>
                </div>
            </section>

            {/* ANNOUNCEMENT TICKER */}
            <div className="bg-surface border-b border-slate-200 py-4 relative z-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 flex items-center">
                    <div className="bg-primary text-white text-xs font-black uppercase tracking-widest px-2.5 py-1 rounded-sm mr-6 shrink-0 shadow-card">Alert</div>
                    <div className="text-sm font-semibold text-title truncate flex-grow tracking-tight">
                        Admissions Open for Batch 2026-30. Last date to apply for B.Tech programs is April 30th.
                    </div>
                </div>
            </div>

            {/* NEWS, EVENTS & STORIES */}
            <section id="news" className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-light text-slate-900 tracking-tight leading-tight">News, Events, and Stories</h2>
                        </div>
                        <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide w-full md:w-auto">
                            {['all', 'news', 'events', 'stories'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveNewsTab(tab)}
                                    className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap active:scale-95 focus:outline-none ${activeNewsTab === tab ? 'bg-slate-900 text-white shadow-md shadow-slate-900/30' : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400'}`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredEvents.map((item, i) => {
                            const itemLink = item.link && item.link !== '#' ? item.link : `/news-event/${item.id}`;
                            return (
                                <Link to={itemLink} key={item.id || i} className={`bg-white rounded-xl shadow-card hover:shadow-card-hover border-l-4 ${item.color} p-8 flex flex-col justify-between group transform hover:-translate-y-1 transition-all duration-300 cursor-pointer`}>
                                    <div>
                                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-muted mb-4">{item.label}</span>
                                        <h3 className="text-xl font-semibold text-title leading-snug mb-6 group-hover:text-primary transition-colors">{item.title}</h3>
                                    </div>
                                    <div className="flex justify-between items-center mt-auto pt-6 border-t border-slate-100">
                                        <span className="text-sm font-medium text-muted">{item.date}</span>
                                        <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                            <ArrowRight className="w-4 h-4 text-muted group-hover:text-primary" />
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* STATS SHOWCASE */}
            <section className="py-20 bg-white relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative group/stats">
                        <div 
                            ref={statsContainerRef}
                            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-12 md:gap-16 pb-12"
                        >
                            {stats.map((stat, i) => (
                                <div 
                                    key={i} 
                                    data-index={i}
                                    className="flex flex-col items-center text-center group min-w-[clamp(260px,80vw,340px)] snap-center shrink-0"
                                >
                                    <div className="transform group-hover:-translate-y-3 transition-transform duration-500 mb-8 flex items-center justify-center">
                                        <div className="p-4 rounded-2xl bg-slate-50/50 group-hover:bg-blue-50 transition-colors duration-500 shadow-sm border border-slate-100/50">
                                            {React.cloneElement(stat.icon, { 
                                                size: 42, 
                                                strokeWidth: 1.5,
                                                className: "text-slate-800 group-hover:text-primary transition-colors duration-500" 
                                            })}
                                        </div>
                                    </div>
                                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-title mb-4 leading-none">{stat.value}</div>
                                    <div className="text-xs font-black uppercase tracking-[0.25em] text-muted mb-8 min-h-[2.5rem] flex items-center justify-center">{stat.label}</div>
                                    <div className="mt-auto w-full flex justify-center">
                                        {stat.label === "STUDENTS ENROLLED" && (
                                            <Link to="/about" className="flex items-center justify-center text-xs font-black uppercase tracking-widest text-primary border-2 border-primary/20 px-4 py-1.5 rounded-full hover:bg-primary hover:text-white transition-all whitespace-nowrap shadow-card">
                                                Overview <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                                            </Link>
                                        )}
                                        {stat.label === "PLACEMENT RATE" && (
                                            <Link to="/placements" className="flex items-center justify-center text-xs font-black uppercase tracking-widest text-primary border-2 border-primary/20 px-4 py-1.5 rounded-full hover:bg-primary hover:text-white transition-all whitespace-nowrap shadow-card">
                                                Placements <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                                            </Link>
                                        )}
                                        {stat.label === "RECRUITING COMPANIES" && (
                                            <Link to="/placements" className="flex items-center justify-center text-xs font-black uppercase tracking-widest text-primary border-2 border-primary/20 px-4 py-1.5 rounded-full hover:bg-primary hover:text-white transition-all whitespace-nowrap shadow-card">
                                                Companies <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                                            </Link>
                                        )}
                                        {stat.label === "HIGHEST PACKAGE OFFERED" && (
                                            <Link to="/placements" className="flex items-center justify-center text-xs font-black uppercase tracking-widest text-primary border-2 border-primary/20 px-4 py-1.5 rounded-full hover:bg-primary hover:text-white transition-all whitespace-nowrap shadow-card">
                                                Honors <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                                            </Link>
                                        )}
                                        {stat.label === "EXPERT FACULTY" && (
                                            <Link to="/faculty" className="flex items-center justify-center text-xs font-black uppercase tracking-widest text-primary border-2 border-primary/20 px-4 py-1.5 rounded-full hover:bg-primary hover:text-white transition-all whitespace-nowrap shadow-card">
                                                Faculty <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Scroll Indicators (Dots) */}
                        <div className="flex justify-center gap-3 mt-4">
                            {stats.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        const container = statsContainerRef.current;
                                        if (container) {
                                            const target = container.children[i];
                                            target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                                        }
                                    }}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${i === activeStatIndex ? 'bg-primary w-8 shadow-sm' : 'bg-slate-200 w-2.5'}`}
                                    aria-label={`Go to stat ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
            </section>

            {/* THE MSIT DIFFERENCE */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-blue-400 font-black tracking-[0.2em] text-xs uppercase mb-4 block">The MSIT Advantage</span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                                Education that <br /><span className="text-blue-400 underline decoration-blue-500/30 underline-offset-8">Transcends Boundaries.</span>
                            </h2>
                            <p className="text-lg text-slate-300 font-medium leading-relaxed mb-12 opacity-90">
                                MSIT stands at the intersection of rigorous academic theory and practical, industry-driven application. We don't just teach engineering; we cultivate the mindset required to solve the complex challenges of tomorrow.
                            </p>
                            <div className="space-y-10">
                                {[
                                    { icon: <Target className="w-6 h-6 text-emerald-400" />, title: "Industry-Aligned Curriculum", desc: "Syllabus constantly updated in collaboration with tech giants." },
                                    { icon: <Lightbulb className="w-6 h-6 text-accent" />, title: "Innovation Ecosystem", desc: "Access to incubation centers, maker spaces, and heavy research funding." },
                                    { icon: <Globe className="w-6 h-6 text-primary/80" />, title: "Global Perspective", desc: "Exchange programs and international hackathon participation." }
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-6">
                                        <div className="mt-1 p-2.5 bg-slate-800 rounded-xl border border-white/5 shadow-inner">{feature.icon}</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{feature.title}</h3>
                                            <p className="text-slate-400 font-medium text-sm leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[clamp(400px,60vh,600px)] rounded-3xl overflow-hidden group shadow-card border border-white/5">
                            {highlights.map((highlight, idx) => (
                                <div
                                    key={idx}
                                    className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                                        idx === currentHighlight ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                                    }`}
                                >
                                    <div 
                                        className="absolute inset-0 bg-slate-800 bg-cover bg-center transition-transform duration-[12s] ease-linear" 
                                        style={{ backgroundImage: `url('${highlight.image}')`, transform: idx === currentHighlight ? 'scale(1.15)' : 'scale(1)' }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90"></div>
                                    
                                    <div className="absolute bottom-12 left-8 right-8 animate-slide-up">
                                        <div className="bg-black/20 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-card">
                                            <div className="text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed">{highlight.quote}</div>
                                            <div className="text-xs font-black tracking-[0.25em] text-blue-400 uppercase">— {highlight.source}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Carousel Navigation Dots */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                                {highlights.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentHighlight(i)}
                                        className={`group relative py-4 px-1 rounded-full transition-all duration-500`}
                                        aria-label={`Go to slide ${i + 1}`}
                                    >
                                        <div className={`h-2 rounded-full transition-all duration-500 ${i === currentHighlight ? 'bg-white w-8 shadow-card' : 'bg-white/20 group-hover:bg-white/40 w-2.5'}`}></div>
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ACADEMIC PROGRAMS */}
            <section id="programs" className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-blue-600 font-black tracking-[0.25em] text-xs uppercase mb-4 block">Academics</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-8">Technical Specializations</h2>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed">Choose from our NBA accredited, highly specialized programs designed to create leaders in technology.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {departments.map((dept, i) => (
                            <Link to={`/${dept.code.toLowerCase()}`} key={i} className="bg-white rounded-3xl p-10 border border-slate-200 hover:shadow-card-hover transition-all duration-500 group cursor-pointer relative overflow-hidden block">
                                <div className="absolute -top-6 -right-6 text-8xl font-black text-slate-100/50 group-hover:text-primary/10 transition-all duration-700 select-none group-hover:scale-110 group-hover:-rotate-12 pointer-events-none -z-10 tracking-tighter">
                                    {dept.code}
                                </div>
                                <div className="absolute top-0 right-0 w-48 h-48 bg-surface/50 rounded-bl-full -z-20 transition-transform group-hover:scale-125 duration-700"></div>
                                <div className="flex justify-between items-start mb-10">
                                    <div className="text-5xl bg-surface w-24 h-24 rounded-2xl flex items-center justify-center group-hover:bg-blue-50 transition-all duration-500 shadow-inner group-hover:rotate-3">
                                        <span className="grayscale group-hover:grayscale-0 transition-all duration-500" role="img" aria-label={`${dept.name} department icon`}>{dept.icon}</span>
                                    </div>
                                    <div className="text-right">
                                        {dept.accredited && <div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-800 mt-2 bg-emerald-50/90 px-2 py-0.5 rounded inline-block border border-emerald-100/50">NBA Accredited</div>}
                                    </div>
                                </div>
                                <h3 className="text-3xl font-bold text-title mb-4 tracking-tight group-hover:text-primary transition-colors">{dept.name}</h3>
                                <p className="text-muted font-medium mb-10 leading-relaxed text-sm">{dept.desc}</p>
                                <div className="flex items-center justify-between border-t border-slate-100 pt-8">
                                    <div className="flex items-center text-xs font-black text-slate-600 uppercase tracking-widest leading-none">
                                        <Users className="w-4 h-4 mr-2.5 text-primary" /> {dept.students} Slots / Batch
                                    </div>
                                    <div className="text-primary font-black text-xs uppercase tracking-widest flex items-center group-hover:translate-x-3 transition-transform">
                                        Full Details <ArrowRight className="w-4 h-4 ml-2" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS CAROUSEL */}
            <section className="py-32 bg-white border-b border-slate-100 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <span className="text-blue-700 font-black tracking-[0.25em] text-xs uppercase mb-4 block">Success Stories</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-20 leading-tight">Alumni Shaping the World</h2>

                    <div
                        className="relative max-w-5xl mx-auto px-4 md:px-0"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >

                        <div className="grid relative z-10 min-h-[400px]">
                            {testimonials.map((t, i) => (
                                <div
                                    key={i}
                                    className={`col-start-1 row-start-1 transition-all duration-1000 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-2 sm:px-4 py-8
                                    ${i === currentTestimonial ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-32 pointer-events-none -z-10'}`}
                                >
                                    <div className="w-56 h-56 md:w-80 md:h-80 rounded-[40px] overflow-hidden shadow-card border-[12px] border-white shrink-0 transform -rotate-3 group-hover:rotate-0 transition-all duration-700 hover:scale-105">
                                        <img 
                                            src={t.image} 
                                            alt={`Portrait of MSIT Alumnus ${t.name}, Class of '${t.year}, currently at ${t.company}`} 
                                            className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-1000" 
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>

                                    <div className="text-center md:text-left flex-grow max-w-xl relative">
                                        <div className="text-hero leading-none text-blue-600/10 absolute -top-10 -left-6 md:-left-10 font-serif z-0 select-none italic pointer-events-none">"</div>
                                        <p className="text-xl sm:text-2xl font-bold text-slate-800 leading-relaxed mb-6 md:mb-10 italic opacity-95">
                                            {t.quote}
                                        </p>
                                        <div className="font-bold text-2xl text-slate-900 mb-1 tracking-tight">{t.name} <span className="font-medium text-slate-500 text-lg ml-2">Class of '{t.year}</span></div>
                                        <div className="text-blue-600 font-bold text-lg tracking-tight mb-4 md:mb-6">{t.major}</div>
                                        <div className="inline-block px-5 py-2 bg-slate-900 text-white text-xs font-black uppercase tracking-[0.2em] rounded-lg shadow-card border border-white/10">{t.company}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center gap-4 mt-16">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentTestimonial(i)}
                                    className={`group relative py-4 px-1 rounded-full transition-all duration-500`}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                >
                                    <div className={`h-2 rounded-full transition-all duration-500 ${i === currentTestimonial ? 'bg-primary w-12 shadow-card shadow-blue-200' : 'bg-slate-200 group-hover:bg-slate-300 w-2.5'}`}></div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* CAMPUS PHOTOGRAPHIC SHOWCASE */}
            <section className="py-28 bg-white relative overflow-hidden border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-3">
                                <Camera className="w-4 h-4" />
                                <span>Authentic Campus Photography</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-title tracking-tight">
                                MSIT Through The Lens
                            </h2>
                            <p className="text-muted text-base max-w-2xl mt-3">
                                Explore genuine snapshots of our 8-acre Janakpuri campus — from our 8-storey academic block and central library to student festivals, historic memorials, and sports arenas.
                            </p>
                        </div>

                        {/* Category filter pills */}
                        <div className="flex flex-wrap gap-2">
                            {['All', 'Academics', 'Campus Life', 'Heritage', 'Sports'].map((cat) => (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setGalleryFilter(cat)}
                                    className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all ${
                                        galleryFilter === cat
                                            ? 'bg-primary text-white shadow-md shadow-blue-500/20'
                                            : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {CAMPUS_GALLERY
                            .filter(item => galleryFilter === 'All' || item.category === galleryFilter)
                            .map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => openLightbox({ type: 'image', title: item.title, image: item.image, desc: item.desc })}
                                    className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover border border-slate-100 cursor-pointer transition-all duration-500 hover:-translate-y-1.5"
                                >
                                    <div className="aspect-[4/3] overflow-hidden bg-slate-800">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
                                    <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                                        <span className="inline-block px-2 py-0.5 bg-white/20 backdrop-blur-md rounded text-[10px] font-bold uppercase tracking-wider mb-1.5">
                                            {item.category}
                                        </span>
                                        <h3 className="text-sm font-bold leading-tight group-hover:text-blue-300 transition-colors line-clamp-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-slate-300 line-clamp-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                                        </div>
                    
                    {/* Integrated Campus Tour CTA */}
                    <div className="mt-16 flex flex-col items-center justify-center text-center p-8 md:p-12 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-[80px] opacity-60 pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 relative z-10">Want to explore every corner?</h3>
                        <p className="text-slate-600 mb-8 max-w-lg relative z-10">Take a fully immersive virtual tour of our 8-storey academic block, reading halls, and recreational grounds.</p>
                        <Link to="/virtual-tour" className="relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold text-sm tracking-wider uppercase rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95">
                            <Play className="w-4 h-4" />
                            Start Virtual Tour
                        </Link>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal (for Tour/Images) */}
            {lightboxOpen && (
                <div className="fixed inset-0 bg-slate-900/95 z-[100] flex flex-col items-center justify-center p-4 lg:p-12 animate-fade-in" onClick={() => setLightboxOpen(false)}>
                    <button className="absolute top-6 right-6 p-2.5 text-white/60 hover:text-white rounded-full transition-colors z-50 bg-black/60 border border-white/10 shadow-lg" onClick={() => setLightboxOpen(false)}>
                        <X className="w-7 h-7" />
                    </button>
                    <div className="w-full max-w-5xl flex items-center justify-center bg-black/85 rounded-3xl border border-slate-700 shadow-2xl flex-col overflow-hidden relative animate-slide-up p-3 md:p-6" onClick={(e) => e.stopPropagation()}>
                        {lightboxImage?.type === 'video' ? (
                            <div className="w-full aspect-video">
                                <iframe
                                    className="w-full h-full rounded-2xl"
                                    src={lightboxImage.url}
                                    title={lightboxImage.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center w-full">
                                <img
                                    src={lightboxImage?.image || '/campus/main-academic-building.webp'}
                                    alt={lightboxImage?.title || 'MSIT Campus Photograph'}
                                    className="max-h-[70vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl mb-4"
                                />
                                <div className="text-center px-4 pb-2">
                                    <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-[10px] font-extrabold uppercase tracking-widest rounded-md mb-2 border border-blue-400/20">
                                        Authentic MSIT Campus
                                    </div>
                                    <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight mb-1">{lightboxImage?.title}</h3>
                                    <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">{lightboxImage?.desc}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </main>
    );
};

export default Home;


