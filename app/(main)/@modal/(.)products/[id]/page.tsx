import { notFound } from 'next/navigation';
import { ProductModal } from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';

type ProductModalPageProps = {
    params: {
      id: string
    }
};


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