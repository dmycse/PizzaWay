import { NextRequest, NextResponse } from "next/server";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  /**
   * Handles a POST request to create a new Payment Intent (Stripe API).
   *
   * Request body must contain the amount of the payment in cents.
   *
   * Returns a JSON response with the Payment Intent's ID and client secret.
   * If an error occurs, returns a JSON response with the error message and a 500 status.
   */
export async function POST(req: NextRequest) {
  try {
    const { amount } = await req.json();
   
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "eur",
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({
      id: paymentIntent.id,
      clientSecret: paymentIntent.client_secret
     });

  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}