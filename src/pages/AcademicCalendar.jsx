import React from 'react';
import { Calendar, Download, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const AcademicCalendar = () => {
    const calendars = [
        { period: "January 2026 – June 2026", link: "https://www.msit.in/media/uploads/2026/01/23/academic-calendar-jan-june-2026.pdf", isNew: true },
        { period: "August 2025 – December 2025", link: "https://www.msit.in/media/uploads/2026/01/23/acd-cal-aug-dec-2025.pdf" },
        { period: "January 2025 – June 2025", link: "https://www.msit.in/media/2025/02/23/academic-calendar-msit-jan-june-2025.pdf" },
        { period: "August 2024 – December 2024", link: "https://www.msit.in/media/2024/09/13/academic-calender-aug-dec-2024.pdf" },
        { period: "January 2024 – June 2024", link: "https://www.msit.in/media/2024/02/26/academic-calender-2024.pdf" },
        { period: "August 2023 – December 2023", link: "https://www.msit.in/media/2024/09/13/academic-calender-aug-dec-2023.pdf" },
        { period: "September 2022 – July 2023", link: "https://www.msit.in/media/2024/02/26/academic-calendar-september-2022-july-2023.pdf" }
    ];

    return (
        <main className="min-h-screen bg-slate-50 py-16">
            <SEO 
                title="Academic Calendar" 
                description="Stay updated with the MSIT academic calendar. Find critical dates for semester starts, examinations, and holidays at Maharaja Surajmal Institute of Technology." 
                canonicalPath="/academic-calendar"
            />
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16 animate-fade-in shadow-sm bg-white border border-slate-200 p-12 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                    <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-6">
                        <Calendar className="w-10 h-10 text-blue-600" />
                    </div>
                    <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-3 block">Official Schedule</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Academic Calendar</h1>
                    <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
                        Stay up to date with the semester schedules, examination dates, holidays, and important academic events at Maharaja Surajmal Institute of Technology.
                    </p>
                </div>

                {/* Calendar List */}
                <div className="space-y-4">
                    {calendars.map((cal, index) => (
                        <a
                            key={index}
                            href={cal.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between group"
                        >
                            <div className="flex items-center mb-4 sm:mb-0">
                                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mr-5 group-hover:bg-blue-50 transition-colors shrink-0">
                                    <Clock className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                            {cal.period}
                                        </h3>
                                        {cal.isNew && (
                                            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider rounded border border-emerald-200">
                                                Latest
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-slate-500 font-medium">Official Schedule PDF Download</p>
                                </div>
                            </div>

                            <div className="sm:ml-4 w-full sm:w-auto">
                                <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto px-5 py-2.5 bg-slate-50 text-slate-700 font-semibold rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors border border-slate-200 group-hover:border-blue-600">
                                    <Download className="w-4 h-4 mr-2" />
                                    Download
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-12 p-6 bg-blue-50 border border-blue-100 rounded-xl text-center">
                    <p className="text-blue-800 text-sm">
                        <strong>Note:</strong> The academic calendar is subject to change based on guidelines from Guru Gobind Singh Indraprastha University (GGSIPU). Please check back regularly for updates.
                    </p>
                </div>

            </div>
        </main>
    );
};

export default AcademicCalendar;
