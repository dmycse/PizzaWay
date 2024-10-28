'use client';

import { Title, RangeSlider, FilterCheckboxGroup } from '@/components/shared';
import { Button, Input } from '@/components/ui';
import { pizzaSizes, pizzaTypes, prices } from '@/prisma/constants';
import { useIngredients, useFilters, useQueryFilters } from '@/hooks';
import { cn } from '@/lib/utils';

type FiltersProps = {
    className?: string
};

/**
 * Component: Side panel with filters for products search
 * 
 * Parent component: Home app/(main)/page.tsx
 * @param className - css styles
 */

export let Filters = ({ className }: FiltersProps) => {

  let ingredients = useIngredients();

  let filter = useFilters();
  
  useQueryFilters(filter);

  let items = ingredients.map((item, index) => ({label: item.name, value: String(index + 1)}));

  let onPriceRangeChange = (prices: number[]) => {
    filter.setPriceRange('priceMin', prices[0]);
    filter.setPriceRange('priceMax', prices[1]);
  };

  let handleFilterClear = () => {
    filter.selectedPizzaSize.size > 0 && filter.clearSelectedPizzaSize();
    filter.selectedPizzaType.size > 0 && filter.clearSelectedPizzaType();
    filter.selectedIngredients.size > 0 && filter.clearSelectedIngredients();
    (filter.priceRange.priceMin || filter.priceRange.priceMax) && filter.clearPriceRange();
  };

  return (
    <aside className={ cn('mt-10', className) }>
      <div className="flex gap-2">
        <Title text='Filters' size='sm' className='mb-5 font-semibold' />
        {(
          filter.selectedPizzaSize.size > 0 || 
          filter.selectedPizzaType.size > 0 || 
          filter.selectedIngredients.size > 0 ||
          filter.priceRange.priceMin || 
          filter.priceRange.priceMax
          ) && (
            <Button variant='link' className='text-gray-700 hover:font-bold' onClick={handleFilterClear}>
              Clear
            </Button>
          )
        }
      </div>
      
      <FilterCheckboxGroup
        className='mb-6' 
        title='Pizza size'
        name='size' 
        items={pizzaSizes}
        selectedItem={filter.selectedPizzaSize}
        onClickCheckbox={filter.setSelectedPizzaSize}
      />

      <FilterCheckboxGroup
        className='mb-6' 
        title='Crust type'
        name='type' 
        items={pizzaTypes}
        selectedItem={filter.selectedPizzaType}
        onClickCheckbox={filter.setSelectedPizzaType}
      />
  
      <section className="mt-5 py-6 pb-7 border-y border-y-neutral-100">
        <p className="mb-3 font-bold text-brand">Price range, &#8364;</p>
        <div className="mb-7 flex gap-3">
          <Input 
            className='focus:border-none'
            type="number" 
            min={prices.priceMin} 
            max={prices.priceMax}
            step={prices.rangeStep} 
            placeholder={String(prices.priceMin)} 
            value={String(filter.priceRange.priceMin)}
            onChange={({target}) => filter.setPriceRange('priceMin', Number(target.value))}
          />
          <Input
            className='focus:border-none' 
            type="number" 
            min={prices.priceMin} 
            max={prices.priceMax}
            step={prices.rangeStep} 
            placeholder={String(prices.priceMax)} 
            value={String(filter.priceRange.priceMax)}
            onChange={({target}) => filter.setPriceRange('priceMax', Number(target.value))}
          />
        </div>
        <RangeSlider 
          min={prices.priceMin} 
          max={prices.priceMax} 
          step={prices.rangeStep} 
          value={[filter.priceRange.priceMin || prices.priceMin, filter.priceRange.priceMax || prices.priceMax]}
          onValueChange={onPriceRangeChange}  
        />
      </section>

      <FilterCheckboxGroup
        className='mt-5' 
        title='Ingredients'
        name='ingredients' 
        items={items}
        loading={ingredients.length < 1}
        selectedItem={filter.selectedIngredients}
        onClickCheckbox={filter.setSelectedIngredients}
      />

    </aside>
  );
};