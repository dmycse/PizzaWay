import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type CheckoutItemDetailsProps = {
  title?: ReactNode;
  value?: ReactNode;
  className?: string;
};

/**
 * CheckoutItemDetails displays the title and value of an item in the checkout summary.
 *
 * Parent: CheckoutSummary -> /components/shared/checkout/checkout-summary.tsx
 * 
 * @example
 * <CheckoutItemDetails
 *   title="Name:"
 *   value="John Doe"
 * />
 */
export const CheckoutItemDetails = ({ title, value, className }: CheckoutItemDetailsProps) => {
  
  return (
    <div className={cn('flex my-4', className)}>
      <span className="flex flex-1 text-lg text-neutral-500">
        {title}
        <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
      </span>

      <span className="font-bold text-lg">
        {value}
      </span>
    </div>
  );
};