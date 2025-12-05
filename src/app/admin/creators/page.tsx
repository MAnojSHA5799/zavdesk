"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Users, UserCheck, UserX } from "lucide-react";

const CreatorsPage = () => {
  const [search, setSearch] = useState("");

  // Dummy data (Replace with API)
  const creators = [
    {
      id: 1,
      name: "Priya Verma",
      username: "priya.vibes",
      email: "priya@example.com",
      followers: 32000,
      status: "Approved",
    },
    {
      id: 2,
      name: "Rohit Sharma",
      username: "rohit.creator",
      email: "rohit@example.com",
      followers: 12000,
      status: "Pending",
    },
    {
      id: 3,
      name: "Aisha Khan",
      username: "aisha.world",
      email: "aisha@example.com",
      followers: 54000,
      status: "Approved",
    },
  ];

  const filtered = creators.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalCreators = creators.length;
  const activeCreators = creators.filter((c) => c.status === "Approved").length;
  const pendingCreators = creators.filter((c) => c.status === "Pending").length;

  const summaryCards = [
    {
      label: "Total Creators",
      value: totalCreators,
      icon: <Users size={24} className="text-blue-600" />,
      bg: "bg-blue-100",
    },
    {
      label: "Approved Creators",
      value: activeCreators,
      icon: <UserCheck size={24} className="text-green-600" />,
      bg: "bg-green-100",
    },
    {
      label: "Pending Requests",
      value: pendingCreators,
      icon: <UserX size={24} className="text-yellow-600" />,
      bg: "bg-yellow-100",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="p-6"
    >
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        All Creators
      </h1>

      {/* Summary Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {summaryCards.map((card, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-2xl shadow-sm border flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-gray-500">{card.label}</p>
              <p className="text-2xl font-bold text-gray-800">{card.value}</p>
            </div>

            <div
              className={`h-12 w-12 rounded-xl flex items-center justify-center ${card.bg}`}
            >
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Search + Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search creators..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full sm:w-72 focus:outline-none focus:ring focus:ring-gray-300"
        />

        <select className="px-4 py-2 border rounded-lg bg-white focus:outline-none">
          <option>Filter by Status</option>
          <option>Approved</option>
          <option>Pending</option>
        </select>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto rounded-lg shadow bg-white">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Username</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Followers</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((c) => (
              <tr key={c.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-3">{c.name}</td>
                <td className="p-3">@{c.username}</td>
                <td className="p-3">{c.email}</td>
                <td className="p-3">{c.followers.toLocaleString()}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm 
                      ${
                        c.status === "Approved"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                  >
                    {c.status}
                  </span>
                </td>

                <td className="p-3">
                  <button className="px-3 py-1 text-sm bg-gray-900 text-white rounded-md hover:bg-black">
                    View
                  </button>
                </td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="p-4 text-center text-gray-500">
                  No creators found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default CreatorsPage;
