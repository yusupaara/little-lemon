import { Fragment, template, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Hero from "./hero";
import DatePick from "./element/datePicker";
import TimePick from "./element/timePicker";
import ListPick from "./element/listPicker";
import TextFields from "./element/textField";

export default function ReservationPopup() {
  const [open, setOpen] = useState(false);
  const [next, setNext] = useState(false);

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
            <div className="fixed inset-0 hidden grayscale backdrop-blur-sm transition-opacity md:block" />
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
                <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl lg:max-w-4xl">
                  <div className="relative flex w-full items-center overflow-hidden bg-white shadow-2xl">
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
                      <div className="flex flex-row bg-white">
                        <img
                          src="https://cdn.discordapp.com/attachments/983087974336036907/1113057159345872996/pngegg.png"
                          className="bg-red-500 object-cover object-right md:h-auto w-1/4 flex-1 h-screen"
                        ></img>
                        {/* right side dialog */}
                        {/* first step */}
                        <div className="flex flex-col w-3/4 px-8 py-8 border-r-8 border-r-tmyellow">
                          <Transition.Root
                            show={next}
                            as={template}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md font-merriweather">
                              <h2 className="my-20 md:my-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Table Reservation
                              </h2>
                            </div>
                            <div className="sm:mx-auto max-w-full sm:max-w-md">
                              <div
                                className="relative space-y-6 mx-auto my-5"
                                action="#"
                                method="POST"
                              >
                                <DatePick />
                                <TimePick />
                                <ListPick />
                                <TextFields />
                                <button
                                  className="btn-primary font-merriweather"
                                  onClick={() => setNext(!next)}
                                >
                                  Next
                                </button>
                              </div>
                            </div>
                          </Transition.Root>
              
                          {/* second step */}
          
                          <Transition.Root
                            show={!next}
                            as={template}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md font-merriweather">
                              <h2 className="my-20 md:my-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                 Login to continue
                              </h2>
                            </div>
                            <div className="sm:mx-auto max-w-full sm:max-w-md">
                                <button
                                  className="btn-primary font-merriweather"
                                  onClick={() => setNext(!next)}
                                >
                                  Next
                                </button>
                            </div>
                          </Transition.Root>

                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
