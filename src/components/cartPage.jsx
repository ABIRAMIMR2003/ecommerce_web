import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaArrowLeft,
  FaLock,
  FaTruck,
  FaUndo,
  FaHeadset,
  FaMinus,
  FaPlus,
  FaTrash,
} from "react-icons/fa";

function CartPage() {
  const navigate = useNavigate();
  const location = useLocation();

  /* Shop page la click panna exact product varum */
  const cartItem = location.state?.product || {
    name: "Mountain Beast X1",
    price: 24999,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000",
    qty: 1,
  };

  const [qty, setQty] = useState(cartItem.qty || 1);

  const subtotal = cartItem.price * qty;
  const discount = 500;
  const total = subtotal - discount;

  return (
    <div className="min-h-screen bg-gray-100 pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2">

          {/* BACK BUTTON */}
          <button
            onClick={() => navigate("/shop")}
            className="mb-6 bg-white px-6 py-3 rounded-2xl shadow flex items-center gap-3 font-bold hover:bg-cyan-500 hover:text-white duration-300"
          >
            <FaArrowLeft />
            Back to Shop
          </button>

          {/* CART BOX */}
          <div className="bg-white rounded-3xl shadow-xl p-6">

            <h1 className="text-4xl font-black mb-4">
              Shopping Cart
            </h1>

            <p className="text-gray-500 text-lg">
              Your selected product is ready for checkout.
            </p>

            {/* PRODUCT CARD */}
            <div className="mt-8 border rounded-3xl p-5 flex flex-col md:flex-row gap-6 items-center hover:shadow-lg duration-300">

              {/* EXACT CLICKED IMAGE */}
              <img
                src={cartItem.image}
                alt={cartItem.name}
                className="w-44 h-44 object-cover rounded-2xl"
              />

              {/* DETAILS */}
              <div className="flex-1 w-full">

                <h3 className="font-bold text-3xl mb-2">
                  {cartItem.name}
                </h3>

                <p className="text-green-600 text-3xl font-black mb-4">
                  ₹{cartItem.price}
                </p>

                {/* QUANTITY */}
                <div className="flex items-center gap-4">

                  <button
                    onClick={() =>
                      qty > 1 && setQty(qty - 1)
                    }
                    className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300"
                  >
                    <FaMinus className="mx-auto" />
                  </button>

                  <span className="text-2xl font-bold min-w-[30px] text-center">
                    {qty}
                  </span>

                  <button
                    onClick={() => setQty(qty + 1)}
                    className="w-10 h-10 rounded-full bg-cyan-500 text-white hover:bg-cyan-600"
                  >
                    <FaPlus className="mx-auto" />
                  </button>

                </div>

                {/* REMOVE */}
                <button
                  onClick={() => navigate("/shop")}
                  className="mt-5 text-red-500 flex items-center gap-2 font-semibold hover:text-red-600"
                >
                  <FaTrash />
                  Remove
                </button>

              </div>

              {/* TOTAL */}
              <div className="text-right">
                <p className="text-gray-500 mb-2">
                  Total
                </p>

                <p className="text-cyan-600 font-black text-3xl">
                  ₹{subtotal}
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white rounded-3xl shadow-xl p-8 h-fit sticky top-36">

          <h2 className="text-3xl font-black mb-6">
            Order Summary
          </h2>

          <div className="space-y-4 text-lg">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600 font-bold">
                Free
              </span>
            </div>

            <div className="flex justify-between text-green-600">
              <span>Discount</span>
              <span>-₹{discount}</span>
            </div>

            <hr />

            <div className="flex justify-between text-3xl font-black">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

          </div>

          {/* BUTTONS */}
          <button
            onClick={() => navigate("/checkout")}
            className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-xl font-bold"
          >
            Proceed To Checkout
          </button>

          <button
            onClick={() => navigate("/shop")}
            className="mt-4 w-full border py-4 rounded-2xl font-bold hover:bg-gray-100"
          >
            Continue Shopping
          </button>

          {/* FEATURES */}
          <div className="mt-8 space-y-4 text-gray-600">

            <div className="flex items-center gap-3">
              <FaLock className="text-green-600" />
              Secure Payment
            </div>

            <div className="flex items-center gap-3">
              <FaTruck className="text-blue-500" />
              Fast Delivery
            </div>

            <div className="flex items-center gap-3">
              <FaUndo className="text-orange-500" />
              Easy Returns
            </div>

            <div className="flex items-center gap-3">
              <FaHeadset className="text-pink-500" />
              24/7 Support
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default CartPage;