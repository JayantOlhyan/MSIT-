# MSIT Website — Static Asset & Media Optimization Audit

> **Scope:** Public assets, images, icons, faculty directories, campus photo archive, documents, and web fonts.  
> **Status:** PREPARATION & AUDIT ONLY  

---

## 1. Static Asset Directory Inventory (`public/`)

The repository houses a substantial collection of static assets in `public/`:

| Directory / Asset Group | File Count & Format | Total Volume | Current Usage | Next.js Strategy |
| :--- | :--- | :--- | :--- | :--- |
| **Faculty & Staff Photos** | 100+ files (`.webp`, `.svg`) in `public/faculty/` | ~3.2 MB | Rendered in `FacultyStaff.jsx`, `Placements.jsx`, `Team.jsx`, and `DepartmentLabsSection.jsx`. | Preserved in `public/faculty/`. Use `next/image` with fallback to `default-avatar.webp`. |
| **Campus Photography Archive** | 26+ files (`.webp`, `.jpg`) in `public/campus/` | ~6.5 MB | Powers the `Home.jsx` interactive gallery, `VirtualTour.jsx`, and page hero banners. | Preserved in `public/campus/`. High-priority hero images loaded with `priority` attribute. |
| **Institutional & Accreditation Logos** | `msit-logo.webp`, `aicte-logo.png`, `naac-logo.png`, `nba-logo.png`, `iso-logo.png`, `aishe-logo.png`, `ggsipu-logo.png` | ~800 KB | Header, footer, accreditation banners, statutory trust indicators. | Preserved in `public/`. Eagerly loaded with explicit `width` and `height` to eliminate CLS. |
| **Recruiter Logos** | In `public/logos/recruiters/` | ~500 KB | Displayed on `Home.jsx` and `Placements.jsx` recruiter marquee. | Preserved in `public/logos/recruiters/`. |
| **Student Development Team** | `public/team/` (`jayant-olhyan.webp`, `pawan-singh.webp`, `abhay-mishra.webp`) | ~250 KB | Team attribution page (`/team`). | Preserved in `public/team/`. |
| **Testimonial Portraits** | `priya-sharma.webp`, `rahul-verma.webp`, `ananya-iyer.webp` | ~180 KB | Testimonial carousel on homepage. | Preserved in `public/`. |
| **Web App Manifest** | `manifest.webmanifest` | ~1 KB | PWA icon and application metadata. | Referenced natively via `app/manifest.ts` or static link in layout. |
| **Static HTML Fallbacks** | `404.html`, `500.html` | ~10 KB | CDN fallback error pages for Netlify. | Replaced by Next.js `app/not-found.tsx` and `app/error.tsx`. |

---

## 2. Typography & Web Font Optimization

### Current Implementation (Vite)
In `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
```
- **Disadvantages:** External DNS lookups, blocking CSS requests, font pop-in (FOUT), and layout shifts (CLS).

### Target Implementation (Next.js with `next/font`)
In `app/layout.tsx`:
```tsx
import { Inter, Libre_Baskerville } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${libreBaskerville.variable}`}>
      <body className="font-sans ...">{children}</body>
    </html>
  );
}
```
- **Advantages:**
  - 100% self-hosted at build time.
  - Zero external network requests to Google servers (enhanced user privacy & GDPR compliance).
  - Exact size-adjust matching eliminating Cumulative Layout Shift (CLS score: 0).

---

## 3. Image Loading & Sizing Strategy

To preserve performance during static deployment:
1. **Logo & Core Hero Banner:**
   ```tsx
   <Image
     src="/msit-logo.webp"
     alt="Maharaja Surajmal Institute of Technology Logo"
     width={120}
     height={112}
     priority
     className="h-10 md:h-12 lg:h-14 w-auto object-contain"
   />
   ```
2. **Faculty Avatars:**
   Avatars use a fixed container (`w-16 h-16` or `w-20 h-20`). Using explicit width/height ensures layout stability.
3. **Static HTML Export Compatibility:**
   If deploying via `output: 'export'` on Netlify:
   - Configure `images: { unoptimized: true }` in `next.config.js`, OR
   - Use Netlify’s native image CDN transformation plugin.
   All images are already pre-encoded in `.webp` format, ensuring minimal bandwidth consumption even without a live image optimization server.
