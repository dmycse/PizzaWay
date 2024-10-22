import { Container, PizzaVariant } from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';

type ProductPageProps = {
    params: {
      id: string
    }
};


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