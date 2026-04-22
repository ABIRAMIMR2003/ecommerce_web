const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="bg-white shadow p-4 flex justify-between">
      <h1 className="font-semibold">Admin Dashboard</h1>
      <button onClick={handleLogout} className="text-red-500">
        Logout
      </button>
    </div>
  );
};

export default Navbar;