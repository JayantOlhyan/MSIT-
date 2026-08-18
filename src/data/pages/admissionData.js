export const admissionData = {
    "brochure": {
        title: "Information Brochure",
        subtitle: "Everything you need to know about joining Maharaja Surajmal Institute of Technology.",
        seo_description: "Download the official info brochure of Maharaja Surajmal Institute of Technology. Get details on courses, placements, faculty, and vibrant campus life at MSIT.",
        category: "Admissions",
        heroImage: "/campus-hero.webp",
        heroImageAlt: "Cover of the official MSIT information brochure featuring campus life and academic highlights",
        content: `
            <p class="mb-6">Discover why thousands of aspiring engineers choose MSIT every year. Our comprehensive information brochure outlines our academic philosophy, placement statistics, faculty profiles, and the vibrant campus life that awaits you.</p>
            <h3 class="text-2xl font-semibold text-slate-900 mt-10 mb-4">Admissions 2026-27</h3>
            <p class="mb-6">Admission to all B.Tech programs is strictly based on the Common Entrance Test (CET) conducted by GGSIPU or JEE Main scores. Read the brochure for detailed eligibility criteria and counseling procedures.</p>
        `,
        stats: [
            { label: "Intake", value: "480" },
            { label: "Programs", value: "4 Core" }
        ],
        bulletPoints: ["Download PDF Brochure", "Admission Requirements", "Counseling Walkthrough"]
    },
    "online-fee": {
        title: "Online Fee Payment",
        subtitle: "Secure, instant, and transparent fee portal for Maharaja Surajmal Institute of Technology.",
        seo_description: "Easily pay academic fees online at Maharaja Surajmal Institute of Technology. Our secure portal supports UPI, Net Banking, and Cards for tuition and hostel fees.",
        category: "Admissions",
        heroImage: "/campus-hero.webp",
        heroImageAlt: "Secure MSIT online fee payment portal and digital transaction interface overview",
        content: `
            <p class="mb-6">MSIT provides a fully encrypted, seamless online payment gateway for all academic fee transactions. Students can securely pay their tuition, hostel, and miscellaneous fees using Net Banking, UPI, or Credit/Debit Cards.</p>
            <h3 class="text-2xl font-semibold text-slate-900 mt-10 mb-4">Payment Guidelines</h3>
            <p class="mb-6">Ensure you have your 11-digit Enrollment Number ready. A digital receipt will be instantly generated and emailed to your registered campus mail address upon successful transaction.</p>
        `,
        stats: [
            { label: "Gateway", value: "256-bit SSL" },
            { label: "Support", value: "24/7" }
        ],
        bulletPoints: ["Tuition Fee Payment", "Generate Receipt", "Refund Policy"]
    },
    "scholarships": {
        title: "Scholarships & Financial Aid",
        subtitle: "Merit recognized and potential supported at Maharaja Surajmal Institute of Technology.",
        seo_description: "Explore scholarship opportunities at Maharaja Surajmal Institute of Technology. We offer merit-based and financial aid schemes to support deserving students.",
        category: "Admissions",
        heroImage: "/campus-hero.webp",
        heroImageAlt: "MSIT students receiving merit scholarships and financial aid certificates on stage",
        content: `
            <p class="mb-8 leading-relaxed">Maharaja Surajmal Institute of Technology actively supports students by facilitating access to diverse institutional, state, and central scholarship programs. Deserving students can avail themselves of financial support based on merit, economic status, or category requirements.</p>

            <!-- SECTION 1: DELHI GOVERNMENT SCHEMES -->
            <div class="space-y-6 mb-12">
                <h3 class="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <span class="w-1.5 h-5 bg-primary rounded-full"></span>
                    Delhi State Government Schemes
                </h3>
                
                <div class="grid grid-cols-1 gap-6">
                    <!-- Scheme 1: Merit-cum-Means -->
                    <div class="p-6 bg-slate-50/50 rounded-3xl border border-slate-200/50 hover:bg-white hover:shadow-md transition-all">
                        <div class="flex flex-col md:flex-row md:items-start justify-between gap-4">
                            <div class="space-y-2">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700">Delhi Govt (GNCTD)</span>
                                <h4 class="text-lg font-bold text-slate-900">Merit-cum-Means Linked Financial Assistance Scheme</h4>
                                <p class="text-sm text-slate-600 leading-relaxed font-light">Extends crucial financial support to meritorious and needy students pursuing higher education in NCT Delhi. Under this scheme, the Delhi Higher Education Trust through the Directorate of Higher Education (DHE) reimburses full or partial tuition fees based on family income criteria.</p>
                            </div>
                            <div class="flex flex-row md:flex-col gap-2 shrink-0">
                                <a href="http://www.ipu.ac.in/dsw_policy.php" target="_blank" rel="noopener noreferrer" class="px-4 py-2 text-xs font-bold text-center text-primary bg-blue-50 hover:bg-primary hover:text-white rounded-xl transition-all border border-primary/20">View Guidelines</a>
                                <a href="https://edistrict.delhigovt.nic.in/" target="_blank" rel="noopener noreferrer" class="px-4 py-2 text-xs font-bold text-center text-white bg-primary hover:bg-primary-dark rounded-xl transition-all shadow-xs">Apply Online</a>
                            </div>
                        </div>
                    </div>

                    <!-- Scheme 2: Post Matric SC/ST/OBC -->
                    <div class="p-6 bg-slate-50/50 rounded-3xl border border-slate-200/50 hover:bg-white hover:shadow-md transition-all">
                        <div class="flex flex-col md:flex-row md:items-start justify-between gap-4">
                            <div class="space-y-2">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">Welfare Department</span>
                                <h4 class="text-lg font-bold text-slate-900">Post Matric Scholarship for SC/ST/OBC Students</h4>
                                <p class="text-sm text-slate-600 leading-relaxed font-light">A centrally sponsored scheme implemented by the Department for the Welfare of SC/ST/OBC. It provides financial assistance to students belonging to reserved categories for pursuing post-matriculation or post-secondary studies (college/university levels) in India.</p>
                            </div>
                            <div class="flex shrink-0">
                                <a href="http://www.scstwelfare.delhigovt.nic.in/" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-4 py-2 text-xs font-bold text-center text-primary bg-emerald-50 hover:bg-primary hover:text-white rounded-xl transition-all border border-primary/20">Official Portal</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- SECTION 2: UNIVERSITY LEVEL SCHEMES -->
            <div class="space-y-6 mb-12">
                <h3 class="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <span class="w-1.5 h-5 bg-primary rounded-full"></span>
                    GGSIP University Schemes
                </h3>
                
                <div class="p-6 bg-slate-50/50 rounded-3xl border border-slate-200/50 hover:bg-white hover:shadow-md transition-all">
                    <div class="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div class="space-y-2">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-700">GGSIPU DSW</span>
                            <h4 class="text-lg font-bold text-slate-900">Economically Weaker Section (EWS) Scheme</h4>
                            <p class="text-sm text-slate-600 leading-relaxed font-light">Guru Gobind Singh Indraprastha University grants financial assistance to students belonging to the Economically Weaker Sections of society. The scheme aims to enhance institutional access and support students facing severe economic hardships during their studies.</p>
                        </div>
                        <div class="flex shrink-0">
                            <a href="http://www.ipu.ac.in/dsw_policy.php" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-4 py-2 text-xs font-bold text-center text-primary bg-purple-50 hover:bg-primary hover:text-white rounded-xl transition-all border border-primary/20">DSW Schemes</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- SECTION 3: NATIONAL & AICTE SCHEMES -->
            <div class="space-y-6 mb-12">
                <h3 class="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <span class="w-1.5 h-5 bg-primary rounded-full"></span>
                    National & AICTE Technical Schemes
                </h3>
                
                <div class="grid grid-cols-1 gap-6">
                    <!-- Scheme 1: Pragati -->
                    <div class="p-6 bg-slate-50/50 rounded-3xl border border-slate-200/50 hover:bg-white hover:shadow-md transition-all">
                        <div class="flex flex-col md:flex-row md:items-start justify-between gap-4">
                            <div class="space-y-2">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-pink-50 text-pink-700">AICTE MHRD</span>
                                <h4 class="text-lg font-bold text-slate-900">Pragati Scholarship Scheme for Girl Students</h4>
                                <p class="text-sm text-slate-600 leading-relaxed font-light">A prestigious initiative implemented by AICTE on behalf of the Ministry of Education. It aims to empower girls with the knowledge, skills, and self-confidence needed to pursue technical careers by providing financial aid for technical and professional programs.</p>
                            </div>
                            <div class="flex shrink-0">
                                <a href="https://scholarships.gov.in" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-4 py-2 text-xs font-bold text-center text-primary bg-pink-50 hover:bg-primary hover:text-white rounded-xl transition-all border border-primary/20">Apply on NSP</a>
                            </div>
                        </div>
                    </div>

                    <!-- Scheme 2: Saksham -->
                    <div class="p-6 bg-slate-50/50 rounded-3xl border border-slate-200/50 hover:bg-white hover:shadow-md transition-all">
                        <div class="flex flex-col md:flex-row md:items-start justify-between gap-4">
                            <div class="space-y-2">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700">AICTE MHRD</span>
                                <h4 class="text-lg font-bold text-slate-900">Saksham Scholarship Scheme for Specially Abled Students</h4>
                                <p class="text-sm text-slate-600 leading-relaxed font-light">Designed by the Ministry of Education and implemented by AICTE, this program encourages and supports specially-abled children to pursue higher technical education, ensuring they get equal learning opportunities and prep for a successful future.</p>
                            </div>
                            <div class="flex shrink-0">
                                <a href="https://scholarships.gov.in" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-4 py-2 text-xs font-bold text-center text-primary bg-indigo-50 hover:bg-primary hover:text-white rounded-xl transition-all border border-primary/20">Apply on NSP</a>
                            </div>
                        </div>
                    </div>

                    <!-- Scheme 3: NSP Central -->
                    <div class="p-6 bg-slate-50/50 rounded-3xl border border-slate-200/50 hover:bg-white hover:shadow-md transition-all">
                        <div class="flex flex-col md:flex-row md:items-start justify-between gap-4">
                            <div class="space-y-2">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">Central Government</span>
                                <h4 class="text-lg font-bold text-slate-900">Centrally Sponsored Schemes (National Scholarship Portal)</h4>
                                <p class="text-sm text-slate-600 leading-relaxed font-light">A unified national portal acting as a single-window solution for central government scholarships. Enables everything from application submission, verification, processing, and direct benefit transfer (DBT) of funds to students.</p>
                            </div>
                            <div class="flex shrink-0">
                                <a href="https://scholarships.gov.in/" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-4 py-2 text-xs font-bold text-center text-white bg-primary hover:bg-primary-dark rounded-xl transition-all shadow-xs">National Portal</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- SECTION 4: DOCUMENT DOWNLOADS -->
            <div class="mt-8 p-6 bg-blue-50/20 border border-blue-100 rounded-3xl">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h4 class="text-base font-bold text-slate-900 font-sans">Official Scholarship Notice</h4>
                        <p class="text-xs text-slate-500 font-light mt-1">Download the official reference PDF issued by the MSIT scholarship and aid department.</p>
                    </div>
                    <a href="https://msit.in/media/navigations/scholarships.pdf" download target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-white bg-primary hover:bg-primary-dark rounded-xl transition-all shadow-xs gap-2 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Official PDF
                    </a>
                </div>
            </div>
        `,
        stats: [
            { label: "Annual Dispersal", value: "₹2.5 Cr+" },
            { label: "Beneficiaries", value: "400+" }
        ],
        bulletPoints: ["Merit Scholarships", "EWS Financial Aid", "Government Schemes (NSP)"]
    },
    "mandatory-disclosures": {
        title: "Mandatory Disclosures",
        subtitle: "Commitment to absolute transparency at Maharaja Surajmal Institute of Technology.",
        seo_description: "View the official mandatory disclosures of Maharaja Surajmal Institute of Technology. Access AICTE approval, NBA accreditation, and audit reports for MSIT.",
        category: "Admissions",
        heroImage: "/campus-hero.webp",
        heroImageAlt: "Official AICTE and NBA mandatory disclosure documents for MSIT institutional transparency",
        content: `
            <p class="mb-6 leading-relaxed">In absolute compliance with the All India Council for Technical Education (AICTE), the University Grants Commission (UGC), and GGSIPU, MSIT publishes its mandatory disclosures for public review.</p>
            
            <!-- ACCREDITATION TABLES/CARDS -->
            <div class="space-y-8 mt-8">
                <!-- NBA CARD -->
                <div class="p-6 md:p-8 rounded-3xl border border-slate-200/60 bg-linear-to-br from-slate-50/50 via-white to-white shadow-xs">
                    <h3 class="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <span class="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                        NBA Accreditation Status
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                        <div class="space-y-1">
                            <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Programmes/Courses Accredited</span>
                            <p class="text-slate-800 font-medium">CSE, IT, ECE, EEE (All eligible UG programmes)</p>
                        </div>
                        <div class="space-y-1">
                            <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</span>
                            <p class="text-slate-800 font-medium">Accredited</p>
                        </div>
                        <div class="space-y-1">
                            <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Applied for Accreditation</span>
                            <p class="text-slate-800 font-medium">None (All eligible programmes are fully accredited)</p>
                        </div>
                        <div class="space-y-1">
                            <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Programmes Not Applied</span>
                            <p class="text-slate-800 font-medium">None</p>
                        </div>
                    </div>
                    <div class="mt-6 pt-6 border-t border-slate-100 flex">
                        <a href="https://www.msit.in/media/uploads/2025/08/27/nba_2023_all_depts_merged.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white rounded-xl text-xs font-bold transition-all border border-blue-100/50 shadow-xs hover:shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            View NBA Certificates (PDF)
                        </a>
                    </div>
                </div>

                <!-- NAAC CARD -->
                <div class="p-6 md:p-8 rounded-3xl border border-slate-200/60 bg-linear-to-br from-slate-50/50 via-white to-white shadow-xs">
                    <h3 class="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                        NAAC Accreditation Status
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                        <div class="space-y-1">
                            <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Accreditation Grade</span>
                            <p class="text-slate-800 font-medium">'A' Grade Status</p>
                        </div>
                        <div class="space-y-1">
                            <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Effective Date</span>
                            <p class="text-slate-800 font-medium">September 21, 2022</p>
                        </div>
                    </div>
                    <div class="mt-6 pt-6 border-t border-slate-100 flex">
                        <a href="https://www.msit.in/media/2022/12/23/naac.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white rounded-xl text-xs font-bold transition-all border border-emerald-100/50 shadow-xs hover:shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            View NAAC Certificate (PDF)
                        </a>
                    </div>
                </div>

                <!-- FULL DISCLOSURE CARD -->
                <div class="p-8 rounded-3xl border border-slate-200/60 bg-slate-900 text-white shadow-card relative overflow-hidden group">
                    <div class="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>
                    <h3 class="text-xl font-bold mb-3">Full Mandatory Disclosure</h3>
                    <p class="text-slate-300 text-sm mb-6 leading-relaxed">Download the complete, comprehensive Mandatory Disclosure document containing detailed institutional data, academic profiles, and audit reports.</p>
                    <a href="https://www.msit.in/media/notices/mandatory-disclosure_PSXfseX.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 hover:bg-primary hover:text-white rounded-xl text-xs font-bold transition-all shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Full Document (PDF)
                    </a>
                </div>
            </div>
        `,
        stats: [
            { label: "NAAC Grade", value: "A" },
            { label: "NBA Accredited", value: "All UG" }
        ],
        bulletPoints: ["NBA Certificates (All Depts)", "NAAC Grade A Document", "Full Disclosure PDF"]
    }
};
