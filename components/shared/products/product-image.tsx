import { cn } from '@/lib/utils';

type ProductImageProps = {
  imageUrl: string;
  className?: string;
};


export let ProductImage = ({ className, imageUrl }: ProductImageProps) => {

  return (
    <div className={cn('w-full flex-1 relative flex justify-center items-center', className)}>
      <img
        src={imageUrl}
        alt="product image"
        className={cn('w-[300px] h-[300px] relative left-2 top-2 z-10 transition-all duration-300')}
      />
    </div>
  );
};