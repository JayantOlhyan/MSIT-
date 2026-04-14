import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    Check, Award, ArrowRight, Play, X, Mail, Globe, ChevronDown,
    Users, BookOpen, GraduationCap, TrendingUp, Lightbulb, Target, ExternalLink
} from 'lucide-react';
import SEO from '../components/SEO';

const Home = () => {
    const [activeNewsTab, setActiveNewsTab] = useState('all');
    // ... rest of state
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImage, setLightboxImage] = useState('');

    const heroRef = useRef(null);
    const [heroVisible, setHeroVisible] = useState(false);

    useEffect(() => {
        const currentHeroRef = heroRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => setHeroVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (currentHeroRef) {
            observer.observe(currentHeroRef);
        }
        return () => {
            if (currentHeroRef) {
                observer.unobserve(currentHeroRef);
            }
            observer.disconnect();
        };
    }, []);

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const storedTestimonials = localStorage.getItem('msit_testimonials');
        if (storedTestimonials) {
            setTestimonials(JSON.parse(storedTestimonials));
        } else {
            const defaultTestimonials = [
                {
                    id: 1,
                    name: "Priya Sharma",
                    year: "22",
                    major: "Computer Science & Engineering",
                    quote: "MSIT has shaped me into the professional I am today. The faculty mentorship, hands-on projects, and industry exposure prepared me exceptionally well for my career at Google. The connections I made here will last a lifetime.",
                    company: "Google",
                    image: "/priya-sharma.png"
                },
                {
                    id: 2,
                    name: "Rahul Verma",
                    year: "23",
                    major: "Information Technology",
                    quote: "The rigorous academic environment at MSIT pushes you to be your absolute best. I was able to participate in cutting-edge research and hackathons that gave me the edge I needed for my role at Microsoft.",
                    company: "Microsoft",
                    image: "/rahul-verma.png"
                },
                {
                    id: 3,
                    name: "Ananya Iyer",
                    year: "21",
                    major: "Electronics & Communication",
                    quote: "I never realized how much potential I had until I stepped foot on the MSIT campus. The professors saw something in me and nurtured my skills in chip design and embedded systems. I'm infinitely grateful.",
                    company: "Apple",
                    image: "/ananya-iyer.png"
                }
            ];
            setTestimonials(defaultTestimonials);
        }
    }, []);

    // Campus Highlights state 
    const [currentHighlight, setCurrentHighlight] = useState(0);
    const [highlights, setHighlights] = useState([]);

    useEffect(() => {
        const storedHighlights = localStorage.getItem('msit_highlights');
        if (storedHighlights) {
            setHighlights(JSON.parse(storedHighlights));
        } else {
            const defaultHighlights = [
                { id: 1, image: "/campus-lab.png", quote: "The facilities here rival those of top Silicon Valley tech companies.", source: "TechCrunch University Review" },
                { id: 2, image: "/campus-library.png", quote: "Innovation is at the heart of MSIT's curriculum, fostering a true research spirit.", source: "MIT Technology Review" },
                { id: 3, image: "/campus-excellence.png", quote: "A breeding ground for the next generation of global technology leaders.", source: "Forbes Education" }
            ];
            setHighlights(defaultHighlights);
        }
    }, []);

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

    const openLightbox = (imageLabel) => {
        setLightboxImage(imageLabel);
        setLightboxOpen(true);
    };

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
            students: 90,
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

    const [events, setEvents] = useState([]);

    useEffect(() => {
        const storedEvents = localStorage.getItem('msit_events');
        if (storedEvents) {
            setEvents(JSON.parse(storedEvents));
        } else {
            const defaultEvents = [
                { id: 1, label: "NEWS", title: "MSIT receives $12M grant to establish cutting-edge AI & Quantum Labs", date: "MAR 02, 2026", link: "#", color: "border-blue-600" },
                { id: 2, label: "EVENT", title: "Global Web3 & Blockchain Summit to be hosted at MSIT Campus", date: "FEB 28, 2026", link: "#", color: "border-emerald-500" },
                { id: 3, label: "STORY", title: "From Campus to Cupertino: How 5 MSIT grads secured roles at Apple", date: "FEB 15, 2026", link: "#", color: "border-purple-500" }
            ];
            setEvents(defaultEvents);
            localStorage.setItem('msit_events', JSON.stringify(defaultEvents));
        }
    }, []);

    const filteredEvents = activeNewsTab === 'all'
        ? events
        : events.filter(e => e.label.toLowerCase() === activeNewsTab || (activeNewsTab === 'stories' && e.label === 'STORY'));

    return (
        <main>
            <SEO 
                title="Home" 
                description="Maharaja Surajmal Institute of Technology (MSIT) is a premier engineering college in Delhi offering top-tier B.Tech programs, placements, and innovation." 
            />
            {/* HERO SECTION */}
            <section ref={heroRef} className="relative w-full h-[100vh] min-h-[700px] flex items-center justify-center bg-slate-900 overflow-hidden">
                {/* Interactive Campus Background Image */}
                <div className="absolute inset-0 z-0 group overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transition-transform duration-[20s] ease-out group-hover:scale-105"
                        style={{ backgroundImage: "url('/campus-hero.jpg')" }}
                    ></div>
                    {/* Dark gradient overlays */}
                    <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-slate-900/60"></div>
                </div>

                {/* Giant Centered Text */}
                <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center text-center -mt-16 sm:-mt-32 pointer-events-none">
                    <h1 
                        className="font-serif font-black tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/100 to-white/20 leading-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-1000 ease-out select-none uppercase"
                        style={{ fontSize: '26vw' }}
                    >
                        MSIT
                    </h1>
                    <div className="h-1.5 w-24 sm:w-32 bg-white/40 mt-8 rounded-full blur-[0.5px]"></div>
                </div>

                {/* Explore Banner at Bottom */}
                <div 
                    className="absolute bottom-0 left-0 w-full bg-[#1e4a9b] py-6 cursor-pointer hover:bg-[#153a7a] transition-all duration-500 z-20 flex justify-center items-center group/banner border-t border-white/5"
                    onClick={() => scrollToSection('news')}
                >
                    <span className="text-white font-bold text-sm tracking-[0.2em] uppercase flex items-center gap-4 group-hover/banner:translate-y-[-2px] transition-transform">
                        Explore <ChevronDown className="w-5 h-5 animate-bounce text-blue-300" />
                    </span>
                </div>
            </section>

            {/* ANNOUNCEMENT TICKER */}
            <div className="bg-slate-50 border-b border-slate-200 py-4 relative z-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 flex items-center">
                    <div className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm mr-6 shrink-0 shadow-sm">Alert</div>
                    <div className="text-sm font-semibold text-slate-800 truncate flex-grow tracking-tight">
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
                                    className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap active:scale-95 ${activeNewsTab === tab ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400'}`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredEvents.map((item, i) => (
                            <a href={item.link} key={item.id || i} className={`bg-white rounded-xl shadow-sm hover:shadow-xl border-l-4 ${item.color} p-8 flex flex-col justify-between group transform hover:-translate-y-1 transition-all duration-300 cursor-pointer`}>
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
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* STATS SHOWCASE */}
            <section className="py-20 bg-white relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col items-center text-center group">
                                <div className="transform group-hover:-translate-y-2 transition-transform duration-300 mb-2">{React.cloneElement(stat.icon, { size: 32, className: "text-slate-900" })}</div>
                                <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-slate-900 mb-2">{stat.value}</div>
                                <div className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.25em] text-slate-500 mb-4">{stat.label}</div>
                                {stat.label === "STUDENTS ENROLLED" && (
                                    <Link to="/about" className="mt-1 flex items-center justify-center text-[11px] sm:text-xs font-black uppercase tracking-widest text-blue-600 border-2 border-blue-600/20 px-4 py-1.5 rounded-full hover:bg-blue-600 hover:text-white transition-all whitespace-nowrap shadow-sm">
                                        Overview <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                                    </Link>
                                )}
                                {stat.label === "PLACEMENT RATE" && (
                                    <Link to="/placements" className="mt-1 flex items-center justify-center text-[11px] sm:text-xs font-black uppercase tracking-widest text-blue-600 border-2 border-blue-600/20 px-4 py-1.5 rounded-full hover:bg-blue-600 hover:text-white transition-all whitespace-nowrap shadow-sm">
                                        Records <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                                    </Link>
                                )}
                                {stat.label === "EXPERT FACULTY" && (
                                    <Link to="/faculty" className="mt-1 flex items-center justify-center text-[11px] sm:text-xs font-black uppercase tracking-widest text-blue-600 border-2 border-blue-600/20 px-4 py-1.5 rounded-full hover:bg-blue-600 hover:text-white transition-all whitespace-nowrap shadow-sm">
                                        Faculty <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                                    </Link>
                                )}
                                {stat.label === "YEARS OF EXCELLENCE" && (
                                    <Link to="/about" className="mt-1 flex items-center justify-center text-[11px] sm:text-xs font-black uppercase tracking-widest text-blue-600 border-2 border-blue-600/20 px-4 py-1.5 rounded-full hover:bg-blue-600 hover:text-white transition-all whitespace-nowrap shadow-sm">
                                        History <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
            </section>

            {/* THE MSIT DIFFERENCE */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-blue-400 font-black tracking-[0.2em] text-[10px] uppercase mb-4 block">The MSIT Advantage</span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                                Education that <br /><span className="text-blue-400 underline decoration-blue-500/30 underline-offset-8">Transcend Boundaries.</span>
                            </h2>
                            <p className="text-lg text-slate-300 font-medium leading-relaxed mb-12 opacity-90">
                                MSIT stands at the intersection of rigorous academic theory and practical, industry-driven application. We don't just teach engineering; we cultivate the mindset required to solve the complex challenges of tomorrow.
                            </p>
                            <div className="space-y-10">
                                {[
                                    { icon: <Target className="w-6 h-6 text-emerald-400" />, title: "Industry-Aligned Curriculum", desc: "Syllabus constantly updated in collaboration with tech giants." },
                                    { icon: <Lightbulb className="w-6 h-6 text-amber-400" />, title: "Innovation Ecosystem", desc: "Access to incubation centers, maker spaces, and heavy research funding." },
                                    { icon: <Globe className="w-6 h-6 text-blue-400" />, title: "Global Perspective", desc: "Exchange programs and international hackathon participation." }
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-6">
                                        <div className="mt-1 p-2.5 bg-slate-800 rounded-xl border border-white/5 shadow-inner">{feature.icon}</div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2 tracking-tight">{feature.title}</h4>
                                            <p className="text-slate-400 font-medium text-sm leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[600px] rounded-3xl overflow-hidden group shadow-2xl border border-white/5">
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
                                        <div className="bg-black/20 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl">
                                            <div className="text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed">"{highlight.quote}"</div>
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
                                        className={`h-1.5 rounded-full transition-all duration-500 ${i === currentHighlight ? 'bg-white w-8 shadow-lg' : 'bg-white/20 hover:bg-white/40 w-1.5'}`}
                                        aria-label={`Go to slide ${i + 1}`}
                                    />
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
                        <span className="text-blue-600 font-black tracking-[0.25em] text-[10px] uppercase mb-4 block">Academics</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-8">Technical Specializations</h2>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed">Choose from our NBA accredited, highly specialized programs designed to create leaders in technology.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {departments.map((dept, i) => (
                            <Link to={`/${dept.code.toLowerCase()}`} key={i} className="bg-white rounded-3xl p-10 border border-slate-200 hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 group cursor-pointer relative overflow-hidden block">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-slate-50 rounded-bl-full -z-10 transition-transform group-hover:scale-125 duration-700"></div>
                                <div className="flex justify-between items-start mb-10">
                                    <div className="text-5xl bg-slate-50 w-24 h-24 rounded-2xl flex items-center justify-center group-hover:bg-blue-50 transition-all duration-500 shadow-inner group-hover:rotate-3">
                                        <span className="grayscale group-hover:grayscale-0 transition-all duration-500">{dept.icon}</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-4xl font-black text-slate-100 group-hover:text-blue-600/10 transition-colors tracking-tighter">{dept.code}</div>
                                        {dept.accredited && <div className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-600 mt-2 bg-emerald-50 px-2 py-0.5 rounded inline-block">NBA Accredited</div>}
                                    </div>
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-700 transition-colors">{dept.name}</h3>
                                <p className="text-slate-500 font-medium mb-10 leading-relaxed text-sm">{dept.desc}</p>
                                <div className="flex items-center justify-between border-t border-slate-100 pt-8">
                                    <div className="flex items-center text-[11px] font-black text-slate-400 uppercase tracking-widest leading-none">
                                        <Users className="w-4 h-4 mr-2.5 text-blue-500" /> {dept.students} Slots / Batch
                                    </div>
                                    <div className="text-blue-600 font-black text-[11px] uppercase tracking-widest flex items-center group-hover:translate-x-3 transition-transform">
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
                    <span className="text-blue-600 font-black tracking-[0.25em] text-[10px] uppercase mb-4 block">Success Stories</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-20 leading-tight">Alumni Shaping the World</h2>

                    <div
                        className="relative max-w-5xl mx-auto px-4 md:px-0"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div className="text-[120px] leading-none text-blue-600/10 absolute -top-16 -left-8 font-serif z-0 select-none italic text-opacity-20 pointer-events-none">"</div>
                        <div className="min-h-[450px] md:min-h-[350px] flex items-center justify-center relative z-10">
                            {testimonials.map((t, i) => (
                                <div
                                    key={i}
                                    className={`absolute inset-0 transition-all duration-1000 flex flex-col md:flex-row items-center justify-center gap-16 px-2 sm:px-4
                                    ${i === currentTestimonial ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-32 pointer-events-none -z-10'}`}
                                >
                                    <div className="w-56 h-56 md:w-80 md:h-80 rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white shrink-0 transform -rotate-3 group-hover:rotate-0 transition-all duration-700 hover:scale-105">
                                        <img src={t.image} alt={t.name} className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-1000" />
                                    </div>

                                    <div className="text-center md:text-left flex-grow max-w-xl">
                                        <p className="text-xl sm:text-2xl font-bold text-slate-800 leading-relaxed mb-8 md:mb-10 italic opacity-95">
                                            "{t.quote}"
                                        </p>
                                        <div className="font-bold text-2xl text-slate-900 mb-1 tracking-tight">{t.name} <span className="font-medium text-slate-400 text-lg ml-2">Class of '{t.year}</span></div>
                                        <div className="text-blue-600 font-bold text-lg tracking-tight mb-6">{t.major}</div>
                                        <div className="inline-block px-5 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-lg shadow-lg border border-white/10">{t.company}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center gap-4 mt-16">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentTestimonial(i)}
                                    className={`h-2 rounded-full transition-all duration-500 ${i === currentTestimonial ? 'bg-blue-600 w-12 shadow-md shadow-blue-200' : 'bg-slate-200 hover:bg-slate-300 w-2.5'}`}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* CAMPUS VIRTUAL TOUR */}
            <section className="py-32 bg-slate-50 relative overflow-hidden flex flex-col items-center justify-center text-center">
                <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-200 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4"></div>
                </div>
                
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <div className="w-28 h-28 bg-white rounded-full shadow-2xl flex items-center justify-center mx-auto mb-12 cursor-pointer hover:scale-110 active:scale-95 transition-all duration-500 group border border-slate-100" onClick={() => openLightbox('Virtual Tour Launch')}>
                        <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:bg-blue-700 transition-colors">
                            <Play className="w-8 h-8 text-white ml-1.5" />
                        </div>
                    </div>
                    <span className="text-blue-600 font-black tracking-[0.25em] text-[10px] uppercase mb-4 block">Immersive Experience</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-8">Engineering Campus Tour</h2>
                    <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto mb-16 leading-relaxed">Take a fully immersive 360° virtual tour of our world-class laboratories, extensive libraries, and intelligent learning spaces.</p>
                    
                    <button onClick={() => openLightbox('Virtual Tour Launch')} className="px-12 py-5 bg-slate-900 text-white font-bold text-sm tracking-[0.2em] uppercase rounded-2xl hover:bg-slate-800 transition-all shadow-2xl hover:shadow-slate-300 active:scale-95">
                        Start Exploration
                    </button>
                    
                    <div className="mt-20 flex flex-wrap justify-center gap-6">
                        {['Main Block', 'AI Labs', 'Library', 'Sports Complex', 'Auditorium'].map((loc, i) => (
                            <span key={i} className="px-6 py-3 bg-white border border-slate-200 rounded-2xl text-xs font-bold uppercase tracking-widest text-slate-600 shadow-sm hover:border-blue-400 hover:text-blue-600 cursor-pointer transition-all hover:shadow-md active:scale-95" onClick={() => openLightbox(loc)}>
                                {loc}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal (for Tour/Images) */}
            {lightboxOpen && (
                <div className="fixed inset-0 bg-slate-900/95 z-[100] flex flex-col items-center justify-center p-4 lg:p-12 animate-fade-in" onClick={() => setLightboxOpen(false)}>
                    <button className="absolute top-6 right-6 p-2 text-white/50 hover:text-white rounded-full transition-colors z-50 bg-black/50">
                        <X className="w-8 h-8" />
                    </button>
                    <div className="w-full max-w-6xl aspect-video bg-black rounded-xl border border-slate-700 shadow-2xl flex items-center justify-center flex-col overflow-hidden relative animate-slide-up" onClick={(e) => e.stopPropagation()}>
                        {lightboxImage === 'Virtual Tour Launch' ? (
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/HdQpUwgujqI?autoplay=1&mute=0"
                                title="MSIT Virtual Tour"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <>
                                <Play className="w-16 h-16 text-white/20 mb-4" />
                                <div className="text-white text-xl font-light tracking-widest">{lightboxImage} Viewer Placeholder</div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </main>
    );
};

export default Home;


