import { cn } from '@/lib/utils';
import { CircleCheck } from 'lucide-react';

type IngredientItemProps = {
  name: string;
  imageUrl: string;
  price: number;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

/**
 * Component: Display suplement ingredient to add to a product while ordering
 * 
 * Parent component: ChoosePizza
 * @param name - ingredient name
 * @param imageUrl - ingredient image url
 * @param price - ingredient price
 * @param active - selected or not
 * @param onClick - choosing ingredient
 * @param className - css styles
 */


/**
 * Component: A single ingredient item to be used in the pizza ingredient selector.
 *
 * Parent component: ChoosePizza -> /components/shared/pizzas/choose-pizza.tsx
 * @example
 * <IngredientItem
 *   name="Mozzarella"
 *   imageUrl="/mozzarella.png"
 *   price={2.5}
 *   active={selectedIngredients.includes('Mozzarella')}
 *   onClick={() => setSelectedIngredients(addItem(selectedIngredients, 'Mozzarella'))}
 * />
 * @param {Object} props
 * @prop {string} [name] - the name of the ingredient.
 * @prop {string} [imageUrl] - the URL of the ingredient image.
 * @prop {number} [price] - the price of the ingredient.
 * @prop {boolean} [active=false] - whether the ingredient is selected or not.
 * @prop {Function} [onClick] - the function to be called when the ingredient is clicked.
 * @prop {string} [className] - additional CSS styles to apply to the Component.
 * 
 * @returns {JSX.Element} The ingredient item component
 */
export const IngredientItem = ({
    name,
    imageUrl,
    price,
    active,
    onClick,
    className,
  }: IngredientItemProps) => {
    
  return (
    <button
      className={cn(
        'p-1 w-28 relative flex flex-col items-center text-center bg-white shadow-lg rounded-md cursor-pointer',
        { 'border-2 border-primary': active },
        className,
      )}
      onClick={onClick}>
      {active && <CircleCheck className="absolute top-2 right-2 text-primary" />}
      <img src={imageUrl} alt={name} width={110} height={110}  />
      <span className="mb-1 h-8 text-xs">{name}</span>
      <span className="font-bold">&#8364;{price}</span>
    </button>
  );
};