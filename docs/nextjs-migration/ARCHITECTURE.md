# MSIT Website — Architecture Specification (Next.js Target)

> **Document:** Architecture Comparison & Target System Topology  
> **Status:** PREPARATION & AUDIT ONLY  

---

## 1. Architectural Comparison Overview

```mermaid
graph TD
    subgraph Current Vite SPA Architecture
        V_Client[Browser Request] --> V_CDN[Netlify CDN / Static Assets]
        V_CDN --> V_Index[Single index.html]
        V_Index --> V_Bundle[Main JS Bundle + React Router]
        V_Bundle --> V_ClientRouter[Client-side Route Matcher]
        V_ClientRouter --> V_Dynamic[DynamicPage.jsx + Static JS Data]
        V_Bundle --> V_Local[localStorage Admin State]
    end

    subgraph Proposed Next.js App Router Architecture
        N_Client[Browser Request] --> N_Edge[Edge CDN / Serverless Runtime]
        N_Edge --> N_PreRender[Pre-rendered Static HTML (SSG)]
        N_PreRender --> N_RSC[React Server Components (Zero JS Bundle)]
        N_PreRender --> N_Hydrate[Targeted Island Hydration (Client Leaves)]
        N_Hydrate --> N_GSAP[GSAP / Accessibility / Modals]
        N_Edge --> N_Meta[Native Server-Rendered Metadata & SEO]
    end
```

### Key Paradigm Shifts

| Aspect | Vite SPA (Current) | Next.js App Router (Target) |
| :--- | :--- | :--- |
| **Rendering Strategy** | 100% Client-Side Rendering (CSR). HTML shell is empty (`<div id="root"></div>`) until JS bundle executes. | Static Site Generation (SSG) with React Server Components (RSC) by default. Zero-JS server rendering for static content. |
| **Routing** | Client-side `react-router-dom` in `App.jsx`. | Filesystem-based App Router in `app/` directory with automatic route code-splitting. |
| **Hydration Scope** | Entire page tree hydrates from root down. | Selective Island Hydration. Server Components send 0kB client JS; only interactive leaves marked with `'use client'` hydrate. |
| **SEO & Crawlers** | Relies on custom build-time script (`scripts/prerender.js`) to parse and inject `<head>` tags into static files. | Native Next.js `generateMetadata()` and static HTML emission at build time. |
| **Asset Optimization** | Unoptimized static images loaded directly via `<img>` tags. | Next.js `<Image>` component with automatic WebP/AVIF compression, responsive `srcset`, and zero-CLS placeholders. |
| **Typography** | External `<link>` tags to Google Fonts causing potential layout shift and DNS prefetch overhead. | `next/font/google` self-hosting fonts at build time with zero Cumulative Layout Shift (CLS). |

---

## 2. Server Component vs Client Component Topology

A common antipattern in Next.js migrations is placing `'use client'` at the top of every file to bypass SSR. In this architecture, we enforce **Server Components as the default**, isolating Client Components strictly to interactive leaves:

```text
app/layout.tsx (Server Component)
├── <html>, <head>, <body>
├── next/font/google font variables
└── ProvidersWrapper (Client Component)
    ├── AccessibilityProvider (Context)
    │   ├── OpeningAnimation (Client Component - conditional session leaf)
    │   ├── Header (Client Component - search modal, scroll listeners, mobile menu)
    │   ├── Page Content (Server Components by default)
    │   ├── Footer (Server Component layout + Client Accessibility Trigger)
    │   ├── BackToTop (Client Component - scroll listener leaf)
    │   └── AccessibilityModal (Client Component - dialog leaf)
```

### Component Classification Rules
1. **Server Component by Default:**
   - All page layouts (`page.tsx`) that display institutional data.
   - `PageHero.tsx` (pure visual heading and breadcrumbs).
   - `Syllabus.tsx`, `TimeTable.tsx`, `AcademicCalendar.tsx`, `Brochure.tsx`, `PrivacyPolicy.tsx`, `TermsOfUse.tsx`.
   - Dynamic page content typography areas.
   - Director's desk and historical profile sections.
2. **Client Component (`'use client'`) Strictly For:**
   - Any component reading/writing `localStorage` or `sessionStorage` (`AccessibilityContext`, `AdminDashboard`, `Home` dynamic blocks).
   - Any component with event listeners (`window.addEventListener('scroll')`, `window.addEventListener('keydown')` in `Header`, `BackToTop`, `SocietyDetailView`).
   - Any component with GSAP timelines (`OpeningAnimation.tsx`, `NotFound.tsx`).
   - Any interactive tabs or form state (`FeePaymentPortal.tsx`, `EventsPortal.tsx`, `DepartmentLabsSection.tsx` collapse).
   - Modal popups and dialogs (`FacultyStaff.tsx` modal, `Team.tsx` modal, `Facilities.tsx` lab detail modal).

---

## 3. Target Directory & Folder Structure

Derived directly from the existing project structure without arbitrary abstractions:

