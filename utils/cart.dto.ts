import { Cart, CartItem, Product, ProductOption, Ingredient } from '@prisma/client';

/* Types of api/cart response */

export type CartItemDTO = CartItem & {
  productOption: ProductOption & {
    product: Product;
  };
  ingredients: Ingredient[];
};

export interface CartDTO extends Cart {
  items: CartItemDTO[];
}

export interface CreateCartItemValues {
  productOptionId: number;
  ingredients?: number[];
}