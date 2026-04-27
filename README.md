<div align="center">
  <img src="public/msit-logo.webp" alt="MSIT Logo" width="120" />

  # MSIT — Maharaja Surajmal Institute of Technology
  
  **A high-performance, accessible, and modern redesign of the MSIT platform.**
  *Engineered with React 19, Vite 7, and Tailwind CSS 4.*

  [![Live Site](https://img.shields.io/badge/Live%20Site-msit--website.netlify.app-1B5E3B?style=for-the-badge&logo=netlify&logoColor=white)](https://msit-website.netlify.app/)
  [![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
  [![Vite](https://img.shields.io/badge/Vite-7-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![GSAP](https://img.shields.io/badge/Animations-GSAP-green?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)

</div>

---

## 📖 Project Overview

This repository features a complete architectural overhaul and visual redesign of the Maharaja Surajmal Institute of Technology (MSIT) website. Developed as a professional portfolio project, it transforms a legacy institutional web presence into a cutting-edge **Single Page Application (SPA)** focused on speed, modularity, and inclusive design.

> [!NOTE]
> This is a **conceptual redesign** for portfolio purposes and is not the official website of MSIT. The official portal is located at [msit.in](http://www.msit.in).

---

## 🏗️ Core Architecture

### ⚡ Dynamic Page Engine
The platform utilizes a data-driven rendering engine centered around `DynamicPage.jsx`. By Decoupling content from structure, the application can render 30+ unique subpages (Departments, Admissions, Campus Life) using a single, highly optimized template. 

- **Single Source of Truth**: All content is managed within modularized JS objects in `src/data/`.
- **Slug-based Routing**: Seamlessly handles navigation via dynamic route parameters.
- **Lazy Hydration**: Components only render when needed, ensuring minimal initial bundle size.

### 🎨 Semantic Design System (Tailwind v4)
The application has been migrated to **Tailwind CSS 4**, utilizing a centralized semantic design system.
- **Design Tokens**: Standardized variables for `--color-primary`, `--color-accent`, and `--shadow-card`.
- **Accessibility Engine**: Built-in support for high-contrast modes and typography scaling via `AccessibilityContext`.
- **Glassmorphism UI**: Premium visual layer with translucent overlays and sleek micro-interactions powered by GSAP.

### 🔍 Automated SEO & Performance
- **Dynamic Meta Tags**: Integrated `react-helmet-async` for page-specific titles and descriptions.
- **Automated Sitemaps**: `vite-plugin-sitemap` automatically indexes all 44+ routes during the build process.
- **Optimized Assets**: Modern image formats and script splitting for near-perfect Lighthouse scores.

---

## 🛠 Tech Stack

| Layer | Technology |
|-----------------------|---------------------------------|
| **Library** | React 19 (Modern Hooks) |
| **Tooling** | Vite 7 (High-speed HMR) |
| **Styling** | Tailwind CSS 4 (@theme variables) |
| **Routing** | React Router v7 |
| **Animation** | GSAP (Smooth Transitions) |
| **Icons** | Lucide React |
| **Deployment** | Netlify |

---

## 📂 Project Structure

```bash
MSIT-/
├── public/                 # Static assets & Deployment config (_redirects)
├── src/
│   ├── components/         # Reusable UI components (Layout, Header, Footer)
│   ├── context/            # Global state (Accessibility, Theme)
│   ├── data/
│   │   ├── pages/          # Modular domain content (About, Academic, Admission)
│   │   └── pagesData.js    # Data aggregator for the Dynamic Engine
│   ├── pages/              # Composite route views (Home, Placements, Search)
│   ├── App.jsx             # Route definitions & Global providers
│   └── main.jsx            # Entry point & Tailwind imports
├── netlify.toml            # Security headers & Redirect rules
└── package.json            # Dependencies & Scripts
```

---

## ⚙️ Development

### Prerequisites
- **Node.js**: v20 or higher (required for Vite 7)
- **npm**: v10 or higher

### Installation & Startup
1. **Clone the project**:
   ```bash
   git clone https://github.com/JayantOlhyan/MSIT-.git
   cd MSIT-
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Launch dev environment**:
   ```bash
   npm run dev
   ```

---

## 🤝 Contributing & License

Contributions are welcome. For major changes, please open an issue first to discuss your proposal.

- **License**: [MIT](LICENSE)
- **Author**: [Jayant Olhyan](https://github.com/JayantOlhyan)

<div align="center">
  <sub>Built with ❤️ for MSIT</sub>
</div>
