import React, { useState } from "react";
import {
  FaStar,
  FaSearch,
  FaArrowLeft,
  FaCheckCircle,
  FaMinus,
  FaPlus,
  FaShoppingCart,
  FaBolt,
  FaBicycle,
} from "react-icons/fa";

function ShopPage() {
  const products = [
    {
      id: 1,
      name: "Mountain Beast X1",
      brand: "CycleZone",
      stock: "In Stock",
      material: "Alloy Steel",
      color: "Black / Blue",
      weight: "14 KG",
      warranty: "1 Year",
      price: 24999,
      oldPrice: 29999,
      category: "Mountain Bikes",
      rating: 4.8,
      reviews: 124,
      description:
        "Powerful mountain cycle with premium suspension, smooth riding comfort and strong alloy frame.",
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000",
        "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=1000",
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1000",
      ],
    },
    {
      id: 2,
      name: "Road Speed Pro",
      brand: "Velocity",
      stock: "In Stock",
      material: "Carbon Fiber",
      color: "Red",
      weight: "10 KG",
      warranty: "2 Years",
      price: 31999,
      oldPrice: 36999,
      category: "Road Bikes",
      rating: 4.9,
      reviews: 210,
      description:
        "Lightweight road bike designed for speed, racing and long rides.",
      images: [
        "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=1000",
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1000",
      ],
    },
    {
      id: 3,
      name: "Helmet Pro Shield",
      brand: "RideSafe",
      stock: "In Stock",
      material: "ABS Shell",
      color: "Black",
      weight: "800 GM",
      warranty: "6 Months",
      price: 2999,
      oldPrice: 3999,
      category: "Helmets",
      rating: 4.7,
      reviews: 89,
      description:
        "Premium safety helmet with airflow design and inner comfort padding.",
      images: [
        "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=1000",
      ],
    },
    {
      id: 4,
      name: "Electric Urban Ride",
      brand: "VoltBike",
      stock: "In Stock",
      material: "Aluminium",
      color: "Silver",
      weight: "19 KG",
      warranty: "2 Years",
      price: 54999,
      oldPrice: 61999,
      category: "Electric Bikes",
      rating: 4.9,
      reviews: 310,
      description:
        "Modern electric cycle with smart battery performance and city riding comfort.",
      images: [
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1000",
      ],
    },
  ];

  const categories = [
    "All",
    "Mountain Bikes",
    "Road Bikes",
    "Helmets",
    "Electric Bikes",
  ];

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [qty, setQty] = useState(1);

  const filteredProducts = products.filter((item) => {
    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  const renderStars = (rating) => {
    const full = Math.round(rating);
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={
          i < full ? "text-yellow-400" : "text-gray-300"
        }
      />
    ));
  };

  /* ================================================= */
  /* PRODUCT DETAIL PAGE */
  /* ================================================= */

  if (selectedProduct) {
    const relatedProducts = products.filter(
      (item) => item.id !== selectedProduct.id
    );

    const totalPrice = selectedProduct.price * qty;
    const totalOldPrice = selectedProduct.oldPrice * qty;

    const dynamicRating = (
      selectedProduct.rating +
      qty * 0.02
    ).toFixed(1);

    const dynamicReviews =
      selectedProduct.reviews + qty * 4;

    return (
      <div className="bg-gray-50 min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">

          {/* BACK */}
          <button
            onClick={() => {
              setSelectedProduct(null);
              setQty(1);
            }}
            className="bg-white px-5 py-3 rounded-2xl shadow mb-8 flex items-center gap-2"
          >
            <FaArrowLeft />
            Back
          </button>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* LEFT */}
            <div>
              <div className="bg-white rounded-3xl shadow p-5">
                <img
                  src={mainImage || selectedProduct.images[0]}
                  alt=""
                  className="w-full h-[470px] rounded-3xl object-cover"
                />
              </div>

              <div className="flex gap-4 mt-5 flex-wrap">
                {selectedProduct.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    onClick={() => setMainImage(img)}
                    className="w-24 h-24 rounded-2xl object-cover cursor-pointer border-2 border-cyan-500"
                  />
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-white rounded-3xl shadow p-8">

              <p className="text-cyan-500 font-bold mb-2">
                {selectedProduct.category}
              </p>

              <h1 className="text-4xl font-black mb-4">
                {selectedProduct.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-5">
                {renderStars(dynamicRating)}
                <span className="font-semibold">
                  {dynamicRating} ({dynamicReviews} Reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-black text-cyan-600">
                  ₹{totalPrice}
                </span>

                <span className="line-through text-gray-400 text-xl">
                  ₹{totalOldPrice}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-8 mb-8">
                {selectedProduct.description}
              </p>

              {/* QUANTITY */}
              <div className="mb-8">
                <h3 className="font-bold mb-3 text-lg">
                  Quantity
                </h3>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() =>
                      qty > 1 && setQty(qty - 1)
                    }
                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center"
                  >
                    <FaMinus />
                  </button>

                  <span className="text-2xl font-bold w-10 text-center">
                    {qty}
                  </span>

                  <button
                    onClick={() => setQty(qty + 1)}
                    className="w-12 h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-2xl font-bold">
                  Add To Cart
                </button>

                <button className="bg-slate-900 text-white py-4 rounded-2xl font-bold">
                  Continue Order
                </button>
              </div>

              {/* HIGHLIGHTS */}
              <div className="border-t pt-8">
                <h3 className="text-2xl font-bold mb-5">
                  Product Highlights
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    ["Brand", selectedProduct.brand],
                    ["Stock", selectedProduct.stock],
                    ["Material", selectedProduct.material],
                    ["Color", selectedProduct.color],
                    ["Weight", selectedProduct.weight],
                    ["Warranty", selectedProduct.warranty],
                    ["Quantity", qty + " Unit"],
                    ["Total", "₹" + totalPrice],
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 rounded-2xl p-4 shadow-sm"
                    >
                      <p className="text-gray-500 font-semibold mb-1">
                        {item[0]}
                      </p>
                      <p className="font-bold text-lg">
                        {item[1]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CUSTOMER REVIEWS */}
              <div className="mt-10 border-t pt-8">
                <h3 className="text-2xl font-bold mb-4">
                  Customer Ratings
                </h3>

                {[
                  "Excellent Quality",
                  "Very Smooth Ride",
                  "Worth the Price",
                ].map((txt, i) => (
                  <div
                    key={i}
                    className="bg-gray-100 rounded-2xl p-4 mb-3 flex items-center gap-2"
                  >
                    {renderStars(5)}
                    <span>{txt}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* RELATED PRODUCTS */}
          <div className="mt-16">
            <h2 className="text-3xl font-black mb-8">
              You Might Also Like
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 duration-300"
                >
                  <img
                    src={item.images[0]}
                    alt=""
                    className="w-full h-52 object-cover"
                  />

                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2">
                      {item.name}
                    </h3>

                    <p className="text-cyan-600 font-bold mb-4">
                      ₹{item.price}
                    </p>

                    <button
                      onClick={() => {
                        setSelectedProduct(item);
                        setMainImage(item.images[0]);
                        setQty(1);
                      }}
                      className="w-full bg-cyan-500 text-white py-2 rounded-xl"
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    );
  }

  /* ================================================= */
  /* SHOP PAGE */
  /* ================================================= */

  return (
    <div className="bg-gray-50 min-h-screen pt-32">

      {/* TOP BANNER IMAGE */}
      <section className="max-w-7xl mx-auto px-4 pb-10">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">

          <img
            src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1400"
            alt=""
            className="w-full h-[420px] object-cover"
          />

          <div className="absolute inset-0 bg-black/50 flex items-center">
            <div className="p-10 text-white max-w-xl">
              <p className="uppercase tracking-widest text-cyan-300 font-bold mb-3">
                Premium Collection
              </p>

              <h1 className="text-5xl font-black leading-tight mb-5">
                Shop Your Dream Cycle
              </h1>

              <p className="text-lg text-gray-200 mb-6">
                Explore premium bikes, helmets &
                accessories with stylish designs.
              </p>

              <button className="bg-cyan-500 px-8 py-3 rounded-full font-bold">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section className="max-w-7xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-3xl shadow-lg p-5">

          <div className="flex items-center gap-3 border rounded-2xl px-4 py-3 mb-5">
            <FaSearch className="text-gray-400" />

            <input
              type="text"
              placeholder="Search products..."
              className="w-full outline-none"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((item, i) => (
              <button
                key={i}
                onClick={() =>
                  setSelectedCategory(item)
                }
                className={`px-5 py-2 rounded-full font-semibold ${
                  selectedCategory === item
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 duration-300"
            >
              <img
                src={item.images[0]}
                alt=""
                className="w-full h-64 object-cover"
              />

              <div className="p-6">

                <div className="flex gap-1 mb-3">
                  {renderStars(item.rating)}
                </div>

                <h3 className="text-xl font-bold mb-2">
                  {item.name}
                </h3>

                <p className="text-cyan-600 text-2xl font-black mb-4">
                  ₹{item.price}
                </p>

                <button
                  onClick={() => {
                    setSelectedProduct(item);
                    setMainImage(item.images[0]);
                    setQty(1);
                  }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-2xl font-bold"
                >
                  View Details
                </button>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-6">

          <div className="p-6 rounded-3xl shadow text-center">
            <FaBolt className="mx-auto text-4xl text-cyan-500 mb-4" />
            <h3 className="font-bold text-xl">
              Fast Delivery
            </h3>
          </div>

          <div className="p-6 rounded-3xl shadow text-center">
            <FaBicycle className="mx-auto text-4xl text-cyan-500 mb-4" />
            <h3 className="font-bold text-xl">
              Premium Cycles
            </h3>
          </div>

          <div className="p-6 rounded-3xl shadow text-center">
            <FaShoppingCart className="mx-auto text-4xl text-cyan-500 mb-4" />
            <h3 className="font-bold text-xl">
              Easy Shopping
            </h3>
          </div>

          <div className="p-6 rounded-3xl shadow text-center">
            <FaStar className="mx-auto text-4xl text-cyan-500 mb-4" />
            <h3 className="font-bold text-xl">
              Top Rated
            </h3>
          </div>

        </div>
      </section>

    </div>
  );
}

export default ShopPage;

