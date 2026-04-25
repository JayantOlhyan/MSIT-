import React, { useState, useEffect } from 'react';
import { Trash2, Plus, AlertCircle, CheckCircle2, Lock } from 'lucide-react';
import SEO from '../components/SEO';

const AdminDashboard = () => {
    // Authentication State
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [adminId, setAdminId] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    // Dashboard State
    const [events, setEvents] = useState([]);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [link, setLink] = useState('');
    const [type, setType] = useState('NEWS');
    
    // Testimonials State
    const [testimonials, setTestimonials] = useState([]);
    const [tName, setTName] = useState('');
    const [tYear, setTYear] = useState('');
    const [tMajor, setTMajor] = useState('');
    const [tQuote, setTQuote] = useState('');
    const [tCompany, setTCompany] = useState('');
    const [tImage, setTImage] = useState('');

    // Highlights State
    const [highlights, setHighlights] = useState([]);
    const [hQuote, setHQuote] = useState('');
    const [hSource, setHSource] = useState('');
    const [hImage, setHImage] = useState('');

    
    const [status, setStatus] = useState(null);


    // Initial default data if storage is empty
    const defaultEvents = [
        { id: 1, label: "NEWS", title: "MSIT receives $12M grant to establish cutting-edge AI & Quantum Labs", date: "MAR 02, 2026", link: "#", color: "border-blue-600" },
        { id: 2, label: "EVENT", title: "Global Web3 & Blockchain Summit to be hosted at MSIT Campus", date: "FEB 28, 2026", link: "#", color: "border-emerald-500" },
        { id: 3, label: "STORY", title: "From Campus to Cupertino: How 5 MSIT grads secured roles at Apple", date: "FEB 15, 2026", link: "#", color: "border-purple-500" }
    ];

    useEffect(() => {
        // Load events from storage or use defaults
        const storedEvents = localStorage.getItem('msit_events');
        if (storedEvents) {
            setEvents(JSON.parse(storedEvents));
        } else {
            setEvents(defaultEvents);
            localStorage.setItem('msit_events', JSON.stringify(defaultEvents));
        }

        // Load testimonials from storage
        const storedTestimonials = localStorage.getItem('msit_testimonials');
        if (storedTestimonials) {
            setTestimonials(JSON.parse(storedTestimonials));
        } else {
            const defaultTestimonials = [
                { id: 1, name: "Priya Sharma", year: "22", major: "Computer Science & Engineering", quote: "MSIT has shaped me into the professional I am today. The faculty mentorship, hands-on projects, and industry exposure prepared me exceptionally well for my career at Google.", company: "Google", image: "/priya-sharma.webp" },
                { id: 2, name: "Rahul Verma", year: "23", major: "Information Technology", quote: "The rigorous academic environment at MSIT pushes you to be your absolute best. I was able to participate in cutting-edge research and hackathons that gave me the edge I needed for my role at Microsoft.", company: "Microsoft", image: "/rahul-verma.webp" },
                { id: 3, name: "Ananya Iyer", year: "21", major: "Electronics & Communication", quote: "I never realized how much potential I had until I stepped foot on the MSIT campus. The professors saw something in me and nurtured my skills in chip design and embedded systems.", company: "Apple", image: "/ananya-iyer.webp" }
            ];
            setTestimonials(defaultTestimonials);
            localStorage.setItem('msit_testimonials', JSON.stringify(defaultTestimonials));
        }

        // Load highlights from storage
        const storedHighlights = localStorage.getItem('msit_highlights');
        if (storedHighlights) {
            setHighlights(JSON.parse(storedHighlights));
        } else {
            const defaultHighlights = [
                { id: 1, image: "/campus-lab.webp", quote: "The facilities here rival those of top Silicon Valley tech companies.", source: "TechCrunch University Review" },
                { id: 2, image: "/campus-library.webp", quote: "Innovation is at the heart of MSIT's curriculum, fostering a true research spirit.", source: "MIT Technology Review" },
                { id: 3, image: "/campus-excellence.webp", quote: "A breeding ground for the next generation of global technology leaders.", source: "Forbes Education" }
            ];
            setHighlights(defaultHighlights);
            localStorage.setItem('msit_highlights', JSON.stringify(defaultHighlights));
        }
    }, []);



    const handleLogin = (e) => {
        e.preventDefault();
        if (adminId === 'msit admin' && password === 'admin982') {
            setIsLoggedIn(true);
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
        localStorage.setItem('msit_events', JSON.stringify(newEvents));
    };

    const saveTestimonials = (newTestimonials) => {
        setTestimonials(newTestimonials);
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

        const newEvent = {
            id: Date.now(),
            label: type,
            title,
            date,
            link: link || "#",
            color
        };

        const updatedEvents = [newEvent, ...events];
        saveEvents(updatedEvents);

        // Reset form
        setTitle('');
        setDate('');
        setLink('');
        setStatus({ type: 'success', message: 'Event added successfully!' });
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
            <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-card overflow-hidden max-w-md w-full animate-fade-in relative">
                    <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
                    <div className="p-8">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                <Lock className="w-8 h-8 text-blue-600" />
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold text-center text-slate-900 mb-2">Admin Access</h1>
                        <p className="text-center text-slate-500 mb-8 text-sm">Sign in to manage MSIT website content</p>

                        {loginError && (
                            <div className="mb-6 p-3 bg-red-50 text-red-600 text-sm font-medium rounded-lg text-center border border-red-100">
                                {loginError}
                            </div>
                        )}

                        <form onSubmit={handleLogin} className="space-y-5">
                            <div>
                                <label className="text-sm font-semibold text-slate-700 block mb-1.5">Admin ID</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
                                    placeholder="Enter Admin ID"
                                    value={adminId}
                                    onChange={(e) => setAdminId(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-slate-700 block mb-1.5">Password</label>
                                <input
                                    type="password"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors mt-2">
                                Login to Dashboard
                            </button>
                        </form>
                    </div>
                    <div className="bg-slate-50 p-4 text-center text-xs text-slate-500 border-t border-slate-100">
                        Maharaja Surajmal Institute of Technology - Secure Admin Portal
                    </div>
                </div>
            </div>
        );
    }

    // -------------------------------------------------------------
    // DASHBOARD RENDERER
    // -------------------------------------------------------------
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
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
                            className="mt-4 sm:mt-0 px-4 py-2 text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center"
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
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                >
                                    <option value="NEWS">News</option>
                                    <option value="EVENT">Event</option>
                                    <option value="STORY">Story</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Display Date</label>
                                <input
                                    type="text"
                                    placeholder="e.g. MAY 18, 2026"
                                    required
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
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
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-medium text-slate-700">Target Link URL (Optional)</label>
                                <input
                                    type="text"
                                    placeholder="https://..."
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                />
                            </div>
                        </div>

                        <button type="submit" className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
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
                                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors flex items-center shrink-0"
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
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
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
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
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
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
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
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
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
                                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
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
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={tQuote}
                                    onChange={(e) => setTQuote(e.target.value)}
                                />
                            </div>
                        </div>

                        <button type="submit" className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
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
                                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors flex items-center shrink-0"
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
                                    placeholder="e.g. MIT Technology Review"
                                    required
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
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
                                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
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
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={hQuote}
                                    onChange={(e) => setHQuote(e.target.value)}
                                />
                            </div>
                        </div>

                        <button type="submit" className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
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
                                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors flex items-center shrink-0"
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
