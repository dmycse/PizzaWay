import { Container } from '@/components/shared';
import { Categories,  SortPopup} from '@/components/layout';

import { cn } from '@/lib/utils';

type TopBarProps = {
    className?: string

};


export let TopBar = ({className}: TopBarProps) => {

  return (
    <div className={ cn('py-5 sticky top-0 z-10 bg-white shadow-lg', className) }>
      <Container className='flex items-center justify-between'>
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};