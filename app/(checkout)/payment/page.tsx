"use client";

import { OrderProcessing } from "@/components/shared/order";
import { orderAmountConvert } from "@/lib";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

/**
 * Renders the payment page for submitting an order.
 *
 * This page initializes the Stripe Elements component with the necessary
 * payment details for processing. It displays the order submission form
 * using the `OrderProcessing` component.
 * 
 * This component is called from the CheckoutPpage -> /app/(checkout)/checkout/page.tsx
 */
export default function PaymentPage({ 
    searchParams: { userCartId, orderId, amount } 
  }: { 
    searchParams: { userCartId: string, orderId: string, amount: string } 
  }) {
  
  return (
    <main className="m-4 p-3 max-w-3xl mx-auto max-h-dvh text-primary text-center rounded-md bg-white border-2 border-brand">
      <div className="mb-5">
        <h1 className="mb-2 text-4xl font-bold ">Submit your order</h1>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          locale: "en",
          amount: orderAmountConvert(+amount),
          currency: "eur",
        }}
      >
        <OrderProcessing 
          userCartId={+userCartId} 
          orderId={+orderId} 
          amount={+amount} 
        />
      </Elements>
    </main>
  );
}