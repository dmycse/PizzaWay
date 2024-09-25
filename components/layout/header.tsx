import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui';

import { cn } from '@/lib/utils';
import { ArrowRight, ShoppingBasket, UserPen } from 'lucide-react';

type Props = {
    className?: string
    children?: ReactNode
};


export let Header = ({className, children}: Props) => {

  return (
    <header className={ cn('border-b', className) }>
      <Container className='py-8 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Image src='/brand/logo.webp' alt='' width={30} height={30}/>
          <Link href="/" className="text-primary font-[900] text-4xl">
            Pizza<span className="text-brand">Way</span>
          </Link>
        </div>

        <div className='flex-1 bg-gray-200'>
          Search
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
              <ArrowRight size={20} className='absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0' />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};