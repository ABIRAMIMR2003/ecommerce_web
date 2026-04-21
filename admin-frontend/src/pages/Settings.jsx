import { useState } from "react";
import Layout from "../components/Layout";

function Settings() {
  const [name, setName] = useState("Admin");
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    alert("Settings Saved!");
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-5">Settings</h1>

      <div className="bg-white p-5 rounded-xl shadow space-y-4 max-w-md">
        
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full border p-2 rounded"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full border p-2 rounded"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New Password"
          className="w-full border p-2 rounded"
        />

        <button
          onClick={handleSave}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>

      </div>
    </Layout>
  );
}

export default Settings;