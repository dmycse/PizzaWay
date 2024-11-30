import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

type ClearButtonProps = {
  onClick?: VoidFunction;
  className?: string;
};

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