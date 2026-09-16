# MSIT Website — Route Inventory & Migration Map

> **Standard:** 100% route coverage required.  
> **Total Unique Routes:** 46 distinct entry points (Static, Dynamic, and Aliases).  
> **Status:** PREPARATION & AUDIT ONLY  

---

## 1. Complete Route Inventory Table

| Route | Current Implementation | Data Source | Client-side Dependencies | SEO Requirements | Migration Complexity |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | `Home.jsx` (SPA Route) | `src/data/pages/`, `localStorage` (`msit_events_v2`, `msit_testimonials_v2`, `msit_highlights_v3`) | `localStorage`, `IntersectionObserver`, `OpeningAnimation` | Title, Description, OpenGraph, Canonical, `EducationalOrganization` JSON-LD | **High** (SSR hydration of localStorage + GSAP) |
| `/search` | `SearchPage.jsx` | `src/data/searchIndex.js` | `useLocation()`, URL query params (`?q=`), In-memory filter | Title, Description, Canonical, Robots (`Disallow`) | **Medium** (`useSearchParams()` requires Suspense) |
| `/placements` | `Placements.jsx` | Static metrics + `src/data/facultyData.js` | Modal dialog state, `document.body.style.overflow` | Title, Description, OpenGraph, Canonical | **Low** (RSC page with client modal) |
| `/virtual-tour` | `VirtualTour.jsx` | Static `tourLocations` array | Lightbox modal state, category filter | Title, Description, OpenGraph, Canonical | **Low** (RSC page with client gallery) |
| `/news-event/:id` | `NewsDetail.jsx` | `newsDb` in file + `localStorage.getItem('msit_events_v2')` | `useParams()`, `window.print()` | Dynamic Title, Description, OpenGraph, Canonical | **Medium** (`generateStaticParams` for known IDs) |
| `/team` | `Team.jsx` | Static `teamData` (teachers + student developers) | Member detail modal, `document.body.style.overflow` | Title, Description, OpenGraph, Canonical | **Low** (RSC page with client modal) |
| `/academic-calendar` | `AcademicCalendar.jsx` | Static `events` array | None (pure links) | Title, Description, OpenGraph, Canonical | **Easy** (100% Server Component) |
| `/syllabus` | `Syllabus.jsx` | Static `syllabi` array | Category filter tabs | Title, Description, OpenGraph, Canonical | **Easy** (100% Server Component) |
| `/timetable` | `TimeTable.jsx` | Static timetable links | None (pure links) | Title, Description, OpenGraph, Canonical | **Easy** (100% Server Component) |
| `/brochure` | `Brochure.jsx` | Static brochure metadata | None (pure download links) | Title, Description, OpenGraph, Canonical | **Easy** (100% Server Component) |
| `/admin` | `AdminDashboard.jsx` | `localStorage` & `sessionStorage` | `sessionStorage`, `localStorage`, Form inputs, FileReader | Robots (`Disallow`), Title, Description | **Medium** (Pure Client Component leaf) |
| `/privacy` | `PrivacyPolicy.jsx` | Static content | None | Title, Description, OpenGraph, Canonical | **Easy** (100% Server Component) |
| `/terms` | `TermsOfUse.jsx` | Static content | None | Title, Description, OpenGraph, Canonical | **Easy** (100% Server Component) |
| `/facilities` | `Facilities.jsx` | `src/data/facilitiesData.js` | Main tabs ('labs'/'library'/'mous'/'audit'), filters, lab modal | Title, Description, OpenGraph, Canonical | **Medium** (Client Component state management) |
| `/faculty` | `FacultyStaff.jsx` | `src/data/facultyData.js` | `window.location.search` (`?id=`), Search query, Dept filter, Profile Modal | Title, Description, OpenGraph, Canonical | **Medium** (Search params must be handled via `useSearchParams`) |
| `/sitemap` | `Sitemap.jsx` (Visual Apple-style sitemap) | Static category links | Search query filter | Title, Description, OpenGraph, Canonical | **Low** (Rename route or support both visual and `sitemap.xml`) |
| `/500` | `ServerError.jsx` | Static content | `window.location.reload()` | Title, Description, Robots (`Disallow`) | **Easy** (Next.js `app/error.tsx` + static page) |
| `*` (404) | `NotFound.jsx` | Terminal directives | GSAP timeline, Canvas particle loop, Matrix rain animation, keyboard inputs | Title, Description, Robots (`noindex`) | **Hard** (Rich client-side canvas and GSAP engine) |

---

## 2. Dynamic Content Engine Routes (`DynamicPage.jsx` Slugs)

All these routes currently resolve dynamically through `/:slug`. In Next.js, they map to `app/[slug]/page.tsx` with static pre-generation via `generateStaticParams()`:

### A. Academic Departments (`generateStaticParams`)

