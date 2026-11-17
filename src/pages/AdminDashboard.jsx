import React, { useState } from 'react';
import { Trash2, Plus, AlertCircle, CheckCircle2, Lock, User, Eye, EyeOff, ArrowRight, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

const AdminDashboard = () => {
    // Authentication State
    const [isLoggedIn, setIsLoggedIn] = useState(() => sessionStorage.getItem('msit_admin_auth') === 'true');
    const [adminId, setAdminId] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState('');

    // Dashboard State
    const [events, setEvents] = useState(() => {
        const storedEvents = localStorage.getItem('msit_events_v4') || localStorage.getItem('msit_events_v3') || localStorage.getItem('msit_events_v2') || localStorage.getItem('msit_events');
        if (storedEvents) return JSON.parse(storedEvents);
        const defaultEvents = [
            { id: 1, label: "NEWS", category: "News", title: "Department of CSE receives CSR Research Grant from Petronet LNG Ltd. for AI Center of Excellence", date: "MAR 02, 2026", link: "#", color: "border-blue-600" },
            { id: 2, label: "EVENT", category: "Events", title: "MSIT to Host 4th International Conference on Artificial Intelligence and Applications (ICAIA 2026)", date: "FEB 28, 2026", link: "#", color: "border-emerald-500" },
            { id: 3, label: "STORY", category: "Stories", title: "MSIT student team wins 1st Prize in Smart India Hackathon (SIH) under Ministry of AYUSH category", date: "FEB 15, 2026", link: "#", color: "border-purple-500" }
        ];
        localStorage.setItem('msit_events_v4', JSON.stringify(defaultEvents));
        localStorage.setItem('msit_events_v3', JSON.stringify(defaultEvents));
        localStorage.setItem('msit_events_v2', JSON.stringify(defaultEvents));
        localStorage.setItem('msit_events', JSON.stringify(defaultEvents));
        return defaultEvents;
    });
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [link, setLink] = useState('');
    const [type, setType] = useState('NEWS');
    
    // Detailed News/Event fields
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [bgImage, setBgImage] = useState('');
    
    // PDF Attachments state
    const [attachmentsList, setAttachmentsList] = useState([]);
    const [attName, setAttName] = useState('');
    const [attSize, setAttSize] = useState('');
    
    // Related Links state
    const [relatedLinksList, setRelatedLinksList] = useState([]);
    const [rLinkName, setRLinkName] = useState('');
    const [rLinkUrl, setRLinkUrl] = useState('');
    
    // Testimonials State
    const [testimonials, setTestimonials] = useState(() => {
        const storedTestimonials = localStorage.getItem('msit_testimonials_v2') || localStorage.getItem('msit_testimonials');
        if (storedTestimonials) return JSON.parse(storedTestimonials);
        const defaultTestimonials = [
            { id: 1, name: "Priya Sharma", year: "22", major: "Computer Science & Engineering", quote: "MSIT has shaped me into the professional I am today. The faculty mentorship, hands-on projects, and industry exposure prepared me exceptionally well for my career at Google.", company: "Google", image: "/priya-sharma.webp" },
            { id: 2, name: "Rahul Verma", year: "23", major: "Information Technology", quote: "The rigorous academic environment at MSIT pushes you to be your absolute best. I was able to participate in cutting-edge research and hackathons that gave me the edge I needed for my role at Microsoft.", company: "Microsoft", image: "/rahul-verma.webp" },
            { id: 3, name: "Ananya Iyer", year: "21", major: "Electronics & Communication", quote: "I never realized how much potential I had until I stepped foot on the MSIT campus. The professors saw something in me and nurtured my skills in chip design and embedded systems.", company: "Apple", image: "/ananya-iyer.webp" }
        ];
        localStorage.setItem('msit_testimonials_v2', JSON.stringify(defaultTestimonials));
        localStorage.setItem('msit_testimonials', JSON.stringify(defaultTestimonials));
        return defaultTestimonials;
    });
    const [tName, setTName] = useState('');
    const [tYear, setTYear] = useState('');
    const [tMajor, setTMajor] = useState('');
    const [tQuote, setTQuote] = useState('');
    const [tCompany, setTCompany] = useState('');
    const [tImage, setTImage] = useState('');

    // Highlights State
    const [highlights, setHighlights] = useState(() => {
        const storedHighlights = localStorage.getItem('msit_highlights');
        if (storedHighlights) return JSON.parse(storedHighlights);
        const defaultHighlights = [
            { id: 1, image: "/campus/main-academic-building.webp", quote: "Ranked among the Top Engineering Colleges in Delhi-NCR by NIRF / Times Engineering Survey.", source: "Times Engineering Ranking" },
            { id: 2, image: "/campus/central-library-hall.webp", quote: "Accredited with 'A' Grade for institutional quality and academic governance.", source: "National Assessment and Accreditation Council (NAAC)" },
            { id: 3, image: "/campus/student-gathering-courtyard.webp", quote: "B.Tech programs in CSE, IT, ECE, and EEE accredited for outcome-based education.", source: "National Board of Accreditation (NBA)" }
        ];
        localStorage.setItem('msit_highlights', JSON.stringify(defaultHighlights));
        return defaultHighlights;
    });
    const [hQuote, setHQuote] = useState('');
    const [hSource, setHSource] = useState('');
    const [hImage, setHImage] = useState('');

    const [status, setStatus] = useState(null);



    const handleLogin = (e) => {
        e.preventDefault();
        const validId = import.meta.env.VITE_ADMIN_ID || 'msit admin';
        const validPass = import.meta.env.VITE_ADMIN_PASS || 'admin982';
        if (adminId.trim().toLowerCase() === validId.trim().toLowerCase() && password === validPass) {
            setIsLoggedIn(true);
            sessionStorage.setItem('msit_admin_auth', 'true');
            setLoginError('');
        } else {
            setLoginError('Invalid Admin ID or Password.');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        sessionStorage.removeItem('msit_admin_auth');
        setAdminId('');
        setPassword('');
    };

    const saveEvents = (newEvents) => {
        setEvents(newEvents);
        localStorage.setItem('msit_events_v4', JSON.stringify(newEvents));
        localStorage.setItem('msit_events_v3', JSON.stringify(newEvents));
        localStorage.setItem('msit_events_v2', JSON.stringify(newEvents));
        localStorage.setItem('msit_events', JSON.stringify(newEvents));
    };

    const saveTestimonials = (newTestimonials) => {
        setTestimonials(newTestimonials);
        localStorage.setItem('msit_testimonials_v2', JSON.stringify(newTestimonials));
        localStorage.setItem('msit_testimonials', JSON.stringify(newTestimonials));
    };

    const handleImageUpload = (file, setter) => {
        if (!file) return;
        
        // Basic check for file size (localStorage is limited)
        if (file.size > 1024 * 1024) { // 1MB limit for safety
            setStatus({ type: 'error', message: 'Image too large. Please use a file smaller than 1MB.' });
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            setter(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleAddEvent = (e) => {
        e.preventDefault();

        let color = "border-blue-600";
        if (type === "EVENT") color = "border-emerald-500";
        if (type === "STORY") color = "border-purple-500";
        if (type === "ACADEMICS") color = "border-indigo-600";
        if (type === "ADMISSIONS") color = "border-amber-600";
        if (type === "PLACEMENTS") color = "border-rose-600";
        if (type === "NOTICES") color = "border-sky-600";
        if (type === "RESEARCH") color = "border-teal-600";

        const category = type === "EVENT" ? "Events" : type === "STORY" ? "Stories" : type === "NEWS" ? "News" : type.charAt(0) + type.slice(1).toLowerCase();

        const newEvent = {
            id: Date.now(),
            label: type,
            category,
            title,
            date,
            link: link || "#",
            color,
            summary: summary || title,
            content: content || `<p class="mb-6">${title}</p>`,
            bgImage: bgImage || "/campus/main-academic-building.webp",
            attachments: attachmentsList,
            links: relatedLinksList
        };

        const updatedEvents = [newEvent, ...events];
        saveEvents(updatedEvents);

        // Reset form
        setTitle('');
        setDate('');
        setLink('');
        setSummary('');
        setContent('');
        setBgImage('');
        setAttachmentsList([]);
        setRelatedLinksList([]);
        setStatus({ type: 'success', message: 'Event/Article published successfully!' });
        setTimeout(() => setStatus(null), 3000);
    };

    const handleDeleteEvent = (id) => {
        const updatedEvents = events.filter(ev => ev.id !== id);
        saveEvents(updatedEvents);
        setStatus({ type: 'success', message: 'Event removed.' });
        setTimeout(() => setStatus(null), 3000);
    };

    const handleAddTestimonial = (e) => {
        e.preventDefault();

        const newTestimonial = {
            id: Date.now(),
            name: tName,
            year: tYear,
            major: tMajor,
            quote: tQuote,
            company: tCompany,
            image: tImage || "/priya-sharma.webp" // Default if empty
        };

        const updatedTestimonials = [newTestimonial, ...testimonials];
        saveTestimonials(updatedTestimonials);

        // Reset form
        setTName('');
        setTYear('');
        setTMajor('');
        setTQuote('');
        setTCompany('');
        setTImage('');
        setStatus({ type: 'success', message: 'Testimonial added successfully!' });
        setTimeout(() => setStatus(null), 3000);
    };

    const handleDeleteTestimonial = (id) => {
        const updatedTestimonials = testimonials.filter(t => t.id !== id);
        saveTestimonials(updatedTestimonials);
        setStatus({ type: 'success', message: 'Testimonial removed.' });
        setTimeout(() => setStatus(null), 3000);
    };

    const saveHighlights = (newHighlights) => {
        setHighlights(newHighlights);
        localStorage.setItem('msit_highlights', JSON.stringify(newHighlights));
    };

    const handleAddHighlight = (e) => {
        e.preventDefault();

        const newHighlight = {
            id: Date.now(),
            quote: hQuote,
            source: hSource,
            image: hImage || "/campus-lab.webp"
        };

        const updatedHighlights = [newHighlight, ...highlights];
        saveHighlights(updatedHighlights);

        // Reset form
        setHQuote('');
        setHSource('');
        setHImage('');
        setStatus({ type: 'success', message: 'Highlight added successfully!' });
        setTimeout(() => setStatus(null), 3000);
    };

    const handleDeleteHighlight = (id) => {
        const updatedHighlights = highlights.filter(h => h.id !== id);
        saveHighlights(updatedHighlights);
        setStatus({ type: 'success', message: 'Highlight removed.' });
        setTimeout(() => setStatus(null), 3000);
    };



    // -------------------------------------------------------------
    // LOGIN RENDERER
    // -------------------------------------------------------------
    if (!isLoggedIn) {
        return (
            <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 overflow-hidden bg-[#040d1e]">
                <SEO title="MSIT Admin Access" description="Sign in to manage the Maharaja Surajmal Institute of Technology (MSIT) website content." canonicalPath="/admin" />

                {/* Night-tinted Campus Backdrop */}
                <img
                    src="/campus/campus-side-avenue.webp"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02] select-none pointer-events-none brightness-[0.36] contrast-[1.12] saturate-[0.3]"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            'radial-gradient(circle at 28% 18%, rgba(29, 78, 216, 0.36) 0%, rgba(7, 19, 44, 0.84) 55%, rgba(3, 9, 23, 0.94) 100%)',
                    }}
                />

                {/* Subtle Bottom-Right Architectural Ribbon Accent */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-tl-[100%] border-t border-l border-blue-400/25 bg-gradient-to-tl from-[#0c2d6b]/65 via-[#0a214e]/35 to-transparent"
                />

                {/* Frosted Glassmorphism Card */}
                <div
                    className="relative z-10 w-full max-w-[440px] rounded-[28px] overflow-hidden border border-white/20 shadow-[0_32px_80px_rgba(2,6,23,0.78),inset_0_1px_1px_rgba(255,255,255,0.28)] backdrop-blur-2xl"
                    style={{
                        background:
                            'linear-gradient(155deg, rgba(26, 68, 148, 0.56) 0%, rgba(12, 29, 64, 0.72) 48%, rgba(8, 19, 42, 0.84) 100%)',
                    }}
                >
                    {/* Top-Left Specular Glass Highlight */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full opacity-55"
                        style={{
                            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.35) 0%, transparent 70%)',
                        }}
                    />

                    <div className="relative px-7 pt-9 pb-7 sm:px-10 sm:pt-10 sm:pb-8">
                        {/* Monochrome White Crest Emblem */}
                        <div className="flex justify-center mb-5">
                            <img
                                src="/msit-logo.webp"
                                alt="Maharaja Surajmal Institute of Technology Crest"
                                className="w-24 h-24 object-contain select-none brightness-0 invert opacity-95 drop-shadow-[0_4px_16px_rgba(255,255,255,0.14)]"
                            />
                        </div>

                        {/* Heading & Subtitle */}
                        <h1 className="font-sans text-[28px] sm:text-[31px] tracking-tight text-center text-white leading-tight mb-2">
                            <span className="font-extrabold">MSIT</span>{' '}
                            <span className="font-normal text-white/95">Admin Access</span>
                        </h1>
                        <p className="text-center text-slate-300/85 text-sm font-normal mb-7">
                            Sign in to manage the MSIT website content
                        </p>

                        {loginError && (
                            <div
                                role="alert"
                                aria-live="polite"
                                className="mb-5 px-4 py-3 rounded-xl bg-red-500/15 border border-red-400/35 text-red-100 text-xs sm:text-sm font-medium flex items-center justify-center gap-2 text-center"
                            >
                                <AlertCircle className="w-4 h-4 text-red-300 shrink-0" />
                                <span>{loginError}</span>
                            </div>
                        )}

                        <form onSubmit={handleLogin} className="space-y-5" noValidate={false}>
                            <div>
                                <label
                                    htmlFor="admin-id"
                                    className="flex items-center gap-2 text-sm font-medium text-white/90 mb-2 cursor-pointer"
                                >
                                    <User className="w-4 h-4 text-slate-200/85" strokeWidth={1.8} />
                                    <span>Admin ID</span>
                                </label>
                                <input
                                    id="admin-id"
                                    name="username"
                                    type="text"
                                    required
                                    autoComplete="username"
                                    autoCorrect="off"
                                    autoCapitalize="none"
                                    spellCheck={false}
                                    enterKeyHint="next"
                                    className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-white/20 bg-slate-900/45 text-white text-base placeholder:text-slate-300/55 shadow-[inset_0_1px_2px_rgba(0,0,0,0.35)] focus:border-blue-400/80 focus:bg-slate-900/65 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 transition-colors"
                                    placeholder="Enter Admin ID"
                                    value={adminId}
                                    onChange={(e) => {
                                        setAdminId(e.target.value);
                                        if (loginError) setLoginError('');
                                    }}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="admin-password"
                                    className="flex items-center gap-2 text-sm font-medium text-white/90 mb-2 cursor-pointer"
                                >
                                    <Lock className="w-4 h-4 text-slate-200/85" strokeWidth={1.8} />
                                    <span>Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        id="admin-password"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                        autoComplete="current-password"
                                        enterKeyHint="done"
                                        className="w-full min-h-[48px] pl-4 pr-12 py-3 rounded-xl border border-white/20 bg-slate-900/45 text-white text-base placeholder:text-slate-300/60 shadow-[inset_0_1px_2px_rgba(0,0,0,0.35)] focus:border-blue-400/80 focus:bg-slate-900/65 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 transition-colors"
                                        placeholder="•••••••"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            if (loginError) setLoginError('');
                                        }}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                                        aria-pressed={showPassword}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg flex items-center justify-center text-slate-300/75 hover:text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-blue-400 transition-colors cursor-pointer"
                                    >
                                        {showPassword ? (
                                            <Eye className="w-4 h-4" strokeWidth={1.8} />
                                        ) : (
                                            <EyeOff className="w-4 h-4" strokeWidth={1.8} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full min-h-[50px] mt-2 py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#1d63ff] via-[#1354e8] to-[#0c43c4] hover:from-[#296eff] hover:to-[#1249ce] text-white font-semibold text-base shadow-[0_10px_28px_rgba(19,84,232,0.45),inset_0_1px_0_rgba(255,255,255,0.28)] flex items-center justify-center gap-2.5 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
                            >
                                <span>Login to Dashboard</span>
                                <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                            </button>
                        </form>

                        {/* Secure Admin Portal Divider */}
                        <div className="mt-7 flex items-center gap-3">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-white/25" />
                            <div className="flex items-center gap-1.5 text-xs text-slate-300/80 font-normal">
                                <ShieldCheck className="w-4 h-4 text-slate-300/85" strokeWidth={1.75} />
                                <span>Secure Admin Portal</span>
                            </div>
                            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/20 to-white/25" />
                        </div>
                    </div>

                    {/* Translucent Frosted Footer Bar */}
                    <div className="bg-white/[0.06] border-t border-white/15 py-3.5 px-6 text-center text-xs text-slate-200/80 font-normal">
                        Maharaja Surajmal Institute of Technology (MSIT)
                    </div>
                </div>
            </div>
        );
    }

    // -------------------------------------------------------------
    // DASHBOARD RENDERER
    // -------------------------------------------------------------
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <SEO title="Admin Dashboard" description="Access the MSIT secure administrative dashboard to manage website content, news, events, and campus stories for Maharaja Surajmal Institute of Technology." canonicalPath="/admin" />
            <div className="max-w-4xl mx-auto space-y-8">

                <div className="bg-white rounded-2xl shadow-card border border-slate-200 p-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 pb-8 mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 mb-2">Website Content Manager</h1>
                            <p className="text-slate-500">Add or remove news, events, and stories directly from the homepage.</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="mt-4 sm:mt-0 px-4 py-2 text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center cursor-pointer"
                        >
                            <Lock className="w-4 h-4 mr-2" /> Lock / Logout
                        </button>
                    </div>

                    {status && (
                        <div className={`mb-6 p-4 rounded-lg flex items-center ${status.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                            {status.type === 'success' ? <CheckCircle2 className="w-5 h-5 mr-3" /> : <AlertCircle className="w-5 h-5 mr-3" />}
                            <span className="font-medium">{status.message}</span>
                        </div>
                    )}

                    <form onSubmit={handleAddEvent} className="space-y-6 bg-slate-50 p-6 rounded-xl border border-slate-100 mb-10">
                        <h2 className="text-xl font-semibold text-slate-800 flex items-center">
                            <Plus className="w-5 h-5 mr-2 text-blue-600" /> Create New Content
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Content Type</label>
                                <select
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                >
                                    <option value="NEWS">News</option>
                                    <option value="EVENT">Event</option>
                                    <option value="STORY">Story</option>
                                    <option value="ACADEMICS">Academics</option>
                                    <option value="ADMISSIONS">Admissions</option>
                                    <option value="PLACEMENTS">Placements</option>
                                    <option value="NOTICES">Notices</option>
                                    <option value="RESEARCH">Research</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Display Date</label>
                                <input
                                    type="text"
                                    placeholder="e.g. MAY 18, 2026"
                                    required
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-medium text-slate-700">Headline / Title</label>
                                <input
                                    type="text"
                                    placeholder="Enter the title for the card"
                                    required
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-medium text-slate-700">Target Link URL / External Redirection (Optional)</label>
                                <input
                                    type="text"
                                    placeholder="https://..."
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-medium text-slate-700">Background Image URL (Optional)</label>
                                <input
                                    type="text"
                                    placeholder="/campus/main-academic-building.webp or leave blank for default"
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    value={bgImage}
                                    onChange={(e) => setBgImage(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-medium text-slate-700">Short Summary</label>
                                <input
                                    type="text"
                                    placeholder="Brief 1-sentence summary of the news/event"
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    value={summary}
                                    onChange={(e) => setSummary(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-medium text-slate-700">Full Article Content (HTML/Plain Text)</label>
                                <textarea
                                    rows="5"
                                    placeholder="Enter full paragraphs, e.g. <p class='mb-4'>Paragraph content...</p>"
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none font-mono text-xs"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                />
                            </div>

                            {/* Dynamic PDF Attachment Manager */}
                            <div className="p-4 bg-white rounded-xl border border-slate-200 md:col-span-2 space-y-4">
                                <h3 className="text-sm font-bold text-slate-800">Add PDF Attachments</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <input 
                                        type="text" 
                                        placeholder="Document Name (e.g. Schedule.pdf)" 
                                        className="px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white text-slate-900 outline-none"
                                        value={attName} 
                                        onChange={(e) => setAttName(e.target.value)}
                                    />
                                    <input 
                                        type="text" 
                                        placeholder="Size (e.g. 1.2 MB)" 
                                        className="px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white text-slate-900 outline-none"
                                        value={attSize} 
                                        onChange={(e) => setAttSize(e.target.value)}
                                    />
                                    <button 
                                        type="button"
                                        onClick={() => {
                                            if (attName.trim()) {
                                                setAttachmentsList([...attachmentsList, { name: attName, size: attSize || '1.0 MB', url: '#' }]);
                                                setAttName('');
                                                setAttSize('');
                                            }
                                        }}
                                        className="px-4 py-2 text-xs bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                                    >
                                        Add Attachment
                                    </button>
                                </div>

                                {attachmentsList.length > 0 && (
                                    <div className="pt-2 space-y-1.5">
                                        {attachmentsList.map((item, index) => (
                                            <div key={index} className="flex justify-between items-center bg-slate-50 p-2 rounded border border-slate-100 text-xs">
                                                <span className="font-semibold text-slate-700">{item.name} ({item.size})</span>
                                                <button 
                                                    type="button" 
                                                    onClick={() => setAttachmentsList(attachmentsList.filter((_, i) => i !== index))}
                                                    className="text-red-500 font-bold hover:underline cursor-pointer"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Dynamic Related Links Manager */}
                            <div className="p-4 bg-white rounded-xl border border-slate-200 md:col-span-2 space-y-4">
                                <h3 className="text-sm font-bold text-slate-800">Add Related Links</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <input 
                                        type="text" 
                                        placeholder="Link Text (e.g. Registration Portal)" 
                                        className="px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white text-slate-900 outline-none"
                                        value={rLinkName} 
                                        onChange={(e) => setRLinkName(e.target.value)}
                                    />
                                    <input 
                                        type="text" 
                                        placeholder="URL (e.g. https://...)" 
                                        className="px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white text-slate-900 outline-none"
                                        value={rLinkUrl} 
                                        onChange={(e) => setRLinkUrl(e.target.value)}
                                    />
                                    <button 
                                        type="button"
                                        onClick={() => {
                                            if (rLinkName.trim() && rLinkUrl.trim()) {
                                                setRelatedLinksList([...relatedLinksList, { name: rLinkName, url: rLinkUrl }]);
                                                setRLinkName('');
                                                setRLinkUrl('');
                                            }
                                        }}
                                        className="px-4 py-2 text-xs bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                                    >
                                        Add Link
                                    </button>
                                </div>

                                {relatedLinksList.length > 0 && (
                                    <div className="pt-2 space-y-1.5">
                                        {relatedLinksList.map((item, index) => (
                                            <div key={index} className="flex justify-between items-center bg-slate-50 p-2 rounded border border-slate-100 text-xs">
                                                <span className="font-semibold text-slate-700">{item.name} → {item.url}</span>
                                                <button 
                                                    type="button" 
                                                    onClick={() => setRelatedLinksList(relatedLinksList.filter((_, i) => i !== index))}
                                                    className="text-red-500 font-bold hover:underline cursor-pointer"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <button type="submit" className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors cursor-pointer">
                            Publish to Homepage
                        </button>
                    </form>

                    <div>
                        <h2 className="text-xl font-semibold text-slate-800 mb-6 border-b border-slate-100 pb-4">Manage Current Content</h2>

                        <div className="space-y-4">
                            {events.length === 0 ? (
                                <p className="text-slate-500 italic">No events found. Create one above.</p>
                            ) : (
                                events.map(ev => (
                                    <div key={ev.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                                        <div className="mb-4 sm:mb-0 pr-4">
                                            <div className="flex items-center gap-3 mb-1">
                                                <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 bg-slate-200 text-slate-700 rounded">{ev.label}</span>
                                                <span className="text-sm text-slate-500 font-medium">{ev.date}</span>
                                            </div>
                                            <h3 className="text-slate-900 font-semibold">{ev.title}</h3>
                                            <a href={ev.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline mt-1 inline-block truncate max-w-xs">{ev.link !== "#" ? ev.link : "No active link"}</a>
                                        </div>

                                        <button
                                            onClick={() => handleDeleteEvent(ev.id)}
                                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors flex items-center shrink-0 cursor-pointer"
                                            title="Delete this item"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                </div>

                {/* TESTIMONIALS MANAGER */}
                <div className="bg-white rounded-2xl shadow-card border border-slate-200 p-8">
                    <div className="border-b border-slate-100 pb-8 mb-8">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Testimonials Manager</h2>
                        <p className="text-slate-500">Manage alumni testimonials that appear in the homepage carousel.</p>
                    </div>

                    <form onSubmit={handleAddTestimonial} className="space-y-6 bg-slate-50 p-6 rounded-xl border border-slate-100 mb-10">
                        <h3 className="text-xl font-semibold text-slate-800 flex items-center">
                            <Plus className="w-5 h-5 mr-2 text-blue-600" /> Add New Testimonial
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Rahul Verma"
                                    required
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={tName}
                                    onChange={(e) => setTName(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Batch / Graduation Year</label>
                                <input
                                    type="text"
                                    placeholder="e.g. 23"
                                    required
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={tYear}
                                    onChange={(e) => setTYear(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Department / Major</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Information Technology"
                                    required
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={tMajor}
                                    onChange={(e) => setTMajor(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Company</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Microsoft"
                                    required
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={tCompany}
                                    onChange={(e) => setTCompany(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-medium text-slate-700">Profile Photo (Local Upload)</label>
                                <div className="flex items-center gap-4">
                                    <div className="flex-grow">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                            onChange={(e) => handleImageUpload(e.target.files[0], setTImage)}
                                        />
                                    </div>
                                    {tImage && (
                                        <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200">
                                            <img src={tImage} alt="Testimonial profile photo preview" className="w-full h-full object-cover" />
                                        </div>
                                    )}
                                </div>
                                <p className="text-xs text-slate-400 mt-1 italic">Tip: Use a small square image (under 1MB) for best performance.</p>
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-medium text-slate-700">Quote</label>
                                <textarea
                                    placeholder="Enter the testimonial quote here..."
                                    required
                                    rows="3"
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={tQuote}
                                    onChange={(e) => setTQuote(e.target.value)}
                                />
                            </div>
                        </div>

                        <button type="submit" className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors cursor-pointer">
                            Add Testimonial
                        </button>
                    </form>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-800 mb-4 border-b border-slate-100 pb-2">Manage Testimonials</h3>
                        {testimonials.length === 0 ? (
                            <p className="text-slate-500 italic">No testimonials found.</p>
                        ) : (
                            testimonials.map(t => (
                                <div key={t.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                                    <div className="flex items-center gap-4 flex-grow mb-4 sm:mb-0">
                                        <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                                            <img src={t.image} alt={`${t.name} profile picture`} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="flex items-center gap-2">
                                                <h4 className="text-slate-900 font-bold truncate">{t.name}</h4>
                                                <span className="text-xs text-slate-500">'{t.year}</span>
                                            </div>
                                            <p className="text-sm text-slate-600 truncate max-w-md">{t.company} • {t.major}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleDeleteTestimonial(t.id)}
                                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors flex items-center shrink-0 cursor-pointer"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* HIGHLIGHTS MANAGER */}
                <div className="bg-white rounded-2xl shadow-card border border-slate-200 p-8">
                    <div className="border-b border-slate-100 pb-8 mb-8">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Highlights Manager</h2>
                        <p className="text-slate-500">Manage the "MSIT Difference" carousel slides, quotes, and background images.</p>
                    </div>

                    <form onSubmit={handleAddHighlight} className="space-y-6 bg-slate-50 p-6 rounded-xl border border-slate-100 mb-10">
                        <h3 className="text-xl font-semibold text-slate-800 flex items-center">
                            <Plus className="w-5 h-5 mr-2 text-blue-600" /> Add New Slide
                        </h3>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Source Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Times Engineering Survey / NAAC"
                                    required
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={hSource}
                                    onChange={(e) => setHSource(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Background Image (Local Upload)</label>
                                <div className="flex items-center gap-4">
                                    <div className="flex-grow">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                            onChange={(e) => handleImageUpload(e.target.files[0], setHImage)}
                                        />
                                    </div>
                                    {hImage && (
                                        <div className="w-20 h-10 rounded-lg overflow-hidden border border-slate-200 shadow-card">
                                            <img src={hImage} alt="Highlight background image preview" className="w-full h-full object-cover" />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Impactful Quote</label>
                                <textarea
                                    placeholder="Enter the highlight quote here..."
                                    required
                                    rows="3"
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={hQuote}
                                    onChange={(e) => setHQuote(e.target.value)}
                                />
                            </div>
                        </div>

                        <button type="submit" className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors cursor-pointer">
                            Add Slide to Carousel
                        </button>
                    </form>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-800 mb-4 border-b border-slate-100 pb-2">Manage Current Slides</h3>
                        {highlights.length === 0 ? (
                            <p className="text-slate-500 italic">No highlights found.</p>
                        ) : (
                            highlights.map(h => (
                                <div key={h.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                                    <div className="flex items-center gap-4 flex-grow mb-4 sm:mb-0">
                                        <div className="w-20 h-12 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                                            <img src={h.image} alt={`Highlight image from ${h.source}`} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="min-w-0">
                                            <h4 className="text-slate-900 font-bold truncate">{h.source}</h4>
                                            <p className="text-sm text-slate-600 truncate max-w-md italic">"{h.quote}"</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleDeleteHighlight(h.id)}
                                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors flex items-center shrink-0 cursor-pointer"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>



                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-yellow-800 text-sm">
                    <strong>Note for Developer Environments:</strong> Since this site does not currently have a backend database connected (like Firebase, Postgres, or MongoDB), these events are saved in your browser's Local Storage. This allows you to manage the frontend dynamically. To deploy this globally so everyone can see the changes and updates without GitHub, we can connect a cloud database later.
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
