import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import API from "../services/api";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  const fetchCategories = async () => {
    const res = await API.get("/categories");
    setCategories(res.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    await API.post("/categories", { name });
    setName("");
    fetchCategories();
  };

  const handleDelete = async (id) => {
    await API.delete(`/categories/${id}`);
    fetchCategories();
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-5">Categories</h1>

      {/* ADD FORM */}
      <form
        onSubmit={handleAdd}
        className="bg-white p-5 rounded-xl shadow flex gap-4 mb-6"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Category Name (ex: Hero, BSA)"
          className="border p-2 rounded flex-1"
        />

        <button
          disabled={!name}
          className="bg-purple-600 text-white px-4 rounded disabled:opacity-50"
        >
          Add
        </button>
      </form>

      {/* LIST */}
      {categories.length === 0 ? (
        <p className="text-gray-500">No categories added</p>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {categories.map((c) => (
            <div
              key={c.id}
              className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
            >
              <span className="font-medium">{c.name}</span>

              <button
                onClick={() => handleDelete(c.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}

export default Categories;