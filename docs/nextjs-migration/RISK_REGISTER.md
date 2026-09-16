# MSIT Website — Risk Register & Failure Mode Analysis

> **Directive:** Identify and mitigate every technical, functional, and deployment risk prior to implementation.  
> **Status:** PREPARATION & AUDIT ONLY  

---

## 1. Risk Matrix Overview

| Risk ID | Failure Mode | Severity | Probability | Impact Area | Mitigation Strategy |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **R-01** | **SSR Hydration Mismatch via `localStorage`** | **CRITICAL** | High | `Home.jsx`, `AccessibilityContext`, `AdminDashboard` | Server must strictly render default static state. `localStorage` reads deferred to post-mount `useEffect()`. |
| **R-02** | **GSAP Target Element Missing during Mount** | **HIGH** | Medium | `OpeningAnimation.jsx` | Scoped `useGSAP` with fallback checks. `OpeningAnimation` only renders client-side after layout is mounted. |
| **R-03** | **`window.location.search` Crash during SSR** | **HIGH** | High | `FacultyStaff.jsx:15` | Replace direct `window.location.search` with Next.js `useSearchParams()` wrapped in `<Suspense>`. |
| **R-04** | **Static Route Shadowing by `[slug]` Engine** | **MEDIUM** | Low | `/placements`, `/facilities`, `/faculty`, `/team` | Next.js App Router prioritizes static directories over dynamic params. Verified in Route Map. |
| **R-05** | **Netlify SPA Redirect Hijacking Static Routes** | **HIGH** | Medium | Netlify Deployment | Remove `/* -> /index.html` SPA rewrite rule when migrating to Next.js static export (`out/`). |
| **R-06** | **Tailwind CSS v4 `@theme` Token Drift** | **MEDIUM** | Low | Typography, Spacing, Custom Colors | Use `@tailwindcss/postcss` with identical `@theme` block from `src/index.css`. |
| **R-07** | **Accidental Production Disruption** | **CRITICAL** | Zero (By Design) | Git `main` branch & Live Website | **Zero edits to `main`**. All work performed on isolated branch (`feature/nextjs-migration`). |
| **R-08** | **Search Index Bundle Bloat** | **LOW** | Low | Client JS Bundle | `searchIndex.js` remains ~30KB static JSON, loaded only by `/search` and Header modal. |

---

## 2. Detailed Technical Risk Assessments

### Risk R-01: React 19 Hydration Mismatches
* **Mechanism:** In Vite, React renders only in the user's browser where `localStorage` is synchronously available. In Next.js, components first render to static HTML on the server (where `localStorage` is `undefined`). If the component attempts to read `localStorage` during render, it throws:
  ```text
  ReferenceError: localStorage is not defined
  ```
  Even if guarded by `typeof window !== 'undefined'`, if the client renders a different initial tree than the server HTML, React throws Hydration Error #418.
* **Resolution:**
  1. All states that use `localStorage` (testimonials, events, accessibility settings) must initialize with **predictable static defaults**.
  2. Inside a `useEffect(() => { ... }, [])`, read `localStorage` and trigger a state update. This ensures the first client paint matches the server HTML exactly, followed by a seamless state synchronization.

---

### Risk R-02: GSAP Shared Element Target Missing
* **Mechanism:** `OpeningAnimation.jsx` executes `document.getElementById('header-logo')` and `#hero-title` to calculate coordinate deltas for the cinematic shared-element animation. If the server-rendered DOM has not yet hydrated or if IDs are changed, `getBoundingClientRect()` returns null or throws.
* **Resolution:**
  1. The `#header-logo` and hero elements must retain their exact IDs and styling.
  2. In `OpeningAnimation.jsx`, the existing fallback logic:
     ```javascript
     if (headerLogo && introLogo) {
       // Shared element translation
     } else {
       // Graceful fallback: fade out intro logo in place
       gsap.to(introLogo, { opacity: 0, duration: 0.75 });
     }
     ```
     ensures the animation never crashes or halts navigation even if the element is unavailable.

---

### Risk R-03: `useSearchParams()` Missing Suspense Boundary
* **Mechanism:** In Next.js App Router, using `useSearchParams()` inside a Client Component causes the entire page to de-opt into client-side rendering at build time unless wrapped in a `<Suspense>` boundary.
* **Resolution:**
  In `app/faculty/page.tsx` and `app/search/page.tsx`:
  ```tsx
  import { Suspense } from 'react';
  import FacultyDirectoryClient from './FacultyDirectoryClient';

  export default function FacultyPage() {
    return (
      <Suspense fallback={<FacultyDirectorySkeleton />}>
        <FacultyDirectoryClient />
      </Suspense>
    );
  }
  ```

---

### Risk R-05: Netlify Deployment Configuration Drift
* **Mechanism:** The current `netlify.toml` contains:
  ```toml
  [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200
  ```
  This is standard for Single Page Applications. In Next.js static export (`output: 'export'`), each page generates its own static HTML file (`about/index.html`, `cse/index.html`). If the SPA redirect remains, Netlify will serve the homepage `index.html` for all deep links instead of the pre-rendered subpage HTML!
* **Resolution:**
  Create a dedicated `netlify.toml` for the Next.js migration branch that points `publish = "out"` and drops the SPA wildcard redirect while preserving security headers and 301 canonical redirects.
