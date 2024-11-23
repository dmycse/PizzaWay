import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/layout';
import { CartButton, SearchInput } from '@/components/shared';
import { Button } from '@/components/ui';
import { UserPen } from 'lucide-react';

import { cn } from '@/lib/utils';


type HeaderProps = {
    className?: string
};

/**
 * Componrent: the App header, containing the logo, search input, sign in button, and cart button.
 * 
 * Parent component: Home -> app/(main)/page.tsx
 * @param {HeaderProps} props
 * @prop  {string} [className] - additional CSS styles to apply to the header
 * 
 * @returns {JSX.Element} The header component.
 */
export const Header = ({className }: HeaderProps) => {

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

        <div className='mx-10 flex-1'>
          <SearchInput />
        </div>

        <div className='flex items-center gap-3'>
          <Button variant='outline' className='space-x-2'>
            <UserPen size={15}/>
            <span>Sign in</span>
          </Button>
          <CartButton />
        </div>
        
      </Container>
    </header>
  );
};