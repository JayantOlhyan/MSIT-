import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const siteUrl = env.VITE_SITE_URL || 'https://msit-website.netlify.app';

  return {
    plugins: [
      react(),
      tailwindcss(),
      sitemap({
        hostname: siteUrl,
        changefreq: {
          '/': 'weekly',
          '/placements': 'weekly',
          '/cse': 'monthly',
          '/it': 'monthly',
          '/ece': 'monthly',
          '/eee': 'monthly',
          '/applied-sciences': 'monthly',
          '*': 'monthly'
        },
        priority: {
          '/': 1.0,
          '/placements': 0.8,
          '/cse': 0.8,
          '/it': 0.8,
          '/ece': 0.8,
          '/eee': 0.8,
          '/applied-sciences': 0.8,
          '*': 0.6
        },
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
          '/society-ieee',
          '/team',
          '/virtual-tour'
        ]
      })
    ],
    base: '/',
    build: {
      sourcemap: true,
    },
  }
})



