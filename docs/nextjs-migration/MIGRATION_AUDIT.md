# MSIT Website — Next.js Migration Audit & Preparation

> **Target Platform:** Next.js 15+ (App Router) + React 19 + TypeScript + Tailwind CSS  
> **Source Platform:** Vite 7 + React 19 (SPA) + JavaScript + Tailwind CSS v4  
> **Status:** PREPARATION & AUDIT ONLY (No production code modified)  
> **Audit Date:** March 2026 / Institutional Review  

---

## 1. Executive Summary

This document serves as the primary master audit for migrating the **Maharaja Surajmal Institute of Technology (MSIT)** web platform from a client-side Single Page Application (Vite + React 19) to a high-performance, statically generated and server-rendered architecture using **Next.js 15+ (App Router), TypeScript, and React 19**.

The current website is a conceptual institutional portal featuring:
- **40+ static and dynamic routes** covering academics, administration, departments, faculty directories, campus life, admissions, and policies.
- Decoupled static JSON data schemas serving as a mock headless CMS.
- Advanced client-side interactivity: GSAP timeline logo-reveal opening animation, interactive campus 360° virtual tour, interactive canvas particle terminal on 404, accessibility engine (font scaling, high contrast, dark mode, reduced motion), and client-side indexed search.
- Static SEO pre-rendering script generating crawler-ready HTML with JSON-LD schemas.

### Core Objectives of the Next.js Migration
1. **Preserve 100% Functional & Visual Parity:** No route, feature, animation, or visual styling will be dropped or simplified.
2. **Native Static Site Generation (SSG) & Incremental Metadata:** Eliminate manual pre-rendering scripts (`scripts/prerender.js`) in favor of Next.js native `generateStaticParams()` and the Metadata API.
3. **Type Safety & Enterprise Maintainability:** Fully type all data models (departments, faculty profiles, society records, facilities) in TypeScript.
4. **Enhanced Performance & Core Web Vitals:** Leverage `next/image` (WebP/AVIF auto-optimization) and `next/font` (zero CLS font self-hosting) to achieve 98+ Lighthouse scores across all metrics.
5. **Zero Production Downtime & Absolute Safety:** The current Vite deployment on `main` remains untouched and functional until the Next.js migration passes strict parity verification.

---

## 2. Baseline Technology Inventory

| Dimension | Current Implementation (Vite) | Target Implementation (Next.js) | Architectural Impact |
| :--- | :--- | :--- | :--- |
| **Framework** | React 19.2.0 (Pure SPA) | Next.js 15+ (App Router) with React 19 | Server Component default; client components isolated |
| **Language** | JavaScript (ESM) | TypeScript (Strict mode) | High; full type safety for schemas and props |
| **Bundler / Dev** | Vite 7.3.1 (`@vitejs/plugin-react`) | Next.js Turbopack / Webpack | Seamless dev server; native route-level code splitting |
| **Routing** | `react-router-dom` v7.13.1 | Next.js App Router (`app/` filesystem) | Eliminates client router; enables nested layouts |
| **Styling** | Tailwind CSS v4.2.1 (`@tailwindcss/vite`) | Tailwind CSS v4 (`@tailwindcss/postcss`) | CSS nesting and `@theme` preserved 100% |
| **Animations** | GSAP 3.14.2 & `@gsap/react` 2.1.2 | GSAP 3.14.2 & `@gsap/react` 2.1.2 | Isolated in `'use client'` leaves; zero hydration issues |
| **Icons** | `lucide-react` 0.576.0 | `lucide-react` 0.576.0 | 100% compatible; tree-shaken by bundler |
| **SEO & Head** | `react-helmet-async` + `prerender.js` | Native Next.js Metadata API + `generateMetadata` | Replaces runtime Helmet and build-time injection |
| **Sitemap & Robots**| `vite-plugin-sitemap` + Node script | `app/sitemap.ts` + `app/robots.ts` | Fully native, dynamic build-time generation |
| **Data Layer** | Static JS/JSON objects (`src/data/`) | Typed TypeScript modules (`src/data/` or `lib/data/`)| Retains zero-database simplicity; adds strict typing |
| **State & Persistence**| React Context + `localStorage` | Client Context + `localStorage` (with hydration guards)| Guarded against SSR `window is not defined` errors |
| **Hosting** | Netlify Static (`dist/`) | Netlify (Next.js Runtime / Static Export) or Vercel | Seamless static export (`output: 'export'`) or Node runtime |

