# MSIT Website — Phased Migration Plan & Safety Strategy

> **Methodology:** Incremental, non-destructive migration with strict safety gates.  
> **Safety Invariant:** Zero modifications to `main`. Zero production downtime.  
> **Status:** PREPARATION & AUDIT ONLY  

---

## 1. Migration Strategy Overview

```text
Phase 0: Audit & Architecture (COMPLETE)
   │
   ▼
Phase 1: Environment & Repository Isolation (Feature Branch + Parallel Sandbox)
   │
   ▼
Phase 2: Scaffolding Next.js 15, TypeScript & Tailwind CSS v4
   │
   ▼
Phase 3: Core Types & Static Data Layer Migration
   │
   ▼
Phase 4: Global Layout, Font Optimization & Accessibility Provider
   │
   ▼
Phase 5: Navigation, MegaMenu & Search Modal
   │
   ▼
Phase 6: Static Informational & Policy Pages Migration
   │
   ▼
Phase 7: Dynamic Content Engine & Department Pages (`[slug]`)
   │
   ▼
Phase 8: High-Complexity Feature Pages (Faculty, Facilities, Placements, Virtual Tour)
   │
   ▼
Phase 9: Interactive Animations (GSAP Opening, 404 Matrix Canvas)
   │
   ▼
Phase 10: Native SEO, JSON-LD Schemas, Sitemap & Robots.txt
   │
   ▼
Phase 11: Parity Verification (Functional, Visual, Accessibility, Performance)
   │
   ▼
Phase 12: Production Preview, Staging Validation & Atomic Merge
```

---

## 2. Git Safety Strategy & Isolation Model

### Selected Model: **Feature Branch + Parallel Workspace Directory**

We evaluated two isolation approaches:
1. **Option A (In-place Branch):** Replace root files directly on a git branch `feature/nextjs-migration`.
   * *Risk:* Switching branches wipes node_modules, requiring constant re-installs. Cannot run both Vite and Next.js simultaneously to visually verify parity side-by-side.
2. **Option B (Parallel Workspace Folder):** Scaffold Next.js inside `nextjs-migration/` or run side-by-side.
   * *Benefit:* Developer can run the Vite live site on `http://localhost:5173` and the Next.js target site on `http://localhost:3000` **at the exact same time** on separate browser windows.
   * Enables pixel-by-pixel, component-by-component visual diffing.

### Chosen Hybrid Protocol (Maximum Safety):
1. Create and switch to an isolated branch:
   ```bash
   git checkout -b feature/nextjs-migration
   ```
2. Build the Next.js project cleanly on this branch.
3. Keep `main` locked and connected to production Netlify deployments.
4. During local development, the Vite project can be started (`npm run dev`) or referenced at any moment.

---

## 3. Phased Implementation Roadmap

### Phase 1: Branch Isolation & Git Setup
- Create `feature/nextjs-migration`.
- Verify `main` remains untouched and clean.
- Ensure all audit documentation is committed and accessible.

### Phase 2: Scaffolding & Build Pipeline
- Initialize Next.js 15+ with TypeScript and App Router.
- Configure Tailwind CSS v4 with `@tailwindcss/postcss` and PostCSS.
- Port custom `@theme` tokens, semantic colors, and clamp typography from `src/index.css`.
- Verify Next.js dev server starts and compiles with zero warnings.
- **Commit:** `feat: scaffold nextjs 15 typescript environment and tailwind v4`

### Phase 3: Typed Data Schemas
- Create TypeScript interfaces in `lib/types/` (`PageData`, `FacultyMember`, `LabDetail`, `SocietyProfile`).
- Port data files from `src/data/` to `lib/data/` with full TypeScript type safety.
- Verify search index data integrity script runs cleanly.
- **Commit:** `feat: migrate static data modules and define typescript interfaces`

