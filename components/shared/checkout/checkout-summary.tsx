import { CheckoutWhiteBlock, CheckoutItemDetails } from '@/components/shared/checkout';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';
import { Button, Skeleton } from '@/components/ui';
import { cn } from '@/lib/utils';
import { DELIVERY_PRICE, VAT } from '@/prisma/constants';


type CheckoutSummaryProps = {
  totalAmount: number;
  loading?: boolean;
  className?: string;
};

export const CheckoutSummary = ({ totalAmount, loading, className }: CheckoutSummaryProps) => {

  const vatValue = (totalAmount * VAT) / 100;
  const totalAmountWithDelivery = totalAmount + DELIVERY_PRICE + vatValue;

  return (
    <CheckoutWhiteBlock className={cn('p-6 sticky top-4', className)}>
      <div className="flex flex-col gap-1">
        <span className="text-xl">Total:</span>
        {loading ? (
          <Skeleton className="h-11 w-48" />
        ) : (
          <span className="h-11 text-2xl font-semibold">&#8364;{totalAmountWithDelivery.toFixed(2)}</span>
        )}
      </div>

      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Package size={18} className="mr-2 text-gray-400" />
            Products:
          </div>
        }
        value={loading ? <Skeleton className="h-6 w-16 rounded-[6px]" /> : `€${totalAmount.toFixed(2)}`}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Percent size={18} className="mr-2 text-gray-400" />
           VAT:
          </div>
        }
        value={loading ? <Skeleton className="h-6 w-16 rounded-[6px]" /> : `€${vatValue.toFixed(2)}`}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Truck size={18} className="mr-2 text-gray-400" />
            Delivery:
          </div>
        }
        value={loading ? <Skeleton className="h-6 w-16 rounded-[6px]" /> : `€${DELIVERY_PRICE}`}
      />

      <Button
        loading={loading}
        type="submit"
        className="w-full h-14 rounded-2xl mt-6 text-base font-bold
                   bg-white border border-brand text-brand hover:bg-brand hover:text-white"
      >
        Pay your order
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </CheckoutWhiteBlock>
  );
};