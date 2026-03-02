import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
    const { pathname } = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="font-sans text-slate-700 w-full min-h-screen selection:bg-slate-200 selection:text-slate-900 bg-white flex flex-col">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
