'use client';

import { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import { ProductCard, Title } from '@/components/shared';
import { Product } from '@prisma/client';
import { useCategoryStore } from '@/store/category';
import { cn } from '@/lib/utils';

type ProductsGroupProps = {
  categoryId: number;
  categoryName: string;
  products: Product[];
  className?: string;
  listClassName?: string;
};

/**
 * Component: displays a group of product's cards.
 *
 * Parent component: Home -> /app/(main)/page.tsx
 * @param {Object} props
 * @prop {string} categoryName - the name of the category.
 * @prop {number} categoryId - the id of the category.
 * @prop {Product[]} products - the list of products.
 * @prop {string} [className] - additional CSS styles to apply to the component.
 * @prop {string} [listClassName] - additional CSS styles to apply to the list of products.
 *
 * @returns {JSX.Element} The products group component.
 */
export let ProductsGroup = ({
  categoryName, 
  categoryId,
  products, 
  className, 
  listClassName
  }: ProductsGroupProps) => {

  let setActiveCategory = useCategoryStore(state => state.setActiveCategory);
  let activeCategoryId = useCategoryStore(state => state.activeCategoryId);
  let intersectionRef = useRef(null);
  let intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  
  useEffect(() => {     
    if (intersection?.isIntersecting) {
      setActiveCategory(categoryId);
    }  
  }, [intersection?.isIntersecting, categoryId, categoryName]);

  return (
    <section id={categoryName} className={ cn('', className)} ref={intersectionRef}>
      {/* {activeCategoryId === categoryId && <div className='h-[50px] w-full'></div>} */}
      <Title text={categoryName} size='lg' className='mb-5 font-bold' />
      <article className={ cn('grid grid-cols-3 gap-7', listClassName) }>
        {
          products.map((product: any) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.options[0].price}
              imageUrl={product.imageUrl} 
            />
          ))
        }
      </article>
    </section>
  );
};