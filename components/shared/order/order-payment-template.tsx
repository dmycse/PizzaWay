type OrderPaymentTemplateProps = {
  orderId: number;
  amount: number;
};

/**
 * Component: an email content which is sent to the user after successfully payment for user's order.
 *
 * Parent: successOrder -> /app/(checkout)/orders/[id]/page.tsx
 * @param {Object} props
 * @prop {number} orderId - the ID of the order.
 * @prop {number} amount - the total amount paid for the order.
 *
 * @returns {JSX.Element} The order payment template component.
 * @example
 * <OrderPaymentTemplate orderId={1} amount={25.90} />
 */
export const OrderPaymentTemplate = ({ orderId, amount }: OrderPaymentTemplateProps) => (
  <div>
    <h1>Order #{orderId}</h1>

    <p>
      You've just paid <b>€{amount}</b> for your order. Thank you!
      {/* <a href={paymentUrl}>this link</a> to make the payment. */}
    </p>
    <p>Your order will be delivered to your doorstep soon.</p>
    <a href={process.env.NEXT_PUBLIC_URL}>PizzaWay | Pizzas&More</a>.
  </div>
);