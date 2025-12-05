"use client";

import React from "react";
import { motion } from "framer-motion";

const SellerRequests = () => {
  const requests = [
    { id: 1, name: "Meena Traders", owner: "Aman Meena", email: "meena@shop.com" },
    { id: 2, name: "Style Hub", owner: "Sanjay Sharma", email: "stylehub@shop.com" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6"
    >
      <h1 className="text-2xl font-semibold mb-4">Seller Requests</h1>

      <div className="overflow-x-auto rounded-lg shadow bg-white">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Shop</th>
              <th className="p-3">Owner</th>
              <th className="p-3">Email</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((r) => (
              <tr key={r.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{r.name}</td>
                <td className="p-3">{r.owner}</td>
                <td className="p-3">{r.email}</td>

                <td className="p-3">
                  <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-600 text-sm">
                    Pending
                  </span>
                </td>

                <td className="p-3 flex gap-2">
                  <button className="px-3 py-1 bg-green-600 text-white rounded">Approve</button>
                  <button className="px-3 py-1 bg-red-600 text-white rounded">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default SellerRequests;
