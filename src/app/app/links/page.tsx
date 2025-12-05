"use client";
import React, { useState } from "react";
import { Plus, Copy, Edit, Trash } from "lucide-react";

export default function LinksPage() {
  const [collections, setCollections] = useState([
    {
      id: 1,
      title: "Winter Fashion Picks",
      link: "https://wishlink.com/p/abc123",
      clicks: 421,
      orders: 39,
      earnings: 1290,
    },
    {
      id: 2,
      title: "Makeup Essentials",
      link: "https://wishlink.com/p/xyz789",
      clicks: 310,
      orders: 22,
      earnings: 840,
    },
  ]);

  return (
    <div className="p-6 space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">My Links</h1>
        <button className="bg-black text-white px-4 py-2 rounded-xl flex items-center gap-2">
          <Plus size={18} /> Create New Collection
        </button>
      </div>

      {/* COLLECTION LIST */}
      <div className="grid md:grid-cols-2 gap-4">
        {collections.map((item) => (
          <div
            key={item.id}
            className="border rounded-2xl p-4 bg-white shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-lg font-medium">{item.title}</h2>

            <div className="mt-2">
              <p className="text-sm text-gray-500">{item.link}</p>

              <button
                className="mt-1 text-xs text-blue-600 flex items-center gap-1"
                onClick={() => navigator.clipboard.writeText(item.link)}
              >
                <Copy size={14} /> Copy Link
              </button>
            </div>

            {/* STATS */}
            <div className="flex justify-between mt-4 text-sm">
              <div>
                <p className="font-semibold">{item.clicks}</p>
                <span className="text-gray-500">Clicks</span>
              </div>
              <div>
                <p className="font-semibold">{item.orders}</p>
                <span className="text-gray-500">Orders</span>
              </div>
              <div>
                <p className="font-semibold">₹{item.earnings}</p>
                <span className="text-gray-500">Earnings</span>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center justify-end mt-4 gap-3">
              <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                <Edit size={16} />
              </button>
              <button className="p-2 rounded-lg bg-gray-100 hover:bg-red-200 text-red-500">
                <Trash size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
