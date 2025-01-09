"use client";

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { orderAmountConvert } from "@/lib";


type OrderProcessingProps = {
  userCartId: number;
  orderId: number;
  amount: number;
};

/**
* OrderProcessing renders the order submission form using Stripe Elements.
*
* OrderProcessing is called from the PaymentPage -> /app/(checkout)/payment/page.tsx
*
* It fetches a Payment Intent from the server and uses it to render the
* Stripe Elements component.
*/

export const OrderProcessing = ({ userCartId, orderId, amount }: OrderProcessingProps) => {

  const stripe = useStripe();
  const elements = useElements();

  const [paymentData, setPaymentData] = useState({
    paymentId: "",
    clientSecret: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: orderAmountConvert(amount) }),
    })
      .then(res => res.json())
      .then(data => {
        setPaymentData({
          paymentId: data.id, 
          clientSecret: data.clientSecret
        });
      });
  }, [amount]);
  
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }
    
    setLoading(true);

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret: paymentData.clientSecret,
      confirmParams: {
        // return_url: `${process.env.NEXT_PUBLIC_URL}/orders/${orderId}?userCartId=${userCartId}`,
        return_url: `https://pizza-way.vercel.app/orders/${orderId}?userCartId=${userCartId}`,
      },
    });
    
    if (error) {
      // This point is only reached if there's an immediate error when
      // confirming the payment. Show the error to a customer (for example, payment details incomplete)
      setErrorMessage(error.message);
    } else {
      // The payment UI automatically closes with a success animation.
      // A customer is redirected to `return_url`.
      setErrorMessage("An unexpected error occurred.");
    }

    setLoading(false);
    // router.push(`/order/${orderId}?userCartId=${userCartId}&payment_intent=${paymentData.paymentId}`);
  };

  if (!paymentData.clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-2 bg-white rounded-md">
      {paymentData.clientSecret && <PaymentElement />}

      {errorMessage && <div>{errorMessage}</div>}

      <button
        disabled={!stripe || loading}
        className="mt-3 p-2 w-full text-brand text-xl font-bold bg-white rounded border border-current
                  hover:bg-brand hover:text-white disabled:opacity-50 disabled:animate-pulse"
      >
        {!loading ? `Pay €${amount.toFixed(2)}` : "Processing..."}
      </button>
    </form>
  );
};
