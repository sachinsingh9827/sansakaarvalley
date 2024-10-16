import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const users = [
    { id: 1, name: "Sachin singh", email: "sachinsingh.dollop@gmail.com", role: "admin", password: "123" },
    { id: 2, name: "Nayan", email: "nayan@12gmail.com", role: "teacher", password: "123" },
    { id: 3, name: "Catherine Williams", email: "catherine.williams@example.com", role: "teacher", password: "teacher123" },
    { id: 4, name: "David Brown", email: "david.brown@example.com", role: "teacher", password: "teacher123" },
    { id: 5, name: "Ethan Miller", email: "ethan.miller@example.com", role: "student", password: "student123" },
    { id: 6, name: "Fiona Davis", email: "fiona.davis@example.com", role: "student", password: "student123" },
    { id: 7, name: "George Wilson", email: "george.wilson@example.com", role: "student", password: "student123" },
    { id: 8, name: "Hannah Moore", email: "hannah.moore@example.com", role: "student", password: "student123" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Please fill in all fields.");
      return;
    }

    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      setError("");
      // Save user data in local storage
      localStorage.setItem("user", JSON.stringify({ id: user.id, name: user.name, email: user.email, role: user.role }));

      // Navigate based on user role
      switch (user.role) {
        case "admin":
          navigate("/admin/dashboard"); // Admin route
          break;
        case "teacher":
          navigate("/teacher/dashboard"); // Teacher route
          break;
        case "student":
          navigate("/student/dashboard"); // Student route
          break;
        default:
          setError("Invalid role.");
      }
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gradient-start to-gradient-end">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-primary">Login</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-2 rounded-lg hover:bg-secondary transition-colors duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="#register" className="text-primary hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
