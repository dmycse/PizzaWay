import { Container, Categories, SortPopup} from '@/components/layout';
import { Category } from '@prisma/client';

import { cn } from '@/lib/utils';

type TopBarProps = {
    categories: Category[];
    className?: string;
};


/**
 * Component: the top bar of the application, featuring a list of categories and a sort popup.
 * 
 * Parent component: Home ->app/(main)/page.tsx
 * @param {TopBarProps} props
 * @prop {Category[]} [categories] - the list of categories to display.
 * @prop {string} [className] - additional CSS styles to apply to the component.
 * 
 * @returns {JSX.Element} The rendered top bar.
 */
export const TopBar = ({ categories, className}: TopBarProps) => {

  return (
    <div className={ cn('py-5 sticky top-0 z-10 bg-white shadow-lg', className) }>
      <Container className='flex items-center justify-between'>
        <Categories categories={categories} />
        <SortPopup />
      </Container>
    </div>
  );
};