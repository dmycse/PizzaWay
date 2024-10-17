'use client';

import { useEffect, useState } from 'react';
import { Title, RangeSlider, FilterCheckboxGroup } from '@/components/shared';
import { Input } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';
import { pizzaSizes, pizzaCrust } from '@/prisma/constants';

type FiltersProps = {
    className?: string
};

type PriceRangeProps = {
  priceMin: number;
  priceMax: number;
};


export let Filters = ({className}: FiltersProps) => {

  let {
    ingredients, 
    selectedIngredients,
    selectedPizzaSize,
    selectedPizzaCrust,
    setSelectedIngredient,
    setSelectedPizzaSize,
    setSelectedPizzaCrust
  } = useFilterIngredients();
  
  let [priceRange, setPriceRange] = useState<PriceRangeProps>({priceMin: 0, priceMax: 50});

  let items = ingredients.map((item, index) => ({label: item.name, value: String(index + 1)}));

  let onPriceRangeChange = (name: keyof PriceRangeProps, value: number) => {
    setPriceRange({
      ...priceRange,
      [name]: value
    });
  };

  useEffect(() => {
    console.log({priceRange, selectedIngredients, selectedPizzaSize, selectedPizzaCrust})
  }, [priceRange, selectedIngredients, selectedPizzaSize, selectedPizzaCrust]);

  return (
    <aside className={ cn('mt-10', className) }>
      <Title text='Filters' size='sm' className='mb-5 font-bold' />
      
      <FilterCheckboxGroup
        className='mb-6' 
        title='Size'
        name='size' 
        items={pizzaSizes}
        selectedItem={selectedPizzaSize}
        onClickCheckbox={setSelectedPizzaSize}
      />

      <FilterCheckboxGroup
        className='mb-6' 
        title='Crust'
        name='crust' 
        items={pizzaCrust}
        selectedItem={selectedPizzaCrust}
        onClickCheckbox={setSelectedPizzaCrust}
      />
  
      <section className="mt-5 py-6 pb-7 border-y border-y-neutral-100">
        <p className="mb-3 font-bold text-brand">Price from and to</p>
        <div className="mb-7 flex gap-3">
          <Input 
            className='focus:border-none'
            type="number" 
            min={5} 
            max={50}
            step={5} 
            placeholder='5' 
            value={String(priceRange.priceMin)}
            onChange={({target}) => onPriceRangeChange('priceMin', Number(target.value))}
          />
          <Input
            className='focus:border-none' 
            type="number" 
            min={5} 
            max={50}
            step={5} 
            placeholder='50' 
            value={String(priceRange.priceMax)}
            onChange={({target}) => onPriceRangeChange('priceMax', Number(target.value))}
          />
        </div>
        <RangeSlider 
          min={0} 
          max={50} 
          step={5} 
          value={[priceRange.priceMin, priceRange.priceMax]}
          onValueChange={([priceMin, priceMax]) => setPriceRange({priceMin, priceMax})}  
        />
      </section>

      <FilterCheckboxGroup
        className='mt-5' 
        title='Ingredients'
        name='ingredients' 
        items={items}
        loading={ingredients.length < 1}
        selectedItem={selectedIngredients}
        onClickCheckbox={setSelectedIngredient}
      />
    </aside>
  );
};