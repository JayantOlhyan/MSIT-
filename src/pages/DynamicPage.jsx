import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, LayoutDashboard, X, Mail, Linkedin, Globe, Phone, FileText, Star } from 'lucide-react';
import { pagesData } from '../data/pagesData';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import NotFound from './NotFound';
import { facultyMembers } from '../data/facultyData';
import FeePaymentPortal from '../components/FeePaymentPortal';
import EventsPortal from '../components/EventsPortal';
import NewslettersMagazines from '../components/NewslettersMagazines';
import SocietyDetailView from '../components/SocietyDetailView';
import SocietiesHubView from '../components/SocietiesHubView';
import { societiesData } from '../data/societiesData';

const DynamicPage = () => {
    const { slug } = useParams();
    const pageData = pagesData[slug];
    const navigate = useNavigate();
    const [selectedMember, setSelectedMember] = useState(null);
    const [activeFeeTab, setActiveFeeTab] = useState('pay');
    const [activeEventTab, setActiveEventTab] = useState('avensis');
    const [activeHighlightIndex, setActiveHighlightIndex] = useState(null);

    useEffect(() => {
        if (slug === 'online-fee') {
            setActiveFeeTab('pay');
        } else if (slug === 'events') {
            setActiveEventTab('avensis');
        }
    }, [slug]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedMember) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedMember]);

    const handleContentClick = (e) => {
        const anchor = e.target.closest('a');
        if (anchor) {
            const href = anchor.getAttribute('href');
            if (href) {
                if (href.startsWith('/faculty?id=')) {
                    e.preventDefault();
                    const urlParams = new URLSearchParams(href.split('?')[1]);
                    const id = urlParams.get('id');
                    const member = facultyMembers.find(f => f.id === id);
                    if (member) {
                        setSelectedMember({
                            ...member,
                            phone: member.phone || "011-65215944" // default office phone
                        });
                    }
                    return;
                }
                if (href.startsWith('/') && !href.startsWith('//')) {
                    e.preventDefault();
                    navigate(href);
                }
            }
        }
    };

    // Dedicated Full-Featured View for Individual Society Pages (e.g. GeekRoom, IEEE, NDLI)
    if (societiesData[slug]) {
        return <SocietyDetailView society={societiesData[slug]} />;
    }

    // Dedicated Redesigned View for the Student Societies Hub Directory (/society)
    if (slug === 'society') {
        return (
            <main className="min-h-screen bg-slate-50">
                <SEO 
                    title="Student Societies & Chapters" 
                    description="Explore 20+ vibrant technical, cultural, and academic student societies at Maharaja Surajmal Institute of Technology." 
                    canonicalPath="/society" 
                />
                <PageHero 
                    title="Student"
                    accentTitle="Societies & Chapters"
                    description="Technical innovation, performing arts, research groups, and community impact. Find your room and collaborate with 50,000+ peers."
                    breadcrumbs={[
                        { label: 'Campus Life' },
                        { label: 'Student Societies' }
                    ]}
                    heroImage="/campus-hero.webp"
                    heroImageAlt="Vibrant MSIT student societies and tech community"
                />
                <section className="py-16 sm:py-24 px-4 sm:px-8">
                    <div className="max-w-7xl mx-auto">
                        <SocietiesHubView />
                    </div>
                </section>
            </main>
        );
    }

    if (slug === 'newsletters-magazines') {
        if (!pageData) return <NotFound />;
        return (
            <main className="min-h-screen bg-white">
                <SEO 
                    title={pageData.title} 
                    description={pageData.seo_description || pageData.subtitle} 
                    canonicalPath={`/${slug}`} 
                />
                <PageHero 
                    title={pageData.title.split(' ').slice(0, -1).join(' ')}
                    accentTitle={pageData.title.split(' ').pop()}
                    description={pageData.subtitle}
                    breadcrumbs={[
                        { label: pageData.title }
                    ]}
                />
                <section className="bg-slate-50 border-b border-slate-100">
                    <NewslettersMagazines />
                </section>
            </main>
        );
    }

    if (!pageData) {
        return <NotFound />;
    }

    const isDepartment = ['cse', 'it', 'ece', 'eee', 'applied-sciences'].includes(slug);
    const courseSchema = isDepartment ? {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": pageData.title,
        "description": pageData.seo_description || pageData.subtitle,
        "provider": {
            "@type": "EducationalOrganization",
            "name": "Maharaja Surajmal Institute of Technology",
            "url": "https://msit-website.netlify.app"
        }
    } : null;

    return (
        <main className="min-h-screen bg-white">
            <SEO 
                title={pageData.title} 
                description={pageData.seo_description || pageData.subtitle} 
                canonicalPath={`/${slug}`} 
                schema={courseSchema}
            />
            <PageHero 
                title={pageData.title.split(' ').slice(0, -1).join(' ')}
                accentTitle={pageData.title.split(' ').pop()}
                description={pageData.subtitle}
                breadcrumbs={[
                    { 
                        label: pageData.title === 'Applied Sciences' ? (
                            <span>
                                Applied Sciences
                                <span className="ml-1 text-primary font-medium">(1st Year)</span>
                            </span>
                        ) : pageData.title 
                    }
                ]}
                subtitle={pageData.title === 'Applied Sciences' ? "1st Year" : null}
                heroImage={pageData.heroImage}
                heroImageAlt={pageData.heroImageAlt}
            />

            {/* MAIN CONTENT LAYOUT */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                        {/* Main Typography Area */}
                        <div className="w-full lg:w-2/3 order-2 lg:order-1">
                            {slug === 'online-fee' ? (
                                <FeePaymentPortal activeTab={activeFeeTab} setActiveTab={setActiveFeeTab} />
                            ) : slug === 'events' ? (
                                <EventsPortal activeTab={activeEventTab} setActiveTab={setActiveEventTab} />
                            ) : pageData.component ? (
                                <pageData.component />
                            ) : (
                                <div 
                                    className="prose prose-lg prose-slate max-w-none font-light leading-loose text-body" 
                                    dangerouslySetInnerHTML={{ __html: pageData.content }}
                                    onClick={handleContentClick}
                                ></div>
                            )}
                        </div>

                        {/* Interactive Sidebar */}
                        <div className="w-full lg:w-1/3 order-1 lg:order-2">
                            <div className="sticky top-32 space-y-8">

                                {/* Stats Cards */}
                                {pageData.stats && pageData.stats.length > 0 && (
                                    <div className="grid grid-cols-2 gap-4">
                                        {pageData.stats.map((stat, i) => (
                                            <div key={i} className="bg-surface p-6 rounded-2xl border border-slate-100 shadow-card">
                                                <div className="text-2xl font-bold text-title mb-1">{stat.value}</div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-muted">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Key Highlights */}
                                {pageData.bulletPoints && pageData.bulletPoints.length > 0 && (
                                    <div className="bg-slate-900 p-8 rounded-2xl text-white shadow-card">
                                        <h4 className="text-lg font-semibold mb-6 flex items-center">Key Highlights</h4>
                                        <ul className="space-y-4">
                                            {pageData.bulletPoints.map((point, i) => {
                                                const isLink = typeof point === 'object' && point.url;
                                                const labelText = typeof point === 'object' ? point.label : point;
                                                const detailText = typeof point === 'object' ? point.detail : null;
                                                
                                                const isActiveFeeTab = slug === 'online-fee' && (
                                                    (labelText.includes('Payment') && activeFeeTab === 'pay') ||
                                                    (labelText.includes('Receipt') && activeFeeTab === 'receipt') ||
                                                    (labelText.includes('Refund') && activeFeeTab === 'refund')
                                                );
                                                
                                                const isActiveEventTab = slug === 'events' && (
                                                    (labelText.includes('Avensis') && activeEventTab === 'avensis') ||
                                                    (labelText.includes('Genesis') && activeEventTab === 'genesis') ||
                                                    (labelText.includes('Sports') && activeEventTab === 'sports')
                                                );

                                                const isActive = isActiveFeeTab || isActiveEventTab || activeHighlightIndex === i;

                                                return (
                                                    <li key={i} className="flex items-start text-slate-300 text-sm">
                                                        <ArrowRight className={`w-4 h-4 mr-3 mt-0.5 shrink-0 transition-all duration-300 ${isActive ? 'rotate-90 text-accent' : 'text-slate-500'}`} />
                                                        {isLink ? (
                                                            <Link to={point.url} className="hover:text-accent transition-colors">
                                                                {point.label}
                                                            </Link>
                                                        ) : (
                                                            <div className="flex flex-col w-full">
                                                                <span 
                                                                    className={`hover:text-accent transition-colors cursor-pointer w-full ${isActive ? 'text-accent font-bold font-sans' : ''}`}
                                                                    dangerouslySetInnerHTML={{ __html: labelText }}
                                                                    onClick={() => {
                                                                        if (slug === 'online-fee') {
                                                                            if (labelText.includes('Payment')) setActiveFeeTab('pay');
                                                                            else if (labelText.includes('Receipt')) setActiveFeeTab('receipt');
                                                                            else if (labelText.includes('Refund')) setActiveFeeTab('refund');
                                                                        } else if (slug === 'events') {
                                                                            if (labelText.includes('Avensis')) setActiveEventTab('avensis');
                                                                            else if (labelText.includes('Genesis')) setActiveEventTab('genesis');
                                                                            else if (labelText.includes('Sports')) setActiveEventTab('sports');
                                                                        } else if (detailText) {
                                                                            setActiveHighlightIndex(activeHighlightIndex === i ? null : i);
                                                                        }
                                                                    }}
                                                                ></span>
                                                                {detailText && activeHighlightIndex === i && (
                                                                    <div className="mt-2 text-slate-400 text-xs leading-relaxed animate-fade-in">
                                                                        {detailText}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                )}

                                {/* Custom Sidebar Content */}
                                {pageData.sidebarHtml && (
                                    <div dangerouslySetInnerHTML={{ __html: pageData.sidebarHtml }}></div>
                                )}

                                {/* Quick CTA */}
                                {slug !== 'contact' && (
                                    <Link to="/contact" className="block p-8 rounded-2xl border-2 border-slate-100 hover:border-blue-100 bg-white transition-colors cursor-pointer group">
                                        <h4 className="text-lg font-semibold text-title mb-2 group-hover:text-primary transition-colors">Questions?</h4>
                                        <p className="text-sm text-muted font-light mb-4">Contact the MSIT administrative desk directly.</p>
                                        <div className="text-primary font-medium text-sm flex items-center group-hover:translate-x-2 transition-transform">
                                            Contact Us <ArrowRight className="w-4 h-4 ml-1" />
                                        </div>
                                    </Link>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Interactive Modal Popup */}
            {selectedMember && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 animate-fade-in">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-slate-950/40 backdrop-blur-md animate-backdrop-fade"
                        onClick={() => setSelectedMember(null)}
                    ></div>

                    {/* Modal Card */}
                    <div className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto scrollbar-hide rounded-3xl sm:rounded-[2rem] shadow-2xl border border-slate-200 animate-scale-in">
                        {/* Close button */}
                        <button 
                            onClick={() => setSelectedMember(null)}
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors z-20"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Top banner / image */}
                        <div className="bg-slate-900 text-white p-5 sm:p-8 pt-10 sm:pt-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px]"></div>
                            <div className="flex gap-4 sm:gap-6 items-center relative z-10">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white/20 shadow-lg shrink-0">
                                    <img src={selectedMember.img} alt={selectedMember.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <span className="inline-block px-2.5 py-1 bg-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded mb-1.5 sm:mb-2 border border-white/5">{selectedMember.dept}</span>
                                    <h3 className="text-xl sm:text-2xl font-black truncate">{selectedMember.name}</h3>
                                    <p className="text-blue-300 text-xs sm:text-sm font-semibold line-clamp-2 mt-0.5">{selectedMember.role}</p>
                                </div>
                            </div>
                        </div>

                        {/* Details body */}
                        <div className="p-5 sm:p-8 space-y-6 sm:space-y-8 bg-[#f8fafc]">
                            {selectedMember.bio && (
                                <div>
                                    <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                                        <FileText className="w-4 h-4 text-blue-500" /> Professional Bio
                                    </h4>
                                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">
                                        {selectedMember.bio}
                                    </p>
                                </div>
                            )}

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-sm">
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1">Qualification</div>
                                    <div className="text-xs font-extrabold text-slate-800">{selectedMember.qual || selectedMember.qualifications || "N/A"}</div>
                                </div>
                                <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-sm">
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1">Experience / Status</div>
                                    <div className="text-xs font-extrabold text-slate-800">{selectedMember.experience} Years</div>
                                </div>
                            </div>

                            {selectedMember.goodAt && selectedMember.goodAt.length > 0 && (
                                <div>
                                    <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-1.5 border-b border-slate-200 pb-2">
                                        <Star className="w-4 h-4 text-emerald-500 fill-emerald-500" /> Key Focus Areas
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedMember.goodAt.map((item, idx) => (
                                            <span key={idx} className="px-2.5 py-1 bg-emerald-50 border border-emerald-100 rounded text-xs font-bold text-emerald-700">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
                                <div className="flex flex-col gap-2 shrink-0">
                                    <a 
                                        href={`mailto:${selectedMember.email}`}
                                        className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 transition-colors truncate"
                                    >
                                        <Mail className="w-4 h-4 shrink-0" />
                                        <span className="truncate text-left">{selectedMember.email}</span>
                                    </a>

                                    <a 
                                        href={`tel:${selectedMember.phone}`}
                                        className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 transition-colors truncate"
                                    >
                                        <Phone className="w-4 h-4 shrink-0" />
                                        <span className="truncate text-left">{selectedMember.phone}</span>
                                    </a>
                                </div>

                                <div className="flex gap-3 justify-end items-end">
                                    {selectedMember.pdfLink && (
                                        <a 
                                            href={selectedMember.pdfLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="w-10 h-10 bg-slate-900 hover:bg-slate-800 text-white rounded-xl flex items-center justify-center transition-colors"
                                            title="View Official Profile PDF"
                                        >
                                            <FileText className="w-4 h-4" />
                                        </a>
                                    )}
                                    {selectedMember.linkedin && (
                                        <a 
                                            href={selectedMember.linkedin} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="w-10 h-10 bg-[#0077B5] hover:bg-[#005a8a] text-white rounded-xl flex items-center justify-center transition-colors"
                                            title="LinkedIn Profile"
                                        >
                                            <Linkedin className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main >
    );
};

export default DynamicPage;
