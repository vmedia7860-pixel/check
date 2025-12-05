import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Base path for assets when deploying to GitHub Pages project site
  // Change to '/<repo-name>/' — here it's '/check/'
  base: '/check/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
