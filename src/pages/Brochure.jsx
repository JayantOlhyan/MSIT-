import { BookMarked, Download, CalendarDays, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const Brochure = () => {
    const brochures = [
        { year: "2024 - 2025", link: "https://www.msit.in/media/2024/07/18/msit-information-bulletin-2024-25.pdf", highlight: true },
        { year: "2023 - 2024", link: "https://www.msit.in/media/2023/08/22/information-bulletin2023-updated.pdf", highlight: false },
        { year: "2022 - 2023", link: "https://www.msit.in/media/2023/05/05/information-bulletin-2022-nba.pdf", highlight: false },
        { year: "2021 - 2022", link: "https://www.msit.in/media/2023/05/05/information-bulletin-2021-nba.pdf", highlight: false },
        { year: "2020 - 2021", link: "https://www.msit.in/media/2023/05/05/information-bulletin-2020-final-nba.pdf", highlight: false }
    ];

    return (
        <main className="min-h-screen bg-white">
            <SEO 
                title="Information Brochure" 
                description="Download the official MSIT admission brochure for the 2026-27 session. Get detailed information on courses, infrastructure, and Maharaja Surajmal Institute." 
                canonicalPath="/brochure"
            />
            <PageHero 
                title="Information" 
                accentTitle="Bulletins & Brochure" 
                description="Download the official MSIT Information Brochures to explore our academic programs, faculty details, and guidelines."
                breadcrumbs={[{ label: 'MSIT' }, { label: 'Brochure' }]}
            />
            <div className="max-w-4xl mx-auto px-6 py-12">

                {/* Brochure List */}
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                    <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                        <h2 className="font-heading font-bold text-slate-800 flex items-center">
                            <CalendarDays className="w-5 h-5 mr-2 text-slate-400" />
                            Archived Publications
                        </h2>
                    </div>

                    <div className="divide-y divide-slate-100">
                        {brochures.map((brochure, index) => (
                            <div key={index} className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between hover:bg-slate-50 transition-colors group">
                                <div className="mb-4 sm:mb-0">
                                    <div className="flex items-center gap-3">
                                        <h3 className="font-heading text-2xl font-bold text-slate-800">
                                            {brochure.year}
                                        </h3>
                                        {brochure.highlight && (
                                            <span className="font-heading px-2.5 py-1 bg-blue-100 text-blue-700 text-[10px] font-semibold uppercase tracking-widest rounded-full">
                                                Current
                                            </span>
                                        )}
                                    </div>
                                    <p className="font-body text-slate-500 mt-1 text-sm">Official Prospectus & Information Bulletin</p>
                                </div>
                                <a
                                    href={brochure.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`font-heading px-6 py-3 rounded-lg font-semibold flex items-center transition-all ${brochure.highlight
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
