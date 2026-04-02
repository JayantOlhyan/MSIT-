import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';

const SearchPage = () => {
    const location = useLocation();
    const [query, setQuery] = useState('');

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const q = searchParams.get('q');
        if (q) {
            setQuery(q);
        }
    }, [location.search]);

    return (
        <div className="min-h-screen bg-white">
            <SEO 
                title={query ? `Search Results for "${query}"` : "Search"} 
                description="Search for courses, departments, faculty, and academic resources at Maharaja Surajmal Institute of Technology. Find the information you need quickly today." 
                canonicalPath="/search"
            />
            <PageHero 
                title="Search Results for" 
                accentTitle={query ? `"${query}"` : "MSIT"} 
                description="Find the information you need quickly across Maharaja Surajmal Institute of Technology's departments, faculty, and resources."
                breadcrumbs={[{ label: 'Search' }]}
            />
            <div className="max-w-5xl mx-auto px-4 py-12">
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12 mb-8">

                    {query ? (
                        <div className="space-y-4">
                            <p className="font-body text-lg text-slate-600">
                                Showing results for <span className="font-heading font-semibold text-slate-900 border-b-2 border-blue-200 pb-0.5">"{query}"</span>
                            </p>

                            {/* Dummy search results - in a real app this would map over fetched data */}
                            <div className="mt-8 pt-8 border-t border-slate-100">
                                <div className="space-y-6">
                                    <div className="rounded-xl border border-slate-100 p-6 hover:shadow-md transition-shadow bg-slate-50/50 cursor-pointer">
                                        <h3 className="font-heading text-xl font-bold text-slate-900 mb-2 hover:text-blue-600 transition-colors">
                                            Result relating to {query}
                                        </h3>
                                        <p className="font-body text-slate-600">
                                            This is a simulated search result for the query "{query}". In a fully integrated backend, this would display relevant documents, pages, or faculty profiles matching your search criteria.
                                        </p>
                                        <div className="font-heading mt-4 flex items-center text-sm text-blue-600 font-semibold">
                                            Read more →
                                        </div>
                                    </div>

                                    <div className="rounded-xl border border-slate-100 p-6 hover:shadow-md transition-shadow bg-slate-50/50 cursor-pointer">
                                        <h3 className="font-heading text-xl font-bold text-slate-900 mb-2 hover:text-blue-600 transition-colors">
                                            Information about {query}
                                        </h3>
                                        <p className="font-body text-slate-600">
                                            Find all the necessary details, contact information, and academic resources related to {query} on the MSIT campus portal.
                                        </p>
                                        <div className="font-heading mt-4 flex items-center text-sm text-blue-600 font-semibold">
                                            Read more →
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-8 h-8 text-slate-400" />
                            </div>
                            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-2">No Search Query</h2>
                            <p className="font-body text-slate-500">Please enter a search term in the header search bar to find what you're looking for at Maharaja Surajmal Institute of Technology.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
