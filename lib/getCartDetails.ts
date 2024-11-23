import { CartDTO } from '@/utils/cart.dto';
import { getCartItemTotalPrice } from '@/lib/getCartItemTotalPrice';

export type CartItemState = {
  id: number;
  quantity: number;
  name: string;
  imageUrl: string;
  price: number;
  pizzaSize?: number | null;
  pizzaType?: number | null;
  ingredients: Array<{ name: string; price: number }>;
  disabled?: boolean;
};

type ReturnProps = {
  items: CartItemState[];
  totalAmount: number;
};


export const getCartDetails = (data: CartDTO): ReturnProps => {
  const items = data.items.map(item => ({
    id: item.id,
    quantity: item.quantity,
    name: item.productOption.product.name,
    imageUrl: item.productOption.product.imageUrl,
    price: getCartItemTotalPrice(item),
    pizzaSize: item.productOption.pizzaSize,
    pizzaType: item.productOption.pizzaType,
    ingredients: item.ingredients.map(ingredient => ({
      name: ingredient.name,
      price: ingredient.price,
    })),
    disabled: false,
  })) as CartItemState[];

  return {
    items,
    totalAmount: data.totalAmount,
  };
};
