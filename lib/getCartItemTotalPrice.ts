import { CartItemDTO } from '@/utils/cart.dto';

/**
 * Calculates the total price for a given cart item.
 * 
 * @returns The total price of the cart item, taking into account the 
 * price of its ingredients and the product option, multiplied by the quantity.
 */

export const getCartItemTotalPrice = (item: CartItemDTO): number => {
  const ingredientsPrice = item.ingredients.reduce((sum, ingredient) => sum + ingredient.price, 0);

  return (ingredientsPrice + item.productOption.price) * item.quantity;
};