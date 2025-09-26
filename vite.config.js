import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: process.env.PORT || 4173,      // Render ke liye dynamic PORT
    host: true,                           // 0.0.0.0 pe bind kare
    allowedHosts: ['portfolio-web-3-tgt3.onrender.com']  // Render host allow
  }
})
