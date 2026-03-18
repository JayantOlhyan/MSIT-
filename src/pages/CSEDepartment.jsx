import React from 'react';
import { Code, Server, Shield, Database, Monitor, Cpu, Terminal, ArrowRight, BookOpen, Target, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const CSEDepartment = () => {
    return (
        <main className="min-h-screen bg-slate-50">
            <SEO 
                title="Computer Science & Engineering" 
                description="Explore the Computer Science & Engineering (CSE) department at MSIT, featuring NBA accredited programs and state-of-the-art laboratories." 
                canonicalPath="/cse"
            />
            {/* HER0 - PAGE TITLE */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900 border-b border-slate-800">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: "url('/campus-hero.jpg')" }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <span className="text-emerald-400 font-bold tracking-widest text-sm uppercase mb-4 block animate-fade-in flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-4 h-4" /> NBA Accredited Program
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Computer Science & <span className="font-semibold text-blue-400">Engineering.</span>
                    </h1>
                    <p className="text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        The Department of Computer Science & Engineering at Maharaja Surajmal Institute of Technology (MSIT) was established in 2001 to impart world-class education and prepare future software engineers for the rapidly evolving technological landscape.
                    </p>
                </div>
            </section>

            {/* VISION & MISSION */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Vision */}
                        <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 text-blue-600">
                                <Target className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-semibold text-slate-900 mb-6">Our Vision</h2>
                            <p className="text-lg text-slate-600 font-light leading-relaxed">
                                To maintain academic excellence aiming to produce competent technocrats imbibed with ethical values to serve the national emerging technological needs.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 text-emerald-600">
                                <BookOpen className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-semibold text-slate-900 mb-6">Our Mission</h2>
                            <ul className="space-y-4 text-slate-600 font-light text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-emerald-600 mt-1">M1:</span>
                                    To impart quality engineering education to the students by providing effective teaching learning, research and application based innovative environment.
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-emerald-600 mt-1">M2:</span>
                                    To inculcate creativity team-spirit, leadership and ethical competence through continuous collective curricular, co-curricular and extracurricular activities.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROGRAM OBJECTIVES */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-4 block">PEOs</span>
                        <h2 className="text-4xl font-light tracking-tight mb-6">Program Educational Objectives</h2>
                        <p className="text-slate-400 font-light text-lg">The core goals we strive to achieve for every graduate of the Computer Science program.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { id: "PEO1", title: "Analytical Excellence", desc: "To acquire a deep insight in mathematical, scientific & analytical skills and adopt self-motivating lifelong learning to explore cutting edge technologies." },
                            { id: "PEO2", title: "Ethical Innovation", desc: "To prepare graduate to meet the evolving technological needs of the country by promoting innovation, ethical practice and a commitment to serving society." },
                            { id: "PEO3", title: "Professional Leadership", desc: "To acquire necessary technical knowledge to pursue successful professional career posing leadership and team spirit." }
                        ].map((peo, i) => (
                            <div key={i} className="bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:bg-slate-800 transition-colors">
                                <div className="text-blue-400 font-bold text-xl mb-4">{peo.id}</div>
                                <h3 className="text-2xl font-semibold mb-4 text-white">{peo.title}</h3>
                                <p className="text-slate-400 font-light leading-relaxed">{peo.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STATE OF THE ART LABS */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16">
                        <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-4 block">Infrastructure</span>
                        <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight">State-of-the-Art <span className="font-semibold">Laboratories</span></h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Lab Intro */}
                        <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm lg:row-span-2">
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                                <Monitor className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Department Computing Hub</h3>
                            <p className="text-slate-600 font-light leading-relaxed mb-6">
                                The computer labs in the CSE department are equipped with high-quality computers and software with good configurations. Students, faculty, and staff all have access to these labs, which offer various tools and technologies for a wide range of tasks.
                            </p>
                            <p className="text-slate-600 font-light leading-relaxed mb-8">
                                Microsoft Windows software is available for word processing, statistics, spreadsheet work, and database management alongside robust Linux environments for core development.
                            </p>

                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <h4 className="font-semibold text-slate-900 mb-4">Standard Hardware Specs</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-slate-600 text-sm"><Cpu className="w-4 h-4 mr-3 text-slate-400" /> DELL Desktop Intel Core™ i7 10th Gen @2.90 GHz</li>
                                    <li className="flex items-center text-slate-600 text-sm"><Database className="w-4 h-4 mr-3 text-slate-400" /> 8GB DDR4 RAM, 1TB HDD</li>
                                    <li className="flex items-center text-slate-600 text-sm"><Server className="w-4 h-4 mr-3 text-slate-400" /> Server Dell Poweredge T430, Intel Xeon CPU</li>
                                </ul>
                            </div>
                        </div>

                        {/* Specific Labs */}
                        <div className="space-y-6">
                            {/* CN / Python Lab */}
                            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group flex gap-6">
                                <div className="mt-1">
                                    <Terminal className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-slate-900 mb-2">CN Lab / Python Lab (#105)</h4>
                                    <p className="text-slate-600 font-light text-sm leading-relaxed mb-4">
                                        Designed to enhance student's programming skills by providing a hands-on environment for coding, debugging, and implementing object-oriented concepts. Uses Cisco Packet Tracer and NS 3.
                                    </p>
                                    <div className="flex gap-2">
                                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase rounded tracking-wider">Python</span>
                                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase rounded tracking-wider">Cisco</span>
                                    </div>
                                </div>
                            </div>

                            {/* OS / DA Lab */}
                            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group flex gap-6">
                                <div className="mt-1">
                                    <Code className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-slate-900 mb-2">OS Lab / SSM & DA Lab (#05)</h4>
                                    <p className="text-slate-600 font-light text-sm leading-relaxed mb-4">
                                        Dedicated environments for Operating Systems research, System Software Management, and Data Analytics utilizing industry-standard database management systems.
                                    </p>
                                    <div className="flex gap-2">
                                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase rounded tracking-wider">Linux</span>
                                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase rounded tracking-wider">Databases</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CSEDepartment;
