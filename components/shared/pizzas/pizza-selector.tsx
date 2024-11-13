import { cn } from '@/lib/utils';


export type PizzaVariant = {
  name: string;
  value: string;
  disabled?: boolean;
};

type PizzaSelectorProps = {
  items: readonly PizzaVariant[];
  value?: PizzaVariant['value'];
  onClick?: (value: PizzaVariant['value']) => void;
  className?: string;
};


/**
 * Component: Selector pizza size or pizza crust type
 * 
 * Parent component: ChoosePizza -> /components/shared/pizzas, PizzaVariant
 * @param {PizzaSelectorProps} props
 * @prop  {PizzaVariant[]} [items] - array of pizza sizes or pizza crust types with disabled/not disabled property
 * @prop  {string} [value] - selected pizza size or pizza crust type
 * @prop  {Function} [onClick] - choosing pizza size or pizza crust type
 * @prop  {string} [className] - additional css styles to apply to the component
 * 
 * @returns {JSX.Element} - the pizza selector component
 */

export let PizzaSelector = ({ items, value, onClick, className }: PizzaSelectorProps) => {

  return (
    <div className={cn(className, 'p-1 flex justify-between bg-[#F3F3F7] rounded-3xl select-none')}>
      {items.map(item => (
        <button
          key={item.name}
          onClick={() => onClick?.(item.value)}
          className={cn(
            'px-5 h-[30px] flex-1 flex justify-center items-center text-sm cursor-pointer rounded-3xl transition-all duration-400',
            {
              'bg-white shadow': item.value === value,
              'text-gray-500 opacity-50 pointer-events-none': item.disabled,
            },
          )}>
          {item.name}
        </button>
      ))}
    </div>
  );
};