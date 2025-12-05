"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Package, CheckCircle, Clock } from "lucide-react";

const OrdersPage = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const orders = [
    { id: "ORD123", customer: "Aman Gupta", amount: 1599, date: "12 Nov 2024", status: "Shipped" },
    { id: "ORD124", customer: "Sara Ali", amount: 899, date: "13 Nov 2024", status: "Pending" },
    { id: "ORD125", customer: "Vikas Sharma", amount: 2499, date: "14 Nov 2024", status: "Shipped" },
  ];

  // Summary
  const total = orders.length;
  const shipped = orders.filter((o) => o.status === "Shipped").length;
  const pending = orders.filter((o) => o.status === "Pending").length;

  const cards = [
    { label: "Total Orders", value: total, icon: <Package size={22} /> },
    { label: "Shipped Orders", value: shipped, icon: <CheckCircle size={22} /> },
    { label: "Pending Orders", value: pending, icon: <Clock size={22} /> },
  ];

  // Filtered list
  const filtered = orders.filter((o) => {
    const matchSearch =
      o.customer.toLowerCase().includes(search.toLowerCase()) ||
      o.id.toLowerCase().includes(search.toLowerCase());

    const matchStatus = statusFilter === "All" || o.status === statusFilter;

    return matchSearch && matchStatus;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="p-6"
    >
      <h1 className="text-2xl font-semibold mb-6">Orders</h1>

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

      {/* Search & Filter */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search orders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full sm:w-72 focus:outline-none focus:ring focus:ring-violet-300"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg bg-white focus:outline-none"
        >
          <option value="All">All Status</option>
          <option value="Shipped">Shipped</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 text-left">Order ID</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((o) => (
              <tr key={o.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-3">{o.id}</td>
                <td className="p-3">{o.customer}</td>
                <td className="p-3 font-medium">₹{o.amount}</td>
                <td className="p-3">{o.date}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${
                      o.status === "Shipped"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {o.status}
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
                <td colSpan={6} className="text-center p-4 text-gray-500">
                  No matching orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default OrdersPage;
