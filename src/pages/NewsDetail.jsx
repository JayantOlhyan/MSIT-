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
    },
    "4": {
        id: 4,
        label: "STORY",
        title: "Grand Finale of SIH 2025 Concludes: MSIT Declared Winner in Ministry of AYUSH Category",
        date: "DEC 12, 2025",
        color: "border-blue-600",
        bgImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
        summary: "MSIT Janakpuri secured top honors in the Ministry of AYUSH category at the Smart India Hackathon 2025 Grand Finale.",
        content: `
            <p class="mb-6">The Grand Finale of the Smart India Hackathon (SIH) 2025 concluded on 12 December 2025 at Galgotias University. In the Ministry of AYUSH category, Maharaja Surajmal Institute of Technology, Janakpuri, New Delhi, was declared a winner alongside Sri Krishna College of Engineering and Technology, Tamil Nadu.</p>
            <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Ministry Evaluation and AYUSH Solutions</h3>
            <p class="mb-6">Project evaluations were conducted by official ministry assessment teams including Dr. Shalini Rai from the Ministry of AYUSH, evaluating original technology solutions based on originality, technological feasibility, and social impact.</p>
        `,
        attachments: [
            { name: "SIH 2025 Official Winner Certificate.pdf", size: "1.2 MB", url: "#" }
        ],
        links: [
            { name: "Smart India Hackathon Portal", url: "https://sih.gov.in" }
        ]
    },
    "5": {
        id: 5,
        label: "EVENT",
        title: "MSIT to Host 4th International Conference on Artificial Intelligence and Applications (ICAIA 2026)",
        date: "NOV 19, 2026",
        color: "border-emerald-500",
        bgImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
        summary: "MSIT announced the 4th International Conference ICAIA-2026, technically approved by the IEEE Delhi Section.",
        content: `
            <p class="mb-6">Maharaja Surajmal Institute of Technology (MSIT), New Delhi, is organizing the 4th International Conference on Artificial Intelligence and Applications (ICAIA 2026) on 19–20 November 2026.</p>
            <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">IEEE Delhi Section Technical Approval</h3>
            <p class="mb-6">Technically approved by the IEEE Delhi Section, the conference brings together global academic researchers, industry experts, and practitioners to discuss computational intelligence models, deep learning architectures, and applied AI systems.</p>
        `,
        attachments: [
            { name: "ICAIA 2026 Brochure & Paper Submissions.pdf", size: "3.4 MB", url: "#" }
        ],
        links: [
            { name: "Conference Official Site", url: "https://icaia-msit.in/" }
        ]
    },
    "6": {
        id: 6,
        label: "NEWS",
        title: "Department of CSE Receives Grant from Petronet LNG Ltd. for Center of Excellence",
        date: "AUG 15, 2025",
        color: "border-purple-500",
        bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
        summary: "Petronet LNG Ltd. awarded ₹30 lakh to MSIT's Department of CSE to establish a CoE in Computational Intelligence.",
        content: `
            <p class="mb-6">The Department of Computer Science & Engineering at Maharaja Surajmal Institute of Technology received a financial grant of ₹30 lakh from Petronet LNG Ltd.</p>
            <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Computational Intelligence Infrastructure</h3>
            <p class="mb-6">The grant funding is explicitly designated to establish a Center of Excellence of Computational research and development, providing advanced computational infrastructure for AI and data science research.</p>
        `,
        attachments: [
            { name: "Petronet Grant Approval Letter.pdf", size: "850 KB", url: "#" }
        ],
        links: [
            { name: "MSIT Achievement Notice", url: "https://www.msit.in/achievement/3/" }
        ]
    },
    "7": {
        id: 7,
        label: "EVENT",
        title: "MSIT Conducts National Conference NCI-TIDE 2025",
        date: "DEC 15, 2025",
        color: "border-blue-600",
        bgImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
        summary: "MSIT hosted the National Conference NCI-TIDE 2025 covering emerging technologies and interdisciplinary engineering.",
        content: `
            <p class="mb-6">Maharaja Surajmal Institute of Technology organized the National Conference on Integrating Technologies, Ideas and Disciplines for Engineering Innovation (NCI-TIDE 2025).</p>
            <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Keynote Address and Sponsorship</h3>
            <p class="mb-6">The event featured a keynote address by Dr. Prerna Gaur on Internet of Things (IoT) applications in automation and intelligent engineering systems, alongside peer-reviewed research paper sessions for journal publication. Corporate sponsorship support was provided by ECE department alumnus Varun Bansal through Elegance Spark Innovation.</p>
        `,
        attachments: [
            { name: "NCI-TIDE 2025 Complete Report.pdf", size: "1.9 MB", url: "#" }
        ],
        links: [
            { name: "Official Report PDF Link", url: "https://www.msit.in/media/uploads/2025/12/16/nci-tide2025-report.pdf" }
        ]
    },
    "8": {
        id: 8,
        label: "EVENT",
        title: "Placement Cell Conducts Placement Preparation Session with ION Alumni and Seniors",
        date: "AUG 30, 2024",
        color: "border-emerald-500",
        bgImage: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200",
        summary: "MSIT Placement Cell organized an interactive preparation session featuring CSE alumni and placed seniors working at ION.",
        content: `
            <p class="mb-6">The Placement Cell at MSIT conducted an interactive placement preparation session focused on recruitment strategies for fintech firm ION.</p>
            <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Alumni Mentorship and Guidance</h3>
            <p class="mb-6">Featuring Saransh Kapoor, Sunidee Jaiswal (CSE 2021–2025), and alumnus Prasanjeet Parasar (CSE 2019–2023), the session provided technical guidance on resume grinding, stakeholder evaluation, case studies, and culture fit rounds conducted by global talent leaders.</p>
        `,
        attachments: [
            { name: "ION Prep Session Report.pdf", size: "1.1 MB", url: "#" }
        ],
        links: [
            { name: "Placement Cell Notice", url: "https://www.msit.in/media/2024/08/30/report-_placement-talk_ion.pdf" }
        ]
    },
    "9": {
        id: 9,
        label: "EVENT",
        title: "E-Cell MSIT Organizes Flagship E-Summit 2026",
        date: "MAR 26, 2026",
        color: "border-purple-500",
        bgImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1200",
        summary: "E-Cell MSIT conducted its annual flagship E-Summit 2026 to foster student entrepreneurship.",
        content: `
            <p class="mb-6">The Entrepreneurship Cell (E-Cell) of MSIT hosted its annual flagship E-Summit 2026 on March 26–27, 2026.</p>
            <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Competitions & Venture Building</h3>
            <p class="mb-6">The summit featured business plan competitions, startup pitch sessions, ideathons, and interactive guest lectures designed to nurture technical entrepreneurship and venture building among engineering students.</p>
        `,
        attachments: [],
        links: [
            { name: "MSIT Events Calendar", url: "https://www.msit.in/events" }
        ]
    },
    "10": {
        id: 10,
        label: "EVENT",
        title: "MSC MSIT Organizes HackMSIT 1.0 Hackathon",
        date: "APR 10, 2026",
        color: "border-blue-600",
        bgImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200",
        summary: "Microsoft Student Chapter at MSIT held HackMSIT 1.0 hackathon for student software developers.",
        content: `
            <p class="mb-6">The Microsoft Student Chapter (MSC) at Maharaja Surajmal Institute of Technology organized "HackMSIT 1.0" on April 10–11, 2026.</p>
            <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Developer Prototyping</h3>
            <p class="mb-6">The two-day competitive hackathon brought together multidisciplinary student developer teams to build software solutions, work on open-source frameworks, and present technical prototypes to industry judges.</p>
        `,
        attachments: [],
        links: [
            { name: "MSIT Events Calendar", url: "https://www.msit.in/events" }
        ]
    },
    "11": {
        id: 11,
        label: "STORY",
        title: "Team 'Courtroom Cartel' Secures First Prize in Smart India Hackathon 2023",
        date: "DEC 20, 2023",
        color: "border-emerald-500",
        bgImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200",
        summary: "Student team 'Courtroom Cartel' from MSIT won the first prize in Smart India Hackathon 2023.",
        content: `
            <p class="mb-6">Student developer team "Courtroom Cartel" representing Maharaja Surajmal Institute of Technology won the 1st prize in the national Smart India Hackathon (SIH) 2023 Grand Finale.</p>
            <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Competitions Highlights</h3>
            <p class="mb-6">Additionally, fellow MSIT team "Semicolon" secured 2nd place in SIH 2023, showcasing the institution's strong competitive programming and problem-solving culture.</p>
        `,
        attachments: [],
        links: [
            { name: "MSIT Homepage", url: "https://msit.in/" }
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
