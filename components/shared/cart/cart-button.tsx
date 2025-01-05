'use client';

import { useCartStore } from '@/store/cart-store';
import { useShallow } from 'zustand/react/shallow'
import { Button } from '@/components/ui';
import { CartDrawer } from '@/components/shared';
import { ArrowRight, ShoppingBasket } from 'lucide-react';
import { cn } from '@/lib';

type CartButtonProps = {
  className?: string;
};

/**
 * CartButton - this component (button) displays the total amount and number of items in the cart, 
 * and opens the cart drawer when clicked.
 * 
 * Parent: Header -> /components/layout/header.tsx
 */
export const CartButton = ( { className }: CartButtonProps) => {
  
  const [totalAmount, items, loading] = useCartStore(useShallow(state => [
    state.totalAmount,
    state.items,
    state.loading,
  ]));

  return (
    <CartDrawer>
      <Button 
        variant='custom'
        loading={loading} 
        className={cn('group relative', { 'w-[105px]': loading }, className)}
      >
        <b>&euro; {totalAmount}</b>
        <span className='mx-3 w-[1px] h-full bg-white/30' />
        <div className='flex items-center gap-2 transition duration-300 group-hover:opacity-0'>
          <ShoppingBasket strokeWidth={2} size={18} className='relative' />
          <b>{items?.length}</b>
        </div>
        <ArrowRight 
          size={20} 
          className='absolute right-5 -translate-x-2 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:translate-x-0' 
        />
      </Button>
    </CartDrawer>
  );
};

          