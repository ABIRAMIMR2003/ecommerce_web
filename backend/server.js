const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let products = [];
let categories = [];

/* ---------------- PRODUCTS ---------------- */

/* ADD */
app.post("/api/products", (req, res) => {
  const newProduct = { id: Date.now(), ...req.body };
  products.push(newProduct);
  res.json(newProduct);
});

/* GET */
app.get("/api/products", (req, res) => {
  res.json(products);
});

/* UPDATE */
app.put("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products[index] = { ...products[index], ...req.body };

  res.json(products[index]);
});

/* DELETE */
app.delete("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  products = products.filter(p => p.id !== id);
  res.json({ message: "Deleted" });
});

/* ---------------- CATEGORIES ---------------- */

/* ADD CATEGORY */
app.post("/api/categories", (req, res) => {
  const newCategory = { id: Date.now(), name: req.body.name };
  categories.push(newCategory);
  res.json(newCategory);
});

/* GET CATEGORY */
app.get("/api/categories", (req, res) => {
  res.json(categories);
});

/* DELETE CATEGORY */
app.delete("/api/categories/:id", (req, res) => {
  const id = Number(req.params.id);
  categories = categories.filter(c => c.id !== id);
  res.json({ message: "Deleted" });
});
let orders = [];

/* CREATE ORDER (FAKE USER SIDE) */
app.post("/api/orders", (req, res) => {
  const newOrder = {
    id: Date.now(),
    customer: req.body.customer || "Guest",
    amount: req.body.amount,
    status: "Pending",
  };

  orders.push(newOrder);
  res.json(newOrder);
});

/* GET ORDERS */
app.get("/api/orders", (req, res) => {
  res.json(orders);
});

/* UPDATE PAYMENT STATUS */
app.put("/api/orders/:id", (req, res) => {
  const id = Number(req.params.id);

  const order = orders.find(o => o.id === id);

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  order.status = req.body.status;

  res.json(order);
});

/* ---------------- SERVER ---------------- */

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});