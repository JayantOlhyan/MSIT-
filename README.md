<div align="center">
  <img src="public/msit-logo.png" alt="MSIT Logo" width="120" />

  # MSIT — Maharaja Surajmal Institute of Technology

  **Modern, high-performance college website built with React 18 + Vite**

  [![Live Site](https://img.shields.io/badge/Live%20Site-msit--website.netlify.app-1B5E3B?style=for-the-badge&logo=netlify&logoColor=white)](https://msit-website.netlify.app/)
  [![React](https://img.shields.io/badge/React-18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
  [![Vite](https://img.shields.io/badge/Vite-5-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://netlify.com/)

</div>

---

## Overview

This is a full redesign of the official MSIT college website. It replaces the legacy
static HTML site with a fast, modern Single Page Application (SPA) that is responsive,
scalable, and easy to maintain.

The architecture uses a single `DynamicPage.jsx` template driven by a `pagesData.js`
data dictionary, which powers 30+ subpages across departments, admissions, faculty,
placements, and campus life — without any code duplication.

**Live:** https://msit-website.netlify.app/
**College:** Maharaja Surajmal Institute of Technology, New Delhi
**Affiliated to:** Guru Gobind Singh Indraprastha University (GGSIPU)

---

## Features

- **Dynamic page engine** — `pagesData.js` + `DynamicPage.jsx` renders 30+
pages from a single template
- **Mega menu navigation** — full desktop mega-menu with a mobile slide-out
panel
- **Fully responsive** — works on all screen sizes from 320px mobile to 4K
desktop
- **Instant routing** — React Router v6 with client-side navigation, zero
full-page reloads
- **Smooth animations** — scroll-aware components, parallax hero,
micro-interactions
- **Netlify-ready** — includes `_redirects` and `netlify.toml` so all routes
work on refresh

---

## Tech Stack

| Layer | Technology |
|-----------------------|---------------------------------|
| Framework | React 18 |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Routing | React Router v6 |
| Icons | Lucide React |
| Hosting | Netlify |

---

## Project Structure

```
MSIT-/
├── public/
│   ├── msit-logo.png
│   ├── _redirects         ← Netlify SPA routing fix
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Header.jsx      ← Global nav + mega menu
│   │   ├── Footer.jsx      ← Footer with links
│   │   └── Layout.jsx      ← App shell / route wrapper
│   ├── pages/
│   │   ├── Home.jsx        ← Landing page (hero, events, quick links)
│   │   ├── About.jsx       ← About MSIT
│   │   ├── CSEDepartment.jsx
│   │   ├── DynamicPage.jsx ← Universal template for all subpages
│   │   └── NotFound.jsx    ← Custom 404 page
│   ├── data/
│   │   └── pagesData.js    ← Content source for all dynamic pages
│   ├── App.jsx             ← Route definitions
│   ├── index.css           ← Global styles + Tailwind directives
│   └── main.jsx            ← React DOM entry point
├── netlify.toml            ← Netlify redirect config
├── vite.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/JayantOlhyan/MSIT-.git
cd MSIT-

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open http://localhost:5173 in your browser.

### Build for Production

```bash
npm run build
```

The output goes to the `dist/` folder. Preview it locally with:

```bash
npm run preview
```

---

## Deployment

This project is deployed on **Netlify** with automatic deployments on every
push to `main`.

The `public/_redirects` file and `netlify.toml` are both configured to handle SPA
routing correctly — all routes redirect to `index.html` and let React Router
take over:

```
/* /index.html 200
```

To deploy your own instance:
1. Fork this repo
2. Log in to https://netlify.com
3. Click **Add new site -> Import from GitHub**
4. Select this repo
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click **Deploy**

---

## Pages & Routes

| Route | Page |
|-----------------------|---------------------------------|
| `/` | Home |
| `/about` | About MSIT |
| `/departments` | All Departments |
| `/departments/cse` | Computer Science & Engineering |
| `/faculty` | Faculty Directory |
| `/admissions` | Admissions |
| `/placements` | Placements & Careers |
| `/notices` | Notices & Circulars |
| `/contact` | Contact Us |
| `*` | 404 Not Found |

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to
discuss
what you would like to change.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add: your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  Built by <a href="https://github.com/JayantOlhyan">Jayant Olhyan</a> · MSIT,
New Delhi
</div>
