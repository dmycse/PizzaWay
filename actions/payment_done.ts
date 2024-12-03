'use server';

import { prisma } from "@/prisma/prisma-client";
import { OrderPaymentTemplate } from "@/components/shared/order";
import { sendEmail } from "@/lib";
import { OrderStatus } from "@prisma/client";

type PaymentDoneProps = {
  userCartId: number;
  orderId: number;
  paymentId: string;
};

/**
 * Marks the order as succeeded and clears the cart.
 * 
 * Getting data from SuccessOrder component -> @/app/(checkout)/orders/[id]/page.tsx
 * @param data The data about the order and the cart.
 * @returns The order if it was successfully updated.
 * @throws If the order is not found.
 */
export async function paymentDone(data: PaymentDoneProps) {

  try {
    /* Clear the cart */
    await prisma.cart.update({
      where: {
        id: data.userCartId,
      },
      data: {
        totalAmount: 0,
      },
    });

    await prisma.cartItem.deleteMany({
      where: {
        cartId: data.userCartId,
      },
    });

    /* Update the order */
    const order = await prisma.order.update({
      where: {
        id: data.orderId,
      },
      data: {
        paymentId: data.paymentId,
        status: OrderStatus.SUCCEEDED,
      },
    });

    if (!order) {
      throw new Error('Order not updated');
    }
    
    /* Send a payment confirmation to user's email */
    await sendEmail(
      order.email,
      'PizzaWay | Order #' + order.id,
      OrderPaymentTemplate({
        orderId: order.id,
        amount: order.sum,
      }),
    );

    return order;

  } catch (err) {
    console.log('[PaymentDone] error', err);
  }
}