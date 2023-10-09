import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'

export default function LoginButton() {
  return (
    <div className="w-full max-w-sm px-4">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? 'text-white bg-tmgrey' : 'ring-tmgrey text-tmgrey ring-1 bg-white'}
                group inline-flex items-center rounded-md px-3 py-2 text-base font-medium`}
            >
              <span>Login</span>
              <ChevronDownIcon
                className={`${open ? 'text-white' : 'text-tmgrey'}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-50">
                  <div className="relative grid gap-8 bg-white p-7">
                    <div className="grid grid-cols-1 gap-1">
                      <label className="block">
                        <span>Email address</span>
                        <input type="email" className="mt-1 block w-full rounded-md text-tmgrey placeholder-gray-200" placeholder="dummy@gmail.com" />
                      </label>
                      <label className="block">
                        <span>Password</span>
                        <input type="password" className="mt-1 block w-full rounded-md text-tmgrey placeholder-gray-200" placeholder="dummypassword" />
                      </label>
                      <button className="btn-secondary mt-5">Login</button>
                    </div>
                    
                  </div>
                  <div className="bg-gray-100 p-4">
                    <div
                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out"
                    >
                      <span className="flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-500 hover:font-bold hover:text-tmgrey cursor-pointer">
                          Not a member? Signup Now
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
