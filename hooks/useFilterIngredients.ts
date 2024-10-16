import { useEffect, useState } from "react";
import { Ingredient } from "@prisma/client";
import { getAllIngredients } from "@/utils/ingredients";


export let useFilterIngredients = (): Ingredient[] => {

  let [ingredients, setIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    getAllIngredients()
      .then(data => setIngredients(data))
      .catch(error => console.warn(error));
  }, []);

  return ingredients || [];
}