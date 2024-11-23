'use client';

import { Button } from '@/components/ui';
import { ArrowRight, ShoppingBasket } from 'lucide-react';
// import { cn } from '@/lib';
import { CartDrawer } from '@/components/shared';

type CartButtonProps = {
  className?: string;
};

/**
 * CartButton - this component (button) displays the total amount and number of items in the cart, 
 * and opens the cart drawer when clicked.
 * 
 * Parent: Header -> /components/layout/header.tsx
 * @param {CartButtonProps} props
 * @prop  {string} [className] - additional CSS styles to apply to the button
 *
 * @returns {JSX.Element} The cart button component.
 */
export const CartButton = ( { className }: CartButtonProps) => {
  
  // const [totalAmount, items, loading] = useCartStore((state) => [
  //   state.totalAmount,
  //   state.items,
  //   state.loading,
  // ]);

  return (
    // <CartDrawer>
    //   <Button
    //     loading={loading}
    //     className={cn('group relative', { 'w-[105px]': loading }, className)}>
    //     <b>{totalAmount} ₽</b>
    //     <span className="h-full w-[1px] bg-white/30 mx-3" />
    //     <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
    //       <ShoppingCart size={16} className="relative" strokeWidth={2} />
    //       <b>{items.length}</b>
    //     </div>
    //     <ArrowRight
    //       size={20}
    //       className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
    //     />
    //   </Button>
    // </CartDrawer>
    <CartDrawer>
      <Button variant='custom' className='group relative'>
        <b>&euro; 100</b>
        <span className='mx-3 w-[1px] h-full bg-white/30' />
        <div className='flex items-center gap-2 transition duration-300 group-hover:opacity-0'>
          <ShoppingBasket strokeWidth={2} size={18} className='relative' />
          <b>3</b>
        </div>
        <ArrowRight 
          size={20} 
          className='absolute right-5 -translate-x-2 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:translate-x-0' 
        />
      </Button>
    </CartDrawer>

  );
};

          