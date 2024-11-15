import { cn } from '@/lib';

type CartItemPriceProps = {
  value: number;
  className?: string;
};

/**
 * Component: displays the price of a cart item (product for an order)
 *
 * Parent: CartItem -> /components/shared/cart/cart-item.tsx
 * @param {CartItemPriceProps} props
 * @prop  {number} [value] - the price of the cart item
 * @prop  {string} [className] - additional CSS styles to apply to the component
*
* @returns {JSX.Element} The cart item price component.
 * @example
 * <CartItemPrice value={100} />
 */

export const CartItemPrice = ({ value, className }: CartItemPriceProps) => {
  return <h2 className={cn('font-medium', className)}>&#8364;{value}</h2>;
};
