import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/jobinja-clone-react/',
  plugins: [react()],
})
