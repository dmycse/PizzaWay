'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import toast from 'react-hot-toast';

import { Container } from '@/components/layout';
import { AuthModal, CartButton, ProfileButton, SearchInput } from '@/components/shared';
import { cn } from '@/lib/utils';


type HeaderProps = {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
};

/**
 * Componrent: the App header, containing the logo, search input, sign in button, and cart button.
 * 
 * Parent component: Home -> app/(main)/page.tsx
 */
export const Header = ({ hasSearch = true, hasCart = true, className }: HeaderProps) => {

  const router = useRouter();
  const searchParams = useSearchParams();

  const [openAuthModal, setOpenAuthModal] = useState(false);

  useEffect(() => {
    let toastMessage = '';

    if (searchParams.has('verified')) {
      toastMessage = 'Email verified';
      toast.success(toastMessage, {
        duration: 3000,
      });
    }

    if (toastMessage) {
      setTimeout(() => {
        router.replace('/');
      }, 1000);
    }
  }, []);
  

  return (
    <header className={ cn('border-b', className) }>
      <Container className='py-8 flex justify-between items-center'>

        <div className=''>
          <Link href="/" className="text-primary flex items-center gap-1 font-[900] text-4xl">
            <Image src='/brand/logo.webp' alt='logo' width={40} height={40} className='w-auto'/>
            <span>
              Pizza
              <span className="text-brand">Way</span>
            </span>
          </Link>
        </div>

        {hasSearch && 
          <div className='mx-10 flex-1'>
            <SearchInput />
          </div>
        }

        <div className='flex items-center gap-3'>
          <AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)} />
          
          <ProfileButton 
            onClickSignIn={() => setOpenAuthModal(true)}
          />
          { hasCart && <CartButton /> }
        </div>
        
      </Container>
    </header>
  );
};