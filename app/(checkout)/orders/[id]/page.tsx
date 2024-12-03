import { notFound } from 'next/navigation';
import { paymentDone } from '@/actions/payment_done';
import Link from 'next/link';
type SuccessOrderProps = {
  params: {
    id: string;
  },
  searchParams: { 
    userCartId: string;
    payment_intent: string;
  }  
};

/**
 * Shows a success page for a paid order.
 * 
 * This component is called from OrderProcessing component -> /components/shared/order/order-processing.tsx
 * when a user successfully pays for an order.
 * 
 * When the page is loaded, it calls the {@link paymentDone} action with the order id and payment id.
 * If the action returns a valid order, it shows the order details has been updated in DB.
 * If the action does not return a valid order, it shows a 404 page.
 * 
 * @param {SuccessOrderProps} props - The props of the component.
 * @param {string} props.params.id - The id of the order.
 * @param {string} props.searchParams.userCartId - The id of the user's cart.
 * @param {string} props.searchParams.payment_intent - The id of the payment.
 * 
 * @returns A JSX element for the success page.
 */
export default async function SuccessOrder({ 
  params: { id },
  searchParams: { userCartId, payment_intent }
  }: SuccessOrderProps) {

  let order = await paymentDone({ 
    userCartId: +userCartId, 
    orderId: +id, 
    paymentId: payment_intent 
  });

  if (!order) {
    return notFound();
  }
  
  return (
    <main className="m-10 p-6 max-w-2xl mx-auto text-brand text-center border border-current rounded-md ">
      <div className="mb-5">
        <h1 className="mb-2 text-primary text-4xl font-extrabold ">Thank you!</h1>
        <h2 className="mb-4 text-2xl">You successfully paid €{order.sum} for your order #{order.id}</h2>
        <h2 className="mb-4 text-xl">Your order will be delivered at your address soon.</h2>
        <div>
          Would like to make a new order? {' '}
          <Link href="/" className='text-primary font-bold'>Click here</Link>
        </div>
      </div>
    </main>
  );
}