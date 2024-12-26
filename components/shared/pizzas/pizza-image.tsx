import { cn } from '@/lib/utils';

type PizzaImageProps = {
  imageUrl: string;
  pizzaSize: 25 | 30 | 35;
  className?: string;
};

/**
 * Component: Pizza image render
 * 
 * Parent component: ChoosePizza -> app/components/shared/pizzas
 * @param {PizzaImageProps} props
 * @prop  {string} [imageUrl] - image url of selected pizza
 * @prop  {25 | 30 | 35} [pizzaSize] - selected size of selected pizza
 * @prop  {string} [className] - additional css styles to apply to the component
 */
export const PizzaImage = ({ className, imageUrl, pizzaSize }: PizzaImageProps) => {

  return (
    <div className={cn('flex-1 relative flex justify-center items-center', className)}>
      
      <img
        src={imageUrl}
        alt="pizza image"
        className={cn('relative left-2 top-2 z-10 transition-all duration-700', {
          'w-[300px] h-[300px] rotate-90 -translate-y-2 -translate-x-2 ': pizzaSize === 25,
          'w-[350px] h-[350px] -rotate-90 -translate-y-2 -translate-x-2': pizzaSize === 30,
          'w-[410px] h-[410px] rotate-135 -translate-x-4': pizzaSize === 35,
        })}
      />

      <div className="w-[370px] h-[370px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-dotted rounded-full border-gray-200 " />
      <div className="w-[320px] h-[320px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-dotted rounded-full border-gray-200" />
    </div>
  );
};