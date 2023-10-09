import { Transition } from '@headlessui/react'
import { useState } from 'react'

// function MyComponent() {
//   const [isShowing, setIsShowing] = useState(false)

//   return (
//     <>
//       <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
//         Toggle
//       </button>
//       <Transition
//         show={isShowing}
//         enter="transition-opacity duration-75"
//         enterFrom="opacity-0"
//         enterTo="opacity-100"
//         leave="transition-opacity duration-150"
//         leaveFrom="opacity-100"
//         leaveTo="opacity-0"
//       >
//         I will fade in and out
//       </Transition>
//     </>
//   )
// }
function MyComponent() {
    const [isShowing, setIsShowing] = useState(false)
  
    return (
      <>
        <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
          Toggle
        </button>
        <Transition show={isShowing} as="a" href="/my-url" className="font-bold">
          I will appear and disappear.
        </Transition>
      </>
    )
  }

export default MyComponent;