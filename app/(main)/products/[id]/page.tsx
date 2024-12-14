import { notFound } from 'next/navigation';
import { Container } from '@/components/layout';
import { prisma } from '@/prisma/prisma-client';
import { ProductSelection } from '@/components/shared';

type ProductPageProps = {
    params: {
      id: string
    }
};

/**
 * Component:pPage that displays ditaled information of product by id.
 * 
 * The page fetches a product by id from the database and returns a component
 * that displays the product. If the product is not found, it returns a message
 * indicating that the product was not found.
 * 
 * @param {ProductPageProps} props
 * @prop  {Object} params
 * @prop  {string} params.id - id of the product to display
 * 
 * @returns {JSX.Element} The component that displays the product
 */
export default async function ProductPage({params: { id }}: ProductPageProps) {

  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              options: true,
            },
          },
        },
      },
      options: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className='my-10 flex flex-col'>
      <ProductSelection product={product} />
    </Container>
  );
};