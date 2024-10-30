import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui';
import { cn } from '@/lib';

export type CountIconButtonProps = {
  role?: 'plus' | 'minus';
  size?:  'sm' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}

/**
 * Component: a button with a plus or minus icon, to be used to increment or decrement a count of product order.
 *
 * @param {CountIconButtonProps} props
 * @prop {CountButtonProps['size']} [size] - the size of the button, either sm or lg
 * @prop {boolean} [disabled] - whether the button should be disabled
 * @prop {'plus' | 'minus'} [role] - the role of the button, either plus or minus
 * @prop {() => void} [onClick] - the function to call when the button is clicked
 * 
 * @returns {JSX.Element} The count icon button component.
 */

export const CountIconButton = ({
    role,
    size = 'sm',
    disabled,
    onClick,
  }: CountIconButtonProps) => {

  return (
    <Button
      type="button"
      variant="outline"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'p-0 hover:bg-primary hover:text-white disabled:bg-white disabled:border-gray-400 disabled:text-gray-400',
        size === 'sm' ? 'w-[30px] h-[30px] rounded-[10px]' : 'w-[38px] h-[38px] rounded-md',
      )}>
      {role === 'plus' ? (
        <Plus className={size === 'sm' ? 'h-4' : 'h-5'} />
      ) : (
        <Minus className={size === 'sm' ? 'h-4' : 'h-5'} />
      )}
    </Button>
  );
};