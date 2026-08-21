import React, { useState } from 'react';
import { 
    Sparkles, 
    Calendar, 
    MapPin, 
    ArrowRight, 
    Users, 
    Trophy, 
    ArrowLeft, 
    CheckCircle, 
    Clock, 
    Globe, 
    ChevronRight,
    Award
} from 'lucide-react';

const EventsPortal = ({ activeTab, setActiveTab }) => {
    const currentTab = activeTab || 'avensis';

    // Sports registration states
    const [sportsForm, setSportsForm] = useState({ name: '', email: '', enrollmentNo: '', sport: 'athletics' });
    const [sportsRegistered, setSportsRegistered] = useState(false);

    const handleSportsSubmit = (e) => {
        e.preventDefault();
        if (!/^\d{11}$/.test(sportsForm.enrollmentNo)) {
            alert("Enrollment number must be exactly 11 digits.");
            return;
        }
        setSportsRegistered(true);
    };

    return (
        <div className="w-full">
            {/* Header sub-tabs within the component (hidden when printing) */}
            <div className="flex border-b border-slate-200 mb-8 select-none print:hidden">
                <button 
                    type="button"
                    onClick={() => setActiveTab('avensis')}
                    className={`flex-1 py-4 text-center text-sm font-semibold border-b-2 transition-all flex justify-center items-center gap-2 cursor-pointer ${
                        currentTab === 'avensis' 
                            ? 'border-blue-600 text-blue-600' 
                            : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                    }`}
                >
                    <Sparkles className="w-4 h-4" />
                    Avensis (Tech Fest)
                </button>
                <button 
                    type="button"
                    onClick={() => setActiveTab('genesis')}
                    className={`flex-1 py-4 text-center text-sm font-semibold border-b-2 transition-all flex justify-center items-center gap-2 cursor-pointer ${
                        currentTab === 'genesis' 
                            ? 'border-blue-600 text-blue-600' 
                            : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                    }`}
                >
                    <Users className="w-4 h-4" />
                    Genesis (Cultural Fest)
                </button>
                <button 
                    type="button"
                    onClick={() => setActiveTab('sports')}
                    className={`flex-1 py-4 text-center text-sm font-semibold border-b-2 transition-all flex justify-center items-center gap-2 cursor-pointer ${
                        currentTab === 'sports' 
                            ? 'border-blue-600 text-blue-600' 
                            : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                    }`}
                >
                    <Trophy className="w-4 h-4" />
                    Sports Meet
                </button>
            </div>

            {/* TAB 1: AVENSIS TECH FEST */}
            {currentTab === 'avensis' && (
                <div className="space-y-8 animate-fade-in print:hidden">
                    <div className="bg-linear-to-r from-blue-900 to-indigo-955 p-8 sm:p-10 rounded-3xl text-white relative overflow-hidden shadow-md">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px]"></div>
                        <div className="relative z-10 space-y-4">
                            <span className="px-3 py-1 bg-white/10 text-blue-300 text-[10px] font-black uppercase tracking-widest rounded-full border border-white/5">Annual Technical Festival</span>
                            <h3 className="text-3xl font-black tracking-tight">AVENSIS 2026</h3>
                            <p className="text-sm text-slate-200 font-light leading-relaxed max-w-xl">
                                MSIT's premier national tech symposium bringing together top engineering minds, competitive programmers, and tech innovators across India.
                            </p>
                            <div className="flex flex-wrap gap-4 text-xs pt-2">
                                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-accent" /> Oct 24–26, 2026</span>
                                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-accent" /> MSIT Campus Labs & Seminars</span>
                            </div>
                        </div>
                    </div>

                    {/* SUB-EVENTS IN TECH FEST */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Flagship Technical Events</h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Event 1: National Coding Contest */}
                            <div className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl flex flex-col justify-between hover:bg-white hover:shadow-md transition-all">
                                <div>
                                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                        <Globe className="w-5 h-5" />
                                    </div>
                                    <h5 className="font-bold text-slate-900 mb-2">National Coding Contest</h5>
                                    <p className="text-xs text-slate-500 font-light leading-relaxed mb-4">
                                        Test your algorithmic problem-solving and speed programming skills under tight clock constraints. Compete in C++, Java, or Python.
                                    </p>
                                </div>
                                <span className="text-[10px] font-bold text-slate-400 mt-2">Registration opens Oct 1st</span>
                            </div>

                            {/* Event 2: HackMSIT 1.0 */}
                            <div className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl flex flex-col justify-between hover:bg-white hover:shadow-md transition-all">
                                <div>
                                    <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                                        <Users className="w-5 h-5" />
                                    </div>
                                    <h5 className="font-bold text-slate-900 mb-2">HackMSIT 1.0 Hackathon</h5>
                                    <p className="text-xs text-slate-500 font-light leading-relaxed mb-4">
                                        Organized by the Microsoft Student Chapter. A 24-hour hackathon bringing developer teams to build software prototypes on open-source frameworks.
                                    </p>
                                </div>
                                <span className="text-[10px] font-bold text-slate-400 mt-2">Registration opens Oct 1st</span>
                            </div>
                        </div>

                        {/* ICAIA 2026 notice card */}
                        <div className="p-6 bg-slate-50/50 rounded-2xl border border-slate-200/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
                            <div>
                                <h5 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                                    <Award className="w-4 h-4 text-yellow-500" /> ICAIA 2026 IEEE Conference
                                </h5>
                                <p className="text-xs text-slate-500 font-light mt-1">MSIT hosts the 4th International Conference on Artificial Intelligence and Applications on 19–20 November 2026.</p>
                            </div>
                            <a 
                                href="https://icaia-msit.in/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold rounded-lg text-xs transition-all shrink-0 cursor-pointer"
                            >
                                Conference Site
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* TAB 2: GENESIS CULTURAL FEST */}
            {currentTab === 'genesis' && (
                <div className="space-y-8 animate-fade-in print:hidden">
                    <div className="bg-linear-to-r from-purple-900 to-pink-955 p-8 sm:p-10 rounded-3xl text-white relative overflow-hidden shadow-md">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[60px]"></div>
                        <div className="relative z-10 space-y-4">
                            <span className="px-3 py-1 bg-white/10 text-pink-300 text-[10px] font-black uppercase tracking-widest rounded-full border border-white/5">Annual Cultural Festival</span>
                            <h3 className="text-3xl font-black tracking-tight">GENESIS 2026</h3>
                            <p className="text-sm text-slate-200 font-light leading-relaxed max-w-xl">
                                Celebrate color, expression, and performance at MSIT's grand cultural festival. Featuring musical fusions, theatrical showcases, and celebrity star nights.
                            </p>
                            <div className="flex flex-wrap gap-4 text-xs pt-2">
                                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-accent" /> November 12–14, 2026</span>
                                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-accent" /> Campus Main Grounds</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60">
                            <span className="text-[10px] font-black text-purple-600 bg-purple-50 px-2 py-0.5 rounded">Music</span>
                            <h5 className="font-bold text-slate-800 mt-2.5 mb-1.5">Battle of Bands</h5>
                            <p className="text-xs text-slate-500 font-light leading-relaxed">Rock bands from campuses across the country clash on the main stage for the top honors.</p>
                        </div>
                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60">
                            <span className="text-[10px] font-black text-pink-600 bg-pink-50 px-2 py-0.5 rounded">Fashion</span>
                            <h5 className="font-bold text-slate-800 mt-2.5 mb-1.5">Glamour Walk</h5>
                            <p className="text-xs text-slate-500 font-light leading-relaxed">The flagship fashion event exhibiting curated themes, styling, and design choreographies.</p>
                        </div>
                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60">
                            <span className="text-[10px] font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded">Theatre</span>
                            <h5 className="font-bold text-slate-800 mt-2.5 mb-1.5">Nukkad Natak</h5>
                            <p className="text-xs text-slate-500 font-light leading-relaxed">High-energy street plays conveying crucial social messages and cultural commentaries.</p>
                        </div>
                    </div>
                </div>
            )}

            {/* TAB 3: SPORTS MEET */}
            {currentTab === 'sports' && (
                <div className="space-y-8 animate-fade-in print:hidden">
                    <div className="bg-linear-to-r from-emerald-900 to-teal-955 p-8 sm:p-10 rounded-3xl text-white relative overflow-hidden shadow-md">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[60px]"></div>
                        <div className="relative z-10 space-y-4">
                            <span className="px-3 py-1 bg-white/10 text-emerald-300 text-[10px] font-black uppercase tracking-widest rounded-full border border-white/5">Annual Athletic Meet</span>
                            <h3 className="text-3xl font-black tracking-tight">ANNUAL SPORTS MEET</h3>
                            <p className="text-sm text-slate-200 font-light leading-relaxed max-w-xl">
                                Compete, represent your department, and run for the shield. Annual track, field, and team sports league.
                            </p>
                            <div className="flex flex-wrap gap-4 text-xs pt-2">
                                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-accent" /> Oct 08–10, 2026</span>
                                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-accent" /> Sports Complex & Courts</span>
                            </div>
                        </div>
                    </div>

                    {!sportsRegistered ? (
                        <div className="bg-slate-50/50 rounded-3xl border border-slate-200/60 p-6 sm:p-8 shadow-xs">
                            <h4 className="text-sm font-bold text-slate-900 mb-4">Sports Registration Form</h4>
                            <form onSubmit={handleSportsSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input 
                                        type="text" 
                                        required
                                        value={sportsForm.name}
                                        onChange={e => setSportsForm({...sportsForm, name: e.target.value})}
                                        placeholder="Full Name"
                                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none bg-white text-slate-855 text-xs font-semibold"
                                    />
                                    <input 
                                        type="text" 
                                        required
                                        value={sportsForm.enrollmentNo}
                                        onChange={e => setSportsForm({...sportsForm, enrollmentNo: e.target.value})}
                                        placeholder="Enrollment Number (11 Digits)"
                                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none bg-white text-slate-855 text-xs font-semibold"
                                    />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input 
                                        type="email" 
                                        required
                                        value={sportsForm.email}
                                        onChange={e => setSportsForm({...sportsForm, email: e.target.value})}
                                        placeholder="Email Address"
                                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none bg-white text-slate-855 text-xs font-semibold"
                                    />
                                    <select 
                                        value={sportsForm.sport}
                                        onChange={e => setSportsForm({...sportsForm, sport: e.target.value})}
                                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none bg-white text-slate-855 text-xs font-semibold"
                                    >
                                        <option value="athletics">Track & Field (100m/200m/400m)</option>
                                        <option value="basketball">Basketball</option>
                                        <option value="volleyball">Volleyball</option>
                                        <option value="football">Football</option>
                                        <option value="badminton">Badminton</option>
                                    </select>
                                </div>
                                <button 
                                    type="submit" 
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-xl transition-all shadow-md text-xs cursor-pointer"
                                >
                                    Register for Sports Meet
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl flex items-start gap-4">
                            <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                            <div>
                                <h5 className="font-bold text-emerald-800 text-sm">Sports Registration Received</h5>
                                <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
                                    Hey {sportsForm.name}, your application for {sportsForm.sport.toUpperCase()} has been submitted. Check-ins begin at 8:30 AM at the sports arena.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default EventsPortal;
