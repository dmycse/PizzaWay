
import { cn } from '@/lib';
import { CountIconButton, type CountIconButtonProps } from './count-icon-button';
import { Loader } from 'lucide-react';

type CountButtonProps = {
  value?: number;
  size?: CountIconButtonProps['size'];
  onClick?: (role: 'plus' | 'minus') => void;
  loading?: boolean;
  className?: string;
}

/**
 * Component: a button element with increment and decrement functionality of the amount of a product order.
 * 
 * Parent: CartItem -> /components/shared/cart/cart-item.tsx
 * @param {CountButtonProps} props
 * @prop  {number} [value=1] - current number value displayed between the buttons.
 * @prop  {'sm' | 'lg'} [size='sm'] - size of the button, affecting its styling.
 * @prop  {Function} [onClick] - callback function called with 'plus' or 'minus' when buttons are clicked.
 * @prop  {string} [className] - aditional CSS styles to apply to the button.
 * 
 * @returns {JSX.Element} The count button component.
 * @example
 * <CountButton value={1} />
 */

export const CountButton = ({
  value = 1,
  size,
  onClick,
  loading,
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
        {loading ? <Loader className="animate-spin" /> : value}
      </b>

      <CountIconButton 
        role="plus"
        size={size}  
        onClick={() => onClick?.('plus')} 
      />
    </div>

  );
};