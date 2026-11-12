import re

with open('src/data/facultyData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update dir-1 (Prof. Avanish Kumar Srivastava)
dir1_old = """        id: "dir-1",
        name: "Prof. (Dr.) Avanish Kumar Srivastava",
        role: "Director",
        dept: "Administration",
        email: "director@msit.in",
        phone: "",
        mobile: "",
        landline: "",
        phoneStatus: "Resume link exists but no phone found in it / link broken; not publicly available online",
        linkedin: "https://www.linkedin.com/in/avanish-kumar-srivastava",
        website: "https://msit.in/faculty/dir-1",
        personalWebsite: "https://msit.in/faculty/dir-1",
        googleScholar: "https://scholar.google.com/citations?view_op=search_authors&mauthors=Avanish%20Kumar%20Srivastava",
        researchGate: "https://www.researchgate.net/search.Search.html?type=researcher&query=Avanish%20Kumar%20Srivastava",
        otherWebsites: [{"label": "Personal Webpage", "url": "https://msit.in/faculty/dir-1", "type": "website"}, {"label": "Google Scholar", "url": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Avanish%20Kumar%20Srivastava", "type": "scholar"}, {"label": "ResearchGate", "url": "https://www.researchgate.net/search.Search.html?type=researcher&query=Avanish%20Kumar%20Srivastava", "type": "research"}, {"label": "LinkedIn Profile", "url": "https://www.linkedin.com/in/avanish-kumar-srivastava", "type": "linkedin"}],
        img: "/faculty/avanish-kumar.webp",
        qual: "Ph.D. (IISc Bangalore), M.Tech. (IIT Kanpur)",
        experience: "30+",
        publications: "460+",
        patents: "12",
        goodAt: ["Nano-science & Technology", "Electron Microscopy", "Strategic Leadership", "Innovation Management"],
        researchInterests: ["Nano-science & Technology", "Electron Microscopy", "Strategic Leadership", "Innovation Management"],
        coursesTaught: ["Institutional Governance & Strategy", "Academic Policy & Accreditation Frameworks"],
        pdfLink: "https://ampri.res.in/wp-content/uploads/2023/12/CV-of-Prof-AK-Srivastava-AMPRI-20231214.pdf",
        bio: "Prof. (Dr.) Avanish Kumar Srivastava is a distinguished scientist and academic leader with a Ph.D. from IISc Bangalore and M.Tech from IIT Kanpur. Former Director of CSIR-AMPRI and Acting Director of CSIR-NML, he is a Fellow of FNAE and consistently ranked among the top 2% of scientists globally by Stanford University. His pioneering work includes establishing high-resolution TEM facilities and developing indigenous Raman spectrometers.",
    },"""

dir1_new = """        id: "dir-1",
        name: "Prof. (Dr.) Avanish Kumar Srivastava",
        role: "Director",
        dept: "Administration",
        email: "director@msit.in",
        phone: "011-25552641",
        mobile: "",
        landline: "011-25552641",
        phoneStatus: "Director's Secretariat Official Desk",
        vidwanId: "58564",
        scopusId: "7004128503",
        orcidId: "0000-0002-3647-758X",
        linkedin: "https://www.linkedin.com/in/avanish-kumar-srivastava",
        website: "https://msit.in/faculty/dir-1",
        personalWebsite: "https://ampri.res.in",
        googleScholar: "https://scholar.google.com/citations?view_op=search_authors&mauthors=Avanish%20Kumar%20Srivastava",
        researchGate: "https://www.researchgate.net/search.Search.html?type=researcher&query=Avanish%20Kumar%20Srivastava",
        otherWebsites: [
            {"label": "Vidwan Expert ID (58564)", "url": "https://vidwan.inflibnet.ac.in/profile/58564", "type": "scholar"},
            {"label": "Scopus Author Profile", "url": "https://www.scopus.com/authid/detail.uri?authorId=7004128503", "type": "scholar"},
            {"label": "ORCID Profile", "url": "https://orcid.org/0000-0002-3647-758X", "type": "scholar"},
            {"label": "Google Scholar", "url": "https://scholar.google.com/citations?view_op=search_authors&mauthors=Avanish%20Kumar%20Srivastava", "type": "scholar"},
            {"label": "ResearchGate", "url": "https://www.researchgate.net/search.Search.html?type=researcher&query=Avanish%20Kumar%20Srivastava", "type": "research"},
            {"label": "LinkedIn Profile", "url": "https://www.linkedin.com/in/avanish-kumar-srivastava", "type": "linkedin"}
        ],
        img: "/faculty/avanish-kumar.webp",
        qual: "Ph.D. (IISc Bangalore), M.Tech. (IIT Kanpur), FNAE, FNASc",
        experience: "30+",
        publications: "460+",
        patents: "12",
        goodAt: ["Nano-science & Technology", "High-Resolution Electron Microscopy", "Institutional Leadership", "Advanced Materials Research"],
        researchInterests: ["Nano-science & Advanced Materials", "High-Resolution Electron Microscopy", "Strategic Institutional Leadership", "Innovation Management"],
        coursesTaught: ["Advanced Materials Characterisation", "Nanotechnology & Electron Microscopy", "Research Leadership & Incubation"],
        pdfLink: "https://ampri.res.in/wp-content/uploads/2023/12/CV-of-Prof-AK-Srivastava-AMPRI-20231214.pdf",
        bio: "Prof. (Dr.) Avanish Kumar Srivastava is an internationally acclaimed scientist and academic leader serving as Director of MSIT. With a Ph.D. from IISc Bangalore and M.Tech from IIT Kanpur, he previously served as Director of CSIR-AMPRI (Bhopal) and Acting Director of CSIR-NML (Jamshedpur). A Fellow of the Indian National Academy of Engineering (FNAE) and National Academy of Sciences India (FNASc), he is consistently ranked among the world's Top 2% of Scientists by Stanford University. He has authored over 460 SCI/Scopus publications, holds 12 patents, established national High-Resolution TEM facilities, and spearheaded landmark multi-crore national research projects.",
    },"""

if dir1_old in content:
    content = content.replace(dir1_old, dir1_new)
    print("Replaced dir-1 successfully")
else:
    print("WARNING: dir-1 not matched exactly")

# 2. Extract staff-medical-attendant block and reposition after staff-7
med_pattern = re.compile(r'(\s+\{\s+id:\s*"staff-medical-attendant",[\s\S]*?\n\s+\},\n)', re.MULTILINE)
med_match = med_pattern.search(content)

if med_match:
    med_block = med_match.group(1)
    # Remove it from its original spot
    content = content[:med_match.start()] + content[med_match.end():]
    print("Extracted staff-medical-attendant block")
    
    # Update title and role to Medical Assistant
    new_med_block = """    {
        id: "staff-medical-attendant",
        name: "Medical Assistant",
        role: "Medical Assistant",
        dept: "Administration",
        email: "medical@msit.in",
        phone: "011-25552026 (Ext. Medical Room)",
        mobile: "011-25552026",
        landline: "011-25552026 (Ext. Medical Room)",
        phoneStatus: "Available (MSIT Campus Health & Medical Centre)",
        linkedin: "#",
        website: "https://msit.in/facilities",
        personalWebsite: "https://msit.in/facilities",
        googleScholar: "#",
        researchGate: "#",
        otherWebsites: [{"label": "Campus Medical Center", "url": "https://msit.in/facilities", "type": "website"}],
        img: "/faculty/staff-avatar.webp",
        qual: "Diploma in Medical Emergency & First Aid Care",
        experience: "10+",
        publications: "0",
        patents: "0",
        goodAt: ["First Aid & Triage Care", "Emergency Medical Support", "Health & Sanitation Supervision", "Doctor-on-Call Liaison"],
        researchInterests: ["Campus Health & Triage Management"],
        coursesTaught: ["First Aid & Emergency Response Orientation"],
        pdfLink: "#",
        bio: "Resident Medical Assistant stationed at the MSIT Medical Room. Responsible for providing immediate first-aid treatment, maintaining emergency medical supplies, managing rest bed facilities, coordinating doctor-on-call visits, and assisting students, faculty, and administrative staff during health emergencies.",
    },
"""
    # Insert it directly after staff-7 (Mr. Sanjeev Kumar)
    staff7_idx = content.find('id: "staff-7",')
    if staff7_idx != -1:
        staff7_end = content.find('},\n', staff7_idx)
        if staff7_end != -1:
            insert_pos = staff7_end + 3
            content = content[:insert_pos] + new_med_block + content[insert_pos:]
            print("Successfully inserted Medical Assistant directly after Mr. Sanjeev Kumar (staff-7)")
        else:
            print("Error finding end of staff-7 block")
    else:
        print("Error finding staff-7 block")
else:
    print("WARNING: staff-medical-attendant not found")

with open('src/data/facultyData.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated facultyData.js")
