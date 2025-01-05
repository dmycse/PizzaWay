import { useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { Filters, PriceRange } from '@/hooks/useFilters';
import qs from 'qs';

/**
 * Hook: update url query parameters based on the given filters.
 * 
 * Used in: Filters -> components/shared/filters/filters.tsx
 */
export const useQueryFilters = ({
    selectedIngredients, 
    selectedPizzaSize, 
    selectedPizzaType, 
    priceRange
  }: Filters) => {

  let isMounted = useRef(false);
  let router = useRouter();

  useEffect(() => {
    if (isMounted.current) {

      let priceRangeSort = ({ priceMin, priceMax }: PriceRange) => {
        if (priceMin! > priceMax!) {
          return {
            priceMin: priceMax,
            priceMax: priceMin
          };
        } else {
            return {priceMin, priceMax};
        }
      };

      let params = {
        pizzaSize: Array.from(selectedPizzaSize)?.sort(),
        pizzaType: Array.from(selectedPizzaType)?.sort(),
        ingredients: Array.from(selectedIngredients)?.sort(),
        ...priceRangeSort(priceRange),
      };

      let query = qs.stringify(params, {
        arrayFormat: 'comma',
      });
      
      router.push(`?${query}`, {
        scroll: false,
      });

    }

    isMounted.current = true;

    }, 
    [
      selectedIngredients, 
      selectedPizzaSize, 
      selectedPizzaType, 
      priceRange
    ]
  );

};