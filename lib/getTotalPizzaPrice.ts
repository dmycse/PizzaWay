import { Ingredient, ProductOption } from '@prisma/client';
import { type PizzaSize, type PizzaType } from '@/prisma/prisma-types';

/**
 * Function: pizza total price calculation. 
 * 
 * Used in: ChoosePizza
 * @returns number total pizza price
 */
export const getTotalPizzaPrice = (
  selectedType: PizzaType,
  selectedSize: PizzaSize,
  options: ProductOption[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>,
) => {

  const pizzaPriceByOptions = 
    options.find(o => o.pizzaSize === selectedSize && o.pizzaType === selectedType)?.price ?? 0;

  const pizzaPriceByIngredients = ingredients.reduce((sum, ingredient) => {
    if (selectedIngredients.has(ingredient.id)) {
      return sum += ingredient.price;
    }
    return sum;
  }, 0); 

  return pizzaPriceByOptions + pizzaPriceByIngredients;
};