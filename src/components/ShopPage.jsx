import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaStar,
  FaSearch,
  FaArrowLeft,
  FaMinus,
  FaPlus,
  FaShoppingCart,
  FaBolt,
  FaBicycle,
  FaHeart,
  FaEye,
} from "react-icons/fa";

function ShopPage() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([
    /* SHOES */
    {
      id: 1,
      name: "Nike Air Zoom",
      price: 4999,
      oldPrice: 6999,
      category: "Shoes",
      rating: 0,
      reviews: 126,
      liked: false,
      description:
        "Premium running shoe with lightweight comfort and stylish design.",
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000",
        "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=1000",
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=1000",
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=1000",
      ],
    },

    /* CYCLE */
    {
      id: 2,
      name: "Road Speed Pro",
      price: 18999,
      oldPrice: 23999,
      category: "Cycles",
      rating: 0,
      reviews: 98,
      liked: false,
      description: "Ultra lightweight cycle for speed rides and racing.",
      images: [
        "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=1000",
        "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=1000",
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1000",
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1000",
      ],
    },

    /* HELMET */
    {
      id: 3,
      name: "Helmet Shield X",
      price: 1999,
      oldPrice: 2999,
      category: "Helmets",
      rating: 0,
      reviews: 212,
      liked: false,
      description: "Strong safety helmet with airflow comfort technology.",
      images: [
        "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=1000",
        "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=1000",
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=1000",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000",
      ],
    },

    /* ELECTRIC BIKE */
    {
      id: 4,
      name: "Electric Ride Pro",
      price: 25999,
      oldPrice: 31999,
      category: "Electric Bikes",
      rating: 0,
      reviews: 87,
      liked: false,
      description: "Modern electric bike with smart battery system.",
      images: [
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1000",
        "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=1000",
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1000",
        "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=1000",
      ],
    },
  ]);

  const categories = [
    "All",
    "Shoes",
    "Cycles",
    "Helmets",
    "Electric Bikes",
  ];

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [qty, setQty] = useState(1);

  const toggleLike = (id) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, liked: !item.liked } : item
      )
    );
  };

  const giveStar = (id, star) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, rating: star } : item
      )
    );
  };

  const likedProducts = products.filter((item) => item.liked);

  const filteredProducts = products.filter((item) => {
    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  const renderStars = (id, rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        onClick={() => giveStar(id, i + 1)}
        className={`cursor-pointer text-xl ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  const getUpdatedProduct = () => {
    return products.find(
      (item) => item.id === selectedProduct.id
    );
  };

  /* DETAILS PAGE */
  if (selectedProduct) {
    const liveProduct = getUpdatedProduct();

    return (
      <div className="bg-slate-50 min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">

          <button
            onClick={() => setSelectedProduct(null)}
            className="mb-8 bg-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-3 font-bold"
          >
            <FaArrowLeft />
            Back
          </button>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* LEFT */}
            <div>
              <div className="bg-white p-5 rounded-3xl shadow-xl">
                <img
                  src={mainImage || liveProduct.images[0]}
                  alt=""
                  className="w-full h-[500px] object-cover rounded-3xl"
                />
              </div>

              <div className="grid grid-cols-4 gap-4 mt-5">
                {liveProduct.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    onClick={() => setMainImage(img)}
                    className="w-full h-24 rounded-2xl object-cover cursor-pointer border-2 border-cyan-500"
                  />
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-white rounded-3xl shadow-xl p-8">

              <p className="text-cyan-500 font-bold mb-2">
                {liveProduct.category}
              </p>

              <h1 className="text-5xl font-black mb-5">
                {liveProduct.name}
              </h1>

              <div className="flex gap-2 mb-5">
                {renderStars(
                  liveProduct.id,
                  liveProduct.rating
                )}
              </div>

              <div className="mb-6">
                <span className="text-5xl font-black text-cyan-600">
                  ₹{liveProduct.price * qty}
                </span>

                <span className="ml-4 text-2xl text-gray-400 line-through">
                  ₹{liveProduct.oldPrice * qty}
                </span>
              </div>

              <p className="text-gray-600 mb-8">
                {liveProduct.description}
              </p>

              {/* QTY */}
              <div className="mb-8">
                <h3 className="font-bold mb-4">
                  Quantity
                </h3>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() =>
                      qty > 1 && setQty(qty - 1)
                    }
                    className="w-12 h-12 rounded-full bg-gray-100"
                  >
                    <FaMinus className="mx-auto" />
                  </button>

                  <span className="text-2xl font-bold">
                    {qty}
                  </span>

                  <button
                    onClick={() => setQty(qty + 1)}
                    className="w-12 h-12 rounded-full bg-cyan-500 text-white"
                  >
                    <FaPlus className="mx-auto" />
                  </button>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="grid sm:grid-cols-2 gap-4">

                <button
                  onClick={() =>
                    navigate("/cart", {
                      state: {
                        product: {
                          name: liveProduct.name,
                          price: liveProduct.price,
                          image:
                            mainImage ||
                            liveProduct.images[0],
                          qty,
                        },
                      },
                    })
                  }
                  className="py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600"
                >
                  Add To Cart
                </button>

                <button
                  onClick={() =>
                    navigate("/checkout", {
                      state: {
                        product: {
                          name: liveProduct.name,
                          price: liveProduct.price,
                          image:
                            mainImage ||
                            liveProduct.images[0],
                          qty,
                        },
                      },
                    })
                  }
                  className="py-4 rounded-2xl font-bold text-white bg-green-500"
                >
                  Buy Now
                </button>

              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }

  /* MAIN PAGE */
  return (
    <div className="bg-slate-50 min-h-screen pt-32">

      {/* LIKED */}
      {likedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 pb-6">
          <div className="bg-white rounded-3xl shadow-xl p-5">

            <h2 className="text-2xl font-black mb-4 text-pink-500">
              ❤️ Liked Products
            </h2>

            <div className="flex flex-wrap gap-3">
              {likedProducts.map((item) => (
                <div
                  key={item.id}
                  className="px-4 py-2 bg-pink-100 rounded-full font-semibold"
                >
                  {item.name}
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* SEARCH */}
      <section className="max-w-7xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-3xl shadow-xl p-5">

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

          <div className="flex gap-3 flex-wrap">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="relative">

                <img
                  src={item.images[0]}
                  alt=""
                  className="w-full h-64 object-cover"
                />

                <div className="absolute top-3 right-3 flex flex-col gap-3">

                  <button
                    onClick={() =>
                      toggleLike(item.id)
                    }
                    className="bg-white p-3 rounded-full shadow"
                  >
                    <FaHeart
                      className={
                        item.liked
                          ? "text-red-500"
                          : "text-gray-600"
                      }
                    />
                  </button>

                  <button
                    onClick={() => {
                      setSelectedProduct(item);
                      setMainImage(item.images[0]);
                      setQty(1);
                    }}
                    className="bg-white p-3 rounded-full shadow"
                  >
                    <FaEye />
                  </button>

                </div>
              </div>

              <div className="p-6">

                <div className="flex gap-1 mb-2">
                  {renderStars(item.id, item.rating)}
                </div>

                <p className="text-sm text-gray-500 mb-2">
                  {item.reviews} Reviews
                </p>

                <h3 className="text-xl font-bold mb-2">
                  {item.name}
                </h3>

                <p className="text-gray-500 mb-3">
                  {item.category}
                </p>

                <p className="text-cyan-600 text-2xl font-black mb-2">
                  ₹{item.price}
                </p>

                <p className="text-gray-400 line-through mb-5">
                  ₹{item.oldPrice}
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
              Premium Quality
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