import { ReactNode } from 'react';
import { Title } from '@/components/layout';
import { cn } from '@/lib/utils';

type CheckoutWhiteBlockProps = {
  title?: string;
  endAdornment?: ReactNode;
  className?: string;
  contentClassName?: string;
  children: ReactNode;
};

export const CheckoutWhiteBlock =({
    title,
    endAdornment,
    className,
    contentClassName,
    children,
  }: CheckoutWhiteBlockProps) => {
  
    return (
    <div className={cn('bg-white rounded-2xl', className)}>
      {title && (
        <div className="flex items-center justify-between p-5 px-7 border-b border-gray-100">
          <Title text={title} size="sm" className="font-bold" />
          {endAdornment}
        </div>
      )}

      <div className={cn('px-5 py-4', contentClassName)}>{children}</div>
    </div>
  );
};