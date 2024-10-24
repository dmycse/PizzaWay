import { cn } from '@/lib/utils';

type PizzaImageProps = {
  imageUrl: string;
  pizzaSize: 25 | 30 | 35;
  className?: string;
};


export let PizzaImage = ({ className, imageUrl, pizzaSize }: PizzaImageProps) => {

  return (
    <div className={cn('w-full mt-4 flex-1 relative flex justify-center items-center', className)}>
      
      <img
        src={imageUrl}
        alt="product image"
        className={cn('relative left-2 top-2 z-10 transition-all duration-300', {
          'w-[300px] h-[300px]': pizzaSize === 25,
          'w-[350px] h-[350px]': pizzaSize === 30,
          'w-[400px] h-[400px]': pizzaSize === 35,
        })}
      />

      <div className="w-[370px] h-[370px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-100 " />
      <div className="w-[320px] h-[320px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-gray-100" />
    </div>
  );
};