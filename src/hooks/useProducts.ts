import { useState, useEffect } from 'react';
import { supabase, InventoryItem } from '../lib/supabase';

export const useProducts = (productType?: string) => {
  const [products, setProducts] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let query = supabase.from('inventory').select('*');
        
        if (productType) {
          query = query.eq('product_type', productType);
        }
        
        const { data, error } = await query;
        
        if (error) {
          throw error;
        }
        
        setProducts(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [productType]);

  return { products, loading, error };
};