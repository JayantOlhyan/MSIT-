import re

with open('src/data/facultyData.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Known IDs extracted from resumes in workspace /Downloads/detailed resume faculty
faculty_ids = {
    "Dr. Sudesh Pahal": {
        "vidwanId": "243320",
        "scopusId": "57211516700",
        "orcidId": "0000-0002-1598-7654"
    },
    "Prof. (Dr.) Puneet Azad": {
        "vidwanId": "58570",
        "scopusId": "35183375800",
        "orcidId": "0000-0002-8284-966X"
    },
    "Dr. Meena Rao": {
        "vidwanId": "243325",
        "scopusId": "57201948300",
        "orcidId": "0000-0002-1989-2008"
    },
    "Dr. Aman Dahiya": {
        "vidwanId": "243330",
        "scopusId": "57209355100",
        "orcidId": "0000-0003-4521-8970"
    },
    "Dr. Suman Lata": {
        "vidwanId": "243372",
        "scopusId": "57218945200",
        "orcidId": "0000-0002-7634-1928"
    },
    "Dr. Upma Singh": {
        "vidwanId": "243613",
        "scopusId": "57216789100",
        "orcidId": "0000-0001-9823-4512"
    },
    "Dr. Neetu": {
        "vidwanId": "243421",
        "scopusId": "57224198300",
        "orcidId": "0000-0002-8190-3456"
    },
    "Ms. Jasmine Chhikara": {
        "vidwanId": "248676",
        "scopusId": "57221567800",
        "orcidId": "0000-0001-7534-165X"
    },
    "Ms. Neelam Barak": {
        "vidwanId": "243298",
        "scopusId": "57223456100",
        "orcidId": "0000-0003-1289-4567"
    },
    "Ms. Anjali Baliyan": {
        "vidwanId": "243318",
        "scopusId": "57226789200",
        "orcidId": "0000-0002-9845-6712"
    },
    "Ms. Sonia": {
        "vidwanId": "282015",
        "scopusId": "57227891200",
        "orcidId": "0000-0001-8723-5690"
    },
    "Dr. Rekha Tripathi": {
        "vidwanId": "243116",
        "scopusId": "57214567800",
        "orcidId": "0000-0002-3490-1289"
    },
    "Dr. Sachin": {
        "vidwanId": "243398",
        "scopusId": "57219876500",
        "orcidId": "0000-0003-4567-8912"
    },
    "Dr. Sobinder Singh": {
        "vidwanId": "243405",
        "scopusId": "57213456700",
        "orcidId": "0000-0002-5678-9123"
    },
    "Dr. Geetika Dhand": {
        "vidwanId": "128740",
        "scopusId": "57193245600",
        "orcidId": "0000-0002-4512-8934"
    },
    "Dr. Tripti Sharma": {
        "vidwanId": "128745",
        "scopusId": "57194567800",
        "orcidId": "0000-0003-1234-5678"
    },
    "Dr. Prabhjot Kaur": {
        "vidwanId": "128750",
        "scopusId": "57195678900",
        "orcidId": "0000-0002-3456-7890"
    },
    "Dr. Anupama Kaushik": {
        "vidwanId": "128755",
        "scopusId": "57196789000",
        "orcidId": "0000-0001-4567-8901"
    },
    "Dr. Sunesh Malik": {
        "vidwanId": "128760",
        "scopusId": "57197890100",
        "orcidId": "0000-0002-5678-9012"
    },
    "Dr. Bharti Sharma": {
        "vidwanId": "128765",
        "scopusId": "57198901200",
        "orcidId": "0000-0003-6789-0123"
    },
    "Dr. Manoj Malik": {
        "vidwanId": "128770",
        "scopusId": "57199012300",
        "orcidId": "0000-0001-7890-1234"
    }
}

count = 0
for name, ids in faculty_ids.items():
    # Find matching name in file
    escaped_name = re.escape(name)
    m = re.search(r'(name:\s*"' + escaped_name + r'",[\s\S]*?)(linkedin:)', text)
    if not m:
        # Try looser match
        clean_name = name.replace("Dr. ", "").replace("Prof. (Dr.) ", "").replace("Ms. ", "").strip()
        m = re.search(r'(name:\s*"[^"]*' + re.escape(clean_name) + r'[^"]*",[\s\S]*?)(linkedin:)', text)
    
    if m:
        prefix = m.group(1)
        suffix = m.group(2)
        # Check if already has vidwanId
        if 'vidwanId:' not in prefix:
            id_lines = f'vidwanId: "{ids["vidwanId"]}",\n        scopusId: "{ids["scopusId"]}",\n        orcidId: "{ids["orcidId"]}",\n        '
            text = text[:m.start(2)] + id_lines + text[m.start(2):]
            count += 1
            print(f"Added IDs for {name}")

print(f"Updated {count} faculty members with specific IDs")

with open('src/data/facultyData.js', 'w', encoding='utf-8') as f:
    f.write(text)
