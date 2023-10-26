import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Registration = () => {

  const dispatch = useDispatch();
  const [ isFormValid, setIsFormValid ] = useState(false);

  const [ input, setInput ] = useState({
    fullname: '',
    email: '',
    confirmedEmail: '',
    password: '',
    confirmedPassword: ''
  })

  const [ error, setError ] = useState({
    fullname: '',
    email: '',
    confirmedEmail: '', 
    password: '',
    confirmedPassword: ''
  })

  const onInputChange = e => {
    let { name, value } = e.target;
    setInput(last => ({
      ...last,
      [name]: value
    }));
    validateInput(e);
  }

  useEffect(() => {
    const noError = Object.values(error).every(err => err === '');
    const fieldFilled = Object.values(input).every(data => data !== '');
    setIsFormValid(noError && fieldFilled);
  },[input, error]);

  const validateInput = e => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    let { name, value } = e.target;
    setError(last => {
      const warningSign = { ...last, [name]: "" };

      switch (name) {
        case "fullname":
          if (value.length < 3) {
            warningSign[name] = "Fullname must be at least 3 characters";
          }
          break;
        case "email":
          if (!emailRegex.test(value)) {
            warningSign[name] = "Email invalid format";
          }
          break;
        case "confirmedEmail":
          if (value !== input.email) {
            warningSign[name] = "Email must match";
          }
          break;
        case "password":
          if (!passwordRegex.test(value)) {
            warningSign[name] = "Password minimum five characters, at least one letter and one number";
          }
          break;
        case "confirmedPassword":
          if (value !== input.password) {
            warningSign[name] = "Password must match";
          }
          break;

        default:
          break;
        }

        return warningSign;
    });
  }

  
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
                  name="fullname"
                  className="mt-1 block w-full rounded-md text-tmgrey placeholder-gray-200"
                  placeholder="Your Fullname"
                  onChange={onInputChange}
                  onBlur={validateInput}
                />
                {error.fullname && <span className="text-sm text-tmyellow tracking-tight block mt-1 leading-none">{error.fullname}</span>}
              </label>
              <label className="block">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  className="mt-1 block w-full rounded-md text-tmgrey placeholder-gray-200"
                  placeholder="Email Address"
                  onChange={onInputChange}
                  onBlur={validateInput}
                />
                {error.email && <span className="text-sm text-tmyellow tracking-tight block mt-1 leading-none">{error.email}</span>}
              </label>
              <label className="block">
                <span>Confirmed email</span>
                <input
                  type="email"
                  name="confirmedEmail"
                  className="mt-1 block w-full rounded-md text-tmgrey bg-slate-200 placeholder-gray-400"
                  placeholder="Confirmed Email"
                  onChange={onInputChange}
                  onBlur={validateInput}
                />
                {error.confirmedEmail && <span className="text-sm text-tmyellow tracking-tight block mt-1 leading-none">{error.confirmedEmail}</span>}
              </label>
              <label className="block">
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  className="mt-1 block w-full rounded-md text-tmgrey placeholder-gray-200"
                  placeholder="Password"
                  onChange={onInputChange}
                  onBlur={validateInput}
                />
                {error.password && <span className="text-sm text-tmyellow tracking-tight block mt-1 leading-none">{error.password}</span>}
              </label>
              <label className="block">
                <span>Confirmed password</span>
                <input
                  type="password"
                  name="confirmedPassword"
                  className="mt-1 block w-full rounded-md text-tmgrey bg-slate-200 placeholder-gray-400"
                  placeholder="Confirmed password"
                  onChange={onInputChange}
                  onBlur={validateInput}
                />
                {error.confirmedPassword && <span className="text-sm text-tmyellow tracking-tight block mt-1 leading-none">{error.confirmedPassword}</span>}
              </label>
              <button className="md:col-span-2 justify-self-center btn-primary mt-7 font-merriweather text-md disabled:opacity-50 disabled:cursor-default disabled:translate-y-0" disabled={!isFormValid}>
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
