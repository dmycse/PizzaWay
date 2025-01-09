import { CartItemDTO } from "@/utils/cart.dto";

type OrderPaymentTemplateProps = {
  orderId: number;
  amount: number;
  items: CartItemDTO[];
};

/**
 * Component: an email content which is sent to the user after successfully payment for user's order.
 *
 * Used in: payment_done.ts -> actions/payment_done.ts
 * 
 * @example
 * <OrderPaymentTemplate orderId={1} amount={25.90} />
 */
export const OrderPaymentTemplate = ({ orderId, amount, items }: OrderPaymentTemplateProps) => (
  <div>
    <h1>Order #{orderId}</h1>
    <p>
      You have just paid <b>€{amount}</b> for your order. Thank you!
      {/* <a href={paymentUrl}>this link</a> to make the payment. */}
    </p>
    <hr />
    <p>Your order:</p>
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.productOption.product.name} x {item.quantity} ={' '}
          €{item.productOption.price * item.quantity}
        </li>
      ))}
    </ul>
    <p> will be delivered to your doorstep soon.</p>
    <br />
    <p>Best regards, </p>
    <a href={process.env.NEXT_PUBLIC_URL}>PizzaWay | Pizzas&More</a>.
  </div>
);