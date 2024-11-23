import { ReactNode } from 'react';
import { cn } from '@/lib/utils';


type Props = {
    className?: string
    children: ReactNode
};


export const Container = ({className, children}: Props) => {

  return (
    <div className={ cn('container px-4 max-sm:px-2 mx-auto', className) }>
      {children}
    </div>
  );
};