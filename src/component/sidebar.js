import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
    { name: "Home", href: "/"},
    { name: "About", href: "/about"},
    { name: "Menu", href: "/menu"},
    { name: "Order Online", href: "/order"},
    { name: "Login", href: "/login"},
];

export default function Sidebar({ isopen, closemenu }) {
  return (
    <>
      <Transition appear show={isopen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closemenu}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 grayscale backdrop-blur-sm transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed top-0 right-0 w-2/3 h-full bg-white z-50 shadow-xl transition-all">
              <div className="flex justify-end pt-7 pr-16">
                <XMarkIcon className="w-6 hover:cursor-pointer" aria-hidden="true"
                alt="menu-close"
                onClick={closemenu} />

              </div>
              <div className="flex flex-col space-y-5 px-7 pt-[10vh] h-full justify-start">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-tmgrey font-semibold font-merriweather text-xl hover:text-tmyellow transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}