import React, { createContext, useContext, useState, useEffect } from 'react';

const AccessibilityContext = createContext();

export const useAccessibility = () => {
    const context = useContext(AccessibilityContext);
    if (!context) {
        throw new Error('useAccessibility must be used within an AccessibilityProvider');
    }
    return context;
};

export const AccessibilityProvider = ({ children }) => {
    // Initial state from localStorage or defaults
    const [settings, setSettings] = useState(() => {
        const saved = localStorage.getItem('msit-accessibility-settings');
        return saved ? JSON.parse(saved) : {
            focusHighlight: true,
            highContrast: false,
            reducedMotion: false,
            textScaling: 100 // Percentage
        };
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Persist settings to localStorage and apply classes to html element
    useEffect(() => {
        localStorage.setItem('msit-accessibility-settings', JSON.stringify(settings));
        
        const root = document.documentElement;
        
        // Apply classes
        if (settings.focusHighlight) root.classList.add('acc-focus-ring');
        else root.classList.remove('acc-focus-ring');
        
        if (settings.highContrast) root.classList.add('acc-high-contrast');
        else root.classList.remove('acc-high-contrast');
        
        if (settings.reducedMotion) root.classList.add('acc-reduced-motion');
        else root.classList.remove('acc-reduced-motion');
        
        // Handle text scaling
        root.style.fontSize = settings.textScaling === 100 ? '' : `${settings.textScaling}%`;
        
    }, [settings]);

    const toggleSetting = (key) => {
        setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const setTextScaling = (value) => {
        setSettings(prev => ({ ...prev, textScaling: value }));
    };

    return (
        <AccessibilityContext.Provider value={{ 
            settings, 
            toggleSetting, 
            setTextScaling, 
            isModalOpen, 
            setIsModalOpen 
        }}>
            {children}
        </AccessibilityContext.Provider>
    );
};
