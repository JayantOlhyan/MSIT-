import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
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
                            <li><Link to="/about" className="hover:text-white transition-colors">About MSIT</Link></li>
                            <li><a href="https://www.msit.in/online_fee" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Admissions 2026</a></li>
                            <li><Link to="/cse" className="hover:text-white transition-colors">Academic Programs</Link></li>
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
    );
};

export default Footer;
