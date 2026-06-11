import React, { useState, useEffect } from 'react';
import { User, Lock, Eye, EyeOff, GraduationCap, ArrowRight, ShieldCheck, Mail, Phone, BookOpen, Clock, Activity, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SkeletonLoader from '../components/SkeletonLoader';

const StudentPortal = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [enrollment, setEnrollment] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState('student');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [dashboardLoading, setDashboardLoading] = useState(false);

    // Mock student data for successful login
    const studentData = {
        name: "Rahul Sharma",
        enrollment: "01115002722",
        course: "B.Tech (CSE)",
        semester: "6th Semester (3rd Year)",
        attendance: 78.4,
        subjects: [
            { code: "ETCS-302", name: "Compiler Design", attended: 32, total: 40 },
            { code: "ETCS-304", name: "Operating Systems", attended: 35, total: 42 },
            { code: "ETCS-306", name: "Computer Networks", attended: 28, total: 38 },
            { code: "ETCS-308", name: "Web Engineering", attended: 36, total: 44 },
            { code: "ETCS-310", name: "Artificial Intelligence", attended: 31, total: 40 }
        ],
        notices: [
            { date: "June 08, 2026", text: "Regular attendance update published for May." },
            { date: "June 02, 2026", text: "Date sheet for B.Tech End-Term Examinations 2026." },
            { date: "May 28, 2026", text: "Submission of medical leave certificates last date is June 15." }
        ]
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');

        if (!enrollment.trim() || !password.trim()) {
            setError('Please enter both enrollment number and password.');
            return;
        }

        if (enrollment.length < 5) {
            setError('Enrollment number must be at least 5 digits.');
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setIsLoggedIn(true);
            setDashboardLoading(true);
        }, 1200);
    };

    useEffect(() => {
        if (isLoggedIn && dashboardLoading) {
            const timer = setTimeout(() => {
                setDashboardLoading(false);
            }, 1500); // 1.5s simulated data loading time
            return () => clearTimeout(timer);
        }
    }, [isLoggedIn, dashboardLoading]);

    const handleLogout = () => {
        setIsLoggedIn(false);
        setEnrollment('');
        setPassword('');
        setError('');
    };

    if (isLoggedIn) {
        if (dashboardLoading) {
            return <SkeletonLoader />;
        }
        return (
            <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col animate-fade-in">
                <SEO 
                    title="Student Dashboard - ERP" 
                    description="MSIT Central Student Dashboard. Access attendance records, academic stats, and announcements."
                    canonicalPath="/student-portal"
                />

                {/* Dashboard Header */}
                <header className="bg-slate-950 border-b border-slate-800 py-4 px-6 sticky top-0 z-30">
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <GraduationCap className="w-8 h-8 text-blue-500" />
                            <div>
                                <h1 className="text-lg font-black tracking-tight text-white leading-none">MSIT Central</h1>
                                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Student ERP Portal</span>
                            </div>
                        </div>
                        <button 
                            onClick={handleLogout}
                            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                        >
                            Log Out
                        </button>
                    </div>
                </header>

                {/* Dashboard Main Layout */}
                <div className="flex-1 max-w-7xl w-full mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Panel: Profile & Highlights */}
                    <div className="space-y-6">
                        {/* Profile Card */}
                        <div className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[40px] pointer-events-none"></div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-blue-500/10">
                                    {studentData.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-white leading-tight">{studentData.name}</h2>
                                    <p className="text-slate-400 text-xs mt-0.5">{studentData.enrollment}</p>
                                </div>
                            </div>
                            <div className="border-t border-slate-800/80 pt-4 space-y-3 text-sm font-medium">
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Course:</span>
                                    <span className="text-slate-300 font-bold">{studentData.course}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Semester:</span>
                                    <span className="text-slate-300 font-bold">{studentData.semester}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Status:</span>
                                    <span className="text-emerald-500 font-bold flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Active
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Attendance Ring Overview */}
                        <div className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6">
                            <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                                <Activity className="w-4 h-4 text-blue-500" /> Overall Attendance
                            </h3>
                            <div className="flex items-center justify-between">
                                <div className="relative w-28 h-28 flex items-center justify-center">
                                    {/* Circle background */}
                                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                        <path
                                            className="text-slate-800"
                                            strokeWidth="3.5"
                                            stroke="currentColor"
                                            fill="transparent"
                                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                        <path
                                            className="text-blue-500"
                                            strokeWidth="3.5"
                                            strokeDasharray={`${studentData.attendance}, 100`}
                                            strokeLinecap="round"
                                            stroke="currentColor"
                                            fill="transparent"
                                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                    </svg>
                                    <div className="absolute flex flex-col items-center">
                                        <span className="text-2xl font-black text-white">{studentData.attendance}%</span>
                                        <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold mt-0.5">Sem Total</span>
                                    </div>
                                </div>
                                <div className="space-y-3 font-semibold text-xs min-w-0 max-w-sm pl-4">
                                    <div className="text-slate-300">
                                        You are currently <span className="text-emerald-500 font-bold">safe</span> for end-term examination guidelines.
                                    </div>
                                    <div className="text-[10px] text-slate-400">
                                        Minimum criteria: 75% • Medical buffer limit: 65%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle Panel: Subject-wise Details */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Attendance Details Table */}
                        <div className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6">
                            <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                                <BookOpen className="w-4 h-4 text-blue-500" /> Subject-wise Attendance
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm font-medium text-slate-300">
                                    <thead>
                                        <tr className="border-b border-slate-800 text-[10px] font-black uppercase tracking-widest text-slate-500">
                                            <th className="pb-3 pl-2">Subject Code</th>
                                            <th className="pb-3">Subject Name</th>
                                            <th className="pb-3 text-center">Classes Attended</th>
                                            <th className="pb-3 text-right pr-2">Percentage</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-800/60">
                                        {studentData.subjects.map((sub, i) => {
                                            const pct = ((sub.attended / sub.total) * 100).toFixed(1);
                                            const isLow = pct < 75;
                                            return (
                                                <tr key={i} className="hover:bg-slate-900/30 transition-colors">
                                                    <td className="py-4 font-bold text-slate-400 pl-2">{sub.code}</td>
                                                    <td className="py-4 text-white font-bold">{sub.name}</td>
                                                    <td className="py-4 text-center">{sub.attended} / {sub.total}</td>
                                                    <td className={`py-4 text-right pr-2 font-black ${isLow ? 'text-rose-500' : 'text-emerald-500'}`}>
                                                        {pct}%
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Recent Notices */}
                        <div className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6">
                            <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                                <FileText className="w-4 h-4 text-blue-500" /> Announcements & Bulletins
                            </h3>
                            <div className="space-y-4">
                                {studentData.notices.map((notice, i) => (
                                    <div key={i} className="flex gap-4 items-start p-4 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors">
                                        <div className="text-[10px] font-black uppercase tracking-wider text-slate-500 w-24 shrink-0 mt-0.5">
                                            {notice.date}
                                        </div>
                                        <div className="text-sm text-slate-300 leading-relaxed font-semibold">
                                            {notice.text}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-950 flex relative overflow-hidden">
            <SEO 
                title="Student ERP Login Portal" 
                description="Secure login portal to the Maharaja Surajmal Institute of Technology Student ERP/Central hub."
                canonicalPath="/student-portal"
            />

            {/* Glowing Backdrop Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Left Column: Branding (hidden on mobile) */}
            <div className="hidden lg:flex lg:w-[45%] p-16 flex-col justify-between relative z-10 border-r border-slate-900">
                <Link to="/" className="flex items-center gap-4 group">
                    <img 
                        src="/msit-logo.webp" 
                        alt="MSIT Official Logo" 
                        className="h-12 w-auto object-contain brightness-[1.2]" 
                    />
                    <span className="font-['Libre_Baskerville',serif] font-black text-xl tracking-tight text-white group-hover:text-blue-500 transition-colors">
                        MSIT New Delhi
                    </span>
                </Link>

                <div className="max-w-md space-y-6">
                    <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-blue-500/20">
                        Academic Portal
                    </span>
                    <h2 className="text-4xl xl:text-5xl font-black text-white leading-tight tracking-tight">
                        Connecting the <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Entire Campus</span> Digitally.
                    </h2>
                    <p className="text-slate-400 text-base font-medium leading-relaxed">
                        Access real-time attendance indices, internal sessional progress dashboards, fee records, and unified university announcements.
                    </p>
                </div>

                <div className="text-slate-500 text-xs font-bold uppercase tracking-wider flex gap-6">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-blue-500" /> Secure 256-bit encryption</span>
                </div>
            </div>

            {/* Right Column: Login Form */}
            <div className="flex-1 flex items-center justify-center p-6 sm:p-12 relative z-10">
                <div className="w-full max-w-md space-y-8 bg-slate-900/40 backdrop-blur-md border border-slate-800 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl">
                    <div className="text-center">
                        <div className="w-16 h-16 rounded-3xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6 border border-blue-500/20">
                            <GraduationCap className="w-8 h-8 text-blue-500" />
                        </div>
                        <h2 className="text-2xl font-black text-white tracking-tight">Student ERP Login</h2>
                        <p className="text-slate-400 text-sm mt-2 font-semibold">Enter your credentials to enter the digital campus.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        {error && (
                            <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-500 rounded-2xl text-xs font-bold text-center">
                                {error}
                            </div>
                        )}

                        {/* Role Selector */}
                        <div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-950/80 rounded-2xl border border-slate-800/80">
                            <button
                                type="button"
                                onClick={() => setRole('student')}
                                className={`py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                                    role === 'student' 
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/10' 
                                        : 'text-slate-400 hover:text-slate-200'
                                }`}
                            >
                                Student
                            </button>
                            <button
                                type="button"
                                onClick={() => setRole('faculty')}
                                className={`py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                                    role === 'faculty' 
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/10' 
                                        : 'text-slate-400 hover:text-slate-200'
                                }`}
                            >
                                Faculty
                            </button>
                        </div>

                        {/* Enrollment Number */}
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Enrollment / Employee ID</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                                    <User className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    value={enrollment}
                                    onChange={(e) => setEnrollment(e.target.value)}
                                    placeholder="e.g., 01115002722"
                                    className="block w-full pl-11 pr-4 py-4 bg-slate-950/80 border border-slate-800 rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors text-sm font-semibold"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Password</label>
                                <a href="#" className="text-xs font-bold text-blue-500 hover:underline">Forgot?</a>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="block w-full pl-11 pr-12 py-4 bg-slate-950/80 border border-slate-800 rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors text-sm font-semibold"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-slate-300"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-500/10 active:scale-95 flex justify-center items-center gap-2 cursor-pointer disabled:opacity-50"
                        >
                            {loading ? (
                                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            ) : (
                                <>
                                    Log In <ArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default StudentPortal;
