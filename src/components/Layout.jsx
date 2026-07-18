import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import AccessibilityModal from './AccessibilityModal';
import { Outlet, useLocation } from 'react-router-dom';
import OpeningAnimation from './OpeningAnimation';

const Layout = () => {
    const { pathname } = useLocation();

    // Check if the intro has played or if this is the first session visit to the homepage
    const [isIntroActive, setIsIntroActive] = useState(() => {
        const hasPlayed = sessionStorage.getItem('msit-intro-played');
        return pathname === '/' && !hasPlayed;
    });

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Handle subpage initial landings and class applications
    useEffect(() => {
        if (pathname !== '/') {
            // If user enters on any subpage, mark the intro as played to prevent it on back navigation
            sessionStorage.setItem('msit-intro-played', 'true');
        }

        if (isIntroActive) {
            document.body.classList.add('intro-active');
            document.body.style.overflow = 'hidden';
        } else {
            document.body.classList.remove('intro-active');
            document.body.style.overflow = '';
        }

        return () => {
            document.body.classList.remove('intro-active');
            document.body.style.overflow = '';
        };
    }, [isIntroActive, pathname]);

    const handleIntroComplete = () => {
        sessionStorage.setItem('msit-intro-played', 'true');
        setIsIntroActive(false);
    };

    return (
        <div className="font-sans text-slate-700 w-full min-h-screen selection:bg-slate-200 selection:text-slate-900 bg-white flex flex-col overflow-x-hidden">
            {isIntroActive && (
                <OpeningAnimation onComplete={handleIntroComplete} />
            )}
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
