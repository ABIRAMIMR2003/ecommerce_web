import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 md:px-12 py-10">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* 🔹 1st Column - Logo */}
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 text-transparent bg-clip-text">
            MyShop
          </h1>
          <p className="mt-3 text-gray-400 text-sm">
            Your one-stop shop for all types of cycles and accessories.
          </p>
        </div>

        {/* 🔹 2nd Column - Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* 🔹 3rd Column - Keywords */}
        <div>
          <h2 className="text-lg font-semibold mb-3">keywords</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Mountain Bike</li>
            <li>Road Bike</li>
            <li>Hybrid Bike</li>
            <li>Electric Bike</li>
            <li>Kids Cycle</li>
          </ul>
        </div>

        {/* 🔹 4th Column - Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact</h2>

          <div className="space-y-3 text-gray-400 text-sm">

            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span>Chennai, Tamil Nadu, India</span>
            </div>

            <div className="flex items-center gap-2">
              <FaPhone />
              <span>+91 99999 99999</span>
            </div>

            <div className="flex items-center gap-2">
              <FaEnvelope />
              <span>yourmail@gmail.com</span>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © 2026 MyShop. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;