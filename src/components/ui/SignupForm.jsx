'use client';

import { useState } from 'react';
import Image from 'next/image';


export default function SignupForm() {

  let [formValue, setFormValue] = useState({email: "", password: ""});
  let [userCreated, setUserCreated] = useState(false);

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

    console.log(response)
    
    if (!response.ok) {
      console.warn("Sign Up was unsuccessful");
    }
    else {
      setFormValue({email: "", password: ""});
      console.log("Sign Up was successful");
    }

  };

  // let handleFormSubmit = async (e) => {
  //   e.preventDefault();

  //   let response = await fetch('api/signup', {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //       email: e.target.email.value,
  //       password: e.target.password.value
  //     })
  //   });

  //   console.log(response)
    
  //   if (!response.ok) {
  //     console.warn("Sign Up was unsuccessful");
  //   }
  //   else {
  //     e.target.reset();
  //     console.log("Sign Up was successful");
  //   }
  // };


  return (
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
        autoComplete='new-email'
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
        disabled={formValue.email.length < 7 || formValue.password.length < 5}
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
  )
}
