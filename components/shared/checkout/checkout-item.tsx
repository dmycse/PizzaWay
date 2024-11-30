'use client';

import { CartItemProps } from '@/components/shared/cart/cart-item.types';
import { CartItemImage, CartItemInfo, CartItemPrice } from '@/components/shared/cart';
import { CountButton } from '@/components/shared';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

type CheckoutItemProps = CartItemProps & {
  onClickCountButton?: (role: 'plus' | 'minus') => void;
  onClickRemove?: VoidFunction;
  className?: string;
}

export const CheckoutItem = ({
    name,
    price,
    imageUrl,
    quantity,
    details,
    disabled,
    onClickCountButton,
    onClickRemove,
    className,
  }: CheckoutItemProps ) => {

  return (
    <div
      className={cn(
        'flex items-center justify-between',
        {
          'opacity-50 pointer-events-none': disabled,
        },
        className,
      )}>
      <div className="flex items-center gap-5 flex-1">
        <CartItemImage src={imageUrl} />
        <CartItemInfo name={name} details={details} />
      </div>

      <CartItemPrice value={price} />

      <div className="flex items-center gap-5 ml-20">
        <CountButton onClick={onClickCountButton} value={quantity} />
        <button type="button" onClick={onClickRemove}>
          <X className="text-gray-400 cursor-pointer hover:text-gray-600" size={20} />
        </button>
      </div>
    </div>
  );
};