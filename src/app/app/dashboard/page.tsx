"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PageNavbar, {
  PageNavbarIconButton,
  PageNavbarLeftContent,
  PageNavbarPrimaryButton,
  PageNavbarRightContent,
} from "@/components/layout/PageNavbar";
import {
  Add,
  DirectNotification,
  LogoutCurve,
  SearchNormal1,
} from "iconsax-react";
import PageContent from "@/components/layout/PageContent";
import TraningAnalysis from "@/components/Cards/TraningAnalysis";
import CourseProgress from "@/components/Cards/CourseProgress";
import EmployeeSpotlight from "@/components/Cards/EmployeeSpotlight";
import TimeTracker from "@/components/Cards/TimeTracker";
import Notes from "@/components/Cards/Notes";
import StatusTracker from "@/components/Cards/StatusTracker";
import CurrentProject from "@/components/Cards/CurrentProject";
import ProfileImage from "@/components/assets/profile.png";
import Image from "next/image";

export default function Dashboard() {
  const handleLogout = () => {
    localStorage.removeItem("hey_creator_id");
    window.location.href = "/";
  };

  // ✅ Analytics data
  const orderRevenueData = [
    { month: "August", Orders: 20000, Revenue: 2.2 },
    { month: "September", Orders: 26000, Revenue: 3.0 },
    { month: "October", Orders: 30000, Revenue: 4.0 },
  ];

  const rtoData = [
    { month: "August", rto: 25 },
    { month: "September", rto: 16 },
    { month: "October", rto: 14 },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* ✅ Top Navbar */}
      <PageNavbar>
        <PageNavbarLeftContent>
          <Image
            src={ProfileImage}
            alt="User"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">Manoj Shakya</p>
            <p className="text-xs font-medium text-gray-500">Welcome back</p>
          </div>
        </PageNavbarLeftContent>

        <PageNavbarRightContent>
          <PageNavbarIconButton className="all-center h-8 w-8 hover:bg-gray-100 rounded-lg">
            <SearchNormal1 size={16} />
          </PageNavbarIconButton>
          <PageNavbarIconButton className="all-center h-8 w-8 hover:bg-gray-100 rounded-lg">
            <DirectNotification size={16} />
          </PageNavbarIconButton>
          <PageNavbarPrimaryButton className="h-8 gap-1 bg-primary hidden py-1 px-2 text-white rounded-lg text-xs md:flex items-center justify-center">
            <Add size={16} />
            <span className="hidden md:inline">Create request</span>
          </PageNavbarPrimaryButton>
          <PageNavbarIconButton
            onClick={handleLogout}
            className="all-center h-8 w-8 hover:bg-gray-100 rounded-lg text-gray-600"
            title="Logout"
          >
            <LogoutCurve size={18} />
          </PageNavbarIconButton>
        </PageNavbarRightContent>
      </PageNavbar>

      {/* ✅ Page Content */}
      <PageContent>
        {/* Existing cards */}
        {/* <div className="space-y-4 columns-1 sm:columns-2 lg:columns-3">
          <div className="break-inside-avoid-column space-y-4">
            <TraningAnalysis />
          </div>
          <div className="break-inside-avoid-column space-y-4">
            <CourseProgress />
          </div>
          <div className="break-inside-avoid-column space-y-4">
            <EmployeeSpotlight />
          </div>
          <div className="break-inside-avoid-column space-y-4">
            <TimeTracker />
          </div>
          <div className="break-inside-avoid-column space-y-4">
            <Notes />
          </div>
          <div className="break-inside-avoid-column space-y-4">
            <StatusTracker />
          </div>
          <div className="break-inside-avoid-column space-y-4">
            <CurrentProject />
          </div>
        </div> */}

        {/* ✅ Analytics Section */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            Analytics Overview
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Orders & Revenue Chart */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h3 className="text-sm font-medium mb-3 text-gray-700">
                Orders & Revenue
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={orderRevenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey="month" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="Orders"
                    stroke="#2563eb"
                    strokeWidth={2}
                    dot={{ fill: "#2563eb" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Revenue"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    dot={{ fill: "#f59e0b" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* RTO Trend Chart */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h3 className="text-sm font-medium mb-3 text-gray-700">RTO %</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={rtoData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey="month" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="rto"
                    stroke="#10b981"
                    strokeWidth={2}
                    dot={{ fill: "#10b981" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Profit Trend Table */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 mt-6 shadow-sm overflow-x-auto">
            <h3 className="text-sm font-medium mb-3 text-gray-700">
              Profit Trend
            </h3>
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b text-gray-600">
                  <th className="py-2 px-3">Month</th>
                  <th className="py-2 px-3">Total Sales</th>
                  <th className="py-2 px-3">Marketing Cost</th>
                  <th className="py-2 px-3">Shipping</th>
                  <th className="py-2 px-3">COGS</th>
                  <th className="py-2 px-3">Net Profit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-2 px-3">October</td>
                  <td className="py-2 px-3 text-gray-800">₹4,09,02,901</td>
                  <td className="py-2 px-3 text-red-500">₹1,02,58,448</td>
                  <td className="py-2 px-3 text-red-500">₹87,32,769</td>
                  <td className="py-2 px-3 text-red-500">₹1,24,05,850</td>
                  <td className="py-2 px-3 text-green-600">₹95,05,834</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-2 px-3">September</td>
                  <td className="py-2 px-3 text-gray-800">₹3,02,10,711</td>
                  <td className="py-2 px-3 text-red-500">₹84,95,252</td>
                  <td className="py-2 px-3 text-red-500">₹64,07,692</td>
                  <td className="py-2 px-3 text-red-500">₹88,66,844</td>
                  <td className="py-2 px-3 text-green-600">₹64,40,924</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-3">August</td>
                  <td className="py-2 px-3 text-gray-800">₹2,54,82,891</td>
                  <td className="py-2 px-3 text-red-500">₹76,47,416</td>
                  <td className="py-2 px-3 text-red-500">₹52,52,024</td>
                  <td className="py-2 px-3 text-red-500">₹77,28,961</td>
                  <td className="py-2 px-3 text-green-600">₹48,54,491</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </PageContent>
    </div>
  );
}
