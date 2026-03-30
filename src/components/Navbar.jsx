// File: src/components/Navbar.jsx

import React, { useState, useEffect } from "react";
import "../index.css";
import ContactPopup from "./ContactPopup";
import { useNavigate } from "react-router-dom";
import CalendarButton from "./CalendarButton";

const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  // Scroll Detect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled
        ? "backdrop-blur-lg bg-white/70 shadow-md"
        : "bg-[#FFFDEB]"
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-10 py-4">

        {/* LOGO */}
        <div className="text-xl md:text-2xl font-bold">
          📓 MyNotes
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex gap-10 font-medium">
          <span className="cursor-pointer hover:text-blue-500">Home</span>
          <span className="cursor-pointer hover:text-blue-500">About</span>
          <span className="cursor-pointer hover:text-blue-500">Services</span>
          <span className="cursor-pointer hover:text-blue-500">Blog</span>
          <span className="cursor-pointer hover:text-blue-500">Contact</span>
        </div>

        {/* DESKTOP BUTTONS */}
        <div className="hidden lg:flex gap-4">
          {/* ✅ Calendar Button */}
          <CalendarButton />

          <button
            className="border border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition"
            onClick={() => setIsPopupOpen(true)}
          >
            Contact Now
          </button>

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
            onClick={() => navigate("/notes")}
          >
            Download Notes
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 py-6 space-y-5">
          <span className="block cursor-pointer">Home</span>
          <span className="block cursor-pointer">About</span>
          <span className="block cursor-pointer">Services</span>
          <span className="block cursor-pointer">Blog</span>
          <span className="block cursor-pointer">Contact</span>

          <div className="flex flex-col gap-3 pt-4">
            {/* ✅ Mobile Calendar Button */}
            <CalendarButton />

            <button
              className="border border-black py-2 rounded-lg"
              onClick={() => setIsPopupOpen(true)}
            >
              Contact Now
            </button>

            <button
              className="bg-blue-600 text-white py-2 rounded-lg"
              onClick={() => navigate("/notes")}
            >
              Download Notes
            </button>
          </div>
        </div>
      )}

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
};

export default Navbar;