import React from "react";
import { useState } from "react";
import { Dialog} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#"},
  { name: "About", href: "#"},
  { name: "Menu", href: "#"},
  { name: "Reservations", href: "#"},
  { name: "Order Online", href: "#"},
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
    <div className="container px-6 py-6 max-w-7xl mr-auto mb-0 ml-auto lg:px-8">
      <nav className="flex item-center justify-between">
        <div className="flex lg:flex-1 lg:justify-center">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="h-8" src="https://media.discordapp.net/attachments/983087974336036907/1082398686241366147/path847.png" alt="Little Lemon" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="inline-flex items-center justify-center rounded-md -m-2.5 p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-tmyellow">
                {item.name}
              </a>
            ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <a href="#" className="text-sm font-semibold leading-6 text-tmyellow hover:text-tmgrey">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
        </div>
      </nav>
      {/* Menu Wrapper */}
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img className="h-8" src="https://media.discordapp.net/attachments/983087974336036907/1082398685687709726/path849.png" alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
    </div>
    </>
  )
}

export default Navbar;