/**
 * Societies Data Catalog
 * Contains rich profiles matching the redesigned society template inspired by the GeekRoom MSIT reference.
 */

export const societiesData = {
    "society-geekroom": {
        id: "society-geekroom",
        slug: "society-geekroom",
        name: "GeekRoom MSIT",
        shortName: "GR",
        tagline: "Where Geeks Belong",
        category: "Technical",
        established: "2023",
        department: "CSE, IT, ECE, EEE",
        email: "team@geekroom.in",
        phone: "+91 95188 44615",
        location: "110",
        officeRoom: "Room 110, Tech Block",
        membership: "Open to All",
        website: "https://geekroom.co.in",
        joinUrl: "https://forms.gle/4XZTPfbjwJhNuhzq9",
        logoText: "MSI(T)",
        logoSymbol: "</>",
        logo: "/geekroom-logo.jpg",
        socials: {
            instagram: "https://www.instagram.com/geekroom_msit/",
            linkedin: "https://www.linkedin.com/company/geekroommsit/",
            youtube: "https://youtube.com/@geekroom",
            github: "https://github.com/geekroom",
            email: "mailto:team@geekroom.in"
        },
        heroImage: "/campus-hero.webp",
        overview: `Geek Room MSIT is the founding chapter of Geek Room — India's one of the largest student-led tech communities — bringing together developers, designers, and innovators at Maharaja Surajmal Institute of Technology through hackathons, workshops, and hands-on tech events.`,
        detailedAbout: `Geek Room began in 2023 right here at MSIT, as a small WhatsApp group of like-minded tech enthusiasts started by three students — Manas, Arnav, and Pratham. What started as an informal circle of people who just wanted to build, learn, and geek out together has since grown into a nationwide community of over 50,000 members, with chapters across multiple colleges in India. As the original chapter, Geek Room MSIT carries that founding legacy forward on campus — organizing hackathons, coding competitions, tech talks, workshops, and networking sessions that give students real hands-on exposure to the tech industry. The society is a space for anyone curious about technology, regardless of year or branch, to learn by doing, collaborate on projects, and build a portfolio and network that extends well beyond college.`,
        mission: `To connect like-minded people in tech and give every student at MSIT a space to learn, build, and grow together — through hands-on events, real projects, and a community that has each other's back.`,
        vision: `To be the launchpad where every MSIT student's tech journey begins — carrying forward Geek Room's founding legacy of building India's largest, most impactful student tech community, one hackathon and one idea at a time.`,
        objectives: [
            "Organize high-quality hackathons, coding competitions, and tech workshops that give students practical, industry-relevant skills.",
            "Build a strong peer network and mentorship culture where seniors, alumni, and industry professionals actively support student growth.",
            "Create opportunities for students to showcase and ship real projects, not just attend events.",
            "Foster partnerships with companies, sponsors, and other Geek Room chapters to widen opportunities for MSIT students.",
            "Make tech genuinely accessible — no gatekeeping by year, branch, or prior experience — so every geek finds their room."
        ],
        whatWeDo: [
            {
                title: "Workshops",
                desc: "Hands-on learning sessions on emerging technologies.",
                icon: "Code2"
            },
            {
                title: "Hackathons",
                desc: "Build, innovate and solve real-world problems.",
                icon: "Sparkles"
            },
            {
                title: "Competitions",
                desc: "Technical and coding competitions to challenge skills.",
                icon: "Trophy"
            },
            {
                title: "Training",
                desc: "Skill-building programs and certifications.",
                icon: "GraduationCap"
            },
            {
                title: "Projects",
                desc: "Real-world projects to build portfolio and impact.",
                icon: "Layers"
            },
            {
                title: "Networking",
                desc: "Connect, collaborate and grow with peers, mentors & alumni.",
                icon: "Share2"
            }
        ],
        events: {
            upcoming: {
                day: "20",
                month: "JUN",
                year: "2025",
                title: "GEEKROOM MEETUP",
                desc: "An interactive meetup for all tech enthusiasts. Network, learn and build!",
                dateString: "Friday, 20 June 2025",
                timeString: "4:00 PM Onwards",
                location: "TBD"
            },
            past: [
                {
                    title: "Hack Sprint 3.0",
                    date: "Mar 2025",
                    image: "/campus-lab.webp"
                },
                {
                    title: "AI Workshop",
                    date: "Feb 2025",
                    image: "/campus-hero.webp"
                },
                {
                    title: "Code Clash",
                    date: "Jan 2025",
                    image: "/campus-excellence.webp"
                },
                {
                    title: "Web Dev Bootcamp",
                    date: "Dec 2024",
                    image: "/campus-library.webp"
                }
            ]
        },
        achievements: [
            {
                title: "Competition Wins",
                desc: "Details about wins and recognitions in inter-college tech circuits.",
                icon: "Trophy"
            },
            {
                title: "Hackathon Achievements",
                desc: "Over 50+ podium finishes in Smart India Hackathon and national events.",
                icon: "Award"
            },
            {
                title: "Technical Achievements",
                desc: "Technical milestones and student innovations shipped to production.",
                icon: "Cpu"
            },
            {
                title: "Awards & Certifications",
                desc: "Honors from community partners, open source grants, and sponsors.",
                icon: "Medal"
            }
        ],
        projects: [
            {
                title: "Community Projects",
                desc: "Projects built by the community solving real student problems.",
                icon: "FolderGit2"
            },
            {
                title: "GitHub Repositories",
                desc: "Open source and code repositories with 10k+ stars collectively.",
                icon: "Github"
            },
            {
                title: "Research Papers",
                desc: "Research papers and technical publications in AI/ML & Web3.",
                icon: "FileText"
            },
            {
                title: "Publications",
                desc: "Articles, journals and technical publications in open-access libraries.",
                icon: "BookOpen"
            }
        ],
        resources: [
            {
                title: "Study Material",
                desc: "Curated notes, roadmaps, guides and study resources.",
                icon: "FileCode"
            },
            {
                title: "Workshop Presentations",
                desc: "Slides and recorded session resources from expert talks.",
                icon: "Presentation"
            },
            {
                title: "Tutorials",
                desc: "Tutorials and step-by-step how-to guides for beginners.",
                icon: "HelpCircle"
            },
            {
                title: "Rulebooks & Documents",
                desc: "Guidelines, hackathon forms and official documents.",
                icon: "ShieldCheck"
            }
        ],
        people: {
            faculty: {
                name: "Prof. Rinki Dwivedi",
                role: "Faculty Coordinator",
                designation: "Professor",
                department: "Information Technology",
                image: "/faculty/rinky-dwivedi.webp"
            },
            student: {
                name: "Jagriti Rai",
                role: "Student Coordinator / President",
                designation: "President",
                department: "Computer Science & Engineering",
                image: "/ananya-iyer.webp"
            },
            coreTeam: [
                { name: "Jayant Olhyan", image: "/team/jayant-olhyan.webp" },
                { name: "Pawan Singh", image: "/team/pawan-singh.webp" },
                { name: "Abhay Mishra", image: "/team/abhay-mishra.webp" },
                { name: "Rahul Verma", image: "/rahul-verma.webp" }
            ],
            coreTeamCount: "18+ Members"
        },
        gallery: [
            {
                title: "Founding Team & Community Meetup",
                category: "society",
                image: "/campus-hero.webp"
            },
            {
                title: "Hackathon Ideation & Mentorship",
                category: "events",
                image: "/campus-lab.webp"
            },
            {
                title: "Auditorium Tech Keynote Session",
                category: "events",
                image: "/campus-excellence.webp"
            },
            {
                title: "Hands-on Code Sprint at Library Center",
                category: "society",
                image: "/campus-library.webp"
            }
        ],
        faqs: [
            {
                q: "What is Geek Room MSIT?",
                a: "The founding chapter of Geek Room, one of India's largest student-led tech communities, started at MSIT in 2023. It brings students together through hands-on events in coding, AI, web/app development, and hackathons."
            },
            {
                q: "Who can join? Do I need to know how to code?",
                a: "Any MSIT student, from any year or branch can join. No prior coding experience is needed! Several flagship events and tracks are built specifically to help students discover tech from ground zero."
            },
            {
                q: "Is Geek Room MSIT connected to the larger national community?",
                a: "Yes. As the founding chapter, MSIT members get direct access to Geek Room's national network of 50,000+ members and its chapters at other top engineering colleges."
            }
        ],
        recruitment: {
            isOpen: true,
            badge: "Recruitment Open",
            title: "Join the founding chapter of GeekRoom",
            desc: "We are recruiting passionate developers, designers, content writers, and event organizers for the upcoming tenure.",
            formUrl: "https://forms.gle/4XZTPfbjwJhNuhzq9"
        }
    },

    "society-ieee": {
        id: "society-ieee",
        slug: "society-ieee",
        name: "IEEE MSIT",
        shortName: "IEEE",
        tagline: "Advancing Technology for Humanity",
        category: "Technical",
        established: "2009",
        department: "ECE, EEE, CSE, IT",
        email: "ieee@msit.in",
        phone: "+91 11 2555 2641",
        location: "IEEE Student Branch Room, Ground Floor",
        officeRoom: "Room 004, Electrical Block",
        membership: "Open to All Undergraduates",
        website: "https://ieee.msit.in",
        joinUrl: "https://ieee.org/membership",
        logoText: "IEEE",
        logoSymbol: "⚡",
        socials: {
            instagram: "https://instagram.com/ieeemsit",
            linkedin: "https://linkedin.com/company/ieee-msit",
            youtube: "https://youtube.com/@ieeemsit",
            github: "https://github.com/ieeemsit",
            email: "mailto:ieee@msit.in"
        },
        heroImage: "/campus-hero.webp",
        overview: `IEEE MSIT is a premier student branch in the Delhi Section, recognized globally for technical excellence, student engagement, and pioneering robotics and computing workshops.`,
        detailedAbout: `Established in 2009, IEEE MSIT is a prominent student branch of IEEE under Region 10 (Asia Pacific). Aimed at advancing the technical skills, career prospects, and professional network of MSIT students, the branch comprises multiple specialized societies including Computer Society (CS), Power & Energy Society (PES), Robotics & Automation Society (RAS), and Women in Engineering (WiE). Recognized consistently with international awards like the Darrel Chong Medal and Outstanding Student Branch Award.`,
        mission: `To cultivate professional engineering competence, foster collaborative research, and enable students to contribute meaningfully to technological advancement.`,
        vision: `To be a premier global IEEE student branch distinguished for innovation, human-centric engineering solutions, and ethical leadership.`,
        objectives: [
            "Provide hands-on exposure to cutting-edge technical domains such as IoT, Robotics, Cloud, and Embedded Systems.",
            "Foster gender equality in technology careers through Women in Engineering (WiE) initiatives.",
            "Facilitate networking with global industry researchers, IEEE Fellows, and academic stalwarts.",
            "Host flagship university events like Avensis Tech Fest and IEEE Day symposiums."
        ],
        whatWeDo: [
            { title: "Robotics Labs", desc: "Hardware fabrication, drone design, and robotics competitions.", icon: "Cpu" },
            { title: "Hackathons", desc: "High-intensity coding marathons solving social challenges.", icon: "Sparkles" },
            { title: "Research Groups", desc: "Collaborative paper publishing and IEEE explore indexing.", icon: "FileText" },
            { title: "WiE Seminars", desc: "Empowerment workshops celebrating women innovators in tech.", icon: "Award" },
            { title: "Conferences", desc: "International symposiums and technical colloquiums with keynote speakers.", icon: "Presentation" },
            { title: "SIGs", desc: "Domain-specific Special Interest Groups in AI, Cloud, and Hardware.", icon: "Layers" }
        ],
        events: {
            upcoming: {
                day: "14",
                month: "AUG",
                year: "2025",
                title: "IEEE TECHNO-VISION '25",
                desc: "Flagship annual summit with keynote lectures, hardware project showcases, and developer challenges.",
                dateString: "Thursday, 14 August 2025",
                timeString: "10:00 AM Onwards",
                location: "Main Auditorium, MSIT"
            },
            past: [
                { title: "AVENSIS Tech Fest", date: "Feb 2025", image: "/campus-hero.webp" },
                { title: "IEEE Day Global Gala", date: "Oct 2024", image: "/campus-excellence.webp" },
                { title: "RoboRace Grand Prix", date: "Nov 2024", image: "/campus-lab.webp" },
                { title: "WiE Leadership Summit", date: "Sep 2024", image: "/campus-library.webp" }
            ]
        },
        achievements: [
            { title: "Outstanding Branch 2023", desc: "Ranked as top branch in the entire Asia Pacific (R10) region.", icon: "Trophy" },
            { title: "PES R10 Excellence", desc: "Ranked #17 in the Asia-Pacific region and #1 in Delhi Section.", icon: "Award" },
            { title: "Darrel Chong Award", desc: "Consecutive recipient for impact-driven humanitarian engineering.", icon: "Medal" },
            { title: "Global Travel Grants", desc: "Students sponsored for international conferences in USA and Japan.", icon: "Sparkles" }
        ],
        projects: [
            { title: "Autonomous Rover System", desc: "Terrain-mapping rover with LiDAR navigation and obstacle avoidance.", icon: "Cpu" },
            { title: "Solar Smart Microgrid", desc: "IoT monitored green energy generation in the MSIT campus.", icon: "Layers" },
            { title: "Braille Reader Prototype", desc: "Affordable tactile electronic reader developed by WiE & RAS teams.", icon: "FolderGit2" },
            { title: "IEEE MSIT Web Portal", desc: "Open-source chapter management platform built with React & Next.js.", icon: "Github" }
        ],
        resources: [
            { title: "IEEE Xplore Guides", desc: "Direct access guidelines to IEEE digital research library publications.", icon: "BookOpen" },
            { title: "Arduino & ESP32 Starter", desc: "Comprehensive starter guides for embedded electronics and IoT.", icon: "FileCode" },
            { title: "Coding Interview Vault", desc: "Curated questions on DSA, system design, and placement tracks.", icon: "FileText" },
            { title: "Branch Constitution", desc: "Official operational guidelines, bylaws and election procedures.", icon: "ShieldCheck" }
        ],
        people: {
            faculty: {
                name: "Dr. Anupama Kaushik",
                role: "Branch Counselor",
                designation: "Associate Professor",
                department: "Electronics & Communication",
                image: "/faculty/anupama-kaushik.webp"
            },
            student: {
                name: "Shaurya Mishra",
                role: "Branch Chairperson",
                designation: "Chairperson",
                department: "Electronics & Communication",
                image: "/team/jayant-olhyan.webp"
            },
            coreTeam: [
                { name: "Ishika Garg", image: "/priya-sharma.webp" },
                { name: "Pawan Singh", image: "/team/pawan-singh.webp" },
                { name: "Abhay Mishra", image: "/team/abhay-mishra.webp" },
                { name: "Rahul Verma", image: "/rahul-verma.webp" }
            ],
            coreTeamCount: "25+ Committee Members"
        },
        gallery: [
            { title: "Avensis Innovation Showcase", category: "events", image: "/campus-lab.webp" },
            { title: "Annual IEEE Day Assembly", category: "society", image: "/campus-hero.webp" },
            { title: "Hardware Workshop Session", category: "events", image: "/campus-excellence.webp" },
            { title: "International Award Ceremony", category: "society", image: "/campus-library.webp" }
        ],
        faqs: [
            {
                q: "What is IEEE MSIT?",
                a: "IEEE MSIT is the student branch of the Institute of Electrical and Electronics Engineers at Maharaja Surajmal Institute of Technology, established in 2009."
            },
            {
                q: "How do I become an IEEE Member?",
                a: "Students can register through the official IEEE.org portal and join the MSIT Student Branch during the annual membership drive or anytime online."
            }
        ],
        recruitment: {
            isOpen: true,
            badge: "Executive Call Open",
            title: "Join the IEEE Executive Committee",
            desc: "Calling applications for technical leads, PR managers, event heads, and editorial team.",
            formUrl: "https://ieee.msit.in"
        }
    },

    "society-ndli": {
        id: "society-ndli",
        slug: "society-ndli",
        name: "MSIT NDLI Club",
        shortName: "NDLI",
        tagline: "Strength through Collaboration",
        category: "Academic & Research",
        established: "2021",
        department: "All Engineering Departments & Central Library",
        email: "ndliclub@msit.in",
        phone: "+91 99710 79829",
        location: "Maharaja Surajmal Central Library",
        officeRoom: "Central Library 2nd Floor, MSIT",
        membership: "Free & Mandatory for Institutional Event Certifications",
        website: "https://ndl.iitkgp.ac.in/",
        joinUrl: "https://club.ndl.iitkgp.ac.in/",
        logoText: "NDLI",
        logoSymbol: "📚",
        socials: {
            instagram: "https://instagram.com/msit_ndliclub",
            linkedin: "https://linkedin.com/company/msit-ndli",
            youtube: "https://youtube.com/@msitndli",
            github: "https://github.com/msit",
            email: "mailto:ndliclub@msit.in"
        },
        heroImage: "/campus-library.webp",
        overview: `A national digital literacy initiative sponsored by the Ministry of Education, Govt. of India and IIT Kharagpur, serving as the central documentation and certification engine for MSIT events.`,
        detailedAbout: `Established in April 2021, the MSIT NDLI Club connects students and faculty with the National Digital Library of India platform. It facilitates access to millions of digital academic repositories and serves as the mandatory administrative portal for registering, managing, and certifying all official MSIT events.`,
        mission: `To promote digital literacy, lifelong learning, and open educational resource sharing across disciplines.`,
        vision: `To empower all MSITians with free digital learning tools and establish a digital institutional archive of student achievements.`,
        objectives: [
            "Facilitate seamless access to IIT Kharagpur's National Digital Library repositories.",
            "Manage event registrations and automated participation certificates for all MSIT societies.",
            "Conduct literacy competitions, research methodology workshops, and scholarly training.",
            "Archive institutional proceedings, annual conferences, and technical student papers."
        ],
        whatWeDo: [
            { title: "Event Certification", desc: "Official verification and certificate issuing for all MSIT fests.", icon: "Award" },
            { title: "Digital Access", desc: "Access to millions of textbooks, research papers and lectures.", icon: "BookOpen" },
            { title: "Quizzes & Contests", desc: "National level quizzes and research competitions.", icon: "Trophy" },
            { title: "Workshops", desc: "Hands-on seminars on digital libraries, research writing, and patents.", icon: "Presentation" },
            { title: "Digital Archive", desc: "Maintaining central digital repository of all campus events.", icon: "Layers" },
            { title: "Webinars", desc: "Live sessions conducted by IIT professors and national scientists.", icon: "GraduationCap" }
        ],
        events: {
            upcoming: {
                day: "28",
                month: "MAY",
                year: "2025",
                title: "NATIONAL DIGITAL CITIZENSHIP SUMMIT",
                desc: "Interactive symposium on digital research ethics, open source journals, and patent filings.",
                dateString: "Wednesday, 28 May 2025",
                timeString: "11:00 AM Onwards",
                location: "Central Library Seminar Hall"
            },
            past: [
                { title: "NDLI Excellence Award Ceremony", date: "Nov 2024", image: "/campus-library.webp" },
                { title: "National Reading Month Drive", date: "Jul 2024", image: "/campus-excellence.webp" },
                { title: "Research Paper Boot Camp", date: "May 2024", image: "/campus-lab.webp" },
                { title: "IPR & Patent Awareness", date: "Mar 2024", image: "/campus-hero.webp" }
            ]
        },
        achievements: [
            { title: "Top 11 in India (2025)", desc: "Ranked among the Top 11 performing NDLI Clubs in India at KEDLD-2025.", icon: "Trophy" },
            { title: "Best Performing Club (Delhi)", desc: "Adjudged Best Performing Club in Delhi by IIT Kharagpur in Aug 2023.", icon: "Award" },
            { title: "10,000+ Certificates", desc: "Successfully issued and verified ten thousand plus event certificates.", icon: "Medal" },
            { title: "100% Student Onboarding", desc: "Comprehensive onboarding across all B.Tech batches.", icon: "ShieldCheck" }
        ],
        projects: [
            { title: "Event Registration Portal", desc: "Automated event registration system with instant QR verification.", icon: "FolderGit2" },
            { title: "Digital Thesis Archive", desc: "Online searchable repository of final year B.Tech capstone projects.", icon: "BookOpen" },
            { title: "E-Resource Catalog", desc: "Interactive cataloging system for central library digital assets.", icon: "Layers" },
            { title: "Certificate Validator", desc: "Cryptographically verified digital certificate validation engine.", icon: "ShieldCheck" }
        ],
        resources: [
            { title: "NDLI Portal Access", desc: "Official direct entry portal to IIT Kharagpur national digital repository.", icon: "BookOpen" },
            { title: "Event Organizer Manual", desc: "Standard Operating Procedure for registering events at MSIT.", icon: "FileText" },
            { title: "Research Paper Templates", desc: "Standard IEEE and Springer formatted LaTeX and DOCX templates.", icon: "FileCode" },
            { title: "Library Membership Form", desc: "Digital form to request remote access and institutional login credentials.", icon: "HelpCircle" }
        ],
        people: {
            faculty: {
                name: "Dr. Reetu Verma & Dr. Nidhi Gupta",
                role: "Faculty Coordinators",
                designation: "Associate Professors",
                department: "Central Library & Applied Sciences",
                image: "/faculty/rinky-dwivedi.webp"
            },
            student: {
                name: "Ms. Disha",
                role: "Student President",
                designation: "President",
                department: "Information Technology",
                image: "/ananya-iyer.webp"
            },
            coreTeam: [
                { name: "Priya Sharma", image: "/priya-sharma.webp" },
                { name: "Jayant Olhyan", image: "/team/jayant-olhyan.webp" },
                { name: "Abhay Mishra", image: "/team/abhay-mishra.webp" }
            ],
            coreTeamCount: "12 Committee Members"
        },
        gallery: [
            { title: "IIT Kharagpur Award Presentation", category: "society", image: "/campus-excellence.webp" },
            { title: "Digital Literacy Orientation", category: "events", image: "/campus-library.webp" },
            { title: "Student Reading Marathon", category: "events", image: "/campus-hero.webp" },
            { title: "Central Library Reading Hall", category: "society", image: "/campus-lab.webp" }
        ],
        faqs: [
            {
                q: "Why do I need to register for events through the NDLI Club?",
                a: "All college events at MSIT mandate registration through the NDLI Club for official attendance tracking, digital event repository documentation, and verifiable certificate issuance."
            }
        ],
        recruitment: {
            isOpen: false,
            badge: "Registrations Continuous",
            title: "Join as a Student Ambassador",
            desc: "Represent your branch and ensure smooth event documentation and certificates.",
            formUrl: "https://club.ndl.iitkgp.ac.in/"
        }
    }
};

