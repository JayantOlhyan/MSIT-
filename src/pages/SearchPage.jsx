import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import SEO from '../components/SEO';

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
        <div className="min-h-screen bg-slate-50 py-16">
            <SEO 
                title={query ? `Search Results for "${query}"` : "Search"} 
                description="Search for MSIT academic resources, news, and faculty information." 
                canonicalPath="/search"
            />
            <div className="max-w-5xl mx-auto px-4">
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12 mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 flex items-center">
                        <Search className="w-8 h-8 mr-4 text-blue-600" />
                        Search Results
                    </h1>

                    {query ? (
                        <div className="space-y-4">
                            <p className="text-lg text-slate-600">
                                Showing results for <span className="font-semibold text-slate-900 border-b-2 border-blue-200 pb-0.5">"{query}"</span>
                            </p>

                            {/* Dummy search results - in a real app this would map over fetched data */}
                            <div className="mt-8 pt-8 border-t border-slate-100">
                                <div className="space-y-6">
                                    <div className="rounded-xl border border-slate-100 p-6 hover:shadow-md transition-shadow bg-slate-50/50 cursor-pointer">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-blue-600 transition-colors">
                                            Result relating to {query}
                                        </h3>
                                        <p className="text-slate-600">
                                            This is a simulated search result for the query "{query}". In a fully integrated backend, this would display relevant documents, pages, or faculty profiles matching your search criteria.
                                        </p>
                                        <div className="mt-4 flex items-center text-sm text-blue-600 font-medium">
                                            Read more →
                                        </div>
                                    </div>

                                    <div className="rounded-xl border border-slate-100 p-6 hover:shadow-md transition-shadow bg-slate-50/50 cursor-pointer">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-blue-600 transition-colors">
                                            Information about {query}
                                        </h3>
                                        <p className="text-slate-600">
                                            Find all the necessary details, contact information, and academic resources related to {query} on the MSIT campus portal.
                                        </p>
                                        <div className="mt-4 flex items-center text-sm text-blue-600 font-medium">
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
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">No Search Query</h2>
                            <p className="text-slate-500">Please enter a search term in the header search bar to find what you're looking for.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
