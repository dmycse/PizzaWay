import { ReactNode } from "react";
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
      <Header />
      <main className="min-h-screen">
        {children}
        {modal}
      </main>
    </>
  );
}