/**
 * Overview list for the Societies Hub Directory
 */
export const allSocietiesList = [
    {
        id: "society-geekroom",
        name: "GeekRoom MSIT",
        shortName: "GR",
        category: "Technical",
        tagline: "Where Geeks Belong",
        description: "The founding chapter of one of India's largest student-led tech communities, bringing together 50,000+ developers through hackathons and workshops.",
        established: "2023",
        members: "50,000+ National",
        link: "/society-geekroom",
        badgeColor: "purple",
        logoSymbol: "</>",
        logo: "/geekroom-logo.jpg",
        featured: true
    },
    {
        id: "society-ieee",
        name: "IEEE MSIT",
        shortName: "IEEE",
        category: "Technical",
        tagline: "Advancing Technology for Humanity",
        description: "Premier student branch recognized across Region 10 (Asia Pacific). Leading robotics, coding marathons, power & energy, and WiE wings.",
        established: "2009",
        members: "1,500+ Campus",
        link: "/society-ieee",
        badgeColor: "blue",
        logoSymbol: "⚡",
        featured: true
    },
    {
        id: "society-ndli",
        name: "MSIT NDLI Club",
        shortName: "NDLI",
        category: "Academic & Research",
        tagline: "Strength through Collaboration",
        description: "National Digital Library of India chapter, ranked in Top 11 nationally. Facilitates digital archives and institutional event certifications.",
        established: "2021",
        members: "4,000+ Enrolled",
        link: "/society-ndli",
        badgeColor: "emerald",
        logoSymbol: "📚",
        featured: false
    },
    {
        id: "society-gdsc",
        name: "GDSC MSIT",
        shortName: "GDSC",
        category: "Technical",
        tagline: "Google Developer Student Clubs",
        description: "The hub for Google technologies, Android/Flutter development, Cloud Computing, and solving real-world challenges through code.",
        established: "2019",
        members: "1,200+ Campus",
        link: "/society-geekroom",
        badgeColor: "blue",
        logoSymbol: "<>",
        featured: false
    },
    {
        id: "society-eyantra",
        name: "E-Yantra Robotics",
        shortName: "EY",
        category: "Technical",
        tagline: "Innovating Robotics & Automation",
        description: "For hardware and robotics enthusiasts. Building autonomous rovers, drones, and competing in national challenges by IIT Bombay.",
        established: "2018",
        members: "350+ Campus",
        link: "/society-ieee",
        badgeColor: "orange",
        logoSymbol: "🤖",
        featured: false
    },
    {
        id: "society-nisp",
        name: "NISP & Startup Cell",
        shortName: "NISP",
        category: "Innovation & Incubation",
        tagline: "Ideate, Incubate, Elevate",
        description: "Fostering an ecosystem for student startups, seed funding guidance, intellectual property support, and startup mentorship.",
        established: "2020",
        members: "500+ Innovators",
        link: "/society-geekroom",
        badgeColor: "amber",
        logoSymbol: "🚀",
        featured: false
    },
    {
        id: "society-mutants",
        name: "Mutants Cultural Society",
        shortName: "Mutants",
        category: "Cultural & Arts",
        tagline: "The Soul of Campus Expression",
        description: "The umbrella cultural hub of MSIT hosting Octave (Music), Aarambh (Dramatics), Unity (Street Dance), and Astitva (Fashion & Dance).",
        established: "2005",
        members: "800+ Performers",
        link: "/events",
        badgeColor: "pink",
        logoSymbol: "🎭",
        featured: false
    },
    {
        id: "society-cerebrate",
        name: "Cerebrate Debating Society",
        shortName: "CDS",
        category: "Cultural & Arts",
        tagline: "Voice of Reason & Persuasion",
        description: "Mastering parliamentary debate, Model United Nations, and public oratory on domestic and international socio-economic policies.",
        established: "2012",
        members: "200+ Debaters",
        link: "/events",
        badgeColor: "indigo",
        logoSymbol: "🎙️",
        featured: false
    },
    {
        id: "society-nss",
        name: "NSS & Prakriti",
        shortName: "NSS",
        category: "Social Responsibility",
        tagline: "Not Me, But You",
        description: "Community service, health checkup camps, environmental sustainability drives, and blood donation initiatives across New Delhi.",
        established: "2010",
        members: "1,000+ Volunteers",
        link: "/society-ndli",
        badgeColor: "green",
        logoSymbol: "🌱",
        featured: false
    }
];
