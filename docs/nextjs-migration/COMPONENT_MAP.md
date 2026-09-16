# MSIT Website — Component & Feature Inventory

> **Standard:** Architectural classification for Next.js 15+ App Router.  
> **Rule:** Server Components by default; Client Components strictly when browser APIs or interactivity require it.  
> **Status:** PREPARATION & AUDIT ONLY  

---

## 1. Global & Layout Components

| Component | Path | Proposed Classification | Rationale & Refactoring Requirements |
| :--- | :--- | :--- | :--- |
| `Layout` | `src/components/Layout.jsx` | **Server Component** (`app/layout.tsx`) with Client Leaves | The root layout will render `<html lang="en">`, `<body>`, `<Header />`, and `<Footer />`. Session state and body overflow will be handled by a client wrapper (`IntroProvider`). |
| `Header` | `src/components/Header.jsx` | **Client Component** (`'use client'`) | Controls stateful MegaMenu hover delays, mobile drawer toggling, scroll listener (`scrollY > 49`), keyboard shortcut (`Ctrl+K`), and live search querying. |
| `Footer` | `src/components/Footer.jsx` | **Server Component** with Client Trigger | The footer layout and links are 100% static. Only the mobile accordion toggle and the "Accessibility Settings" trigger button need client hooks (`useAccessibility()`). |
| `PageHero` | `src/components/PageHero.jsx` | **Server Component** | Pure visual component rendering titles, breadcrumbs, background gradients, and image banners. Zero client-side state. |
| `BackToTop` | `src/components/BackToTop.jsx` | **Client Component** (`'use client'`) | Listens to `window.scrollY` and executes `window.scrollTo({ top: 0, behavior: 'smooth' })`. |
| `OpeningAnimation` | `src/components/OpeningAnimation.jsx` | **Client Component** (`'use client'`) | Driven entirely by GSAP (`useGSAP`, timeline, bounding client rect math for shared logo translation). |
| `AccessibilityModal` | `src/components/AccessibilityModal.jsx` | **Client Component** (`'use client'`) | Interactive dialog reading and updating accessibility settings context. |
| `Spinner` | `src/components/Spinner.jsx` | **Server Component** / Shared UI | Pure CSS loading spinner. Can be used in Next.js `loading.tsx` and React Suspense fallbacks. |
| `SkeletonLoader` | `src/components/SkeletonLoader.jsx` | **Server Component** / Shared UI | Pure CSS skeleton placeholder for suspense states. |
| `ErrorBoundary` | `src/components/ErrorBoundary.jsx` | **Client Component** (`'use client'`) | React error boundary class component; replaced/complemented by Next.js `app/error.tsx`. |

---

## 2. Specialized Page & Interactive Components

| Component | Path | Proposed Classification | Rationale & Refactoring Requirements |
| :--- | :--- | :--- | :--- |
| `DepartmentLabsSection` | `src/components/DepartmentLabsSection.jsx` | **Client Component** (`'use client'`) | Has collapse/expand state (`isExpanded`) to toggle between showing 2 labs vs all labs. |
| `FeePaymentPortal` | `src/components/FeePaymentPortal.jsx` | **Client Component** (`'use client'`) | Multi-step form state, receipt search by enrollment number, and `window.print()` trigger. |
| `EventsPortal` | `src/components/EventsPortal.jsx` | **Client Component** (`'use client'`) | Interactive tab switching (Avensis / Genesis / Sports) and sports registration form state. |
| `NewslettersMagazines` | `src/components/NewslettersMagazines.jsx` | **Client Component** (`'use client'`) | Interactive filter tabs ('College Level', 'Departmental') and real-time search input. |
| `SocietiesHubView` | `src/components/SocietiesHubView.jsx` | **Client Component** (`'use client'`) | Filterable category pills ('Technical', 'Cultural', etc.) and keyword search filter. |
| `SocietyDetailView` | `src/components/SocietyDetailView.jsx` | **Client Component** (`'use client'`) | Scroll-spy navigation (`window.addEventListener('scroll')`), active section tracking, smooth scrolling, and lightbox. |

---

## 3. Page Level Components (`src/pages/`)

