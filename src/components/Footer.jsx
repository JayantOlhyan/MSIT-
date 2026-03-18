import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Heart, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-950 pt-0 pb-12 border-t border-slate-900 text-slate-400">
            {/* Feedback Banner */}
            <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border-b border-slate-800 py-6 mb-16">
                <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <MessageSquare className="w-5 h-5 text-blue-400" />
                        <span className="text-slate-300 font-medium tracking-wide">Found something wrong or missing? Help us improve this website!</span>
                    </div>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdy7gs1NPTGYN_ryfaL9HLq1lqdnQWIKEQZQTCaLg5jltxP7A/viewform?usp=publish-editor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-md transition-colors whitespace-nowrap"
                    >
                        Give Feedback 📝
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">

                    {/* Col 1 */}
                    <div className="lg:col-span-2 pr-4">
                        <Link to="/" className="flex items-center gap-3 mb-8 group" aria-label="MSIT New Delhi Home">
                            <div className="w-10 h-10 rounded bg-white flex items-center justify-center group-hover:bg-blue-50 transition-colors shadow-lg">
                                <span className="text-slate-950 text-xl font-bold tracking-tighter">M</span>
                            </div>
                            <span className="font-bold text-2xl tracking-tight text-white group-hover:text-blue-400 transition-colors">MSIT</span>
                        </Link>
                        <p className="text-slate-400 font-light leading-relaxed mb-8 max-w-sm">
                            Shaping tomorrow's engineers and innovators through exceptional academic rigor and profound industry immersion.
                        </p>
                        <div className="space-y-4 text-sm font-light">
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
                        <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Quick Links</h4>
                        <ul className="space-y-4 font-light text-sm">
                            <li><Link to="/about" className="hover:text-white transition-colors">About MSIT</Link></li>
                            <li><Link to="/online-fee" className="hover:text-white transition-colors">Admissions 2026</Link></li>
                            <li><Link to="/cse" className="hover:text-white transition-colors">Academic Programs</Link></li>
                            <li><Link to="/society" className="hover:text-white transition-colors">Campus Life & Societies</Link></li>
                            <li><Link to="/brochure" className="hover:text-white transition-colors">Download Brochure</Link></li>
                            <li className="pt-4 border-t border-slate-900">
                                <h5 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">Official Portals</h5>
                                <div className="space-y-3">
                                    <a href="http://www.ipu.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">GGSIP University <ExternalLink className="w-3 h-3 text-slate-700" /></a>
                                    <a href="https://www.aicte-india.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">AICTE Regulator <ExternalLink className="w-3 h-3 text-slate-700" /></a>
                                    <a href="https://www.ugc.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">UGC Content <ExternalLink className="w-3 h-3 text-slate-700" /></a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Col 3 */}
                    <div>
                        <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Resources</h4>
                        <ul className="space-y-4 font-light text-sm">
                            <li><a href="https://msit.techtron.net/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Student Portal</a></li>
                            <li><a href="http://library.msit.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Library Portal</a></li>
                            <li><a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Campus Mail</a></li>
                            <li><Link to="/administration" className="hover:text-white transition-colors">Faculty Portal</Link></li>
                            <li><Link to="/academic-calendar" className="hover:text-white transition-colors">Academic Calendar</Link></li>
                            <li><Link to="/syllabus" className="hover:text-white transition-colors">Course Syllabus</Link></li>
                            <li><Link to="/mandatory-disclosures" className="hover:text-white transition-colors">Mandatory Disclosures</Link></li>
                            <li><a href="https://www.msit.in/iqac" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">NAAC & NBA Stats</a></li>
                            <li><a href="https://www.msit.in/nirf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">NIRF Rankings</a></li>
                        </ul>
                    </div>

                    {/* Col 4 */}
                    <div>
                        <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Connect</h4>
                        <div className="flex gap-4 mb-8">
                            <a href="https://www.facebook.com/msitnewdelhi/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all"><Facebook className="w-4 h-4" /></a>
                            <a href="https://x.com/msitnewdelhi?lang=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all"><Twitter className="w-4 h-4" /></a>
                            <a href="https://www.linkedin.com/school/maharaja-surajmal-institute-of-technology-msitnewdelhi/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all"><Linkedin className="w-4 h-4" /></a>
                            <a href="https://www.instagram.com/msitnewdelhi/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all"><Instagram className="w-4 h-4" /></a>
                        </div>
                        <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-4">Brochure</h4>
                        <Link to="/brochure" className="text-sm font-medium text-white px-5 py-2.5 rounded border border-slate-700 hover:bg-slate-800 transition-colors bg-slate-900 inline-flex items-center">
                            Download Prospectus
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-900 text-xs font-light flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500">
                    <div>&copy; {new Date().getFullYear()} Maharaja Surajmal Institute of Technology. All rights reserved.</div>
                    <div className="flex gap-4 sm:gap-6 flex-wrap justify-center md:justify-start">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
                        <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
                        <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
                        <Link to="/admin" className="hover:text-white transition-colors font-medium">Admin Portal</Link>
                    </div>
                    <div className="flex items-center">Made with <Heart className="w-3 h-3 mx-1 text-red-500" /> in Delhi</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
