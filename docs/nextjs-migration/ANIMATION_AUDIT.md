# MSIT Website — GSAP & Animation System Audit

> **Core Directive:** Visual behavior and motion design must remain 100% equivalent.  
> **Strict Constraint:** Do NOT remove, degrade, or simplify animations.  
> **Status:** PREPARATION & AUDIT ONLY  

---

## 1. Animation Inventory & Technical Analysis

| Animation Entity | Source File | Implementation Mechanics | DOM Elements Targeted | Lifecycle Hook | Cleanup Implemented? | Hydration Risk & Next.js Treatment |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Opening Shared-Logo Reveal** | `src/components/OpeningAnimation.jsx` | GSAP Timeline (`@gsap/react`) | `overlayRef`, `glowRef`, `logoRef`, `sweepRef`, `#header-logo`, `header`, `#hero-title`, `#hero-divider`, `#hero-banner` | `useGSAP` with `{ scope: containerRef }` | **YES** (Handled automatically by `useGSAP` context scoping) | **High Risk if SSR'd:** Must be a strictly dynamic Client Component (`'use client'`). Triggered only after `sessionStorage` check verifies first visit of session. |
| **404 Stagger & Scale In** | `src/pages/NotFound.jsx` | GSAP Timeline (`gsap.timeline`) | `.anim-fade-in`, `.anim-scale-up`, `.anim-stagger-item` | `useGSAP` with `{ scope: containerRef }` | **YES** (`useGSAP` cleanup) | **Medium Risk:** Mark `app/not-found.tsx` as `'use client'`. Wrap in `useEffect` or `useGSAP` with reduced-motion guard. |
| **404 Particle Net Canvas** | `src/pages/NotFound.jsx` | HTML5 2D Canvas + `requestAnimationFrame` | `bgCanvasRef.current`, `window`, `document` | `useEffect` | **YES** (`cancelAnimationFrame`, event listeners removed on unmount) | **Medium Risk:** Canvas operations must be deferred to client mount. `resize()` reads `window.innerWidth/innerHeight`. |
| **404 Matrix Digital Rain** | `src/pages/NotFound.jsx` | HTML5 2D Canvas + `requestAnimationFrame` | `matrixCanvasRef.current`, `window` | `useEffect` | **YES** (`cancelAnimationFrame`, resize listener removed) | **Medium Risk:** Client-only canvas loop triggered when user types `matrix` or clicks shortcut. |
| **Back to Top Button Reveal** | `src/components/BackToTop.jsx` | CSS transitions (`translate-y`, `opacity`) | `window` scroll listener | `useEffect` | **YES** (`removeEventListener`) | **Low Risk:** `'use client'` component leaf. |
| **Global Micro-interactions** | `src/index.css` | CSS `@keyframes` (`fade-in`, `scale-in`, `backdrop-fade`) | Modal backdrops, cards, popup dialogs | Pure CSS | **N/A** (Native CSS) | **Zero Risk:** 100% compatible with Next.js and Tailwind CSS v4. |

---

## 2. Deep Dive: The Opening Shared-Logo Reveal (`OpeningAnimation.jsx`)

The opening sequence is the flagship cinematic moment of the MSIT web platform. It choreographs:
1. **Phase 1: First Light (0.0s – 0.4s):** Glow expands horizontally behind the dark backdrop.
2. **Phase 2: MSIT Logo Reveal (0.4s – 1.2s):** Institutional emblem fades and unblurs (`blur(8px)` to `blur(0px)`).
3. **Phase 3: Logo Settle & Sweep (1.2s – 1.7s):** Golden lens sweep crosses diagonally over the emblem.
4. **Phase 4: Shared-Element Translation (1.7s – 2.5s):**
   - Measures exact bounding client rects of `logoRef.current` and `#header-logo`:
     ```javascript
     const headerRect = headerLogo.getBoundingClientRect();
     const introRect = introLogo.getBoundingClientRect();
     const deltaX = (headerRect.left + headerRect.width / 2) - (introRect.left + introRect.width / 2);
     const deltaY = (headerRect.top + headerRect.height / 2) - (introRect.top + introRect.height / 2);
     const scale = headerRect.width / introRect.width;
     ```
   - Animates the intro logo directly across the screen into the exact position and scale of the header logo!
   - Concurrently fades in the header and staggers `#hero-title`, `#hero-divider`, and `#hero-banner`.

### How to Preserve This in Next.js Without Hydration Bugs
1. **Session Gate:** In `LayoutWrapper.tsx` (`'use client'`), maintain session state:
   ```tsx
   const [showIntro, setShowIntro] = useState(false);
   useEffect(() => {
     const hasPlayed = sessionStorage.getItem('msit-intro-played');
     if (pathname === '/' && !hasPlayed) {
       setShowIntro(true);
     }
   }, [pathname]);
   ```
2. **Delayed Mounting:** `OpeningAnimation` only mounts on the client when `showIntro === true`.
3. **Stable Header ID:** Ensure `#header-logo`, `#hero-title`, `#hero-divider`, and `#hero-banner` exist in the DOM with identical IDs and `initial: { opacity: 0 }` so GSAP can locate and animate them smoothly.
4. **Scoping:** Continue using `useGSAP({ scope: containerRef })` to guarantee garbage collection and avoid memory leaks upon route transition.

---

## 3. Accessibility & Reduced Motion Handling

Both `OpeningAnimation.jsx` and `NotFound.jsx` feature strict `prefers-reduced-motion` compliance:

```tsx
const isReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

if (isReducedMotion) {
    // Accessibility: Skip heavy timeline, fade overlay quickly in 0.4s
    gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: 'none',
        onComplete: onComplete
    });
    return;
}
```

In Next.js, `window.matchMedia` must be evaluated **only inside `useEffect` or `useGSAP` callbacks**, never in the module body or during SSR rendering. This preserves both full motion accessibility and SSR safety.
