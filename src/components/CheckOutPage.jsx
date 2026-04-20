/* ================================
   CheckoutPage.jsx
================================ */

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";

function CheckoutPage() {
  const navigate = useNavigate();

  const handleOrder = () => {
    alert("Order Placed Successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-white pt-32 px-4 pb-20">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10">

        {/* BACK */}
        <button
          onClick={() => navigate("/cart")}
          className="mb-8 bg-gray-100 px-6 py-3 rounded-2xl flex items-center gap-3 font-bold hover:bg-cyan-500 hover:text-white duration-300"
        >
          <FaArrowLeft />
          Back
        </button>

        {/* TITLE */}
        <h1 className="text-5xl font-black mb-6">
          Checkout
        </h1>

        <p className="text-gray-500 text-lg mb-10">
          Complete your order details below.
        </p>

        {/* FORM */}
        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Full Name"
            className="border p-4 rounded-2xl outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="border p-4 rounded-2xl outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="border p-4 rounded-2xl outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <input
            type="text"
            placeholder="City"
            className="border p-4 rounded-2xl outline-none focus:ring-2 focus:ring-cyan-400"
          />

        </div>

        <textarea
          placeholder="Full Address"
          className="w-full border p-4 rounded-2xl mt-6 h-32 outline-none focus:ring-2 focus:ring-cyan-400"
        ></textarea>

        {/* BUTTON */}
        <button
          onClick={handleOrder}
          className="mt-8 w-full bg-green-600 text-white py-4 rounded-2xl text-xl font-bold hover:bg-green-700 duration-300"
        >
          Place Order
        </button>

        {/* SECURE */}
        <div className="mt-6 flex items-center gap-3 text-green-600 font-bold">
          <FaCheckCircle />
          Secure Checkout Enabled
        </div>

      </div>
    </div>
  );
}

export default CheckoutPage;