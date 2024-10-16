import Image from 'next/image';
import Link from 'next/link';

import { Container, SearchInput } from '@/components/shared';
import { Button } from '@/components/ui';

import { cn } from '@/lib/utils';
import { ArrowRight, ShoppingBasket, UserPen } from 'lucide-react';


type HeaderProps = {
    className?: string
};


export let Header = ({className }: HeaderProps) => {

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
          <div>
            <Button variant='custom' className='group relative'>
              <b>&euro; 100</b>
              <span className='mx-3 h-full w-[1px] bg-white/30' />
              <div className='flex items-center gap-2 transition duration-300 group-hover:opacity-0'>
                <ShoppingBasket strokeWidth={2} size={18} className='relative' />
                <b>3</b>
              </div>
              <ArrowRight 
                size={20} 
                className='absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0' 
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};