### Phase 4: Layout & Accessibility Infrastructure
- Implement `app/layout.tsx` using `next/font/google` for `Inter` and `Libre Baskerville`.
- Port `AccessibilityContext` into `components/accessibility/AccessibilityContext.tsx` with hydration guards.
- Port `AccessibilityModal.tsx`.
- Implement `components/layout/Footer.tsx`.
- **Commit:** `feat: implement server root layout, google fonts and accessibility provider`

### Phase 5: Header, Navigation & Search
- Port `src/components/Header.jsx` to `components/layout/Header.tsx` (`'use client'`).
- Migrate `react-router-dom` links (`<Link to="...">`) to `next/link` (`<Link href="...">`).
- Verify MegaMenu hover delays, mobile drawer toggles, and `Ctrl+K` search modal.
- **Commit:** `feat: migrate header navigation, megamenu and search modal`

### Phase 6: Static Pages Migration
- Port static informational pages to Server Components:
  - `app/academic-calendar/page.tsx`
  - `app/syllabus/page.tsx`
  - `app/timetable/page.tsx`
  - `app/brochure/page.tsx`
  - `app/privacy/page.tsx`
  - `app/terms/page.tsx`
- **Commit:** `feat: migrate academic calendars, syllabi, timetable and legal pages`

### Phase 7: Dynamic Content Engine (`app/[slug]/page.tsx`)
- Implement `app/[slug]/page.tsx` with `generateStaticParams()` covering all 40+ slugs.
- Implement dynamic `generateMetadata()` for each slug.
- Embed `DepartmentLabsSection`, `FeePaymentPortal`, `EventsPortal`, `NewslettersMagazines`, and `SocietiesHubView`.
- **Commit:** `feat: implement dynamic content engine and department pages`

### Phase 8: Complex Feature Pages
- Migrate `app/faculty/page.tsx` with `useSearchParams()` and profile modal.
- Migrate `app/facilities/page.tsx` with lab filtering and equipment modals.
- Migrate `app/placements/page.tsx` and `app/team/page.tsx`.
- Migrate `app/virtual-tour/page.tsx`.
- Migrate `app/admin/page.tsx` (Client CMS with `localStorage`).
- **Commit:** `feat: migrate faculty directory, facilities, placements, and admin dashboard`

### Phase 9: Motion & Animations
- Port `OpeningAnimation.tsx` with GSAP timeline and session gate.
- Port `app/not-found.tsx` with particle net canvas, matrix rain, and GSAP stagger.
- Port `app/error.tsx` (500 server error).
- **Commit:** `feat: migrate gsap opening animation and interactive 404 terminal`

### Phase 10: SEO, Sitemap & Robots
- Implement `app/sitemap.ts` and `app/robots.ts`.
- Inject `EducationalOrganization` and `Course` JSON-LD schemas.
- Run automated SEO verification script.
- **Commit:** `feat: implement native nextjs metadata, sitemap and structured data`

### Phase 11: Validation & Verification
- Execute complete Functional Parity Checklist.
- Execute Visual Parity comparison across Desktop (1920px), Tablet (768px), and Mobile (375px).
- Verify zero hydration errors and zero console warnings.
- Run Lighthouse audits (Target: Performance 95+, Accessibility 100, Best Practices 100, SEO 100).
- **Commit:** `test: complete functional and visual parity validation`

### Phase 12: Production Staging & Safe Merge
- Deploy migration branch to a Netlify Staging Preview environment.
- Verify live SSL, redirects, headers, and asset delivery.
- Create Pull Request to `main` with detailed verification screenshots and checklist.
- Merge into `main` upon user approval.

---

## 4. Rollback & Fail-Safe Protocol

If any blocking issue emerges during or after migration:

```text
Problem detected on feature/nextjs-migration
                   │
                   ▼
         Do NOT merge into main
                   │
                   ▼
       main remains 100% untouched
                   │
                   ▼
  Existing Vite production deployment continues uninterrupted
                   │
                   ▼
        Zero downtime. Zero rollback repair required.
```

If rolled back after a preview:
1. Discard or archive `feature/nextjs-migration`.
2. Netlify continues building from `main` using `npm run build` (Vite).
3. The live website experiences **zero disruption**.
