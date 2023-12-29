import React, { useState } from 'react'
import Feature from '../features'
import ConfirmPopup from '../elements/confirmation'
import Hero from '../hero'

function Home() {
  let [isOpen, setIsOpen] = useState(false)
  let [isForm, setForm] = useState(false)

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function switchForm() {
    setForm(!isForm);
  }

  return (
    <>
    <Hero openmodal={openModal} isform={isForm} switchform={switchForm} />
    <ConfirmPopup isopen={isOpen} closemodal={closeModal} switchform={switchForm} />
    <Feature />
    </>
  )
}

export default Home