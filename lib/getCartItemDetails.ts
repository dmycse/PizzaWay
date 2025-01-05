import { PizzaSize, PizzaType, mapPizzaType } from '@/prisma/prisma-types';
import { CartItemState } from './getCartDetails';

/**
 * Function: generates a detailed description (string) of a cart item.
 *
 * Used in: CartDrawer -> /components/shared/cart/cart-drawer-item.tsx
 * @example
 * const details = getCartItemDetails(pizzaSize, pizzaType, ingredients);
 */

export const getCartItemDetails = (
    pizzaSize?: PizzaSize,
    pizzaType?: PizzaType,
    ingredients: CartItemState['ingredients'] = [],
  ): string => {

  const details = [];

  if (pizzaSize && pizzaType) {
    const pizzaTypeLabel = mapPizzaType[pizzaType];
    details.push(`${pizzaSize} sm., ${pizzaTypeLabel} crust`);
  }

  if (ingredients) {
    details.push(...ingredients.map(ingredient => ingredient.name.toLowerCase()));
  }
  
  return details.join(', ');
};