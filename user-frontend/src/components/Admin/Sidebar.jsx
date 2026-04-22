import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-60 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

      <ul className="space-y-3">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;