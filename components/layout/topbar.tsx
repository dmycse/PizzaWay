import { Container } from '@/components/shared';
import { Categories,  SortPopup} from '@/components/layout';

import { cn } from '@/lib/utils';

type TopBarProps = {
    className?: string

};


export let TopBar = ({className}: TopBarProps) => {

  return (
    <div className={ cn('py-5 stikcy top-0 z-10 bg-white', className) }>
      <Container className='px-0 flex items-center justify-between'>
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};