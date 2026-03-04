import React, { useState, useEffect } from 'react';
import { Trash2, Plus, AlertCircle, CheckCircle2, Lock } from 'lucide-react';

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

        // Remember login status in session
        if (sessionStorage.getItem('msit_admin_auth') === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        if (adminId === 'msit admin' && password === 'admin982') {
            setIsLoggedIn(true);
            setLoginError('');
            sessionStorage.setItem('msit_admin_auth', 'true');
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

    const handleDelete = (id) => {
        const updatedEvents = events.filter(ev => ev.id !== id);
        saveEvents(updatedEvents);
        setStatus({ type: 'success', message: 'Event removed.' });
        setTimeout(() => setStatus(null), 3000);
    };

    // -------------------------------------------------------------
    // LOGIN RENDERER
    // -------------------------------------------------------------
    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md w-full animate-fade-in relative">
                    <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
                    <div className="p-8">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                <Lock className="w-8 h-8 text-blue-600" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-center text-slate-900 mb-2">Admin Access</h2>
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
            <div className="max-w-4xl mx-auto space-y-8">

                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
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
                                                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-slate-200 text-slate-700 rounded">{ev.label}</span>
                                                <span className="text-sm text-slate-500 font-medium">{ev.date}</span>
                                            </div>
                                            <h3 className="text-slate-900 font-semibold">{ev.title}</h3>
                                            <a href={ev.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline mt-1 inline-block truncate max-w-xs">{ev.link !== "#" ? ev.link : "No active link"}</a>
                                        </div>

                                        <button
                                            onClick={() => handleDelete(ev.id)}
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

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-yellow-800 text-sm">
                    <strong>Note for Developer Environments:</strong> Since this site does not currently have a backend database connected (like Firebase, Postgres, or MongoDB), these events are saved in your browser's Local Storage. This allows you to manage the frontend dynamically. To deploy this globally so everyone can see the changes and updates without GitHub, we can connect a cloud database later.
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
