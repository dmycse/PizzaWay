import { useEffect, useState } from "react";
import { useSet } from "react-use";
import { ProductOption } from "@prisma/client";
import { PizzaSize, PizzaType } from "@/prisma/prisma-types";
import type { PizzaVariant } from '@/components/shared/pizzas/pizza-selector';
import { getAvailablePizzaSizes } from "@/lib";

type ReturnProps = {
  selectedSize: PizzaSize;
  selectedType: PizzaType;
  selectedIngredients: Set<number>;
  availablePizzaSizes: PizzaVariant[];
  currentItemId?: number;
  setSelectedSize: (size: PizzaSize) => void;
  setSelectedType: (type: PizzaType) => void;
  addIngredient: (id: number) => void;
};

/**
 * Hook: handling choosing pizza variants
 * 
 * Used into the component: ChoosePizza -> /components/shared/pizzas
 * @param   {ProductOption[]} options
 * @returns {Object} props:
 * @prop    {number} [selectedSize] - size of selected pizza
 * @prop    {number} [selectedType] - cruct type of selected pizza
 * @prop    {Set<number>} [selectedIngredients] - selected ingredients for pizza sumplements
 * @prop    {PizzaVariant[]} [availableSizes] - pizza variants
 * @prop    {number} [currentItemId] - id of selected pizza
 * @prop    {Function} [setSelectedSize] - function for changing selected pizza size
 * @prop    {Function} [setSelectedType] - function for changing selected pizza crust type
 * @prop    {Function} [addIngredient] - function for adding selected ingredients
 */

export const usePizzaVariants = (options: ProductOption[]): ReturnProps => {

  let [selectedSize, setSelectedSize] = useState<PizzaSize>(25);
  let [selectedType, setSelectedType] = useState<PizzaType>(1);
  let [selectedIngredients, {toggle: addIngredient}] = useSet(new Set<number>([]));

  let availablePizzaSizes = getAvailablePizzaSizes(selectedType, options);

  let currentItemId = options.find(item => item.pizzaType === selectedType && item.pizzaSize === selectedSize)?.productId;

  useEffect(() => {
    let isSelectedSizeAvailable = availablePizzaSizes?.find(
      item => +item.value === selectedSize && !item.disabled
    );
   
    let firstAvailableSize = availablePizzaSizes?.find(item => !item.disabled);
    
    if (!isSelectedSizeAvailable && firstAvailableSize) {
      setSelectedSize(+firstAvailableSize.value as PizzaSize);
    }
  }, [selectedType]);


  return {
    selectedSize,
    selectedType,
    selectedIngredients,
    availablePizzaSizes,
    currentItemId,
    setSelectedSize,
    setSelectedType,
    addIngredient
  };
};