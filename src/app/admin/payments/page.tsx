"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { CreditCard, IndianRupee, Smartphone } from "lucide-react";

const PaymentsPage = () => {
  const [search, setSearch] = useState("");
  const [modeFilter, setModeFilter] = useState("All");

  const payments = [
    { id: 1, user: "Aman Gupta", amount: 1599, mode: "UPI", date: "12 Nov 2024" },
    { id: 2, user: "Sara Ali", amount: 899, mode: "Card", date: "14 Nov 2024" },
  ];

  // Summary Counts
  const total = payments.length;
  const upi = payments.filter((p) => p.mode === "UPI").length;
  const card = payments.filter((p) => p.mode === "Card").length;

  const cards = [
    { label: "Total Payments", value: total, icon: <IndianRupee size={22} /> },
    { label: "UPI Payments", value: upi, icon: <Smartphone size={22} /> },
    { label: "Card Payments", value: card, icon: <CreditCard size={22} /> },
  ];

  // Filter data
  const filtered = payments.filter((p) => {
    const matchSearch =
      p.user.toLowerCase().includes(search.toLowerCase()) ||
      p.mode.toLowerCase().includes(search.toLowerCase());

    const matchMode = modeFilter === "All" || p.mode === modeFilter;

    return matchSearch && matchMode;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="p-6"
    >
      <h1 className="text-2xl font-semibold mb-6">Payments</h1>

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
          placeholder="Search payments..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full sm:w-72 focus:outline-none focus:ring focus:ring-violet-300"
        />

        <select
          value={modeFilter}
          onChange={(e) => setModeFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg bg-white focus:outline-none"
        >
          <option value="All">All Modes</option>
          <option value="UPI">UPI</option>
          <option value="Card">Card</option>
        </select>
      </div>

      {/* Payments Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="w-full">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 text-left">User</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Mode</th>
              <th className="p-3 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-3">{p.user}</td>
                <td className="p-3 font-medium">₹{p.amount}</td>
                <td className="p-3">{p.mode}</td>
                <td className="p-3">{p.date}</td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center p-4 text-gray-500">
                  No matching payments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default PaymentsPage;
