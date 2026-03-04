import React from 'react';
import { Clock, BookOpen, Layers } from 'lucide-react';

const TimeTable = () => {
    return (
        <main className="min-h-screen bg-slate-50 py-16">
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
                <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm">

                    <div className="inline-flex items-center justify-center w-24 h-24 bg-slate-50 border border-slate-100 rounded-full mb-8 shadow-inner">
                        <Layers className="w-10 h-10 text-slate-400" />
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Awaiting Schedule Updates</h2>
                    <p className="text-slate-500 max-w-lg mx-auto leading-relaxed mb-8">
                        The current semester's official time tables are currently being compiled by the respective departments. Once finalized, the PDF links for each branch and section will be published here.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto opacity-60">
                        {['CSE', 'IT', 'ECE', 'EEE'].map(dept => (
                            <div key={dept} className="p-4 border border-slate-200 rounded-xl bg-slate-50 flex items-center justify-center gap-2">
                                <BookOpen className="w-4 h-4 text-slate-400" />
                                <span className="font-semibold text-slate-600">{dept}</span>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </main>
    );
};

export default TimeTable;
