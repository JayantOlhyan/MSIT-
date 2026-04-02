import React from 'react';
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram, Heart, MessageSquare, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-950 pt-0 pb-12 border-t border-slate-900 text-slate-400">
            {/* Feedback Banner */}
            <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border-b border-slate-800 py-6 mb-16">
                <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <MessageSquare className="w-5 h-5 text-blue-400" />
                        <span className="font-body text-slate-300 font-medium tracking-wide">Found something wrong or missing? Help us improve this website!</span>
                    </div>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdy7gs1NPTGYN_ryfaL9HLq1lqdnQWIKEQZQTCaLg5jltxP7A/viewform?usp=publish-editor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-heading px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-md transition-colors whitespace-nowrap"
                    >
                        Give Feedback 📝
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">

                    {/* Col 1 */}
                    <div className="lg:col-span-2 pr-8">
                        <Link to="/" className="flex items-center gap-4 mb-8 group" aria-label="MSIT New Delhi Home">
                            <img 
                                src="/msit-logo.png" 
                                alt="MSIT Logo" 
                                className="h-14 w-auto object-contain brightness-0 invert group-hover:scale-110 transition-transform duration-500" 
                            />
                            <div className="flex flex-col">
                                <span className="font-heading font-black text-2xl tracking-tight text-white group-hover:text-blue-400 transition-colors leading-none">MSIT</span>
                                <span className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mt-1">New Delhi</span>
                            </div>
                        </Link>
                        <p className="font-body text-slate-400 leading-relaxed mb-8 max-w-sm">
                            Shaping tomorrow's engineers and innovators through exceptional academic rigor and profound industry immersion.
                        </p>
                        <div className="space-y-4 text-sm font-body">
                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 text-slate-600 shrink-0 mt-0.5" />
                                <a 
                                    href="https://www.google.com/maps/dir/?api=1&destination=Maharaja+Surajmal+Institute+of+Technology+Janakpuri+New+Delhi" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    C-4, Janakpuri<br />New Delhi - 110058, India
                                </a>
                            </div>
                            <div className="flex items-center">
                                <Phone className="w-5 h-5 mr-3 text-slate-600" />
                                <a href="tel:+919667344125" className="hover:text-white transition-colors">+91 9667344125</a>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-5 h-5 mr-3 text-slate-600" />
                                <a href="mailto:info@msit.in" className="hover:text-white transition-colors">info@msit.in</a>
                            </div>
                        </div>
                    </div>

                    {/* Col 2 */}
                    <div>
                        <h4 className="font-heading text-white text-sm font-bold uppercase tracking-widest mb-6">Quick Links</h4>
                        <ul className="space-y-4 font-body text-sm">
                            <li><Link to="/about" className="hover:text-white transition-colors">About MSIT</Link></li>
                            <li><Link to="/online-fee" className="hover:text-white transition-colors">Admissions 2026</Link></li>
                            <li><Link to="/cse" className="hover:text-white transition-colors">Academic Programs</Link></li>
                            <li><Link to="/society" className="hover:text-white transition-colors">Campus Life & Societies</Link></li>
                            <li><Link to="/brochure" className="hover:text-white transition-colors">Download Brochure</Link></li>
                        </ul>
                    </div>

                    {/* Col 3 */}
                    <div>
                        <h4 className="font-heading text-white text-sm font-bold uppercase tracking-widest mb-6">Resources</h4>
                        <ul className="space-y-3 font-body text-sm">
                            <li><a href="https://msit.techtron.net/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Student Portal</a></li>
                            <li><a href="http://library.msit.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Library Portal</a></li>
                            <li><Link to="/faculty" className="hover:text-white transition-colors">Faculty Directory</Link></li>
                            <li><Link to="/academic-calendar" className="hover:text-white transition-colors">Academic Calendar</Link></li>
                            <li><Link to="/syllabus" className="hover:text-white transition-colors">Course Syllabus</Link></li>
                            <li><Link to="/mandatory-disclosures" className="hover:text-white transition-colors">Mandatory Disclosures</Link></li>
                        </ul>
                    </div>

                    {/* Col 4 */}
                    <div>
                        <h4 className="font-heading text-white text-sm font-bold uppercase tracking-widest mb-6">Connect</h4>
                        <div className="flex flex-wrap gap-3 mb-8">
                            <a href="https://www.facebook.com/msitnewdelhi/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 transition-all shadow-lg"><Facebook className="w-4 h-4" /></a>
                            <a href="https://x.com/msitnewdelhi?lang=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 transition-all shadow-lg"><ExternalLink className="w-4 h-4" /></a>
                            <a href="https://www.linkedin.com/school/maharaja-surajmal-institute-of-technology-msitnewdelhi/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 transition-all shadow-lg"><Linkedin className="w-4 h-4" /></a>
                            <a href="https://www.instagram.com/msitnewdelhi/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-pink-600 transition-all shadow-lg"><Instagram className="w-4 h-4" /></a>
                        </div>
                        <Link to="/brochure" className="font-heading text-xs font-bold text-white px-5 py-3 rounded-lg border border-blue-600/30 hover:bg-blue-600 transition-all bg-slate-900 inline-flex items-center group/btn">
                            Download Prospectus <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 pb-4 border-t border-slate-900 text-[10px] font-body flex flex-col xl:flex-row justify-between items-center gap-6 text-slate-500 uppercase tracking-widest">
                    <div className="text-center xl:text-left">&copy; {new Date().getFullYear()} Maharaja Surajmal Institute of Technology. All rights reserved. <span className="mx-2">|</span> Affiliated to GGSIPU, New Delhi.</div>
                    <div className="flex gap-4 sm:gap-8 flex-wrap justify-center font-bold">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <Link to="/admin" className="hover:text-blue-400 transition-colors text-[#1e4a9b]">Admin</Link>
                    </div>
                    <div className="flex items-center text-slate-400">
                        Developed with <Heart className="w-3 h-3 mx-2 text-red-500 fill-red-500 animate-pulse" /> by 
                        <span className="text-white font-bold ml-2">Jayant Olhyan</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
