"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import React from "react";

/* --------------------------------------------
   SAMPLE HISTOGRAM DATA (replace with real data)
--------------------------------------------- */
const data = [
  { range: "0–100", count: 12 },
  { range: "100–200", count: 30 },
  { range: "200–300", count: 45 },
  { range: "300–400", count: 22 },
  { range: "400–500", count: 18 },
  { range: "500–600", count: 10 },
];

export default function HistogramChart() {
  return (
<>
      {/* Title */}
     

      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          {/* Light grid */}
          <CartesianGrid strokeDasharray="3 3" opacity={0.25} />

          {/* X-axis Price Ranges */}
          <XAxis
            dataKey="range"
            tick={{ fontSize: 12, fill: "#4b5563" }}
          />

          {/* Y-axis Counts */}
          <YAxis
            tick={{ fontSize: 12, fill: "#4b5563" }}
            allowDecimals={false}
          />

          {/* Tooltip */}
          <Tooltip
            wrapperStyle={{
              background: "#ffffff",
              borderRadius: "10px",
              padding: "8px 12px",
              border: "1px solid #e5e7eb",
            }}
            cursor={{ fill: "rgba(99,102,241,0.08)" }}
          />

          {/* Bars */}
          <Bar
            dataKey="count"
            barSize={40}
            radius={[8, 8, 0, 0]}
            fill="#4F46E5" // Deep indigo
            className="transition-all duration-300 hover:opacity-80"
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
