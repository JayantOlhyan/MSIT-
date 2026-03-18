import React from 'react';
import { Clock, BookOpen, Layers } from 'lucide-react';
import SEO from '../components/SEO';

const TimeTable = () => {
    return (
        <main className="min-h-screen bg-slate-50 py-16">
            <SEO 
                title="Time Table" 
                description="Check the daily class and laboratory schedules for all engineering branches at Maharaja Surajmal Institute of Technology." 
                canonicalPath="/timetable"
            />
            <div className="max-w-6xl mx-auto px-6">

                {/* Header Section */}
                <div className="text-center mb-16 animate-fade-in shadow-sm bg-white border border-slate-200 p-12 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                    <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-6">
                        <Clock className="w-10 h-10 text-blue-600" />
                    </div>
                    <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-3 block">Daily Schedules</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Time Table</h1>
                    <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
                        View and download the latest department-wise class and laboratory schedules for the current academic semester.
                    </p>
                </div>

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
