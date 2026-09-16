# MSIT Website — Data, State, and Browser-API Audit

> **Standard:** Comprehensive audit of data sources, browser APIs, and state persistence.  
> **Rule:** Prevent React SSR hydration mismatches (`ReferenceError: window/document is not defined`).  
> **Status:** PREPARATION & AUDIT ONLY  

---

## 1. Data Classification Matrix

| Data Source | Files / Origin | Classification | Lifecycle in Next.js |
| :--- | :--- | :--- | :--- |
| **Department & Academic Content** | `src/data/pages/academicData.js` | **Static Build-Time Data** | Bundled at compile time. Read on server in `app/[slug]/page.tsx` via `generateStaticParams()`. Zero client bundle overhead. |
| **Institutional & Overview Content** | `src/data/pages/aboutData.js` | **Static Build-Time Data** | Statically baked into HTML. |
| **Admissions & Compliance Content** | `src/data/pages/admissionData.js` | **Static Build-Time Data** | Statically baked into HTML. |
| **Campus Life & Policies** | `src/data/pages/campusLifeData.js` | **Static Build-Time Data** | Statically baked into HTML. |
| **Placements & Recruiter Content** | `src/data/pages/placementData.js` | **Static Build-Time Data** | Statically baked into HTML. |
| **Quick Links & Attendance** | `src/data/pages/quickLinksData.js` | **Static Build-Time Data** | Statically baked into HTML. |
| **Faculty & Staff Directory** | `src/data/facultyData.js` (100+ profiles) | **Static Build-Time Data** | Strongly typed in `lib/data/facultyData.ts`. Exported statically. |
| **Facilities & Labs Data** | `src/data/facilitiesData.js` (45+ labs, MOUs) | **Static Build-Time Data** | Strongly typed in `lib/data/facilitiesData.ts`. |
| **Societies Data** | `src/data/societiesData.js` | **Static Build-Time Data** | Static data passed to `SocietyDetailView` and `SocietiesHubView`. |
| **Search Dictionary** | `src/data/searchIndex.js` | **Static Build-Time Data** | Pre-compiled static dictionary used for fast client-side querying. |
| **Admin News & Notices** | `localStorage` (`msit_events_v2`) | **Client-side localStorage State** | Mock CMS persistence in browser. Remains client-side state hydrated post-mount. |
| **Admin Testimonials** | `localStorage` (`msit_testimonials_v2`)| **Client-side localStorage State** | Mock CMS persistence in browser. Remains client-side state hydrated post-mount. |
| **Admin Highlights** | `localStorage` (`msit_highlights_v3`) | **Client-side localStorage State** | Mock CMS persistence in browser. Remains client-side state hydrated post-mount. |
| **Admin Session Authentication** | `sessionStorage` (`msit_admin_auth`) | **Client-side Session State** | Checked inside `AdminDashboard.tsx` on client mount. |
| **Intro Animation Played Flag** | `sessionStorage` (`msit-intro-played`) | **Client-side Session State** | Checked inside `IntroProvider` on client mount. |
| **Accessibility Preferences** | `localStorage` (`msit-accessibility-settings`)| **Client-side localStorage State** | Applied to `<html>` classes after initial client mount. |

---

## 2. Browser-Only API Exhaustive Audit

Every browser API in the current repository has been cataloged to determine its SSR safety and migration strategy:

