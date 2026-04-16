import React from "react";
import {
  FaShoppingCart,
  FaStar,
  FaHeart,
  FaSearch,
  FaFilter,
  FaBolt,
  FaBicycle,
} from "react-icons/fa";

function ShopPage() {
  const products = [
    {
      id: 1,
      name: "Mountain Beast X1",
      price: "₹24,999",
      oldPrice: "₹29,999",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
      tag: "Best Seller",
    },
    {
      id: 2,
      name: "Road Speed Pro",
      price: "₹31,999",
      oldPrice: "₹36,999",
      image:
        "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=800",
      tag: "Hot Deal",
    },
    {
      id: 3,
      name: "Kids Smart Cycle",
      price: "₹12,499",
      oldPrice: "₹15,999",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800",
      tag: "New",
    },
    {
      id: 4,
      name: "Electric Urban Ride",
      price: "₹54,999",
      oldPrice: "₹61,999",
      image:
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800",
      tag: "Trending",
    },
    {
      id: 5,
      name: "Helmet Pro Shield",
      price: "₹2,999",
      oldPrice: "₹3,999",
      image:
        "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=800",
      tag: "Safety",
    },
    {
      id: 6,
      name: "Cycle Gloves Max",
      price: "₹999",
      oldPrice: "₹1,499",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
      tag: "Popular",
    },
  ];

  const categories = [
    "Mountain Bikes",
    "Road Bikes",
    "Kids Cycle",
    "Electric Bikes",
    "Helmets",
    "Accessories",
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-36">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 pb-10">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-cyan-900 to-blue-700 text-white p-10 md:p-16 grid md:grid-cols-2 gap-10 items-center shadow-2xl">

          <div>
            <p className="text-cyan-300 font-semibold tracking-widest uppercase mb-3">
              Premium Collection
            </p>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-5">
              Shop Your Dream Cycle Today
            </h1>

            <p className="text-gray-200 text-lg mb-8 max-w-xl">
              Premium bikes, helmets, accessories and stylish riding gear
              available at best prices.
            </p>

            <button className="bg-white text-cyan-700 px-8 py-3 rounded-full font-bold hover:scale-105 duration-300 shadow-xl">
              Explore Now
            </button>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=1200"
              alt="cycle"
              className="rounded-3xl h-[380px] w-full object-cover shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* SEARCH + FILTER */}
      <section className="max-w-7xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-3xl shadow-lg p-5 flex flex-col md:flex-row gap-4 items-center justify-between">

          <div className="flex items-center gap-3 border rounded-2xl px-4 py-3 w-full md:w-[420px]">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((item, index) => (
              <button
                key={index}
                className="px-5 py-2 rounded-full bg-gray-100 hover:bg-cyan-500 hover:text-white duration-300 text-sm font-semibold"
              >
                {item}
              </button>
            ))}
          </div>

          <button className="flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-2xl">
            <FaFilter />
            Filter
          </button>

        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 pb-20">

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-black text-slate-900">
            Trending Products
          </h2>

          <p className="text-gray-500 font-medium">
            100+ Products Available
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300 group"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-64 w-full object-cover group-hover:scale-110 duration-500"
                />

                <span className="absolute top-4 left-4 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {item.tag}
                </span>

                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:text-red-500">
                  <FaHeart />
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <div className="flex text-yellow-400 gap-1 mb-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.name}
                </h3>

                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl font-black text-cyan-600">
                    {item.price}
                  </span>

                  <span className="text-gray-400 line-through">
                    {item.oldPrice}
                  </span>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] duration-300">
                  <FaShoppingCart />
                  Add To Cart
                </button>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* WHY SHOP */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-6">

          <div className="p-6 rounded-3xl shadow text-center">
            <FaBolt className="mx-auto text-4xl text-cyan-500 mb-4" />
            <h3 className="font-bold text-xl mb-2">Fast Delivery</h3>
            <p className="text-gray-500 text-sm">
              Delivered across India quickly.
            </p>
          </div>

          <div className="p-6 rounded-3xl shadow text-center">
            <FaBicycle className="mx-auto text-4xl text-cyan-500 mb-4" />
            <h3 className="font-bold text-xl mb-2">Premium Cycles</h3>
            <p className="text-gray-500 text-sm">
              Stylish & durable bikes.
            </p>
          </div>

          <div className="p-6 rounded-3xl shadow text-center">
            <FaShoppingCart className="mx-auto text-4xl text-cyan-500 mb-4" />
            <h3 className="font-bold text-xl mb-2">Easy Shopping</h3>
            <p className="text-gray-500 text-sm">
              Smooth shopping experience.
            </p>
          </div>

          <div className="p-6 rounded-3xl shadow text-center">
            <FaStar className="mx-auto text-4xl text-cyan-500 mb-4" />
            <h3 className="font-bold text-xl mb-2">Top Rated</h3>
            <p className="text-gray-500 text-sm">
              Trusted by happy customers.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default ShopPage;