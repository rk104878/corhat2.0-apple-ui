import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a23] text-gray-400 py-16 px-6 md:px-12 lg:px-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand/Logo Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-[#0a0a23] font-bold text-lg">A</span>
            </div>
            <h2 className="text-white text-2xl font-bold">Alohomora</h2>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Unlocking the potential of India's youth through systemic change and career-readiness education.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Our Work</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Why It Matters</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Impact Reports</a></li>
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest">Resources</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Annual Reports</a></li>
            <li><a href="#" className="hover:text-white transition-colors">News & Media</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest">Newsletter</h4>
          <p className="text-sm mb-4">Stay updated on our journey and impact.</p>
          <div className="flex items-center bg-gray-900 border border-gray-700 rounded-md overflow-hidden">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-transparent px-4 py-2 w-full text-sm text-white focus:outline-none"
            />
            <button className="bg-[#0070f3] text-white px-4 py-2 text-sm font-medium hover:bg-blue-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Socials */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs">© 2026 Alohomora Education Foundation. All rights reserved.</p>
        <div className="flex gap-8 text-xs font-medium">
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;