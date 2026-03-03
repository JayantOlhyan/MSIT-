import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, LayoutDashboard } from 'lucide-react';
import { pagesData } from '../data/pagesData';

const DynamicPage = () => {
    const { slug } = useParams();
    const pageData = pagesData[slug];

    if (!pageData) {
        return (
            <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center p-6">
                <LayoutDashboard className="w-20 h-20 text-slate-300 mb-6" />
                <h1 className="text-5xl font-light text-slate-900 mb-4 tracking-tight">Page Not <span className="font-semibold text-blue-600">Found.</span></h1>
                <p className="text-xl text-slate-600 mb-8 font-light max-w-lg">The spectacular MSIT page you are looking for doesn't exist yet, or the URL might be incorrect.</p>
                <Link to="/" className="px-8 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                    Return to Home
                </Link>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50">
            {/* HER0 - PAGE TITLE */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900 border-b border-slate-800">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 transition-transform duration-[10s] hover:scale-105" style={{ backgroundImage: "url('" + pageData.heroImage + "')" }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    {/* Breadcrumbs */}
                    <div className="flex items-center text-sm font-medium text-slate-400 mb-8 animate-fade-in">
                        <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-slate-500">{pageData.category}</span>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-blue-400">{pageData.title}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-white tracking-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        {pageData.title.split(' ').map((word, i, arr) => (
                            i === arr.length - 1 ? <span key={i} className="font-semibold text-blue-400">{word}</span> : <React.Fragment key={i}>{word} </React.Fragment>
                        ))}
                    </h1>
                    <p className="text-xl text-slate-300 font-light max-w-3xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        {pageData.subtitle}
                    </p>
                </div>
            </section>

            {/* MAIN CONTENT LAYOUT */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                        {/* Main Typography Area */}
                        <div className="w-full lg:w-2/3 order-2 lg:order-1">
                            <div className="prose prose-lg prose-slate max-w-none font-light leading-loose text-slate-700" dangerouslySetInnerHTML={{ __html: pageData.content }}></div>
                        </div>

                        {/* Interactive Sidebar */}
                        <div className="w-full lg:w-1/3 order-1 lg:order-2">
                            <div className="sticky top-32 space-y-8">

                                {/* Stats Cards */}
                                {pageData.stats && pageData.stats.length > 0 && (
                                    <div className="grid grid-cols-2 gap-4">
                                        {pageData.stats.map((stat, i) => (
                                            <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
                                                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-slate-500">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Key Highlights */}
                                {pageData.bulletPoints && pageData.bulletPoints.length > 0 && (
                                    <div className="bg-slate-900 p-8 rounded-2xl text-white shadow-xl">
                                        <h4 className="text-lg font-semibold mb-6 flex items-center">Key Highlights</h4>
                                        <ul className="space-y-4">
                                            {pageData.bulletPoints.map((point, i) => (
                                                <li key={i} className="flex items-start text-slate-300 text-sm">
                                                    <ArrowRight className="w-4 h-4 text-blue-400 mr-3 mt-0.5 shrink-0" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Quick CTA */}
                                <div className="p-8 rounded-2xl border-2 border-slate-100 hover:border-blue-100 bg-white transition-colors cursor-pointer group">
                                    <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Questions?</h4>
                                    <p className="text-sm text-slate-500 font-light mb-4">Contact the MSIT administrative desk directly.</p>
                                    <div className="text-blue-600 font-medium text-sm flex items-center group-hover:translate-x-2 transition-transform">
                                        Contact Us <ArrowRight className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main >
    );
};

export default DynamicPage;
