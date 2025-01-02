import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

type ClearButtonProps = {
  onClick?: VoidFunction;
  className?: string;
};

/**
 * A button element to clear the input field.
 * 
 * Used in: 
 * CustomInput -> /components/form-components/custom-input.tsx,
 * CustomTextarea -> /components/form-components/custom-textarea.tsx
 * 
 * @example
 * <ClearButton onClick={() => console.log('Button was clicked')} />
 */
export const ClearButton = ({ onClick, className }: ClearButtonProps) => {
  
  return (
    <button
      onClick={onClick}
      className={cn(
        'absolute right-4 top-1/2 -translate-y-1/2 opacity-30 hover:opacity-100 cursor-pointer',
        className,
      )}>
      <X className="h-5 w-5" />
    </button>
  );
};