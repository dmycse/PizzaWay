import { Container, Categories,  SortPopup} from '@/components/layout';
import { Category } from '@prisma/client';

import { cn } from '@/lib/utils';

type TopBarProps = {
    categories: Category[];
    className?: string;
};


export let TopBar = ({ categories, className}: TopBarProps) => {

  return (
    <div className={ cn('py-5 sticky top-0 z-10 bg-white shadow-lg', className) }>
      <Container className='flex items-center justify-between'>
        <Categories categories={categories} />
        <SortPopup />
      </Container>
    </div>
  );
};