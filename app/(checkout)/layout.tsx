import { ReactNode, Suspense } from 'react';
import { Container, Header } from '@/components/layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PizzaWay | The Cart',
  description: 'Checkout your order at PizzaWay. We deliver to your doorsteps with fresh and delish pizzas.',
};

export default function CheckoutLayout({ children }: { children: ReactNode }) {

  return (
    <main className="min-h-screen bg-[#F4F1EE]">
      <Container>
        <Suspense>
          <Header hasSearch={false} hasCart={false} className="border-b-gray-200" />
        </Suspense>
        {children}
      </Container>
    </main>
  );
}