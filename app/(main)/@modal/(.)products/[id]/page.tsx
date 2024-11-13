import { notFound } from 'next/navigation';
import { ProductModal } from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';

type ProductModalPageProps = {
    params: {
      id: string
    }
};


/**
 * Component: ProductModalPage
 * 
 * Fetches a product by id from the database and displays a modal with product details.
 * If the product is not found, it returns a notFound response.
 * 
 * @param {ProductModalPageProps} props
 * @prop  {Object} params
 * @prop  {string} params.id - id of the product to display
 * 
 * @returns {JSX.Element} The modal window component with product details
 */
export default async function ProductModalPage({params: { id }}: ProductModalPageProps) {

  let product = await prisma.product.findFirst({
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