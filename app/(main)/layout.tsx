import { ReactNode, Suspense } from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout";


export const metadata: Metadata = {
  title: "Pizzas&More | PizzaWay",
  description: "Delicious Pizzas for takeaway and delivery.",
};

export default function MainLayout(
  { children, modal }: Readonly<{
    children: ReactNode,
    modal: ReactNode
  }>) {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="min-h-screen">
        {children}
        {modal}
      </main>
    </>
  );
}
