import React from 'react';
import { BookOpen, Target, Globe, Award, Shield, Cpu, Users } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';

const About = () => {
    return (
        <main className="min-h-screen bg-slate-50">
            <SEO 
                title="About Us" 
                description="Discover the legacy of Maharaja Surajmal Institute of Technology. Learn about our mission to provide excellence in engineering and technology since 2001." 
                canonicalPath="/about"
            />
            <PageHero 
                title="Defining Excellence" 
                accentTitle="at MSIT New Delhi" 
                description="A legacy of engineering brilliance, innovation, and holistic development since 2001. Shaping tomorrow's leaders today."
                breadcrumbs={[{ label: 'About Us' }]}
            />

            {/* MAIN CONTENT - THE INSTITUTE */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div className="order-2 lg:order-1 relative">
                            {/* Abstract Image Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-64 rounded-2xl bg-slate-200 overflow-hidden transform translate-y-8">
                                    <img src="/campus-hero.jpg" alt="Maharaja Surajmal Institute of Technology (MSIT) Campus Building" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" loading="lazy" />
                                </div>
                                <div className="h-48 rounded-2xl bg-slate-200 overflow-hidden">
                                    <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-600">
                                        <Award className="w-12 h-12" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="font-heading text-blue-600 font-bold tracking-widest text-sm uppercase mb-4 block">Our Origin</span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-8 leading-tight">
                                Established in 2001, <br />
                                <span className="font-bold">Built for the future.</span>
                            </h2>
                            <p className="font-body text-lg text-slate-600 leading-relaxed mb-6">
                                This AICTE approved Institute under GGSIP University is ideally located in the Institutional area of Janakpuri, New Delhi. MSIT has a campus spread over eight acres of land with beautiful eco-friendly surroundings.
                            </p>
                            <p className="font-body text-lg text-slate-600 leading-relaxed">
                                The institute was earlier operating from a four-storey building of 6279 sq.m of built-up area. Later it was shifted to a more spacious seven-storeyed building with a built-up area of 17837 sq.m. The institute has over a short span of time acquired and developed impressive infrastructure, expertise and resources for imparting high-quality engineering education.
                            </p>
                            <div className="mt-10 pt-10 border-t border-slate-100 grid grid-cols-2 gap-8">
                                <div>
                                    <div className="font-heading text-3xl font-bold text-slate-900 mb-1">8 Acres</div>
                                    <div className="font-body text-sm font-medium text-slate-500 uppercase tracking-widest text-xs">Eco-Friendly Campus</div>
                                </div>
                                <div>
                                    <div className="font-heading text-3xl font-bold text-slate-900 mb-1">17,837</div>
                                    <div className="font-body text-sm font-medium text-slate-500 uppercase tracking-widest text-xs">Sq.M. Built-Up Area</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TEACHING METHODOLOGY */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="font-heading text-blue-400 font-bold tracking-widest text-sm uppercase mb-4 block">Pedagogy</span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">Teaching Methodology</h2>
                        <p className="font-body text-xl text-slate-400 leading-relaxed">
                            The institute aims to achieve and excel the high standards set by premiere technical institutions of the country.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Box 1 */}
                        <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/5 hover:bg-slate-800 transition-colors group">
                            <BookOpen className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="font-heading text-xl font-semibold mb-4 text-white">Comprehensive Learning</h3>
                            <p className="font-body text-slate-400 leading-relaxed text-sm">
                                Traditional classroom teaching is supplemented by regular tests, tutorials, group discussions, extensive lab work, projects, seminars and industrial exposure by way of industry visits and summer training.
                            </p>
                        </div>
                        {/* Box 2 */}
                        <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/5 hover:bg-slate-800 transition-colors group">
                            <Users className="w-10 h-10 text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="font-heading text-xl font-semibold mb-4 text-white">Eminent Faculty</h3>
                            <p className="font-body text-slate-400 leading-relaxed text-sm">
                                The institute has a well qualified and experienced faculty. Eminent academicians & professionals are invited as visiting faculty to teach & guide specific courses.
                            </p>
                        </div>
                        {/* Box 3 */}
                        <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/5 hover:bg-slate-800 transition-colors group">
                            <Target className="w-10 h-10 text-amber-400 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="font-heading text-xl font-semibold mb-4 text-white">Interactive Sessions</h3>
                            <p className="font-body text-slate-400 leading-relaxed text-sm">
                                The classroom atmosphere is synergetic with interactive and participative sessions. This makes learning proactive and instills in the students a sense of team spirit, responsibility and professional integrity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INFRASTRUCTURE */}
            <section className="py-32 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        <div className="w-full lg:w-1/3">
                            <div className="sticky top-32">
                                <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-8">Infrastructure <br /><span className="font-bold">& Facilities</span></h2>
                                <p className="font-body text-lg text-slate-600 leading-relaxed mb-8">
                                    The infrastructure consists of well-lit lecture halls, fully furnished labs, seminar halls, staff rooms, a large size play ground etc.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/3">
                            <div className="space-y-12">
                                {/* Computing */}
                                <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex gap-6 sm:gap-8 hover:shadow-xl transition-shadow">
                                    <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-blue-50 items-center justify-center shrink-0">
                                        <Cpu className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-2xl font-semibold text-slate-900 mb-4">Computing Laboratories</h3>
                                        <p className="font-body text-slate-600 leading-relaxed mb-4">
                                            The six modern air-conditioned networked computers labs cover entire range of Computer Science & IT subjects like Software Engg., Network Technology, Mobile Computing, Artificial Intelligence & Robotics, Computer Graphics, Compiler Construction, Analysis & Design of Algorithms, Interface Programming, Data Structure, DBMS & OOP.
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {['Visual Studio', '.Net', 'Auto Cad', 'Oracle 9i', 'Linux'].map(t => (
                                                <span key={t} className="font-heading px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold uppercase rounded-full tracking-wider">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* Hardware */}
                                <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex gap-6 sm:gap-8 hover:shadow-xl transition-shadow">
                                    <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-purple-50 items-center justify-center shrink-0">
                                        <Shield className="w-8 h-8 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-2xl font-semibold text-slate-900 mb-4">Electronics & Undergrad Labs</h3>
                                        <p className="font-body text-slate-600 leading-relaxed">
                                            For the fresh students there are well equipped labs for 'Applied Sciences', 'Applied Mechanics' and 'Electrical Engg. Lab'. The Electronics & Comm. Engg. Department has eight modern laboratories covering all the important subjects e.g. Analog Electronics Lab, Control Engg. Lab, Digital Image Processing Lab. Recently a VLSI Design Lab and a Satellite & Mobile Comm. Lab have been also added.
                                        </p>
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

export default About;
