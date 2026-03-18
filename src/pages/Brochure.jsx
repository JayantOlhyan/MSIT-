import { BookMarked, Download, CalendarDays, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const Brochure = () => {
    const brochures = [
        { year: "2024 - 2025", link: "https://www.msit.in/media/2024/07/18/msit-information-bulletin-2024-25.pdf", highlight: true },
        { year: "2023 - 2024", link: "https://www.msit.in/media/2023/08/22/information-bulletin2023-updated.pdf", highlight: false },
        { year: "2022 - 2023", link: "https://www.msit.in/media/2023/05/05/information-bulletin-2022-nba.pdf", highlight: false },
        { year: "2021 - 2022", link: "https://www.msit.in/media/2023/05/05/information-bulletin-2021-nba.pdf", highlight: false },
        { year: "2020 - 2021", link: "https://www.msit.in/media/2023/05/05/information-bulletin-2020-final-nba.pdf", highlight: false }
    ];

    return (
        <main className="min-h-screen bg-slate-50 py-16">
            <SEO 
                title="Information Brochure" 
                description="Download the official MSIT admission brochure for the 2026-27 session. Get detailed information on courses, infrastructure, and Maharaja Surajmal Institute." 
                canonicalPath="/brochure"
            />
            <div className="max-w-4xl mx-auto px-6">
                {/* Breadcrumbs */}
                <div className="flex items-center text-sm font-medium text-slate-400 mb-8 animate-fade-in">
                    <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="text-slate-500">MSIT</span>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="text-blue-400">Brochure</span>
                </div>

                {/* Header */}
                <div className="text-center mb-16 bg-white border border-slate-200 p-12 rounded-3xl relative overflow-hidden shadow-sm">
                    <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
                    <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
                        <BookMarked className="w-10 h-10 text-blue-600" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Information Bulletins</h1>
                    <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
                        Download the official MSIT Information Brochures for Maharaja Surajmal Institute of Technology to explore our academic programs, faculty details, and guidelines.
                    </p>
                </div>

                {/* Brochure List */}
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                    <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                        <h2 className="font-bold text-slate-800 flex items-center">
                            <CalendarDays className="w-5 h-5 mr-2 text-slate-400" />
                            Archived Publications
                        </h2>
                    </div>

                    <div className="divide-y divide-slate-100">
                        {brochures.map((brochure, index) => (
                            <div key={index} className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between hover:bg-slate-50 transition-colors group">
                                <div className="mb-4 sm:mb-0">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-2xl font-bold text-slate-800">
                                            {brochure.year}
                                        </h3>
                                        {brochure.highlight && (
                                            <span className="px-2.5 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest rounded-full">
                                                Current
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-slate-500 mt-1 font-medium text-sm">Official Prospectus & Information Bulletin</p>
                                </div>
                                <a
                                    href={brochure.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`px-6 py-3 rounded-lg font-semibold flex items-center transition-all ${brochure.highlight
                                            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-600/20'
                                            : 'bg-white text-slate-700 border border-slate-300 hover:border-slate-400 hover:bg-slate-100'
                                        }`}
                                >
                                    <Download className={`w-4 h-4 mr-2 ${!brochure.highlight && 'text-slate-500'}`} />
                                    Download PDF
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Brochure;
