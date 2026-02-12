import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || '';

let cachedClient = null;

export const getServerSupabase = () => {
  if (cachedClient) {
    return cachedClient;
  }

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn(
      'Supabase server client not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.'
    );
    return null;
  }

  cachedClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });

  return cachedClient;
};
