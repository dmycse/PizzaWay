import { prisma } from '@/prisma/prisma-client';
import { getCartItemTotalPrice } from '@/lib';

/**
 * Finds a cart by token, calculates the total amount of all items in the cart,
 * updates the cart with the total amount and returns the updated cart.
 
 * @returns The updated cart with the total amount.
 */
export const getCartTotalAmount = async (token: string) => {
 
  const userCart = await prisma.cart.findFirst({
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

  const totalAmount = userCart.items.reduce((sum, item) => {
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