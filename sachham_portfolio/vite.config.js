import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/your-repo-name/', // Change 'your-repo-name' to your GitHub repository name
  build: {
    outDir: 'build', // Change 'dist' to the desired build output directory
  },
  plugins: [react()],
})
