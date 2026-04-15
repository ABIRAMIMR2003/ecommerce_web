import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaUserCircle,
  FaWhatsapp,
  FaBars,
  FaTimes
} from "react-icons/fa";

const Header = ({
  phone = "+91 99999 99999",
  email = "yourmail@gmail.com"
}) => {
  const [offer, setOffer] = useState("");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [activeIcon, setActiveIcon] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // ✅ sidebar state

  useEffect(() => {
    const offers = [
      "🔥 50% OFF on all items!",
      "🎉 Buy 1 Get 1 Free!",
      "⚡ Limited Time Deal!",
    ];

    let index = 0;
    setOffer(offers[index]);

    const interval = setInterval(() => {
      index = (index + 1) % offers.length;
      setOffer(offers[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full shadow-lg">

      {/* 🔝 Top Row */}
      <div className="bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 text-white text-sm px-4 md:px-8 py-3 flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">

        {/* Contact */}
        <div className="flex flex-col md:flex-row gap-1 md:gap-6 font-medium">
          <a href={`tel:${phone}`} className="hover:underline">
            📞 {phone}
          </a>
          <a href={`mailto:${email}`} className="hover:underline">
            ✉️ {email}
          </a>
        </div>

        {/* Offer */}
        <div className="font-bold text-yellow-200 animate-pulse text-center">
          {offer}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-lg justify-center md:justify-end">

          <FaFacebookF
            onClick={() => setActiveIcon(activeIcon === "facebook" ? "" : "facebook")}
            className={`cursor-pointer transition ${
              activeIcon === "facebook"
                ? "text-blue-600 scale-110"
                : "text-white hover:text-blue-300"
            }`}
          />

          <FaTwitter
            onClick={() => setActiveIcon(activeIcon === "twitter" ? "" : "twitter")}
            className={`cursor-pointer transition ${
              activeIcon === "twitter"
                ? "text-sky-400 scale-110"
                : "text-white hover:text-sky-300"
            }`}
          />

          <FaInstagram
            onClick={() => setActiveIcon(activeIcon === "instagram" ? "" : "instagram")}
            className={`cursor-pointer transition ${
              activeIcon === "instagram"
                ? "text-pink-500 scale-110"
                : "text-white hover:text-pink-300"
            }`}
          />

          <FaWhatsapp
            onClick={() => setActiveIcon(activeIcon === "whatsapp" ? "" : "whatsapp")}
            className={`cursor-pointer transition ${
              activeIcon === "whatsapp"
                ? "text-green-500 scale-110"
                : "text-white hover:text-green-300"
            }`}
          />

        </div>
      </div>

      {/* 🔻 Bottom Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-8 py-5 bg-white/90 backdrop-blur-md border-b border-gray-200">

        {/* Logo + Mobile Menu */}
        <div className="flex items-center gap-4 w-full md:w-auto justify-between">
          
          {/* ☰ Menu Icon (mobile only) */}
          <div className="md:hidden">
            <FaBars
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          </div>

          {/* Logo */}
          <div className="text-xl md:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-sky-500 to-blue-600 text-transparent bg-clip-text cursor-pointer">
            MyShop
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-wrap justify-end items-center gap-4 md:gap-8 relative">

          <a href="#" className="font-medium hover:text-sky-600 transition">
            Home
          </a>

          <a href="#" className="font-medium hover:text-sky-600 transition">
            About
          </a>
          <a href="#" className="font-medium hover:text-sky-600 transition">
            Shop
          </a>

          <a href="#" className="font-medium hover:text-sky-600 transition">
            Contact
          </a>

          <button className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition duration-300">
            Book Now
          </button>

          {/* User */}
          <div className="relative">
            <FaUserCircle
              className="text-3xl cursor-pointer hover:text-sky-600 transition"
              onClick={() => setShowUserMenu(!showUserMenu)}
            />

            {showUserMenu && (
              <div className="absolute right-0 mt-3 w-52 bg-white shadow-xl rounded-xl p-4 border">
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-gray-500">john@example.com</p>

                <hr className="my-2" />

                <button className="block w-full text-left hover:text-sky-600 transition">
                  Profile
                </button>
                <button className="block w-full text-left hover:text-sky-600 transition">
                  Orders
                </button>
                <button className="block w-full text-left text-red-500">
                  Logout
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* 🔥 Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        {/* Close */}
        <div className="flex justify-end p-4">
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-6 p-6 text-lg">

          <a href="#" onClick={() => setMenuOpen(false)}>Shop</a>
          <a href="#" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Contact</a>

          <button className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-2 rounded-lg">
            Book Now
          </button>

        </div>
      </div>

    </header>
  );
};

export default Header;