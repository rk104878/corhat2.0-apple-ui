import React from "react";

const WhatsApps = () => {
  return (
    <a
      href="https://wa.me/916239865972"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed 
        bottom-4 sm:bottom-6
        right-4 sm:right-6
        z-50
      "
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
        className="
          w-12 h-12
          sm:w-14 sm:h-14
          lg:w-16 lg:h-16
          rounded-full
          shadow-lg
          hover:scale-110
          active:scale-95
          transition-transform duration-300
        "
      />
    </a>
  );
};

export default WhatsApps;