import React from "react";

const WorkCard = ({ image, title, description, tag }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition duration-300 flex flex-col">
      
      <img 
        src={image} 
        alt={title}  
        className="w-full h-56 object-cover bg-gray-100" 
      />

      <div className="p-5 flex flex-col flex-grow">
        <p className="text-xs text-blue-500 font-semibold uppercase">
          {tag}
        </p>

        <h3 className="text-xl font-bold mt-2">{title}</h3>

        <p className="text-sm text-gray-600 mt-2 ">
          {description}
        </p>

        <button className="mt-4 text-blue-600 font-medium hover:underline self-start">
          Learn more →
        </button>
      </div>

    </div>
  );
};

export default WorkCard;