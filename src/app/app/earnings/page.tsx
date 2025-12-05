"use client";

import React from "react";
import { Wallet, DollarSign, TrendingUp, ArrowDownRight } from "lucide-react";

export default function EarningsPage() {
  return (
    <div className="w-full p-6 space-y-6">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold">Earnings</h1>

      {/* Earnings Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Earnings */}
        <div className="p-5 rounded-2xl bg-white shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-600">Total Earnings</p>
            <Wallet className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold">₹42,300</h2>
        </div>

        {/* This Month */}
        <div className="p-5 rounded-2xl bg-white shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-600">This Month</p>
            <TrendingUp className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold">₹7,800</h2>
        </div>

        {/* Pending */}
        <div className="p-5 rounded-2xl bg-white shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-600">Pending</p>
            <ArrowDownRight className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold">₹3,200</h2>
        </div>
      </div>

      {/* Earnings Table */}
      <div className="rounded-2xl bg-white shadow-sm border border-gray-200 p-5">
        <h2 className="text-lg font-semibold mb-4">Earnings Breakdown</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-gray-50 text-left">
                <th className="p-3 font-medium">Date</th>
                <th className="p-3 font-medium">Clicks</th>
                <th className="p-3 font-medium">Orders</th>
                <th className="p-3 font-medium">Earnings</th>
              </tr>
            </thead>
            <tbody>
              {[
                { date: "04 Nov 2025", clicks: 320, orders: 12, amount: "₹840" },
                { date: "03 Nov 2025", clicks: 210, orders: 9, amount: "₹560" },
                { date: "02 Nov 2025", clicks: 145, orders: 5, amount: "₹300" },
              ].map((item, index) => (
                <tr
                  key={index}
                  className="border-b last:border-none hover:bg-gray-50 transition"
                >
                  <td className="p-3">{item.date}</td>
                  <td className="p-3">{item.clicks}</td>
                  <td className="p-3">{item.orders}</td>
                  <td className="p-3 font-semibold">{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Withdraw Section */}
      <div className="rounded-2xl bg-white shadow-sm border border-gray-200 p-5">
        <h2 className="text-lg font-semibold mb-3">Withdraw Earnings</h2>
        <p className="text-gray-600 mb-4">Your withdrawable balance: <span className="font-semibold">₹12,400</span></p>

        <button className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-900 transition flex items-center gap-2">
          <DollarSign className="w-4 h-4" /> Withdraw Now
        </button>
      </div>
    </div>
  );
}