import React from "react";

const DualImageSection = () => {
  const cards = [
    {
      title: "Partner with Us",
      description:
        "CSR partners and corporate volunteers are the backbone of our industry exposure programs.",
      buttonText: "Become a Partner",
      img: "/firstImage.png",
    },
    {
      title: "Work with Us",
      description:
        "Join a team of passionate educators and innovators working to change India's youth landscape.",
      buttonText: "Join the Team",
      img: "/SecondImage.png",
    },
    {
      title: "Work with Us",
      description:
        "Join a team of passionate educators and innovators working to change India's youth landscape.",
      buttonText: "Join the Team",
      img: "/SecondImage.png",
    },
    {
      title: "Work with Us",
      description:
        "Join a team of passionate educators and innovators working to change India's youth landscape.",
      buttonText: "Join the Team",
      img: "/SecondImage.png",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-6">
      
      {/* ✅ ONE LINE HORIZONTAL GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-3xl h-[280px] shadow-sm"
          >
            {/* Image */}
            <img
              src={card.img}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>

              <p className="text-gray-200 text-sm mb-4">
                {card.description}
              </p>

              <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default DualImageSection;