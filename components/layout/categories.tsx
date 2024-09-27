import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '../ui';
import { categories } from '@/data';

type Props = {
    className?: string
};

const activeIndex = 0;


export let Categories = ({className}: Props) => {

  return (
    <div className={ cn('inline-flex gap-2', className) }>
      {
        categories.map((category, index) => (
          <Button variant='outline' key={category} asChild className={cn('px-5 h-11 text-gray-500 shadow-md shadow-dray-200 rounded-md border-none hover:bg-white hover:text-primary',
            activeIndex === index && 'bg-white text-primary' 
          )}>
            <Link href={`/categories/${category.toLowerCase()}`}>
              {category}
            </Link>
          </Button>
        ))
      }
    </div>
  );
};