import React, { useState } from 'react'
import Navbar from '../navbar'
import Footer from '../footer'
import Sidebar from '../sidebar';

function Layout({children}) {
  let [isOpen, setIsOpen] = useState(false)

  function closeMenu() {
    setIsOpen(false);
  }

  function openMenu() {
    setIsOpen(true);
  }

  return (
    <>
    <Navbar openmenu={openMenu} />
    <Sidebar closemenu={closeMenu} isopen={isOpen} />
    <main>{children}</main>
    <Footer />
    </>
  )
}

export default Layout