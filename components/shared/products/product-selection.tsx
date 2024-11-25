'use client';

import { useCartStore } from "@/store/cart-store";
import { useShallow } from 'zustand/react/shallow'
import { ProductWithRelations } from "@/prisma/prisma-types";
import { ChoosePizza, ChooseProduct } from "@/components/shared";
import toast from 'react-hot-toast';


type ProductSelectionProps = {
  product: ProductWithRelations;
  onSubmit?: VoidFunction;
};

/**
 * Component: modal window for product selection
 *
 * Parent component: ProductModal -> /components/shared/modals/product-modal.tsx
 * @param {Object} props
 * @prop  {ProductWithRelations} product - product to select
 * @prop  {Function} onSubmit - function for submitting selected product
 *
 * @returns {JSX.Element} The product selection component.
 */
export const ProductSelection = ({ product, onSubmit: handleSubmit }: ProductSelectionProps) => {

  const [addCartItem, loading] = useCartStore(useShallow(state => [state.addCartItem, state.loading]));

  const firstOption = product.options[0];
  const isPizza = !!firstOption.pizzaType;

  const onSubmit = async (productOptionId?: number, ingredients?: number[]) => {
    try {
      const itemId = productOptionId ?? firstOption.id;

      await addCartItem({
        productOptionId: itemId,
        ingredients,
      });

      toast.success(product.name + ' added to cart');
      handleSubmit?.();
      
    } catch (err) {
      toast.error('Error adding product to cart');
      console.error(err);
    }
  };

  if (isPizza) {
    return (
      <ChoosePizza
        name={product.name}
        imageUrl={product.imageUrl}
        ingredients={product.ingredients}
        options={product.options}
        loading={loading}
        onSubmit={onSubmit}
      />
    );
  }

  return (
    <ChooseProduct
      name={product.name}
      imageUrl={product.imageUrl}
      price={firstOption.price}
      loading={loading}
      onSubmit={onSubmit}
    />
  );
};