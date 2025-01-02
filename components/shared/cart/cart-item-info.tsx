import { cn } from '@/lib';

type CartItemInfoProps = {
  name: string;
  details: string;
  className?: string;
};

/**
 * Component: displays the name and details of a cart item (product for an order).
 *
 * Parent: CartItem -> /components/shared/cart/cart-item.tsx
 * 
 * @example
 * <CartItemInfo
 *   name="Product 1"
 *   details="Description of product 1"
 * />
 */

export const CartItemInfo = ({ name, details, className }: CartItemInfoProps) => {

  return (
    <div>
      <div className={cn('flex justify-between items-center', className)}>
        <h2 className="flex-1 text-lg font-bold leading-6">
          {name}
        </h2>
      </div>
      {details && 
        <p className="w-[90%] text-xs text-gray-400">
          {details}
        </p>}
    </div>
  );
};
