import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Offers from "./pages/Offers";
import Coupons from "./pages/Coupons";
import Payment from "./pages/Payment";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Login />} />

        {/* Protected */}
        <Route path="/dashboard" element={
          <ProtectedRoute><Dashboard /></ProtectedRoute>
        } />

        <Route path="/products" element={
          <ProtectedRoute><Products /></ProtectedRoute>
        } />

        <Route path="/categories" element={
          <ProtectedRoute><Categories /></ProtectedRoute>
        } />

        <Route path="/orders" element={
          <ProtectedRoute><Orders /></ProtectedRoute>
        } />

        <Route path="/customers" element={
          <ProtectedRoute><Customers /></ProtectedRoute>
        } />

        <Route path="/offers" element={
          <ProtectedRoute><Offers /></ProtectedRoute>
        } />

        <Route path="/coupons" element={
          <ProtectedRoute><Coupons /></ProtectedRoute>
        } />

        <Route path="/payment" element={
          <ProtectedRoute><Payment /></ProtectedRoute>
        } />
        <Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>
        <Route path="/settings" element={
          <ProtectedRoute><Settings /></ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;