import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6 py-24">
            <div className="max-w-xl w-full text-center">
                <div className="mb-8">
                    <span className="text-9xl font-black text-slate-100 select-none">404</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 -mt-16 md:-mt-20">Page Not Found</h1>
                </div>
                
                <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                    Oops! It seems the page you are looking for has been moved, deleted, or doesn't exist. Let's get you back on track.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link 
                        to="/" 
                        className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold shadow-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                    >
                        <Home className="w-5 h-5" />
                        Back to Home
                    </Link>
                    <button 
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border-2 border-slate-100 rounded-xl font-semibold hover:border-slate-200 transition-all flex items-center justify-center gap-2"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </button>
                </div>

                <div className="mt-16 pt-12 border-t border-slate-100">
                    <p className="text-slate-500 text-sm mb-6 uppercase tracking-widest font-bold">Try searching instead</p>
                    <form 
                        action="/search" 
                        method="GET"
                        className="relative max-w-md mx-auto"
                    >
                        <input
                            type="search"
                            name="q"
                            placeholder="Type to search..."
                            className="w-full pl-12 pr-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-slate-900/5 transition-all text-slate-900 placeholder:text-slate-400"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
