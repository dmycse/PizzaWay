import { ProductOption } from '@prisma/client';
import { variantPizzaSizes } from '@/prisma/constants';
import type { PizzaType } from '@/prisma/prisma-types';
import type { PizzaVariant } from '@/components/shared/pizzas/pizza-selector';

/**
 * Function: getting available pizza sizes.
 * 
 * Used in: usePizzaVariants
 *
 * @param selectedType (1 | 2) cruct type of selected pizza
 * @param options array of selected pizza options
 *
 * @returns array of pizza sizes with disabled/not disabled property
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