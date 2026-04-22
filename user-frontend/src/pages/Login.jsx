import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);

    if (
      email.trim() === "admin@cycle.com" &&
      password.trim() === "admin123"
    ) {
      localStorage.setItem("token", "123");
      window.location.href = "/";
    } else {
      alert("Invalid login");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-6 shadow w-80">
        <h2 className="text-xl mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-full p-2 mb-2"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border w-full p-2 mb-2"
        />

        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white w-full p-2"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;