```text
nextjs-migration/ (or project root upon merge)
├── app/
│   ├── layout.tsx                     # Root Server Layout with font injection & HTML metadata
│   ├── page.tsx                       # Homepage (Server Component assembling sections)
│   ├── not-found.tsx                  # Custom 404 (Client Component with Matrix & GSAP)
│   ├── error.tsx                      # Custom 500 error boundary (Client Component)
│   ├── sitemap.ts                     # Dynamic sitemap generation (replaces vite-plugin-sitemap)
│   ├── robots.ts                      # Dynamic robots.txt generation (replaces prerender.js logic)
│   ├── [slug]/                        # Dynamic content engine (replaces DynamicPage.jsx)
│   │   ├── page.tsx                   # generateStaticParams() for all 40+ slugs
│   │   └── not-found.tsx
│   ├── news-event/
│   │   └── [id]/
│   │       └── page.tsx               # Static news detail pages (generateStaticParams)
│   ├── faculty/
│   │   └── page.tsx                   # Faculty directory with searchParams handling
│   ├── search/
│   │   └── page.tsx                   # Search page (Client Component or Suspense wrapper)
│   ├── placements/
│   │   └── page.tsx                   # Careers & placement records
│   ├── facilities/
│   │   └── page.tsx                   # Campus facilities & laboratory directory
│   ├── virtual-tour/
│   │   └── page.tsx                   # Interactive 360° virtual tour
│   ├── team/
│   │   └── page.tsx                   # Faculty advisory & developer team
│   ├── academic-calendar/
│   │   └── page.tsx                   # Academic calendar downloads
│   ├── syllabus/
│   │   └── page.tsx                   # B.Tech syllabi downloads
│   ├── timetable/
│   │   └── page.tsx                   # Class schedules
│   ├── brochure/
│   │   └── page.tsx                   # Admission brochure
│   ├── admin/
│   │   └── page.tsx                   # Admin CMS dashboard (Client Component)
│   ├── privacy/
│   │   └── page.tsx                   # Privacy policy
│   ├── terms/
│   │   └── page.tsx                   # Terms of use
│   └── sitemap-view/
│       └── page.tsx                   # Visual interactive sitemap (formerly /sitemap)
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx                 # Desktop MegaMenu & Mobile Drawer ('use client')
│   │   ├── Footer.tsx                 # Institutional footer
│   │   ├── PageHero.tsx               # Standardized page banner (Server Component)
│   │   ├── BackToTop.tsx              # Smooth scroll top button ('use client')
│   │   └── ProvidersWrapper.tsx       # Context wrapper for root layout ('use client')
│   ├── accessibility/
│   │   ├── AccessibilityContext.tsx   # React Context + localStorage persistence ('use client')
│   │   └── AccessibilityModal.tsx     # Customization modal dialog ('use client')
│   ├── animations/
│   │   ├── OpeningAnimation.tsx       # GSAP intro reveal animation ('use client')
│   │   └── MatrixRain.tsx             # Canvas matrix rain for 404 ('use client')
│   ├── sections/
│   │   ├── DepartmentLabsSection.tsx  # Department lab cards & photo preview ('use client')
│   │   ├── FeePaymentPortal.tsx       # Fee simulation & receipt generator ('use client')
│   │   ├── EventsPortal.tsx           # Avensis / Genesis / Sports portal ('use client')
│   │   ├── NewslettersMagazines.tsx   # Institutional publications browser ('use client')
│   │   ├── SocietiesHubView.tsx       # Filterable 20+ societies directory ('use client')
│   │   └── SocietyDetailView.tsx      # Comprehensive individual society profile ('use client')
│   └── ui/
│       ├── Spinner.tsx                # Loading spinner
│       ├── SkeletonLoader.tsx         # Content skeleton placeholder
│       └── ErrorBoundary.tsx          # Local component boundary
│
├── lib/
│   ├── types/                         # TypeScript interfaces and schema declarations
│   │   ├── pages.ts                   # PageData, StatItem, BulletPoint types
│   │   ├── faculty.ts                 # FacultyMember, DepartmentFaculty types
│   │   ├── societies.ts               # SocietyProfile, SocietyCategory types
│   │   ├── facilities.ts              # LabDetail, MouRecord types
│   │   └── search.ts                  # SearchIndexItem, QaItem types
│   ├── data/                          # Typed static data modules
│   │   ├── pagesData.ts               # Consolidated page records
│   │   ├── facultyData.ts             # 100+ faculty records
│   │   ├── societiesData.ts           # GeekRoom, IEEE, NDLI, etc.
│   │   ├── facilitiesData.ts          # Labs, configurations, infrastructure
│   │   └── searchIndex.ts             # Static search dictionary
│   └── seo/
│       ├── metadata.ts                # Reusable metadata generation helpers
│       └── schemas.ts                 # JSON-LD Schema.org generators
│
├── public/                            # Existing static assets (100% preserved)
├── tailwind.config.ts / postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## 4. Build Output & Deployment Strategy

The application will support **Static HTML Export (`output: 'export'`)**:
- Running `next build` will output 100% static HTML, CSS, and JS to `out/`.
- This ensures the deployment can run on **Netlify**, **Cloudflare Pages**, or **GitHub Pages** without requiring a running Node.js server container.
- Netlify security headers and redirects in `netlify.toml` will continue to apply with zero configuration divergence.
