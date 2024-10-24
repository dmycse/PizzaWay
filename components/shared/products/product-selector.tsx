import { cn } from '@/lib/utils';
import { Title } from '@/components/shared/';
import { Button } from '@/components/ui';

type ProductSelectorProps = {
  name: string;
  imageUrl: string;
  price: number;
  loading?: boolean;
  onSubmit?: VoidFunction;
  className?: string;
};


export let ProductSelector = ({
  name,
  imageUrl,
  price,
  loading,
  onSubmit,
  className
  }: ProductSelectorProps) => {

  return (
    <div className={ cn(className, 'flex-1 flex') }>
      
      <div className="w-full flex-1 relative flex justify-center items-center">
        <img
          src={imageUrl}
          alt={name}
          className="w-[350px] h-[350px] relative top-2 left-2 z-10 transition-all duration-300"
        />
      </div>

      <div className="p-7 w-[490px] bg-[#f7f6f5]">
        <Title text={name} size="md" className="mb-1 font-extrabold" />

        <Button
          loading={loading}
          onClick={() => onSubmit?.()}
          className="mt-10 px-10 w-full h-[55px] text-base rounded-[18px]">
          Add to cart &#8364;{price} 
        </Button>
      </div>

    </div>
  );
};