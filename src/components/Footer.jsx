import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Heart, MessageSquare, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-950 pt-0 pb-12 border-t border-slate-900 text-slate-400">
            {/* Feedback Banner */}
            <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border-b border-slate-800 py-8 mb-20 shadow-inner">
                <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                            <MessageSquare className="w-5 h-5 text-blue-400" />
                        </div>
                        <span className="text-slate-200 font-bold tracking-tight text-lg">Help us improve the MSIT experience.</span>
                    </div>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdy7gs1NPTGYN_ryfaL9HLq1lqdnQWIKEQZQTCaLg5jltxP7A/viewform?usp=publish-editor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-xl transition-all active:scale-95 whitespace-nowrap"
                    >
                        Give Feedback 📝
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">

                    {/* Col 1 */}
                    <div className="lg:col-span-2 pr-4">
                        <Link to="/" className="flex items-center gap-4 mb-10 group" aria-label="MSIT New Delhi Home">
                            <img 
                                src="/msit-logo.png" 
                                alt="MSIT Logo" 
                                className="h-12 md:h-16 w-auto object-contain transition-all duration-500 group-hover:scale-105 brightness-[1.1]" 
                            />
                            <div className="flex flex-col justify-center">
                                <span className="font-['Libre_Baskerville',serif] font-black text-[18px] md:text-[22px] tracking-tight leading-tight text-white group-hover:text-blue-400 transition-colors">
                                    Maharaja Surajmal Institute of Technology
                                </span>
                            </div>
                        </Link>
                        <p className="text-slate-300 font-medium leading-relaxed mb-10 max-w-sm opacity-80">
                            Shaping tomorrow's engineers and innovators through exceptional academic rigor and profound industry immersion.
                        </p>
                        <div className="space-y-6 text-sm font-bold text-slate-400">
                            <div className="flex items-start group">
                                <MapPin className="w-5 h-5 mr-4 text-slate-700 shrink-0 mt-0.5 group-hover:text-blue-500 transition-colors" />
                                <a 
                                    href="https://www.google.com/maps/dir/?api=1&destination=Maharaja+Surajmal+Institute+of+Technology+Janakpuri+New+Delhi" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors leading-relaxed"
                                >
                                    C-4, Janakpuri, New Delhi<br /><span className="text-xs font-medium opacity-60 uppercase tracking-widest">PIN 110058, India</span>
                                </a>
                            </div>
                            <div className="flex items-center group">
                                <Phone className="w-5 h-5 mr-4 text-slate-700 group-hover:text-blue-500 transition-colors" />
                                <a href="tel:+919667344125" className="hover:text-white transition-colors tracking-wide">+91 96673 44125</a>
                            </div>
                            <div className="flex items-center group">
                                <Mail className="w-5 h-5 mr-4 text-slate-700 group-hover:text-blue-500 transition-colors" />
                                <a href="mailto:info@msit.in" className="hover:text-white transition-colors tracking-wide">info@msit.in</a>
                            </div>
                        </div>
                    </div>

                    {/* Col 2 */}
                    <div>
                        <h4 className="text-white text-[11px] font-black uppercase tracking-[0.25em] mb-10 opacity-60">Quick Links</h4>
                        <ul className="space-y-5 font-bold text-[13px]">
                            <li><Link to="/about" className="hover:text-blue-400 transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-blue-400 transition-all"></span> About MSIT</Link></li>
                            <li><Link to="/online-fee" className="hover:text-blue-400 transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-blue-400 transition-all"></span> Admissions 2026</Link></li>
                            <li><Link to="/cse" className="hover:text-blue-400 transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-blue-400 transition-all"></span> Academic Programs</Link></li>
                            <li><Link to="/society" className="hover:text-blue-400 transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-blue-400 transition-all"></span> Campus Life</Link></li>
                            <li><Link to="/brochure" className="hover:text-blue-400 transition-all flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-blue-400 transition-all"></span> Download Brochure</Link></li>
                        </ul>
                    </div>

                    {/* Col 3 */}
                    <div>
                        <h4 className="text-white text-[11px] font-black uppercase tracking-[0.25em] mb-10 opacity-60">Resources</h4>
                        <ul className="space-y-5 font-bold text-[13px]">
                            <li><a href="https://msit.techtron.net/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Student Portal</a></li>
                            <li><a href="http://library.msit.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Digital Library</a></li>
                            <li><a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Campus Mail</a></li>
                            <li><Link to="/administration" className="hover:text-white transition-colors">Faculty Portal</Link></li>
                            <li><Link to="/academic-calendar" className="hover:text-white transition-colors">Academic Calendar</Link></li>
                            <li><Link to="/syllabus" className="hover:text-white transition-colors">Course Syllabus</Link></li>
                        </ul>
                    </div>

                    {/* Col 4 */}
                    <div>
                        <h4 className="text-white text-[11px] font-black uppercase tracking-[0.25em] mb-10 opacity-60">Follow Us</h4>
                        <div className="flex gap-4 mb-10">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1 border border-slate-800">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-900">
                            <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-3">Newsletter</h5>
                            <div className="flex gap-2">
                                <input type="email" placeholder="Email" className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs focus:border-blue-500 outline-none w-full" />
                                <button className="bg-blue-600 p-2 rounded-lg text-white hover:bg-blue-500 transition-colors"><ArrowRight className="w-4 h-4" /></button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold tracking-widest uppercase text-slate-500">
                    <div className="flex items-center gap-2">
                        <span>© 2026 MSIT New Delhi</span>
                        <span className="text-slate-800">•</span>
                        <span>Design by Jayant Olhyan</span>
                    </div>
                    <div className="flex gap-8">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <Link to="/admin" className="hover:text-white transition-colors">Admin</Link>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                        Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> in India
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
