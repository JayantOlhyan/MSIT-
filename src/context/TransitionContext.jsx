/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useRef, useCallback, useLayoutEffect, useEffect } from 'react';
import PageTransitionLoader from '../components/PageTransitionLoader';

const TransitionContext = createContext({
    isLoading: false,
    showLoader: () => {},
    hideLoader: () => {},
    withLoader: async (_fn) => {}
});

export const usePageTransition = () => useContext(TransitionContext);

export const TransitionProvider = ({ children }) => {
    const [isRendered, setIsRendered] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    const [message, setMessage] = useState('Loading Experience...');
    
    // Ref-based counter to prevent state desync across rapid unmounts/mounts
    const activeCountRef = useRef(0);
    const exitTimeoutRef = useRef(null);

    const showLoader = useCallback((customMessage = 'Loading Experience...') => {
        // If the full startup opening animation is running on the homepage, avoid redundant transition overlay
        if (typeof window !== 'undefined') {
            const isFirstHomeVisit = (window.location.pathname === '/' || window.location.pathname === '') && !sessionStorage.getItem('msit-intro-played');
            if (isFirstHomeVisit) return;
        }

        activeCountRef.current += 1;
        if (customMessage) setMessage(customMessage);

        if (exitTimeoutRef.current) {
            clearTimeout(exitTimeoutRef.current);
            exitTimeoutRef.current = null;
        }

        setIsExiting(false);
        setIsRendered(true);
    }, []);

    const hideLoader = useCallback(() => {
        activeCountRef.current = Math.max(0, activeCountRef.current - 1);

        if (activeCountRef.current === 0) {
            // Give a micro-buffer so rapid route swaps do not flash
            setIsExiting(true);
        }
    }, []);

    const handleExitComplete = useCallback(() => {
        if (activeCountRef.current === 0) {
            setIsRendered(false);
            setIsExiting(false);
        }
    }, []);

    const withLoader = useCallback(async (asyncFn, customMessage = 'Loading...') => {
        showLoader(customMessage);
        try {
            return await asyncFn();
        } finally {
            hideLoader();
        }
    }, [showLoader, hideLoader]);

    // Safety timeout to prevent any permanent lock
    useEffect(() => {
        if (isRendered && !isExiting) {
            const safetyTimer = setTimeout(() => {
                if (activeCountRef.current > 0) {
                    console.warn('[TransitionLoader] Safety timeout triggered after 12s');
                    activeCountRef.current = 0;
                    setIsExiting(true);
                }
            }, 12000);
            return () => clearTimeout(safetyTimer);
        }
    }, [isRendered, isExiting]);

    return (
        <TransitionContext.Provider value={{
            isLoading: isRendered && !isExiting,
            showLoader,
            hideLoader,
            withLoader
        }}>
            {children}
            {isRendered && (
                <PageTransitionLoader 
                    message={message} 
                    isExiting={isExiting} 
                    onExitComplete={handleExitComplete} 
                />
            )}
        </TransitionContext.Provider>
    );
};

/**
 * Lightweight component that mounts inside React Suspense fallback.
 * It synchronously activates the global transition overlay on mount
 * and triggers smooth fade-out upon unmount when the suspended chunk is ready.
 */
export const SuspenseFallbackHandler = ({ message = 'Loading Experience...' }) => {
    const { showLoader, hideLoader } = usePageTransition();

    useLayoutEffect(() => {
        showLoader(message);
        return () => {
            hideLoader();
        };
    }, [showLoader, hideLoader, message]);

    return null;
};
