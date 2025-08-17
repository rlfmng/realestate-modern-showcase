import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/realestate-modern-showcase/',
  plugins: [react()],
})
