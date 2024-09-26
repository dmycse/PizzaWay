import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { Header } from "@/components/layout";

import "./globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  variable: "--font-roboto",
  weight: ['400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: "Pizzas | PizzaWay",
  description: "Delicious Pizzas for takeaway and delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
