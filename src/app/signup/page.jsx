'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SignUp() {

  let [formValue, setFormValue] = useState({email: "", password: ""});

  let handleInput = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    })
  };


  let handleFormSubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('api/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formValue)
    });

    let newUser = await response.json();
    
    setFormValue({email: "", password: ""});

    if (newUser._id) {
      console.log("Sign Up was successful");
    }
    else {
      console.warn("Sign Up was unsuccessful");
    }

  };


  return (
    <section className='mt-28 flex-1'>
      <div className="wrapper">
        <h1 className='mb-2 text-center text-primary text-3xl font-semibold'>SignUp</h1>
        <p className='mb-8 text-center text-gray-500'>Sign up to get access to the administrator's dasboard</p>
        <form
          className='mb-10 max-w-xl mx-auto' 
          autoComplete='new-password'
          onSubmit={handleFormSubmit}
        >
          <input 
            type="email" 
            name="email" 
            placeholder='Email' 
            className='formInput' 
            autoComplete='new-password'
            value={formValue.email}
            onChange={handleInput} 
          />
          <input 
            type="password" 
            name="password" 
            placeholder='Password' 
            className='formInput' 
            autoComplete='new-password'
            value={formValue.password}
            onChange={handleInput}
          />
          <button 
            type='submit' 
            className='custom__btn w-full text-xl disabled:bg-gray-400 disabled:border-transparent disabled:hover:text-white' 
            disabled={formValue.email === '' || formValue.password.length < 5}
          >
            Sign Up
          </button>
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
