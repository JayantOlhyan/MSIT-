import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText, Download, Link2, Calendar, Tag, Share2, Printer } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';

const newsDb = {
    "1": {
        id: 1,
        label: "NEWS",
        title: "MSIT receives $12M grant to establish cutting-edge AI & Quantum Labs",
        date: "MAR 02, 2026",
        color: "border-blue-600",
        bgImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
        summary: "MSIT has been awarded a landmark $12 million grant from the Science and Engineering Research Board (SERB) to develop high-performance computing centers.",
        content: `
            <p class="mb-6">Maharaja Surajmal Institute of Technology (MSIT), New Delhi has achieved a monumental milestone by securing a research grant of <strong>$12 Million (approx. ₹100 Crores)</strong>. The funding is joint-backed by the Department of Science and Technology (DST), India, and private quantum technology venture funds.</p>
            
            <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Establishment of the Quantum & Advanced AI Center</h3>
            <p class="mb-6">This grant will be directed entirely towards setting up a dedicated multi-story research laboratory within the MSIT campus. The center will house state-of-the-art server racks, room-temperature quantum computing experimental kits, and next-generation NVIDIA GPU servers.</p>
            <p class="mb-6">Dr. Archana Balyan, Director of MSIT, stated: <em>"This grant is a testament to the high-caliber research conducted by our faculty members and students. With this facility, we aim to bridge the gap between academic theory and real-world industrial quantum systems."</em></p>
            
            <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Key Areas of Focus</h3>
            <ul class="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Quantum Cryptography:</strong> Securing network architectures against next-gen post-quantum cyber threats.</li>
                <li><strong>Generative AI & LLMs:</strong> Training domain-specific language models for Indian regional languages and public sector applications.</li>
                <li><strong>IoT & Autonomous Systems:</strong> Enhancing real-time hardware loop testing for drone swarms and electric vehicle drivetrains.</li>
            </ul>
        `,
        attachments: [
            { name: "Official Grant Announcement & Press Release.pdf", size: "2.4 MB", url: "#" },
            { name: "Research Infrastructure Blueprint & Timeline.pdf", size: "4.8 MB", url: "#" }
        ],
        links: [
            { name: "Department of Science and Technology Portal", url: "https://dst.gov.in" },
            { name: "MSIT Research & Innovation Department", url: "/research" }
        ]
    },
    "2": {
        id: 2,
        label: "EVENT",
        title: "Global Web3 & Blockchain Summit to be hosted at MSIT Campus",
        date: "FEB 28, 2026",
        color: "border-emerald-500",
        bgImage: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80&w=1200",
        summary: "MSIT has been selected as the official venue partner for the 2026 Global Web3 & Blockchain Summit, bringing together 2,000+ tech visionaries.",
        content: `
            <p class="mb-6">In a major victory for our student innovation clubs, the global organizing committee of the <strong>Web3 Developer Forum</strong> has chosen Maharaja Surajmal Institute of Technology as the anchor host venue for the upcoming **Global Web3 & Blockchain Summit 2026**.</p>
            
            <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">What to Expect</h3>
            <p class="mb-6">The summit, scheduled from <strong>October 15 to 17, 2026</strong>, will witness keynotes from Ethereum Foundation engineers, polygon protocol designers, security auditors, and founders of leading decentralized systems. Parallel tracks will cover smart-contract formal verification, Zero-Knowledge Rollups, and Decentralized Autonomous Organizations (DAOs) in corporate governance.</p>
            
            <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Student Hackathon & Placements</h3>
            <p class="mb-6">A major highlight of the event is the <strong>36-hour continuous Hackathon</strong> sponsored by major Web3 venture funds, offering cash prizes of up to $50,000 and direct internship placements with global remote companies.</p>
        `,
        attachments: [
            { name: "Summit Full Brochure & Speaker Directory.pdf", size: "3.2 MB", url: "#" },
            { name: "Hackathon Guidelines & Rules.pdf", size: "1.1 MB", url: "#" }
        ],
        links: [
            { name: "Register for the Hackathon (Google Forms)", url: "https://docs.google.com" },
            { name: "Web3 Summit Official Global Site", url: "https://web3devforum.org" }
        ]
    },
    "3": {
        id: 3,
        label: "STORY",
        title: "From Campus to Cupertino: How 5 MSIT grads secured roles at Apple",
        date: "FEB 15, 2026",
        color: "border-purple-500",
        bgImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200",
        summary: "Five students from MSIT's 2025 batch have landed core engineering roles at Apple's Silicon Valley and Bengaluru teams.",
        content: `
            <p class="mb-6">Maharaja Surajmal Institute of Technology celebrates a spectacular milestone as five graduates from our Computer Science & Engineering (CSE) and Information Technology (IT) departments join Apple Inc. as core Software Development Engineers (SDE).</p>
            
            <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">The Placement Journey</h3>
            <p class="mb-6">The hiring process included multiple coding rounds, system design discussions, and executive interviews focusing on low-level optimization and performance-centric programming. All five graduates credited MSIT's focus on algorithmic problem solving, hardware labs, and mock hackathons for their successful recruitment.</p>
            
            <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Advice from the Winners</h3>
            <p class="mb-6">One of the graduates, Priyanshu Singh, shared: <em>"Never neglect operating systems and computer architecture. Large tech organizations want engineers who understand how code behaves when mapped directly to memory and CPUs."</em></p>
        `,
        attachments: [
            { name: "Apple Placement Prep Kit & Sample Problems.pdf", size: "1.8 MB", url: "#" }
        ],
        links: [
            { name: "Read Placement Cell Alumni Interview", url: "/placements" },
            { name: "MSIT Alumni Association Network", url: "https://alumni.msit.in" }
        ]
    }
};

