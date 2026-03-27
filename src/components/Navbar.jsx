import React, { useState } from "react";
import "../index.css";
import ContactPopup from "./ContactPopup";
import { useNavigate } from "react-router-dom";   // ✅ NEW

const Navbar = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const navigate = useNavigate(); // ✅ navigation

  return (
    <div className="flex items-start justify-between px-6 py-4 bg-white text-black emoji-cursor">

      {/* Logo */}
      <div className="ml-40 text-2xl font-bold">
        Logo
      </div>

      {/* Navigation Links */}
      <div className="w-1/3 flex justify-center gap-24">
        <span>Home</span>
        <span>About</span>
        <span>Services</span>
        <span>Blog</span>
        <span>Contact</span>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mr-40">

        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Delete Now
        </button>

        <button
          className="border border-black text-black px-4 py-2 rounded-lg"
          onClick={() => setIsPopupOpen(true)}
        >
          Contact Now
        </button>

        {/* ✅ OPEN NOTES PAGE */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={() => navigate("/notes")}
        >
          Download Notes
        </button>

      </div>

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />

    </div>
  );
};

export default Navbar;