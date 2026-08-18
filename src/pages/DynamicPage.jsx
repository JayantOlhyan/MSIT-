import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, LayoutDashboard } from 'lucide-react';
import { pagesData } from '../data/pagesData';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';

import NotFound from './NotFound';

const DynamicPage = () => {
    const { slug } = useParams();
    const pageData = pagesData[slug];
    const navigate = useNavigate();

    const handleContentClick = (e) => {
        const anchor = e.target.closest('a');
        if (anchor) {
            const href = anchor.getAttribute('href');
            if (href && href.startsWith('/') && !href.startsWith('//')) {
                e.preventDefault();
                navigate(href);
            }
        }
    };

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
                    { label: pageData.category || 'MSIT' },
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
                            {pageData.component ? (
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
                                                return (
                                                    <li key={i} className="flex items-start text-slate-300 text-sm">
                                                        <ArrowRight className="w-4 h-4 text-accent mr-3 mt-0.5 shrink-0" />
                                                        {isLink ? (
                                                            <Link to={point.url} className="hover:text-accent transition-colors">
                                                                {point.label}
                                                            </Link>
                                                        ) : (
                                                            <span className="hover:text-accent transition-colors cursor-pointer w-full" dangerouslySetInnerHTML={{ __html: typeof point === 'object' ? point.label : point }}></span>
                                                        )}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
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
        </main >
    );
};

export default DynamicPage;
