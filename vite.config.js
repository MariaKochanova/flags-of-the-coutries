import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/flags-of-the-coutries/",
  build: {
    outDir: "docs", // Теперь Vite будет собирать сайт в docs/
  },
})
