import { ReactNode } from 'react';
import { Title } from '@/components/layout';
import { cn } from '@/lib/utils';

type CheckoutWhiteBlockProps = {
  title?: string;
  endAdornment?: ReactNode;
  className?: string;
  contentClassName?: string;
  children: ReactNode;
};

/**
 * CheckoutWhiteBlock displays a white box with a title and some content.
 *
 * The box has a bottom border and a slight rounded corner.
 * The title is displayed on the top left of the box.
 * The content is displayed below the title.
 *
 * You can pass a title, some content and some additional nodes to be displayed on the top right of the box.
 *
 * @example
 * <CheckoutWhiteBlock title="Shipping details" endAdornment={<Button>Change</Button>}>
 *   <p>Your shipping address is:</p>
 *   <p>John Doe</p>
 *   <p>john@example.com</p>
 *   <p>Random Street 123</p>
 *   <p>12345, City, Country</p>
 * </CheckoutWhiteBlock>
 */
export const CheckoutWhiteBlock =({
    title,
    className,
    contentClassName,
    endAdornment,
    children,
  }: CheckoutWhiteBlockProps) => {
  
    return (
    <div className={cn('bg-white rounded-2xl', className)}>
      {title && (
        <div className="flex items-center justify-between p-5 px-7 border-b border-gray-100">
          <Title text={title} size="sm" className="font-bold" />
          {endAdornment}
        </div>
      )}
      <div className={cn('px-5 py-4', contentClassName)}>{children}</div>
    </div>
  );
};