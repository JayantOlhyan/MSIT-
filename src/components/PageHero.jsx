import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PageHero = ({ title, accentTitle, description, breadcrumbs, subtitle }) => {
    return (
        <div className="bg-slate-950 text-white pt-28 sm:pt-40 lg:pt-44 pb-16 sm:pb-20 px-6 relative overflow-hidden group/hero">
            {/* Opaque Bluish Background Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)]"></div>
            </div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Breadcrumbs */}
                <div className="flex items-center text-blue-400/80 gap-2 mb-6 font-heading font-semibold tracking-wide text-xs sm:text-sm">
                    <Link to="/" className="hover:text-blue-300 transition-colors shrink-0">Home</Link>
                    {breadcrumbs && breadcrumbs.map((crumb, index) => (
                        <React.Fragment key={index}>
                            <span className="text-slate-700 shrink-0 mx-1">/</span>
                            {crumb.url ? (
                                <Link to={crumb.url} className="hover:text-blue-300 transition-colors shrink-0">{crumb.label}</Link>
                            ) : (
                                <span className="text-slate-400 truncate">{crumb.label}</span>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Main Heading */}
                <div className="mb-8">
                    <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-2">
                        {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 animate-gradient-x">{accentTitle}</span>
                    </h1>
                    {subtitle && (
                        <div className="font-heading text-xl md:text-3xl font-semibold text-blue-400/80 tracking-widest uppercase">
                            {subtitle}
                        </div>
                    )}
                </div>

                {/* Description */}
                {description && (
                    <p className="font-body text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default PageHero;
