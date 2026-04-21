import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import API from "../services/api";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [chartData, setChartData] = useState([]);

  const fetchData = async () => {
    const productRes = await API.get("/products");
    const orderRes = await API.get("/orders");

    setProducts(productRes.data);
    setOrders(orderRes.data);

    generateChart(orderRes.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 🔥 chart data generate
  const generateChart = (orders) => {
    const dataMap = {};

    orders.forEach((o) => {
      const date = new Date(o.id).toLocaleDateString();

      if (!dataMap[date]) {
        dataMap[date] = 0;
      }

      if (o.status === "Paid") {
        dataMap[date] += Number(o.amount);
      }
    });

    const formatted = Object.keys(dataMap).map((date) => ({
      date,
      revenue: dataMap[date],
    }));

    setChartData(formatted);
  };

  // stats
  const totalProducts = products.length;
  const totalOrders = orders.length;

  const totalRevenue = orders
    .filter((o) => o.status === "Paid")
    .reduce((sum, o) => sum + Number(o.amount), 0);

  const pendingPayments = orders.filter(
    (o) => o.status === "Pending"
  ).length;

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* STATS */}
      <div className="grid grid-cols-4 gap-5 mb-8">
        <div className="bg-blue-500 text-white p-5 rounded-xl">
          <h2>Products</h2>
          <p className="text-2xl">{totalProducts}</p>
        </div>

        <div className="bg-green-500 text-white p-5 rounded-xl">
          <h2>Orders</h2>
          <p className="text-2xl">{totalOrders}</p>
        </div>

        <div className="bg-purple-500 text-white p-5 rounded-xl">
          <h2>Revenue</h2>
          <p className="text-2xl">₹{totalRevenue}</p>
        </div>

        <div className="bg-red-500 text-white p-5 rounded-xl">
          <h2>Pending</h2>
          <p className="text-2xl">{pendingPayments}</p>
        </div>
      </div>

      {/* 📊 CHART */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="text-lg font-bold mb-4">
          Revenue Chart
        </h2>

        <LineChart width={600} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
        </LineChart>
      </div>
    </Layout>
  );
}

export default Dashboard;