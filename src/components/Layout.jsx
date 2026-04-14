import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import AccessibilityModal from './AccessibilityModal';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
    const { pathname } = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="font-sans text-slate-700 w-full min-h-screen selection:bg-slate-200 selection:text-slate-900 bg-white flex flex-col overflow-x-hidden">
            <Header />
            <main id="main-content" className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <BackToTop />
            <AccessibilityModal />
        </div>
    );
};

export default Layout;
