import React, { useEffect, useState } from "react";

function HomePage() {
  const sliderImages = [
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=1600&q=80",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === sliderImages.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(autoSlide);
  }, []);

  const categories = [
    {
      name: "Mountain Bikes",
      img: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Road Bikes",
      img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Helmets",
      img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Accessories",
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Kids Cycles",
      img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Electric Bikes",
      img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=500&q=80",
    },
  ];

  const products = [
    {
      name: "Carbon Road Bike",
      price: "$899",
      img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Mountain Pro Cycle",
      price: "$699",
      img: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Cycling Helmet",
      price: "$59",
      img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Cycling Gloves",
      price: "$29",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <div className="bg-slate-50 text-gray-800">

      {/* HERO SLIDER */}
      <section className="relative h-[620px] overflow-hidden mt-[120px]">

        <img
          src={sliderImages[currentSlide]}
          alt="Cycling Banner"
          className="w-full h-full object-cover object-center transition-all duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">

            <p className="text-cyan-300 font-semibold mb-3 text-lg tracking-wide">
              New Cycling Collection
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-5 max-w-3xl">
              Ride Faster <br />
              Ride Better
            </h1>

            <p className="text-lg text-gray-200 mb-8 max-w-xl">
              Premium bicycles, helmets, accessories and cycling gear for
              modern riders.
            </p>

            <button className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-full font-semibold shadow-xl transition">
              Shop Now
            </button>

          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                currentSlide === index
                  ? "bg-cyan-400 scale-125"
                  : "bg-white/60"
              }`}
            ></button>
          ))}
        </div>

      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Shop by Categories
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-40 object-cover"
              />

              <div className="p-4 text-center font-semibold text-gray-700">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold mb-10 text-center">
            Trending Cycling Products
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {products.map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-5">

                  <div className="text-yellow-400 text-lg mb-2">
                    ⭐⭐⭐⭐⭐
                  </div>

                  <h3 className="font-bold text-xl mb-3">
                    {item.name}
                  </h3>

                  <div className="flex justify-between items-center">
                    <span className="text-cyan-600 font-bold text-2xl">
                      {item.price}
                    </span>

                    <button className="bg-black hover:bg-cyan-600 text-white px-5 py-2 rounded-xl transition">
                      Add
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* OFFER */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[30px] p-12 text-white text-center shadow-xl">

          <h2 className="text-5xl font-bold mb-4">
            Flat 40% OFF
          </h2>

          <p className="text-xl mb-6">
            Limited Period Mega Offer on Premium Bikes
          </p>

          <button className="bg-white text-cyan-600 px-8 py-3 rounded-full font-bold hover:scale-105 transition">
            Buy Now
          </button>

        </div>
      </section>

      {/* FEATURES */}
<section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">

    {/* Fast Delivery */}
    <div className="text-center p-8 rounded-3xl shadow hover:shadow-xl transition border border-gray-100">
      <div className="w-20 h-20 mx-auto mb-5 rounded-full border-2 border-black flex items-center justify-center text-4xl">
        🚚
      </div>

      <h3 className="font-bold text-2xl mb-2 text-black">
        Fast Delivery
      </h3>

      <p className="text-gray-600">
        Quick shipping all over India.
      </p>
    </div>

    {/* Secure Payment */}
    <div className="text-center p-8 rounded-3xl shadow hover:shadow-xl transition border border-gray-100">
      <div className="w-20 h-20 mx-auto mb-5 rounded-full border-2 border-black flex items-center justify-center text-4xl">
        🔒
      </div>

      <h3 className="font-bold text-2xl mb-2 text-black">
        Secure Payment
      </h3>

      <p className="text-gray-600">
        100% safe payment gateway.
      </p>
    </div>

    {/* Support */}
    <div className="text-center p-8 rounded-3xl shadow hover:shadow-xl transition border border-gray-100">
      <div className="w-20 h-20 mx-auto mb-5 rounded-full border-2 border-black flex items-center justify-center text-4xl">
        🎧
      </div>

      <h3 className="font-bold text-2xl mb-2 text-black">
        24/7 Support
      </h3>

      <p className="text-gray-600">
        Always here for your help.
      </p>
    </div>

  </div>
</section>
      

    </div>
  );
}

export default HomePage;