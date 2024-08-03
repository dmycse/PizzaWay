import { Roboto } from "next/font/google";
import "./globals.css";

import { Header } from "../components";
import { Footer } from "../components";

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ['400', '500', '700'] 
});

export const metadata = {
  title: "PizzaWay",
  description: "Greate Pizzas for takeaway and delivery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="h-screen flex flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
