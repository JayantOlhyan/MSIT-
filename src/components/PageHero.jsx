import React from 'react';

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
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-title to-slate-950"></div>
                )}
                
                {/* Opaque Bluish Background Effect & Gradient Overlays */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-[clamp(250px,40vw,500px)] h-[clamp(250px,40vw,500px)] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-[clamp(200px,35vw,400px)] h-[clamp(200px,35vw,400px)] bg-blue-900/15 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px]"></div>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto relative z-20">
                {/* Main Heading */}
                <div className="mb-8 drop-shadow-xl">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight leading-[1] mb-4">
                        {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-accent transition-all duration-700">{accentTitle}</span>
                    </h1>
                    {subtitle && (
                        <div className="text-xl md:text-2xl font-black text-primary tracking-[0.3em] uppercase opacity-90 transition-colors">
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
