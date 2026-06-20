// vite.config.js -- raiz del proyecto TuAsesor
// Motivo: configuracion de Vite para deploy en GitHub Pages via
//   subdominio propio (tuasesor.eventosytech.com), repo y deploy
//   independientes del repo iVent. base: '/' es correcto porque
//   se usa dominio custom (CNAME), no el subpath de github.io.
// Timestamp: 2026-06-20, hrs

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
})