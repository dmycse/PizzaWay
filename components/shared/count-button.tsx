
import { cn } from '@/lib';
import { CountIconButton, type CountIconButtonProps } from './count-icon-button';

type CountButtonProps = {
  value?: number;
  size?: CountIconButtonProps['size'];
  onClick?: (role: 'plus' | 'minus') => void;
  className?: string;
}

/**
 * Component: a button element with increment and decrement functionality of the amount of a product order.
 * 
 * Parent component: CartItem -> /components/shared/cart/cart-item.tsx
 * @example
 * <CountButton value={1} />
 * @param {Object} props
 * @prop {number} [value=1] - current number value displayed between the buttons.
 * @prop {'sm' | 'lg'} [size='sm'] - size of the button, affecting its styling.
 * @prop {Function} [onClick] - callback function called with 'plus' or 'minus' when buttons are clicked.
 * @prop {string} [className] - aditional CSS styles to apply to the button.
 * 
 * @returns {JSX.Element} The count button component.
 */

export const CountButton = ({
  value = 1,
  size,
  onClick,
  className
  }: CountButtonProps) => {

  return (
    <div className={cn('inline-flex justify-between items-center gap-3', className)}>
      <CountIconButton
        role="minus"
        size={size}
        disabled={value === 1}
        onClick={() => onClick?.('minus')}
      />

      <b className={size === 'sm' ? 'text-sm' : 'text-md'}>
        {value}
      </b>

      <CountIconButton 
        role="plus"
        size={size}  
        onClick={() => onClick?.('plus')} 
      />
    </div>

  );
};