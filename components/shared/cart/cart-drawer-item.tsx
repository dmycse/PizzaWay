'use client';

import { useState } from 'react';
import { type CartItemProps } from './cart-item.types';
import { CartItemImage, CartItemInfo, CartItemPrice } from '@/components/shared/cart';
import { CountButton } from '@/components/shared';

import { Trash2Icon } from 'lucide-react';
import { cn } from '@/lib';

type CartDrawerItemProps = CartItemProps & {
  onClickCountButton?: (role: 'plus' | 'minus') => void;
  onClickRemove?: () => void;
  className?: string;
};

/**
 * CartDrawerItem: this component is a single item (product) in the cart drawer.
 * 
 * Parent: CartDrawer -> /components/shared/cart/cart-drawer.tsx

 * @example
 * <CartDrawerItem
 *   name="Product 1"
 *   imageUrl="https://example.com/image.jpg"
 *   price={100}
 *   quantity={1}
 *   onClickCountButton={(role) => console.log(role)}
 *   onClickRemove={() => console.log('remove')}
 * />
*/

export const CartDrawerItem = ({
    name,
    imageUrl,
    details,
    price,
    quantity,
    disabled,
    onClickCountButton,
    onClickRemove,
    className,
  }: CartDrawerItemProps) => {

  const [loading, setLoading] = useState(false);

  const hancleCkickButton = (role: 'plus' | 'minus') => {
    setLoading(true);
    onClickCountButton?.(role);
    setTimeout(() => setLoading(false), 4000);
  };

  return (
    <div
      className={cn('p-3 flex gap-6 bg-white',
        {'opacity-50 pointer-events-none': disabled},
        className,
      )}>
      <CartItemImage src={imageUrl} />

      <div className="flex-1">
        <CartItemInfo name={name} details={details} />

        <hr className="my-3" />

        <div className="flex justify-between items-center">
          <CountButton 
            value={quantity} 
            onClick={hancleCkickButton}
            loading={loading}
          />

          <div className="flex items-center gap-3">
            <CartItemPrice value={price} loading={loading} />
            <Trash2Icon
              size={16}
              onClick={onClickRemove}
              className="text-gray-400 cursor-pointer hover:text-gray-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
