'use client';

import { MouseEventHandler, useRef, useState } from 'react';
import Link from 'next/link';
import {useClickAway, useDebounce} from 'react-use';

import { Product } from '@prisma/client';
import { searchProducts } from '@/utils/products';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';


type SearchInputProps = {
  className?: string;
};

/**
 * Componrent: a search input component which shows a dropdown of products
 * when the user types in the search field and focuses the input.
 * 
 * Parent component: Header app/components/layout/header.tsx
 * 
 */
export const SearchInput = ({ className }: SearchInputProps) => {

  const searchRef = useRef(null);

  const [inputFocused, setInputFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);

  // close dropdown when user clicks outside
  useClickAway(searchRef, () => {
    setInputFocused(false);
    setSearchQuery('');
  });

  // reduce amounts of api requests
  useDebounce(
    async () => {
      try {
        const response = await searchProducts(searchQuery)
        setProducts(response);
      } catch (error) {
          console.log(error)
      }
    }, 
    300, 
    [searchQuery]
  );

  const onClickHandler: MouseEventHandler<HTMLAnchorElement> = () => {
    setInputFocused(false);
    setSearchQuery('');
    setProducts([]);
  };


  return (
    <>
      {inputFocused && <div className='fixed top-0 bottom-0 left-0 right-0 z-30 bg-black/60' /> }

      <div 
        ref={searchRef}
        className={ cn('h-10 flex justify-between relative z-30', className) }
      >
        <Search className="h-5 absolute top-1/2 left-3 translate-y-[-50%] text-gray-400" />
        <input
          type="text" 
          className="px-10 py-2 w-full border border-gray-200 rounded-md text-md text-gray-900 bg-gray-50 focus:bg-white focus:ring-primary outline-none" 
          placeholder="Search..."
          value={searchQuery}
          onFocus={() => setInputFocused(true)}
          onChange={({target}) => setSearchQuery(target.value)}

        />

        {products.length > 0 &&
          <div
            className={cn('py-2 px-3 w-full absolute top-14 bg-white rounded-md shadow-md transition-all duration-700 invisible opacity-0 z-30',
                          inputFocused && 'visible opacity-100 top-12')}
          >
            {products.map(product => (
              <Link
                key={product.id}
                className="px-3 py-2 w-full flex items-center gap-3 rounded-md hover:bg-primary/10"
                href={`/products/${product.id}`}
                onClick={onClickHandler}
              >
                <img className="h-8 w-8 rounded-sm" src={product.imageUrl} alt={product.name} />
                <span>{product.name}</span>
              </Link>
              ))
            } 
          </div>
        }

      </div>
    </>
  );
};