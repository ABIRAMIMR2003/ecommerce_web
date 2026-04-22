import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import API from "../services/api";

function Orders() {
  const [orders, setOrders] = useState([]);

  // fetch orders
  const fetchOrders = async () => {
    const res = await API.get("/orders");
    setOrders(res.data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // update status
  const handleStatusChange = async (id, status) => {
    await API.put(`/orders/${id}`, { status });
    fetchOrders();
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-5">Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-500">No Orders Yet</p>
      ) : (
        <div className="bg-white p-5 rounded-xl shadow">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th>ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Qty</th>
                <th>Amount</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-b">
                  <td>{o.id}</td>
                  <td>{o.customer}</td>
                  <td>{o.product_name}</td>
                  <td>{o.quantity}</td>
                  <td>₹{o.amount}</td>
                  <td>{o.payment_method}</td>

                  <td>
                    <span
                      className={`px-2 py-1 rounded text-white ${
                        o.status === "Paid"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }`}
                    >
                      {o.status}
                    </span>
                  </td>

                  <td>
                    {o.status !== "Paid" && (
                      <button
                        onClick={() =>
                          handleStatusChange(o.id, "Paid")
                        }
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                      >
                        Mark Paid
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Layout>
  );
}

export default Orders;