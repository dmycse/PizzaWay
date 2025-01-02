'use client';

import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';
import NextTopLoader from 'nextjs-toploader';

/**
 * Providers wraps the entire app with all the necessary providers.
 *
 * SessionProvider is used for authentication.
 * Toaster is used for toast notifications.
 * NextTopLoader is used to show a loading bar on the top of the page.
 *
 * Used in RootLayout -> app/layout.tsx
 */
export const Providers = ({ children }: {children: ReactNode}) => {
  return (
    <>
      <SessionProvider>
        {children}
      </SessionProvider>
      <Toaster />
      <NextTopLoader initialPosition={0.2} color="hsl(140.4 71.8% 29.2%)" shadow="false"/>
    </>
  );
};