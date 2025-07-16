import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface InventoryItem {
  product_name: string;
  product_type: string;
  product_category: string;
  product_company: string;
  image_urls: string[];
  product_description: Record<string, any>;
  product_features: string[];
  product_specifications: Record<string, any>;
  product_accessories: string[];
}