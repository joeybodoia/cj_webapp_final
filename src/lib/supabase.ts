import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type JsonRecord = Record<string, any>;

export interface InventoryItem {
  product_name: string;
  product_type: string;
  product_category: string;
  product_company: string;

  // jsonb in Supabase: { "image 1": "...", "image 2": "..." }
  image_urls: Record<string, string> | null;

  // jsonb object in your table
  product_description: JsonRecord | null;

  // Based on your earlier schema + usage patterns, these are typically arrays of JSON objects.
  // If yours are actually strings, you can narrow later.
  product_features: JsonRecord[] | null;

  // Your ProductCard code treats this as an array (find(...)), so type it as an array
  product_specifications: JsonRecord[] | null;

  product_accessories: JsonRecord[] | null;
}

