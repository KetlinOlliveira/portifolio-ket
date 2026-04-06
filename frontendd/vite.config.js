import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Isso força o Vite a usar caminhos relativos
  server: {
    proxy: {
      '/api': {
        target: 'https://portifolio-ket-production.up.railway.app',
        changeOrigin: true,
        secure: true,
      }
    }
  }
})