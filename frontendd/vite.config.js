import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Isso resolve o problema de CORS no desenvolvimento!
      // Toda chamada para /api vai ser redirecionada ao seu backend Java
      '/api': {
        target: 'https://portifolio-ket-production.up.railway.app',
        changeOrigin: true,
        secure: true,
      }
    }
  }
})
