import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { Search, Mail, Award, BookOpen, ChevronRight, X, TrendingUp, Search as Target, FileText, Download, Star, Briefcase, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { facultyMembers } from '../data/facultyData';

const FacultyStaff = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeDept, setActiveDept] = useState('All');
    const [selectedFaculty, setSelectedFaculty] = useState(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedFaculty) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedFaculty]);

    const departments = ['All', 'Administration', 'CSE', 'IT', 'ECE', 'EEE', 'Applied Sciences'];

    const filteredFaculty = facultyMembers
        .filter(f => 
            (activeDept === 'All' || f.dept === activeDept) &&
            (f.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
             f.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
             f.goodAt.some(trait => trait.toLowerCase().includes(searchQuery.toLowerCase())))
        )
        .sort((a, b) => {
            // Sort by Director first
            if (a.role.includes('Director')) return -1;
            if (b.role.includes('Director')) return 1;
            // Then by type (faculty before staff if I had faculty type, but here they are all together)
            if (a.type === 'staff' && !b.type) return 1;
            if (!a.type && b.type === 'staff') return -1;
            return 0;
        });

    return (
        <main className="min-h-screen bg-surface">
            <SEO 
                title="Premium Faculty Directory" 
                description="Explore the comprehensive profiles, research strengths, and detailed metrics of the distinguished faculty at MSIT."
                canonicalPath="/faculty"
            />

            <PageHero 
                title="Faculty &" 
                accentTitle="Staff" 
                description="Explore the minds shaping the future. Our directory provides unparalleled transparency into the expertise, research impact, and academic focus of our 130+ distinguished members."
                breadcrumbs={[{ label: 'Directory' }, { label: 'Faculty & Staff' }]}
            />

            {/* Hero Stats (Preserved from original premium design) */}
            <div className="bg-slate-950 border-b border-slate-900 pb-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-8 border-t border-slate-800/50 animate-slide-up">
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">130+</div>
                            <div className="text-xs text-muted uppercase tracking-widest font-medium">Expert Faculty</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary mb-1">1000+</div>
                            <div className="text-xs text-muted uppercase tracking-widest font-medium">Publications</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-accent mb-1">5</div>
                            <div className="text-xs text-muted uppercase tracking-widest font-medium">Core Departments</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white/80 mb-1">15+</div>
                            <div className="text-xs text-muted uppercase tracking-widest font-medium">Avg Years Exp.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Advanced Search & Filtering - Sticky */}
            <div className="sticky top-[68px] xl:top-[128px] z-30 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-card transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 py-3 sm:py-4 flex flex-col md:flex-row gap-4 md:items-center justify-between">
                    <div className="relative w-full md:w-96 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted group-focus-within:text-primary transition-colors" />
                        <input 
                            type="text" 
                            placeholder="Search names, skills, or roles..."
                            className="w-full pl-12 pr-4 py-3 bg-surface border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-title font-medium placeholder-slate-400"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide shrink-0">
                        {departments.map(dept => (
                            <button
                                key={dept}
                                onClick={() => setActiveDept(dept)}
                                className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all whitespace-nowrap border-2 group ${
                                    activeDept === dept 
                                    ? 'bg-slate-900 border-slate-900 text-white shadow-card shadow-slate-900/20' 
                                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                                }`}
                            >
                                {dept}
                                {dept === 'Applied Sciences' && (
                                    <span className="ml-1 text-blue-400 font-medium">(1st Year)</span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Premium Grid */}
            <div className="max-w-7xl mx-auto px-6 py-16 min-h-[500px]">
                {filteredFaculty.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredFaculty.map((faculty, idx) => (
                            <div 
                                key={idx} 
                                onClick={() => setSelectedFaculty(faculty)}
                                className="group bg-white rounded-[2rem] p-6 shadow-card hover:shadow-card-hover border border-slate-200 hover:border-blue-200 cursor-pointer transition-all duration-500 ease-out hover:-translate-y-2 relative overflow-hidden flex flex-col h-full"
                            >
                                {/* Decorative Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="flex items-start gap-5 relative z-10 mb-6">
                                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-surface shrink-0 shadow-inner p-1 border border-slate-200 group-hover:border-primary/30 transition-colors duration-500">
                                        <img src={faculty.img} alt={`${faculty.name}, ${faculty.role} in the ${faculty.dept} department at MSIT`} className="w-full h-full object-cover rounded-xl" />
                                    </div>
                                    <div className="group/dept">
                                        <span className="inline-block px-2.5 py-1 bg-surface text-muted text-xs uppercase tracking-bolder font-bold rounded-lg mb-2 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                            {faculty.dept}
                                            {faculty.dept === 'Applied Sciences' && (
                                                <span className="ml-1 font-bold text-primary/70">(1st Year)</span>
                                            )}
                                        </span>
                                        <h3 className="text-lg font-bold text-title leading-tight mb-1 group-hover:text-primary transition-colors line-clamp-2">{faculty.name}</h3>
                                        <p className="text-muted text-sm font-medium">{faculty.role}</p>
                                    </div>
                                </div>

                                <div className="mt-auto relative z-10">
                                    {faculty.type !== 'staff' && (
                                        <div className="grid grid-cols-2 gap-3 mb-6">
                                            <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 group-hover:bg-white group-hover:border-slate-200 transition-colors">
                                                <div className="text-xs text-slate-400 font-medium mb-1">Experience</div>
                                                <div className="font-bold text-slate-800">{faculty.experience} Yrs</div>
                                            </div>
                                            <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 group-hover:bg-white group-hover:border-slate-200 transition-colors">
                                                <div className="text-xs text-slate-400 font-medium mb-1">Publications</div>
                                                <div className="font-bold text-slate-800">{faculty.publications}</div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Brief highlight of Top Strength */}
                                    <div className="flex items-center gap-2 text-sm text-slate-600 bg-emerald-50 text-emerald-700 px-3 py-2 rounded-xl mb-6 truncate">
                                        <Star className="w-4 h-4 shrink-0 fill-emerald-500 text-emerald-500" />
                                        <span className="truncate font-medium">{faculty.goodAt[0]}</span>
                                    </div>

                                    <div className="flex items-center justify-between text-primary font-bold text-sm">
                                        View Full Profile
                                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <ChevronRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-32 opacity-50 animate-fade-in">
                        <Search className="w-20 h-20 text-slate-300 mb-6" />
                        <h3 className="text-2xl font-bold text-title mb-2">No Profiles Found</h3>
                        <p className="text-muted text-lg">Try adjusting your search terms or department filters.</p>
                    </div>
                )}
            </div>

            {/* Premium Interactive Modal */}
            {selectedFaculty && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6 py-6 animate-fade-in">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
                        onClick={() => setSelectedFaculty(null)}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-card animate-scale-in border border-white/20">
                        {/* Close Button */}
                        <button 
                            onClick={() => setSelectedFaculty(null)}
                            className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-xl border border-white/40 hover:bg-white/40 text-slate-800 rounded-full flex items-center justify-center z-20 transition-all shadow-card cursor-pointer"
                            aria-label="Close faculty profile"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Modal Header/Hero */}
                        <div className="bg-slate-900 pt-16 pb-20 sm:pb-24 px-6 sm:px-8 md:px-16 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[80px]"></div>
                            
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
                                <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-white p-1.5 shadow-card shrink-0 -mb-20 md:-mb-32 z-10 border-2 border-white/10">
                                    <img src={selectedFaculty.img} alt={`High-resolution portrait of ${selectedFaculty.name}, ${selectedFaculty.role} at MSIT`} className="w-full h-full object-cover rounded-2xl" />
                                </div>
                                <div className="text-center md:text-left flex-1">
                                    <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-lg mb-4">
                                        {selectedFaculty.dept} Department
                                        {selectedFaculty.dept === 'Applied Sciences' && (
                                            <span className="ml-1 text-primary font-bold">(1st Year)</span>
                                        )}
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-2">
                                        {selectedFaculty.name}
                                    </h2>
                                    <p className="text-primary text-lg md:text-xl font-medium tracking-wide transition-colors">
                                        {selectedFaculty.role}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="px-6 sm:px-8 md:px-16 pt-16 sm:pt-20 md:pt-16 pb-16 bg-[#f8fafc]">
                            {/* Bio */}
                            <p className="text-slate-600 text-lg leading-relaxed mb-12 font-light">
                                {selectedFaculty.bio}
                            </p>

                            {/* Metrics Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card flex flex-col items-center text-center">
                                    <Briefcase className="w-6 h-6 text-indigo-500 mb-3" />
                                    <div className="text-2xl font-black text-slate-900 mb-1">{selectedFaculty.experience}</div>
                                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Years Exp.</div>
                                </div>
                                {selectedFaculty.type !== 'staff' && (
                                    <>
                                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card flex flex-col items-center text-center">
                                            <BookOpen className="w-6 h-6 text-blue-500 mb-3" />
                                            <div className="text-2xl font-black text-slate-900 mb-1">{selectedFaculty.publications}</div>
                                            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Publications</div>
                                        </div>
                                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card flex flex-col items-center text-center">
                                            <Award className="w-6 h-6 text-amber-500 mb-3" />
                                            <div className="text-2xl font-black text-slate-900 mb-1">{selectedFaculty.patents}</div>
                                            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Patents</div>
                                        </div>
                                    </>
                                )}
                                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card flex flex-col items-center text-center">
                                    <FileText className="w-6 h-6 text-emerald-500 mb-3" />
                                    <div className="text-xs font-bold text-slate-900 mb-1 break-words w-full px-1">{selectedFaculty.qual || "Professional Staff"}</div>
                                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-auto">Qualification</div>
                                </div>
                            </div>

                            {/* Strengths and Weaknesses */}
                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                {/* Good At */}
                                <div className="bg-emerald-50/50 rounded-3xl p-8 border border-emerald-100">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                                            <TrendingUp className="w-5 h-5 text-emerald-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-emerald-950">Strengths & Achievements</h3>
                                    </div>
                                    <ul className="space-y-4">
                                        {selectedFaculty.goodAt.map((trait, i) => (
                                            <li key={i} className="flex items-start gap-3 text-emerald-800">
                                                <Star className="w-5 h-5 shrink-0 text-emerald-500 fill-emerald-500 mt-0.5" />
                                                <span className="font-medium leading-relaxed">{trait}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Areas for Improvement / Observations - Softer Design */}
                                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center">
                                            <Target className="w-5 h-5 text-slate-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-800">Academic Focus & Observations</h3>
                                    </div>
                                    <ul className="space-y-4">
                                        {selectedFaculty.badAt.map((trait, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-600">
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2.5 shrink-0"></div>
                                                <span className="font-medium leading-relaxed italic">{trait}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Actions */}
                                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-slate-200 pt-8">
                                <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                                    <a 
                                        href={`mailto:${selectedFaculty.email}`} 
                                        className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-surface text-body font-bold hover:bg-slate-200 transition-colors"
                                    >
                                        <Mail className="w-5 h-5" />
                                        {selectedFaculty.email}
                                    </a>
                                    {selectedFaculty.linkedin && (
                                        <a 
                                            href={selectedFaculty.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#0077B5] text-white font-bold hover:bg-[#005a8a] transition-colors"
                                        >
                                            <Linkedin className="w-5 h-5" />
                                            LinkedIn
                                        </a>
                                    )}
                                </div>
                                
                                {selectedFaculty.pdfLink !== "#" ? (
                                    <a 
                                        href={selectedFaculty.pdfLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 hover:shadow-card-hover hover:shadow-blue-500/30 transition-all w-full sm:w-auto"
                                    >
                                        <Download className="w-5 h-5" />
                                        View Official Profile PDF
                                    </a>
                                ) : (
                                    <button 
                                        disabled
                                        className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-surface text-muted font-bold cursor-not-allowed w-full sm:w-auto text-sm"
                                    >
                                        <FileText className="w-5 h-5" />
                                        PDF Profile Unavailable
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default FacultyStaff;
