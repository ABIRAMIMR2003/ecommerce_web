const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

/* ---------------- PRODUCTS ---------------- */

/* ADD */
app.post("/api/products", (req, res) => {
  const { name, price, category, image, description } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: "Name & Price required" });
  }

  const sql = `
    INSERT INTO products (name, price, category, image, description)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [name, price, category, image, description], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({ id: result.insertId, name, price, category, image, description });
  });
});

/* GET */
app.get("/api/products", (req, res) => {
  db.query("SELECT * FROM products ORDER BY id DESC", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

/* UPDATE */
app.put("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, price, category, image, description } = req.body;

  const sql = `
    UPDATE products 
    SET name=?, price=?, category=?, image=?, description=? 
    WHERE id=?
  `;

  db.query(sql, [name, price, category, image, description, id], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Updated" });
  });
});

/* DELETE */
app.delete("/api/products/:id", (req, res) => {
  db.query("DELETE FROM products WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Deleted" });
  });
});

/* ---------------- CATEGORIES ---------------- */

/* ADD */
app.post("/api/categories", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Category name required" });
  }

  db.query("INSERT INTO categories (name) VALUES (?)", [name], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({ id: result.insertId, name });
  });
});

/* GET */
app.get("/api/categories", (req, res) => {
  db.query("SELECT * FROM categories ORDER BY id DESC", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

/* DELETE */
app.delete("/api/categories/:id", (req, res) => {
  db.query("DELETE FROM categories WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Deleted" });
  });
});

/* ---------------- ORDERS ---------------- */

/* CREATE */
app.post("/api/orders", (req, res) => {
  const { customer, product_name, quantity, amount, payment_method } = req.body;

  if (!product_name || !amount) {
    return res.status(400).json({ message: "Product & amount required" });
  }

  const sql = `
    INSERT INTO orders 
    (customer, product_name, quantity, amount, status, payment_method) 
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      customer || "Guest",
      product_name,
      quantity || 1,
      amount,
      "Pending",
      payment_method || "COD",
    ],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json({
        id: result.insertId,
        customer,
        product_name,
        quantity,
        amount,
        status: "Pending",
        payment_method,
      });
    }
  );
});

/* GET */
app.get("/api/orders", (req, res) => {
  db.query("SELECT * FROM orders ORDER BY date DESC", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

/* UPDATE STATUS */
app.put("/api/orders/:id", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  db.query("UPDATE orders SET status=? WHERE id=?", [status, id], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Status Updated" });
  });
});

/* DELETE */
app.delete("/api/orders/:id", (req, res) => {
  db.query("DELETE FROM orders WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Order Deleted" });
  });
});

/* ---------------- SERVER ---------------- */

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});