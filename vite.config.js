// vite.config.js -- raiz del proyecto Agenx
// Motivo: configuracion de Vite para deploy en GitHub Pages via
//   subdominio propio (agenx.eventosytech.com), repo y deploy
//   independientes del repo iVent.
// Timestamp: 2026-06-19, 18:45 hrs
 
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
export default defineConfig({
  plugins: [react()],
  base: '/',
})