import { Title, FilterCheckbox, RangeSlider, FilterCheckboxGroup } from '@/components/shared';
import { Input } from '@/components/ui';
import { ingradients } from '@/data';
import { cn } from '@/lib/utils';

type FiltersProps = {
    className?: string
};


export let Filters = ({className}: FiltersProps) => {

  return (
    <aside className={ cn('mt-10', className) }>
      <Title text='Filters' size='sm' className='mb-5 font-bold'/>
      
      <section className='flex flex-col gap-4'>
        <FilterCheckbox label="Collect" value="1"  />
        <FilterCheckbox label="New" value="2"  />
      </section>

      <section className="mt-5 py-6 pb-7 border-y border-y-neutral-100">
        <p className="mb-3 font-bold">Price from and to</p>
        <div className="mb-5 flex gap-3">
          <Input type="number" min={5} max={100} placeholder='5' defaultValue={5} step={5}/>
          <Input type="number" min={5} max={100} placeholder='100' step={5} />
        </div>
        <RangeSlider min={0} max={100} step={5} value={[0, 100]}/>
      </section>

      <FilterCheckboxGroup
        className='mt-5' 
        title='Ingradients' 
        // defaultItems={ingradients}
        items={ingradients}
      />
    </aside>
  );
};