import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import API from "../services/api";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]); // 🔥 NEW

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    description: "",
  });

  const [editId, setEditId] = useState(null);

  // fetch products
  const fetchProducts = async () => {
    const res = await API.get("/products");
    setProducts(res.data);
  };

  // 🔥 fetch categories
  const fetchCategories = async () => {
    const res = await API.get("/categories");
    setCategories(res.data);
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories(); // 🔥 IMPORTANT
  }, []);

  // input
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      const file = files[0];
      setForm({ ...form, image: URL.createObjectURL(file) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.price) return;

    if (editId !== null) {
      await API.put(`/products/${editId}`, form);
    } else {
      await API.post("/products", form);
    }

    fetchProducts();

    setForm({
      name: "",
      price: "",
      category: "",
      image: "",
      description: "",
    });

    setEditId(null);
  };

  // edit
  const handleEdit = (product) => {
    setForm({
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.image,
      description: product.description,
    });

    setEditId(product.id);
  };

  // delete
  const handleDelete = async (id) => {
    await API.delete(`/products/${id}`);
    fetchProducts();
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-5">Products</h1>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-5 rounded-xl shadow grid grid-cols-2 gap-4 mb-6"
      >
        <input
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* 🔥 DROPDOWN START */}
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Select Category</option>

          {categories.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
        {/* 🔥 DROPDOWN END */}

        <input
          name="image"
          type="file"
          onChange={handleChange}
          className="col-span-2"
        />

        {form.image && (
          <img
            src={form.image}
            className="w-24 h-24 object-cover rounded"
          />
        )}

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 rounded col-span-2"
        />

        <button className="bg-purple-600 text-white py-2 rounded col-span-2">
          {editId !== null ? "Update Product" : "Add Product"}
        </button>
      </form>

      {/* LIST */}
      <div className="grid grid-cols-3 gap-5">
        {products.map((p) => (
          <div key={p.id} className="bg-white p-4 rounded-xl shadow">
            {p.image && (
              <img
                src={p.image}
                className="w-full h-40 object-cover rounded"
              />
            )}

            <h2 className="font-bold">{p.name}</h2>
            <p>₹{p.price}</p>
            <p className="text-sm text-gray-500">{p.category}</p>

            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleEdit(p)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(p.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Products;