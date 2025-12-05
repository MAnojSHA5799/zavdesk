"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react"; // icons

interface RequestItem {
  id: number;
  name: string;
  username: string;
  email: string;
  followers: number;
  status: string;
}

const CreatorRequests = () => {
  const requests: RequestItem[] = [
    {
      id: 1,
      name: "Riya Singh",
      username: "riya.style",
      email: "riya@example.com",
      followers: 5000,
      status: "Pending",
    },
    {
      id: 2,
      name: "Amit Patel",
      username: "amit.vlogs",
      email: "amit@example.com",
      followers: 22000,
      status: "Pending",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="p-6"
    >
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Creator Requests
      </h1>

      <div className="overflow-x-auto rounded-lg shadow bg-white">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-gray-700 text-sm">
            <tr>
              <th className="p-3 text-left font-semibold">Name</th>
              <th className="p-3 text-left font-semibold">Username</th>
              <th className="p-3 text-left font-semibold">Email</th>
              <th className="p-3 text-left font-semibold">Followers</th>
              <th className="p-3 text-left font-semibold">Status</th>
              <th className="p-3 text-left font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((c) => (
              <tr
                key={c.id}
                className="border-b hover:bg-gray-50 transition-all"
              >
                <td className="p-3">{c.name}</td>
                <td className="p-3">@{c.username}</td>
                <td className="p-3">{c.email}</td>
                <td className="p-3">{c.followers.toLocaleString()}</td>

                <td className="p-3">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-600 text-sm rounded-full">
                    Pending
                  </span>
                </td>

                <td className="p-3 flex gap-2">
                  {/* APPROVE BUTTON */}
                  <button className="px-3 py-1 text-sm bg-green-600 text-white rounded-md flex items-center gap-1 hover:bg-green-700 transition">
                    Approve <Check size={14} />
                  </button>

                  {/* REJECT BUTTON */}
                  <button className="px-3 py-1 text-sm bg-red-600 text-white rounded-md flex items-center gap-1 hover:bg-red-700 transition">
                    Reject <X size={14} />
                  </button>
                </td>
              </tr>
            ))}

            {requests.length === 0 && (
              <tr>
                <td colSpan={6} className="p-4 text-center text-gray-500">
                  No requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default CreatorRequests;
