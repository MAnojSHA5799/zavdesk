"use client";
import React, { useState } from "react";
import { Truck, CheckCircle, Clock, XCircle } from "lucide-react";

type OrderStatus = "delivered" | "shipped" | "pending" | "cancelled";

interface Order {
  id: number;
  product: string;
  orderId: string;
  date: string;
  status: OrderStatus;
  commission: number;
}

export default function OrdersPage() {
  const [orders] = useState<Order[]>([
    {
      id: 1,
      product: "Winter Jacket",
      orderId: "ORD-98123",
      date: "2025-01-10",
      status: "delivered",
      commission: 240,
    },
    {
      id: 2,
      product: "Makeup Kit",
      orderId: "ORD-77452",
      date: "2025-01-08",
      status: "shipped",
      commission: 120,
    },
    {
      id: 3,
      product: "Running Shoes",
      orderId: "ORD-66412",
      date: "2025-01-05",
      status: "pending",
      commission: 90,
    },
    {
      id: 4,
      product: "Sports Socks",
      orderId: "ORD-44211",
      date: "2025-01-02",
      status: "cancelled",
      commission: 0,
    },
  ]);

  const getStatusBadge = (status: OrderStatus) => {
    switch (status) {
      case "delivered":
        return (
          <span className="flex items-center gap-1 text-green-600 bg-green-100 px-2 py-1 rounded-xl text-xs">
            <CheckCircle size={14} /> Delivered
          </span>
        );

      case "shipped":
        return (
          <span className="flex items-center gap-1 text-blue-600 bg-blue-100 px-2 py-1 rounded-xl text-xs">
            <Truck size={14} /> Shipped
          </span>
        );

      case "pending":
        return (
          <span className="flex items-center gap-1 text-yellow-600 bg-yellow-100 px-2 py-1 rounded-xl text-xs">
            <Clock size={14} /> Pending
          </span>
        );

      case "cancelled":
        return (
          <span className="flex items-center gap-1 text-red-600 bg-red-100 px-2 py-1 rounded-xl text-xs">
            <XCircle size={14} /> Cancelled
          </span>
        );
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Orders</h1>
      </div>

      <div className="overflow-x-auto rounded-2xl border bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 text-left font-medium">Product</th>
              <th className="p-4 text-left font-medium">Order ID</th>
              <th className="p-4 text-left font-medium">Date</th>
              <th className="p-4 text-left font-medium">Status</th>
              <th className="p-4 text-left font-medium">Commission</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b last:border-none hover:bg-gray-50 transition"
              >
                <td className="p-4 font-medium">{order.product}</td>
                <td className="p-4">{order.orderId}</td>
                <td className="p-4">{order.date}</td>
                <td className="p-4">{getStatusBadge(order.status)}</td>
                <td className="p-4 font-semibold">₹{order.commission}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
