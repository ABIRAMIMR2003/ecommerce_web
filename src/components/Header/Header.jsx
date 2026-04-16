import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaUserCircle,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Header = ({
  phone = "+91 99999 99999",
  email = "yourmail@gmail.com",
}) => {
  const [offer, setOffer] = useState("");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const offers = [
      "🔥 Flat 50% OFF on Cycling Products",
      "🚴 Free Delivery Above ₹999",
      "⚡ Limited Time Mega Deal",
      "🎉 New Arrivals Available Now",
    ];

    let index = 0;
    setOffer(offers[index]);

    const interval = setInterval(() => {
      index = (index + 1) % offers.length;
      setOffer(offers[index]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 shadow-xl">

      {/* TOP BAR */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-3 flex flex-col md:flex-row items-center justify-between gap-3">

          {/* LEFT */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm font-medium">
            <a href={`tel:${phone}`} className="hover:text-cyan-300 transition">
              📞 {phone}
            </a>

            <a
              href={`mailto:${email}`}
              className="hover:text-cyan-300 transition"
            >
              ✉️ {email}
            </a>
          </div>

          {/* CENTER */}
          <div className="text-cyan-300 font-semibold animate-pulse text-sm md:text-base">
            {offer}
          </div>

          {/* RIGHT */}
          <div className="flex gap-4 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-blue-400 hover:scale-110 transition" />
            <FaTwitter className="cursor-pointer hover:text-sky-400 hover:scale-110 transition" />
            <FaInstagram className="cursor-pointer hover:text-pink-400 hover:scale-110 transition" />
            <FaWhatsapp className="cursor-pointer hover:text-green-400 hover:scale-110 transition" />
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-10 h-[82px] flex items-center justify-between">

          {/* LEFT SIDE LOGO */}
          <div className="flex items-center gap-5">

            {/* MOBILE MENU */}
            <div className="md:hidden">
              <FaBars
                className="text-2xl cursor-pointer text-gray-800"
                onClick={() => setMenuOpen(true)}
              />
            </div>

            {/* LOGO */}
            <div className="text-3xl font-extrabold tracking-wide cursor-pointer">
              <span className="text-black">Cycle</span>
              <span className="text-cyan-500">Zone</span>
            </div>

          </div>

          {/* RIGHT SIDE MENU */}
          <div className="hidden md:flex items-center gap-7">

            <a
              href="#"
              className="font-semibold text-gray-700 hover:text-cyan-500 transition relative group"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-500 transition-all group-hover:w-full"></span>
            </a>

            <a
              href="#"
              className="font-semibold text-gray-700 hover:text-cyan-500 transition relative group"
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-500 transition-all group-hover:w-full"></span>
            </a>

            <a
              href="#"
              className="font-semibold text-gray-700 hover:text-cyan-500 transition relative group"
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-500 transition-all group-hover:w-full"></span>
            </a>

            {/* BOOK NOW */}
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:scale-105 hover:shadow-xl transition duration-300">
              Book Now
            </button>

            {/* USER */}
            <div className="relative">
              <FaUserCircle
                className="text-3xl text-gray-700 cursor-pointer hover:text-cyan-500 transition"
                onClick={() => setShowUserMenu(!showUserMenu)}
              />

              {showUserMenu && (
                <div className="absolute right-0 top-12 w-56 bg-white rounded-2xl shadow-2xl border p-4">

                  <p className="font-bold text-gray-800">John Doe</p>
                  <p className="text-sm text-gray-500 mb-3">
                    john@example.com
                  </p>

                  <button className="block w-full text-left py-2 hover:text-cyan-500">
                    My Profile
                  </button>

                  <button className="block w-full text-left py-2 hover:text-cyan-500">
                    Orders
                  </button>

                  <button className="block w-full text-left py-2 text-red-500">
                    Logout
                  </button>

                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-2xl font-bold">
            <span className="text-black">Cycle</span>
            <span className="text-cyan-500">Zone</span>
          </h2>

          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <div className="flex flex-col p-6 gap-6 text-lg font-semibold text-gray-700">

          <a href="#" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

          <button className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl shadow-lg">
            Book Now
          </button>

        </div>
      </div>

    </header>
  );
};

export default Header;