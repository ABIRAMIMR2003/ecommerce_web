import React from "react";
import {
  FaBicycle,
  FaShieldAlt,
  FaShippingFast,
  FaAward,
  FaUsers,
  FaTools,
  FaArrowRight,
} from "react-icons/fa";

function AboutPage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">

      {/* HERO SECTION */}
      <section className="relative pt-44 pb-24 bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200')] bg-cover bg-center"></div>

        <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <p className="text-cyan-400 font-semibold text-lg mb-3 tracking-wider uppercase">
              About CycleZone
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Ride Better <br /> Live Stronger
            </h1>

            <p className="text-gray-300 text-lg leading-8 mb-8 max-w-xl">
              We provide premium bicycles, helmets, accessories and riding
              essentials for beginners, daily commuters and pro riders.
            </p>

            <button className="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-full font-semibold shadow-xl transition flex items-center gap-3">
              Explore Products <FaArrowRight />
            </button>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=1000"
              alt="cycle"
              className="rounded-3xl shadow-2xl h-[430px] w-full object-cover"
            />

            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 rounded-2xl px-6 py-4 shadow-xl">
              <h3 className="text-3xl font-bold text-cyan-500">10K+</h3>
              <p className="text-sm font-medium">Happy Riders</p>
            </div>
          </div>

        </div>
      </section>

      {/* STORY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">

          <img
            src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1000"
            alt="shop"
            className="rounded-3xl shadow-xl h-[450px] w-full object-cover"
          />

          <div>
            <p className="text-cyan-500 font-semibold mb-3 uppercase tracking-wider">
              Our Story
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Trusted Cycle Store in India
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              CycleZone started with one simple mission: make quality cycling
              products available for everyone.
            </p>

            <p className="text-gray-600 leading-8 mb-8">
              Whether you're buying your first bike or upgrading your gear,
              our team helps you choose the best option.
            </p>

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-gray-50 p-5 rounded-2xl shadow hover:shadow-xl transition">
                <h3 className="text-3xl font-bold text-cyan-500">5+</h3>
                <p className="font-medium">Years Experience</p>
              </div>

              <div className="bg-gray-50 p-5 rounded-2xl shadow hover:shadow-xl transition">
                <h3 className="text-3xl font-bold text-cyan-500">500+</h3>
                <p className="font-medium">Products</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-14">
            <p className="text-cyan-500 font-semibold uppercase tracking-wider">
              Why Choose Us
            </p>

            <h2 className="text-4xl font-bold mt-2">
              Everything Riders Need
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                icon: <FaBicycle />,
                title: "Premium Cycles",
                text: "Mountain, road, kids and electric bikes.",
              },
              {
                icon: <FaShieldAlt />,
                title: "Secure Payments",
                text: "100% safe and trusted checkout system.",
              },
              {
                icon: <FaShippingFast />,
                title: "Fast Delivery",
                text: "Quick shipping across India.",
              },
              {
                icon: <FaAward />,
                title: "Best Quality",
                text: "Strong, durable and stylish products.",
              },
              {
                icon: <FaUsers />,
                title: "Expert Support",
                text: "Friendly support team ready to help.",
              },
              {
                icon: <FaTools />,
                title: "Service Care",
                text: "Maintenance and repair support available.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <div className="text-4xl text-cyan-500 mb-5">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">

          <h2 className="text-5xl font-bold mb-5">
            Ready To Start Your Ride?
          </h2>

          <p className="text-lg text-cyan-100 mb-8">
            Discover the best bicycles and accessories today.
          </p>

          <button className="bg-white text-cyan-600 px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition">
            Shop Now
          </button>

        </div>
      </section>

    </div>
  );
}

export default AboutPage;