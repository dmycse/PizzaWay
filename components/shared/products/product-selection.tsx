import { ProductWithRelations } from "@/prisma/prisma-types";
import { ChoosePizza, ChooseProduct } from "@/components/shared";


type ProductSelectionProps = {
  product: ProductWithRelations;
  onSubmit?: VoidFunction;
};

export const ProductSelection = ({ product, onSubmit: _onSubmit }: ProductSelectionProps) => {
  // const [addCartItem, loading] = useCartStore((state) => [state.addCartItem, state.loading]);

  const firstItem = product.options[0];
  const isPizza = !!firstItem.pizzaType;

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
      price={firstItem.price}
      // loading={loading}
      onSubmit={onSubmit}
    />
  );
};