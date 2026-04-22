import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ShopPage from "./components/ShopPage";
import ContactPage from "./components/ContactPage";
function App() {
  return (
    <BrowserRouter>
      <Header
        phone="+91 99999 99999"
        email="yourmail@gmail.com"
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;