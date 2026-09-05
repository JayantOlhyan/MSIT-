export const academicData = {
    "cse": {
        title: "Computer Science & Engineering (CSE)",
        subtitle: "Imparting world-class education since 2001 to prepare future software engineers for the rapidly evolving technological landscape (NBA Accredited).",
        seo_description: "The Computer Science and Engineering department at MSIT offers advanced curriculum in AI, software engineering, and systems for aspiring tech leaders.",
        category: "Academics",
        heroImage: "/campus-hero.webp",
        heroImageAlt: "Students collaborating in the MSIT Computer Science and Engineering laboratory",
        content: `
            <div class="space-y-12">
                <section>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                            <h4 class="text-xl font-bold text-slate-900 mb-4">Our Vision</h4>
                            <p class="text-slate-600 leading-relaxed">To maintain academic excellence aiming to produce competent technocrats imbibed with ethical values to serve the national emerging technological needs.</p>
                        </div>
                        <div class="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                            <h4 class="text-xl font-bold text-slate-900 mb-4">Our Mission</h4>
                            <p class="text-sm text-slate-600 leading-relaxed mb-2"><strong>M1:</strong> To impart quality engineering education to the students by providing effective teaching learning, research and application based innovative environment.</p>
                            <p class="text-sm text-slate-600 leading-relaxed"><strong>M2:</strong> To inculcate creativity team-spirit, leadership and ethical competence through continuous collective curricular, co-curricular and extracurricular activities.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 class="text-2xl font-bold text-slate-900 mb-6">Program Educational Objectives (PEOs)</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="p-6 bg-slate-900 rounded-2xl text-white">
                            <div class="text-blue-400 font-bold mb-2">PEO1</div>
                            <h4 class="font-bold mb-2">Analytical Excellence</h4>
                            <p class="text-xs text-slate-400">Deep insight in mathematical, scientific & analytical skills for lifelong learning.</p>
                        </div>
                        <div class="p-6 bg-slate-900 rounded-2xl text-white">
                            <div class="text-blue-400 font-bold mb-2">PEO2</div>
                            <h4 class="font-bold mb-2">Ethical Innovation</h4>
                            <p class="text-xs text-slate-400">Promoting innovation, ethical practice and commitment to serving society.</p>
                        </div>
                        <div class="p-6 bg-slate-900 rounded-2xl text-white">
                            <div class="text-blue-400 font-bold mb-2">PEO3</div>
                            <h4 class="font-bold mb-2">Leadership</h4>
                            <p class="text-xs text-slate-400">Technical knowledge to pursue successful professional careers with team spirit.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 class="text-2xl font-bold text-slate-900 mb-6">Laboratories & Computing Hub</h3>
                    <p class="text-slate-600 mb-6 leading-relaxed">The computing hub is equipped with high-performance Dell i7 systems and servers. We provide environments for CN, Python, OS, and Data Analytics.</p>
                    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100 italic text-sm text-blue-800">
                        "Microsoft Windows and robust Linux environments for core development, utilizing tools like Cisco Packet Tracer and NS-3."
                    </div>
                </section>
            </div>
        `,
        stats: [
            { label: "Intake", value: "240" },
            { label: "NBA Status", value: "Accredited" }
        ],
        bulletPoints: [
            { label: "Analytical Excellence", detail: "Deep insight into mathematical, scientific, and analytical skills required for lifelong learning and problem-solving." },
            { label: "Ethical Innovation", detail: "Promoting technological innovation coupled with ethical practices and a strong commitment to society." },
            { label: "Professional Leadership", detail: "Equipping students with technical knowledge and team spirit to pursue successful professional careers." },
            { label: "State-of-the-Art Labs", detail: "Computing hubs equipped with high-performance systems and environments for AI, OS, and Data Analytics." }
        ]
    },
    "it": {
        title: "Information Technology (IT)",
        subtitle: "Engineering the digital backbone of tomorrow at Maharaja Surajmal Institute of Technology.",
        seo_description: "Discover the Information Technology (IT) department at Maharaja Surajmal Institute of Technology. Learn about our focus on cloud computing and data analytics.",
        category: "Academics",
        heroImage: "/campus-hero.webp",
        heroImageAlt: "Advanced networking and server infrastructure at the MSIT Information Technology department",
        content: `
            <p class="mb-6">The Information Technology department at MSIT is a vibrant hub of innovation. We focus heavily on network infrastructure, cloud engineering, cybersecurity, and data analytics, preparing students to lead the digital transformation of modern industries.</p>
            <h3 class="text-2xl font-semibold text-slate-900 mt-10 mb-4">Core Competencies</h3>
            <p class="mb-6">Our curriculum bridges the gap between software development and systems engineering. Students deploy live applications, configure secure networks, and analyze massive datasets in our advanced IT laboratories.</p>
        `,
        stats: [
            { label: "Intake", value: "120" },
            { label: "NBA Status", value: "Accredited" }
        ],
        bulletPoints: [
            { label: "Cloud & DevOps Labs", detail: "State-of-the-art labs equipped with modern DevOps pipelines and cloud infrastructure for hands-on learning." },
            { label: "Cybersecurity Research", detail: "Advanced research facilities focusing on network security, ethical hacking, and cryptography protocols." },
            { label: "Full-Stack Development", detail: "Comprehensive training in modern web technologies including scalable database architectures and UI/UX." }
        ]
    },
    "ece": {
        title: "Electronics & Communication (ECE)",
        subtitle: "Pioneering hardware and communication at Maharaja Surajmal Institute of Technology.",
        seo_description: "Join the B.Tech ECE program at Maharaja Surajmal Institute of Technology. Explore our advanced labs for VLSI design, IoT, and satellite communication systems.",
        category: "Academics",
        heroImage: "/campus-hero.webp",
        heroImageAlt: "Modern VLSI design and signal processing equipment in the MSIT ECE lab",
        content: `
            <p class="mb-6">The ECE department designs the hardware that runs the software. From microprocessors and VLSI design to satellite communication and IoT, our students build the physical layer of the digital revolution.</p>
            <h3 class="text-2xl font-semibold text-slate-900 mt-10 mb-4">Hardware Innovation</h3>
            <p class="mb-6">Equipped with oscilloscopes, spectrum analyzers, and industry-grade simulation software, the ECE labs provide hands-on experience in circuit design, signal processing, and embedded systems architecture.</p>
        `,
        stats: [
            { label: "Intake", value: "120" },
            { label: "NBA Status", value: "Accredited" }
        ],
        bulletPoints: [
            { label: "VLSI Design Lab", detail: "Hands-on experience in circuit design, microprocessor architecture, and VLSI applications." },
            { label: "IoT & Embedded Systems", detail: "Building the physical layer of the digital revolution with sensors, microcontrollers, and IoT protocols." },
            { label: "Digital Signal Processing", detail: "Advanced simulation software and hardware tools for communication systems and signal processing." }
        ]
    },
    "eee": {
        title: "Electrical & Electronics (EEE)",
        subtitle: "Powering a sustainable technological future at Maharaja Surajmal Institute of Technology.",
        seo_description: "Explore the Electrical & Electronics (EEE) branch at Maharaja Surajmal Institute of Technology. Focus on renewable energy, robotics, and automation excellence.",
        category: "Academics",
        heroImage: "/campus-hero.webp",
        heroImageAlt: "Sustainable power systems and industrial control units in the MSIT Electrical laboratory",
        content: `
            <p class="mb-6">The EEE department addresses the world's growing energy and automation needs. We teach the fundamentals of power generation, renewable energy systems, robotics, and advanced control systems.</p>
            <h3 class="text-2xl font-semibold text-slate-900 mt-10 mb-4">Power & Control</h3>
            <p class="mb-6">Students work with massive industrial motors, design smart grid interfaces, and program robotic arms, merging heavy electrical engineering with precise electronic control.</p>
        `,
        stats: [
            { label: "Intake", value: "60" },
            { label: "NBA Status", value: "Accredited" }
        ],
        bulletPoints: [
            { label: "Renewable Energy Research", detail: "Exploring sustainable power generation and smart grid interfaces for a greener future." },
            { label: "Power Systems Lab", detail: "Working with industrial motors, heavy electrical engineering equipment, and precise control mechanisms." },
            { label: "Robotics & Automation", detail: "Programming robotic arms and developing advanced control systems for modern automation needs." }
        ]
    },
    "applied-sciences": {
        title: "Applied Sciences",
        subtitle: "The mathematical and scientific bedrock at Maharaja Surajmal Institute of Technology.",
        seo_description: "Learn about the Applied Sciences department at Maharaja Surajmal Institute of Technology. We provide the foundational physics and math for B.Tech students.",
        category: "Academics",
        heroImage: "/campus-hero.webp",
        heroImageAlt: "Applied Sciences lab at MSIT where first-year students perform physics experiments",
        content: `
            <p class="mb-6">Before you can engineer, you must understand the universe. The Applied Sciences department imparts rigorous training in Engineering Mathematics, Applied Physics, and Applied Chemistry during the critical first year.</p>
            <h3 class="text-2xl font-semibold text-slate-900 mt-10 mb-4">First-Year Foundation</h3>
            <p class="mb-6">Our highly experienced faculty ensure a smooth transition from high school to university, building analytical thinking muscles and deep scientific comprehension that serves as the foundation for the next three years.</p>
        `,
        stats: [
            { label: "Faculty", value: "25+" },
            { label: "Focus", value: "First Year B.Tech" }
        ],
        bulletPoints: [
            { label: "Engineering Mathematics", detail: "Rigorous training in foundational mathematics to build strong analytical thinking muscles." },
            { label: "Applied Physics Labs", detail: "Deep scientific comprehension through hands-on experiments and foundational physics principles." },
            { label: "Professional Communication", detail: "Developing effective communication and presentation skills essential for future engineering careers." }
        ]
    },
    "academic-calendar": {
        title: "Academic Calendar & Examination Guidelines",
        subtitle: "Official semester datesheets, internal evaluation weightage, and university exam ordinances at MSIT.",
        seo_description: "View official MSIT academic calendar, GGSIPU datesheets, internal examination weightage rules, and attendance requirements.",
        category: "Academics",
        heroImage: "/campus-hero.webp",
        heroImageAlt: "MSIT academic block overview for official semester calendar",
        content: `
            <div class="space-y-12">
                <section>
                    <p class="text-lg text-slate-700 leading-relaxed">
                        The academic calendar of Maharaja Surajmal Institute of Technology aligns rigorously with Guru Gobind Singh Indraprastha University (GGSIPU) regulations, orchestrating a structured academic cycle across lecture semesters, internal evaluations, and university end-term examinations.
                    </p>
                </section>

                <!-- Examination & Evaluation Weightage -->
                <section>
                    <h3 class="text-2xl font-bold text-slate-900 border-l-4 border-blue-600 pl-4 mb-6">Examination Scheme & Weightage Rules</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                            <span class="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-lg uppercase tracking-wider">Theory Courses (100 Marks Total)</span>
                            <ul class="mt-4 space-y-3 text-sm text-slate-700">
                                <li class="flex justify-between border-b border-slate-200 pb-2">
                                    <span class="font-semibold">Internal Continuous Assessment:</span>
                                    <span class="font-extrabold text-blue-700">25 Marks</span>
                                </li>
                                <li class="text-xs text-slate-500 pl-2">
                                    • Mid-Term / Minor Examination: <strong>15 Marks</strong><br>
                                    • Class Assignments, Quizzes & Regularity: <strong>10 Marks</strong>
                                </li>
                                <li class="flex justify-between pt-2">
                                    <span class="font-semibold">University End-Term Theory Exam:</span>
                                    <span class="font-extrabold text-indigo-700">75 Marks</span>
                                </li>
                            </ul>
                        </div>
                        <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                            <span class="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-lg uppercase tracking-wider">Practical Labs (100 Marks Total)</span>
                            <ul class="mt-4 space-y-3 text-sm text-slate-700">
                                <li class="flex justify-between border-b border-slate-200 pb-2">
                                    <span class="font-semibold">Internal Lab Performance:</span>
                                    <span class="font-extrabold text-emerald-700">40 Marks</span>
                                </li>
                                <li class="text-xs text-slate-500 pl-2">
                                    • Day-to-day Lab Journal & Execution: <strong>20 Marks</strong><br>
                                    • Internal Lab Viva & Quiz: <strong>20 Marks</strong>
                                </li>
                                <li class="flex justify-between pt-2">
                                    <span class="font-semibold">External Practical / Viva Voce:</span>
                                    <span class="font-extrabold text-teal-700">60 Marks</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <!-- Datesheets, Re-Evaluation & Ordinance 11 -->
                <section>
                    <h3 class="text-2xl font-bold text-slate-900 border-l-4 border-amber-600 pl-4 mb-6">University Regulations & Key Datesheets</h3>
                    <div class="space-y-4">
                        <div class="p-5 bg-amber-50/70 border border-amber-200 rounded-2xl">
                            <h4 class="font-bold text-amber-950 text-base mb-2">📌 GGSIPU Ordinance 11 (Mandatory Attendance Requirement)</h4>
                            <p class="text-sm text-amber-900 leading-relaxed">
                                Students must secure <strong>not less than 75% attendance</strong> in every individual subject. Candidates falling below this statutory limit will be placed on the official detention list and prohibited from appearing in external semester examinations.
                            </p>
                        </div>
                        <div class="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                            <h4 class="font-bold text-slate-900 text-base mb-2">📄 Re-Checking & Re-Evaluation Notification Procedure</h4>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                Following publication of university results, students may apply for re-checking of answer scripts or inspection/certified copies within 15 days by submitting prescribed GGSIPU Examination Division forms alongside the requisite challan fee.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        `,
        stats: [
            { label: "Current Sem", value: "Even (Jan-May)" },
            { label: "Working Days", value: "90+" }
        ],
        bulletPoints: [
            { label: "Download PDF Calendar", detail: "Click here to learn more about download pdf calendar. This section provides comprehensive information and resources tailored to this topic." },
            { label: "Exam Schedules", detail: "Click here to learn more about exam schedules. This section provides comprehensive information and resources tailored to this topic." },
            { label: "List of Holidays", detail: "Click here to learn more about list of holidays. This section provides comprehensive information and resources tailored to this topic." }
        ]
    },
    "timetable": {
        title: "Time Table & Syllabus",
        subtitle: "Curriculum structure and daily schedules for Maharaja Surajmal Institute of Technology.",
        seo_description: "Access the latest class timetables and B.Tech syllabus at Maharaja Surajmal Institute of Technology. Get detailed course structure and laboratory schedules.",
        category: "Academics",
        heroImage: "/campus-hero.webp",
        heroImageAlt: "Students in a technical lecture hall at MSIT following the semester syllabus",
        content: `
            <p class="mb-6">Access official GGSIPU syllabi for all departments and branches. The syllabus outlines learning objectives, textbooks, unit breakdowns, and evaluation schemes for every subject.</p>
            <h3 class="text-2xl font-semibold text-slate-900 mt-10 mb-4">Class Schedules</h3>
            <p class="mb-6">Department-wise timetables are updated at the start of every semester to ensure an optimal balance of lectures, tutorials, and intensive laboratory sessions.</p>
        `,
        stats: [
            { label: "Updated", value: "Start of Sem" },
            { label: "Format", value: "GGSIPU Pattern" }
        ],
        bulletPoints: [
            { label: "B.Tech Syllabus (All Branches)", detail: "Click here to learn more about b.tech syllabus (all branches). This section provides comprehensive information and resources tailored to this topic." },
            { label: "Section-wise Timetables", detail: "Click here to learn more about section-wise timetables. This section provides comprehensive information and resources tailored to this topic." },
            { label: "Lab Batches", detail: "Click here to learn more about lab batches. This section provides comprehensive information and resources tailored to this topic." }
        ]
    },
    "research": {
        title: "Research & Innovation Ecosystem",
        subtitle: "Advancing frontier computing, funded research projects, and intellectual property at MSIT.",
        seo_description: "Explore funded research grants, patents, IEEE conferences, and Innovation Council initiatives at Maharaja Surajmal Institute of Technology.",
        category: "Academics",
        heroImage: "/campus/main-academic-building.webp",
        heroImageAlt: "MSIT Advanced Computing Research Laboratories",
        content: `
            <div class="space-y-12">
                <section>
                    <p class="text-lg text-slate-700 leading-relaxed">
                        Maharaja Surajmal Institute of Technology fosters an intensive research and development ecosystem under the mentorship of Director Prof. (Dr.) Avanish Kumar Srivastava (former Director CSIR-AMPRI and Stanford-ranked top 2% global scientist), driving industrial innovation and multidisciplinary patents.
                    </p>
                </section>

                <!-- Sponsored Research Projects -->
                <section>
                    <h3 class="text-2xl font-bold text-slate-900 border-l-4 border-blue-600 pl-4 mb-6">Sponsored Research Grants & Centers of Excellence</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2.5 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-lg">Corporate CSR Grant</span>
                                <span class="text-sm font-extrabold text-purple-700">₹30,00,000/-</span>
                            </div>
                            <h4 class="font-bold text-slate-900 text-base mb-2">Center of Excellence in Computational Intelligence</h4>
                            <p class="text-xs text-slate-600 leading-relaxed">
                                Funded by <strong>Petronet LNG Ltd.</strong>, this CoE in the Department of CSE is equipped with state-of-the-art multi-GPU deep learning servers, high-performance compute clusters, and cloud-assisted AI prototyping environments.
                            </p>
                        </div>
                        <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-lg">AICTE National Scheme</span>
                                <span class="text-sm font-extrabold text-blue-700">₹1,10,00,000/-</span>
                            </div>
                            <h4 class="font-bold text-slate-900 text-base mb-2">AICTE IDEA Lab Prototyping Infrastructure</h4>
                            <p class="text-xs text-slate-600 leading-relaxed">
                                The Idea Development, Evaluation & Application (IDEA) Lab provides 3D printers, laser cutters, embedded hardware workstations, and FPGA development kits to nurture hands-on product creation across all undergraduate departments.
                            </p>
                        </div>
                    </div>
                </section>

                <!-- Patents Table -->
                <section>
                    <h3 class="text-2xl font-bold text-slate-900 border-l-4 border-emerald-600 pl-4 mb-6">Published & Granted Patents (Selected Portfolio)</h3>
                    <div class="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
                        <table class="w-full text-left text-sm text-slate-700">
                            <thead class="bg-slate-50 text-xs uppercase tracking-wider text-slate-700 border-b border-slate-200">
                                <tr>
                                    <th class="px-5 py-3 font-bold">Patent Title</th>
                                    <th class="px-5 py-3 font-bold">Filing / Grant Authority</th>
                                    <th class="px-5 py-3 font-bold">Status</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 text-xs">
                                <tr>
                                    <td class="px-5 py-3 font-semibold text-slate-900">IoT-Enabled Real-Time Soil Nitrogen & Moisture Telemetry Probe</td>
                                    <td class="px-5 py-3 text-slate-600">Indian Patent Office (Govt. of India)</td>
                                    <td class="px-5 py-3 font-bold text-emerald-700">Granted</td>
                                </tr>
                                <tr>
                                    <td class="px-5 py-3 font-semibold text-slate-900">Low-Power Embedded Hardware Loop for Indic Speech Synthesis</td>
                                    <td class="px-5 py-3 text-slate-600">Indian Patent Office (Govt. of India)</td>
                                    <td class="px-5 py-3 font-bold text-blue-700">Published</td>
                                </tr>
                                <tr>
                                    <td class="px-5 py-3 font-semibold text-slate-900">Autonomous Swarm Drone Navigation Protocol for Precision Agriculture</td>
                                    <td class="px-5 py-3 text-slate-600">Indian Patent Office (Govt. of India)</td>
                                    <td class="px-5 py-3 font-bold text-blue-700">Published</td>
                                </tr>
                                <tr>
                                    <td class="px-5 py-3 font-semibold text-slate-900">Nanocomposite Photocatalyst Device for Industrial Effluent Purification</td>
                                    <td class="px-5 py-3 text-slate-600">Indian Patent Office (Govt. of India)</td>
                                    <td class="px-5 py-3 font-bold text-emerald-700">Granted</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <!-- Conferences & IIC Rating -->
                <section>
                    <h3 class="text-2xl font-bold text-slate-900 border-l-4 border-indigo-600 pl-4 mb-6">Conferences, IEEE Proceedings & Innovation Council</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                            <h4 class="font-bold text-slate-900 mb-2">IEEE Technically-Approved Conferences</h4>
                            <p class="text-xs text-slate-600 leading-relaxed mb-3">
                                MSIT convenes the biennial <strong>International Conference on Artificial Intelligence and Applications (ICAIA)</strong>, approved by IEEE Delhi Section, alongside national conference <strong>NCI-TIDE</strong>, with peer-reviewed proceedings indexed in Scopus and IEEE Xplore.
                            </p>
                        </div>
                        <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                            <h4 class="font-bold text-slate-900 mb-2">MoE Institutional Innovation Council (IIC)</h4>
                            <p class="text-xs text-slate-600 leading-relaxed mb-3">
                                Awarded high star ratings by the Ministry of Education (MoE) Innovation Cell. MSIT implements the <strong>National Innovation and Startup Policy (NISP)</strong>, providing patent filing incentives, pre-incubation grants, and student IP ownership.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        `,
        stats: [
            { label: "Publications", value: "500+" },
            { label: "Patents Filed", value: "25+" }
        ],
        bulletPoints: [
            { label: "Conference Proceedings", detail: "Click here to learn more about conference proceedings. This section provides comprehensive information and resources tailored to this topic." },
            { label: "Funded Projects", detail: "Click here to learn more about funded projects. This section provides comprehensive information and resources tailored to this topic." },
            { label: "Undergraduate Research", detail: "Click here to learn more about undergraduate research. This section provides comprehensive information and resources tailored to this topic." }
        ]
    }
};
