import React, { useState } from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { Play, X, Compass, MapPin, Layers, Info, CheckCircle2, ChevronRight, Eye, Video } from 'lucide-react';

const VirtualTour = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxMedia, setLightboxMedia] = useState({ type: 'video', url: '', title: '' });
    const [activeCategory, setActiveCategory] = useState('all');

    const tourStats = [
        { value: "8+", label: "Academic Blocks" },
        { value: "45+", label: "Smart Laboratories" },
        { value: "50,000+", label: "Library Volumes" },
        { value: "8.5", label: "Acres Lush Campus" }
    ];

    const tourLocations = [
        {
            id: 'main-block',
            title: 'Administrative & Main Block',
            category: 'academic',
            description: 'The architectural heart of MSIT, housing the administrative office, principal office, dean office, and major lecture theatres with modern acoustic designs.',
            highlights: ['Central Reception', 'Deans & Administration Office', 'Main Seminar Hall', 'Smart Classrooms'],
            image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800',
            panoramaUrl: 'https://www.youtube.com/embed/HdQpUwgujqI?autoplay=1',
            type: 'video'
        },
        {
            id: 'ai-labs',
            title: 'Quantum & Advanced AI Labs',
            category: 'laboratories',
            description: 'Equipped with state-of-the-art server racks, NVIDIA GPUs, and development terminals, these labs host advanced research in AI, Machine Learning, and Cryptography.',
            highlights: ['High-Performance Server Racks', 'NVIDIA GPU Workstations', 'IoT and Robotics Kits', 'Collaborative Innovation Zone'],
            image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=800',
            panoramaUrl: 'https://www.youtube.com/embed/HdQpUwgujqI?autoplay=1',
            type: 'video'
        },
        {
            id: 'library',
            title: 'Central Library & Reading Hall',
            category: 'facilities',
            description: 'A fully digitalized learning repository with book bank services, IEEE digital library access, individual reading cabins, and a resource archive.',
            highlights: ['50,000+ Print Volumes', 'IEEE & DELNET Digital Access', 'Spacious Reading Halls', 'Archival & Reference Sections'],
            image: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800',
            panoramaUrl: 'https://www.youtube.com/embed/HdQpUwgujqI?autoplay=1',
            type: 'video'
        },
        {
            id: 'auditorium',
            title: 'Centenary Auditorium',
            category: 'facilities',
            description: 'A grand centrally-airconditioned facility hosting international conferences, national hackathons, cultural festivals, and corporate campus placements.',
            highlights: ['1,000+ Seating Capacity', 'State-of-the-Art Line Array Audio', 'Dual Laser Projector Setup', 'Spacious Backstage & Greenrooms'],
            image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
            panoramaUrl: 'https://www.youtube.com/embed/HdQpUwgujqI?autoplay=1',
            type: 'video'
        },
        {
            id: 'sports-complex',
            title: 'Multi-Sport Gymnasium & Complex',
            category: 'sports',
            description: 'Promoting a healthy mind in a healthy body, our sports arena is equipped for both indoor training sessions and outdoor competitive tournaments.',
            highlights: ['Football & Cricket Grounds', 'Lawn Tennis Courts', 'Indoor Badminton Courts', 'Fully Equipped Gym'],
            image: 'https://images.unsplash.com/photo-1544033527-b192daee1f5b?auto=format&fit=crop&q=80&w=800',
            panoramaUrl: 'https://www.youtube.com/embed/HdQpUwgujqI?autoplay=1',
            type: 'video'
        },
        {
            id: 'hostel',
            title: 'Student Residence (Hostels)',
            category: 'facilities',
            description: 'Secure, Wi-Fi enabled boarding facilities providing single and double occupancy options with modern mess halls and recreation centers.',
            highlights: ['24/7 Power & Water Supply', 'High-Speed Wi-Fi Connectivity', 'Hygienic Dining & Mess', 'Recreation & Common Rooms'],
            image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
            panoramaUrl: 'https://www.youtube.com/embed/HdQpUwgujqI?autoplay=1',
            type: 'video'
        }
    ];

    const categories = [
        { id: 'all', label: 'All Locations' },
        { id: 'academic', label: 'Academic & Blocks' },
        { id: 'laboratories', label: 'Laboratories' },
        { id: 'facilities', label: 'Student Facilities' },
        { id: 'sports', label: 'Sports Arena' }
    ];

    const filteredLocations = activeCategory === 'all'
        ? tourLocations
        : tourLocations.filter(loc => loc.category === activeCategory);

    const openTour = (media) => {
        setLightboxMedia(media);
        setLightboxOpen(true);
    };

    return (
        <main className="min-h-screen bg-slate-50">
            <SEO 
                title="Virtual Campus Tour" 
                description="Experience Maharaja Surajmal Institute of Technology from anywhere in the world. Take our immersive 360° virtual tour of blocks, labs, and facilities."
                canonicalPath="/virtual-tour"
            />

            <PageHero 
                title="360° Immersive" 
                accentTitle="Virtual Tour" 
                description="Step inside MSIT's vibrant Delhi campus. Explore classrooms, laboratories, recreational facilities, and grounds via high-definition virtual experiences."
                breadcrumbs={[{ label: 'Virtual Tour' }]}
                heroImage="/campus-hero.webp"
                heroImageAlt="Interactive virtual 360 tour of MSIT campus blocks and facilities"
            />

            {/* Quick Stats Banner */}
            <section className="bg-white py-10 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {tourStats.map((stat, idx) => (
                            <div key={idx} className="text-center md:border-r last:border-0 border-slate-200">
                                <div className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{stat.value}</div>
                                <div className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* main virtual tour display */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 mb-16 shadow-2xl relative overflow-hidden border border-white/5">
                    {/* Immersive Background Blur Decor */}
                    <div className="absolute top-0 right-0 w-[clamp(250px,40vw,500px)] h-[clamp(250px,40vw,500px)] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
                    
                    <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
                        <div className="lg:col-span-5">
                            <span className="text-blue-400 font-extrabold tracking-[0.25em] text-xs uppercase mb-3 block">Start Exploration</span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                                MSIT Campus <br />Video Walkthrough
                            </h2>
                            <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed font-medium">
                                Take a structured, guided video tour of our campus architecture, laboratories, lecture halls, and student activity centers led by our student ambassadors.
                            </p>
                            <button 
                                onClick={() => openTour({ type: 'video', url: 'https://www.youtube.com/embed/HdQpUwgujqI?autoplay=1', title: 'MSIT Campus Guided Walkthrough' })}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/95 text-white font-bold text-sm tracking-wider uppercase rounded-2xl transition-all shadow-lg active:scale-95 group"
                            >
                                <Play className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                                Watch Tour Video
                            </button>
                        </div>
                        
                        <div className="lg:col-span-7">
                            <div className="relative aspect-video rounded-2xl overflow-hidden group shadow-2xl border border-white/10 cursor-pointer" onClick={() => openTour({ type: 'video', url: 'https://www.youtube.com/embed/HdQpUwgujqI?autoplay=1', title: 'MSIT Campus Guided Walkthrough' })}>
                                <img 
                                    src="/campus-library.webp" 
                                    alt="Virtual Tour Video Preview" 
                                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[6s] ease-out" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-115 group-hover:bg-primary transition-all duration-500 shadow-xl">
                                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                                    </div>
                                </div>
                                <div className="absolute bottom-6 left-6 text-white bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase border border-white/5">
                                    Guided Video Tour • 3:45 Mins
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hotspots / Category Selector */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-slate-200 pb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Explore Specific Hotspots</h3>
                        <p className="text-slate-500 text-sm mt-1">Select a category below to tour individual labs, auditoriums, and blocks.</p>
                    </div>
                    <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-3 md:pb-0 scrollbar-none">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap active:scale-95 shrink-0 ${
                                    activeCategory === cat.id 
                                        ? 'bg-slate-900 text-white shadow-md' 
                                        : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400 hover:text-slate-900'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Locations Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredLocations.map((loc) => (
                        <div key={loc.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
                            <div>
                                <div className="relative h-56 overflow-hidden">
                                    <img 
                                        src={loc.image} 
                                        alt={loc.title} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                    />
                                    <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
                                        <MapPin className="w-3 h-3 text-blue-400" />
                                        {loc.category.toUpperCase()}
                                    </div>
                                </div>
                                
                                <div className="p-8">
                                    <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-primary transition-colors">{loc.title}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium line-clamp-3">{loc.description}</p>
                                    
                                    <h5 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1">
                                        <Layers className="w-3.5 h-3.5 text-blue-500" /> Key Features
                                    </h5>
                                    <ul className="space-y-2">
                                        {loc.highlights.slice(0, 3).map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                                <span className="truncate">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="p-8 pt-0 mt-auto">
                                <button
                                    onClick={() => openTour({ type: loc.type, url: loc.panoramaUrl, title: loc.title })}
                                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-slate-700 hover:text-primary font-bold text-xs uppercase tracking-widest rounded-xl transition-all active:scale-98"
                                >
                                    <Eye className="w-4 h-4" />
                                    Explore Hotspot
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Interactive Experience Banner */}
            <section className="bg-slate-900 text-white py-24 relative overflow-hidden border-t border-white/5">
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
                </div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <Compass className="w-16 h-16 text-blue-400 mx-auto mb-8 animate-pulse" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Need a Real Guided Tour?</h2>
                    <p className="text-slate-300 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                        We organize offline campus visits for prospective students, parents, and recruiter companies. Submit an inquiry to book a physical tour session led by our administrative officers.
                    </p>
                    <a 
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm tracking-widest uppercase rounded-2xl transition-all shadow-xl active:scale-95"
                    >
                        Schedule Campus Visit
                        <ChevronRight className="w-4 h-4" />
                    </a>
                </div>
            </section>

            {/* Lightbox / Video Viewer */}
            {lightboxOpen && (
                <div className="fixed inset-0 bg-slate-950/95 z-[100] flex flex-col items-center justify-center p-4 lg:p-12 animate-fade-in" onClick={() => setLightboxOpen(false)}>
                    <button className="absolute top-6 right-6 p-2.5 text-white/60 hover:text-white rounded-full transition-colors z-50 bg-black/40 hover:bg-black/60 border border-white/10 shadow-lg">
                        <X className="w-7 h-7" />
                    </button>
                    <div className="w-full max-w-5xl aspect-video bg-black rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative animate-slide-up" onClick={(e) => e.stopPropagation()}>
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src={lightboxMedia.url}
                            title={lightboxMedia.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="mt-4 text-white text-base font-semibold tracking-wider uppercase drop-shadow-md">
                        {lightboxMedia.title}
                    </div>
                </div>
            )}
        </main>
    );
};

export default VirtualTour;
