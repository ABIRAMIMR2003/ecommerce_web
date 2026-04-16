import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-36">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 pb-10">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-cyan-900 to-blue-700 text-white p-10 md:p-16 grid md:grid-cols-2 gap-10 items-center shadow-2xl">

          {/* LEFT */}
          <div>
            <p className="text-cyan-300 font-semibold tracking-widest uppercase mb-3">
              Contact CycleZone
            </p>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-5">
              We’d Love To Hear From You
            </h1>

            <p className="text-gray-200 text-lg mb-8 max-w-xl">
              Need help choosing the perfect cycle or have any questions?
              Our team is always ready to support you.
            </p>

            <button className="bg-white text-cyan-700 px-8 py-3 rounded-full font-bold hover:scale-105 duration-300 shadow-xl">
              Get In Touch
            </button>
          </div>

          {/* RIGHT */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200"
              alt="contact"
              className="rounded-3xl h-[380px] w-full object-cover shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-4 pb-20 grid lg:grid-cols-2 gap-10">

        {/* LEFT INFO */}
        <div className="space-y-6">

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-black text-slate-900 mb-6">
              Contact Information
            </h2>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center text-xl">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="font-bold">Phone Number</p>
                  <p className="text-gray-500">+91 99999 99999</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center text-xl">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="font-bold">Email Address</p>
                  <p className="text-gray-500">cyclezone@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center text-xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="font-bold">Location</p>
                  <p className="text-gray-500">Chennai, Tamil Nadu, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center text-xl">
                  <FaClock />
                </div>

                <div>
                  <p className="font-bold">Working Hours</p>
                  <p className="text-gray-500">Mon - Sat : 9AM - 8PM</p>
                </div>
              </div>

            </div>
          </div>

          {/* SOCIAL */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center cursor-pointer hover:scale-110 duration-300">
                <FaFacebookF />
              </div>

              <div className="w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center cursor-pointer hover:scale-110 duration-300">
                <FaInstagram />
              </div>

              <div className="w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center cursor-pointer hover:scale-110 duration-300">
                <FaTwitter />
              </div>

              <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center cursor-pointer hover:scale-110 duration-300">
                <FaWhatsapp />
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-black text-slate-900 mb-6">
            Send Message
          </h2>

          <div className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500 resize-none"
            ></textarea>

            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] duration-300 shadow-lg">
              <FaPaperPlane />
              Send Message
            </button>

          </div>

        </div>

      </section>

      {/* MAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Chennai&output=embed"
            className="w-full h-[420px]"
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </div>
  );
}

export default ContactPage;