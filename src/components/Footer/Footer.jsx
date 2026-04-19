import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white pt-16 pb-6 px-6 md:px-12">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* LOGO + ABOUT */}
        <div>
          <h1 className="text-4xl font-extrabold tracking-wide mb-4">
            <span className="text-white">Cycle</span>
            <span className="text-cyan-400">Zone</span>
          </h1>

          <p className="text-gray-300 leading-7 text-sm">
            Premium destination for cycles, helmets, accessories and
            performance riding gear with fast delivery across India.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6 text-lg">
            <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-500 flex items-center justify-center cursor-pointer transition">
              <FaFacebookF />
            </div>

            <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-500 flex items-center justify-center cursor-pointer transition">
              <FaTwitter />
            </div>

            <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-500 flex items-center justify-center cursor-pointer transition">
              <FaInstagram />
            </div>

            <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-500 flex items-center justify-center cursor-pointer transition">
              <FaWhatsapp />
            </div>
          </div>
        </div>
              
          {/* QUICK LINKS */}
        <div>
          <h2 className="text-xl font-bold mb-5 text-cyan-400">
            Quick Links
          </h2>

          <ul className="space-y-3 text-gray-300">
            {["Home", "About", "Shop", "Contact"].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 hover:text-cyan-400 cursor-pointer transition"
              >
                <FaArrowRight className="text-xs" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        

        {/* CATEGORIES */}
        <div>
          <h2 className="text-xl font-bold mb-5 text-cyan-400">
            Categories
          </h2>

          <ul className="space-y-3 text-gray-300">
            {[
              "Mountain Bikes",
              "Road Bikes",
              "Electric Bikes",
              "Kids Cycles",
              "Accessories",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 hover:text-cyan-400 cursor-pointer transition"
              >
                <FaArrowRight className="text-xs" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-xl font-bold mb-5 text-cyan-400">
            Contact Us
          </h2>

          <div className="space-y-4 text-gray-300 text-sm">

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-cyan-400" />
              <span>Chennai, Tamil Nadu, India</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-cyan-400" />
              <span>+91 99999 99999</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-cyan-400" />
              <span>yourmail@gmail.com</span>
            </div>

          </div>

          {/* BUTTON */}
          <button className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
            Book Now
          </button>
        </div>

      </div>

      {/* BOTTOM LINE */}
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
        © 2026 <span className="text-cyan-400 font-semibold">CycleZone</span>. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;