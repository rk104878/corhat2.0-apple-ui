import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a23] text-gray-400 py-12 sm:py-16 px-4 sm:px-8 lg:px-20 border-t border-gray-800">

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* BRAND */}
        <div className="space-y-4 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-[#0a0a23] font-bold text-lg">A</span>
            </div>
            <h2 className="text-white text-2xl font-bold">Alohomora</h2>
          </div>

          <p className="text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
            Unlocking the potential of India's youth through systemic change
            and career-readiness education.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="text-center sm:text-left">
          <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">
            Quick Links
          </h4>

          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition">Our Work</a></li>
            <li><a href="#" className="hover:text-white transition">Why It Matters</a></li>
            <li><a href="#" className="hover:text-white transition">Impact Reports</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div className="text-center sm:text-left">
          <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">
            Resources
          </h4>

          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition">Annual Reports</a></li>
            <li><a href="#" className="hover:text-white transition">News & Media</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Legal</a></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="text-center sm:text-left">
          <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">
            Newsletter
          </h4>

          <p className="text-sm mb-4">
            Stay updated on our journey and impact.
          </p>

          {/* RESPONSIVE INPUT */}
          <div className="flex flex-col sm:flex-row bg-gray-900 border border-gray-700 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent px-4 py-3 w-full text-sm text-white focus:outline-none"
            />

            <button className="bg-[#0070f3] text-white px-5 py-3 text-sm font-medium hover:bg-blue-600 transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* BOTTOM AREA */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">

        <p className="text-xs">
          © 2026 Alohomora Education Foundation. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-xs font-medium">
          <a href="#" className="hover:text-white transition">Facebook</a>
          <a href="#" className="hover:text-white transition">LinkedIn</a>
          <a href="#" className="hover:text-white transition">Instagram</a>
          <a href="#" className="hover:text-white transition">Twitter</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;