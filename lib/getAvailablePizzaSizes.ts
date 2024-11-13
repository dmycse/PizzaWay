import { ProductOption } from '@prisma/client';
import { variantPizzaSizes } from '@/prisma/constants';
import type { PizzaType } from '@/prisma/prisma-types';
import type { PizzaVariant } from '@/components/shared/pizzas/pizza-selector';


/**
 * Function: given a selected pizza crust type and an array of pizza options, 
 *          returns an array of pizza size variants with a disabled property 
 *          indicating whether that size is available for the given crust type.
 * 
 * Used in: usePizzaVariants -> /hooks
 * @param {PizzaType} [selectedType] - selected crust type of a pizza
 * @param {ProductOption[]} [options] - list of pizza options
 * @returns {PizzaVariant[]} array of pizza size variants
 */
export const getAvailablePizzaSizes = (
    selectedType: PizzaType, 
    options: ProductOption[]
  ): PizzaVariant[] => {

  let optionsBySelectedType = options.filter(option => option.pizzaType === selectedType);
  
  return variantPizzaSizes.map(variant => ({
    ...variant,
    disabled: !optionsBySelectedType.some(option => option.pizzaSize === +variant.value)
  }));
};