import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="bg-white shadow p-4 flex justify-between items-center relative">
      
      <h1 className="text-lg font-semibold">Admin Dashboard</h1>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4 relative">

        {/* PROFILE ICON */}
        <div
          onClick={() => setOpen(!open)}
          className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center cursor-pointer"
        >
          A
        </div>

        {/* DROPDOWN */}
        {open && (
          <div className="absolute right-0 top-12 bg-white shadow rounded w-40">
            
            <button
  onClick={() => (window.location.href = "/profile")}
  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
>
  Profile
</button>

            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
              Settings
            </button>

            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
            >
              Logout
            </button>

          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;