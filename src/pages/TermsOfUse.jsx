import SEO from '../components/SEO';
import { FileText, Scale, AlertCircle, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const TermsOfUse = () => {
    return (
        <main className="min-h-screen bg-white">
            <SEO 
                title="Terms of Use" 
                description="Review the terms and conditions for using the Maharaja Surajmal Institute of Technology (MSIT) official website and digital services." 
                canonicalPath="/terms"
            />
            <PageHero 
                title="Terms &" 
                accentTitle="Conditions" 
                description="Review the terms and conditions for using the Maharaja Surajmal Institute of Technology (MSIT) official website and digital services."
                breadcrumbs={[{ label: 'MSIT' }, { label: 'Terms of Use' }]}
            />
            
            <div className="max-w-4xl mx-auto px-6 py-12">

                    <div className="p-8 md:p-12 space-y-10 prose prose-slate max-w-none">
                        <section>
                            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-4 flex items-center">
                                <BookOpen className="w-6 h-6 mr-3 text-indigo-600" /> 1. Acceptance of Terms
                            </h2>
                            <p className="font-body text-slate-600 leading-relaxed">
                                By accessing and using the Maharaja Surajmal Institute of Technology (MSIT) website, you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, please refrain from using our digital services. These terms apply to all students, faculty, staff, and visitors.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-4 flex items-center">
                                <FileText className="w-6 h-6 mr-3 text-indigo-600" /> 2. Intellectual Property
                            </h2>
                            <p className="font-body text-slate-600 leading-relaxed">
                                All content on this website, including but not limited to the logo, academic materials, research papers, images, and brand identifiers, is the exclusive property of MSIT and Maharaja Surajmal Memorial Society. No part of the website may be reproduced, distributed, or transmitted in any form without prior written permission.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-4 flex items-center">
                                <AlertCircle className="w-6 h-6 mr-3 text-indigo-600" /> 3. Code of Conduct
                            </h2>
                            <p className="font-body text-slate-600 leading-relaxed mb-4">
                                When using our student portal or any interactive digital services, users are expected to maintain professional academic decorum. Prohibited activities include:
                            </p>
                            <ul className="font-body list-disc pl-6 space-y-2 text-slate-600">
                                <li>Attempting to circumvent website security or server protocols.</li>
                                <li>Misrepresentation of academic records or personal identity.</li>
                                <li>Spamming or spreading malicious software on the campus network.</li>
                                <li>Engaging in any activity that violates UGC or GGSIPU guidelines.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-4 flex items-center">
                                <Scale className="w-6 h-6 mr-3 text-indigo-600" /> 4. Disclaimers & Limitations
                            </h2>
                            <p className="font-body text-slate-600 leading-relaxed">
                                While MSIT strives to provide accurate and updated information regarding admissions, placements, and academic results, the Institute makes no warranties regarding the absolute accuracy of the data. Official university circulars from GGSIPU take precedence in case of any discrepancy. MSIT shall not be liable for any indirect or consequential damages resulting from website downtime or external links.
                            </p>
                        </section>

                        <section className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100">
                            <h2 className="font-heading text-xl font-bold text-indigo-900 mb-2">5. Governing Law</h2>
                            <p className="font-body text-indigo-800 text-sm">
                                These Terms of Use are governed by the laws of India and are subject to the exclusive jurisdiction of the courts in <strong className="font-heading font-bold">New Delhi</strong>.
                            </p>
                        </section>
                </div>
            </div>
        </main>
    );
};

export default TermsOfUse;
