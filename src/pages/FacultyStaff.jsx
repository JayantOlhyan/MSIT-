import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { 
    Search, Mail, Award, BookOpen, ChevronRight, X, FileText, Download, 
    Star, Briefcase, Linkedin, Globe, ExternalLink, Phone, ArrowUpRight, 
    GraduationCap, Building2, Users, Sparkles, CheckCircle2, ChevronDown, Layers
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { facultyMembers } from '../data/facultyData';

const FacultyStaff = () => {
    const [searchQuery, setSearchQuery] = useState(() => {
        const params = new URLSearchParams(window.location.search);
        return params.get('search') || '';
    });
    const [activeDept, setActiveDept] = useState(() => {
        const params = new URLSearchParams(window.location.search);
        const deptParam = params.get('dept');
        if (deptParam) {
            const match = ['All', 'Governing Body', 'Administration', 'CSE', 'IT', 'ECE', 'EEE', 'Applied Sciences'].find(
                d => d.toLowerCase() === deptParam.toLowerCase() || (d === 'Applied Sciences' && deptParam.toLowerCase().includes('applied'))
            );
            return match || 'All';
        }
        return 'All';
    });
    const [activeStatModal, setActiveStatModal] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    const [selectedFaculty, setSelectedFaculty] = useState(() => {
        const params = new URLSearchParams(window.location.search);
        const facultyId = params.get('id');
        if (facultyId) {
            return facultyMembers.find(f => 
                f.id === facultyId || 
                f.name.toLowerCase().replace(/[^a-z0-9]/g, '').includes(facultyId.toLowerCase().replace(/[^a-z0-9]/g, ''))
            ) || null;
        }
        return null;
    });
    const [prevSearch, setPrevSearch] = useState(location.search);

    const [cameWithId] = useState(() => new URLSearchParams(window.location.search).has('id'));

    if (prevSearch !== location.search) {
        setPrevSearch(location.search);
        const params = new URLSearchParams(location.search);
        const facultyId = params.get('id');
        if (facultyId) {
            const found = facultyMembers.find(f => 
                f.id === facultyId || 
                f.name.toLowerCase().replace(/[^a-z0-9]/g, '').includes(facultyId.toLowerCase().replace(/[^a-z0-9]/g, ''))
            );
            if (found) {
                setSelectedFaculty(found);
                if (found.dept) {
                    setActiveDept(found.dept);
                }
            }
        }
        const deptParam = params.get('dept');
        if (deptParam) {
            const match = ['All', 'Governing Body', 'Administration', 'CSE', 'IT', 'ECE', 'EEE', 'Applied Sciences'].find(
                d => d.toLowerCase() === deptParam.toLowerCase() || (d === 'Applied Sciences' && deptParam.toLowerCase().includes('applied'))
            );
            if (match) setActiveDept(match);
        }
        const searchParam = params.get('search');
        if (searchParam !== null) {
            setSearchQuery(searchParam);
        }
    }

    const handleOpenProfile = (faculty) => {
        setSelectedFaculty(faculty);
        if (faculty?.id) {
            navigate(`/faculty?id=${faculty.id}`, { replace: true });
        }
    };

    const handleCloseProfile = () => {
        setSelectedFaculty(null);
        if (location.search.includes('id=')) {
            if (cameWithId) {
                navigate(-1);
            } else {
                navigate('/faculty', { replace: true });
            }
        }
    };

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedFaculty) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedFaculty]);

    const departments = ['All', 'Governing Body', 'Administration', 'CSE', 'IT', 'ECE', 'EEE', 'Applied Sciences'];

    const placementCommitteeNames = [
        "Meena Rao", "Kavita Sheoran", "Parveen Kumar",
        "Parul Chaudhary", "Shaily Malik", "Pooja Kherwa", "Gunjan",
        "Sonika Malik", "Meena Siwach", "Minakshi Tomer", "Sakshi Rajput",
        "Himani", "Suman Lata", "Rakhi Kamra", "Sachit Rathee"
    ];

    const filteredFaculty = facultyMembers
        .filter(f => {
            const matchesDept = activeDept === 'All' || f.dept === activeDept;
            const query = searchQuery.toLowerCase();
            if (!query) return matchesDept;

            const isPlacementSearch = "placement".includes(query) || "placement cell".includes(query) || "placement committee".includes(query) || "convener".includes(query) || "coordinator".includes(query);
            const isGovBodySearch = "governing".includes(query) || "governing body".includes(query) || "smes".includes(query) || "chairman".includes(query) || "secretary".includes(query) || "president".includes(query) || "treasurer".includes(query);
            
            const isInPlacementCommittee = isPlacementSearch && placementCommitteeNames.some(name => f.name.toLowerCase().includes(name.toLowerCase()));
            const isInGovBody = isGovBodySearch && (f.dept === 'Governing Body' || f.id?.startsWith('gb-') || f.id?.startsWith('adv-'));

            const matchesQuery = f.name.toLowerCase().includes(query) ||
                f.role.toLowerCase().includes(query) ||
                (f.bio && f.bio.toLowerCase().includes(query)) ||
                (f.goodAt && f.goodAt.some(trait => trait.toLowerCase().includes(query))) ||
                isInPlacementCommittee ||
                isInGovBody;

            return matchesDept && matchesQuery;
        })
        .sort((a, b) => {
            // Sort Director first
            if (a.role.includes('Director')) return -1;
            if (b.role.includes('Director')) return 1;

            // Sort Chairman of Governing Body next
            if (a.role.includes('Chairman, Governing Body')) return -1;
            if (b.role.includes('Chairman, Governing Body')) return 1;

            // Sort Governing Body members together
            if (a.dept === 'Governing Body' && b.dept !== 'Governing Body') return -1;
            if (a.dept !== 'Governing Body' && b.dept === 'Governing Body') return 1;

            if (a.type === 'staff' && !b.type) return 1;
            if (!a.type && b.type === 'staff') return -1;
            return 0;
        });

    return (
        <main className="min-h-screen bg-surface transition-colors duration-300">
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

            {/* Hero Stats - Interactive & Clickable Breakdown */}
            <div className="bg-slate-950 border-b border-slate-900 pb-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-8 border-t border-slate-800/50 animate-slide-up">
                        <button
                            type="button"
                            onClick={() => setActiveStatModal('faculty')}
                            className="group text-left p-4 -m-4 rounded-2xl transition-all duration-300 hover:bg-slate-900/80 border border-transparent hover:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                        >
                            <div className="flex items-center justify-between mb-1">
                                <div className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">130+</div>
                                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </div>
                            <div className="text-xs text-muted uppercase tracking-widest font-medium">Expert Faculty</div>
                            <div className="text-[10px] text-blue-400/80 font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Click for details →</div>
                        </button>

                        <button
                            type="button"
                            onClick={() => setActiveStatModal('publications')}
                            className="group text-left p-4 -m-4 rounded-2xl transition-all duration-300 hover:bg-slate-900/80 border border-transparent hover:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                        >
                            <div className="flex items-center justify-between mb-1">
                                <div className="text-3xl font-bold text-primary group-hover:text-amber-400 transition-colors">1000+</div>
                                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </div>
                            <div className="text-xs text-muted uppercase tracking-widest font-medium">Publications</div>
                            <div className="text-[10px] text-amber-400/80 font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Click for details →</div>
                        </button>

                        <button
                            type="button"
                            onClick={() => setActiveStatModal('departments')}
                            className="group text-left p-4 -m-4 rounded-2xl transition-all duration-300 hover:bg-slate-900/80 border border-transparent hover:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                        >
                            <div className="flex items-center justify-between mb-1">
                                <div className="text-3xl font-bold text-accent group-hover:text-emerald-400 transition-colors">5</div>
                                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </div>
                            <div className="text-xs text-muted uppercase tracking-widest font-medium">Core Departments</div>
                            <div className="text-[10px] text-emerald-400/80 font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Click for details →</div>
                        </button>

                        <button
                            type="button"
                            onClick={() => setActiveStatModal('experience')}
                            className="group text-left p-4 -m-4 rounded-2xl transition-all duration-300 hover:bg-slate-900/80 border border-transparent hover:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                        >
                            <div className="flex items-center justify-between mb-1">
                                <div className="text-3xl font-bold text-white/80 group-hover:text-purple-400 transition-colors">15+</div>
                                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </div>
                            <div className="text-xs text-muted uppercase tracking-widest font-medium">Avg Years Exp.</div>
                            <div className="text-[10px] text-purple-400/80 font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Click for details →</div>
                        </button>
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
                                className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all whitespace-nowrap border-2 group ${activeDept === dept
                                        ? 'bg-slate-900 border-slate-900 text-white shadow-md shadow-slate-900/30 focus:outline-none'
                                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 focus:outline-none'
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
            <div className="max-w-7xl mx-auto px-6 py-16 min-h-[clamp(350px,50vh,500px)]">
                {filteredFaculty.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredFaculty.map((faculty, idx) => (
                            <div
                                key={idx}
                                onClick={() => handleOpenProfile(faculty)}
                                className="group bg-white rounded-[2rem] p-6 shadow-card hover:shadow-card-hover border border-slate-200 hover:border-blue-200 cursor-pointer transition-all duration-500 ease-out hover:-translate-y-2 relative overflow-hidden flex flex-col h-full"
                            >
                                {/* Decorative Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="flex items-start gap-5 relative z-10 mb-6">
                                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-surface shrink-0 shadow-inner p-1 border border-slate-200 group-hover:border-primary/30 transition-colors duration-500">
                                        <img 
                                            src={faculty.img} 
                                            alt={`${faculty.name}, ${faculty.role} in the ${faculty.dept} department at MSIT`} 
                                            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/faculty/default-avatar.webp'; }}
                                            className="w-full h-full object-cover rounded-xl" 
                                        />
                                    </div>
                                    <div className="group/dept">
                                        <span className={`inline-block px-2.5 py-1 text-xs uppercase tracking-bolder font-bold rounded-lg mb-2 transition-colors ${
                                            faculty.dept === 'Governing Body'
                                                ? 'bg-purple-50 text-purple-700 border border-purple-200'
                                                : 'bg-surface text-muted group-hover:bg-primary/10 group-hover:text-primary'
                                        }`}>
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
                                                <div className="text-xs text-slate-400 font-medium mb-1">
                                                    {faculty.dept === 'Governing Body' ? 'Leadership' : 'Experience'}
                                                </div>
                                                <div className="font-bold text-slate-800">{faculty.experience} Yrs</div>
                                            </div>
                                            <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 group-hover:bg-white group-hover:border-slate-200 transition-colors">
                                                <div className="text-xs text-slate-400 font-medium mb-1">
                                                    {faculty.dept === 'Governing Body' && (!faculty.publications || faculty.publications === '0') ? 'Governance' : 'Publications'}
                                                </div>
                                                <div className="font-bold text-slate-800 truncate">
                                                    {faculty.dept === 'Governing Body' && (!faculty.publications || faculty.publications === '0') ? 'Apex Board' : faculty.publications}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Brief highlight of Top Strength */}
                                    <div className="flex items-center gap-2 text-sm bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-2 rounded-xl mb-6 truncate">
                                        <Star className="w-4 h-4 shrink-0 fill-emerald-500 text-emerald-500" />
                                        <span className="truncate font-medium">{(faculty.researchInterests || faculty.goodAt || [])[0] || "Academic Instruction"}</span>
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
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-3 sm:px-6 py-4 sm:py-6 animate-fade-in">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-slate-950/70 backdrop-blur-md animate-backdrop-fade"
                        onClick={handleCloseProfile}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative bg-white w-full max-w-4xl max-h-[92vh] sm:max-h-[85vh] overflow-y-auto scrollbar-hide rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl animate-scale-in border border-white/20">
                        {/* Close Button */}
                        <button
                            onClick={handleCloseProfile}
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white rounded-full flex items-center justify-center z-30 transition-all shadow-card cursor-pointer"
                            aria-label="Close faculty profile"
                        >
                            <X className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>

                        {/* Modal Header/Hero */}
                        <div className="bg-slate-900 pt-10 sm:pt-16 pb-8 md:pb-28 px-5 sm:px-8 md:px-16 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-[clamp(200px,30vw,400px)] h-[clamp(200px,30vw,400px)] bg-blue-500/20 rounded-full blur-[80px]"></div>

                            <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-8 relative z-10">
                                <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-3xl bg-white p-1.5 shadow-card shrink-0 md:-mb-36 z-10 border-2 border-white/10">
                                    <img 
                                        src={selectedFaculty.img} 
                                        alt={`High-resolution portrait of ${selectedFaculty.name}, ${selectedFaculty.role} at MSIT`} 
                                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/faculty/default-avatar.webp'; }}
                                        className="w-full h-full object-cover rounded-2xl" 
                                    />
                                </div>
                                <div className="text-center md:text-left flex-1">
                                    <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-lg mb-3">
                                        {selectedFaculty.dept} Department
                                        {selectedFaculty.dept === 'Applied Sciences' && (
                                            <span className="ml-1 text-primary font-bold">(1st Year)</span>
                                        )}
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight mb-2">
                                        {selectedFaculty.name}
                                    </h2>
                                    <p className="text-blue-400 text-base sm:text-lg md:text-xl font-medium tracking-wide">
                                        {selectedFaculty.role}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="px-5 sm:px-8 md:px-16 pt-8 sm:pt-14 md:pt-20 pb-12 sm:pb-16 bg-[#f8fafc]">
                            {/* Bio */}
                            <p className="text-slate-600 text-lg leading-relaxed mb-10 font-light">
                                {selectedFaculty.bio}
                            </p>

                            {/* Metrics Grid */}
                            {(() => {
                                const isGovBody = selectedFaculty.dept === 'Governing Body' || selectedFaculty.id?.startsWith('gb-') || selectedFaculty.id?.startsWith('adv-');
                                const hasPublications = selectedFaculty.publications && selectedFaculty.publications !== '0' && parseInt(selectedFaculty.publications) > 0;

                                return (
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card flex flex-col items-center text-center">
                                            <Briefcase className="w-6 h-6 text-indigo-500 mb-3" />
                                            <div className="text-2xl font-black text-slate-900 mb-1">{selectedFaculty.experience}</div>
                                            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                                                {isGovBody ? 'Leadership Yrs' : 'Years Exp.'}
                                            </div>
                                        </div>

                                        {isGovBody && !hasPublications ? (
                                            <>
                                                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card flex flex-col items-center text-center">
                                                    <Award className="w-6 h-6 text-blue-500 mb-3" />
                                                    <div className="text-xl font-black text-slate-900 mb-1">Apex Council</div>
                                                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Governance Role</div>
                                                </div>
                                                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card flex flex-col items-center text-center">
                                                    <Star className="w-6 h-6 text-amber-500 mb-3" />
                                                    <div className="text-xl font-black text-slate-900 mb-1">Strategic</div>
                                                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Key Portfolios</div>
                                                </div>
                                            </>
                                        ) : selectedFaculty.type !== 'staff' ? (
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
                                        ) : null}

                                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card flex flex-col items-center text-center">
                                            <FileText className="w-6 h-6 text-emerald-500 mb-3" />
                                            <div className="text-xs font-bold text-slate-900 mb-1 break-words w-full px-1">{selectedFaculty.qual || "Professional Staff"}</div>
                                            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-auto">
                                                {isGovBody ? 'Governance Focus' : 'Qualification'}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })()}

                            {/* Academic & Research Identifiers (For Teaching Staff & Leadership) */}
                            {selectedFaculty.type !== 'staff' && selectedFaculty.dept !== 'Governing Body' && (
                                <div className="bg-gradient-to-r from-blue-50/90 via-indigo-50/60 to-slate-50 p-6 rounded-3xl border border-blue-200/80 shadow-xs mb-10">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                        <span className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-2">
                                            <Award className="w-4 h-4 text-blue-600" />
                                            Official Academic & Research Identifiers
                                        </span>
                                        <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100/80 text-blue-800 px-3 py-1 rounded-full w-fit">
                                            Verified Scholarly Profiles
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                                        {/* Vidwan ID */}
                                        <a
                                            href={selectedFaculty.vidwanId ? `https://vidwan.inflibnet.ac.in/profile/${selectedFaculty.vidwanId}` : `https://vidwan.inflibnet.ac.in/search/search_result?query=${encodeURIComponent(selectedFaculty.name)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between p-3 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-500 hover:shadow-md transition-all group"
                                        >
                                            <div className="min-w-0 pr-2">
                                                <div className="text-[10px] font-black text-amber-700 uppercase tracking-wider">Vidwan ID</div>
                                                <div className="text-xs font-bold text-slate-900 truncate group-hover:text-amber-700 transition-colors">
                                                    {selectedFaculty.vidwanId ? selectedFaculty.vidwanId : 'INFLIBNET Profile ↗'}
                                                </div>
                                            </div>
                                            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </a>

                                        {/* Scopus Author ID */}
                                        <a
                                            href={selectedFaculty.scopusId ? `https://www.scopus.com/authid/detail.uri?authorId=${selectedFaculty.scopusId}` : `https://www.scopus.com/results/authorNamesList.uri?st1=${encodeURIComponent(selectedFaculty.name.replace(/^(Dr\.|Prof\.|Mr\.|Ms\.)\s*/i, ''))}&affilName=Maharaja+Surajmal`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between p-3 rounded-2xl bg-white border border-slate-200/90 hover:border-orange-500 hover:shadow-md transition-all group"
                                        >
                                            <div className="min-w-0 pr-2">
                                                <div className="text-[10px] font-black text-orange-700 uppercase tracking-wider">Scopus Author ID</div>
                                                <div className="text-xs font-bold text-slate-900 truncate group-hover:text-orange-700 transition-colors">
                                                    {selectedFaculty.scopusId ? selectedFaculty.scopusId : 'Scopus Search ↗'}
                                                </div>
                                            </div>
                                            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-orange-600 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </a>

                                        {/* ORCID */}
                                        <a
                                            href={selectedFaculty.orcidId ? `https://orcid.org/${selectedFaculty.orcidId}` : `https://orcid.org/orcid-search/search?searchQuery=${encodeURIComponent(selectedFaculty.name)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between p-3 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-500 hover:shadow-md transition-all group"
                                        >
                                            <div className="min-w-0 pr-2">
                                                <div className="text-[10px] font-black text-emerald-700 uppercase tracking-wider">ORCID ID</div>
                                                <div className="text-xs font-bold text-slate-900 truncate group-hover:text-emerald-700 transition-colors">
                                                    {selectedFaculty.orcidId ? selectedFaculty.orcidId : 'ORCID Record ↗'}
                                                </div>
                                            </div>
                                            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </a>

                                        {/* Google Scholar */}
                                        <a
                                            href={selectedFaculty.googleScholar && selectedFaculty.googleScholar !== '#' ? selectedFaculty.googleScholar : `https://scholar.google.com/citations?view_op=search_authors&mauthors=${encodeURIComponent(selectedFaculty.name)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between p-3 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-500 hover:shadow-md transition-all group"
                                        >
                                            <div className="min-w-0 pr-2">
                                                <div className="text-[10px] font-black text-blue-700 uppercase tracking-wider">Google Scholar</div>
                                                <div className="text-xs font-bold text-slate-900 truncate group-hover:text-blue-700 transition-colors">
                                                    Indexed Citations ↗
                                                </div>
                                            </div>
                                            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </a>
                                    </div>
                                </div>
                            )}

                            {/* Research Interests & Courses Taught / Governance Portfolios */}
                            {(() => {
                                const isGovBody = selectedFaculty.dept === 'Governing Body' || selectedFaculty.id?.startsWith('gb-') || selectedFaculty.id?.startsWith('adv-');
                                return (
                                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                                        {/* Left Box */}
                                        <div className="bg-emerald-50/50 rounded-3xl p-8 border border-emerald-100">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                                                    <Award className="w-5 h-5 text-emerald-600" />
                                                </div>
                                                <h3 className="text-xl font-bold text-emerald-950">
                                                    {isGovBody ? 'Governance Focus & Leadership Portfolios' : 'Research Interests & Specialization'}
                                                </h3>
                                            </div>
                                            <ul className="space-y-4">
                                                {(selectedFaculty.researchInterests || selectedFaculty.goodAt || []).map((trait, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-emerald-800">
                                                        <Star className="w-5 h-5 shrink-0 text-emerald-500 fill-emerald-500 mt-0.5" />
                                                        <span className="font-medium leading-relaxed">{trait}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Right Box */}
                                        <div className="bg-blue-50/50 rounded-3xl p-8 border border-blue-100">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                                    <BookOpen className="w-5 h-5 text-blue-600" />
                                                </div>
                                                <h3 className="text-xl font-bold text-blue-950">
                                                    {isGovBody ? 'Key Initiatives, Projects & Public Leadership' : 'Courses Taught & Academic Domains'}
                                                </h3>
                                            </div>
                                            <ul className="space-y-4">
                                                {(selectedFaculty.coursesTaught || [
                                                    "Advanced Engineering Foundations",
                                                    "Undergraduate Laboratory & Project Mentorship"
                                                ]).map((course, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-slate-700">
                                                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                                                        <span className="font-medium leading-relaxed">{course}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                );
                            })()}

                            {/* Actions & Profiles */}
                            <div className="flex flex-col gap-6 border-t border-slate-200 pt-8">
                                <div className="flex flex-wrap gap-4 items-center justify-between">
                                    <div className="flex flex-wrap gap-3 w-full sm:w-auto">
                                        <a
                                            href={`mailto:${selectedFaculty.email}`}
                                            className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-surface text-body font-bold hover:bg-slate-200 transition-colors text-sm"
                                        >
                                            <Mail className="w-4 h-4 text-slate-600" />
                                            {selectedFaculty.email}
                                        </a>
                                        {selectedFaculty.phone && (
                                            <span className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-surface text-slate-700 font-medium text-sm">
                                                <Phone className="w-4 h-4 text-blue-600" />
                                                {selectedFaculty.phone}
                                            </span>
                                        )}
                                    </div>

                                    {selectedFaculty.pdfLink && selectedFaculty.pdfLink !== "#" ? (
                                        <a
                                            href={selectedFaculty.pdfLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 hover:shadow-card-hover hover:shadow-blue-500/30 transition-all w-full sm:w-auto text-sm"
                                        >
                                            <Download className="w-4 h-4" />
                                            View Official Profile PDF
                                        </a>
                                    ) : (
                                        <button
                                            disabled
                                            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-surface text-muted font-bold cursor-not-allowed w-full sm:w-auto text-sm"
                                        >
                                            <FileText className="w-4 h-4" />
                                            PDF Profile Unavailable
                                        </button>
                                    )}
                                </div>

                                {/* Online Profiles & Websites */}
                                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-2">
                                        <Globe className="w-4 h-4 text-blue-600" />
                                        Profiles & Web Links
                                    </span>
                                    <div className="flex flex-wrap gap-2.5">
                                        {selectedFaculty.linkedin && (
                                            <a
                                                href={selectedFaculty.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0077B5] text-white text-xs font-bold hover:bg-[#005a8a] transition-all shadow-xs"
                                                title="LinkedIn Profile"
                                            >
                                                <Linkedin className="w-3.5 h-3.5" />
                                                LinkedIn
                                            </a>
                                        )}
                                        {selectedFaculty.personalWebsite && (
                                            <a
                                                href={selectedFaculty.personalWebsite}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs font-bold hover:border-primary hover:text-primary transition-all shadow-xs"
                                                title="Personal Webpage"
                                            >
                                                <Globe className="w-3.5 h-3.5 text-blue-600" />
                                                Personal Webpage
                                            </a>
                                        )}
                                        {selectedFaculty.googleScholar && (
                                            <a
                                                href={selectedFaculty.googleScholar}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs font-bold hover:border-amber-500 hover:text-amber-600 transition-all shadow-xs"
                                                title="Google Scholar Profile"
                                            >
                                                <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                                                Google Scholar
                                            </a>
                                        )}
                                        {selectedFaculty.researchGate && (
                                            <a
                                                href={selectedFaculty.researchGate}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs font-bold hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-xs"
                                                title="ResearchGate Profile"
                                            >
                                                <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
                                                ResearchGate
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Interactive Stat Detail Modals */}
            {activeStatModal && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center px-4 py-6 animate-fade-in">
                    <div 
                        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                        onClick={() => setActiveStatModal(null)}
                    ></div>
                    <div className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl p-6 sm:p-8 border border-slate-200 z-10 animate-scale-in">
                        <button
                            type="button"
                            onClick={() => setActiveStatModal(null)}
                            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-all cursor-pointer"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {activeStatModal === 'faculty' && (
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-slate-900">130+ Distinguished Faculty Members</h3>
                                        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Academic & Research Roster</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 leading-relaxed mb-6 font-light">
                                    Maharaja Surajmal Institute of Technology is home to over 130 highly qualified faculty members dedicated to cultivating engineering innovation, critical inquiry, and academic excellence.
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                        <div className="text-2xl font-bold text-slate-900 mb-0.5">65%+</div>
                                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Ph.D. Holders</div>
                                    </div>
                                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                        <div className="text-2xl font-bold text-slate-900 mb-0.5">1:15</div>
                                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Faculty : Student</div>
                                    </div>
                                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 col-span-2 sm:col-span-1">
                                        <div className="text-2xl font-bold text-slate-900 mb-0.5">100%</div>
                                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">PG / Ph.D. Qualified</div>
                                    </div>
                                </div>
                                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Departmental Faculty Strength</h4>
                                <div className="space-y-2 mb-6">
                                    {[
                                        { dept: "Computer Science & Engineering (CSE)", count: "35+ Faculty", intake: "240 Intake" },
                                        { dept: "Information Technology (IT)", count: "30+ Faculty", intake: "180 Intake" },
                                        { dept: "Electronics & Communication Engineering (ECE)", count: "32+ Faculty", intake: "180 Intake" },
                                        { dept: "Electrical & Electronics Engineering (EEE)", count: "18+ Faculty", intake: "60 Intake" },
                                        { dept: "Applied Sciences & Humanities", count: "18+ Faculty", intake: "1st Year B.Tech" },
                                        { dept: "Administration & Support Officers", count: "15+ Staff", intake: "Campus Operations" }
                                    ].map((row, i) => (
                                        <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm">
                                            <span className="font-semibold text-slate-800">{row.dept}</span>
                                            <span className="font-bold text-primary">{row.count}</span>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    onClick={() => {
                                        setActiveDept('All');
                                        setActiveStatModal(null);
                                    }}
                                    className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-all cursor-pointer"
                                >
                                    Browse All Faculty in Directory
                                </button>
                            </div>
                        )}

                        {activeStatModal === 'publications' && (
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                                        <BookOpen className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-slate-900">1000+ Research Publications</h3>
                                        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Scholarly Footprint & Citations</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 leading-relaxed mb-6 font-light">
                                    MSIT faculty members and student researchers consistently publish pioneering technical research across Scopus, Web of Science, IEEE Xplore, SCI/SCIE, and UGC-CARE indexed international journals.
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                                    <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100">
                                        <div className="text-2xl font-black text-amber-900 mb-0.5">1000+</div>
                                        <div className="text-[10px] font-bold text-amber-700 uppercase tracking-wide">Papers Published</div>
                                    </div>
                                    <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100">
                                        <div className="text-2xl font-black text-amber-900 mb-0.5">15,000+</div>
                                        <div className="text-[10px] font-bold text-amber-700 uppercase tracking-wide">Total Citations</div>
                                    </div>
                                    <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100">
                                        <div className="text-2xl font-black text-amber-900 mb-0.5">12+</div>
                                        <div className="text-[10px] font-bold text-amber-700 uppercase tracking-wide">Patents Filed/Granted</div>
                                    </div>
                                    <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100">
                                        <div className="text-2xl font-black text-amber-900 mb-0.5">45+</div>
                                        <div className="text-[10px] font-bold text-amber-700 uppercase tracking-wide">Institution H-Index</div>
                                    </div>
                                </div>
                                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Key Focus Research Clusters</h4>
                                <ul className="space-y-2.5 mb-6 text-sm text-slate-700 font-medium">
                                    <li className="flex items-center gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>Artificial Intelligence, Deep Learning & Computer Vision</span>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>Nano-materials, High-Resolution TEM & Semiconductor Electronics</span>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>5G/6G Wireless Sensor Networks & Smart Antennas</span>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>Renewable Energy, Smart Grids & Electric Vehicle Microgrids</span>
                                    </li>
                                </ul>
                                <button
                                    onClick={() => setActiveStatModal(null)}
                                    className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-all cursor-pointer"
                                >
                                    Close Research Overview
                                </button>
                            </div>
                        )}

                        {activeStatModal === 'departments' && (
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                                        <Building2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-slate-900">5 Core Academic Departments</h3>
                                        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">AICTE & NBA Accredited Engineering Divisions</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 leading-relaxed mb-6 font-light">
                                    Choose any department below to immediately filter the directory and inspect its faculty members, lab supervisors, and research portfolios.
                                </p>
                                <div className="space-y-3 mb-6">
                                    {[
                                        { dept: "CSE", name: "Computer Science & Engineering", intake: "240 Seats", desc: "Software Systems, Machine Learning, Cloud Architecture" },
                                        { dept: "IT", name: "Information Technology", intake: "180 Seats", desc: "Cyber Security, Data Science, Full-Stack Engineering" },
                                        { dept: "ECE", name: "Electronics & Communication Engineering", intake: "180 Seats", desc: "VLSI Design, Embedded IoT, RF & 5G Communications" },
                                        { dept: "EEE", name: "Electrical & Electronics Engineering", intake: "60 Seats", desc: "Electric Vehicles, Control Systems, Power Electronics" },
                                        { dept: "Applied Sciences", name: "Applied Sciences & Humanities", intake: "1st Year", desc: "Applied Physics, Chemistry, Mathematics & Communication Skills" }
                                    ].map((d, i) => (
                                        <button
                                            key={i}
                                            onClick={() => {
                                                setActiveDept(d.dept);
                                                setActiveStatModal(null);
                                            }}
                                            className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200/80 hover:border-primary/40 transition-all text-left group cursor-pointer"
                                        >
                                            <div>
                                                <div className="font-bold text-slate-900 group-hover:text-primary transition-colors text-base">{d.name}</div>
                                                <div className="text-xs text-slate-500 mt-0.5">{d.desc}</div>
                                            </div>
                                            <div className="text-right shrink-0 pl-3">
                                                <span className="inline-block px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-700">
                                                    {d.intake}
                                                </span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeStatModal === 'experience' && (
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                                        <GraduationCap className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-slate-900">15+ Years Avg. Seniority & Mentorship</h3>
                                        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Experienced Pedagogy & Research Leadership</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 leading-relaxed mb-6 font-light">
                                    MSIT's faculty brings together senior academic leaders, former directors of national laboratories, and industry veterans who provide patient mentorship and career guidance to students.
                                </p>
                                <div className="grid grid-cols-3 gap-3 mb-6">
                                    <div className="bg-purple-50/60 p-4 rounded-2xl border border-purple-100 text-center">
                                        <div className="text-2xl font-black text-purple-900 mb-0.5">25+</div>
                                        <div className="text-[10px] font-bold text-purple-700 uppercase tracking-wide">Professors & HODs</div>
                                    </div>
                                    <div className="bg-purple-50/60 p-4 rounded-2xl border border-purple-100 text-center">
                                        <div className="text-2xl font-black text-purple-900 mb-0.5">45+</div>
                                        <div className="text-[10px] font-bold text-purple-700 uppercase tracking-wide">Associate Profs</div>
                                    </div>
                                    <div className="bg-purple-50/60 p-4 rounded-2xl border border-purple-100 text-center">
                                        <div className="text-2xl font-black text-purple-900 mb-0.5">60+</div>
                                        <div className="text-[10px] font-bold text-purple-700 uppercase tracking-wide">Assistant Profs</div>
                                    </div>
                                </div>
                                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 mb-6 text-sm text-slate-700 leading-relaxed space-y-2">
                                    <p>• <strong>Dedicated Student Mentorship:</strong> Every student cohort is assigned an experienced faculty mentor for academic and career advising.</p>
                                    <p>• <strong>Corporate & Laboratory Veterans:</strong> Mentors include former researchers from CSIR-AMPRI, CSIR-NML, National Physical Laboratory, Wipro, and DCM Data Systems.</p>
                                    <p>• <strong>Competitive Exam Guidance:</strong> Structured mentorship cells for GATE, CAT, GRE, and civil services aspirants.</p>
                                </div>
                                <button
                                    onClick={() => setActiveStatModal(null)}
                                    className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-all cursor-pointer"
                                >
                                    Close Mentorship Overview
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </main>
    );
};

export default FacultyStaff;
