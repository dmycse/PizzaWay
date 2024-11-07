import { Container } from '@/components/layout';
import { PizzaVariant } from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';

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
 * @param {Object} props
 * @prop {Object} params
 * @prop {string} params.id - id of the product to display
 * 
 * @returns {JSX.Element} The component that displays the product
 */
export default async function ProductPage({params: { id }}: ProductPageProps) {

  let product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    }
  });

  if (!product) {
    return (
      <div>
        Product not found
      </div>
    );
  }

  return (
    <Container className='my-10 flex flex-col'>
      pizza
      {/* <PizzaVariant {...product} className='' /> */}
    </Container>
  );
};