| Page Component | Path | Proposed Classification | Rationale & Refactoring Requirements |
| :--- | :--- | :--- | :--- |
| `Home` | `src/pages/Home.jsx` | **Split:** Server Page (`app/page.tsx`) + Client Leaves | Hero banner, Director's Message, Department Cards become Server Components. Testimonial slider, highlights marquee, and campus photo lightbox become dedicated Client Components. |
| `SearchPage` | `src/pages/SearchPage.jsx` | **Client Component** wrapped in Suspense | Reads `useSearchParams()` for query matching against in-memory `searchIndex`. |
| `FacultyStaff` | `src/pages/FacultyStaff.jsx` | **Split:** Server Page + Client Directory View | Page provides layout and metadata. Filter pills, search bar, and profile modal are Client Components with `useSearchParams()` support. |
| `Facilities` | `src/pages/Facilities.jsx` | **Client Component** (`'use client'`) | Heavy multi-tab switching, filtering 45+ labs by department, software, system configuration, and modal image viewing. |
| `VirtualTour` | `src/pages/VirtualTour.jsx` | **Client Component** (`'use client'`) | Category filter tabs and 360° modal lightbox viewer. |
| `Placements` | `src/pages/Placements.jsx` | **Split:** Server Layout + Client Modal Leaf | Placement statistics, recruiter logos, and committee lists render on server. Faculty bio popup is a Client Component. |
| `Team` | `src/pages/Team.jsx` | **Split:** Server Layout + Client Modal Leaf | Advisory teachers and student dev team render statically. Contributor popup modal is a Client Component. |
| `DynamicPage` | `src/pages/DynamicPage.jsx` | **Server Component** (`app/[slug]/page.tsx`) | Renders static JSON schemas with `generateStaticParams()`. Client leaves injected for interactive sub-views. |
| `NewsDetail` | `src/pages/NewsDetail.jsx` | **Split:** Server Page (`app/news-event/[id]/page.tsx`) + Client Actions | Server generates static HTML via `generateStaticParams()`. Print button and client-side comment/share actions run on client. |
| `AcademicCalendar` | `src/pages/AcademicCalendar.jsx` | **Server Component** | Static listing of PDF download cards. Zero client state needed. |
| `Syllabus` | `src/pages/Syllabus.jsx` | **Server Component** | Static listing of department syllabi. |
| `TimeTable` | `src/pages/TimeTable.jsx` | **Server Component** | Static semester schedule download cards. |
| `Brochure` | `src/pages/Brochure.jsx` | **Server Component** | Static information brochure download portal. |
| `PrivacyPolicy` | `src/pages/PrivacyPolicy.jsx` | **Server Component** | Pure static policy typography. |
| `TermsOfUse` | `src/pages/TermsOfUse.jsx` | **Server Component** | Pure static terms typography. |
| `Sitemap` | `src/pages/Sitemap.jsx` | **Client Component** (`'use client'`) | Interactive searchable visual sitemap. |
| `AdminDashboard` | `src/pages/AdminDashboard.jsx` | **Client Component** (`'use client'`) | Client CMS storing state in `sessionStorage` and `localStorage`. |
| `NotFound` | `src/pages/NotFound.jsx` | **Client Component** (`app/not-found.tsx`) | GSAP timeline, interactive terminal emulator, Matrix rain canvas, particle net animation. |
| `ServerError` | `src/pages/ServerError.jsx` | **Client Component** (`app/error.tsx`) | Error reset button and retry action (`window.location.reload()`). |

---

## 4. Contexts, Hooks, and State Utilities

| Module | Current Path | Target Path | Classification | Role |
| :--- | :--- | :--- | :--- | :--- |
| `AccessibilityContext` | `src/context/AccessibilityContext.jsx` | `components/accessibility/AccessibilityContext.tsx` | **Client Context** | Manages focus rings, high contrast, reduced motion, dark mode, text scaling, and `localStorage` syncing. |
| `SEO` | `src/components/SEO.jsx` | `lib/seo/metadata.ts` | **Server-side Utility** | Replaced by Next.js `generateMetadata()` helper function returning typed `Metadata` objects. |

---

## 5. Data Architecture Modules

| Data File | Source Path | Target Classification | Notes |
| :--- | :--- | :--- | :--- |
| `pagesData.js` | `src/data/pagesData.js` | **Static Data** (`lib/data/pagesData.ts`) | Typed schema dictionary for all 40+ pages. |
| `aboutData.js` | `src/data/pages/aboutData.js` | **Static Data** (`lib/data/pages/aboutData.ts`) | Converted to TypeScript. |
| `academicData.js` | `src/data/pages/academicData.js` | **Static Data** (`lib/data/pages/academicData.ts`) | Converted to TypeScript. |
| `admissionData.js` | `src/data/pages/admissionData.js` | **Static Data** (`lib/data/pages/admissionData.ts`) | Converted to TypeScript. |
| `campusLifeData.js` | `src/data/pages/campusLifeData.js` | **Static Data** (`lib/data/pages/campusLifeData.ts`) | Converted to TypeScript. |
| `placementData.js` | `src/data/pages/placementData.js` | **Static Data** (`lib/data/pages/placementData.ts`) | Converted to TypeScript. |
| `quickLinksData.js` | `src/data/pages/quickLinksData.js` | **Static Data** (`lib/data/pages/quickLinksData.ts`) | Converted to TypeScript. |
| `facultyData.js` | `src/data/facultyData.js` | **Static Data** (`lib/data/facultyData.ts`) | Strongly typed `FacultyMember` interface. |
| `facilitiesData.js` | `src/data/facilitiesData.js` | **Static Data** (`lib/data/facilitiesData.ts`) | Strongly typed `LabData` and `MouRecord` interfaces. |
| `societiesData.js` | `src/data/societiesData.js` | **Static Data** (`lib/data/societiesData.ts`) | Strongly typed `SocietyProfile` interface. |
| `searchIndex.js` | `src/data/searchIndex.js` | **Static Data / Client Search** | Precompiled static search dictionary. |
