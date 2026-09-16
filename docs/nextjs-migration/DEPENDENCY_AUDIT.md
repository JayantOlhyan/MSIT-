# MSIT Website — Dependency Compatibility & Package Audit

> **Standard:** Exhaustive line-by-line review of `package.json`.  
> **Rule:** Replace only with concrete architectural or compatibility justification.  
> **Status:** PREPARATION & AUDIT ONLY  

---

## 1. Production Dependencies (`dependencies`)

| Package | Current Version | Target Status | Detailed Analysis & Migration Strategy |
| :--- | :--- | :--- | :--- |
| `react` | `^19.2.0` | **Compatible** | React 19 is fully supported by Next.js 15+ (`next@15` or `next@canary` with React 19 peer dependencies). Server Components, `useActionState`, and Actions operate natively. |
| `react-dom` | `^19.2.0` | **Compatible** | Fully aligned with React 19. Next.js App Router relies on `react-dom/server` and client hydration natively. |
| `gsap` | `^3.14.2` | **Client-only** | GSAP directly animates DOM elements (`document.getElementById`, `window`, CSS properties). Must only be imported and invoked inside Client Components (`'use client'`). 100% compatible on client. |
| `@gsap/react` | `^2.1.2` | **Client-only** | Provides the `useGSAP` hook with built-in cleanup scoping. Must only be executed within Client Components (`'use client'`). Prevents memory leaks on route changes. |
| `lucide-react` | `^0.576.0` | **Compatible** | 100% compatible with both React Server Components (RSC) and Client Components. Lucide icons are pure SVG components. Tree-shaken automatically by Next.js bundler. |
| `react-router-dom` | `^7.13.1` | **Needs replacement** | **Concrete Architectural Reason:** React Router DOM provides client-side SPA routing (`BrowserRouter`, `Routes`, `Route`, `useLocation`, `useNavigate`, `Link`, `useParams`). In Next.js App Router, routing is native to the filesystem (`app/`). Replaced by `next/navigation` (`useRouter`, `usePathname`, `useSearchParams`, `useParams`) and `next/link` (`<Link />`). |
| `react-helmet-async` | `^3.0.0` | **Needs replacement** | **Concrete Architectural Reason:** `react-helmet-async` operates by mutating `<head>` in the browser or via a custom SSR dispatcher. Next.js App Router has a native, type-safe **Metadata API** (`export const metadata: Metadata` and `generateMetadata()`). Native metadata eliminates client runtime overhead and renders directly into initial server HTML. |
| `@tailwindcss/vite` | `^4.2.1` | **Unnecessary** | Vite-specific plugin for Tailwind CSS v4. In Next.js, Tailwind v4 is integrated via `@tailwindcss/postcss` or standard PostCSS configuration. |

---

## 2. Development Dependencies (`devDependencies`)

| Package | Current Version | Target Status | Detailed Analysis & Migration Strategy |
| :--- | :--- | :--- | :--- |
| `tailwindcss` | `^4.2.1` | **Compatible** | Tailwind CSS v4 is supported in Next.js via `@tailwindcss/postcss` and PostCSS 8+. Retains all `@theme` tokens, custom utilities, and color variables. |
| `postcss` | `^8.5.6` | **Compatible** | Required by Next.js for CSS processing. |
| `autoprefixer` | `^10.4.27` | **Compatible** | Works alongside PostCSS to append vendor prefixes for older browsers. |
| `vite` | `^7.3.1` | **Unnecessary** | Bundler for Vite SPA. Replaced by `next` (Turbopack / Webpack). |
| `@vitejs/plugin-react` | `^5.1.1` | **Unnecessary** | Vite-specific React plugin. Handled internally by Next.js compiler. |
| `vite-plugin-sitemap` | `^0.8.2` | **Needs replacement** | Vite-specific sitemap plugin. Replaced natively in Next.js App Router via `app/sitemap.ts`. |
| `eslint` | `^9.39.1` | **Needs configuration** | Next.js provides `eslint-config-next` which configures Core Web Vitals, image usage, and Next.js-specific lint rules while maintaining ESLint 9 compatibility. |
| `@eslint/js` | `^9.39.1` | **Needs configuration** | Standard JS ESLint config. Kept in flat config `eslint.config.mjs`. |
| `eslint-plugin-react-hooks` | `^7.0.1` | **Compatible** | Essential for detecting hook dependency issues. |
| `eslint-plugin-react-refresh` | `^0.4.24` | **Unnecessary** | Vite Fast Refresh linter plugin. Next.js handles Fast Refresh natively. |
| `globals` | `^16.5.0` | **Compatible** | Standard ESLint globals. |
| `@types/react` | `^19.2.7` | **Compatible** | Standard React 19 TypeScript definitions. |
| `@types/react-dom` | `^19.2.3` | **Compatible** | Standard ReactDOM 19 TypeScript definitions. |
| `gh-pages` | `^6.3.0` | **Needs configuration** | If deploying static export to GitHub Pages, `gh-pages` can deploy the `out/` directory. |

---

## 3. New Packages Required for Target Stack

| Package | Proposed Version | Purpose |
| :--- | :--- | :--- |
| `next` | `^15.2.0` | Next.js core framework (App Router, Server Components, Image & Font optimization). |
| `typescript` | `^5.7.0` | Static type checking and schema enforcement across data modules. |
| `@types/node` | `^22.0.0` | Node.js types for build scripts and Next.js configuration. |
| `@tailwindcss/postcss` | `^4.2.1` | Official PostCSS integration for Tailwind CSS v4 in Next.js. |
| `eslint-config-next` | `^15.2.0` | Official Next.js linting rules (includes accessibility, hydration warnings, CWV). |

---

## 4. Summary of Replacements & Removals

```text
REMOVALS (Vite-specific or redundant in Next.js):
  - vite
  - @vitejs/plugin-react
  - @tailwindcss/vite
  - vite-plugin-sitemap
  - react-router-dom
  - react-helmet-async
  - eslint-plugin-react-refresh

ADDITIONS (Next.js & TypeScript core):
  + next
  + typescript
  + @types/node
  + @tailwindcss/postcss
  + eslint-config-next

PRESERVED UNCHANGED:
  = react (19.2.0)
  = react-dom (19.2.0)
  = gsap (3.14.2)
  = @gsap/react (2.1.2)
  = lucide-react (0.576.0)
  = tailwindcss (4.2.1)
  = postcss (8.5.6)
  = autoprefixer (10.4.27)
```
