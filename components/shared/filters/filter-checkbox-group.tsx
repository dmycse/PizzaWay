'use client';

import { ChangeEventHandler, useState } from 'react';
import { Button, Input, Skeleton } from '@/components/ui';
import { FilterCheckboxProps, FilterCheckbox } from '@/components/shared/filters/filter-checkbox';
import { cn } from '@/lib/utils';

type Checkbox = FilterCheckboxProps;
type FilterCheckboxGroupProps = {
  title: string;
  name?: string;
  checkboxes: Checkbox[];
  limitCheckboxes?: number;
  searchInputPlaceholder?: string;
  loading?: boolean;
  selectedCheckboxes?: Set<string>;
  onClickCheckbox?: (id: string) => void;
  className?: string;
};


/**
 * Component: renders a list of checkboxes for a given filter.
 * 
 * Parent component: Filters -> /components/shared/filters/filters.tsx
 * @param {FilterCheckboxGroupProps} props
 * @prop {string} title - the title of the filter group.
 * @prop {string} name - the name attribute for grouping checkboxes.
 * @prop {Checkbox[]} checkboxes - an array of checkboxes to render.
 * @prop {number} [limitCheckboxes] - the maximum number of checkboxes to the first render.
 * @prop {string} [searchInputPlaceholder] - the placeholder text for the search input.
 * @prop {boolean} [loading] - whether the component should render a loading state.
 * @prop {Set<string>} [selectedCheckboxes] - the checkboxes had been selected when the component is mounted.
 * @prop {Function} [onClickCheckbox] - the callback function when a checkbox is clicked.
 * @prop {string} [className] - additional CSS styles to apply to the component.
 *
 * @returns {JSX.Element} The rendered filter group.
 * @example
 * <FilterCheckboxGroup
 *   title="Pizza Size"
 *   name="size"
 *   checkboxes={[
 *     { label: 'Small', value: 'small' },
 *     { label: 'Medium', value: 'medium' },
 *     { label: 'Large', value: 'large' },
 *   ]}
 * />
 */
export const FilterCheckboxGroup = ({
    title, 
    name, 
    checkboxes,
    limitCheckboxes = 5, 
    searchInputPlaceholder = 'Search...', 
    loading,
    selectedCheckboxes, 
    onClickCheckbox,  
    className
  }: FilterCheckboxGroupProps) => {

    const [showAll, setShowAll] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const checkboxesToShow = showAll 
      ? checkboxes.filter(checkbox => checkbox.label.toLowerCase().includes(searchValue.trim().toLowerCase())) 
      : checkboxes?.slice(0, limitCheckboxes);
    
    const onSearchChange: ChangeEventHandler<HTMLInputElement> = ({target}) => {
      setSearchValue(target.value);
    };

    if (loading) {
      return (
        <section className={ cn('', className) }>
          <p className="mb-3 font-bold">{ title }</p>
          {
            Array(limitCheckboxes).fill(0).map((_, index) => (
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
          checkboxesToShow.map(checkbox => (
            <FilterCheckbox
              key={checkbox.value}
              {...checkbox}
              name={name}
              checked={selectedCheckboxes?.has(checkbox.value)}
              onCheckedChange={() => onClickCheckbox?.(checkbox.value)}
              // endAdornment={checkbox.endAdornment}
            />
          ))
        } 
      </div>

      {
        checkboxes.length > limitCheckboxes && (
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