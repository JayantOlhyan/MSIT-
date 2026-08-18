import React, { useState, useEffect } from 'react';
import { Download, FileText, TrendingUp, Building2, Users, ArrowRight, Award, X, Mail, Linkedin, ChevronRight, Globe, Phone, Star } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { facultyMembers } from '../data/facultyData';

const Placements = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedMember) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedMember]);

    const getFacultyDetails = (nameQuery) => {
        const found = facultyMembers.find(f => f.name.toLowerCase().includes(nameQuery.toLowerCase()));
        return found ? {
            ...found,
            phone: found.phone || "011-65215944" // Default T&P office number
        } : {
            name: nameQuery,
            role: "Faculty Member",
            dept: "MSIT",
            img: "/faculty/default-avatar.webp",
            bio: "Faculty coordinator helping facilitate placements for engineering streams.",
            email: "placements@msit.in",
            linkedin: "#",
            qual: "PhD / M.Tech",
            experience: "10+",
            publications: "N/A",
            patents: "N/A",
            phone: "011-65215944"
        };
    };

    const committeeMembers = [
        { nameQuery: "Meena Rao", committeeRole: "Convener", branch: "ECE" },
        { nameQuery: "Kavita Sheoran", committeeRole: "Co-convener", branch: "CSE" },
        { nameQuery: "Parveen Kumar", committeeRole: "Co-convener", branch: "IT" }
    ];

    const coordinators = [
        { nameQuery: "Parul Chaudhary", branch: "CSE-1" },
        { nameQuery: "Shaily Malik", branch: "CSE-2" },
        { nameQuery: "Pooja Kherwa", branch: "CSE-3" },
        { nameQuery: "Gunjan Beniwal", displayName: "Ms. Gunjan", branch: "CSE-E" },
        { nameQuery: "Sonika Malik", branch: "IT-1" },
        { nameQuery: "Meena Siwach", branch: "IT-2" },
        { nameQuery: "Minakshi Tomer", branch: "IT-E" },
        { nameQuery: "Sakshi Rajput", branch: "ECE-1" },
        { nameQuery: "Himani", branch: "ECE-2" },
        { nameQuery: "Suman Lata", displayName: "Ms. Sumanlata", branch: "ECE-E" },
        { nameQuery: "Rakhi Kamra", branch: "EEE" },
        { nameQuery: "Sachit Rathee", branch: "EEE" }
    ];

    // Placement Statistics Management
    const placementRecords = [

    // ...
        { year: "2025", link: "https://www.msit.in/media/uploads/2025/10/09/msit-placement-batch-2025.pdf" },
        { year: "2024", link: "https://www.msit.in/media/uploads/2025/06/02/placement-status-batch-2024.pdf" },
        { year: "2023", link: "https://www.msit.in/media/2024/04/09/batch-2023-placement-status-final.pdf" },
        { year: "2022", link: "https://www.msit.in/media/2024/04/09/batch-2022-placement-status-final.pdf" },
        { year: "2021", link: "https://www.msit.in/media/2021/08/26/2021-tpo.pdf" },
        { year: "2020", link: "https://www.msit.in/media/2021/09/08/placement.pdf" },
        { year: "2019", link: "https://www.msit.in/media/2019/05/14/nareshfinal2019.pdf" },
        { year: "2018", link: "https://www.msit.in/media/2018/09/13/placement-2018.pdf" },
        { year: "2017", link: "https://www.msit.in/media/2017/08/11/placements2017.pdf" },
        { year: "2016", link: "https://www.msit.in/media/2017/03/15/updated_pplacements_2016_sheet_xls_-_sheet1.pdf" },
        { year: "2015", link: "https://www.msit.in/media/2018/08/24/placment-2015.pdf" }
    ];

    const topRecruiters = [
        { name: "Google", category: "Product" },
        { name: "Microsoft", category: "Product" },
        { name: "Amazon", category: "Product" },
        { name: "Adobe", category: "Product" },
        { name: "Samsung R&D", category: "Product" },
        { name: "Postman", category: "Product" },
        { name: "ZS Associates", category: "Consulting" },
        { name: "ION Trading", category: "Fintech" },
        { name: "Josh Technologies", category: "Product" },
        { name: "TCS", category: "Services" },
        { name: "Infosys", category: "Services" },
        { name: "Wipro", category: "Services" },
        { name: "Accenture", category: "Services" },
        { name: "Cognizant", category: "Services" },
        { name: "IBM", category: "Services" }
    ];

    const trainingPrograms = [
        {
            title: "Aptitude & Evaluation",
            description: "Regular diagnostics through leading assessment portals including AMCAT, CoCubes, and FNAT to evaluate quantitative and logical reasoning skills."
        },
        {
            title: "Coding Drills & Hackathons",
            description: "Continuous programming contests, competitive coding workshops, and hackathons to prepare students for technical interviews."
        },
        {
            title: "Technology Workshops",
            description: "Expert-led bootcamps focusing on trending domains such as Python programming, Machine Learning, Cloud Computing, and Web Technologies."
        },
        {
            title: "Mock Interviews & GDs",
            description: "Simulated face-to-face technical rounds, HR interview coaching, and structured Group Discussions to build confidence."
        }
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            <SEO 
                title="Placements" 
                description="Explore stellar placement records at Maharaja Surajmal Institute of Technology. Our graduates secure top roles at Google, Microsoft, and Amazon with 95%+ success." 
                canonicalPath="/placements"
            />
            <PageHero 
                title="Stellar Placement" 
                accentTitle="Records & Success" 
                description="Maharaja Surajmal Institute of Technology (MSIT) has a legacy of producing industry-ready engineers. Explore our decade-long track record of stellar placements."
                breadcrumbs={[{ label: 'Placements' }]}
            />

            {/* Quick Stats Banner */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                        <div className="flex flex-col items-center text-center p-4">
                            <TrendingUp className="w-10 h-10 text-blue-600 mb-4" />
                            <div className="text-4xl font-bold text-slate-900 mb-2">95%+</div>
                            <div className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-2">Placement Rate</div>
                            <span className="text-xs text-slate-400">For eligible stream students</span>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <Building2 className="w-10 h-10 text-blue-600 mb-4" />
                            <div className="text-4xl font-bold text-slate-900 mb-2">250+</div>
                            <div className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-2">Recruiting Partners</div>
                            <span className="text-xs text-slate-400">Top-tier product & services MNCs</span>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <Award className="w-10 h-10 text-blue-600 mb-4" />
                            <div className="text-4xl font-bold text-slate-900 mb-2">₹1.2Cr</div>
                            <div className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-2">Highest Package</div>
                            <span className="text-xs text-slate-400">National and global placements</span>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <Users className="w-10 h-10 text-blue-600 mb-4" />
                            <div className="text-4xl font-bold text-slate-900 mb-2">₹7 - 8.5 LPA</div>
                            <div className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-2">Average Package</div>
                            <span className="text-xs text-slate-400">Consistent upward salary trends</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recruiters Grid */}
            <div className="bg-slate-50 border-b border-slate-200 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center mb-10">
                        <Building2 className="w-8 h-8 text-blue-600 mr-4" />
                        <h2 className="text-3xl font-bold text-slate-900">Industry Giants Scouting at MSIT</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {topRecruiters.map((company, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center group hover:border-blue-200 hover:shadow-md transition-all">
                                <span className="text-base font-extrabold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">{company.name}</span>
                                <div className="mt-2 text-[10px] text-slate-400 font-bold tracking-widest uppercase">{company.category}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">

                {/* Main Content Area */}
                <div className="flex-grow space-y-16">
                    
                    {/* Training & Preparation Section */}
                    <div>
                        <div className="flex items-center mb-8 pb-4 border-b border-slate-200">
                            <TrendingUp className="w-8 h-8 text-blue-600 mr-4" />
                            <h2 className="text-3xl font-bold text-slate-900">Training & Grooming Programs</h2>
                        </div>
                        <p className="text-slate-600 mb-8 font-light text-lg">
                            The Training & Placement cell structures intensive bootcamps and assessment modules to transform students into corporate-ready professionals:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {trainingPrograms.map((prog, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="text-lg font-bold text-slate-900 mb-2">{prog.title}</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">{prog.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Placement Policy Section */}
                    <div>
                        <div className="flex items-center mb-8 pb-4 border-b border-slate-200">
                            <Award className="w-8 h-8 text-blue-600 mr-4" />
                            <h2 className="text-3xl font-bold text-slate-900">Placement Policy & Guidelines</h2>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-6">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center shrink-0">1</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Academic Bottomline</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Students are advised to maintain a consistent score of <strong>60% and above</strong> throughout their professional streams to qualify for prime product and consulting placement drives.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center shrink-0">2</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Support for Unplaced Students</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        The T&P Cell provides dedicated coaching and prioritized session scheduling for students who are yet to secure placements during the starting phase of recruitment drives.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center shrink-0">3</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Industry Institution Interaction</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        To maintain alignment with market expectations, students undergo compulsory industrial training, minor/major research projects, and attend corporate webinar series.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Placement Committee Section */}
                    <div>
                        <div className="flex items-center mb-8 pb-4 border-b border-slate-200">
                            <Users className="w-8 h-8 text-blue-600 mr-4" />
                            <h2 className="text-3xl font-bold text-slate-900">Placement Committee</h2>
                        </div>
                        <p className="text-slate-600 mb-8 font-light text-lg">
                            Placement Committee MSIT has been formed with a strong emphasis and aim to achieve the target of 100% placements of all the interested and eligible students. The Committee facilitates the students and coordinates during campus drives.
                        </p>

                        {/* Committee Conveners */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {committeeMembers.map((member, i) => {
                                const details = getFacultyDetails(member.nameQuery);
                                return (
                                    <div 
                                        key={i} 
                                        onClick={() => setSelectedMember(details)}
                                        className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group text-center"
                                    >
                                        <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-4 border-2 border-slate-100">
                                            <img src={details.img} alt={details.name} className="w-full h-full object-cover" />
                                        </div>
                                        <span className="inline-block px-2.5 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-wider rounded mb-1">{details.dept || member.branch}</span>
                                        <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">{details.name}</h3>
                                        <p className="text-slate-500 text-xs mt-0.5">{member.committeeRole}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Faculty Coordinators */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-200">
                            <h4 className="font-bold text-slate-900 mb-6 text-center text-base">Faculty Coordinators</h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {coordinators.map((coord, i) => {
                                    const details = getFacultyDetails(coord.nameQuery);
                                    return (
                                        <div 
                                            key={i} 
                                            onClick={() => setSelectedMember(details)}
                                            className="bg-slate-50 rounded-xl p-3 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-sm transition-all cursor-pointer group text-center"
                                        >
                                            <h5 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors text-xs sm:text-sm truncate">{coord.displayName || details.name}</h5>
                                            <span className="inline-block mt-1 px-1.5 py-0.5 bg-slate-200 text-slate-600 text-[8px] font-bold uppercase rounded">{coord.branch}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* PDF Records Section */}
                    <div>
                        <div className="flex items-center mb-8 pb-4 border-b border-slate-200">
                            <FileText className="w-8 h-8 text-blue-600 mr-4" />
                            <h2 className="text-3xl font-bold text-slate-900">Official Placement Records</h2>
                        </div>
                        <p className="text-slate-600 mb-8 font-light text-lg">
                            Transparency is our core value. View our detailed, year-wise historical placement data containing company lists, packages, and student achievements.
                        </p>

                        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {placementRecords.map((record, index) => (
                                <a
                                    key={index}
                                    href={record.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-white rounded-xl p-6 border border-slate-200 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
                                >
                                    <div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Batch of</div>
                                        <div className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                            {record.year}
                                        </div>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                        <Download className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:w-80 shrink-0">
                    <div className="bg-white rounded-2xl shadow-card border border-slate-200 p-8 sticky top-32 space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                                <Building2 className="w-5 h-5 mr-3 text-blue-600" />
                                Top Recruiters
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {topRecruiters.map((company, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-md text-sm font-medium text-slate-600 hover:border-slate-300 hover:text-slate-900 transition-colors cursor-default"
                                    >
                                        {company.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-8 border-t border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">Training & Placement Cell</h4>
                            <p className="text-sm text-slate-500 mb-4">
                                The T&P cell actively bridges the gap between academia and industry.
                            </p>
                            <div className="flex flex-col space-y-2 px-1">
                                <a href="tel:01165215944" className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-2">
                                    <span>📞 Call: 011-65215944</span>
                                </a>
                                <a href="mailto:placements@msit.in" className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-2">
                                    <span>✉️ Email: placements@msit.in</span>
                                </a>
                            </div>
                        </div>
            </div>

            {/* Interactive Modal Popup */}
            {selectedMember && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 animate-fade-in">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-slate-950/40 backdrop-blur-md"
                        onClick={() => setSelectedMember(null)}
                    ></div>

                    {/* Modal Card */}
                    <div className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto scrollbar-hide rounded-3xl sm:rounded-[2rem] shadow-2xl border border-slate-200 animate-scale-in">
                        {/* Close button */}
                        <button 
                            onClick={() => setSelectedMember(null)}
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors z-20"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Top banner / image */}
                        <div className="bg-slate-900 text-white p-5 sm:p-8 pt-10 sm:pt-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px]"></div>
                            <div className="flex gap-4 sm:gap-6 items-center relative z-10">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white/20 shadow-lg shrink-0">
                                    <img src={selectedMember.img} alt={selectedMember.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <span className="inline-block px-2.5 py-1 bg-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded mb-1.5 sm:mb-2 border border-white/5">{selectedMember.dept}</span>
                                    <h3 className="text-xl sm:text-2xl font-black truncate">{selectedMember.name}</h3>
                                    <p className="text-blue-300 text-xs sm:text-sm font-semibold line-clamp-2 mt-0.5">{selectedMember.role}</p>
                                </div>
                            </div>
                        </div>

                        {/* Details body */}
                        <div className="p-5 sm:p-8 space-y-6 sm:space-y-8 bg-[#f8fafc]">
                            {selectedMember.bio && (
                                <div>
                                    <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                                        <FileText className="w-4 h-4 text-blue-500" /> Professional Bio
                                    </h4>
                                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">
                                        {selectedMember.bio}
                                    </p>
                                </div>
                            )}

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-sm">
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1">Qualification</div>
                                    <div className="text-xs font-extrabold text-slate-800">{selectedMember.qual || "N/A"}</div>
                                </div>
                                <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-sm">
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1">Experience / Status</div>
                                    <div className="text-xs font-extrabold text-slate-800">{selectedMember.experience} Years</div>
                                </div>
                            </div>

                            {selectedMember.goodAt && selectedMember.goodAt.length > 0 && (
                                <div>
                                    <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-1.5 border-b border-slate-200 pb-2">
                                        <Star className="w-4 h-4 text-emerald-500 fill-emerald-500" /> Key Focus Areas
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedMember.goodAt.map((item, idx) => (
                                            <span key={idx} className="px-2.5 py-1 bg-emerald-50 border border-emerald-100 rounded text-xs font-bold text-emerald-700">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
                                <div className="flex flex-col gap-2 shrink-0">
                                    <a 
                                        href={`mailto:${selectedMember.email}`}
                                        className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 transition-colors truncate"
                                    >
                                        <Mail className="w-4 h-4 shrink-0" />
                                        <span className="truncate text-left">{selectedMember.email}</span>
                                    </a>

                                    <a 
                                        href={`tel:${selectedMember.phone}`}
                                        className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 transition-colors truncate"
                                    >
                                        <Phone className="w-4 h-4 shrink-0" />
                                        <span className="truncate text-left">{selectedMember.phone}</span>
                                    </a>
                                </div>

                                <div className="flex gap-3 justify-end items-end">
                                    {selectedMember.pdfLink && (
                                        <a 
                                            href={selectedMember.pdfLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="w-10 h-10 bg-slate-900 hover:bg-slate-800 text-white rounded-xl flex items-center justify-center transition-colors"
                                            title="View Official Profile PDF"
                                        >
                                            <FileText className="w-4 h-4" />
                                        </a>
                                    )}
                                    {selectedMember.linkedin && (
                                        <a 
                                            href={selectedMember.linkedin} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="w-10 h-10 bg-[#0077B5] hover:bg-[#005a8a] text-white rounded-xl flex items-center justify-center transition-colors"
                                            title="LinkedIn Profile"
                                        >
                                            <Linkedin className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Placements;
