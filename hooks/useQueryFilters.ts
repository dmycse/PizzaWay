import { useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { Filters, PriceRange } from '@/hooks/useFilters';
import qs from 'qs';

export const useQueryFilters = ({
    selectedIngredients, 
    selectedPizzaSize, 
    selectedPizzaCrust, 
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
        pizzaCrust: Array.from(selectedPizzaCrust),
        ingredients: Array.from(selectedIngredients)?.sort(),
        ...priceRangeSort(priceRange),
      };

      let query = qs.stringify(params, {
        arrayFormat: 'comma',
      });
      console.log('useQueryFilters query', query);
      router.push(`?${query}`, {
        scroll: false,
      });

      console.log('useQueryFilters Params', params);
    }

    isMounted.current = true;

    }, 
    [
      selectedIngredients, 
      selectedPizzaSize, 
      selectedPizzaCrust, 
      priceRange
    ]
  );

};