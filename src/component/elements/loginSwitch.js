import { Popover, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  UserCircleIcon,
  PowerIcon,
} from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logout, selectUser, selectIsLoggedIn } from "../redux/auth";
import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (e) => {
    let { type, value } = e.target;
    setLoginForm((last) => ({
      ...last,
      [type]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginForm));
    setLoginForm({
      email: "",
      password: "",
    });
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="w-full max-w-sm px-4">
      {isLoggedIn ? (
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                ${
                  open
                    ? "text-white bg-tmgrey"
                    : "ring-tmgrey text-tmgrey ring-1 bg-white"
                }
                group inline-flex items-center rounded-md px-3 py-2 focus:outline-none text-base font-medium space-x-3`}
              >
                <UserCircleIcon
                  className={`${open ? "text-white" : "text-tmgrey"}
                  ml-1 h-5 w-5 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                  aria-hidden="true"
                />
                <span className="max-w-[100px] truncate">{user}</span>
              </Popover.Button>
              <Transition
                as={Fragment}
              >
                <Popover.Panel className="absolute z-20 mt-3 w-full max-w-sm transform px-4 sm:px-0">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-50">
                    <div className="bg-gray-100 p-1">
                      <div className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out">
                        <span className="flex items-center justify-center">

                          <Popover.Button
                            className="flex flex-row space-x-2 text-sm font-medium text-gray-500 hover:font-bold hover:text-tmgrey cursor-pointer"
                            onClick={() => {
                              handleLogout();
                              navigate("/");
                            }}
                          >
                            <PowerIcon
                              className="text-red-500 h-5 w-5"
                              aria-hidden="true"
                            />
                            <span>Logout</span>
                          </Popover.Button>

                        </span>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      ) : (
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                ${
                  open
                    ? "text-white bg-tmgrey"
                    : "ring-tmgrey text-tmgrey ring-1 bg-white"
                }
                group inline-flex items-center rounded-md px-3 py-2 focus:outline-none text-base font-medium`}
              >
                <span>Login</span>
                <ChevronDownIcon
                  className={`${open ? "text-white" : "text-tmgrey"}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
              >
                <Popover.Panel className="absolute left-1 z-20 mt-3 w-screen max-w-sm -translate-x-3/4 transform px-4 sm:px-0">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-50">
                    <div className="relative grid gap-8 bg-white p-7">
                      <form
                        className="grid grid-cols-1 gap-1"
                        onSubmit={handleSubmit}
                      >
                        <label className="block">
                          <span>Email address</span>
                          <input
                            type="email"
                            className="mt-1 block w-full rounded-md text-tmgrey placeholder-gray-200"
                            placeholder="dummy@gmail.com"
                            onChange={onInputChange}
                          />
                        </label>
                        <label className="block">
                          <span>Password</span>
                          <input
                            type="password"
                            className="mt-1 block w-full rounded-md text-tmgrey placeholder-gray-200"
                            placeholder="dummypassword"
                            onChange={onInputChange}
                          />
                        </label>
                        <button type="submit" className="btn-secondary mt-5">
                          Login
                        </button>
                      </form>
                    </div>
                    <div className="bg-gray-100 p-4">
                      <div className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out">
                        <span className="flex items-center justify-center">
                          <Popover.Button
                            className="text-sm font-medium text-gray-500 hover:font-bold hover:text-tmgrey cursor-pointer"
                            onClick={() => navigate("/register")}
                          >
                            Not a member? Signup Now
                          </Popover.Button>
                        </span>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      )}
    </div>
  );
}
