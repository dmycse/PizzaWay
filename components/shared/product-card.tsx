import Link from "next/link";
import { Title } from "@/components/shared";
import { Button } from "../ui";
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

export let ProductCard = ({
    id,
    name,
    price,
    imageUrl,
    // ingredients,
    className,
  }: ProductCardProps) => {

  return (
    <div className=''>
      <Link href={`/products/${id}`}>
        <div className="p-6 h-[200px] flex justify-center  bg-white rounded-lg">
          <Image src={imageUrl} alt={name} width={200} height={200}/>
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">
          Cream, cream cheese, ham, bacon, fresh agaric mushrooms, Edam cheese, fresh pepper, mozzarella & parmesan
        </p>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-[20px] text-primary">
            from <b>&#8364;{price}</b>
          </span>

          <Button variant="outline" className="text-base text-brand font-bold border-brand hover:bg-brand">
            <Plus size={20} className="mr-1" />
            Add
          </Button>
        </div>
        
      </Link>
    </div>
  );
};