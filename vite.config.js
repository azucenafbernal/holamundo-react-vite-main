import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages publica el sitio en https://<usuario>.github.io/<repositorio>/
  // por eso los recursos se sirven desde ese subdirectorio.
  base: '/holamundo-react-vite-main/',
})
