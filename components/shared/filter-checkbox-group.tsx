'use client';

import { Button, Input } from '@/components/ui';
import { FilterCheckboxProps, FilterCheckbox } from './filter-checkbox';
import { cn } from '@/lib/utils';
import { ChangeEventHandler, useState } from 'react';

type Item = FilterCheckboxProps;
type FilterCheckboxGroupProps = {
  title: string;
  items: Item[];
  // defaultItems?: Item[];
  limitItems?: number;
  searchInputPlaceholder?: string;
  defaultValue?: string[];
  className?: string;
  onChange?: (value: string[]) => void;
};


export let FilterCheckboxGroup = ({
    title, 
    items, 
    // defaultItems, 
    limitItems = 6, 
    searchInputPlaceholder = 'Search...', 
    defaultValue, 
    onChange,  
    className
  }: FilterCheckboxGroupProps) => {

    let [showAll, setShowAll] = useState(false);
    let [searchValue, setSearchValue] = useState('');

    let itemsToShow = showAll 
      ? items.filter(item => item.label.toLowerCase().includes(searchValue.toLowerCase())) 
      : items?.slice(0, limitItems);

    let onSearchChange: ChangeEventHandler<HTMLInputElement> = ({target}) => {
      setSearchValue(target.value);
    };

  return (
    <section className={ cn('', className) }>
      <p className="mb-3 font-bold">{ title }</p>

      {
        showAll && (
          <div className="mb-5">
            <Input 
              className='border-none bg-gray-50' 
              placeholder={searchInputPlaceholder} 
              onChange={onSearchChange}
            />
          </div>
        )
      }

      <div className="pr-2 max-h-96 flex flex-col gap-4 overflow-y-auto scrollbar">
        {
          itemsToShow.map(item => (
            <FilterCheckbox
              key={item.value}
              {...item}
              checked={false}
              onCheckedChange={ids => console.log(ids)}
              // text={item.text}
              // value={item.value}
              // endAdornment={item.endAdornment}
            />
          ))
        } 
      </div>

      {
        items.length > limitItems && (
          <div className="mt-5 border-t border-neutral-100">
            <Button variant='outline' className='mt-3' onClick={() => setShowAll(!showAll)}>
              { showAll ? 'Show less' : 'Show all' }
            </Button>
          </div>
        )
      }

    </section>
  );
};