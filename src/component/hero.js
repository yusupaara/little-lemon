import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { selectIsLoggedIn } from "./redux/auth";
import { useSelector } from "react-redux";

const Hero = ({ openmodal, isform, switchform }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <main className="bg-gradient-to-b from-emerald-900 to-tmgrey px-0 py-5 md:py-12">
        <div className="container py-5 px-12 my-0 mx-auto space-y-5 max-w-7xl sm:space-y-8 md:space-y-16">
          <div className="flex flex-col items-center sm:px-5 md:flex-row">
            <div class="flex flex-col items-start px-0 pb-6 md:mb-0 md:w-1/2 text-white font-merriweather max-h-96 overflow-hidden">
              {/* container form */}
              <div
                className={`${
                  isform ? "translate-y-0" : "-translate-y-1/2"
                } block transition ease-in-out duration-500 `}
              >
                {/* Form Reservation */}
                <form
                  className="flex flex-col justify-center md:pr-10 lg:pr-16 md:space-y-5 h-96 text-lg"
                  onSubmit={(e) => {e.preventDefault(); openmodal()}}
                >
                  <label className="block">
                    <span>Reservation Date</span>
                    <input
                      type="date"
                      className="w-full rounded-md font-bold text-tmgrey bg-slate-200"
                      required 
                    />
                  </label>
                  <label className="block">
                    <span>Arrival Time</span>
                    <input
                      type="time"
                      className="w-full rounded-md font-bold text-tmgrey bg-slate-200"
                      required 
                    />
                  </label>
                  <label className="block">
                    <span>Number of Guest</span>
                    <select className="w-full rounded-md font-bold text-tmgrey bg-slate-200" required >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                    </select>
                  </label>
                  <div className="flex items-center justify-between pt-4">
                  
                    <ChevronLeftIcon className="w-max bg-gradient-to-br rounded-full from-tmyellow to-amber-500 to-90% text-tmgrey hover:bg-tmyellow h-10 hover:cursor-pointer" onClick={switchform} />
                    <button
                      type="submit"
                      className="btn-primary text-lg w-max disabled:opacity-50 disabled:cursor-default disabled:translate-y-0"
                      disabled={!isLoggedIn}
                    
                    >
                      {isLoggedIn ? "Proceed Reservation" : "Login First"}
                    </button>

                  </div>
                    
                </form>
                {/* Little Lemon Intro */}
                <div
                  className="flex flex-col justify-center space-y-3 md:pr-10 lg:pr-16
            md:space-y-5 h-96"
                >
                  <div className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl text-tmyellow">
                    Little Lemon
                    <br className="inline"></br>
                    <span className="text-white text-2xl">Chicago</span>
                  </div>
                  <div className="pt-2 px-0">
                    <div className="inline text-lg font-medium">
                      We are a family owned mediterranean restaurant, focused on
                      traditional recipes served with a modern twist
                    </div>
                    <br className="inline"></br>
                    <button
                      className="btn-primary mt-6 text-lg"
                      onClick={switchform}
                    >
                      Reserve a Table
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Photo Menu */}
            <div className="w-full md:w-1/2 z-10 overflow-hidden transform lg:translate-y-28 rounded-xl shadow-2xl h-96">
              <div
                className={`${
                  isform ? "-translate-y-1/2" : "translate-y-0"
                } block transition ease-in-out duration-500 `}
              >
                <img
                  src="https://cdn.discordapp.com/attachments/983087974336036907/1100095572486131712/4f3f77cf-bdca-4ec3-af5d-ea923d74f672.png"
                  alt="vegan burger"
                  className="object-cover object-center align-middle h-96"
                />
                <img
                  src="https://media.discordapp.net/attachments/983087974336036907/1189726285971341342/chefs-cooking-kitchen-restaurant.jpg"
                  alt="reservation"
                  className="object-cover object-center align-middle h-96"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;