import React, { useState, useMemo } from 'react';
import SEO from '../components/SEO';
import { 
    Beaker, Book, Home, Trophy, Activity, Server, Cpu, Database, 
    BookOpen, ArrowRight, Search, Camera, CheckCircle2, AlertTriangle, 
    ExternalLink, X, ChevronLeft, ChevronRight, Sparkles, Filter, 
    Wrench, ShieldCheck, Layers, FileText, Check, Phone
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { departments, labData, itMous, campusInfrastructure, auditNotes } from '../data/facilitiesData';

const Facilities = () => {
    const [activeMainTab, setActiveMainTab] = useState('labs'); // 'labs' | 'library' | 'mous' | 'audit'
    const [selectedDept, setSelectedDept] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [mouFilter, setMouFilter] = useState('all'); // 'all' | 'Active' | 'Pending Renewal'
    const [selectedLabModal, setSelectedLabModal] = useState(null);
    const [modalImageIndex, setModalImageIndex] = useState(0);

    // Filter labs based on department and search query
    const filteredLabs = useMemo(() => {
        return labData.filter((lab) => {
            const matchesDept = selectedDept === 'all' || lab.deptKey === selectedDept;
            const query = searchQuery.toLowerCase().trim();
            if (!query) return matchesDept;

            const matchesQuery = 
                lab.labNo.toLowerCase().includes(query) ||
                lab.name.toLowerCase().includes(query) ||
                lab.dept.toLowerCase().includes(query) ||
                lab.description.toLowerCase().includes(query) ||
                (lab.systemConfig.desktop && lab.systemConfig.desktop.toLowerCase().includes(query)) ||
                (lab.systemConfig.server && lab.systemConfig.server.toLowerCase().includes(query)) ||
                lab.software.some(s => s.toLowerCase().includes(query)) ||
                lab.subjects.some(sub => sub.name.toLowerCase().includes(query) || sub.code.toLowerCase().includes(query)) ||
                (lab.hardwareKits && lab.hardwareKits.some(h => h.toLowerCase().includes(query)));

            return matchesDept && matchesQuery;
        });
    }, [selectedDept, searchQuery]);

    // Filter IT MOUs
    const filteredMous = useMemo(() => {
        return itMous.filter((mou) => {
            const matchesFilter = mouFilter === 'all' || mou.status === mouFilter;
            const query = searchQuery.toLowerCase().trim();
            if (!query) return matchesFilter;

            return matchesFilter && (
                mou.partner.toLowerCase().includes(query) ||
                mou.domain.toLowerCase().includes(query)
            );
        });
    }, [mouFilter, searchQuery]);

    const openLabModal = (lab) => {
        setSelectedLabModal(lab);
        setModalImageIndex(0);
    };

    const closeLabModal = () => {
        setSelectedLabModal(null);
    };

    return (
        <main className="min-h-screen bg-slate-50/50">
            <SEO 
                title="Campus Facilities & Academic Laboratories" 
                description="Explore MSIT's 33+ state-of-the-art academic laboratories across CSE, IT, ECE, EEE, Central Library with Koha OPAC, hostels, and industry MOUs."
                canonicalPath="/facilities"
            />

            <PageHero 
                title="State-of-the-Art" 
                accentTitle="Campus Facilities & Labs" 
                description="Explore MSIT's 33+ specialized laboratories, high-performance computing clusters, IoT R&D centers, central library, and student infrastructure."
                breadcrumbs={[{ label: 'Facilities' }]}
                heroImage="/campus/campus-pathway-block.webp"
                heroImageAlt="MSIT Academic Block and High-Tech Computing Facilities"
            />

            {/* Primary Tab Bar */}
            <div className="border-b border-slate-200 sticky top-[68px] xl:top-[128px] bg-white/95 backdrop-blur-md z-30 shadow-xs">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex gap-2 sm:gap-6 py-3 overflow-x-auto scrollbar-none">
                        <button
                            onClick={() => setActiveMainTab('labs')}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                                activeMainTab === 'labs' 
                                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                            }`}
                        >
                            <Beaker className="w-4 h-4" />
                            Laboratories ({labData.length})
                        </button>

                        <button
                            onClick={() => setActiveMainTab('library')}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                                activeMainTab === 'library' 
                                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                            }`}
                        >
                            <Book className="w-4 h-4" />
                            Library & Campus
                        </button>

                        <button
                            onClick={() => setActiveMainTab('mous')}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                                activeMainTab === 'mous' 
                                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                            }`}
                        >
                            <ShieldCheck className="w-4 h-4" />
                            IT MOUs & Collaborations ({itMous.length})
                        </button>

                        <button
                            onClick={() => setActiveMainTab('audit')}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                                activeMainTab === 'audit' 
                                    ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20' 
                                    : 'text-amber-700 hover:bg-amber-50'
                            }`}
                        >
                            <AlertTriangle className="w-4 h-4" />
                            Migration & Photo Audit
                        </button>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

                {/* =================================================== */}
                {/* TAB 1: LABORATORIES                                */}
                {/* =================================================== */}
                {activeMainTab === 'labs' && (
                    <div className="space-y-8 animate-fade-in">
                        {/* Search and Department Filter Toolbar */}
                        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                {/* Search Bar */}
                                <div className="relative flex-1">
                                    <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                                    <input 
                                        type="text" 
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search by Lab #, Subject (CIC-355), Software (MATLAB), CPU (i7-13700)..."
                                        className="w-full pl-11 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
                                    />
                                    {searchQuery && (
                                        <button 
                                            onClick={() => setSearchQuery('')}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>

                                {/* Results Count */}
                                <div className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 shrink-0">
                                    <Layers className="w-4 h-4 text-blue-600" />
                                    Showing <span className="text-slate-900 font-bold">{filteredLabs.length}</span> of {labData.length} Labs
                                </div>
                            </div>

                            {/* Department Filter Pills */}
                            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                                <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 mr-1">
                                    <Filter className="w-3.5 h-3.5" /> Dept:
                                </span>
                                {departments.map((dept) => {
                                    const count = dept.key === 'all' 
                                        ? labData.length 
                                        : labData.filter(l => l.deptKey === dept.key).length;

                                    return (
                                        <button
                                            key={dept.key}
                                            onClick={() => setSelectedDept(dept.key)}
                                            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                                                selectedDept === dept.key
                                                    ? 'bg-slate-900 text-white shadow-xs'
                                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                                            }`}
                                        >
                                            {dept.shortName}
                                            <span className={`px-1.5 py-0.2 text-[10px] rounded-full font-bold ${
                                                selectedDept === dept.key ? 'bg-slate-800 text-blue-300' : 'bg-slate-200 text-slate-600'
                                            }`}>
                                                {count}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Department Intro Banner (If specific department is selected) */}
                        {selectedDept !== 'all' && (
                            <div className="p-6 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 rounded-2xl text-white shadow-md relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">
                                        <Cpu className="w-4 h-4" />
                                        Department Profile
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold mb-3">
                                        {departments.find(d => d.key === selectedDept)?.name}
                                    </h3>
                                    <p className="text-slate-300 text-sm leading-relaxed max-w-4xl">
                                        {departments.find(d => d.key === selectedDept)?.intro}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Labs Grid */}
                        {filteredLabs.length === 0 ? (
                            <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 shadow-xs space-y-4">
                                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
                                    <Search className="w-8 h-8" />
                                </div>
                                <h4 className="text-lg font-bold text-slate-800">No laboratories match your query</h4>
                                <p className="text-slate-500 text-sm max-w-md mx-auto">
                                    Try searching for different keywords such as "Python", "MATLAB", "105", "DSO", or clear your search filters.
                                </p>
                                <button 
                                    onClick={() => { setSearchQuery(''); setSelectedDept('all'); }}
                                    className="px-4 py-2 bg-blue-600 text-white font-semibold text-xs rounded-xl hover:bg-blue-700 transition-all inline-flex items-center gap-2"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredLabs.map((lab) => (
                                    <div 
                                        key={lab.id} 
                                        className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
                                    >
                                        {/* Image Box */}
                                        <div className="relative h-48 bg-slate-900 overflow-hidden shrink-0">
                                            {lab.hasPhoto && lab.images.length > 0 ? (
                                                <img 
                                                    src={lab.images[0]} 
                                                    alt={`${lab.labNo} - ${lab.name}`}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.nextSibling.style.display = 'flex';
                                                    }}
                                                />
                                            ) : null}

                                            {/* Fallback image box if missing or broken */}
                                            <div 
                                                className={`w-full h-full bg-slate-900 flex flex-col items-center justify-center p-6 text-center text-slate-400 ${
                                                    lab.hasPhoto && lab.images.length > 0 ? 'hidden' : 'flex'
                                                }`}
                                            >
                                                <Camera className="w-8 h-8 mb-2 text-slate-600" />
                                                <span className="text-xs font-semibold text-slate-400">Photo Pending</span>
                                                <span className="text-[10px] text-slate-500">Official photo requested for {lab.labNo}</span>
                                            </div>

                                            {/* Overlay Badges */}
                                            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                                                <span className="px-2.5 py-1 bg-slate-900/90 backdrop-blur-md text-white font-mono text-xs font-bold rounded-lg shadow-xs border border-white/10">
                                                    {lab.labNo}
                                                </span>
                                                {lab.totalSystems && (
                                                    <span className="px-2.5 py-1 bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold rounded-lg shadow-xs">
                                                        {lab.totalSystems} PCs
                                                    </span>
                                                )}
                                                {lab.images.length > 1 && (
                                                    <span className="px-2.5 py-1 bg-indigo-600/90 backdrop-blur-md text-white text-xs font-bold rounded-lg shadow-xs flex items-center gap-1">
                                                        <Sparkles className="w-3 h-3" /> {lab.images.length} Photos
                                                    </span>
                                                )}
                                            </div>

                                            {/* Click to Expand Overlay */}
                                            <button 
                                                onClick={() => openLabModal(lab)}
                                                className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-xs gap-2 backdrop-blur-xs"
                                            >
                                                <span>View Full Specs & Gallery</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>

                                        {/* Card Body */}
                                        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                                            <div>
                                                <div className="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-1">
                                                    {lab.dept}
                                                </div>
                                                <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                                                    {lab.name}
                                                </h4>

                                                {/* Specs Preview */}
                                                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                                                    <strong className="text-slate-800">Hardware:</strong> {lab.systemConfig.desktop}
                                                </p>
                                            </div>

                                            {/* Software Chips */}
                                            <div className="space-y-2 pt-2 border-t border-slate-100">
                                                <div className="text-[11px] font-semibold text-slate-400">Software & Tools:</div>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {lab.software.map((sw, idx) => (
                                                        <span 
                                                            key={idx} 
                                                            className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] font-medium rounded-md border border-slate-200/60"
                                                        >
                                                            {sw}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Subjects Tags */}
                                            <div className="space-y-1.5">
                                                <div className="text-[11px] font-semibold text-slate-400">Subjects Taught:</div>
                                                <div className="flex flex-wrap gap-1">
                                                    {lab.subjects.map((sub, idx) => (
                                                        <span 
                                                            key={idx}
                                                            className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[11px] font-semibold rounded-md border border-blue-100"
                                                            title={sub.name}
                                                        >
                                                            <strong className="text-blue-900">{sub.code}:</strong> {sub.name}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Action Button */}
                                            <button
                                                onClick={() => openLabModal(lab)}
                                                className="w-full mt-2 py-2 px-3 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 group/btn"
                                            >
                                                <span>Lab Specifications & Details</span>
                                                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}


                {/* =================================================== */}
                {/* TAB 2: LIBRARY & CAMPUS INFRASTRUCTURE             */}
                {/* =================================================== */}
                {activeMainTab === 'library' && (
                    <div className="space-y-12 animate-fade-in">
                        {/* Central Library Feature */}
                        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-card grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
                                    <Book className="w-3.5 h-3.5" /> Academic Core
                                </div>
                                <h3 className="text-3xl font-extrabold text-slate-900 leading-tight">
                                    {campusInfrastructure.library.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed font-light text-base">
                                    {campusInfrastructure.library.description}
                                </p>

                                {/* Quick Stats Grid */}
                                <div className="grid grid-cols-2 gap-4 pt-2">
                                    <div className="p-4 bg-blue-50/80 rounded-2xl border border-blue-100">
                                        <div className="text-2xl font-black text-blue-900">{campusInfrastructure.library.books}</div>
                                        <div className="text-xs font-semibold text-blue-700">Printed Volumes & Reference Books</div>
                                    </div>
                                    <div className="p-4 bg-indigo-50/80 rounded-2xl border border-indigo-100">
                                        <div className="text-2xl font-black text-indigo-900">{campusInfrastructure.library.journals}</div>
                                        <div className="text-xs font-semibold text-indigo-700">National & Int'l Journals</div>
                                    </div>
                                </div>

                                {/* Features List */}
                                <ul className="space-y-2.5 text-sm text-slate-700">
                                    {campusInfrastructure.library.features.map((feat, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5">
                                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-2">
                                    <a 
                                        href={campusInfrastructure.library.opacUrl}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all"
                                    >
                                        <BookOpen className="w-4 h-4" />
                                        Launch Koha OPAC Online Library Portal
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                                    <img 
                                        src="/campus/central-library-hall.webp" 
                                        alt="MSIT Central Library Reading Hall" 
                                        className="w-full h-72 object-cover"
                                    />
                                </div>
                                <div className="p-4 bg-slate-900 text-white rounded-2xl text-xs leading-relaxed">
                                    <strong className="text-blue-400 block mb-1">Book Bank Scheme (Since 2006):</strong>
                                    Every enrolled MSIT student receives a complete set of textbooks for all registered courses per academic semester, free of additional loan charges.
                                </div>
                            </div>
                        </div>

                        {/* Campus Living & Sports Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Hostel */}
                            <div className="bg-slate-950 text-white rounded-3xl p-8 border border-slate-800 shadow-card flex flex-col justify-between space-y-6">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold mb-4">
                                        <Home className="w-3.5 h-3.5" /> Residential Life
                                    </div>
                                    <h4 className="text-2xl font-bold mb-3">{campusInfrastructure.hostel.title}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                        {campusInfrastructure.hostel.description}
                                    </p>
                                    <div className="grid grid-cols-2 gap-3 text-xs font-semibold mb-6">
                                        <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-blue-400">
                                            Boys Hostel: {campusInfrastructure.hostel.boysCapacity} Capacity
                                        </div>
                                        <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-pink-400">
                                            Girls Hostel: {campusInfrastructure.hostel.girlsCapacity} Capacity
                                        </div>
                                    </div>
                                    <ul className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                                        {campusInfrastructure.hostel.amenities.map((am, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                                {am}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="rounded-xl overflow-hidden border border-slate-800 h-44">
                                    <img 
                                        src="/campus/campus-pathway-block.webp" 
                                        alt="Hostel block pathways" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Sports */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card flex flex-col justify-between space-y-6">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold mb-4">
                                        <Trophy className="w-3.5 h-3.5" /> Athletics & Sports
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-900 mb-3">{campusInfrastructure.sports.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                        {campusInfrastructure.sports.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {campusInfrastructure.sports.facilities.map((fac, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-lg border border-emerald-100">
                                                {fac}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="rounded-2xl overflow-hidden border border-slate-200 h-44">
                                    <img 
                                        src="/campus/sports-badminton-ground.webp" 
                                        alt="MSIT Sports Ground" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Medical Room & Health Center */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card flex flex-col justify-between space-y-6 md:col-span-2 lg:col-span-1">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold mb-4">
                                        <Activity className="w-3.5 h-3.5" /> Health Care & Emergency Room
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-900 mb-3">{campusInfrastructure.medical.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                        {campusInfrastructure.medical.description}
                                    </p>
                                    <div className="bg-red-50/90 rounded-2xl p-4 border border-red-100 mb-6">
                                        <div className="text-[11px] font-black uppercase tracking-wider text-red-700 mb-1 flex items-center gap-1.5">
                                            <Phone className="w-3.5 h-3.5" /> Medical Attendant Desk (Emergency Contact)
                                        </div>
                                        <div className="text-sm font-extrabold text-slate-900">{campusInfrastructure.medical.attendantName}</div>
                                        <div className="text-xs font-semibold text-slate-700 mt-2 flex flex-col gap-1">
                                            <span className="flex items-center gap-1.5"><strong className="text-slate-500">Phone:</strong> <code className="bg-white px-2 py-0.5 rounded border border-red-200 font-mono text-red-700 font-bold">{campusInfrastructure.medical.attendantPhone}</code></span>
                                            <span className="flex items-center gap-1.5"><strong className="text-slate-500">Landline Ext:</strong> <code className="bg-white px-2 py-0.5 rounded border border-slate-200 font-mono text-slate-800 font-bold">{campusInfrastructure.medical.landline}</code></span>
                                        </div>
                                    </div>
                                    <div className="space-y-2.5">
                                        {campusInfrastructure.medical.facilities.map((fac, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                                                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                                                <span>{fac}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}


                {/* =================================================== */}
                {/* TAB 3: IT DEPARTMENT MOUS                           */}
                {/* =================================================== */}
                {activeMainTab === 'mous' && (
                    <div className="space-y-6 animate-fade-in">
                        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">IT Department Industry MOUs</h3>
                                    <p className="text-slate-500 text-xs mt-1">
                                        Official Memorandums of Understanding for student internships, lab setups, and industrial training.
                                    </p>
                                </div>

                                {/* Status Filter Pills */}
                                <div className="flex items-center gap-2">
                                    {['all', 'Active', 'Pending Renewal'].map((status) => (
                                        <button
                                            key={status}
                                            onClick={() => setMouFilter(status)}
                                            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                                mouFilter === status
                                                    ? 'bg-slate-900 text-white shadow-xs'
                                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                            }`}
                                        >
                                            {status === 'all' ? 'All MOUs (10)' : status}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto rounded-2xl border border-slate-200 pt-2">
                                <table className="w-full text-left text-xs border-collapse">
                                    <thead>
                                        <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                                            <th className="p-3.5">#</th>
                                            <th className="p-3.5">Industry Partner</th>
                                            <th className="p-3.5">Domain / Collaboration Area</th>
                                            <th className="p-3.5">MOU Date</th>
                                            <th className="p-3.5">Expiry / Validity</th>
                                            <th className="p-3.5">Beneficiaries</th>
                                            <th className="p-3.5">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {filteredMous.map((mou) => (
                                            <tr key={mou.id} className="hover:bg-slate-50 transition-colors">
                                                <td className="p-3.5 font-bold text-slate-400">{mou.id}</td>
                                                <td className="p-3.5 font-bold text-slate-900">{mou.partner}</td>
                                                <td className="p-3.5 text-slate-600">{mou.domain}</td>
                                                <td className="p-3.5 font-mono text-slate-500">{mou.mouDate}</td>
                                                <td className="p-3.5 font-mono text-slate-500">{mou.expiryDate}</td>
                                                <td className="p-3.5 font-semibold text-blue-600">{mou.beneficiaries}</td>
                                                <td className="p-3.5">
                                                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                                                        mou.status === 'Active' 
                                                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                                                            : 'bg-amber-100 text-amber-900 border border-amber-200'
                                                    }`}>
                                                        {mou.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}


                {/* =================================================== */}
                {/* TAB 4: MIGRATION & PHOTOGRAPHY AUDIT                */}
                {/* =================================================== */}
                {activeMainTab === 'audit' && (
                    <div className="space-y-6 animate-fade-in">
                        <div className="bg-amber-50 rounded-3xl p-6 md:p-8 border border-amber-200 text-amber-950 space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-amber-500 text-white rounded-xl flex items-center justify-center shrink-0">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">{auditNotes.warningTitle}</h3>
                                    <p className="text-xs text-amber-800">Scraped from official msit.in facilities registry on 2026-09-08</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {auditNotes.notes.map((note, idx) => (
                                    <div key={idx} className="p-4 bg-white/80 rounded-xl border border-amber-200 text-xs leading-relaxed text-amber-900 flex items-start gap-2.5">
                                        <span className="w-2 h-2 bg-amber-500 rounded-full mt-1.5 shrink-0"></span>
                                        <span>{note}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-2 border-t border-amber-200/60">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2">Labs Pending Photography:</h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                                    <div className="p-2.5 bg-white rounded-lg border border-amber-200 font-semibold text-amber-900">
                                        All 7 EEE Department Labs
                                    </div>
                                    <div className="p-2.5 bg-white rounded-lg border border-amber-200 font-semibold text-amber-900">
                                        IT Lab #504 (CoE)
                                    </div>
                                    <div className="p-2.5 bg-white rounded-lg border border-amber-200 font-semibold text-amber-900">
                                        ECE Lab #210 (Analog Comm)
                                    </div>
                                    <div className="p-2.5 bg-white rounded-lg border border-amber-200 font-semibold text-amber-900">
                                        ECE Lab #214 (Microprocessor)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>

            {/* =================================================== */}
            {/* LAB SPECIFICATIONS & GALLERY MODAL                  */}
            {/* =================================================== */}
            {selectedLabModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
                        
                        {/* Modal Header */}
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="px-2.5 py-0.5 bg-blue-100 text-blue-800 text-xs font-mono font-bold rounded-md">
                                        {selectedLabModal.labNo}
                                    </span>
                                    <span className="text-xs font-bold text-slate-500 uppercase">
                                        {selectedLabModal.dept}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mt-1">
                                    {selectedLabModal.name}
                                </h3>
                            </div>
                            <button 
                                onClick={closeLabModal}
                                className="w-9 h-9 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-600 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 space-y-6">

                            {/* Gallery Preview if photos available */}
                            {selectedLabModal.hasPhoto && selectedLabModal.images.length > 0 ? (
                                <div className="space-y-3">
                                    <div className="relative h-64 bg-slate-900 rounded-2xl overflow-hidden shadow-inner">
                                        <img 
                                            src={selectedLabModal.images[modalImageIndex]} 
                                            alt={selectedLabModal.name}
                                            className="w-full h-full object-cover"
                                        />

                                        {selectedLabModal.images.length > 1 && (
                                            <>
                                                <button
                                                    onClick={() => setModalImageIndex((prev) => (prev > 0 ? prev - 1 : selectedLabModal.images.length - 1))}
                                                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-950/60 text-white rounded-full flex items-center justify-center hover:bg-slate-950 transition-colors"
                                                >
                                                    <ChevronLeft className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={() => setModalImageIndex((prev) => (prev < selectedLabModal.images.length - 1 ? prev + 1 : 0))}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-950/60 text-white rounded-full flex items-center justify-center hover:bg-slate-950 transition-colors"
                                                >
                                                    <ChevronRight className="w-5 h-5" />
                                                </button>
                                            </>
                                        )}
                                    </div>

                                    {/* Thumbnails */}
                                    {selectedLabModal.images.length > 1 && (
                                        <div className="flex gap-2 overflow-x-auto pb-1">
                                            {selectedLabModal.images.map((img, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setModalImageIndex(idx)}
                                                    className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                                                        modalImageIndex === idx ? 'border-blue-600 ring-2 ring-blue-500/20' : 'border-transparent opacity-60 hover:opacity-100'
                                                    }`}
                                                >
                                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="p-8 bg-slate-100 rounded-2xl text-center space-y-2 text-slate-500">
                                    <Camera className="w-8 h-8 mx-auto text-slate-400" />
                                    <p className="text-xs font-semibold">Official photography pending for {selectedLabModal.labNo}</p>
                                </div>
                            )}

                            {/* Detailed Description */}
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Curriculum & Practical Scope:</h4>
                                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                    {selectedLabModal.description}
                                </p>
                            </div>

                            {/* System Configurations */}
                            <div className="space-y-3">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">System Specifications:</h4>
                                <div className="p-4 bg-blue-50/60 rounded-2xl border border-blue-100/80 space-y-2 text-xs">
                                    <p className="text-slate-800">
                                        <strong className="text-blue-900">Desktop Configurations:</strong> {selectedLabModal.systemConfig.desktop}
                                    </p>
                                    {selectedLabModal.systemConfig.server && (
                                        <p className="text-slate-800">
                                            <strong className="text-blue-900">Server System:</strong> {selectedLabModal.systemConfig.server}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Hardware Kits if available */}
                            {selectedLabModal.hardwareKits && selectedLabModal.hardwareKits.length > 0 && (
                                <div className="space-y-2">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Specialized Hardware & Kits:</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {selectedLabModal.hardwareKits.map((kit, idx) => (
                                            <div key={idx} className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 flex items-center gap-2">
                                                <Wrench className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                                <span>{kit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Software & Subjects */}
                            <div className="grid md:grid-cols-2 gap-4 pt-2">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Installed Software:</h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {selectedLabModal.software.map((sw, idx) => (
                                            <span key={idx} className="px-2.5 py-1 bg-slate-100 text-slate-800 text-xs font-medium rounded-lg border border-slate-200">
                                                {sw}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Subjects & Course Codes:</h4>
                                    <div className="space-y-1">
                                        {selectedLabModal.subjects.map((sub, idx) => (
                                            <div key={idx} className="text-xs font-medium text-slate-800">
                                                <span className="font-mono font-bold text-blue-600">{sub.code}:</span> {sub.name}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Facilities;
