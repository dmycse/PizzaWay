import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSet } from 'react-use';

export type PriceRange = {
  priceMin?: number;
  priceMax?: number;
};

export type Filters = {
  selectedIngredients: Set<string>;
  selectedPizzaSize: Set<string>;
  selectedPizzaType: Set<string>;
  priceRange: PriceRange; 
};

type UseFilters = Filters & { 
  setSelectedIngredients: (value: string) => void;
  setSelectedPizzaSize: (value: string) => void;
  setSelectedPizzaType: (value: string) => void;
  setPriceRange: (name: keyof PriceRange, value: number) => void;

  clearSelectedIngredients: () => void;
  clearSelectedPizzaSize: () => void;
  clearSelectedPizzaType: () => void;
  clearPriceRange: () => void; 
};

/**
 * Hook: handling filters in url search params
 * 
 * Used in: Filters -> components/shared/filters/filters.tsx
 */
export let useFilters = (): UseFilters => {
  let searchParams = useSearchParams();
  
  // store selected pizza size
  let [selectedPizzaSize, { toggle: setSelectedPizzaSize, clear: clearSelectedPizzaSize }] = useSet(
    new Set<string>(searchParams.has('pizzaSize') ? searchParams.get('pizzaSize')?.split(',') : [])
  );
  // store selected pizza crust type
  let [selectedPizzaType, { toggle: setSelectedPizzaType, clear: clearSelectedPizzaType }] = useSet(
    new Set<string>(searchParams.has('pizzaType') ? searchParams.get('pizzaType')?.split(',') : [])
  );
  // store selected ingredients
  let [selectedIngredients, { toggle: setSelectedIngredients, clear: clearSelectedIngredients }] = useSet(
    new Set<string>(searchParams.has('ingredients') ? searchParams.get('ingredients')?.split(',') : [])
  );
  
  let [priceRange, setPriceRange] = useState<PriceRange>(
    {
      priceMin: Number(searchParams.get('priceMin')) || undefined, 
      priceMax: Number(searchParams.get('priceMax')) || undefined
    }
  );

  let handlePriceRangeChange = (name: keyof PriceRange, value: number) => {
    setPriceRange(prev => ({...prev, [name]: value}));
  };

  let handlePriceRangeClear = () => {
    setPriceRange({priceMin: undefined, priceMax: undefined});
  };

  return useMemo(() => ({
    selectedIngredients,
    selectedPizzaSize,
    selectedPizzaType,
    priceRange,

    setSelectedPizzaSize,
    setSelectedPizzaType,
    setSelectedIngredients,
    setPriceRange: handlePriceRangeChange,

    clearSelectedPizzaSize,
    clearSelectedPizzaType,
    clearSelectedIngredients,
    clearPriceRange: handlePriceRangeClear  
    }), 
    [
      selectedIngredients,
      selectedPizzaSize,
      selectedPizzaType,
      priceRange
    ]);

};