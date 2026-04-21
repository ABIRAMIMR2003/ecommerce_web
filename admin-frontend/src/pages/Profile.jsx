import { useState } from "react";
import Layout from "../components/Layout";

function Profile() {
  const [form, setForm] = useState({
    name: "Admin",
    email: "admin@gmail.com",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      const file = files[0];
      setForm({ ...form, image: URL.createObjectURL(file) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Profile Updated ✅ (later backend connect pannuvom)");
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Admin Profile</h1>

      <div className="bg-white p-6 rounded-xl shadow max-w-xl">
        
        {/* PROFILE IMAGE */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-purple-500 flex items-center justify-center text-white text-3xl overflow-hidden">
            {form.image ? (
              <img
                src={form.image}
                className="w-full h-full object-cover"
              />
            ) : (
              form.name.charAt(0)
            )}
          </div>

          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="mt-3"
          />
        </div>

        {/* FORM */}
        <form onSubmit={handleSave} className="space-y-4">
          
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border p-2 rounded"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border p-2 rounded"
          />

          <button className="bg-purple-600 text-white px-4 py-2 rounded w-full">
            Save Changes
          </button>

        </form>
      </div>
    </Layout>
  );
}

export default Profile;