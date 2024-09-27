
import { cn } from '@/lib/utils';
import { ProductCard, Title } from '@/components/shared';

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

  return (
    <div className={ cn('', className) }>
      <Title text={title} size='lg' className='mb-5 font-bold' />
      <div className={ cn('grid grid-cols-3 gap-5', listClassName) }>
        {items.map((product: any) => (
          <ProductCard 
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.items[0].price}
            imageUrl={product.image_url} 
          />
      ))}
      </div>
    </div>
  );
};