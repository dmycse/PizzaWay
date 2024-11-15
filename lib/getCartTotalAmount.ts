import { prisma } from '@/prisma/prisma-client';
import { getCartItemTotalPrice } from '@/lib';

export const getCartTotalAmount = async (token: string) => {

  let userCart = await prisma.cart.findFirst({
    where: {
      token,
    },
    include: {
      items: {
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          productOption: {
            include: {
              product: true,
            },
          },
          ingredients: true,
        },
      },
    },
  });

  if (!userCart) {
    return;
  }

  let totalAmount = userCart.items.reduce((sum, item) => {
    return sum + getCartItemTotalPrice(item);
  }, 0);

  return await prisma.cart.update({
    where: {
      id: userCart.id,
    },
    data: {
      totalAmount,
    },
    include: {
      items: {
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          productOption: {
            include: {
              product: true,
            },
          },
          ingredients: true,
        },
      },
    },
  });
};