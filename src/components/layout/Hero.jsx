import Image from 'next/image';
import { CustomButton } from '@/components';
import RightUp from '../icons/RightUp';

export default function Hero() {
  return (
    <section>
      <div className="wrapper grid grid-cols-1 md:grid-cols-2">
        <div className='pt-10 md:pt-20 pb-10'>
          <h1 className='lg:max-w-[95%] text-5xl lg:text-7xl max-md:text-4xl text-gray-800 font-bold lg:leading-[80px]'>
            Everything seems better with a <span className='text-orange-500'>Pizza</span>
          </h1>
          <p className='my-6 md:mb-10 max-w-[90%] text-3xl max-lg:text-2xl max-md:text-xl text-gray-600'>
            Pizza is a delicious piece of your life that makes your day special
          </p>
          <div className='md:pb-5 flex items-center gap-4 text-2xl max-sm:text-lg'>
            <CustomButton btnStyles='custom__btn flex items-center gap-2'>
              Taste Now
              <RightUp />
            </CustomButton>
            <CustomButton btnStyles='text-gray-400 hover:text-secondary hover:font-semibold'>
              Learn more
            </CustomButton>
          </div>
        </div>
        <Image 
          src='/assets/hero_pizza.png' 
          alt='pizza'
          width={600}
          height={400}
          className='ml-2 max-md:w-[480px] max-md:h-[440px] max-sm:max-w-[380px] max-sm:max-h-[360px] self-center justify-self-center'
        />
      </div>
    </section>
  )
}
