import { cn } from '@/lib';

type CartItemImageProps = {
  src: string;
  className?: string;
};

/**
 * Component: displays an image of the item in the cart.
 * 
 * Parent: CartItem -> /components/shared/cart/cart-item.tsx
 * 
 * @example
 * <CartItemImage src="https://example.com/image.jpg" />
 */

export const CartItemImage = ({ src, className }: CartItemImageProps) => {
  return (
    <img 
      className={cn('w-[60px] h-[60px]', className)} 
      src={src} 
      alt='product image'
    />);
};
