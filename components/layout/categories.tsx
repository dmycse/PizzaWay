'use client';

import Link from 'next/link';
import { Button } from '../ui';
import { useCategoryStore } from '@/store/category';
import { Category } from '@prisma/client';
import { cn } from '@/lib/utils';

type CategoriesProps = {
  categories: Category[],
  className?: string
};


export let Categories = ({ categories, className}: CategoriesProps) => {

  let activeCategoryId = useCategoryStore(state => state.activeCategoryId);
  
  return (
    <div className={ cn('inline-flex gap-2', className) }>
      {
        categories.map(({id, name}, index) => (
          <Button variant='outline' key={index} asChild className={cn('px-5 h-11 text-gray-500 shadow-md shadow-dray-200 rounded-md border-none hover:bg-white hover:text-primary',
            activeCategoryId === id && 'bg-white text-primary' 
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