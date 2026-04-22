const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl mb-4">Dashboard</h2>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-4 shadow">Orders: 120</div>
        <div className="bg-white p-4 shadow">Products: 80</div>
        <div className="bg-white p-4 shadow">Users: 45</div>
        <div className="bg-white p-4 shadow">Revenue: ₹5000</div>
      </div>
    </div>
  );
};

export default Dashboard;