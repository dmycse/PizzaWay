import { cn } from '@/lib';

type CartItemInfoProps = {
  name: string;
  details: string;
  className?: string;
};

/**
 * Component: displays the name and details of a cart item (product for an order).
 *
 * Parent component: CartItem -> /components/shared/cart/cart-item.tsx
 * @example
 * <CartItemInfo
 *   name="Product 1"
 *   details="Description of product 1"
 * />
 * @param {Object} props
 * @prop {string} name - the name of the cart item.
 * @prop {string} [details] - the details (description) of the cart item.
 * @prop {string} [className] - additional CSS styles to apply to the Component.
 *
 * @returns {JSX.Element} The cart item info component.
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
