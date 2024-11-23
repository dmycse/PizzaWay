import { CartItemDTO } from '@/utils/cart.dto';

export const getCartItemTotalPrice = (item: CartItemDTO): number => {
  const ingredientsPrice = item.ingredients.reduce((sum, ingredient) => sum + ingredient.price, 0);

  return (ingredientsPrice + item.productOption.price) * item.quantity;
};