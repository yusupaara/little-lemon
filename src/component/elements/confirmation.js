import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { selectUser } from "../redux/auth";
import { useSelector } from "react-redux";

export default function ConfirmPopup({ isopen, closemodal, switchform }) {
  const user = useSelector(selectUser);

  return (
    <>
      <Transition appear show={isopen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closemodal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 sm:grayscale sm:backdrop-blur-sm sm:transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center sm:p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full flex flex-col h-screen justify-between transform transition-all overflow-hidden bg-gradient-to-b from-emerald-900 to-tmgrey p-10 text-left align-middle sm:rounded-3xl sm:h-auto sm:max-w-sm sm:shadow-xl font-merriweather text-tmyellow">
                  <div className="space-y-7 pt-[20vh] sm:pt-0">
                    <CheckCircleIcon className="w-11" />

                    <Dialog.Title
                      as="h3"
                      className="text-4xl font-bold "
                    >
                      Thanks for Reserve
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-white text-sm">
                        A confimation email has been sent to{" "}
                        <span className="font-bold text-tmyellow">{user}</span>.
                        Please open it and click the button inside to confirm
                        your reservation.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="btn-primary text-lg p-3 w-full"
                      onClick={() => {closemodal(); switchform()}}
                    >
                      Dismiss message
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}