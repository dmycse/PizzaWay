
import { cn } from '@/lib/utils';
import { Ingredient, ProductOption } from '@prisma/client';
import { PizzaSelector, PizzaImage, Title } from '@/components/shared';

type PizzaVariantProps = {
  name: string;
  imageUrl: string;
  ingredients: Ingredient[];
  options: ProductOption[];
  loading?: boolean;
  onSubmit: (itemId: number, ingredients: number[]) => void;
  className?: string;
};


export let PizzaVariant = ({
  name,
  imageUrl,
  ingredients,
  options,
  loading,
  onSubmit, 
  className 
  }: PizzaVariantProps) => {

  return (
    <div className={cn(className, 'flex-1 flex')}>
      <PizzaImage imageUrl={imageUrl} pizzaSize={25} />

      <div className="p-7 w-[490px] bg-[#f7f6f5]">
        <Title text={name} size="md" className="mb-1 font-extrabold" />

        <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur.</p>

        <div className="mt-5 flex flex-col gap-4">
          <PizzaSelector
            items={availableSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />

          <PizzaSelector
            items={pizzaType}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>
        </div>

    </div>
  );
};