---

## 3. Migration Scope & Non-Goals

### In-Scope
- Scaffolding Next.js with TypeScript and configuring Tailwind CSS v4.
- Creating TypeScript interfaces for all data structures (`FacultyMember`, `PageSchema`, `SocietyData`, `LabItem`, `StatItem`).
- Migrating all static routes into dedicated `app/<route>/page.tsx` routes.
- Migrating dynamic routes into `app/[slug]/page.tsx` with `generateStaticParams()` covering all 40+ slugs.
- Re-architecting `OpeningAnimation`, `Header`, `BackToTop`, `AccessibilityModal`, and `NotFound` into safe Client Components.
- Replacing `react-helmet-async` with native `Metadata` objects.
- Replacing Google Web Font `<link>` tags with `next/font/google` for `Inter` and `Libre_Baskerville`.
- Implementing `app/sitemap.ts` and `app/robots.ts`.

### Strict Non-Goals (Out-of-Scope)
- **NO visual redesign or re-theming:** Color palettes, typography, spacing, and layouts remain identical.
- **NO backend database introduction:** Do not add PostgreSQL, MongoDB, Prisma, or Supabase. The platform's strength is zero maintenance decoupled static data.
- **NO animation removal or simplification:** The GSAP timeline in `OpeningAnimation` and matrix/canvas in `NotFound` must remain pixel-identical.
- **NO disruption to current production:** Main branch remains deployable at all times.

---

## 4. Audit Document Navigation

The audit is detailed across the following specialized documents in `docs/nextjs-migration/`:

1. [ARCHITECTURE.md](file:///Users/jayantolhyan/Desktop/my%20projects/MSIT%20WDS%20/msit%20website/docs/nextjs-migration/ARCHITECTURE.md) — Structural design, component hierarchy, Server vs Client split.
2. [ROUTE_MAP.md](file:///Users/jayantolhyan/Desktop/my%20projects/MSIT%20WDS%20/msit%20website/docs/nextjs-migration/ROUTE_MAP.md) — 100% route inventory with complexity ratings and data sources.
3. [COMPONENT_MAP.md](file:///Users/jayantolhyan/Desktop/my%20projects/MSIT%20WDS%20/msit%20website/docs/nextjs-migration/COMPONENT_MAP.md) — Classification of components (RSC vs RCC) and refactoring notes.
4. [DEPENDENCY_AUDIT.md](file:///Users/jayantolhyan/Desktop/my%20projects/MSIT%20WDS%20/msit%20website/docs/nextjs-migration/DEPENDENCY_AUDIT.md) — Detailed package review and compatibility roadmap.
5. [DATA_AND_STATE_AUDIT.md](file:///Users/jayantolhyan/Desktop/my%20projects/MSIT%20WDS%20/msit%20website/docs/nextjs-migration/DATA_AND_STATE_AUDIT.md) — Schemas, `localStorage`, `sessionStorage`, and hydration risk mitigation.
6. [SEO_AUDIT.md](file:///Users/jayantolhyan/Desktop/my%20projects/MSIT%20WDS%20/msit%20website/docs/nextjs-migration/SEO_AUDIT.md) — Metadata API mapping, canonical tags, JSON-LD, robots, and sitemaps.
7. [ANIMATION_AUDIT.md](file:///Users/jayantolhyan/Desktop/my%20projects/MSIT%20WDS%20/msit%20website/docs/nextjs-migration/ANIMATION_AUDIT.md) — GSAP lifecycle, canvas particles, matrix effect, and reduced motion.
8. [ASSET_AUDIT.md](file:///Users/jayantolhyan/Desktop/my%20projects/MSIT%20WDS%20/msit%20website/docs/nextjs-migration/ASSET_AUDIT.md) — Images, faculty avatars, campus gallery, PDFs, and font optimization.
9. [RISK_REGISTER.md](file:///Users/jayantolhyan/Desktop/my%20projects/MSIT%20WDS%20/msit%20website/docs/nextjs-migration/RISK_REGISTER.md) — Key risks, severity, mitigations, and fallback procedures.
10. [MIGRATION_PLAN.md](file:///Users/jayantolhyan/Desktop/my%20projects/MSIT%20WDS%20/msit%20website/docs/nextjs-migration/MIGRATION_PLAN.md) — Step-by-step phased execution plan and verification gates.
