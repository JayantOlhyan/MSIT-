import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, GraduationCap, Briefcase, BookOpen } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-white to-slate-50">
            <SEO 
                title="404 Not Found" 
                description="The page you are looking for at Maharaja Surajmal Institute of Technology could not be found. Please return to our homepage or use the search bar to find info." 
            />
            <div className="max-w-3xl w-full text-center">
                {/* Visual Header */}
                <div className="relative mb-12">
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                        <span className="text-giant md:text-mega font-black">404</span>
                    </div>
                    <div className="relative z-10">
                        <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-slate-900 shadow-card shadow-slate-900/20 mb-8 transform hover:rotate-12 transition-transform duration-500">
                            <Search className="w-8 h-8 md:w-10 md:h-10 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold text-slate-900 tracking-tight">
                            Lost in <span className="text-slate-500 font-medium italic">space?</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-lg mx-auto leading-relaxed">
                            The page you're looking for at Maharaja Surajmal Institute of Technology seems to have vanished. Don't worry, we'll help you find your way back to campus.
                        </p>
                    </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                    <Link 
                        to="/" 
                        className="group w-full sm:w-auto px-10 py-4 md:py-5 bg-slate-900 text-white rounded-2xl font-bold shadow-card shadow-slate-900/10 hover:shadow-card-hover hover:shadow-slate-900/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                    >
                        <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Back to Home
                    </Link>
                    <button 
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto px-10 py-4 md:py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-bold hover:border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </button>
                </div>

                {/* Quick Navigation Guide */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    <Link to="/about" className="p-6 bg-white rounded-3xl border border-slate-100 hover:border-slate-900/10 hover:shadow-card-hover hover:shadow-slate-900/5 transition-all group">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-slate-900 transition-colors">
                            <BookOpen className="w-6 h-6 text-blue-600 group-hover:text-white" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-1 font-inter">About MSIT</h3>
                        <p className="text-sm text-slate-500">Learn about our history and values.</p>
                    </Link>
                    <Link to="/admissions" className="p-6 bg-white rounded-3xl border border-slate-100 hover:border-slate-900/10 hover:shadow-card-hover hover:shadow-slate-900/5 transition-all group">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-4 group-hover:bg-slate-900 transition-colors">
                            <GraduationCap className="w-6 h-6 text-emerald-600 group-hover:text-white" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-1 font-inter">Admissions</h3>
                        <p className="text-sm text-slate-500">Join MSIT's vibrant community.</p>
                    </Link>
                    <Link to="/placements" className="p-6 bg-white rounded-3xl border border-slate-100 hover:border-slate-900/10 hover:shadow-card-hover hover:shadow-slate-900/5 transition-all group">
                        <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center mb-4 group-hover:bg-slate-900 transition-colors">
                            <Briefcase className="w-6 h-6 text-purple-600 group-hover:text-white" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-1 font-inter">Careers</h3>
                        <p className="text-sm text-slate-500">Placement cell and opportunities.</p>
                    </Link>
                </div>

                <div className="mt-20 opacity-50">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                        Error Code: 404_PAGE_NOT_FOUND
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
