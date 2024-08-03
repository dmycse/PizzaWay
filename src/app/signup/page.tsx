import Image from 'next/image';

export default function SignUp() {
  return (
    <section className='mt-28 flex-1'>
      <div className="wrapper">
        <h1 className='mb-2 text-center text-primary text-3xl font-semibold'>SignUp</h1>
        <p className='mb-8 text-center text-gray-500'>Sign up to get access to the administrator's dasboard</p>
        <form className='max-w-xl mx-auto' autoComplete='new-password'>
          <input type="email" name="email" placeholder='Email' className='formInput' autoComplete='new-password' />
          <input type="password" name="pass" placeholder='Password' className='formInput' autoComplete='new-password' />
          <button type='submit' className='custom__btn w-full text-xl'>Sign Up</button>
          <p className='my-5 text-center text-gray-500 text-xl'>or</p>
          <button 
            className='w-full p-2 flex gap-4 justify-center items-center text-xl text-gray-500
                       bg-white border border-primary rounded-md hover:text-primary'
          >
            <Image 
              src={'/assets/icons/google.webp'}
              alt='gogle_icon'
              width={32}
              height={32}
            />
            Sign up with Google
          </button>
        </form>
      </div>
    </section>
  )
}
