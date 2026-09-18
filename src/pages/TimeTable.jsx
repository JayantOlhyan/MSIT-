import { Clock, BookOpen, Layers } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const TimeTable = () => {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0a0f1d] transition-colors duration-300">
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
                <div className="bg-white dark:bg-[#131c31] rounded-xl p-8 lg:p-12 border border-slate-200 dark:border-white/10 shadow-card max-w-4xl mx-auto">

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 border-b border-slate-100 dark:border-white/10 pb-4 flex items-center">
                        <Layers className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" /> Current Semester Time Tables
                    </h2>

                    <div className="space-y-6">
                        {/* 1st Year Time Table */}
                        <a
                            href="https://www.msit.in/media/timetable/1st-yr-all-branches_7qgwxMa.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-xl border border-slate-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500/30 hover:shadow-card-hover transition-all duration-300 group bg-slate-50 dark:bg-[#18233c]"
                        >
                            <div className="flex items-center mb-4 sm:mb-0">
                                <div className="w-12 h-12 rounded-lg bg-white dark:bg-[#131c31] border border-slate-200 dark:border-white/10 flex items-center justify-center mr-5 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/40 group-hover:border-blue-200 dark:group-hover:border-blue-500/30 transition-colors">
                                    <BookOpen className="w-6 h-6 text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-slate-800 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">First Year (All Branches)</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">Foundational academic schedule for freshers.</p>
                                </div>
                            </div>
                            <div className="px-5 py-2.5 bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 font-semibold rounded-lg group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all text-sm w-full sm:w-auto text-center">
                                View PDF
                            </div>
                        </a>

                        {/* 2nd, 3rd, 4th Year Time Table */}
                        <a
                            href="https://www.msit.in/media/timetable/2nd3rd4th-yr-all-branches_nZtdWCc.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-xl border border-slate-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500/30 hover:shadow-card-hover transition-all duration-300 group bg-slate-50 dark:bg-[#18233c]"
                        >
                            <div className="flex items-center mb-4 sm:mb-0">
                                <div className="w-12 h-12 rounded-lg bg-white dark:bg-[#131c31] border border-slate-200 dark:border-white/10 flex items-center justify-center mr-5 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/40 group-hover:border-blue-200 dark:group-hover:border-blue-500/30 transition-colors">
                                    <Layers className="w-6 h-6 text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-slate-800 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">2nd, 3rd & 4th Year (All Branches)</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">Core departmental schedules (CSE, IT, ECE, EEE).</p>
                                </div>
                            </div>
                            <div className="px-5 py-2.5 bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 font-semibold rounded-lg group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all text-sm w-full sm:w-auto text-center">
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
