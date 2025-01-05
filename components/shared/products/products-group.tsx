'use client';

import { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import { useCategoryStore } from '@/store/category';
import { ProductCard, Title } from '@/components/shared';
import { ProductWithRelations } from '@/prisma/prisma-types';
import { cn } from '@/lib/utils';

type ProductsGroupProps = {
  categoryId: number;
  categoryName: string;
  items: ProductWithRelations[];
  className?: string;
  listClassName?: string;
};

/**
 * Component: displays a group of product's cards.
 *
 * Parent component: Home -> /app/(main)/page.tsx
 */
export const ProductsGroup = ({
  categoryId,
  categoryName, 
  items, 
  className, 
  listClassName
  }: ProductsGroupProps) => {
  
  const setActiveCategory = useCategoryStore(state => state.setActiveCategory);
 
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  
  useEffect(() => {     
    if (intersection?.isIntersecting) {
      setActiveCategory(categoryId);
    }  
  }, [intersection?.isIntersecting, categoryId, categoryName]);

  return (
    <section id={categoryName} className={ cn('', className)} ref={intersectionRef}>
      <Title text={categoryName} size='lg' className='mb-5 font-bold' />
      <article className={ cn('grid grid-cols-3 gap-10', listClassName) }>
        {
          items.map(product => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.options[0].price}
              imageUrl={product.imageUrl}
              ingredients={product.ingredients} 
            />
          ))
        }
      </article>
    </section>
  );
};