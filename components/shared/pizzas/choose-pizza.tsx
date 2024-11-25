'use client';

import { Ingredient, ProductOption } from '@prisma/client';
import { variantPizzaTypes } from '@/prisma/constants';
import { mapPizzaType, type PizzaSize, type PizzaType } from '@/prisma/prisma-types';
import { IngredientItem, PizzaImage, PizzaSelector, Title } from '@/components/shared';
import { cn, getTotalPizzaPrice } from '@/lib';
import { usePizzaVariants } from '@/hooks';
import { Button } from '@/components/ui';



type ChoosePizzaProps = {
  name: string;
  imageUrl: string;
  ingredients: Ingredient[];
  options: ProductOption[];
  loading?: boolean;
  onSubmit: (optionId: number, ingredients: number[]) => void;
  className?: string;
};

/**
 * Component (modal window): choose pizza variants and ingredients
 * 
 * Parent component: ProductSelection -> /components/products/product-selection.tsx
 * @param {Object} props
 * @prop  {string} [name] - (product)name of selected pizza
 * @prop  {string} [imageUrl] - (product)imageUrl: image url of selected pizza
 * @prop  {Ingredient[]} [ingredients] - (product)ingredients: array of pizza ingredients
 * @prop  {ProductOption[]} [options] - (product)options: array of pizza options
 * @prop  {boolean} [loading] - loading state
 * @prop  {Function} [onSubmit] - function for submitting selected pizza
 * @prop  {string} [className] - additional CSS class names to apply to the Component.
 *
 * @returns {JSX.Element} The cart button variants component.
 */

export const ChoosePizza = ({
  name, 
  imageUrl, 
  ingredients, 
  options, 
  loading, 
  onSubmit, 
  className 
  }: ChoosePizzaProps) => {

    const {
      selectedSize,
      selectedType,
      selectedIngredients,
      availablePizzaSizes,
      currentItemId,
      setSelectedSize,
      setSelectedType,
      addIngredient
    } = usePizzaVariants(options);
  

  // let ingerdietsDetails = ingredients.filter(item => selectedIngredients.has(item.id))
    
  const textDetaills = `Pizza: ${selectedSize} sm, ${mapPizzaType[selectedType]} crust`;
  const ingerdietsDetails = ingredients.map(item => item.name.toLowerCase()).join(', ');

  const totalPrice = getTotalPizzaPrice(selectedType, selectedSize, options, ingredients, selectedIngredients);

  const handleClickAdd = () => {
    if (currentItemId) {
      onSubmit(currentItemId, Array.from(selectedIngredients));
    }
  };
  console.log({selectedSize, selectedType});
  console.log(options);
  console.log(availablePizzaSizes);
  return (
    <div className={cn(className, 'flex-1 flex')}>
      <div className="py-6 px-1 w-[440px] flex flex-col justify-center items-center gap-4">
        <PizzaImage imageUrl={imageUrl} pizzaSize={selectedSize} />
        <Button
          loading={loading}
          onClick={handleClickAdd}
          disabled={totalPrice === 0}
          className="mt-6 px-10 w-8/12 h-11 text-base text-brand rounded-xl
          bg-white border border-brand hover:bg-brand hover:text-white
          disabled:border-gray-500 disabled:text-gray-500 disabled:bg-"
        >
          Add to cart &#8364;{totalPrice} 
        </Button>
      </div>

      <div className="p-6 pl-0 max-h-[600px] flex-1 flex flex-col gap-1">
        <Title text={name} size="md" className="font-extrabold" />

        <p className="pl-1 text-gray-400">{textDetaills}</p>
        <p className="pl-1 text-gray-400 text-sm">{ingerdietsDetails}</p>

        <div className="mt-1 mb-1 flex flex-col gap-3">
          <PizzaSelector
            items={availablePizzaSizes}
            value={String(selectedSize)}
            onClick={value => setSelectedSize(Number(value) as PizzaSize)}
          />

          <PizzaSelector
            items={variantPizzaTypes}
            value={String(selectedType)}
            onClick={value => setSelectedType(Number(value) as PizzaType)}
          />
        </div>

        <div className="p-3 bg-gray-50 rounded-md overflow-auto scrollbar">
          <div className="grid grid-cols-3 gap-2">
            {ingredients.map(ingredient => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                imageUrl={ingredient.imageUrl}
                price={ingredient.price}
                active={selectedIngredients.has(ingredient.id)}
                onClick={() => addIngredient(ingredient.id)}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};