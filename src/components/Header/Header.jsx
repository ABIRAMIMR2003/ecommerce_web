import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaUserCircle,
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

const Header = ({
  phone = "+91 99999 99999",
  email = "yourmail@gmail.com",
}) => {
  const [offer, setOffer] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

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

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 shadow-2xl">

        {/* TOP BAR */}
        <div className="bg-gradient-to-r from-slate-950 via-cyan-950 to-slate-900 text-white border-b border-cyan-700/30">
          <div className="max-w-7xl mx-auto px-4 md:px-10 py-3 flex flex-col md:flex-row items-center justify-between gap-3">

            {/* LEFT */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm font-medium">
              <a
                href={`tel:${phone}`}
                className="hover:text-cyan-300 duration-300"
              >
                📞 {phone}
              </a>

              <a
                href={`mailto:${email}`}
                className="hover:text-cyan-300 duration-300"
              >
                ✉️ {email}
              </a>
            </div>

            {/* CENTER */}
            <div className="text-cyan-300 font-semibold tracking-wide animate-pulse text-sm md:text-base">
              {offer}
            </div>

            {/* RIGHT */}
            <div className="flex gap-3 text-sm">

              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 duration-300 cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-sky-400 duration-300 cursor-pointer">
                <FaTwitter />
              </div>

              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 duration-300 cursor-pointer">
                <FaInstagram />
              </div>

              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 duration-300 cursor-pointer">
                <FaWhatsapp />
              </div>

            </div>
          </div>
        </div>

        {/* NAVBAR */}
        <div className="bg-white/90 backdrop-blur-xl border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 md:px-10 h-[82px] flex items-center justify-between">

            {/* LEFT */}
            <div className="flex items-center gap-5">

              {/* MOBILE MENU */}
              <div className="md:hidden">
                <FaBars
                  className="text-2xl cursor-pointer text-gray-800"
                  onClick={() => setMenuOpen(true)}
                />
              </div>

              {/* LOGO */}
              <Link to="/" className="cursor-pointer leading-tight">
                <h1 className="text-3xl font-black tracking-wide">
                  <span className="text-slate-900">Cycle</span>
                  <span className="text-cyan-500">Zone</span>
                </h1>

                <p className="text-[11px] text-gray-500 font-medium tracking-[3px] uppercase">
                  Ride Better
                </p>
              </Link>

            </div>

            {/* RIGHT MENU */}
            <div className="hidden md:flex items-center gap-7">

              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="relative font-semibold text-gray-700 hover:text-cyan-500 transition group"
                >
                  {item.name}

                  <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

              {/* BOOK NOW */}
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-cyan-300/50 hover:scale-105 duration-300">
                Book Now
              </button>

              {/* USER */}
              <button
                onClick={() => setShowLogin(true)}
                className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-2xl text-gray-700 hover:bg-cyan-500 hover:text-white duration-300 shadow-md"
              >
                <FaUserCircle />
              </button>

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
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-bold"
            >
              <span className="text-black">Cycle</span>
              <span className="text-cyan-500">Zone</span>
            </Link>

            <FaTimes
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          </div>

          <div className="flex flex-col p-6 gap-5 text-lg font-semibold text-gray-700">

            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link to="/shop" onClick={() => setMenuOpen(false)}>
              Shop
            </Link>

            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>

            <button className="mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl shadow-lg">
              Book Now
            </button>

            <button
              onClick={() => {
                setShowLogin(true);
                setMenuOpen(false);
              }}
              className="border border-cyan-500 text-cyan-600 py-3 rounded-xl font-semibold"
            >
              Login
            </button>

          </div>
        </div>
      </header>

      {/* LOGIN POPUP */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center px-4">

          <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden">

            {/* TOP */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-8 text-white text-center">
              <h2 className="text-3xl font-bold">Welcome Back</h2>

              <p className="text-sm text-cyan-100 mt-2">
                Login to continue shopping
              </p>
            </div>

            {/* CLOSE */}
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4 text-white hover:rotate-90 duration-300"
            >
              <FaTimes size={22} />
            </button>

            {/* FORM */}
            <form className="p-8" autoComplete="off">

              {/* EMAIL */}
              <div className="mb-5">
                <label className="text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <div className="mt-2 flex items-center border border-gray-300 rounded-xl px-4 focus-within:border-cyan-500">
                  <FaEnvelope className="text-gray-400" />

                  <input
                    type="email"
                    name="email"
                    autoComplete="off"
                    placeholder="Enter your email"
                    className="w-full px-3 py-3 outline-none"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div className="mb-3">
                <label className="text-sm font-semibold text-gray-700">
                  Password
                </label>

                <div className="mt-2 flex items-center border border-gray-300 rounded-xl px-4 focus-within:border-cyan-500">
                  <FaLock className="text-gray-400" />

                  <input
                    type="password"
                    name="password"
                    autoComplete="new-password"
                    placeholder="Enter your password"
                    className="w-full px-3 py-3 outline-none"
                  />
                </div>
              </div>

              <div className="text-right mb-6">
                <a
                  href="#"
                  className="text-sm text-cyan-600 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>

              {/* BUTTON */}
              <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-bold shadow-lg hover:scale-[1.02] duration-300">
                Login
              </button>

              <p className="text-center text-sm text-gray-500 mt-5">
                Don’t have an account?{" "}
                <span className="text-cyan-600 font-semibold cursor-pointer">
                  Register
                </span>
              </p>

            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;