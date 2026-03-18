import React from 'react';
import { Download, FileText, TrendingUp, Building2, Users } from 'lucide-react';
import SEO from '../components/SEO';

const Placements = () => {
    // ... rest of component
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
        "Google", "Amazon", "Microsoft", "TCS", "Infosys", "Wipro", "Accenture",
        "HCL", "Cognizant", "IBM", "Tech Mahindra", "Capgemini"
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            <SEO 
                title="Placements & Careers" 
                description="Discover the stellar placement records of MSIT. With a 95%+ placement rate and top recruiters like Google, Amazon, and Microsoft, MSIT launches global engineering careers." 
                canonicalPath="/placements"
            />
            {/* Extended Hero Header */}
            <div className="bg-slate-900 py-24 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-slate-900/50 mix-blend-multiply"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <span className="text-emerald-400 font-bold tracking-widest text-sm uppercase mb-4 block">Careers & Placements</span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Launching Global Careers</h1>
                    <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
                        Maharaja Surajmal Institute of Technology (MSIT) has a legacy of producing industry-ready engineers. Explore our decade-long track record of stellar placements across top tech titans.
                    </p>
                </div>
            </div>

            {/* Quick Stats Banner */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                        <div className="flex flex-col items-center text-center p-4">
                            <TrendingUp className="w-10 h-10 text-blue-600 mb-4" />
                            <div className="text-4xl font-bold text-slate-900 mb-2">95%+</div>
                            <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">Placement Rate</div>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <Building2 className="w-10 h-10 text-blue-600 mb-4" />
                            <div className="text-4xl font-bold text-slate-900 mb-2">250+</div>
                            <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">Recruiting Companies</div>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <Users className="w-10 h-10 text-blue-600 mb-4" />
                            <div className="text-4xl font-bold text-slate-900 mb-2">₹1.2Cr</div>
                            <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">Highest Package Offered</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">

                {/* PDF Records Section */}
                <div className="flex-grow">
                    <div className="flex items-center mb-8 pb-4 border-b border-slate-200">
                        <FileText className="w-8 h-8 text-blue-600 mr-4" />
                        <h2 className="text-3xl font-bold text-slate-900">Official Placement Records</h2>
                    </div>
                    <p className="text-slate-600 mb-8 font-light text-lg">
                        Transparency is our core value. View our detailed, year-wise historical placement data containing company lists, packages, and student achievements.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {placementRecords.map((record, index) => (
                            <a
                                key={index}
                                href={record.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
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

                {/* Top Recruiters Sidebar */}
                <div className="lg:w-80 shrink-0">
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sticky top-32">
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
                                    {company}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">Training & Placement Cell</h4>
                            <p className="text-sm text-slate-500 mb-4">
                                The T&P cell actively bridges the gap between academia and industry.
                            </p>
                            <a href="mailto:placements@msit.in" className="text-sm font-semibold text-blue-600 hover:underline">
                                Contact Placement Cell &rarr;
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Placements;
