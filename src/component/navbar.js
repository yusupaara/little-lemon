import React from "react";
import LoginButton from "./elements/loginSwitch";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/"},
  { name: "About", href: "/about"},
  { name: "Menu", href: "/menu"},
  { name: "Order Online", href: "/order"},
];

const Navbar = ({openmenu}) => {

  const defaultNavStyle = "text-sm font-semibold leading-6 text-gray-900 hover:text-tmyellow";

  return (
    <>
    <nav className="container px-6 py-6 max-w-7xl mr-auto mb-0 ml-auto lg:px-8">
      <nav className="flex item-center justify-between px-5">
        <div className="flex lg:flex-1 lg:justify-start">
          <div className="-mb-2 p-1.5 group relative">
            <img className="h-8 pl-5" src="https://imagesave-splmdny.s3.ap-southeast-2.amazonaws.com/littlelemon-logo.gif" alt="Little Lemon" />
          </div>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="inline-flex items-center justify-center rounded-md -my-2.5  p-2.5 text-gray-700"
          onClick={openmenu}>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 mt-2">
            {navigation.map((item) => (
              <NavLink key={item.name} href={item.href} to={item.href} className={({ isActive }) => (isActive ? (defaultNavStyle, "text-tmgrey font-semibold border-b-2 border-tmgrey")  : defaultNavStyle)} >
                {item.name}
              </NavLink>
            ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="text-sm font-semibold leading-6 text-tmgrey">
            <LoginButton />
            </div>
        </div>
      </nav>
    </nav>
    </>
  )
}

export default Navbar;
