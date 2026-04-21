import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import API from "../services/api";

function Payment() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const res = await API.get("/orders");
    setOrders(res.data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const markAsPaid = async (id) => {
    await API.put(`/orders/${id}`, { status: "Paid" });
    fetchOrders();
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-5">Payments</h1>

      {orders.length === 0 ? (
        <p>No Orders Yet</p>
      ) : (
        <div className="bg-white p-5 rounded-xl shadow">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th>ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-b">
                  <td>{o.id}</td>
                  <td>{o.customer}</td>
                  <td>₹{o.amount}</td>

                  <td>
                    <span
                      className={
                        o.status === "Paid"
                          ? "text-green-600 font-bold"
                          : "text-red-500"
                      }
                    >
                      {o.status}
                    </span>
                  </td>

                  <td>
                    {o.status === "Pending" && (
                      <button
                        onClick={() => markAsPaid(o.id)}
                        className="bg-green-500 text-white px-3 py-1 rounded"
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

export default Payment;