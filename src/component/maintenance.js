import React from 'react'

function Maintenance() {
  return (
    <>
    <div className="bg-tmgrey px-0 py-12 h-screen">
      <div className="container py-5 px-12 my-0 mx-auto space-y-7 max-w-7xl sm:space-y-8 md:space-y-16 lg:mt-6 font-merriweather text-center">
        <div className="text-3xl text-tmyellow font-bold leading-none lg:text-4xl xl:text-5xl">
          Page Unavailable
        </div>

        <div className="text-lg text-white leading-none lg:text-xl xl:text-2xl">
            Page under maintenance, please check again later
        </div>
      </div>
    </div>
  </>
  )
}

export default Maintenance;