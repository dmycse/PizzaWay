import Link from 'next/link';
import { SignupForm } from '@/components';


export default function SignUp() {

  return (
    <section className='mt-28 flex-1'>
      <div className="wrapper">
        <h1 className='mb-2 text-center text-primary text-3xl font-semibold'>SignUp</h1>
        <p className='mb-8 text-center text-gray-500'>Sign up to get access to the administrator's dasboard</p>
        <SignupForm />
        <p className='p-0 text-center text-md text-gray-500'>
          Already have an account?
          {' '}
          <Link href="/login">
            <span className='text-xl font-semibold hover:text-primary'>Login</span>
          </Link>
        </p>
      </div>
    </section>
  )
}
