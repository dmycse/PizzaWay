import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: "--font-nunito",
  weight: ['400', '500', '600', '700', '800', '900'],
});


export const metadata: Metadata = {
  title: "Pizzas | Pizza Way App",
  description: "Delicious Pizzas just for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} antialiased`}
      >
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
