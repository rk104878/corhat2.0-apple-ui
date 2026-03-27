import React from "react";
import { useNavigate } from "react-router-dom";

const NotesPage = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">

      {/* TOP SPACING SAME AS NAVBAR */}
      <div className="px-40 pt-28 pb-16 relative">

        {/* CLOSE BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="absolute right-40 top-8 text-3xl hover:scale-125 transition"
        >
          ✕
        </button>

        {/* MAIN GRID */}
        <div className="flex items-center">

          {/* LEFT SIDE */}
          <div className="w-1/2">

            <h1 className="text-6xl font-bold leading-tight mb-6">
              JavaScript
              <br />
              Developer Notes
            </h1>

            <p className="text-gray-300 text-lg mb-10 max-w-xl">
              Complete JavaScript learning notes covering ES6,
              DOM manipulation, async programming and modern
              developer concepts.
            </p>

            {/* TAGS */}
            <div className="flex gap-4 flex-wrap mb-10">
              <span className="bg-white/10 px-4 py-2 rounded-full">ES6</span>
              <span className="bg-white/10 px-4 py-2 rounded-full">DOM</span>
              <span className="bg-white/10 px-4 py-2 rounded-full">Async</span>
              <span className="bg-white/10 px-4 py-2 rounded-full">Events</span>
            </div>

            {/* DOWNLOAD */}
            <a
              href="/react_js_notes.pdf"
              download
              className="bg-blue-500 px-10 py-4 rounded-xl text-lg font-semibold hover:scale-110 transition shadow-xl"
            >
              ⬇ Download JavaScript Notes
            </a>

          </div>

          {/* RIGHT SIDE */}
          <div className="w-1/2 flex justify-center">

            <div className="bg-white text-black rounded-3xl shadow-2xl p-10 w-[420px] hover:scale-105 transition">

              <h2 className="text-2xl font-bold mb-4">
                📘 JavaScript Notes
              </h2>

              <ul className="space-y-3 text-gray-600">
                <li>✔ Variables & Functions</li>
                <li>✔ Arrow Functions</li>
                <li>✔ DOM Manipulation</li>
                <li>✔ Event Handling</li>
                <li>✔ Promises & Async/Await</li>
                <li>✔ Modern ES6 Concepts</li>
              </ul>

              <p className="mt-6 text-sm text-gray-400">
                Beginner → Advanced Level
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default NotesPage;