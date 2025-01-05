'use server';

import { prisma } from "@/prisma/prisma-client";
// import { OrderPaymentTemplate } from "@/components/shared/order";
// import { sendEmail } from "@/lib";
import { OrderStatus } from "@prisma/client";
// import { CartItemDTO } from "@/utils/cart.dto";

type PaymentDoneProps = {
  userCartId: number;
  orderId: number;
  paymentId: string;
};

/**
 * Marks the order as succeeded and clears the cart.
 * 
 * Getting data from SuccessOrder component -> @/app/(checkout)/orders/[id]/page.tsx
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
    // await sendEmail(
    //   order.email,
    //   'PizzaWay | Order #' + order.id,
    //   OrderPaymentTemplate({
    //     orderId: order.id,
    //     amount: order.sum,
    //     items: order?.items as unknown as CartItemDTO[],
    //   }),
    // );

    return order;

  } catch (err) {
    console.log('[PaymentDone] error', err);
  }
}