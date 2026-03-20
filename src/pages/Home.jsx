import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    Check, Award, ArrowRight, Play, X, Mail, Globe,
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
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
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
            <section ref={heroRef} className="relative w-full h-[90vh] min-h-[700px] flex items-center bg-slate-900 overflow-hidden">
                {/* Interactive Campus Background Image */}
                <div className="absolute inset-0 z-0 group overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transition-transform duration-[20s] ease-out hover:scale-110"
                        style={{ backgroundImage: "url('/campus-hero.jpg')" }}
                    ></div>
                    {/* Premium dark gradient overlays for maximum text readability and aesthetic */}
                    <div className="absolute inset-0 bg-slate-950/60 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-slate-900/40"></div>
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
                        At Maharaja Surajmal Institute of Technology (MSIT), we are preparing tomorrow's engineers and innovators through uncompromising academic excellence, active industry collaboration, and transformative learning experiences.
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
            </section>

            {/* ANNOUNCEMENT TICKER */}
            <div className="bg-slate-100 border-b border-slate-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-6 flex items-center">
                    <div className="bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded mr-4 shrink-0">Alert</div>
                    <div className="text-sm font-medium text-slate-600 truncate flex-grow">
                        Admission for B.Tech lateral entry programs is now open. <a href="http://www.ipu.ac.in/" target="_blank" rel="noopener noreferrer" className="text-slate-900 underline underline-offset-2 ml-2 hover:text-slate-600 transition-colors">View Details</a>
                    </div>
                </div>
            </div>

            {/* NEWS, EVENTS & STORIES */}
            <section id="news" className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
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
                                <div className="transform group-hover:-translate-y-2 transition-transform duration-300">{stat.icon}</div>
                                <div className="text-5xl md:text-6xl font-light tracking-tighter text-slate-900 mb-3">{stat.value}</div>
                                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">{stat.label}</div>
                                {stat.label === "PLACEMENT RATE" && (
                                    <Link to="/placements" className="mt-2 text-xs font-semibold text-blue-600 border border-blue-600/30 px-4 py-1.5 rounded-full hover:bg-blue-50 transition-colors flex items-center group-hover:bg-blue-600 group-hover:text-white">
                                        View Records <ArrowRight className="w-3 h-3 ml-1" />
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
                            <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase mb-4 block">Why Choose Us</span>
                            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8 leading-tight">
                                Education that <br /><span className="font-semibold text-white">Transcend Boundaries.</span>
                            </h2>
                            <p className="text-lg text-slate-400 font-light leading-relaxed mb-10">
                                MSIT stands at the intersection of rigorous academic theory and practical, industry-driven application. We don't just teach engineering; we cultivate the mindset required to solve the complex challenges of tomorrow.
                            </p>
                            <div className="space-y-8">
                                {[
                                    { icon: <Target className="w-6 h-6 text-emerald-400" />, title: "Industry-Aligned Curriculum", desc: "Syllabus constantly updated in collaboration with tech giants." },
                                    { icon: <Lightbulb className="w-6 h-6 text-amber-400" />, title: "Innovation Ecosystem", desc: "Access to incubation centers, maker spaces, and heavy research funding." },
                                    { icon: <Globe className="w-6 h-6 text-blue-400" />, title: "Global Perspective", desc: "Exchange programs and international hackathon participation." }
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="mt-1 p-2 bg-slate-800 rounded-lg">{feature.icon}</div>
                                        <div>
                                            <h4 className="text-xl font-medium text-white mb-2">{feature.title}</h4>
                                            <p className="text-slate-400 font-light">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[600px] rounded-2xl overflow-hidden group">
                            {highlights.map((highlight, idx) => (
                                <div
                                    key={idx}
                                    className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                                        idx === currentHighlight ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
                                    }`}
                                >
                                    <div 
                                        className="absolute inset-0 bg-slate-800 bg-cover bg-center transition-transform duration-[10s] ease-linear" 
                                        style={{ backgroundImage: `url('${highlight.image}')`, transform: idx === currentHighlight ? 'scale(1.1)' : 'scale(1)' }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80"></div>
                                    
                                    <div className="absolute bottom-12 left-8 right-8 animate-slide-up">
                                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-2xl">
                                            <div className="text-2xl md:text-3xl font-light text-white mb-4 leading-relaxed">"{highlight.quote}"</div>
                                            <div className="text-sm font-semibold tracking-widest text-blue-400 uppercase">— {highlight.source}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Carousel Navigation Dots */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                {highlights.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentHighlight(i)}
                                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentHighlight ? 'bg-white w-6' : 'bg-white/30 hover:bg-white/50'}`}
                                        aria-label={`Go to slide ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ACADEMIC PROGRAMS */}
            <section id="programs" className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-3 block">Academics</span>
                        <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-6">World-Class Engineering Departments</h2>
                        <p className="text-xl text-slate-600 font-light">Choose from our NBA accredited, highly specialized programs designed to create leaders in technology.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {departments.map((dept, i) => (
                            <Link to={`/${dept.code.toLowerCase()}`} key={i} className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-2xl transition-all duration-300 group cursor-pointer relative overflow-hidden block">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-10 transition-transform group-hover:scale-150 duration-500"></div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="text-5xl bg-slate-100 w-20 h-20 rounded-xl flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        {dept.icon}
                                    </div>
                                    <div className="text-right">
                                        <div className="text-3xl font-bold text-slate-200 group-hover:text-blue-100 transition-colors">{dept.code}</div>
                                        {dept.accredited && <div className="text-xs font-bold uppercase tracking-wider text-emerald-500 mt-1">NBA Accredited</div>}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-semibold text-slate-900 mb-4">{dept.name}</h3>
                                <p className="text-slate-600 font-light mb-8 leading-relaxed h-12">{dept.desc}</p>
                                <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                                    <div className="flex items-center text-sm font-medium text-slate-500">
                                        <Users className="w-4 h-4 mr-2" /> {dept.students} Students / Batch
                                    </div>
                                    <div className="text-blue-600 font-medium text-sm flex items-center group-hover:translate-x-2 transition-transform">
                                        Explore Dept <ArrowRight className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS CAROUSEL */}
            <section className="py-24 bg-white border-y border-slate-100 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-light text-slate-900 tracking-tight mb-16">Alumni Shaping the World</h2>

                    <div
                        className="relative max-w-5xl mx-auto px-4 md:px-0"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div className="text-6xl text-slate-100 absolute -top-10 -left-2 md:-top-8 md:-left-8 font-serif z-0">"</div>
                        <div className="min-h-[450px] md:min-h-[350px] flex items-center justify-center relative z-10">
                            {testimonials.map((t, i) => (
                                <div
                                    key={i}
                                    className={`absolute inset-0 transition-all duration-700 flex flex-col md:flex-row items-center justify-center gap-12 px-2 sm:px-4
                                    ${i === currentTestimonial ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-12 pointer-events-none -z-10'}`}
                                >
                                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white shrink-0 transform -rotate-2 group-hover:rotate-0 transition-transform duration-500">
                                        <img src={t.image} alt={t.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                                    </div>

                                    <div className="text-center md:text-left flex-grow max-w-2xl">
                                        <p className="text-xl sm:text-2xl font-light text-slate-800 leading-relaxed mb-6 md:mb-8 italic">
                                            "{t.quote}"
                                        </p>
                                        <div className="font-semibold text-lg md:text-xl text-slate-900">{t.name} <span className="font-light text-slate-500">'{t.year}</span></div>
                                        <div className="text-blue-600 font-medium text-base md:text-lg">{t.major}</div>
                                        <div className="inline-block mt-3 px-4 py-1 bg-slate-900 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full">{t.company}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center gap-3 mt-12">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentTestimonial(i)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentTestimonial ? 'bg-slate-900 w-8' : 'bg-slate-300 hover:bg-slate-400'}`}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* CAMPUS VIRTUAL TOUR */}
            <section className="py-32 bg-slate-100 relative overflow-hidden flex flex-col items-center justify-center text-center">
                <div className="relative z-10 max-w-3xl mx-auto px-6">
                    <div className="w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center mx-auto mb-10 cursor-pointer hover:scale-110 transition-transform duration-300 group" onClick={() => openLightbox('Virtual Tour Launch')}>
                        <Play className="w-8 h-8 text-slate-900 ml-1 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-6">Explore Our Campus</h2>
                    <p className="text-xl text-slate-600 font-light mb-12">Take a fully immersive 360° virtual tour of our world-class laboratories, extensive libraries, and intelligent learning spaces.</p>
                    <button onClick={() => openLightbox('Virtual Tour Launch')} className="px-10 py-5 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors shadow-xl">
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

            {/* CALL-TO-ACTION / LEAD */}
            <section className="py-24 relative overflow-hidden group">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed transition-transform duration-[15s] ease-out group-hover:scale-110"
                    style={{ backgroundImage: "url('/campus-hero.jpg')" }}
                ></div>
                <div className="absolute inset-0 z-0 bg-indigo-950/80 mix-blend-multiply"></div>

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
        </main>
    );
};

export default Home;
