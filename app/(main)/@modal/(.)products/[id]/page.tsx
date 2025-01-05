import { notFound } from 'next/navigation';
import { ProductModal } from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';

type ProductModalPageProps = {
    params: {
      id: string
    }
};

/**
 * Component: displays a modal window with product details.
 * 
 * User sees this component when clicks on ProductCard -> @/components/shared/products/product-card
 * 
 * Fetches a product by id from the database and displays a modal with product details.
 * If the product is not found, it returns a notFound response.
 */
export default async function ProductModalPage({params: { id }}: ProductModalPageProps) {

  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      options: true,
      ingredients: true
    }
  });

  if (!product) {
    return notFound();
  }

  return <ProductModal product={product} />;
};