'use client';

import { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import { ProductCard, Title } from '@/components/shared';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

type ProductsGroupProps = {
  title: string;
  items: any;
  categoryId: number;
  className?: string;
  listClassName?: string;
};


export let ProductsGroup = ({
  title, 
  items, 
  categoryId,
  className, 
  listClassName
  }: ProductsGroupProps) => {

  const setCategoryId = useCategoryStore(state => state.setActiveId);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4
  });

  useEffect(() => {     
    if (intersection?.isIntersecting) {
      setCategoryId(categoryId);
      // intersectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }  
  }, [intersection?.isIntersecting, categoryId, title]);

  return (
    <section className={ cn('', className)} id={title} ref={intersectionRef}>
      <Title text={title} size='lg' className='mb-5 font-bold' />
      <article className={ cn('grid grid-cols-3 gap-7', listClassName) }>
        {items.map((product: any) => (
          <ProductCard 
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.items[0].price}
            imageUrl={product.image_url} 
          />
      ))}
      </article>
    </section>
  );
};