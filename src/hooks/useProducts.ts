import { useState, useEffect, useRef } from 'react';
import { supabase, InventoryItem } from '../lib/supabase';
import { useInitialData } from '../lib/initial-data';

type UseProductsOptions = {
  backgroundRefresh?: boolean;
};

export const useProducts = (productType?: string, options?: UseProductsOptions) => {
  const initialData = useInitialData();
  const initialProducts =
    productType && initialData?.productsByType
      ? initialData.productsByType[productType] || null
      : null;

  const [products, setProducts] = useState<InventoryItem[]>(() => initialProducts ?? []);
  const [loading, setLoading] = useState(() => !initialProducts);
  const [error, setError] = useState<string | null>(null);
  const initialUsedRef = useRef<Record<string, boolean>>({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const key = productType || '__all__';
        const hasInitial =
          Boolean(productType) &&
          Boolean(initialData?.productsByType) &&
          Object.prototype.hasOwnProperty.call(initialData!.productsByType!, productType!);

        if (hasInitial && !initialUsedRef.current[key]) {
          const initialProducts = initialData?.productsByType?.[productType!] || [];
          setProducts(initialProducts);
          setLoading(false);
          initialUsedRef.current[key] = true;

          if (options?.backgroundRefresh === false) {
            return;
          }
        } else if (!hasInitial) {
          setLoading(true);
        }

        setError(null);
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
  }, [productType, initialData, options?.backgroundRefresh]);

  return { products, loading, error };
};
