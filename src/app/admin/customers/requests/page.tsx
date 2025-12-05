"use client";

import { motion } from "framer-motion";
import React from "react";

const CustomerRequests = () => {
  const requests = [
    { id: 1, name: "Ritika Sharma", email: "ritika@example.com", phone: "9090909090" },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Customer Requests</h1>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((r) => (
              <tr key={r.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{r.name}</td>
                <td className="p-3">{r.email}</td>
                <td className="p-3">{r.phone}</td>
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

export default CustomerRequests;
