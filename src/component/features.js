import React from "react";
import Databs from "./data/specialDish";
import DishCard from "./card";

const Feature = () => {
  return (
    <>
      <div className="bg-white px-0 py-12">
        <div className="container py-5 px-12 my-0 mx-auto space-y-5 max-w-7xl sm:space-y-8 md:space-y-16 lg:mt-6">
          <div className="flex flex-col items-center md:space-y-3 space-y-6 px-5 md:flex-row justify-between font-merriweather">
            <div className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl text-tmgrey">
              This weeks specials!
            </div>
            <div className="btn-primary text-lg">Online Menu</div>
          </div>
          {/* card */}
          <div className="mt-6 px-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Databs.map((dishes) => (
              <DishCard dishes={dishes} key={dishes.title} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
