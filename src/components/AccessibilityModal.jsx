import React from 'react';
import { X, Eye, EyeOff, Zap, ZapOff, Type, Move, MoveHorizontal, Check } from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';

const AccessibilityModal = () => {
    const { settings, toggleSetting, setTextScaling, isModalOpen, setIsModalOpen } = useAccessibility();

    if (!isModalOpen) return null;

    const toggles = [
        { 
            key: 'focusHighlight', 
            label: 'Keyboard Focus Rings', 
            desc: 'Show visual boxes around selected elements when using tab key.',
            icon: settings.focusHighlight ? Eye : EyeOff
        },
        { 
            key: 'highContrast', 
            label: 'High Contrast Mode', 
            desc: 'Maximize text legibility with high-contrast color mapping.',
            icon: Zap
        },
        { 
            key: 'reducedMotion', 
            label: 'Reduced Motion', 
            desc: 'Disable non-essential animations and transitions.',
            icon: MoveHorizontal
        }
    ];

    return (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-in fade-in duration-300"
            role="dialog"
            aria-modal="true"
            aria-labelledby="acc-title"
        >
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-slate-950/60 backdrop-blur-md" 
                onClick={() => setIsModalOpen(false)}
            />

            {/* Modal Content */}
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-5 duration-500">
                {/* Header */}
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                    <div>
                        <h2 id="acc-title" className="text-xl font-black text-slate-900 tracking-tight">Accessibility Settings</h2>
                        <p className="text-sm text-slate-500 font-medium">Customize your browsing experience</p>
                    </div>
                    <button 
                        onClick={() => setIsModalOpen(false)}
                        className="p-2 rounded-xl hover:bg-slate-100 text-slate-400 transition-colors"
                        aria-label="Close settings"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Settings Body */}
                <div className="p-6 space-y-6">
                    {/* Toggles */}
                    <div className="space-y-4">
                        {toggles.map((item) => (
                            <div 
                                key={item.key}
                                className={`p-4 rounded-2xl border transition-all duration-300 flex items-start justify-between gap-4 ${
                                    settings[item.key] ? 'bg-blue-50 border-blue-100 ring-1 ring-blue-100' : 'bg-slate-50 border-slate-100'
                                }`}
                            >
                                <div className="flex gap-4">
                                    <div className={`p-2 rounded-xl transition-colors ${settings[item.key] ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className={`text-sm font-bold tracking-tight mb-0.5 ${settings[item.key] ? 'text-blue-900' : 'text-slate-900'}`}>{item.label}</h3>
                                        <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-[240px]">{item.desc}</p>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => toggleSetting(item.key)}
                                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${settings[item.key] ? 'bg-blue-600' : 'bg-slate-200'}`}
                                    aria-pressed={settings[item.key]}
                                >
                                    <span 
                                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${settings[item.key] ? 'translate-x-5' : 'translate-x-0'}`} 
                                    />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Font Scaling Slider */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-slate-200 text-slate-500">
                                <Type className="w-5 h-5" />
                            </div>
                            <h3 className="text-sm font-bold text-slate-900 tracking-tight">Text Scaling</h3>
                        </div>
                        <div className="px-2">
                            <input 
                                type="range" 
                                min="80" 
                                max="150" 
                                value={settings.textScaling}
                                onChange={(e) => setTextScaling(parseInt(e.target.value))}
                                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 mb-2"
                            />
                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                                <span>Default (100%)</span>
                                <span className="text-blue-600">Current: {settings.textScaling}%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
                    <button 
                        onClick={() => setIsModalOpen(false)}
                        className="px-6 py-2.5 bg-slate-900 text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-lg hover:bg-slate-800 transition-all active:scale-95 flex items-center gap-2"
                    >
                        Save Preferences <Check className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AccessibilityModal;
