import { cn } from '@/lib';

type CartItemImageProps = {
  src: string;
  className?: string;
};

/**
 * Component: displays an image of the item in the cart.
 * 
 * Parent: CartItem -> /components/shared/cart/cart-item.tsx
 * @param {CartItemImageProps} props
 * @prop  {string} [src] - the URL of the image.
 * @prop  {string} [className] - additional CSS styles to apply to the img element.
*
* @returns {JSX.Element} The cart item image component.
 * @example
 * <CartItemImage src="https://example.com/image.jpg" />
 */

export const CartItemImage = ({ src, className }: CartItemImageProps) => {
  return <img className={cn('w-[60px] h-[60px]', className)} src={src} alt='product image'/>;
};
