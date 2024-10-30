import { CartItemProps } from './cart-item.types';
import { CartItemImage, CartItemInfo, CartItemPrice } from '@/components/shared/cart';
import { CountButton } from '@/components/shared';

import { cn } from '@/lib';
import { Trash2Icon } from 'lucide-react';

type CartDrawerItemProps = CartItemProps & {
  onClickCountButton?: (role: 'plus' | 'minus') => void;
  onClickRemove?: () => void;
  className?: string;
};

/**
 * Component: a single item (product) in the cart drawer.
 * 
 * Parent component: CartDrawer -> /components/shared/cart/cart-drawer.tsx
 * @example
 * <CartDrawerItem
 *   name="Product 1"
 *   imageUrl="https://example.com/image.jpg"
 *   price={100}
 *   quantity={1}
 *   onClickCountButton={(role) => console.log(role)}
 *   onClickRemove={() => console.log('remove')}
 * />
 * @param {Object} props
 * @prop {string} [name] - the name of the cart item
 * @prop {string} [imageUrl] - the image URL of the cart item
 * @prop {string} [details] - the details (description) of the cart item
 * @prop {number} [price] - the price of the cart item
 * @prop {number} [quantity] - the current quantity of the cart item
 * @prop {boolean} [disabled=false] - whether the cart item should be disabled
 * @prop {Function} [onClickCountButton] - callback function called with 'plus' or 'minus' when quantity buttons are clicked.
 * @prop {Function} [onClickRemove] - callback function called when the remove button is clicked.
 * @prop {string} [className] - additional CSS styles to apply to the component.
 * 
 * @returns {JSX.Element} The cart drawer item component.
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

  return (
    <div
      className={cn('p-5 flex gap-6 bg-white  ',
        {'opacity-50 pointer-events-none': disabled},
        className,
      )}>
      <CartItemImage src={imageUrl} />

      <div className="flex-1">
        <CartItemInfo name={name} details={details} />

        <hr className="my-3" />

        <div className="flex justify-between items-center">
          <CountButton value={quantity} onClick={onClickCountButton} />

          <div className="flex items-center gap-3">
            <CartItemPrice value={price} />
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