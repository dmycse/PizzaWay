
import { cn } from '@/lib/utils';
import { Ingredient, ProductOption } from '@prisma/client';
import { PizzaImage, PizzaSelector, Title } from '@/components/shared';
import { PizzaSize, PizzaType } from '@/prisma/prisma-types';
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


export let ChoosePizza = ({
  name, 
  imageUrl, 
  ingredients, 
  options, 
  loading, 
  onSubmit, 
  className 
  }: ChoosePizzaProps) => {

  let textDetaills = '25 sm, classic crust';
  let totalPrice = 35;

  return (
    <div className={cn(className, 'flex-1 flex')}>
      <PizzaImage imageUrl={imageUrl} pizzaSize={25} />

      <div className="p-7 w-[490px] bg-[#f7f6f5]">
        <Title text={name} size="md" className="mb-1 font-extrabold" />

        <p className="text-gray-400">{textDetaills}</p>

        {/* <div className="flex flex-col gap-4 mt-5">
          <PizzaSelector
            items={availableSizes}
            value={String(pizzaSize)}
            onClick={value => setSize(Number(value) as PizzaSize)}
          />

          <PizzaSelector
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div> */}

        {/* <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div> */}

        <Button
          // loading={loading}
          // onClick={handleClickAdd}
          className="mt-10 px-10 w-full h-11 text-base text-brand rounded-[18px] bg-white border border-brand hover:bg-brand hover:text-white">
          Add to cart &#8364;{totalPrice} 
        </Button>
      </div>
    </div>
  );
};