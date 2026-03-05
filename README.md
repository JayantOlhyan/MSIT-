<div align="center">
  <img src="public/msit-logo.png" alt="MSIT Logo" width="120" />
  <h1>Maharaja Surajmal Institute of Technology</h1>
  <p><strong>Official Website Modernization Project</strong></p>

  <p>
    A premium, high-performance, and fully dynamic frontend architecture built for MSIT. 
    Redesigned to offer a world-class digital experience comparable to global top-tier universities.
  </p>

  <div>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
  </div>
</div>

---

## 🌟 Overview

The MSIT Website project is a comprehensive overhaul of the official [Maharaja Surajmal Institute of Technology (MSIT)](https://www.msit.in) website. This modern iteration transitions the platform from a static, legacy structure into a lightning-fast Single Page Application (SPA), emphasizing **aesthetics, performance, and scalability**.

## ✨ Key Features

- **Dynamic Page Generation Engine**: A highly scalable `pagesData.js` dictionary driving a unified `DynamicPage.jsx` template, rendering 30+ sophisticated subpages instantly without code duplication.
- **Premium UI / UX**: Employs a modern aesthetic inspired by industry-leading tech companies—featuring parallax scrolling, glassmorphism, responsive typography, and micro-animations.
- **Lightning-Fast Routing**: Powered by `react-router-dom`, achieving instant transitions across departments, admissions pages, and campus life sections.
- **Fully Responsive Navigation**: A sophisticated Desktop Mega-Menu and a mobile-optimized slide-out panel ensure seamless navigation across 50+ internal domains.
- **Advanced State Management**: Custom React hooks handling scroll-awareness, active dropdown states, and global modal overlays (e.g., universal search, video lightboxes).

## 🚀 Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/) - For extremely fast HMR and optimized production bundling.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid and precise styling.
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful, consistent, and customizable vector icons.
- **Routing**: [React Router v6](https://reactrouter.com/) - Declarative routing for React applications.
- **Deployment**: [Netlify](https://www.netlify.com/) - High-performance edge network for SPA delivery.

## 📁 Project Structure

\`\`\`text
src/
├── components/          # Reusable UI components
│   ├── Header.jsx       # Global Navigation & Mega Menu
│   ├── Footer.jsx       # Global Footer with dynamic internal links
│   └── Layout.jsx       # App shell wrapper managing Route rendering
├── pages/               # Route Components
│   ├── Home.jsx         # Main Landing Page (Parallax Hero, Quick Links, Events)
│   ├── About.jsx        # Original About Page Implementation
│   ├── CSEDepartment.jsx# Original CSE Department Implementation
│   └── DynamicPage.jsx  # Universal Template rendering the 30+ subpages
├── data/                # Data dictionaries
│   └── pagesData.js     # Single source of truth for all dynamic subpage content
├── App.jsx              # Central Router configuration
├── index.css            # Global Tailwind directives & custom CSS animations
└── main.jsx             # React DOM entry point
\`\`\`

## 🛠️ Local Development

To run this project locally, follow these steps:

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/JayantOlhyan/MSIT-.git
   cd "msit website"
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser:**
   Navigate to \`http://localhost:5173\` to view the application.

## 📦 Deployment

This project is fully configured for seamless deployment to **Netlify** or **Vercel**. 

Because this application uses \`react-router-dom\` for client-side routing, a \`public/_redirects\` file with the rule \`/* /index.html 200\` is already included to ensure deep linking works safely on Netlify without 404 errors.

**To deploy automatically:**
1. Push this repository to GitHub.
2. Link the repository directly to Netlify.
3. Use the default build command (\`npm run build\`) and publish directory (\`dist\`).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/JayantOlhyan/MSIT-/issues).

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
