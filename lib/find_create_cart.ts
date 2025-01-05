import { prisma } from '@/prisma/prisma-client';

/**
 * Finds a cart by token. If the cart is not found, it creates a new cart with the given token.
 */
export const findOrCreateCart = async (token: string) => {
  let userCart = await prisma.cart.findFirst({
    where: {
      token,
    },
  });

  if (!userCart) {
    userCart = await prisma.cart.create({
      data: {
        token,
      },
    });
  }

  return userCart;
};