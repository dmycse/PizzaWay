import { ReactNode } from "react";
import { Roboto } from "next/font/google";
import { Toaster } from 'react-hot-toast';

import "./globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  variable: "--font-roboto",
  weight: ['400', '500', '700', '900'],
});


export default function RootLayout(
  { children }: Readonly<{children: ReactNode}>
  ) {
    
  return (
    <html lang="en">
      <head>
        <link data-rh='true' rel="icon" href="/icons/favicon.ico" />
      </head>
      <body className={`${roboto.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
