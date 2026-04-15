import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header 
        phone="+91 99999 99999"
        email="yourmail@gmail.com"
      />

      {/* Main Content */}
      <main className="p-6 text-center min-h-screen">
        <h1 className="text-2xl font-bold">Welcome to MyShop</h1>
        <p className="mt-2 text-gray-600">
          Your ecommerce homepage starts here.
        </p>
      </main>
      <Footer />
    </>
  );
}
export default App;