import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/dashboard" },

    { name: "Products", path: "/products" },
    { name: "Categories", path: "/categories" },

    { name: "Orders", path: "/orders" },
    { name: "Customers", path: "/customers" },

    { name: "Offers", path: "/offers" },
    { name: "Coupons", path: "/coupons" },

    { name: "Payment", path: "/Payment" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-5">
      
      <h2 className="text-2xl font-bold mb-6">🛒 Admin</h2>

      <ul className="space-y-2">
        {menu.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`block px-3 py-2 rounded-lg transition ${
                location.pathname === item.path
                  ? "bg-purple-600"
                  : "hover:bg-gray-700"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Sidebar;