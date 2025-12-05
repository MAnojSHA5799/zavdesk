"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Users, UserCheck, UserX } from "lucide-react";

const CustomersPage = () => {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const customers = [
    { id: 1, name: "Aman Gupta", email: "aman@example.com", phone: "9876543210", status: "Active" },
    { id: 2, name: "Sara Ali", email: "sara@example.com", phone: "9876001234", status: "Inactive" },
    { id: 3, name: "Raj Patel", email: "raj@example.com", phone: "9871112223", status: "Active" },
  ];

  // Summary Counts
  const total = customers.length;
  const active = customers.filter((c) => c.status === "Active").length;
  const inactive = customers.filter((c) => c.status === "Inactive").length;

  const summaryCards = [
    { label: "Total Customers", value: total, icon: <Users size={22} /> },
    { label: "Active Customers", value: active, icon: <UserCheck size={22} /> },
    { label: "Inactive Customers", value: inactive, icon: <UserX size={22} /> },
  ];

  // Filtering Logic
  const filtered = customers.filter((c) => {
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase());

    const matchStatus = filterStatus === "All" || c.status === filterStatus;

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
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        All Customers
      </h1>

      {/* Summary Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {summaryCards.map((card, i) => (
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

      {/* Search + Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search customers..."
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
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="w-full">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((c) => (
              <tr key={c.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{c.name}</td>
                <td className="p-3">{c.email}</td>
                <td className="p-3">{c.phone}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${
                      c.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>

                <td className="p-3">
                  <button className="px-3 py-1 bg-gray-800 text-white rounded text-sm hover:bg-black">
                    View
                  </button>
                </td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">
                  No customers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default CustomersPage;
