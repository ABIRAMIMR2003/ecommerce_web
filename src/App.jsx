import React from "react";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header
        phone="+91 99999 99999"
        email="yourmail@gmail.com"
      />

      {/* Home Page Content */}
      <HomePage />

      <Footer />
    </>
  );
}

export default App;