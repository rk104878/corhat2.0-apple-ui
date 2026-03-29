import React, { useState } from "react";
import { saveContact } from "../utils/storage";

const ContactPopup = ({ isOpen, onClose }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};

    if (!/^[A-Za-z\s]{2,50}$/.test(name))
      newErrors.name = "Please enter a valid Indian name";

    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email))
      newErrors.email = "Please enter a valid Gmail address";

    if (!/^[6-9]\d{9}$/.test(phone))
      newErrors.phone = "Please enter a valid Indian phone number";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const userData = { name, email, phone };
      saveContact(userData);

      alert("Form submitted successfully!");

      setName("");
      setEmail("");
      setPhone("");

      onClose();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4"
      onClick={handleOverlayClick}
    >
      {/* POPUP BOX */}
      <div className="bg-white p-6 sm:p-8 rounded-xl w-full max-w-md relative shadow-lg">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-lg"
        >
          ✖
        </button>

        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="border px-3 py-2 rounded w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Gmail Address"
              className="border px-3 py-2 rounded w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="border px-3 py-2 rounded w-full"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>

        </form>

      </div>
    </div>
  );
};

export default ContactPopup;