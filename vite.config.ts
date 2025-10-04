import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSitemap  from 'vite-plugin-sitemap'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginSitemap({
      hostname: 'https://sni-cg.com',
      readable: true,
      exclude: ['/admin', '/private'],
    }),
  ],
})
