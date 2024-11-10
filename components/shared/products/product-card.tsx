import Link from "next/link";
import { Title } from "@/components/shared";
import { Button } from "../../ui";
import { Plus } from "lucide-react";
import Image from "next/image";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  // ingredients: Ingredient[];
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
export let ProductCard = ({
    id,
    name,
    price,
    imageUrl,
    // ingredients,
    className,
  }: ProductCardProps) => {

  return (
    <Link href={`/products/${id}`} className="flex flex-col gap-3">
      <div className="p-1 h-[250px] flex-1 flex justify-center bg-white rounded-lg transition transition-duration-500 hover:translate-y-1">
        {/* <Image src={imageUrl} alt={name} width={250} height={250} priority={true} className='ml-[1rem] w-auto'/> */}
        <img src={imageUrl} alt={name} width={250} height={250} className='ml-[1rem] w-auto'/>
      </div>

      <div className="flex justify-between items-center">
        <Title text={name} size="sm" className="font-bold" />
        <span className="text-base text-primary">
          from &#8364;{price}
        </span>
      </div>

      <p className="mb-2 text-sm text-gray-400">
        Mozzarella, ham, spicy pepperoni, cheese cubes, tomatoes, champignons, Italian herbs, firm tomato sauce
      </p>

      <Button variant="outline" className="w-full self-center text-base text-brand font-bold border-brand hover:bg-brand">
        <Plus size={20} className="mr-1" />
        Add to cart
      </Button>
      
    </Link>
  );
};