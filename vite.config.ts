import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/basic-web/', // <--- ADD THIS LINE (Replace 'basic-web' with your exact repo name)
})