| API / Method | Source Location | Purpose | SSR Safe? | Next.js Implementation Strategy |
| :--- | :--- | :--- | :--- | :--- |
| `window.scrollY` | `Header.jsx`, `BackToTop.jsx` | Detect scroll position to toggle header shadow & back-to-top button. | **NO** | Component marked `'use client'`. Listener attached inside `useEffect()`. Initial state defaults to `false`. |
| `window.scrollTo` | `BackToTop.jsx`, `Layout.jsx`, `SocietyDetailView.jsx`, `Home.jsx` | Smooth scrolling to top or specific section IDs. | **NO** | Executed strictly inside client click handlers or `useEffect()`. |
| `window.location.search` | `FacultyStaff.jsx:15`, `FacultyStaff.jsx:27` | Reads query parameter `?id=` to open faculty profile modal. | **NO (High Risk)** | **Refactor:** Replace `new URLSearchParams(window.location.search)` with Next.js native `useSearchParams()` hook wrapped in `<Suspense>`, or pass `searchParams` from the server page component. |
| `window.location.reload()` | `ServerError.jsx:8` | Refreshes page on error recovery. | **NO** | Component marked `'use client'`. Action attached to button click handler. |
| `window.matchMedia` | `OpeningAnimation.jsx`, `NotFound.jsx`, `AccessibilityContext.jsx` | Checks for `prefers-reduced-motion`, `prefers-color-scheme: dark`, and `prefers-contrast`. | **NO (High Risk)** | **Refactor:** Run inside `useEffect` on client. Never call during SSR or in initial `useState()` initializer to prevent hydration mismatch. |
| `window.history.back()` | `NotFound.jsx:333`, `579` | Back navigation button. | **NO** | Replace with Next.js `useRouter().back()`. |
| `window.print()` | `FeePaymentPortal.jsx`, `NewsDetail.jsx` | Browser print dialog for receipts and circulars. | **NO** | Fired strictly from user button `onClick`. |
| `window.innerWidth/Height` | `NotFound.jsx` | Resizes canvas for particle and matrix animations. | **NO** | Computed inside `useEffect()` on mount and window `resize` event. |
| `document.getElementById` | `OpeningAnimation.jsx`, `Header.jsx`, `SocietyDetailView.jsx`, `Home.jsx` | Accesses DOM elements for GSAP coordinates, shared logo translation, and scroll offsets. | **NO (High Risk)** | Target elements must have stable IDs in the DOM before GSAP timeline triggers (handled inside `useGSAP` with cleanup). |
| `document.body.style.overflow`| `DynamicPage.jsx`, `FacultyStaff.jsx`, `Placements.jsx`, `Team.jsx`, `Layout.jsx` | Prevents background scrolling while modal is open. | **NO** | Controlled inside `useEffect([isOpen])` with cleanup reverting to `unset`. |
| `document.body.classList` | `Layout.jsx` (`intro-active`) | Adds class to body while opening animation is active. | **NO** | Run inside `useEffect` in `IntroProvider`. |
| `document.documentElement` | `AccessibilityContext.jsx` | Modifies root classes (`acc-focus-ring`, `acc-high-contrast`, `acc-dark-mode`, `style.fontSize`). | **NO** | Run inside `useEffect([settings])`. |
| `localStorage.getItem` | `Home.jsx:123, 197, 558`, `AdminDashboard.jsx`, `NewsDetail.jsx`, `AccessibilityContext.jsx` | Reads cached events, testimonials, highlights, and accessibility settings. | **NO (Critical Risk)** | **Hydration Trap:** In Vite, `useState(() => localStorage.getItem(...))` runs in browser. In Next.js SSR, this throws `localStorage is not defined` or causes hydration mismatch. **Fix:** Initialize state with static default values; synchronize from `localStorage` inside `useEffect` post-mount. |
| `localStorage.setItem` | `AdminDashboard.jsx`, `AccessibilityContext.jsx`, `Home.jsx` | Updates persistent mock CMS data. | **NO** | Executed in client callbacks. |
| `sessionStorage.getItem` | `AdminDashboard.jsx:7`, `Layout.jsx:14` | Checks admin login and intro animation played state. | **NO (Critical Risk)** | Initial state must be initialized as `false`, then synced in `useEffect` on mount. |
| `IntersectionObserver` | `Home.jsx:303` | Observes when sections scroll into viewport to update active stat numbers. | **NO** | Initialized inside `useEffect()` with `observer.disconnect()` in cleanup return. |
| `requestAnimationFrame` | `NotFound.jsx:169, 221` | Canvas animation rendering loops for particle net and matrix rain. | **NO** | Started inside `useEffect()` with `cancelAnimationFrame()` in cleanup return. |

---

## 3. Hydration Mismatch Prevention Architecture

Next.js will throw hydration errors if the initial HTML generated on the server differs from the initial client render. 

### Hydration Rule 1: Two-Pass Client Mount Pattern
For components that depend on `localStorage` or `sessionStorage` (such as `AccessibilityProvider` and `Home` testimonials):

```tsx
'use client';

import { useState, useEffect } from 'react';

export function useClientStorage<T>(key: string, defaultValue: T): [T, (val: T) => void] {
  const [data, setData] = useState<T>(defaultValue);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(key);
      if (stored) {
        setData(JSON.parse(stored));
      }
    } catch (e) {
      console.warn('localStorage read error', e);
    }
  }, [key]);

  const updateData = (newVal: T) => {
    setData(newVal);
    try {
      localStorage.setItem(key, JSON.stringify(newVal));
    } catch (e) {
      console.warn('localStorage write error', e);
    }
  };

  return [data, updateData];
}
```

### Hydration Rule 2: Pure Server Defaults for First Paint
During SSR, the server will **always render the default static data** (`defaultEvents`, `defaultTestimonials`, `defaultHighlights`). When the client mounts in the browser, if custom entries exist in `localStorage`, the client gently updates the state without throwing hydration errors.
