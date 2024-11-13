import { PizzaSize, PizzaType, mapPizzaType } from '@/prisma/prisma-types';
import { Ingredient } from '@prisma/client';
// import { CartStateItem } from './get-cart-details';

/**
 * Function: generates a detailed description (string) of a cart item.
 *
 * Used in: CartDrawer -> /components/shared/cart/cart-drawer-item.tsx
*
* @param {PizzaSize} [pizzaSize] - Optional size of the pizza.
* @param {PizzaType} [pizzaType] - Optional type of the pizza crust.
* @param {Ingredient[]} [ingredients=[]] - List of ingredients included in the pizza.
* 
* @returns {string} A string that describes the pizza size, crust type, and its ingredients.
 * @example
 * const details = getCartItemDetails(pizzaSize, pizzaType, ingredients);
 */

export const getCartItemDetails = (
    pizzaSize?: PizzaSize,
    pizzaType?: PizzaType,
    ingredients: Ingredient[] = [],
  ): string => {

  let details = [];

  if (pizzaSize && pizzaType) {
    let pizzaTypeLabel = mapPizzaType[pizzaType];
    details.push(`${pizzaSize} sm., ${pizzaTypeLabel} crust, `);
  }

  if (ingredients) {
    details.push(...ingredients.map(ingredient => ingredient.name));
  }

  return details.join(', ');
};