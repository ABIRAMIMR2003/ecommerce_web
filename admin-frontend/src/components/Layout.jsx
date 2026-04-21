import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 bg-gray-100 min-h-screen">
        
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="p-5">
          {children}
        </div>

      </div>
    </div>
  );
}

export default Layout;