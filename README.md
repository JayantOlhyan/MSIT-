<div align="center">
  <img src="public/msit-logo.png" alt="MSIT Logo" width="120" />

  # MSIT — Maharaja Surajmal Institute of Technology
  
  **A modern React 18 + Vite redesign of the MSIT platform.**
  *Project developed as a high-performance SPA portfolio showcase.*

  [![Live Site](https://img.shields.io/badge/Live%20Site-msit--website.netlify.app-1B5E3B?style=for-the-badge&logo=netlify&logoColor=white)](https://msit-website.netlify.app/)
  [![React](https://img.shields.io/badge/React-18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
  [![Vite](https://img.shields.io/badge/Vite-5-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

</div>

---

## 📖 Overview

This repository contains a comprehensive redesign of the Maharaja Surajmal Institute of Technology (MSIT) website. The goal of this project was to demonstrate modern full-stack web development practices by transforming a traditional institutional website into a fast, accessible, and maintainable Single Page Application (SPA).

> [!NOTE]
> This is a **student portfolio project** and is not the official website of the institution. The official website can be found at [msit.in](http://www.msit.in).

## 🚀 Key Features

- **Architectural Excellence** — Powered by a modular "Dynamic Page Engine" where 30+ subpages are rendered from a single, optimized template.
- **Performance Optimized** — Built with Vite 5 for instant HMR and high-efficiency production bundles.
- **Premium UI** — Modern aesthetic utilizing Tailwind CSS 3, featuring glassmorphism accents, smooth parallax effects, and micro-interactions.
- **Developer Hygiene** — Modularized data structures, centralized SEO management, and robust Netlify deployment configuration.
- **Responsive Design** — Fully fluid layouts optimized for everything from ultra-wide 4K displays to small-screen mobile devices.

---

## 🛠 Tech Stack

| Layer | Technology |
|-----------------------|---------------------------------|
| **Framework** | React 18 |
| **Build Tool** | Vite 5 |
| **Styling** | Tailwind CSS 3 |
| **Routing** | React Router v6 |
| **Icons** | Lucide React |
| **Deployment** | Netlify |

---

## 📂 Project Structure

```
MSIT-/
├── public/                 ← Static assets & Netlify config
├── src/
│   ├── components/         ← Reusable UI components
│   ├── data/
│   │   ├── pages/          ← Modularized domain data
│   │   └── pagesData.js    ← Central data aggregator
│   ├── pages/              ← Primary route views
│   ├── App.jsx             ← Routing & App logic
│   └── main.jsx            ← Entry point
├── netlify.toml            ← Deployment & Security configuration
├── LICENSE                 ← MIT License
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JayantOlhyan/MSIT-.git
   cd MSIT-
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup environment variables:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🚢 Deployment

Deployed via **Netlify** with a focus on security and SPA reliability.

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Security**: Includes custom headers in `netlify.toml` for CSP, XSS protection, and HSTS.

---

## 🤝 Contributing

Contributions are welcome. For major changes, please open an issue first to discuss your proposed improvements.

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/your-feature`)
3. Commit your changes (`git commit -m "feat: add your-feature"`)
4. Push to the branch (`git push origin feat/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

<div align="center">
  Developed by <a href="https://github.com/JayantOlhyan">Jayant Olhyan</a>
</div>
