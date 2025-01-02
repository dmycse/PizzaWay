import { Loader } from 'lucide-react';
import { cn } from '@/lib';

type CartItemPriceProps = {
  value: number;
  loading?: boolean;
  className?: string;
};

/**
 * CartItemPrice displays the price of a cart item (product for an order)
 *
 * Parent: CartItem -> /components/shared/cart/cart-item.tsx
 * 
 * @example
 * <CartItemPrice value={100} />
 */

export const CartItemPrice = ({ value, loading, className }: CartItemPriceProps) => {
  return (
    <h2 className={cn('font-medium', className)}>
      {loading ? <Loader className="animate-spin" /> : <span>&#8364;{value}</span>}
    </h2>
  );
};
