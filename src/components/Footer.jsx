import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Heart, MessageSquare, ExternalLink, ArrowRight, Users, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAccessibility } from '../context/AccessibilityContext';

const Footer = () => {
    const { setIsModalOpen } = useAccessibility();
    const [expandedSections, setExpandedSections] = useState({
        quickLinks: false,
        resources: false,
        followUs: false,
    });

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <footer className="bg-slate-950 pt-0 pb-12 border-t border-slate-900 text-slate-300">
            {/* Feedback & Join Us Banner */}
            <div className="bg-gradient-to-r from-primary/30 to-blue-900/30 border-b border-slate-800 py-6 sm:py-8 mb-12 lg:mb-20 shadow-inner">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
                    {/* Feedback Section */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 lg:pb-0 lg:pr-8">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <MessageSquare className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-white font-bold tracking-tight text-lg">Help us improve the MSIT experience.</span>
                        </div>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdy7gs1NPTGYN_ryfaL9HLq1lqdnQWIKEQZQTCaLg5jltxP7A/viewform?usp=publish-editor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-card transition-all active:scale-95 whitespace-nowrap"
                        >
                            Give Feedback 📝
                        </a>
                    </div>

                    {/* Join Us Section */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 lg:pt-0 lg:pl-8">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                <Users className="w-5 h-5 text-emerald-500" />
                            </div>
                            <span className="text-white font-bold tracking-tight text-lg">Interested in working with us? Join our team.</span>
                        </div>
                        <a
                            href="https://forms.gle/YvfaWYkXzr2RKBW86"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-card transition-all active:scale-95 whitespace-nowrap"
                        >
                            Join Us 🚀
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 mb-10 lg:mb-20">

                    {/* Col 1 */}
                    <div className="lg:col-span-2 pr-4">
                        <Link to="/" className="flex items-center gap-4 mb-10 group" aria-label="MSIT New Delhi Home">
                            <img 
                                src="/msit-logo.webp" 
                                alt="Maharaja Surajmal Institute of Technology (MSIT) Official Logo - Footer Attribution" 
                                className="h-12 md:h-16 w-auto object-contain transition-all duration-500 group-hover:scale-105 brightness-[1.1]" 
                                width="120"
                                height="112"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="flex flex-col justify-center">
                                <span className="font-['Libre_Baskerville',serif] font-black text-base md:text-xl tracking-tight leading-tight text-white group-hover:text-primary transition-colors">
                                    Maharaja Surajmal Institute of Technology
                                </span>
                            </div>
                        </Link>
                        <p className="text-slate-300 font-medium leading-relaxed mb-6 lg:mb-10 max-w-sm">
                            Shaping tomorrow's engineers and innovators through exceptional academic rigor and profound industry immersion.
                        </p>
                        <div className="space-y-4 lg:space-y-6 text-sm font-bold text-slate-400">
                            <div className="flex items-start group">
                                <MapPin className="w-5 h-5 mr-4 text-slate-700 shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
                                <a 
                                    href="https://www.google.com/maps/dir/?api=1&destination=Maharaja+Surajmal+Institute+of+Technology+Janakpuri+New+Delhi" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors leading-relaxed"
                                >
                                    C-4, Janakpuri, New Delhi<br /><span className="text-xs font-medium opacity-80 uppercase tracking-widest">PIN 110058, India</span>
                                </a>
                            </div>
                            <div className="flex items-center group">
                                <Phone className="w-5 h-5 mr-4 text-slate-700 group-hover:text-primary transition-colors" />
                                <a href="tel:+919667344125" className="hover:text-white transition-colors tracking-wide">+91 96673 44125</a>
                            </div>
                            <div className="flex items-center group">
                                <Mail className="w-5 h-5 mr-4 text-slate-700 group-hover:text-primary transition-colors" />
                                <a href="mailto:info@msit.in" className="hover:text-white transition-colors tracking-wide">info@msit.in</a>
                            </div>
                        </div>
                    </div>

                    {/* Col 2 */}
                    <div>
                        <h3 
                            onClick={() => toggleSection('quickLinks')}
                            className="text-white text-xs font-black uppercase tracking-[0.25em] mb-4 lg:mb-10 opacity-80 cursor-pointer lg:cursor-default flex items-center justify-between lg:block"
                        >
                            <span>Quick Links</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 lg:hidden ${expandedSections.quickLinks ? 'rotate-180' : ''}`} />
                        </h3>
                        <ul className={`space-y-3 lg:space-y-5 font-bold text-sm transition-all duration-300 overflow-hidden ${expandedSections.quickLinks ? 'max-h-60 opacity-100 mb-6' : 'max-h-0 opacity-0 lg:max-h-none lg:opacity-100 lg:mb-0 pointer-events-none lg:pointer-events-auto'}`}>
                            <li><Link to="/about" className="hover:text-primary transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-primary transition-all"></span> About MSIT</Link></li>
                            <li><Link to="/online-fee" className="hover:text-primary transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-primary transition-all"></span> Admissions 2026</Link></li>
                            <li><Link to="/cse" className="hover:text-primary transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-primary transition-all"></span> Academic Programs</Link></li>
                            <li><Link to="/society" className="hover:text-primary transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-primary transition-all"></span> Campus Life</Link></li>
                            <li><Link to="/brochure" className="hover:text-primary transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-primary transition-all"></span> Download Brochure</Link></li>
                        </ul>
                    </div>

                    {/* Col 3 */}
                    <div>
                        <h3 
                            onClick={() => toggleSection('resources')}
                            className="text-white text-xs font-black uppercase tracking-[0.25em] mb-4 lg:mb-10 opacity-80 cursor-pointer lg:cursor-default flex items-center justify-between lg:block"
                        >
                            <span>Resources</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 lg:hidden ${expandedSections.resources ? 'rotate-180' : ''}`} />
                        </h3>
                        <ul className={`space-y-3 lg:space-y-5 font-bold text-sm transition-all duration-300 overflow-hidden ${expandedSections.resources ? 'max-h-60 opacity-100 mb-6' : 'max-h-0 opacity-0 lg:max-h-none lg:opacity-100 lg:mb-0 pointer-events-none lg:pointer-events-auto'}`}>
                            <li><Link to="/brochure" className="hover:text-primary transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-primary transition-all"></span> Information Bulletin</Link></li>
                            <li><Link to="/academic-calendar" className="hover:text-primary transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-primary transition-all"></span> Academic Calendar</Link></li>
                            <li><Link to="/timetable" className="hover:text-primary transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-primary transition-all"></span> Time Table</Link></li>
                            <li><Link to="/sitemap" className="hover:text-primary transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-primary transition-all"></span> Sitemap</Link></li>
                        </ul>
                    </div>

                    {/* Col 4 */}
                    <div>
                        <h3 
                            onClick={() => toggleSection('followUs')}
                            className="text-white text-xs font-black uppercase tracking-[0.25em] mb-4 lg:mb-10 opacity-80 cursor-pointer lg:cursor-default flex items-center justify-between lg:block"
                        >
                            <span>Follow Us</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 lg:hidden ${expandedSections.followUs ? 'rotate-180' : ''}`} />
                        </h3>
                        <div className={`transition-all duration-300 overflow-hidden lg:overflow-visible ${expandedSections.followUs ? 'max-h-[300px] opacity-100 mb-6' : 'max-h-0 opacity-0 lg:max-h-none lg:opacity-100 lg:mb-0 pointer-events-none lg:pointer-events-auto'}`}>
                            <div className="flex gap-4 mb-6 lg:mb-10">
                            {[
                                { Icon: Facebook, href: "https://www.facebook.com/msitnewdelhi/", label: "Follow MSIT on Facebook", hoverClass: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]" },
                                { Icon: Twitter, href: "https://x.com/msitnewdelhi?lang=en", label: "Follow MSIT on Twitter", hoverClass: "hover:bg-[#15181C] hover:text-white hover:border-[#333]" },
                                { Icon: Linkedin, href: "https://www.linkedin.com/school/maharaja-surajmal-institute-of-technology-msitnewdelhi/posts/?feedView=all", label: "Follow MSIT on LinkedIn", hoverClass: "hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5]" },
                                { Icon: Instagram, href: "https://www.instagram.com/msitnewdelhi/?hl=en", label: "Follow MSIT on Instagram", hoverClass: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent" }
                            ].map(({ Icon, href, label, hoverClass }, i) => (
                                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center transition-all hover:-translate-y-1 border border-slate-800 ${hoverClass}`} aria-label={label}>
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-900">
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-3">Newsletter</h4>
                            <div className="flex gap-2">
                                <input type="email" placeholder="Email" className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs focus:border-primary outline-none w-full" />
                                <button className="bg-primary p-2 rounded-lg text-white hover:bg-primary/80 transition-colors" aria-label="Subscribe to newsletter"><ArrowRight className="w-4 h-4" /></button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 pb-20 md:pb-0 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold tracking-widest uppercase text-slate-400">
                    <div className="flex items-center gap-2">
                        <span>© 2026 MSIT New Delhi</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="hover:text-white transition-colors cursor-pointer uppercase font-bold"
                            aria-label="Open accessibility settings"
                        >
                            Accessibility
                        </button>
                        <Link to="/team" className="hover:text-white transition-colors">Meet the Team</Link>
                        <Link to="/admin" className="hover:text-white transition-colors">Admin</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
