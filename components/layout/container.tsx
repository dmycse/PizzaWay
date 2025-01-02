import { ReactNode } from 'react';
import { cn } from '@/lib/utils';


type Props = {
    className?: string
    children: ReactNode
};


/**
 * Container component constrains its content to a maximum width.
 *
 * This component is useful for limiting the width of a page or section
 * to a reasonable maximum, while still allowing it to be responsive.
 *
 */
export const Container = ({className, children}: Props) => {

  return (
    <div className={ cn('container px-4 max-sm:px-2 mx-auto', className) }>
      {children}
    </div>
  );
};