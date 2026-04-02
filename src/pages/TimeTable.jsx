import { Clock, BookOpen, Layers } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const TimeTable = () => {
    return (
        <main className="min-h-screen bg-white">
            <SEO 
                title="Time Table" 
                description="View and download current semester class schedules and lab timetables for all departments at Maharaja Surajmal Institute of Technology. Stay organized." 
                canonicalPath="/timetable"
            />
            <PageHero 
                title="Academic" 
                accentTitle="Time Table" 
                description="View and download the latest department-wise class and laboratory schedules for the current academic semester at MSIT."
                breadcrumbs={[{ label: 'Academics' }, { label: 'Time Table' }]}
            />

            <div className="max-w-6xl mx-auto px-6 py-12">

                {/* Main Content Area */}
                <div className="bg-white rounded-xl p-8 lg:p-12 border border-slate-200 shadow-sm max-w-4xl mx-auto">

                    <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4 flex items-center">
                        <Layers className="w-6 h-6 mr-3 text-blue-600" /> Current Semester Time Tables
                    </h2>

                    <div className="space-y-6">
                        {/* 1st Year Time Table */}
                        <a
                            href="https://www.msit.in/media/timetable/1st-yr-all-branches_7qgwxMa.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 group bg-slate-50"
                        >
                            <div className="flex items-center mb-4 sm:mb-0">
                                <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center mr-5 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                                    <BookOpen className="w-6 h-6 text-slate-500 group-hover:text-blue-600 transition-colors" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-slate-800 group-hover:text-blue-700 transition-colors">First Year (All Branches)</h3>
                                    <p className="text-sm text-slate-500 font-medium mt-1">Foundational academic schedule for freshers.</p>
                                </div>
                            </div>
                            <div className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 font-semibold rounded-lg group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all text-sm w-full sm:w-auto text-center">
                                View PDF
                            </div>
                        </a>

                        {/* 2nd, 3rd, 4th Year Time Table */}
                        <a
                            href="https://www.msit.in/media/timetable/2nd3rd4th-yr-all-branches_nZtdWCc.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 group bg-slate-50"
                        >
                            <div className="flex items-center mb-4 sm:mb-0">
                                <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center mr-5 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                                    <Layers className="w-6 h-6 text-slate-500 group-hover:text-blue-600 transition-colors" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-slate-800 group-hover:text-blue-700 transition-colors">2nd, 3rd & 4th Year (All Branches)</h3>
                                    <p className="text-sm text-slate-500 font-medium mt-1">Core departmental schedules (CSE, IT, ECE, EEE).</p>
                                </div>
                            </div>
                            <div className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 font-semibold rounded-lg group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all text-sm w-full sm:w-auto text-center">
                                View PDF
                            </div>
                        </a>
                    </div>

                </div>

            </div>
        </main>
    );
};

export default TimeTable;
