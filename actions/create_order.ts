'use server';

import { cookies } from "next/headers";
import { prisma } from "@/prisma/prisma-client";
import { OrderStatus } from "@prisma/client";
import { CheckoutFormValues } from "@/components/zod/checkout-form-schema";

/**
 * Creates an order based on the provided checkout form data.
 *
 * Getting data from CheckoutPage component -> @/app/(checkout)/checkout/page.tsx
 * @param data - The checkout form values containing user's information and order details.
 * @returns A URL for the payment page if the order is successfully created.
 * @throws Will throw an error if the cart token is not found, the cart is not found, or the cart is empty.
 */
export async function createOrder(data: CheckoutFormValues) {
  
  try {
    const cookieStore = cookies();
    const cartToken = cookieStore.get('cartToken')?.value;

    if (!cartToken) {
      throw new Error('Cart token not found');
    }

    /* Find the user's cart by token */
    const userCart = await prisma.cart.findFirst({
      where: {
        token: cartToken,
      },
      include: {
        user: true,
        items: {
          include: {
            ingredients: true,
            productOption: {
              include: {
                product: true,
              }
            }
          }
        }
      },
    });

    /* If a cart is not found, throw an error */
    if (!userCart) {
      throw new Error('Cart not found');
    }

    /* If the cart is empty, throw an error */
    if (userCart?.totalAmount === 0) {
      throw new Error('Cart is empty');
    }
    
    /* Create an order */
    const order = await prisma.order.create({
      data: {
        token: cartToken,
        fullName: data.firstName + ' ' + data.surName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        comment: data.comment,
        sum: data.total,
        status: OrderStatus.PENDING,
        items: userCart.items,
      },
    });

    if (!order) {
      throw new Error('Order not created');
    }

    const paymentUrl = `/payment?userCartId=${userCart.id}&orderId=${order.id}&amount=${order.sum}`;

    return paymentUrl;
  } catch (err) {
    console.log('[CreateOrder] error', err);
  }
}