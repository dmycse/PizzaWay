'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '../ui';
import { categories } from '@/data';
import { useCategoryStore } from '@/store/category';

type Props = {
    className?: string
};

const activeIndex = 0;


export let Categories = ({className}: Props) => {

  let categoryActiveId = useCategoryStore(state => state.activeId);

  return (
    <div className={ cn('inline-flex gap-2', className) }>
      {
        categories.map(({id, name}) => (
          <Button variant='outline' key={id} asChild className={cn('px-5 h-11 text-gray-500 shadow-md shadow-dray-200 rounded-md border-none hover:bg-white hover:text-primary',
            categoryActiveId === id && 'bg-white text-primary' 
          )}>
            <Link href={`/#${name}`}>
              {name}
            </Link>
          </Button>
        ))
      }
    </div>
  );
};