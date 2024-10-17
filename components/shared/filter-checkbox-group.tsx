'use client';

import { ChangeEventHandler, useState } from 'react';
import { Button, Input, Skeleton } from '@/components/ui';
import { FilterCheckboxProps, FilterCheckbox } from '@/components/shared/filter-checkbox';
import { cn } from '@/lib/utils';

type Item = FilterCheckboxProps;
type FilterCheckboxGroupProps = {
  title: string;
  items: Item[];
  name?: string;
  // defaultItems?: Item[];
  limitItems?: number;
  searchInputPlaceholder?: string;
  defaultValue?: string[];
  className?: string;
  loading?: boolean;
  selectedItem?: Set<string>;
  onClickCheckbox?: (id: string) => void;
};


export let FilterCheckboxGroup = ({
    title, 
    items,
    name, 
    limitItems = 5, 
    searchInputPlaceholder = 'Search...', 
    defaultValue,
    loading,
    selectedItem, 
    onClickCheckbox,  
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

    if (loading) {
      return (
        <section className={ cn('', className) }>
          <p className="mb-3 font-bold">{ title }</p>
          {
            Array(limitItems).fill(0).map((_, index) => (
              <Skeleton key={index} className="h-6 mb-3 rounded-sm" />
            ))
          }
          <Skeleton className="w-28 h-6 mb-3 rounded-sm" />
        </section>
      )
    }

  return (
    <section className={ cn('', className) }>
      <p className="mb-3 font-bold text-brand">{ title }</p>

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
              name={name}
              checked={selectedItem?.has(item.value)}
              onCheckedChange={() => onClickCheckbox?.(item.value)}
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