
import { cn } from '@/lib/utils';
import { Title, FilterCheckbox } from '@/components/shared';

type FiltersProps = {
    className?: string
};


export let Filters = ({className}: FiltersProps) => {

  return (
    <div className={ cn('mt-10', className) }>
      <Title text='Filters' size='sm' className='mb-5 font-bold'/>
      <div className='flex flex-col gap-4'>
        <FilterCheckbox text="Collect" value="1"  />
        <FilterCheckbox text="New" value="2"  />
      </div>
    </div>
  );
};