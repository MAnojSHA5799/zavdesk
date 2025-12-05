"use client";
import React, { useState } from "react";
import { Wallet, CheckCircle, XCircle, Clock } from "lucide-react";

type PayoutStatus = "completed" | "processing" | "failed";

interface Payout {
  id: number;
  amount: number;
  date: string;
  status: PayoutStatus;
  utr: string | null;
}

export default function PayoutsPage() {
  const [payouts] = useState<Payout[]>([
    {
      id: 1,
      amount: 3200,
      date: "2025-01-12",
      status: "completed",
      utr: "UTR88349102",
    },
    {
      id: 2,
      amount: 2100,
      date: "2025-01-05",
      status: "processing",
      utr: null,
    },
    {
      id: 3,
      amount: 1800,
      date: "2024-12-28",
      status: "failed",
      utr: null,
    },
  ]);

  const getStatusBadge = (status: PayoutStatus) => {
    switch (status) {
      case "completed":
        return (
          <span className="flex items-center gap-1 text-green-600 bg-green-100 px-2 py-1 rounded-xl text-xs">
            <CheckCircle size={14} /> Completed
          </span>
        );

      case "processing":
        return (
          <span className="flex items-center gap-1 text-blue-600 bg-blue-100 px-2 py-1 rounded-xl text-xs">
            <Clock size={14} /> Processing
          </span>
        );

      case "failed":
        return (
          <span className="flex items-center gap-1 text-red-600 bg-red-100 px-2 py-1 rounded-xl text-xs">
            <XCircle size={14} /> Failed
          </span>
        );
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Payouts</h1>
      </div>

      {/* BALANCE CARD */}
      <div className="bg-black text-white rounded-2xl p-6 shadow-md flex items-center justify-between">
        <div>
          <p className="text-gray-300 text-sm">Available Balance</p>
          <h2 className="text-3xl font-semibold mt-1">₹4,850</h2>
        </div>
        <Wallet size={42} className="opacity-80" />
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto rounded-2xl border bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 text-left font-medium">Amount</th>
              <th className="p-4 text-left font-medium">Date</th>
              <th className="p-4 text-left font-medium">Status</th>
              <th className="p-4 text-left font-medium">UTR</th>
            </tr>
          </thead>

          <tbody>
            {payouts.map((p) => (
              <tr
                key={p.id}
                className="border-b last:border-none hover:bg-gray-50 transition"
              >
                <td className="p-4 font-semibold">₹{p.amount}</td>
                <td className="p-4">{p.date}</td>
                <td className="p-4">{getStatusBadge(p.status)}</td>
                <td className="p-4 text-gray-600">{p.utr || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
