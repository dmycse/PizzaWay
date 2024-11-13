import { ProductWithRelations } from "@/prisma/prisma-types";
import { ChoosePizza, ChooseProduct } from "@/components/shared";


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
export const ProductSelection = ({ product, onSubmit: _onSubmit }: ProductSelectionProps) => {
  // const [addCartItem, loading] = useCartStore((state) => [state.addCartItem, state.loading]);

  const firstOption = product.options[0];
  const isPizza = !!firstOption.pizzaType;

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    // try {
    //   const itemId = productItemId ?? firstItem.id;

    //   await addCartItem({
    //     productItemId: itemId,
    //     ingredients,
    //   });

    //   toast.success(product.name + ' добавлена в корзину');

    //   _onSubmit?.();
    // } catch (err) {
    //   toast.error('Не удалось добавить товар в корзину');
    //   console.error(err);
    // }
  };

  if (isPizza) {
    return (
      <ChoosePizza
        name={product.name}
        imageUrl={product.imageUrl}
        ingredients={product.ingredients}
        options={product.options}
        // loading={loading}
        onSubmit={onSubmit}
      />
    );
  }

  return (
    <ChooseProduct
      name={product.name}
      imageUrl={product.imageUrl}
      price={firstOption.price}
      // loading={loading}
      onSubmit={onSubmit}
    />
  );
};