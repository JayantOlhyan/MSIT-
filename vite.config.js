import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: 'https://msit-website.netlify.app',
      dynamicRoutes: [
        '/',
        '/search',
        '/faculty',
        '/admin',
        '/privacy',
        '/terms',
        '/500',
        '/vision-mission',
        '/history',
        '/about',
        '/administration',
        '/govern',
        '/fromdesk',
        '/facilities',
        '/smes',
        '/contact',
        '/cse',
        '/it',
        '/ece',
        '/eee',
        '/applied-sciences',
        '/academic-calendar',
        '/timetable',
        '/research',
        '/brochure',
        '/online-fee',
        '/scholarships',
        '/mandatory-disclosures',
        '/society',
        '/events',
        '/antiragging',
        '/posh',
        '/disaster',
        '/discipline',
        '/placements',
        '/internship-cell',
        '/student-portal',
        '/alumni-network',
        '/society-ieee'
      ]
    })
  ],
  base: '/',
  build: {
    sourcemap: true,
  },
})



