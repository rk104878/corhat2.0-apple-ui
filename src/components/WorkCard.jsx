import React from "react";

const WorkCard = ({ image, title, description, tag }) => {
  return (
    <div className="
      bg-white
      rounded-2xl
      shadow-md
      hover:shadow-xl
      overflow-hidden
      flex flex-col
      transition-all duration-300
      hover:-translate-y-2
    ">

      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="
          w-full
          h-44 sm:h-52 md:h-56
          object-cover
          bg-gray-100
        "
      />

      {/* CONTENT */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">

        <p className="text-xs sm:text-sm text-blue-500 font-semibold uppercase tracking-wide">
          {tag}
        </p>

        <h3 className="text-lg sm:text-xl font-bold mt-2">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mt-2 flex-grow">
          {description}
        </p>

        <button className="
          mt-4
          text-blue-600
          font-medium
          hover:underline
          self-start
          text-sm sm:text-base
        ">
          Learn more →
        </button>

      </div>

    </div>
  );
};

export default WorkCard;