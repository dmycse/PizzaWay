import { cn } from '@/lib/utils';

type CheckoutItemSkeletonProps = {
  className?: string;
};

/**
 * CheckoutItemSkeleton displays a skeleton of the checkout item.
 * It is used to display a placeholder for the checkout item when the data is being fetched.
 */
export const CheckoutItemSkeleton = ({ className }: CheckoutItemSkeletonProps) => {
  
  return (
    <div className={cn('flex justify-between items-center', className)}>
      <div className="flex items-center gap-5">
        <div className="w-[50px] h-[50px] bg-gray-200 rounded-full animate-pulse" />
        <h2 className="w-40 h-5 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="h-5 w-10 bg-gray-200 rounded animate-pulse" />
      <div className="h-8 w-[133px] bg-gray-200 rounded animate-pulse" />
    </div>
  );
};