const NewsDetail = () => {
    const { id } = useParams();
    
    // Retrieve from local storage to allow admin-published news/events
    const storedEvents = localStorage.getItem('msit_events');
    const localEventsList = storedEvents ? JSON.parse(storedEvents) : [];
    const localItem = localEventsList.find(e => String(e.id) === String(id));
    
    const item = localItem || newsDb[id];

    if (!item) {
        return (
            <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Post Not Found</h1>
                <p className="text-slate-500 mb-6">The news article or event story you are looking for does not exist.</p>
                <Link to="/" className="px-6 py-3 bg-primary text-white font-bold rounded-xl transition-all shadow-md">
                    Back to Home
                </Link>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50">
            <SEO 
                title={item.title} 
                description={item.summary} 
                canonicalPath={`/news-event/${id}`} 
            />

            <PageHero 
                title={item.label}
                accentTitle="Article Detail"
                description={item.title}
                breadcrumbs={[
                    { label: 'News & Events', url: '/' },
                    { label: item.label }
                ]}
                heroImage={item.bgImage}
                heroImageAlt={item.title}
            />

            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    
                    {/* Main Content Area */}
                    <div className="w-full lg:w-2/3">
                        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
                            {/* Meta Bar */}
                            <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-slate-500 mb-8 border-b border-slate-100 pb-6">
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-primary" />
                                    {item.date}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Tag className="w-4 h-4 text-primary" />
                                    {item.label}
                                </span>
                                <div className="ml-auto flex gap-4">
                                    <button onClick={() => window.print()} className="hover:text-primary transition-colors flex items-center gap-1.5" aria-label="Print article">
                                        <Printer className="w-4 h-4" /> Print
                                    </button>
                                </div>
                            </div>

                            {/* Heading */}
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-8">
                                {item.title}
                            </h2>

                            {/* HTML Content */}
                            <article 
                                className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed font-medium"
                                dangerouslySetInnerHTML={{ __html: item.content }}
                            />
                        </div>
                    </div>

                    {/* Sidebar / Links & PDFs */}
                    <div className="w-full lg:w-1/3 space-y-8">
                        {/* Attachments Section */}
                        {item.attachments && item.attachments.length > 0 && (
                            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
                                    <FileText className="w-5 h-5 text-primary" />
                                    Official Attachments (PDFs)
                                </h3>
                                <div className="space-y-4">
                                    {item.attachments.map((file, idx) => (
                                        <a 
                                            key={idx}
                                            href={file.url}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                alert(`Simulating download for: ${file.name}`);
                                            }}
                                            className="flex items-start gap-4 p-4 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-2xl group transition-all"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                                                <Download className="w-5 h-5" />
                                            </div>
                                            <div className="flex-grow min-w-0">
                                                <div className="text-sm font-semibold text-slate-800 truncate group-hover:text-primary transition-colors">{file.name}</div>
                                                <div className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">{file.size}</div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Resource Links Section */}
                        {item.links && item.links.length > 0 && (
                            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
                                    <Link2 className="w-5 h-5 text-primary" />
                                    Related Resources
                                </h3>
                                <div className="space-y-3">
                                    {item.links.map((link, idx) => (
                                        link.url.startsWith('http') ? (
                                            <a 
                                                key={idx}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-between p-3.5 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-xl group transition-all text-sm font-semibold text-slate-700 hover:text-primary"
                                            >
                                                <span>{link.name}</span>
                                                <Link2 className="w-4 h-4 text-slate-400 group-hover:text-primary" />
                                            </a>
                                        ) : (
                                            <Link 
                                                key={idx}
                                                to={link.url}
                                                className="flex items-center justify-between p-3.5 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-xl group transition-all text-sm font-semibold text-slate-700 hover:text-primary"
                                            >
                                                <span>{link.name}</span>
                                                <Link2 className="w-4 h-4 text-slate-400 group-hover:text-primary" />
                                            </Link>
                                        )
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Back To Home CTA */}
                        <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-sm flex flex-col justify-between h-48">
                            <div>
                                <h4 className="text-lg font-bold mb-2">Back to Newsroom</h4>
                                <p className="text-slate-400 text-xs leading-relaxed font-semibold">Want to read other college updates or look up active events?</p>
                            </div>
                            <Link to="/" className="w-full inline-flex items-center justify-center gap-2 py-3 bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs uppercase tracking-widest rounded-xl transition-colors">
                                <ArrowLeft className="w-4 h-4" /> Go Back Home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default NewsDetail;
