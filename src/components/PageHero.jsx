import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PageHero = ({ title, accentTitle, description, breadcrumbs, subtitle, heroImage, heroImageAlt }) => {
    return (
        <div className="bg-slate-950 text-white pt-28 sm:pt-40 lg:pt-44 pb-16 sm:pb-20 px-6 relative overflow-hidden group/hero">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {heroImage ? (
                    <img 
                        src={heroImage} 
                        alt={heroImageAlt || "MSIT Campus Hero Section"} 
                        className="w-full h-full object-cover opacity-30 scale-105 group-hover/hero:scale-100 transition-transform duration-[10s] ease-out select-none"
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0a1e3b] to-slate-950"></div>
                )}
                
                {/* Opaque Bluish Background Effect & Gradient Overlays */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px]"></div>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto relative z-20">
                {/* Breadcrumbs */}
                <div className="flex items-center text-blue-300 gap-2 mb-6 font-medium tracking-wide text-xs sm:text-sm drop-shadow-sm">
                    <Link to="/" className="hover:text-white transition-colors shrink-0">Home</Link>
                    {breadcrumbs && breadcrumbs.map((crumb, index) => (
                        <React.Fragment key={index}>
                            <span className="text-white/30 shrink-0 mx-1">/</span>
                            {crumb.url ? (
                                <Link to={crumb.url} className="hover:text-white transition-colors shrink-0">{crumb.label}</Link>
                            ) : (
                                <span className="text-white/60 truncate">{crumb.label}</span>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Main Heading */}
                <div className="mb-8 drop-shadow-xl">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight leading-[1] mb-4">
                        {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">{accentTitle}</span>
                    </h1>
                    {subtitle && (
                        <div className="text-xl md:text-2xl font-black text-blue-400 tracking-[0.3em] uppercase opacity-90">
                            {subtitle}
                        </div>
                    )}
                </div>

                {/* Description */}
                {description && (
                    <p className="text-slate-200 text-lg md:text-xl max-w-3xl leading-relaxed font-medium opacity-90 drop-shadow-md">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default PageHero;
