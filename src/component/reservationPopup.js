import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Hero from "./hero";

export default function ReservationPopup() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Hero onReserveTableClick={() => setOpen(true)} />
      <Transition.Root show={open} as={Fragment}>
        {/* Base Background Blur */}
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        {/* Background Modal */}
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
          enterTo="opacity-100 translate-y-0 md:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 md:scale-100"
          leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
        >
          <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
            <div className="relative flex w-full items-center overflow-hidden bg-white shadow-2xl ">
              {/* close button */}
              <button
                type="button"
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              {/* form below close */}
              <div>
                <div className="flex flex-row bg-gray-100">
                  <img src="https://cdn.discordapp.com/attachments/983087974336036907/1112633472922693633/Unsplash_yn3tA00iHBg-1200x655.jpg" className="bg-red-500 object-cover object-center h-[50vh] w-1/4 flex-1"></img>
                  <div className="flex flex-col w-3/4 mx-8 py-8">
                  <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md font-merriweather">
                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Table Reservation</h2>
                  </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md"> 
                      <form className="space-y-6" action="#" method="POST">
                        <div>
                          <label></label>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="flex min-h-full flex-1 flex-col">

              </div> */}
            </div>
          </Dialog.Panel>
        </Transition.Child></div></div></Dialog>
      </Transition.Root>

      {/* <Dialog
      open={isOpen}
      onClose={setIsOpen}
      className="fixed inset-0 overflow-y-auto p-4 pt-[25vh]"
    >
      <Dialog.Overlay className="fixed inset-0 bg-gray-400/30 backdrop-blur-sm" />
      <div className="relative bg-tmgrey max-w-xl mx-auto rounded-xl shadow-xl ring-1 ring-black/5">
        <p className="py-4 text-center text-tmyellow">
          Fill Up The Reservation Form
        </p>
      </div>
    </Dialog> */}
    </div>
  );
}