| Route | Page Title | Schema Markup | Complexity | Features |
| :--- | :--- | :--- | :--- | :--- |
| `/cse` | Computer Science & Engineering (CSE) | `Course` + `EducationalOrganization` | **Medium** | HTML prose + `DepartmentLabsSection` (`deptKey="cse"`) |
| `/it` | Information Technology (IT) | `Course` + `EducationalOrganization` | **Medium** | HTML prose + `DepartmentLabsSection` (`deptKey="it"`) |
| `/ece` | Electronics & Comm. (ECE) | `Course` + `EducationalOrganization` | **Medium** | HTML prose + `DepartmentLabsSection` (`deptKey="ece"`) |
| `/eee` | Electrical & Electronics (EEE) | `Course` + `EducationalOrganization` | **Medium** | HTML prose + `DepartmentLabsSection` (`deptKey="eee"`) |
| `/applied-sciences` | Applied Sciences (1st Year) | `Course` + `EducationalOrganization` | **Medium** | HTML prose + `DepartmentLabsSection` (`deptKey="as"`) |

### B. Institutional & Governance Slugs

| Route | Slug Key | Data File | Complexity |
| :--- | :--- | :--- | :--- |
| `/about` | `about` | `aboutData.js` | **Easy** (RSC HTML render) |
| `/vision-mission` | `vision-mission` | `aboutData.js` | **Easy** (RSC HTML render) |
| `/history` | `history` | `aboutData.js` | **Easy** (RSC HTML render) |
| `/administration` | `administration` | `aboutData.js` | **Easy** (RSC HTML render) |
| `/govern` | `govern` | `aboutData.js` | **Easy** (RSC HTML render) |
| `/fromdesk` | `fromdesk` | `aboutData.js` | **Easy** (RSC HTML render) |
| `/smes` | `smes` | `aboutData.js` | **Easy** (RSC HTML render) |
| `/contact` | `contact` | `aboutData.js` | **Easy** (RSC HTML render + static form) |
| `/research` | `research` | `academicData.js` | **Easy** (RSC HTML render) |

### C. Student Services & Specialized Portal Slugs

| Route | Slug Key | Specialized Component Triggered | Complexity |
| :--- | :--- | :--- | :--- |
| `/online-fee` | `online-fee` | `FeePaymentPortal.jsx` (Fee simulation & receipt printing) | **Medium** (Client Component leaf) |
| `/scholarships` | `scholarships` | `admissionData.js` (Prose & table layout) | **Easy** (RSC HTML render) |
| `/mandatory-disclosures` | `mandatory-disclosures` | `admissionData.js` (Regulatory documents table) | **Easy** (RSC HTML render) |
| `/events` | `events` | `EventsPortal.jsx` (Avensis / Genesis / Sports registration) | **Medium** (Client Component leaf) |
| `/newsletters-magazines` | `newsletters-magazines` | `NewslettersMagazines.jsx` (Filterable publications directory)| **Medium** (Client Component leaf) |
| `/attendance` | `attendance` | `quickLinksData.js` (Prose & rules) | **Easy** (RSC HTML render) |
| `/internship-cell` | `internship-cell` | `placementData.js` (Prose & coordinator contacts) | **Easy** (RSC HTML render) |
| `/alumni-network` | `alumni-network` | `placementData.js` (Prose & registration links) | **Easy** (RSC HTML render) |

### D. Campus Life & Student Societies

| Route | Slug Key | Specialized Component Triggered | Complexity |
| :--- | :--- | :--- | :--- |
| `/society` | `society` | `SocietiesHubView.jsx` (Filterable hub directory) | **Medium** (Search & category filter) |
| `/society-geekroom` | `society-geekroom` | `SocietyDetailView.jsx` (Dedicated deep profile) | **Medium** (Scroll spy & gallery) |
| `/society-ieee` | `society-ieee` | `SocietyDetailView.jsx` (Dedicated deep profile) | **Medium** (Scroll spy & gallery) |
| `/society-ndli` | `society-ndli` | `SocietyDetailView.jsx` (Dedicated deep profile) | **Medium** (Scroll spy & gallery) |

### E. Disciplinary & Grievance Alias Slugs

The legacy site and existing links support multiple synonyms for compliance pages. In Next.js, these will either be statically rendered or defined in `next.config.js` redirects:

| Route / Alias | Target Canonical | Canonical Slug |
| :--- | :--- | :--- |
| `/antiragging` & `/anti-ragging` | `/antiragging` | `campusLifeData.js` (`antiragging`) |
| `/disaster` & `/disaster-management` | `/disaster` | `campusLifeData.js` (`disaster`) |
| `/discipline`, `/disciplinary-committee`, `/discipline-committee` | `/discipline` | `campusLifeData.js` (`discipline`) |
| `/student-grievance`, `/grievance`, `/grievance-cell`, `/student-grievance-cell`, `/student-grievances` | `/student-grievance` | `campusLifeData.js` (`student-grievance`) |

---

## 3. Route Conflict & Precedence Strategy

In Vite SPA, React Router matched static routes (`/placements`, `/facilities`, `/academic-calendar`) **before** the dynamic `/:slug` fallback. 

In Next.js App Router:
- Explicit folder routes (e.g., `app/placements/page.tsx`, `app/facilities/page.tsx`) automatically take precedence over dynamic route parameters (`app/[slug]/page.tsx`).
- This native Next.js behavior ensures **zero route shadowing bugs** during migration.
