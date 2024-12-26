import Link from "next/link";
import { Title } from "@/components/shared";
import { Ingredient } from "@prisma/client";
import { Button } from "@/components/ui";
import { Plus } from "lucide-react";
// import Image from "next/image";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  ingredients: Ingredient[];
  className?: string;
}

/**
 * Component: displays a single product card.
 *
 * Parent component: ProductsGroup -> /components/shared/products/products-group.tsx
 * @param {ProductCardProps} props
 * @prop {number} [id] - the id of the product.
 * @prop {string} [name] - the name of the product.
 * @prop {number} [price] - the price of the product.
 * @prop {string} [imageUrl] - the image url of the product.
 * @prop {string} [className] - additional CSS styles to apply to the component.
 *
 * @returns {JSX.Element} The product card component.
 * @example
 * <ProductCard
 *   id={1}
 *   name="Pizza 1"
 *   price={100}
 *   imageUrl="/pizza1.jpg"
 *   className="mb-4"
 * />
 */
export const ProductCard = ({
    id,
    name,
    price,
    imageUrl,
    ingredients,
    // className,
  }: ProductCardProps) => {

  return (
    <Link href={`/products/${id}`} className="h-full flex flex-col gap-4">
      <div className="mb-5 w-[18rem] h-[18rem] flex-1 m-auto flex items-center bg-white rounded-lg transition transition-duration-500 hover:translate-y-3">
        {/* <Image src={imageUrl} alt={name} width={250} height={250} priority={true} className='ml-[1rem] w-auto'/> */}
        <img src={imageUrl} alt={name} className='w-full h-full object-contain'/>
      </div>

      <div className="flex justify-between items-center">
        <Title text={name} size="sm" className="font-bold" />
        {/* <span className="text-base text-primary">
          from &#8364;{price.toFixed(2)}
        </span> */}
      </div>

      {ingredients.length > 0 && (
        <p className="mb-2 h-[4rem] overflow-hidden text-sm text-gray-400">
          { ingredients.map(ingredient => ingredient.name).join(', ') }
        </p>
      )}
      <Button 
        variant="outline" 
        className="mt-2 w-full self-center text-base text-brand font-bold border-brand hover:bg-brand"
      >
        {/* <Plus size={20} className="mr-1" /> */}
        {ingredients.length > 0 ? 'from ' : ''}
        &#8364;{price.toFixed(2)}
      </Button>
      
    </Link>
  );
};