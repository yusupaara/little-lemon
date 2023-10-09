import React from "react";

const Hero = ({onReserveTableClick}) => {
  return (
    <>
    <div className="bg-tmgrey px-0 py-12">
        <div className="container py-5 px-12 my-0 mx-auto space-y-5 max-w-7xl sm:space-y-8 md:space-y-16">
        <div className="flex flex-col items-center sm:px-5 md:flex-row">
          <div class="flex flex-col items-start justify-center px-0 pb-6 md:mb-0 md:w-1/2 text-white font-merriweather">
            <div
              className="flex flex-col justify-center space-y-3 md:pr-10 lg:pr-16
            md:space-y-5"
            >
              <a className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl text-tmyellow">
                Little Lemon
                <br className="inline"></br>
                <span className="text-white text-2xl">Chicago</span>
              </a>
              <div className="pt-2 px-0">
                <a className="inline text-lg font-medium">
                We are a family owned mediterranean restaurant, focused on traditional recipes served with a modern twist
                </a>
                <br className="inline"></br>
                <button className="btn-primary mt-6 text-lg" onClick={onReserveTableClick}>
                Reserve a Table
                </button>
              </div>
            </div>
          </div>
          {/* Bagian foto */}
          <div className="w-full md:w-1/2">
            <div className="block">
              <img
                src="https://cdn.discordapp.com/attachments/983087974336036907/1100095572486131712/4f3f77cf-bdca-4ec3-af5d-ea923d74f672.png"
                className="rounded-lg shadow-2xl object-cover object-center align-middle z-10 transform lg:translate-y-28 lg:h-96"
              />
            </div>
          </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Hero;