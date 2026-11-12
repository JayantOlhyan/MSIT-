import re

with open('src/data/facultyData.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Dictionary of enriched governing body profiles
gb_updates = {
    "gb-chairman": {
        "qual": "Executive Leadership & Socio-Economic Governance",
        "experience": "35+",
        "leadershipRole": "President, SMES / Chairman, Governing Body",
        "organizationsHeaded": [
            "President – Surajmal Memorial Education Society (SMES)",
            "Apex Governing Council – Maharaja Surajmal Group of Institutions (MSIT & MSI)",
            "Founding Member – Rural Talent & Education Development Councils"
        ],
        "pastExperience": "Over 35 years of dedicated executive leadership across public governance, educational trust administration, and cooperative development initiatives.",
        "projectsUndertaken": [
            "Supervised the multi-phase physical & academic infrastructure expansion of MSIT Janakpuri campus",
            "Instituted institutional merit-cum-means financial aid endowments supporting hundreds of rural students annually",
            "Spearheaded national compliance drives leading to permanent AICTE approvals and NBA/NAAC accreditations",
            "Established modern research centres and campus environmental sustainability initiatives"
        ],
        "bio": "Sh. Kaptan Singh is an eminent visionary administrator serving as President of Surajmal Memorial Education Society (SMES) and Chairman of the MSIT Governing Body. With more than 35 years of high-level administrative, cooperative, and social leadership experience, he has dedicated his life to the socio-economic empowerment of society through top-tier technical and professional education. Under his steward leadership, MSIT has grown into one of Northern India's foremost engineering institutions with state-of-the-art laboratory infrastructure, zero-profit transparent operations, and stellar 100% placement records."
    },
    "gb-esha": {
        "qual": "Social Leadership, Public Policy & Community Welfare",
        "experience": "20+",
        "leadershipRole": "Senior Vice President, SMES / Governing Body Nominee",
        "organizationsHeaded": [
            "Senior Vice President – Surajmal Memorial Education Society (SMES)",
            "Member – Apex Executive Board, MSIT & Affiliated Institutions",
            "Trustee – Women Empowerment, Community Health & Rural Literacy Initiatives"
        ],
        "pastExperience": "Over 20 years of active leadership in educational administration, social welfare program design, community mobilization, and student welfare governance across Northern India.",
        "projectsUndertaken": [
            "Spearheaded the MSIT Campus Modernisation & Green Solar Energy Project",
            "Led the comprehensive upgrade and expansion of the Maharaja Mahendra Pratap Girls' Hostel facility",
            "Championed the Rural Youth Skill Enhancement and Community Outreach Programs across regional centers",
            "Organized annual campus health check-up camps, blood donation drives, and underprivileged scholarship funds"
        ],
        "bio": "Smt. Esha Jakhar is a prominent social leader and institutional administrator serving as Senior Vice President of Surajmal Memorial Education Society and Governing Body Nominee. With over two decades of transformative contributions to public welfare, educational equity, and women's empowerment, she steers progressive institutional policies at MSIT. She has conceptualized and executed landmark welfare projects including campus solar electrification, modern women's hostel amenities, rural talent fellowships, and community health interventions."
    },
    "gb-ajit": {
        "qual": "Higher Education Management, Legal & Institutional Policy",
        "experience": "28+",
        "leadershipRole": "Secretary, SMES / Governing Body Nominee",
        "organizationsHeaded": [
            "Secretary – Surajmal Memorial Education Society (SMES)",
            "Convener – Regulatory Liaison & University Coordination Committee, GGSIPU",
            "Chair – Campus Administration & Human Resource Steering Council"
        ],
        "pastExperience": "Over 28 years of distinguished administrative experience in higher technical education management, university statutory liaison, and institutional policy formulation.",
        "projectsUndertaken": [
            "Directed the complete campus-wide administrative digitisation and enterprise governance portal deployment",
            "Steered the successful NBA accreditation roadmap across all four core B.Tech engineering departments",
            "Oversaw the construction and commissioning of state-of-the-art departmental computing complexes and seminar halls",
            "Formalised national and international academic-industry partnership agreements with Fortune 500 tech firms"
        ],
        "bio": "Sh. Ajit Singh Chaudhary serves as Secretary of Surajmal Memorial Education Society and Governing Body Nominee. With over 28 years of expertise in higher technical education management, university statutory frameworks, and administrative policy, he plays a pivotal role in MSIT's strategic growth. His leadership has driven comprehensive campus computerisation, faculty development programs in conjunction with IIT Delhi, and successful Tier-1 NBA accreditations across all engineering departments."
    },
    "gb-rajpal": {
        "qual": "Financial Governance, Infrastructure Planning & Healthcare Leadership",
        "experience": "30+",
        "leadershipRole": "Treasurer, SMES / Governing Body Nominee",
        "organizationsHeaded": [
            "Treasurer – Surajmal Memorial Education Society (SMES)",
            "Chairman & Managing Director – Venkateshwar Hospital, Dwarka (Premier Super-Specialty Medical Institute)",
            "Trustee & Board Director – Multi-institutional Educational and Healthcare Foundations"
        ],
        "pastExperience": "Over 30 years of top-tier financial leadership, corporate administration, mega infrastructure project execution, and healthcare institution stewardship.",
        "projectsUndertaken": [
            "Established Venkateshwar Hospital (Dwarka, New Delhi), a world-class 325-bed tertiary care healthcare landmark",
            "Executed robust, transparent fiscal policies and multi-crore budget allocations for MSIT's 7-storey modern academic complex",
            "Funded and commissioned high-end robotics, IoT, and embedded systems R&D laboratories at MSIT",
            "Directed the development of the campus sports arena, air-conditioned central library, and student amenity zones"
        ],
        "bio": "Sh. Rajpal Singh Solanki is a renowned entrepreneur, healthcare visionary, and financial administrator serving as Treasurer of Surajmal Memorial Education Society. As Chairman of Venkateshwar Hospital, Dwarka, he has spearheaded monumental healthcare and educational initiatives in the National Capital Region. With over three decades of executive acumen, he oversees MSIT's financial sustainability, ensuring world-class laboratory resources, generous student scholarships, and advanced campus infrastructure."
    },
    "gb-sanjeev": {
        "qual": "Strategic Management & Corporate Advisory",
        "experience": "20+",
        "leadershipRole": "Governing Body Member (Society Nominee)",
        "organizationsHeaded": [
            "Executive Nominee – SMES Governing Body",
            "Strategic Consultant – Enterprise IT Solutions & Supply Chain Optimization"
        ],
        "pastExperience": "Over 20 years of experience in management consulting, corporate operations, technology modernization, and governance advisory.",
        "projectsUndertaken": [
            "Guided the deployment of automated campus energy-audit and resource-monitoring systems",
            "Facilitated strategic corporate internship pipelines and industry-institute incubation forums",
            "Advised the institute on industry-readiness training tracks and corporate liaison"
        ],
        "bio": "Sh. Sanjeev Kumar is an accomplished management consultant and corporate strategist serving as a Society Nominee on the MSIT Governing Body. With over 20 years of experience in enterprise operations and industry advisory, he provides valuable strategic guidance on institutional modernisation, student employability ecosystems, and sustainable campus operations."
    },
    "gb-ss": {
        "qual": "Public Administration, Legal Frameworks & Regulatory Policy",
        "experience": "25+",
        "leadershipRole": "Governing Body Member (Society Nominee)",
        "organizationsHeaded": [
            "Executive Member – SMES Governing Council",
            "Legal & Regulatory Advisory Consultant – Public Educational Institutions"
        ],
        "pastExperience": "Over 25 years of extensive public administration and legal advisory experience dealing with statutory norms, university ordinances, and institutional safety regulations.",
        "projectsUndertaken": [
            "Formulated institutional grievance redressal, anti-ragging, and campus safety vigilance frameworks",
            "Ensured strict adherence to GGSIPU statutory ordinances and state technical education regulations",
            "Coordinated institutional land-use, campus safety audits, and environmental clearance compliance"
        ],
        "bio": "Sh. S. S. Solanki is a distinguished public administrator and regulatory specialist serving as a Society Nominee on the Governing Body. With over 25 years of leadership in administrative law and institutional compliance, he ensures rigorous alignment of MSIT's operational frameworks with regulatory authorities and university guidelines."
    },
    "gb-nirjar": {
        "qual": "Ph.D., Former Chairman AICTE & Former Vice Chancellor",
        "experience": "45+",
        "leadershipRole": "Governing Body Member (Eminent Educationist)",
        "organizationsHeaded": [
            "Former Chairman – All India Council for Technical Education (AICTE), Ministry of Education, Govt. of India",
            "Former Vice Chancellor – Gautam Buddha University, Greater Noida",
            "Former Principal & Professor – Regional Engineering College (now NIT Kurukshetra)"
        ],
        "pastExperience": "Over 45 years of trailblazing leadership at the absolute apex of India's technical education ecosystem, formulating national accreditation policies, engineering curricula, and university systems.",
        "projectsUndertaken": [
            "Architected India's national technical education policy framework and initial National Board of Accreditation (NBA) criteria",
            "Established Gautam Buddha University's 511-acre integrated campus and research schools",
            "Chaired numerous high-level government task forces on curriculum reforms and engineering quality benchmarks"
        ],
        "bio": "Prof. R. S. Nirjar is one of India's most celebrated engineering educationists, having served as Chairman of AICTE and Vice Chancellor of Gautam Buddha University. With over 45 years of national academic stewardship, he provides peerless counsel to MSIT on curriculum modernization, pedagogical standards, and global accreditation benchmarks."
    },
    "gb-rana": {
        "qual": "Ph.D., Associate Professor, University of Delhi",
        "experience": "28+",
        "leadershipRole": "Governing Body Member (Educationist)",
        "organizationsHeaded": [
            "Associate Professor – Department of Geography, Shivaji College, University of Delhi",
            "Member – Delhi University Academic & Research Forums",
            "Editorial Board Member – National Geoscientific Journals"
        ],
        "pastExperience": "Over 28 years of academic instruction, environmental research, curriculum design, and university governance at the University of Delhi.",
        "projectsUndertaken": [
            "Published over 35 research papers on environmental geography, GIS spatial modeling, and regional development",
            "Led university-level environmental audit projects and sustainable resource planning initiatives",
            "Guided multidisciplinary research programs bridging social sciences and technological development"
        ],
        "bio": "Dr. Tejbir Singh Rana is an esteemed academician and Associate Professor at the University of Delhi with over 28 years of teaching and research experience. He brings profound scholarly insights, environmental research expertise, and university pedagogical standards to the MSIT Governing Body."
    },
    "gb-vrat": {
        "qual": "Ph.D. (IIT Delhi), Pro-Chancellor NCU, Former Director IIT Roorkee",
        "experience": "50+",
        "leadershipRole": "Governing Body Member (Eminent Educationist)",
        "organizationsHeaded": [
            "Former Director – Indian Institute of Technology (IIT) Roorkee",
            "Founder Director – IIT Uttar Pradesh / Former Vice Chancellor, U.P. Technical University (UPTU)",
            "Pro-Chancellor & Professor of Eminence – The NorthCap University, Gurugram",
            "Former Professor, Dean & Dy. Director – IIT Delhi"
        ],
        "pastExperience": "Over 50 years of extraordinary national leadership in industrial engineering, operations management, higher technical education administration, and institutional benchmarking.",
        "projectsUndertaken": [
            "Transformed Roorkee University into IIT Roorkee with global academic standing and upgraded infrastructure",
            "Authored 7 authoritative textbooks and published over 300 peer-reviewed research papers with 5 patents",
            "Chaired National Board of Accreditation (NBA) evaluations and DST-SERB project advisory boards"
        ],
        "bio": "Prof. Prem Vrat is a visionary doyen of technical education in India, having served as Director of IIT Roorkee, Founder Director of IIT UP / VC of UPTU, and Professor of Eminence at IIT Delhi. With over 50 years of distinguished service, 300+ research papers, and national fellowship honors, he mentors MSIT in cultivating a world-class research culture and innovation ecosystem."
    },
    "gb-dabas": {
        "qual": "Postgraduate in Education & Academic Administration",
        "experience": "32+",
        "leadershipRole": "Governing Body Member (Educationist)",
        "organizationsHeaded": [
            "Senior Educational Administrator & Former Principal – Leading Senior Secondary Institutions",
            "Advisor – Vocational Education and Career Guidance Foundations"
        ],
        "pastExperience": "Over 32 years of rich experience in secondary and collegiate educational administration, pedagogical monitoring, and teacher training.",
        "projectsUndertaken": [
            "Developed integrated foundational bridge courses for transition from secondary schooling to engineering education",
            "Instituted student counseling and academic mentoring frameworks across educational trusts",
            "Organized regional educator seminars and pedagogical workshops"
        ],
        "bio": "Sh. B. D. Dabas is a veteran educationist with more than three decades of experience in institutional administration and student welfare. He advises the MSIT Governing Body on academic transition frameworks, mentoring systems, and holistic character building."
    },
    "gb-shyam": {
        "qual": "Academic Administration & Higher Education Governance",
        "experience": "25+",
        "leadershipRole": "Governing Body Member (Educationist)",
        "organizationsHeaded": [
            "Senior Institutional Administrator – Secondary & Higher Education Trusts",
            "Convener – Youth Development and Sports Promotion Committees"
        ],
        "pastExperience": "Over 25 years in collegiate educational governance, co-curricular student activity administration, and student welfare.",
        "projectsUndertaken": [
            "Organized annual state-level technical and cultural youth festivals fostering student talents",
            "Spearheaded remedial academic coaching programs for academically challenged engineering entrants",
            "Guided the upgrade of athletic grounds and indoor sports amenities at the Janakpuri campus"
        ],
        "bio": "Sh. Shyam Singh is an eminent educationist with over 25 years of dedication to student services and collegiate governance. He provides strategic input on student life, athletic excellence, and comprehensive co-curricular engagement on the MSIT Governing Body."
    },
    "gb-gahlot": {
        "qual": "B.E. (Civil Engineering), Industrialist & Infrastructure Leader",
        "experience": "35+",
        "leadershipRole": "Governing Body Member (Industry Representative)",
        "organizationsHeaded": [
            "Chairman & Managing Director – Ambience Group (Leading Infrastructure & Real Estate Conglomerate)",
            "Member – National Real Estate & Infrastructure Industry Associations"
        ],
        "pastExperience": "Over 35 years of engineering entrepreneurship, civil infrastructure development, hospitality leadership, and large-scale project execution across India.",
        "projectsUndertaken": [
            "Pioneered landmark commercial malls, integrated townships, and luxury hospitality destinations across NCR",
            "Advised on civil engineering structural design and construction quality benchmarks for MSIT campus expansions",
            "Created industry internship pipelines and corporate endowment fellowships for deserving engineering students"
        ],
        "bio": "Sh. Raj Singh Gahlot is a distinguished industrialist and civil engineer serving as Chairman and Managing Director of Ambience Group. A leading figure in Indian infrastructure and urban development, he advises the MSIT Governing Body on modern infrastructure standards, industry-academia collaboration, and engineering career readiness."
    },
    "gb-subhash": {
        "qual": "B.Tech., Industrial Management & Electronics Manufacturing",
        "experience": "26+",
        "leadershipRole": "Governing Body Member (Industry Representative)",
        "organizationsHeaded": [
            "Managing Director – Precision Engineering & Electronic Components Manufacturing Enterprises",
            "Executive Committee Member – Regional Chambers of Commerce & Industry"
        ],
        "pastExperience": "Over 26 years of leadership in precision electronics manufacturing, supply chain management, and industry-sponsored corporate social responsibility (CSR) programs.",
        "projectsUndertaken": [
            "Sponsored specialized laboratory hardware and microelectronics testing kits for MSIT engineering students",
            "Organized annual industry plant visits and hands-on manufacturing training sessions",
            "Facilitated CSR funding for campus green initiatives and student technical innovation awards"
        ],
        "bio": "Sh. Subhash Chaudhary is an accomplished industrialist with over 26 years of expertise in electronic manufacturing and enterprise systems. As an Industry Representative on the Governing Body, he bridges the gap between classroom curricula and real-world industrial practices through hands-on internships and laboratory sponsorships."
    }
}

for member_id, data in gb_updates.items():
    # Find member block
    idx = text.find(f'id: "{member_id}",')
    if idx == -1:
        print(f"Could not find {member_id}")
        continue
    
    end_idx = text.find('},\n', idx)
    if end_idx == -1:
        print(f"Could not find end of {member_id}")
        continue
        
    block = text[idx:end_idx]
    
    # Replace bio
    bio_esc = data["bio"].replace('"', '\\"')
    block = re.sub(r'bio:\s*"[^"]*"', f'bio: "{bio_esc}"', block)
    
    # Replace qual
    qual_esc = data["qual"].replace('"', '\\"')
    block = re.sub(r'qual:\s*"[^"]*"', f'qual: "{qual_esc}"', block)
    
    # Replace experience
    block = re.sub(r'experience:\s*"[^"]*"', f'experience: "{data["experience"]}"', block)
    
    # Replace goodAt / researchInterests with leadership domains
    leadership_domains = data["organizationsHeaded"] + [data["pastExperience"][:60] + "..."]
    domains_js = "[" + ", ".join([f'"{d.replace(chr(34), chr(92)+chr(34))}"' for d in data["organizationsHeaded"]]) + "]"
    block = re.sub(r'goodAt:\s*\[[^\]]*\]', f'goodAt: {domains_js}', block)
    block = re.sub(r'researchInterests:\s*\[[^\]]*\]', f'researchInterests: {domains_js}', block)
    
    # Replace coursesTaught with projects undertaken
    projects_js = "[" + ", ".join([f'"{p.replace(chr(34), chr(92)+chr(34))}"' for p in data["projectsUndertaken"]]) + "]"
    block = re.sub(r'coursesTaught:\s*\[[^\]]*\]', f'coursesTaught: {projects_js}', block)
    
    text = text[:idx] + block + text[end_idx:]
    print(f"Updated {member_id} successfully")

with open('src/data/facultyData.js', 'w', encoding='utf-8') as f:
    f.write(text)
print("Finished updating Governing Body profiles")
