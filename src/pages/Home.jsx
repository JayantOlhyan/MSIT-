import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    Check, Award, ArrowRight, Play, X, Mail, Globe, ChevronDown,
    Users, BookOpen, GraduationCap, TrendingUp, Lightbulb, Target, ExternalLink,
    Facebook, Linkedin, Instagram
} from 'lucide-react';
import SEO from '../components/SEO';

const Home = () => {
    const [activeNewsTab, setActiveNewsTab] = useState('all');
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
        if (distance > 50) {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }
        if (distance < -50) {
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
            const offset = 150; 
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
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
        { name: "Computer Science & Engineering", code: "CSE", students: 480, icon: "💻", desc: "Master software architecture, artificial intelligence, and scalable systems.", accredited: true },
        { name: "Information Technology", code: "IT", students: 240, icon: "🌐", desc: "Focus on network security, cloud infrastructure, and data analytics.", accredited: true },
        { name: "Electronics & Communication", code: "ECE", students: 180, icon: "🛰️", desc: "Pioneer the hardware of tomorrow with embedded systems and VLSI design.", accredited: true },
        { name: "Electrical & Electronics", code: "EEE", students: 120, icon: "⚡", desc: "Innovate sustainable power systems, control engineering, and robotics.", accredited: true }
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
                <div className="absolute inset-0 z-0 group overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transition-transform duration-[20s] ease-out group-hover:scale-105"
                        style={{ backgroundImage: "url('/campus-hero.jpg')" }}
                    ></div>
                    <div className="absolute inset-0 bg-slate-950/50 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-slate-900/70"></div>
                </div>

                {/* Giant Centered Text - Responsive Scaling */}
                <div className="relative z-10 w-full px-4 sm:px-6 flex flex-col items-center justify-center text-center -mt-16 sm:-mt-24 md:-mt-32 pointer-events-none">
                    <h1 
                        className="font-heading font-black tracking-[-0.08em] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/100 to-white/5 leading-[0.6] drop-shadow-[0_80px_160px_rgba(0,0,0,1)] transition-all duration-1000 ease-out select-none uppercase blur-[0.1px] transform-gpu"
                        style={{ fontSize: '26vw' }}
                    >
                        MSIT
                    </h1>
                    {/* The line below stays subtle and does not grow with the text */}
                    <div className="h-1.5 w-24 sm:w-32 bg-white/30 mt-6 sm:mt-10 rounded-full backdrop-blur-md shadow-2xl animate-pulse"></div>
                </div>

                {/* Explore Banner at Bottom */}
                <div 
                    className="absolute bottom-0 left-0 w-full bg-[#1e4a9b] hover:bg-[#153a7a] transition-all duration-500 z-20 flex justify-center items-center group/banner py-5 md:py-6 cursor-pointer border-t border-white/10"
                    onClick={() => scrollToSection('news')}
                >
                    <span className="font-heading text-white text-sm md:text-base font-bold tracking-widest uppercase flex items-center gap-3 group-hover/banner:translate-y-[-3px] transition-transform">
                        Explore Maharaja Surajmal Institute <ChevronDown className="w-5 h-5 animate-bounce text-blue-300" />
                    </span>
                </div>
            </section>

            {/* ANNOUNCEMENT TICKER */}
            <div className="bg-slate-100 border-b border-slate-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-6 flex items-center">
                    <div className="font-heading bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded mr-4 shrink-0">Alert</div>
                    <div className="font-body text-sm font-medium text-slate-600 truncate flex-grow">
                        Admission for B.Tech lateral entry programs is now open. <a href="http://www.ipu.ac.in/" target="_blank" rel="noopener noreferrer" className="text-slate-900 underline underline-offset-2 ml-2 hover:text-slate-600 transition-colors">View Details</a>
                    </div>
                </div>
            </div>

            {/* NEWS & EVENTS */}
            <section id="news" className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
                        <div>
                            <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">News, Events, and Stories</h2>
                        </div>
                        <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide w-full md:w-auto">
                            {['all', 'news', 'events', 'stories'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveNewsTab(tab)}
                                    className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-heading font-bold transition-all duration-300 whitespace-nowrap active:scale-95 ${activeNewsTab === tab ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400'}`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredEvents.map((item, i) => (
                            <a href={item.link} key={i} className={`bg-white rounded-xl shadow-sm hover:shadow-xl border-l-4 ${item.color} p-8 flex flex-col justify-between group transform hover:-translate-y-1 transition-all duration-300 cursor-pointer`}>
                                <div>
                                    <span className="font-heading inline-block text-[11px] font-semibold uppercase tracking-widest text-slate-500 mb-4">{item.label}</span>
                                    <h3 className="font-heading text-xl font-semibold text-slate-900 leading-snug mb-6 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                                </div>
                                <div className="flex justify-between items-center mt-auto pt-6 border-t border-slate-100">
                                    <span className="font-body text-sm text-slate-400">{item.date}</span>
                                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-all group-hover:translate-x-1" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* THE MSIT DIFFERENCE */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="font-heading text-blue-400 font-semibold tracking-widest text-sm uppercase mb-4 block">Why MSIT</span>
                            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                                Excellence in <br /><span className="font-bold text-white text-3xl sm:text-4xl lg:text-5xl">Engineering.</span>
                            </h2>
                            <p className="font-body text-lg text-slate-400 leading-relaxed mb-10">
                                MSIT stands at the intersection of rigorous academic theory and practical, industry-driven application. We cultivate the mindset required to solve tomorrow's challenges.
                            </p>
                            <div className="flex gap-4 mb-10">
                                {[
                                    { Icon: Facebook, url: "https://www.facebook.com/msitnewdelhi/" },
                                    { Icon: ExternalLink, url: "https://x.com/msitnewdelhi?lang=en" },
                                    { Icon: Linkedin, url: "https://www.linkedin.com/school/maharaja-surajmal-institute-of-technology-msitnewdelhi/" },
                                    { Icon: Instagram, url: "https://www.instagram.com/msitnewdelhi/" }
                                ].map(({ Icon, url }, i) => (
                                    <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all transform hover:-translate-y-1 shadow-lg shadow-black/40">
                                        <Icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                            <div className="space-y-8">
                                {[
                                    { icon: <Target className="w-6 h-6 text-emerald-400" />, title: "Industry-Aligned Curriculum", desc: "Syllabus updated in collaboration with tech leaders." },
                                    { icon: <Lightbulb className="w-6 h-6 text-amber-400" />, title: "Innovation Ecosystem", desc: "Access to incubation centers and maker spaces." },
                                    { icon: <Globe className="w-6 h-6 text-blue-400" />, title: "Global Perspective", desc: "Exchange programs and international hackathons." }
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="mt-1 p-2 bg-slate-800 rounded-lg">{feature.icon}</div>
                                        <div>
                                            <h4 className="font-heading text-xl font-semibold text-white mb-2">{feature.title}</h4>
                                            <p className="font-body text-slate-400">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[450px] sm:h-[600px] rounded-2xl overflow-hidden group shadow-2xl">
                            {highlights.map((highlight, idx) => (
                                <div
                                    key={idx}
                                    className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                                        idx === currentHighlight 
                                            ? 'opacity-100 scale-100 translate-x-0' 
                                            : 'opacity-0 scale-105 translate-x-12 pointer-events-none'
                                    }`}
                                >
                                    <div 
                                        className="absolute inset-0 bg-slate-800 bg-cover bg-center transition-transform duration-[10s] ease-linear" 
                                        style={{ 
                                            backgroundImage: `url('${highlight.image}')`,
                                            transform: idx === currentHighlight ? 'scale(1.1)' : 'scale(1)'
                                        }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent"></div>
                                    <div className="absolute bottom-6 sm:bottom-12 left-4 sm:left-8 right-4 sm:right-8">
                                        <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-white/20 shadow-2xl">
                                            <div className="font-body text-xl sm:text-2xl md:text-3xl text-white mb-2 sm:mb-4 leading-relaxed">"{highlight.quote}"</div>
                                            <div className="font-heading text-[10px] sm:text-sm font-semibold tracking-widest text-blue-400 uppercase">— {highlight.source}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div className="fixed inset-0 bg-slate-900/95 z-[100] flex flex-col items-center justify-center p-4 lg:p-12 animate-fade-in" onClick={() => setLightboxOpen(false)}>
                    <button className="absolute top-6 right-6 p-2 text-white/50 hover:text-white rounded-full bg-black/50">
                        <X className="w-8 h-8" />
                    </button>
                    <div className="w-full max-w-6xl aspect-video bg-black rounded-xl border border-slate-700 shadow-2xl flex items-center justify-center relative overflow-hidden" onClick={(e) => e.stopPropagation()}>
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
                            <div className="text-white text-xl font-light tracking-widest">{lightboxImage} Viewer</div>
                        )}
                    </div>
                </div>
            )}
        </main>
    );
};

export default Home;
