import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const ParallaxDemo = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: 1,
            }
        });

        // Use yPercent to move relative to element height
        // Scale container identically first to ensure layers overlap seamlessly, then animate
        tl.to("#parallax-bg", {
            yPercent: 5,
            scale: 1.15,
            ease: "none"
        }, 0);

        tl.to("#parallax-mid", {
            yPercent: -10,
            ease: "none"
        }, 0);

        tl.to("#parallax-fg", {
            yPercent: -20,
            ease: "none"
        }, 0);

        tl.to("#ui-container", {
            yPercent: -100,
            opacity: 0,
            ease: "power1.inOut"
        }, 0);
    }, { scope: containerRef });

    return (
        <main ref={containerRef} className="bg-[#050505] min-h-[250vh] text-white overflow-hidden font-sans">
            {/* Cinematic Parallax Hero Section */}
            <section id="hero" className="relative w-full h-screen overflow-hidden flex items-center justify-center">
                
                {/* Image Layers Container (scaled up evenly to bleed and prevent gaps) */}
                <div className="absolute inset-0 w-full h-full scale-[1.25] pointer-events-none">
                    <img 
                        src="/assets/background.png" 
                        alt="Background" 
                        id="parallax-bg"
                        className="absolute inset-0 w-full h-full z-[1] object-cover object-center will-change-transform"
                    />
                    <img 
                        src="/assets/midground.png" 
                        alt="Midground" 
                        id="parallax-mid"
                        className="absolute inset-0 w-full h-full z-[2] object-cover object-center will-change-transform"
                    />
                    <img 
                        src="/assets/foreground.png" 
                        alt="Foreground" 
                        id="parallax-fg"
                        className="absolute inset-0 w-full h-full z-[3] object-cover object-center will-change-transform"
                    />
                </div>
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 z-[4] pointer-events-none bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>

                {/* UI Container */}
                <div id="ui-container" className="relative z-[5] text-center flex flex-col items-center gap-8 px-6">
                    <h1 className="text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[1.05] tracking-tight uppercase text-shadow-xl m-0 drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
                        Innovate <br /> The Future
                    </h1>
                    <a href="#explore" className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 hover:-translate-y-1 hover:border-white/50 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_40px_rgba(255,255,255,0.15)]">
                        Explore Campus
                    </a>
                </div>
            </section>

            {/* Content Section below to demonstrate scrolling effect */}
            <section id="explore" className="relative z-10 px-8 py-[120px] bg-[#050505] min-h-[150vh] text-center">
                <h2 className="text-4xl font-light mb-6 tracking-tight text-white">Continuing The Journey</h2>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    Scroll up and down to see the cinematic 3D parallax effect in action. The layers move at precisely tuned different rates to create a hyper-realistic sense of depth.
                    <br /><br />
                    Make sure you place your actual images in the <code className="bg-slate-800 px-2 py-1 rounded text-slate-200">public/assets/</code> directory to see the full aesthetic perfectly rendered.
                </p>
                <div className="mt-12">
                   <Link to="/" className="text-blue-500 hover:text-blue-400 underline decoration-2 underline-offset-4 font-semibold text-lg">← Back to Main Website</Link>
                </div>
            </section>
        </main>
    );
};

export default ParallaxDemo;
