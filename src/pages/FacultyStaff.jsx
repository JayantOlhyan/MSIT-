import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { Search, Mail, Award, BookOpen, ChevronRight, X, TrendingUp, Search as Target, FileText, Download, Star, Briefcase, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

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

    const facultyMembers = [
        {
            id: 'dir-1',
            name: "Prof. (Dr.) Avanish Kumar Srivastava",
            role: "Director",
            dept: "Administration",
            email: "director@msit.in",
            linkedin: "https://in.linkedin.com/in/avanish-kumar-srivastava-6b711b15",
            img: "/faculty/director.png",
            qual: "Ph.D. (IISc Bangalore), M.Tech (IIT Kanpur)",
            experience: "30+",
            publications: "460+",
            patents: "15+",
            goodAt: ["Exceptional research pedigree", "Former Director of CSIR-AMPRI", "Fellow of INAE & IIM", "Global Research Collaborations"],
            badAt: ["Extremely high administrative overload", "Limited availability for direct undergraduate mentorship"],
            pdfLink: "#",
            bio: "Prof. Srivastava is a distinguished scientist and academic leader with decades of experience at top-tier research institutions in India. He brings a strong focus on advanced materials research and institutional growth."
        },
        {
            id: 'cse-1',
            name: "Dr. Geetika Dhand",
            role: "Professor & HOD",
            dept: "CSE",
            email: "geetika.dhand@msit.in",
            linkedin: "https://in.linkedin.com/in/geetika-dhand-a775447",
            img: "/faculty/geetika-dhand.png",
            qual: "Ph.D., M.Tech (CSE)",
            experience: "20+",
            publications: "50+",
            patents: "3+",
            goodAt: ["Expertise in AI & Machine Learning", "Technology Transfer Specialist", "Consistent excellent student feedback"],
            badAt: ["Heavy departmental administration load limits core research time"],
            pdfLink: "https://www.msit.in/media/uploads/2026/02/17/dr-geetika-dhand.pdf",
            bio: "Dr. Dhand has over two decades of experience shaping the Computer Science curriculum. She is deeply involved in industry-academia partnerships and advancing AI education."
        },
        {
            id: 'cse-2',
            name: "Dr. Naveen Dahiya",
            role: "Professor & Dean Academics",
            dept: "CSE",
            email: "naveen.dahiya@msit.in",
            linkedin: "https://in.linkedin.com/in/naveen-dahiya-7a18156b",
            img: "/faculty/naveen-dahiya.png",
            qual: "Ph.D., M.Tech., B.E. (CSE)",
            experience: "20+",
            publications: "15+",
            patents: "1",
            goodAt: ["Database Analytics", "SCIE Research", "Academic Leadership", "Patent Innovation"],
            badAt: ["Extensive administrative responsibilities may limit available time for direct student mentorship."],
            pdfLink: "https://www.msit.in/media/2024/10/09/naveen-detailed-profile.pdf",
            bio: "Dr. Dahiya serves as the Dean of Academics and brings two decades of experience. His research focuses heavily on Database Analytics and he frequently publishes in high-impact SCIE indexed journals."
        },
        {
            id: 'cse-3',
            name: "Dr. Koyel Datta Gupta",
            role: "Professor",
            dept: "CSE",
            email: "koyel.dattagupta@msit.in",
            linkedin: "https://in.linkedin.com/in/koyel-dattagupta-99832a9",
            img: "/faculty/koyel-datta.png",
            qual: "Ph.D. (Jamia Millia Islamia), M.Tech Gold Medalist",
            experience: "21+",
            publications: "36+",
            patents: "Multiple",
            goodAt: ["Wireless Communication & IoT", "Blockchain & Cybersecurity Expert", "36+ SCI/SCIE Journal Publications", "IEEE Senior Member"],
            badAt: ["Broad research interests across multiple domains may require narrower specialization for next-gen deep tech impact."],
            pdfLink: "https://www.msit.in/media/uploads/2026/02/17/koyel-dg-name-of-faculty_main-profile-16jan2026.pdf",
            bio: "Dr. Datta Gupta is a Gold Medalist researcher with expertise in secure wireless communications and blockchain. She is a senior member of IEEE and has a prolific publication record."
        },
        {
            id: 'it-1',
            name: "Dr. Tripti Sharma",
            role: "Professor & HOD",
            dept: "IT",
            email: "tripti.sharma@msit.in",
            img: "https://randomuser.me/api/portraits/women/44.jpg",
            qual: "Ph.D., M.Tech (IT)",
            experience: "21+",
            publications: "45+",
            patents: "2+",
            goodAt: ["India Prime Icon Award 2022 Winner", "Best Faculty Award 2015", "Curriculum Design & Innovation"],
            badAt: ["Juggling multiple high-level institute committees"],
            pdfLink: "#",
            bio: "An award-winning educator, Dr. Sharma leads the IT department with a focus on modern software engineering practices and student-centric learning models."
        },
        {
            id: 'ece-1',
            name: "Prof. (Dr.) Suman Mann",
            role: "Professor & HOD",
            dept: "ECE",
            email: "suman.mann@msit.in",
            img: "https://randomuser.me/api/portraits/women/68.jpg",
            qual: "Ph.D. (Electronics)",
            experience: "24+",
            publications: "60+",
            patents: "8+",
            goodAt: ["VLSI Design & Embedded Systems", "Successfully manages the largest department (28 faculty)", "Securing research grants"],
            badAt: ["Focusing more on macro-management than specialized niche research recently"],
            pdfLink: "#",
            bio: "Leading one of the largest departments on campus, Prof. Mann is instrumental in upgrading the institute's hardware laboratories and securing continuous NBA accreditation."
        },
        {
            id: 'eee-1',
            name: "Prof. Meena Tushir",
            role: "Professor & HOD",
            dept: "EEE",
            email: "meena.tushir@msit.in",
            img: "https://randomuser.me/api/portraits/women/32.jpg",
            qual: "Ph.D. (Electrical)",
            experience: "25+",
            publications: "55+",
            patents: "4+",
            goodAt: ["Expert in Neural Networks & Fuzzy Logic", "Nonlinear Systems research", "High success rate in student project mentoring"],
            badAt: ["Department struggles with core industry placements compared to IT branches"],
            pdfLink: "#",
            bio: "Prof. Tushir is a leading voice in Electrical Engineering, specifically focusing on integrating modern AI concepts (Neural Networks) into traditional electrical systems."
        },
        {
            id: 'ap-1',
            name: "Dr. Brijpal Singh",
            role: "Associate Prof. & HOD",
            dept: "Applied Sciences",
            email: "brijpal.singh@msit.in",
            img: "https://randomuser.me/api/portraits/men/22.jpg",
            qual: "Ph.D. (Mechanical)",
            experience: "29+",
            publications: "30+",
            patents: "1+",
            goodAt: ["Vast teaching experience (29 years)", "Manufacturing Technology expert", "Excellent foundational knowledge builder for 1st-year students"],
            badAt: ["Relatively lower recent publication output compared to younger faculty"],
            pdfLink: "#",
            bio: "Dr. Singh ensures that every incoming engineering student has an unbreakable foundation in the physical and applied sciences during their crucial first year."
        }

    ];

    const filteredFaculty = facultyMembers.filter(f => 
        (activeDept === 'All' || f.dept === activeDept) &&
        (f.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
         f.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
         f.goodAt.some(trait => trait.toLowerCase().includes(searchQuery.toLowerCase())))
    );

    return (
        <main className="min-h-screen bg-[#f8fafc] overflow-hidden">
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
                            <div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Expert Faculty</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-400 mb-1">1000+</div>
                            <div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Publications</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-indigo-400 mb-1">5</div>
                            <div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Core Departments</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-purple-400 mb-1">15+</div>
                            <div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Avg Years Exp.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Advanced Search & Filtering - Sticky */}
            <div className="sticky top-[80px] z-30 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row gap-4 md:items-center justify-between">
                    <div className="relative w-full md:w-96 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                        <input 
                            type="text" 
                            placeholder="Search names, skills, or roles..."
                            className="w-full pl-12 pr-4 py-3 bg-slate-100 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-800 font-medium placeholder-slate-400"
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
                                    ? 'bg-slate-900 border-slate-900 text-white shadow-lg shadow-slate-900/20' 
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
                                className="group bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-2xl border border-slate-200 hover:border-blue-200 cursor-pointer transition-all duration-500 ease-out hover:-translate-y-2 relative overflow-hidden flex flex-col h-full"
                            >
                                {/* Decorative Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="flex items-start gap-5 relative z-10 mb-6">
                                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 shrink-0 shadow-inner p-1 border border-slate-200 group-hover:border-blue-300 transition-colors duration-500">
                                        <img src={faculty.img} alt={faculty.name} className="w-full h-full object-cover rounded-xl" />
                                    </div>
                                    <div className="group/dept">
                                        <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-600 text-[10px] uppercase tracking-bolder font-bold rounded-lg mb-2 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                                            {faculty.dept}
                                            {faculty.dept === 'Applied Sciences' && (
                                                <span className="ml-1 font-bold text-blue-600/70">(1st Year)</span>
                                            )}
                                        </span>
                                        <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1 group-hover:text-blue-700 transition-colors line-clamp-2">{faculty.name}</h3>
                                        <p className="text-slate-500 text-sm font-medium">{faculty.role}</p>
                                    </div>
                                </div>

                                <div className="mt-auto relative z-10">
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

                                    {/* Brief highlight of Top Strength */}
                                    <div className="flex items-center gap-2 text-sm text-slate-600 bg-emerald-50 text-emerald-700 px-3 py-2 rounded-xl mb-6 truncate">
                                        <Star className="w-4 h-4 shrink-0 fill-emerald-500 text-emerald-500" />
                                        <span className="truncate font-medium">{faculty.goodAt[0]}</span>
                                    </div>

                                    <div className="flex items-center justify-between text-blue-600 font-bold text-sm">
                                        View Full Profile
                                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
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
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">No Profiles Found</h3>
                        <p className="text-slate-500 text-lg">Try adjusting your search terms or department filters.</p>
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
                    <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl animate-scale-in border border-white/20">
                        {/* Close Button */}
                        <button 
                            onClick={() => setSelectedFaculty(null)}
                            className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-xl border border-white/40 hover:bg-white/40 text-slate-800 rounded-full flex items-center justify-center z-20 transition-all shadow-sm cursor-pointer"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Modal Header/Hero */}
                        <div className="bg-slate-900 pt-16 pb-24 px-8 md:px-16 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[80px]"></div>
                            
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
                                <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-white p-1.5 shadow-2xl shrink-0 -mb-20 md:-mb-32 z-10 border-2 border-white/10">
                                    <img src={selectedFaculty.img} alt={selectedFaculty.name} className="w-full h-full object-cover rounded-2xl" />
                                </div>
                                <div className="text-center md:text-left flex-1">
                                    <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-lg mb-4">
                                        {selectedFaculty.dept} Department
                                        {selectedFaculty.dept === 'Applied Sciences' && (
                                            <span className="ml-1 text-blue-300 font-bold">(1st Year)</span>
                                        )}
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-2">
                                        {selectedFaculty.name}
                                    </h2>
                                    <p className="text-blue-400 text-lg md:text-xl font-medium tracking-wide">
                                        {selectedFaculty.role}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="px-8 md:px-16 pt-20 md:pt-16 pb-16 bg-[#f8fafc]">
                            {/* Bio */}
                            <p className="text-slate-600 text-lg leading-relaxed mb-12 font-light">
                                {selectedFaculty.bio}
                            </p>

                            {/* Metrics Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
                                    <Briefcase className="w-6 h-6 text-indigo-500 mb-3" />
                                    <div className="text-2xl font-black text-slate-900 mb-1">{selectedFaculty.experience}</div>
                                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Years Exp.</div>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
                                    <BookOpen className="w-6 h-6 text-blue-500 mb-3" />
                                    <div className="text-2xl font-black text-slate-900 mb-1">{selectedFaculty.publications}</div>
                                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Publications</div>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
                                    <Award className="w-6 h-6 text-amber-500 mb-3" />
                                    <div className="text-2xl font-black text-slate-900 mb-1">{selectedFaculty.patents}</div>
                                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Patents</div>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
                                    <FileText className="w-6 h-6 text-emerald-500 mb-3" />
                                    <div className="text-[10px] sm:text-xs font-bold text-slate-900 mb-1 break-words w-full px-1">{selectedFaculty.qual}</div>
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
                                        className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 transition-colors"
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
                                        className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all w-full sm:w-auto"
                                    >
                                        <Download className="w-5 h-5" />
                                        View Official Profile PDF
                                    </a>
                                ) : (
                                    <button 
                                        disabled
                                        className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-200 text-slate-400 font-bold cursor-not-allowed w-full sm:w-auto text-sm"
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
