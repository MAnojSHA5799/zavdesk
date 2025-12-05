"use client";

import React, { useState } from "react";
import {
  Profile2User,
  MoneySend,
  ShoppingBag,
  ReceiptEdit,
  Timer1,
  UserTick,
  Activity,
  TrendUp,
  ChartSquare,
} from "iconsax-react";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

import HistogramChart from "@/components/charts/HistogramChart";

// ---------------- DATA ----------------
const salesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4200 },
  { month: "May", sales: 6100 },
  { month: "Jun", sales: 7000 },
];

const userGrowthData = [
  { month: "Jan", users: 800 },
  { month: "Feb", users: 1200 },
  { month: "Mar", users: 1600 },
  { month: "Apr", users: 2100 },
  { month: "May", users: 2600 },
  { month: "Jun", users: 2900 },
];

const followerContribution = [
  { name: "Creator A", followers: 54000 },
  { name: "Creator B", followers: 32000 },
  { name: "Creator C", followers: 27000 },
  { name: "Creator D", followers: 19000 },
];

const ageProductInterest = [
  { age: "18-24", tshirt: 800, shoes: 450, saree: 300 },
  { age: "25-34", tshirt: 1200, shoes: 850, saree: 600 },
  { age: "35-44", tshirt: 600, shoes: 700, saree: 900 },
  { age: "45+", tshirt: 200, shoes: 260, saree: 500 },
];

const productViewData = [
  { product: "Saree", views: 5200 },
  { product: "T-Shirt", views: 6800 },
  { product: "Shoes", views: 4300 },
  { product: "Kurti", views: 7700 },
  { product: "Makeup Kit", views: 8900 },
];

export default function AdminDashboard() {
  const [activeFilter, setActiveFilter] = useState("Monthly");

  const filters = ["Today", "Weekly", "Monthly", "Yearly"];

  const stats = [
    {
      label: "Total Creators",
      value: 1280,
      icon: <Profile2User size={26} />,
      color: "bg-violet-500 text-white",
    },
    {
      label: "Total Sellers",
      value: 620,
      icon: <UserTick size={26} />,
      color: "bg-violet-500 text-white",
    },
    {
      label: "Total Sale Revenue",
      value: "₹12,45,000",
      icon: <MoneySend size={26} />,
      color: "bg-violet-500 text-white",
    },
    {
      label: "Requested Orders",
      value: 210,
      icon: <ReceiptEdit size={26} />,
      color: "bg-violet-500 text-white",
    },
    {
      label: "Pending Orders",
      value: 89,
      icon: <Timer1 size={26} />,
      color: "bg-violet-500 text-white",
    },
    {
      label: "Total Buyers",
      value: 4500,
      icon: <ShoppingBag size={26} />,
      color: "bg-violet-500 text-white",
    },
  ];

  const analytics = [
    {
      label: "Conversion Rate",
      value: "4.2%",
      icon: <Activity size={22} />,
      color: "bg-violet-500 text-white",
    },
    {
      label: "Avg Order Value",
      value: "₹850",
      icon: <ChartSquare size={22} />,
      color: "bg-violet-500 text-white",
    },
    {
      label: "Growth",
      value: "+12.5%",
      icon: <TrendUp size={22} />,
      color: "bg-violet-500 text-white",
    },
  ];

  return (
    <div className="p-6 space-y-8 min-h-screen bg-gray-50">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-500 mt-1">Overview of entire platform activity</p>
        </div>

        <div className="flex items-center gap-2 bg-white shadow-sm px-3 py-2 rounded-xl border">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3 py-1 rounded-lg text-sm font-medium ${
                activeFilter === f
                  ? "bg-violet-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* STATS (ICON LEFT + VALUE RIGHT) */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {stats.map((item, index) => (
    <div
      key={index}
      className="bg-white p-6 rounded-2xl shadow-sm border flex items-center justify-between"
    >
      {/* LEFT SIDE → LABEL + VALUE */}
      <div className="text-left">
        <h3 className="text-sm text-gray-500">{item.label}</h3>
        <p className="text-2xl font-bold text-gray-800">{item.value}</p>
      </div>

      {/* RIGHT SIDE → ICON */}
      <div
        className={`h-12 w-12 rounded-xl flex items-center justify-center ${item.color}`}
      >
        {item.icon}
      </div>
    </div>
  ))}
