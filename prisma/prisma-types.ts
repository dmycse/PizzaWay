import { Product, ProductOption, Ingredient} from '@prisma/client';

export type ProductWithRelations = Product & {
  options: ProductOption[];
  ingredients: Ingredient[];
};

export const mapPizzaSizes = {
  25: 'Small',
  30: 'Middle',
  35: 'Big',
} as const;

export const mapPizzaType = {
  1: 'classic',
  2: 'thin',
} as const;

export type PizzaSize = keyof typeof mapPizzaSizes;
export type PizzaType = keyof typeof mapPizzaType;

