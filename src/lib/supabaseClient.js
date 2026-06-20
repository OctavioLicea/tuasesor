// src/lib/supabaseClient.js
// Motivo: inicializacion del cliente de Supabase con db.schema = 'agenx'
//   (paso manual pendiente #2 de la sesion 1 -- ya resuelto en codigo)
// Timestamp: 2026-06-19, 17:05 hrs
 
import { createClient } from '@supabase/supabase-js'
 
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
 
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  db: { schema: 'agenx' },
})