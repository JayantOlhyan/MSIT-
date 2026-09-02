import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
    Search, Sparkles, ArrowRight, ArrowUpRight, Filter, 
    Layers, Users, Trophy, Code2, Globe, GraduationCap, 
    Calendar, CheckCircle2, ChevronRight 
} from 'lucide-react';
import { allSocietiesList } from '../data/societiesData';

const SocietiesHubView = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        'All',
        'Technical',
        'Academic & Research',
        'Innovation & Incubation',
        'Cultural & Arts',
        'Social Responsibility'
    ];

    const filteredSocieties = useMemo(() => {
        return allSocietiesList.filter(society => {
            const matchesCat = selectedCategory === 'All' || society.category === selectedCategory;
            const matchesSearch = 
                society.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                society.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                society.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCat && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    const featuredSocieties = allSocietiesList.filter(s => s.featured);

    return (
        <div className="space-y-16">
            
            {/* HERO INTRODUCTION BANNER */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white relative overflow-hidden shadow-xl border border-slate-800">
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
                
                <div className="relative z-10 max-w-3xl space-y-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                        Campus Life & Innovation
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
                        Where Students Build, Lead, and Belong.
                    </h2>
                    <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                        Education at MSIT extends far beyond lecture halls. Our 20+ student-led societies provide a dynamic platform for innovation, hackathons, robotics, performing arts, and national research.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                            <span>22+ Active Societies</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                            <span>50,000+ Community Reach</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                            <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                            <span>100+ Annual Events</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* FEATURED SPOTLIGHT SECTION */}
            <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <h3 className="text-base font-black uppercase tracking-wider text-slate-900 flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-purple-600" />
                        <span>Flagship Chapters & Spotlight</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featuredSocieties.map((society) => (
                        <div 
                            key={society.id}
                            className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-purple-300 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className={`w-14 h-14 rounded-2xl text-xl flex items-center justify-center overflow-hidden ${society.logo ? 'bg-transparent' : 'bg-slate-900 text-white font-mono font-bold border border-slate-800 shadow-md'}`}>
                                        {society.logo ? (
                                            <img src={society.logo} alt={`${society.name} Logo`} className="w-full h-full object-contain" />
                                        ) : (
                                            society.logoSymbol
                                        )}
                                    </div>
                                    <span className="px-3 py-1 bg-purple-50 text-purple-700 font-bold rounded-full text-xs border border-purple-100 uppercase tracking-wider">
                                        {society.category}
                                    </span>
                                </div>

                                <div>
                                    <h4 className="text-xl font-black text-slate-900 group-hover:text-purple-600 transition-colors">
                                        {society.name}
                                    </h4>
                                    <p className="text-xs font-semibold text-purple-600 mb-2">
                                        {society.tagline}
                                    </p>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                                        {society.description}
                                    </p>
                                </div>
                            </div>

                            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                                <div className="text-xs text-slate-500 font-medium">
                                    Est. <strong className="text-slate-800 font-bold">{society.established}</strong> · {society.members}
                                </div>
                                <Link 
                                    to={society.link}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 group-hover:bg-purple-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                                >
                                    <span>Explore Chapter</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* SEARCH & FILTER CONTROLS */}
            <div className="space-y-6 pt-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    
                    {/* Search Input */}
                    <div className="relative w-full md:w-96">
                        <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input
                            type="text"
                            placeholder="Search societies by name, tech or skill..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:border-purple-500 shadow-sm transition-all"
                        />
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                                    selectedCategory === cat
                                        ? 'bg-purple-600 text-white shadow-md'
                                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                </div>

                {/* SOCIETIES DIRECTORY CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSocieties.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-purple-300 shadow-sm hover:shadow-card transition-all flex flex-col justify-between group"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors overflow-hidden ${item.logo ? 'bg-transparent' : 'bg-slate-100 text-slate-800 font-mono font-black text-sm border border-slate-200 group-hover:bg-purple-600 group-hover:text-white'}`}>
                                        {item.logo ? (
                                            <img src={item.logo} alt={item.name} className="w-full h-full object-contain" />
                                        ) : (
                                            item.logoSymbol
                                        )}
                                    </div>
                                    <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded-md">
                                        {item.category}
                                    </span>
                                </div>

                                <div>
                                    <h4 className="text-base font-black text-slate-900 group-hover:text-purple-600 transition-colors">
                                        {item.name}
                                    </h4>
                                    <div className="text-xs text-purple-600 font-medium mb-2">
                                        {item.tagline}
                                    </div>
                                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-light">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                                <span className="text-[11px] text-slate-400 font-medium">
                                    Est. {item.established}
                                </span>
                                <Link
                                    to={item.link}
                                    className="text-xs font-bold text-purple-600 hover:text-purple-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                                >
                                    <span>Learn More</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredSocieties.length === 0 && (
                    <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
                        <p className="text-sm text-slate-500 font-light">
                            No societies found matching "{searchQuery}" in category "{selectedCategory}".
                        </p>
                        <button
                            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-xl text-xs font-bold cursor-pointer hover:bg-purple-500 transition-colors"
                        >
                            Reset Filters
                        </button>
                    </div>
                )}
            </div>

            {/* HOW TO START OR JOIN A SOCIETY BANNER */}
            <div className="p-8 rounded-3xl bg-slate-100 border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2 space-y-2">
                    <h4 className="text-lg font-black text-slate-900">
                        Want to start a new student club or initiative?
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                        Students with unique technical ideas or community initiatives can submit proposals to the MSIT Student Welfare Committee and Faculty Board.
                    </p>
                </div>
                <div className="text-left md:text-right">
                    <a
                        href="https://wds-bug-hunt.netlify.app/bug-hunt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
                    >
                        <span>Contact Coordinator</span>
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>

        </div>
    );
};

export default SocietiesHubView;
