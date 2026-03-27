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

      {/* DARK OVERLAY (for readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-12 lg:px-20 text-white max-w-3xl">
        
        {/* SMALL TAG */}
        <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm w-fit mb-4">
          EMPOWERING INDIA'S YOUTH
        </span>

        {/* HEADING */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Bridging the Gap Between Education and Careers
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 text-gray-200 text-base md:text-lg">
          We equip students from underserved communities with the confidence,
          clarity, and competence to thrive in the modern workforce.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex gap-4 flex-wrap">
          
          <button className="bg-blue-500 px-6 py-3 rounded-md hover:bg-blue-600 transition">
            Explore Our Programs
          </button>

          <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
            Watch Our Impact
          </button>

        </div>

      </div>
    </div>

  );
};

export default Landingpage;