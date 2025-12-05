"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [role, setRole] = useState<"creator" | "admin" | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Dummy Credentials
  const creatorCreds = {
    email: "creator@example.com",
    password: "creator123",
  };

  const adminCreds = {
    email: "admin@example.com",
    password: "admin123",
  };

  const handleLogin = (e: any) => {
    e.preventDefault();

    if (!role) {
      setError("Please select Creator or Admin");
      return;
    }

    if (
      (role === "creator" &&
        email === creatorCreds.email &&
        password === creatorCreds.password) ||
      (role === "admin" &&
        email === adminCreds.email &&
        password === adminCreds.password)
    ) {
      // 🔥 MAIN FIX (Role Store)
      localStorage.setItem("user_role", role);

      router.push(role === "creator" ? "/app/dashboard" : "/admin/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Login Portal
        </h1>
        <p className="text-center text-gray-500 text-sm">
          Select role & enter credentials
        </p>

        {/* Role Selection */}
        <div className="flex justify-center gap-4">
          <button
            className={`px-4 py-2 rounded-lg border ${
              role === "creator"
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
            onClick={() => setRole("creator")}
          >
            Creator
          </button>

          <button
            className={`px-4 py-2 rounded-lg border ${
              role === "admin"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
            onClick={() => setRole("admin")}
          >
            Admin
          </button>
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg text-lg font-semibold shadow"
          >
            Login
          </button>
        </form>

        <div className="text-xs text-gray-500 text-center">
          <p>Creator → creator@example.com / creator123</p>
          <p>Admin → admin@example.com / admin123</p>
        </div>
      </div>
    </div>
  );
}
