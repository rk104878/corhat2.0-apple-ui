import React from "react";

const Landingpage = () => {
  return (
    <div className="relative min-h-screen">

      {/* BACKGROUND IMAGE */}
      <img
        src="/classroom.png"
        alt="Classroom"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="
        relative z-10
        flex flex-col justify-center
        min-h-screen
        px-4 sm:px-8 md:px-12 lg:px-20
        text-white
        max-w-4xl
      ">

        {/* TAG */}
        <span className="
          bg-blue-500
          text-white
          px-3 py-1
          text-xs sm:text-sm
          rounded-full
          w-fit
          mb-4
        ">
          EMPOWERING INDIA'S YOUTH
        </span>

        {/* HEADING */}
        <h1 className="
          font-bold
          leading-tight
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          xl:text-7xl
        ">
          Bridging the Gap Between Education and Careers
        </h1>

        {/* DESCRIPTION */}
        <p className="
          mt-5
          text-gray-200
          text-sm
          sm:text-base
          md:text-lg
          max-w-2xl
        ">
          We equip students from underserved communities with the confidence,
          clarity, and competence to thrive in the modern workforce.
        </p>

        {/* BUTTONS */}
        <div className="
          mt-8
          flex
          flex-col
          sm:flex-row
          gap-4
          w-full sm:w-auto
        ">
          
          <button className="
            bg-blue-500
            px-6 py-3
            rounded-md
            hover:bg-blue-600
            transition
            text-sm sm:text-base
          ">
            Explore Our Programs
          </button>

          <button className="
            border border-white
            px-6 py-3
            rounded-md
            hover:bg-white
            hover:text-black
            transition
            text-sm sm:text-base
          ">
            Watch Our Impact
          </button>

        </div>
      </div>
    </div>
  );
};

export default Landingpage;