import type { InventoryItem } from '../lib/supabase';

export type InitialData = {
  productsByType?: Record<string, InventoryItem[]>;
};
