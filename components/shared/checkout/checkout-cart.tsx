import { CheckoutWhiteBlock, CheckoutItem, CheckoutItemSkeleton } from '@/components/shared/checkout';
import { getCartItemDetails } from '@/lib';
import { CartItemState } from '@/lib/getCartDetails';
import { PizzaSize, PizzaType } from '@/prisma/prisma-types';


type CheckoutCartProps = {
  items: CartItemState[];
  onClickCountButton: (id: number, quantity: number, type: 'plus' | 'minus') => void;
  removeCartItem: (id: number) => void;
  loading?: boolean;
  className?: string;
};

export const CheckoutCart = ({
    items,
    onClickCountButton,
    removeCartItem,
    loading,
    className,
  }: CheckoutCartProps) => {

  return (
    <CheckoutWhiteBlock title="1. The Cart" className={className}>
      <div className="flex flex-col gap-5">
        {loading
          ? [...Array(4)].map((_, index) => <CheckoutItemSkeleton key={index} />)
          : items.map(item => (
              <CheckoutItem
                key={item.id}
                id={item.id}
                imageUrl={item.imageUrl}
                details={getCartItemDetails(
                  item.pizzaSize as PizzaSize,
                  item.pizzaType as PizzaType,
                  item.ingredients,
                )}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                disabled={item.disabled}
                onClickCountButton={role => onClickCountButton(item.id, item.quantity, role)}
                onClickRemove={() => removeCartItem(item.id)}
              />
            ))
        }
      </div>
    </CheckoutWhiteBlock>
  );
};