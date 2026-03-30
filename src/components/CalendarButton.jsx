import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalendarButton = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Button to open calendar */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
      >
        Open Calendar
      </button>

      {/* Calendar popup */}
      {open && (
        <div className="absolute z-50 mt-2">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            inline
          />
        </div>
      )}
    </div>
  );
};

export default CalendarButton;