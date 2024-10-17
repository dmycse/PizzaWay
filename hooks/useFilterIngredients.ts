import { useEffect, useState } from "react";
import { useSet } from "react-use";

import { Ingredient } from "@prisma/client";
import { getAllIngredients } from "@/utils/ingredients";

type UseFilterIngredientsReturnedProps = {
  ingredients: Ingredient[];
  selectedIngredients: Set<string>;
  selectedPizzaSize: Set<string>;
  selectedPizzaCrust: Set<string>;
  setSelectedIngredient: (value: string) => void;
  setSelectedPizzaSize: (value: string) => void;
  setSelectedPizzaCrust: (value: string) => void;
}

export let useFilterIngredients = (): UseFilterIngredientsReturnedProps => {

  let [ingredients, setIngredients] = useState<Ingredient[]>([]);
  // store selected ingredients
  let [selectedIngredients, { toggle: toggleIngredient }] = useSet(new Set<string>([]));
  // store selected pizza size
  let [selectedPizzaSize, { toggle: togglePizzaSize }] = useSet(new Set<string>([]));
  // store selected pizza crust
  let [selectedPizzaCrust, { toggle: togglePizzaCrust }] = useSet(new Set<string>([]));
  

  useEffect(() => {
    getAllIngredients()
      .then(data => setIngredients(data))
      .catch(error => console.warn(error));
  }, []);

  return {
    ingredients, 
    selectedIngredients,
    selectedPizzaSize,
    selectedPizzaCrust, 
    setSelectedIngredient: toggleIngredient,
    setSelectedPizzaSize: togglePizzaSize,
    setSelectedPizzaCrust: togglePizzaCrust
  };
}