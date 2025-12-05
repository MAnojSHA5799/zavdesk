"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Store, UserCheck, UserX } from "lucide-react";

const SellersPage = () => {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const sellers = [
    { id: 1, name: "Sunil Kumar", shop: "Sunil Fashion", email: "sunil@shop.com", status: "Active" },
    { id: 2, name: "Rahul Jain", shop: "RJ Collections", email: "rahul@shop.com", status: "Inactive" },
    { id: 3, name: "Manish Mehra", shop: "MM Trends", email: "manish@shop.com", status: "Active" },
  ];

  // Summary Counts
  const total = sellers.length;
  const active = sellers.filter((s) => s.status === "Active").length;
  const inactive = sellers.filter((s) => s.status === "Inactive").length;

  const cards = [
    { label: "Total Sellers", value: total, icon: <Store size={22} /> },
    { label: "Active Sellers", value: active, icon: <UserCheck size={22} /> },
    { label: "Inactive Sellers", value: inactive, icon: <UserX size={22} /> },
  ];

  // Filtered result
  const filtered = sellers.filter((s) => {
    const matchSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.shop.toLowerCase().includes(search.toLowerCase());

    const matchStatus = filterStatus === "All" || s.status === filterStatus;

    return matchSearch && matchStatus;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="p-6"
    >
      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">All Sellers</h1>

      {/* Summary Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-2xl shadow-sm border flex items-center justify-between"
          >
            <div>
              <p className="text-gray-500 text-sm">{card.label}</p>
              <p className="text-2xl font-bold text-gray-800">{card.value}</p>
            </div>
            <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-violet-500 text-white">
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Search + Filter */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search sellers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full sm:w-72 focus:outline-none focus:ring focus:ring-violet-300"
        />

        <select
          className="px-4 py-2 border rounded-lg bg-white focus:outline-none"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow bg-white">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Shop</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((s) => (
              <tr key={s.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-3">{s.name}</td>
                <td className="p-3">{s.shop}</td>
                <td className="p-3">{s.email}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${
                      s.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {s.status}
                  </span>
                </td>

                <td className="p-3">
                  <button className="px-3 py-1 bg-gray-800 text-white rounded-md text-sm hover:bg-black">
                    View
                  </button>
                </td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">
                  No sellers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default SellersPage;
