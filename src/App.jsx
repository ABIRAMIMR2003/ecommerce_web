import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ShopPage from "./components/ShopPage";
import ContactPage from "./components/ContactPage";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";

function App() {
  return (
    <BrowserRouter>
      {/* HEADER */}
      <Header
        phone="+91 99999 99999"
        email="yourmail@gmail.com"
      />

      {/* ROUTES */}
      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={<AboutPage />}
        />

        {/* SHOP */}
        <Route
          path="/shop"
          element={<ShopPage />}
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={<ContactPage />}
        />

        {/* CART PAGE */}
        <Route
          path="/cart"
          element={<CartPage />}
        />

        {/* CHECKOUT PAGE */}
        <Route
          path="/checkout"
          element={<CheckoutPage />}
        />
      </Routes>

      {/* FOOTER */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;