import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center px-4 sm:px-8 lg:px-16 py-12">

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="text-center lg:text-left">

          <p className="text-blue-600 tracking-widest text-xs sm:text-sm font-semibold">
            THE CHALLENGE
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-3 text-gray-900">
            India faces a critical youth employment gap
          </h1>

          <p className="mt-5 text-gray-600 leading-relaxed text-sm sm:text-base">
            Despite academic qualifications, millions of Indian youth find themselves
            ill-equipped for the evolving job market. Traditional education systems often
            miss the “Career-Life Balance”—the intersection of skills, mindset, and industry awareness.
          </p>

          {/* POINTS */}
          <div className="mt-6 space-y-5">

            <div>
              <h4 className="font-semibold text-gray-800">
                Skill Mismatch
              </h4>
              <p className="text-gray-500 text-sm">
                Only 45% of graduates are considered employable with industry-standard skills.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800">
                Career Awareness
              </h4>
              <p className="text-gray-500 text-sm">
                Many students lack access to professional career counseling.
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative">

          {/* TOP CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="bg-gray-100 p-5 rounded-xl shadow-sm text-center sm:text-left">
              <p className="text-sm text-gray-500">Unemployment</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mt-2">
                23.2%
              </h2>
              <p className="text-xs text-red-500 mt-1">+2.1% YoY</p>
            </div>

            <div className="bg-gray-100 p-5 rounded-xl shadow-sm text-center sm:text-left">
              <p className="text-sm text-gray-500">Skills Gap</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mt-2">
                75%
              </h2>
              <p className="text-xs text-gray-500 mt-1">Stagnant</p>
            </div>

          </div>

          {/* BIG BLUE CARD */}
          <div className="mt-6 bg-blue-600 text-white p-6 sm:p-8 rounded-xl shadow-lg text-center sm:text-left">
            <p className="text-sm opacity-80">Our Collective Impact</p>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              50,000+
            </h2>
            <p className="text-sm mt-1">
              Students empowered across 5 states
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;