</div>


     {/* ANALYTICS (ICON RIGHT + VALUE LEFT) */}
<div className="grid sm:grid-cols-3 gap-6">
  {analytics.map((a, i) => (
    <div
      key={i}
      className="bg-white p-5 rounded-2xl shadow-sm border flex items-center justify-between"
    >
      {/* LEFT SIDE: TEXT */}
      <div className="text-left">
        <h4 className="text-gray-500 text-sm">{a.label}</h4>
        <p className="text-xl font-semibold text-gray-800">{a.value}</p>
      </div>

      {/* RIGHT SIDE: ICON */}
      <div
        className={`h-10 w-10 rounded-lg flex items-center justify-center ${a.color}`}
      >
        {a.icon}
      </div>
    </div>
  ))}
</div>


      {/* SALES + USERS (HEIGHT INCREASED) */}
      <div className="grid lg:grid-cols-2 gap-6">
        
        <div className="bg-white p-6 rounded-2xl border h-[350px]">
          <h3 className="font-semibold text-white mb-3 bg-violet-500 p-2 rounded-lg">Sales Overview</h3>
          <ResponsiveContainer width="100%" height="80%">
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#7c3aed" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-2xl border h-[350px]">
          <h3 className="font-semibold text-white mb-3 bg-violet-500 p-2 rounded-lg">User Growth</h3>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart data={userGrowthData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#7c3aed" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* ANALYTICS ROW (HEIGHT INCREASED) */}
      <div className="grid lg:grid-cols-2 gap-6 mt-6">

        <div className="bg-white p-6 rounded-2xl border h-[350px]">
          <h3 className="font-semibold text-white mb-3 bg-violet-500 p-2 rounded-lg">
            Creator Follower Contribution
          </h3>
          <ResponsiveContainer width="100%" height="80%">
          <PieChart>
  <Pie
    data={followerContribution}
    dataKey="followers"
    nameKey="name"
    outerRadius={100}
    labelLine={false}   // remove default lines
    // label={({ name, percent }) =>
    //   `${name}: ${(percent * 100).toFixed(1)}%`
    // }
  >
    {followerContribution.map((_, i) => (
      <Cell
        key={i}
        fill={["#6D28D9", "#7C3AED", "#A855F7", "#D946EF"][i]}
      />
    ))}
  </Pie>

  <Legend
    layout="horizontal"
    verticalAlign="bottom"
    align="center"
    wrapperStyle={{
      paddingTop: "20px",
      fontSize: "14px",
      fontWeight: "500",
      color: "#6D28D9",
    }}
  />
</PieChart>

          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-2xl border h-[350px]">
          <h3 className="font-semibold text-white mb-3 bg-violet-500 p-2 rounded-lg">
            Age Group Product Interest
          </h3>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart data={ageProductInterest}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="age" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="tshirt" fill="#7c3aed" />
              <Bar dataKey="shoes" fill="#8b5cf6" />
              <Bar dataKey="saree" fill="#d946ef" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-2xl border h-[350px]">
          <h3 className="font-semibold text-white mb-3 bg-violet-500 p-2 rounded-lg">
            Most Viewed Products
          </h3>
          <ResponsiveContainer width="100%" height="80%">
            <LineChart data={productViewData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="product" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="views" stroke="#7c3aed" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* HISTOGRAM */}
        <div className="bg-white p-6 rounded-2xl border h-[350px]">
          <h3 className="font-semibold text-white mb-3 bg-violet-500 p-2 rounded-lg">
          Price Range Distribution
          </h3>
          <HistogramChart />
        </div>

      </div>

    </div>
  );
}
