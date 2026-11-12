import re

with open('src/data/pages/aboutData.js', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update vision-mission stats & bulletPoints
vm_old = """        stats: [
            { label: "Global Alumni", value: "15,000+" },
            { label: "Research Centers", value: "4" }
        ],
        bulletPoints: [
            { label: "Technical Excellence", detail: "Click here to learn more about technical excellence. This section provides comprehensive information and resources tailored to this topic." },
            { label: "National & Global Readiness", detail: "Click here to learn more about national & global readiness. This section provides comprehensive information and resources tailored to this topic." },
            { label: "Values-Driven Education", detail: "Click here to learn more about values-driven education. This section provides comprehensive information and resources tailored to this topic." }
        ]"""

vm_new = """        stats: [
            { label: "Global Alumni", value: "15,000+", link: "/alumni-network", desc: "Connect with 15k+ alumni across global tech leaders" },
            { label: "Research Centers", value: "4", link: "/facilities?tab=labs#research-centers", desc: "Explore AI, IoT, VLSI & Robotics Centers of Excellence" }
        ],
        bulletPoints: [
            { 
                label: "Technical Excellence", 
                detail: "Fostering state-of-the-art engineering pedagogy with NBA-accredited curricula, high-performance computing clusters, advanced IoT and VLSI design laboratories, rigorous industry projects, and consistently winning national hackathons.",
                url: "/academics"
            },
            { 
                label: "National & Global Readiness", 
                detail: "Empowering students with industry-leading placement offers at premier product MNCs (Google, Microsoft, Amazon, Adobe) and admissions into elite global universities with high GATE, GRE, and CAT percentiles.",
                url: "/placements"
            },
            { 
                label: "Values-Driven Education", 
                detail: "Upholding the timeless humanitarian ideals of Maharaja Surajmal — instilling self-discipline, selfless social service, environmental consciousness, ethical professionalism, and rural youth empowerment.",
                url: "/history"
            }
        ]"""

if vm_old in text:
    text = text.replace(vm_old, vm_new)
    print("Replaced vision-mission stats and bulletPoints")
else:
    print("WARNING: vm_old not found")

# 2. Update history bulletPoints
hist_old = """        bulletPoints: [
            { label: "Foundation Stone Dec 12, 1978", detail: "Click here to learn more about foundation stone dec 12, 1978. This section provides comprehensive information and resources tailored to this topic." },
            { label: "Affiliated to GGSIPU", detail: "Click here to learn more about affiliated to ggsipu. This section provides comprehensive information and resources tailored to this topic." },
            { label: "AICTE Approved Grade A", detail: "Click here to learn more about aicte approved grade a. This section provides comprehensive information and resources tailored to this topic." }
        ]"""

hist_new = """        bulletPoints: [
            { 
                label: "Foundation Stone Dec 12, 1978", 
                detail: "The historic foundation stone of the institute was ceremoniously laid by Shri Neelam Sanjiva Reddy, President of India, on December 12, 1978, in an auspicious ceremony presided over by Chaudhary Charan Singh, marking the birth of a premier educational landmark in New Delhi.",
                url: "/virtual-tour#foundation-stone-plaque"
            },
            { 
                label: "Affiliated to GGSIPU", 
                detail: "MSIT has been permanently affiliated to Guru Gobind Singh Indraprastha University (GGSIPU), Delhi since its inception in 2001, consistently securing top academic ranks, Chancellor Gold Medals, and university merit positions.",
                url: "/mandatory-disclosures"
            },
            { 
                label: "AICTE Approved Grade A", 
                detail: "Approved by the All India Council for Technical Education (AICTE), Ministry of Education, Govt. of India, with NAAC Grade 'A' and NBA accreditations across all its core engineering departments.",
                url: "/mandatory-disclosures#nba-accreditation-status"
            }
        ]"""

if hist_old in text:
    text = text.replace(hist_old, hist_new)
    print("Replaced history bulletPoints")
else:
    print("WARNING: hist_old not found")

# 3. Update about bulletPoints
about_old = """        bulletPoints: [
            { label: "NBA Accredited", detail: "Click here to learn more about nba accredited. This section provides comprehensive information and resources tailored to this topic." },
            { label: "AICTE Approved", detail: "Click here to learn more about aicte approved. This section provides comprehensive information and resources tailored to this topic." },
            { label: "8-Acre Green Campus", detail: "Click here to learn more about 8-acre green campus. This section provides comprehensive information and resources tailored to this topic." },
            { label: "University Toppers", detail: "Click here to learn more about university toppers. This section provides comprehensive information and resources tailored to this topic." }
        ]"""

about_new = """        bulletPoints: [
            { 
                label: "NBA Accredited", 
                detail: "All four core undergraduate engineering branches (CSE, IT, ECE, EEE) are accredited by the National Board of Accreditation (NBA), verifying world-class outcome-based education and international standard pedagogy.",
                url: "/mandatory-disclosures#nba-accreditation-status"
            },
            { 
                label: "AICTE Approved", 
                detail: "Officially approved by the All India Council for Technical Education (AICTE), Ministry of Education, Govt. of India, ensuring premier standards of technical infrastructure and faculty competence.",
                url: "/mandatory-disclosures"
            },
            { 
                label: "8-Acre Green Campus", 
                detail: "A serene, eco-friendly 8-acre campus in Janakpuri, New Delhi featuring seven-storeyed modern academic complexes, extensive athletic stadium grounds, championship courts, and green lawns.",
                url: "/facilities"
            },
            { 
                label: "University Toppers", 
                detail: "MSIT students consistently secure exemplary academic results under GGSIPU, earning University Gold Medals, academic merit honours, and elite product-company placements.",
                url: "/placements"
            }
        ]"""

if about_old in text:
    text = text.replace(about_old, about_new)
    print("Replaced about bulletPoints")
else:
    print("WARNING: about_old not found")

# 4. Update administration bulletPoints
admin_old = """        bulletPoints: [
            { label: "Director: Prof. Dr. A. K. Srivastava", detail: "Click here to learn more about director: prof. dr. a. k. srivastava. This section provides comprehensive information and resources tailored to this topic." },
            { label: "Administrative Stability", detail: "Click here to learn more about administrative stability. This section provides comprehensive information and resources tailored to this topic." },
            { label: "Academic Excellence", detail: "Click here to learn more about academic excellence. This section provides comprehensive information and resources tailored to this topic." }
        ]"""

admin_new = """        bulletPoints: [
            { 
                label: "Director: Prof. (Dr.) Avanish Kumar Srivastava", 
                detail: "Internationally acclaimed scientist, FNAE Fellow, and former CSIR Director leading MSIT's research ecosystem, global academic partnerships, and innovation-driven pedagogy.",
                url: "/faculty?id=dir-1"
            },
            { 
                label: "Administrative Stability", 
                detail: "Robust, transparent institutional governance supported by Surajmal Memorial Education Society, ensuring disciplined administration, student welfare focus, and zero-profit operations.",
                url: "/fromdesk"
            },
            { 
                label: "Academic Excellence", 
                detail: "State-of-the-art laboratory facilities, seasoned faculty mentorship, continuous faculty development programs, and outstanding academic outcomes across all departments.",
                url: "/academics"
            }
        ]"""

if admin_old in text:
    text = text.replace(admin_old, admin_new)
    print("Replaced administration bulletPoints")
else:
    print("WARNING: admin_old not found")

# 5. Update govern bulletPoints
gov_old = """        bulletPoints: [
            { label: "15 Governing Members", detail: "Click here to learn more about 15 governing members. This section provides comprehensive information and resources tailored to this topic." },
            { label: "6 Advisory Members", detail: "Click here to learn more about 6 advisory members. This section provides comprehensive information and resources tailored to this topic." },
            { label: "IIT & JMI Affiliates", detail: "Click here to learn more about iit & jmi affiliates. This section provides comprehensive information and resources tailored to this topic." }
        ]"""

gov_new = """        bulletPoints: [
            { 
                label: "15 Governing Members", 
                detail: "Distinguished council of senior educationists, society trustees, university nominees, and industry leaders steering institutional policy and infrastructure development.",
                url: "/faculty"
            },
            { 
                label: "6 Advisory Members", 
                detail: "Renowned senior professors and former directors from IIT Delhi, Jamia Millia Islamia, and National Physical Laboratory advising on curriculum and research benchmarks.",
                url: "/faculty"
            },
            { 
                label: "IIT & JMI Affiliates", 
                detail: "Strategic advisory inputs from national academic luminaries ensuring high-impact research, PhD mentorship, and outcome-based engineering education.",
                url: "/facilities?tab=labs#research-centers"
            }
        ]"""

if gov_old in text:
    text = text.replace(gov_old, gov_new)
    print("Replaced govern bulletPoints")
else:
    print("WARNING: gov_old not found")

# 6. Update fromdesk leadership names with Shri / Sh. salutations and bulletPoints
text = text.replace('<h4 class="text-lg font-bold text-slate-900">Kaptan Singh</h4>', '<h4 class="text-lg font-bold text-slate-900">Sh. Kaptan Singh</h4>')
text = text.replace('<h4 class="text-lg font-bold text-slate-900">Ajit Singh</h4>', '<h4 class="text-lg font-bold text-slate-900">Sh. Ajit Singh Chaudhary</h4>')
text = text.replace('<h4 class="text-lg font-bold text-slate-900">Rajpal Singh Solanki</h4>', '<h4 class="text-lg font-bold text-slate-900">Sh. Rajpal Singh Solanki</h4>')

fromdesk_old = """        bulletPoints: [
            { label: '<label for="tab-pres" class="cursor-pointer block w-full">President: Sh. Kaptan Singh</label>', detail: "Click here to learn more about president: sh. kaptan singh. This section provides comprehensive information and resources tailored to this topic." },
            { label: '<label for="tab-sec" class="cursor-pointer block w-full">Secretary: Sh. Ajit Singh</label>', detail: "Click here to learn more about secretary: sh. ajit singh. This section provides comprehensive information and resources tailored to this topic." },
            { label: '<label for="tab-treas" class="cursor-pointer block w-full">Treasurer: Sh. Rajpal Singh Solanki</label>', detail: "Click here to learn more about treasurer: sh. rajpal singh solanki. This section provides comprehensive information and resources tailored to this topic." },
            { label: '<label for="tab-dir" class="cursor-pointer block w-full">Director: Prof. Dr. A. K. Srivastava</label>', detail: "Click here to learn more about director: prof. dr. a. k. srivastava. This section provides comprehensive information and resources tailored to this topic." }
        ]"""

fromdesk_new = """        bulletPoints: [
            { 
                label: '<label for="tab-pres" class="cursor-pointer block w-full">President: Sh. Kaptan Singh</label>', 
                detail: "Perspective on non-profit socio-economic upliftment, adherence to stringent AICTE norms, transparent work culture, and imparting world-class technical education to Indian youth." 
            },
            { 
                label: '<label for="tab-sec" class="cursor-pointer block w-full">Secretary: Sh. Ajit Singh Chaudhary</label>', 
                detail: "Commitment to state-of-the-art laboratory infrastructure, continuous faculty development programs, modern computing facilities, and holistic personality growth for students." 
            },
            { 
                label: '<label for="tab-treas" class="cursor-pointer block w-full">Treasurer: Sh. Rajpal Singh Solanki</label>', 
                detail: "Strategic financial governance, transparent resource allocation, and providing world-class campus facilities, laboratories, and student support systems." 
            },
            { 
                label: '<label for="tab-dir" class="cursor-pointer block w-full">Director: Prof. (Dr.) Avanish Kumar Srivastava</label>', 
                detail: "Strategic roadmap for research innovation, industry linkages, hands-on problem solving, and shaping skilled, ethical, and compassionate engineers." 
            }
        ]"""

if fromdesk_old in text:
    text = text.replace(fromdesk_old, fromdesk_new)
    print("Replaced fromdesk bulletPoints and salutations")
else:
    print("WARNING: fromdesk_old not found")

# 7. Update facilities bulletPoints
fac_old = """        bulletPoints: [
            { label: "Central Library", detail: "Click here to learn more about central library. This section provides comprehensive information and resources tailored to this topic." },
            { label: "Maharaja Mahendra Pratap Hostel", detail: "Click here to learn more about maharaja mahendra pratap hostel. This section provides comprehensive information and resources tailored to this topic." },
            { label: "Advanced Computing Hubs", detail: "Click here to learn more about advanced computing hubs. This section provides comprehensive information and resources tailored to this topic." },
            { label: "Sports & Medical", detail: "Click here to learn more about sports & medical. This section provides comprehensive information and resources tailored to this topic." }
        ]"""

fac_new = """        bulletPoints: [
            { 
                label: "Central Library", 
                detail: "Multi-tiered air-conditioned learning hub with over 60,000+ volumes, IEEE/Scopus digital access, DELNET network, and quiet research carrels for scholars.",
                url: "/facilities?tab=library"
            },
            { 
                label: "Maharaja Mahendra Pratap Hostel", 
                detail: "Modern on-campus residential accommodation for 200+ boys and 100+ girls featuring nutritious dining, high-speed Wi-Fi, and 24x7 security surveillance.",
                url: "/facilities#hostel-and-living"
            },
            { 
                label: "Advanced Computing Hubs", 
                detail: "Networked high-performance computing centers equipped with core i7 systems, high-bandwidth leased lines, and specialized AI/IoT research setups.",
                url: "/facilities?tab=labs"
            },
            { 
                label: "Sports & Medical Care", 
                detail: "Extensive football stadium field, championship basketball courts, indoor sports arena, and an on-campus Medical Room with resident Medical Assistant.",
                url: "/facilities?tab=library#sports"
            }
        ]"""

if fac_old in text:
    text = text.replace(fac_old, fac_new)
    print("Replaced facilities bulletPoints")
else:
    print("WARNING: fac_old not found")

# 8. Update smes bulletPoints
smes_old = """        bulletPoints: [
            { label: "Educational Trust", detail: "Click here to learn more about educational trust. This section provides comprehensive information and resources tailored to this topic." },
            { label: "Philanthropic Initiatives", detail: "Click here to learn more about philanthropic initiatives. This section provides comprehensive information and resources tailored to this topic." },
            { label: "Community Outreach", detail: "Click here to learn more about community outreach. This section provides comprehensive information and resources tailored to this topic." }
        ]"""

smes_new = """        bulletPoints: [
            { 
                label: "Educational Trust", 
                detail: "Founded in 1972, Surajmal Memorial Education Society (SMES) is a premier non-profit educational body dedicated to rural and urban youth empowerment through excellence in engineering and management education.",
                url: "/smes"
            },
            { 
                label: "Philanthropic Initiatives", 
                detail: "Institutional scholarship endowments, student fee concessions, and merit-cum-means awards ensuring that financial limitations never hinder talented scholars.",
                url: "/scholarships"
            },
            { 
                label: "Community Outreach", 
                detail: "Rural talent upliftment camps, environmental conservation drives, blood donation drives, and active community initiatives inspired by Maharaja Surajmal.",
                url: "/society-uba"
            }
        ]"""

if smes_old in text:
    text = text.replace(smes_old, smes_new)
    print("Replaced smes bulletPoints")
else:
    print("WARNING: smes_old not found")

with open('src/data/pages/aboutData.js', 'w', encoding='utf-8') as f:
    f.write(text)
print("Updated aboutData.js successfully")
