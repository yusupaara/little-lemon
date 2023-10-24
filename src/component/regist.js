import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';

const Registration = () => {

  const dispatch = useDispatch();
  const [ registerForm, setRegisterForm ] = useState({
    name: '',
    email: '',
    password: ''
  })

  // const 

  
  return (
    <>
      <div className="bg-tmgrey px-0 py-12 h-screen">
        <div className="container py-5 px-12 my-0 mx-auto space-y-7 max-w-7xl sm:space-y-8 md:space-y-16 lg:mt-6">
          <div className="text-3xl font-bold leading-none lg:text-4xl xl:text-5xl text-tmyellow font-merriweather text-center">
            Register
          </div>

          <div className="grid text-white justify-center text-lg">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-1 w-screen max-w-lg md:max-w-2xl">
              <label className="block col-span-1 md:col-span-2">
                <span>Fullname</span>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md text-tmgrey placeholder-gray-200"
                  placeholder="Your Fullname"
                />
              </label>
              <label className="block">
                <span>Email</span>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md text-tmgrey placeholder-gray-200"
                  placeholder="Email Address"
                />
              </label>
              <label className="block">
                <span>Confirmed email</span>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md text-tmgrey bg-slate-200 placeholder-gray-400"
                  placeholder="Confirmed Email"
                />
              </label>
              <label className="block">
                <span>Password</span>
                <input
                  type="password"
                  className="mt-1 block w-full rounded-md text-tmgrey placeholder-gray-200"
                  placeholder="Password"
                />
              </label>
              <label className="block">
                <span>Confirmed password</span>
                <input
                  type="password"
                  className="mt-1 block w-full rounded-md text-tmgrey bg-slate-200 placeholder-gray-400"
                  placeholder="Confirmed password"
                />
              </label>
              <button className="md:col-span-2 justify-self-center btn-primary mt-7 font-merriweather text-md">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
