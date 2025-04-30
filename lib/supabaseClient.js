// lib/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// Ambil URL dan API Key dari file .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Membuat instansiasi Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
