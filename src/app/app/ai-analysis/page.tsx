"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import {
  Sparkles,
  TrendingUp,
  TrendingDown,
  MinusCircle,
} from "lucide-react";

import Avatar1 from "src/components/assets/avatars/avatar1.png";
import Avatar2 from "src/components/assets/avatars/avatar1.png";
import Avatar3 from "src/components/assets/avatars/avatar1.png";

/* -----------------------------------------------------------
   ⭐ SCORE CALCULATION FUNCTION
------------------------------------------------------------ */
const calculateCreatorScore = (c: any) => {
  const total =
    c.quality * 0.2 +
    c.frequency * 0.5 +
    c.engagement * 0.3 +
    c.salesScore * 0.5 +
    c.consistency * 0.1 +
    c.fraudFree * 0.1;

  return {
    total,
    points: Math.round(total * 100),
    breakdown: {
      quality: c.quality ? 0.2 : 0,
      frequency: c.frequency ? 0.5 : 0,
      engagement: c.engagement ? 0.3 : 0,
      sales: c.salesScore ? 0.5 : 0,
      consistency: c.consistency ? 0.1 : 0,
      fraud: c.fraudFree ? 0.1 : 0,
    },
  };
};

/* -----------------------------------------------------------
   ⭐ BATCH DETECTOR (Auto)
------------------------------------------------------------ */
const getBatch = (points: number) => {
  if (points >= 5000) return "Diamond";
  if (points >= 1500) return "Gold";
  if (points >= 500) return "Silver";
  if (points >= 250) return "Platinum";
  return "Beginner";
};

export default function AIAnalysis() {
  const router = useRouter();

  /* -----------------------------------------------------------
     ⭐ CREATOR LIST
  ------------------------------------------------------------ */
  const creators = [
    // 1 — Excellent Creator
    {
      code: "CR-1023",
      avatar: Avatar1,
      performance: "Excellent",
      trend: "up",

      quality: 1,
      frequency: 1,
      engagement: 1,
      salesScore: 1,
      consistency: 1,
      fraudFree: 1,

      views: 52000,
      clicks: 8400,
      ctr: "16.1%",
      sales: 120,
      conversion: "2.3%",
      suggestion:
        "Reels engagement bahut achha grow ho raha hai. Trending audio continue karein.",
    },

    // 250 → Platinum
    {
      code: "CR-2500",
      avatar: Avatar2,
      performance: "Good",
      trend: "stable",

      quality: 1,
      frequency: 1,
      engagement: 0,
      salesScore: 0,
      consistency: 1,
      fraudFree: 1,

      views: 15000,
      clicks: 2400,
      ctr: "11.2%",
      sales: 25,
      conversion: "0.6%",
      suggestion: "Consistency good hai. Engagement improve karein.",
    },

    // 500 → Silver
    {
      code: "CR-500A",
      avatar: Avatar1,
      performance: "Stable",
      trend: "up",

      quality: 1,
      frequency: 1,
      engagement: 1,
      salesScore: 1,
      consistency: 0,
      fraudFree: 1,

      views: 22000,
      clicks: 4200,
      ctr: "15.5%",
      sales: 40,
      conversion: "1.0%",
      suggestion: "Strong engagement, keep posting daily.",
    },

    // 1500 → Gold
    {
      code: "CR-1500B",
      avatar: Avatar3,
      performance: "Rising",
      trend: "up",

      quality: 1,
      frequency: 1,
      engagement: 1,
      salesScore: 1,
      consistency: 1,
      fraudFree: 0,

      views: 68000,
      clicks: 12000,
      ctr: "18.1%",
      sales: 160,
      conversion: "2.4%",
      suggestion: "High drive! Continue strong video storytelling.",
    },
    {
      code: "CR-1023",
      avatar: Avatar1,
      performance: "Excellent",
      trend: "up",
      quality: 1,
      frequency: 1,
      engagement: 1,
      salesScore: 1,
      consistency: 1,
      fraudFree: 1,
      views: 52000,
      clicks: 8400,
      ctr: "16.1%",
      sales: 120,
      conversion: "2.3%",
      suggestion: "Reels engagement bahut achha grow ho raha hai. Trending audio continue karein.",
    },
  
    // Silver batch (points >= 500)
    {
      code: "CR-600S",
      avatar: Avatar2,
      performance: "Stable",
      trend: "up",
      quality: 1,
      frequency: 1,
      engagement: 1,
      salesScore: 1,
      consistency: 0,
      fraudFree: 1,
      views: 30000,
      clicks: 5000,
      ctr: "14.0%",
      sales: 50,
      conversion: "1.2%",
      suggestion: "Good engagement, work on consistency.",
    },
  
    // Gold batch (points >= 1500)
    {
      code: "CR-2000G",
      avatar: Avatar3,
      performance: "Rising",
      trend: "up",
      quality: 1,
      frequency: 1,
      engagement: 1,
      salesScore: 1,
      consistency: 1,
      fraudFree: 1,
      views: 80000,
      clicks: 15000,
      ctr: "18.7%",
      sales: 200,
      conversion: "2.6%",
      suggestion: "Excellent performance! Maintain current posting strategy.",
    },
  
   // Platinum batch
{
  code: "CR-2500P",
  avatar: Avatar2,
  performance: "Good",
  trend: "stable",
  quality: 5,
  frequency: 5,
  engagement: 5,
  salesScore: 5,
  consistency: 5,
  fraudFree: 5,
  views: 15000,
  clicks: 2400,
  ctr: "11.2%",
  sales: 25,
  conversion: "0.6%",
  suggestion: "Consistency good hai. Engagement improve karein.",
},

  ];

  /* -----------------------------------------------------------
     ⭐ TREND BADGE
  ------------------------------------------------------------ */
  const getTrendBadge = (trend: string) => {
    if (trend === "up")
      return (
        <div className="flex text-xxs font-medium items-center gap-1 bg-green-100 px-2 py-0.5 rounded-full text-green-700">
          <TrendingUp size={14} /> Improving
        </div>
      );

    if (trend === "down")
      return (
        <div className="flex text-xxs font-medium items-center gap-1 bg-red-100 px-2 py-0.5 rounded-full text-red-700">
          <TrendingDown size={14} /> Declining
        </div>
      );

    return (
      <div className="flex text-xxs font-medium items-center gap-1 bg-gray-200 px-2 py-0.5 rounded-full text-gray-700">
        <MinusCircle size={14} /> Stable
      </div>
    );
  };

  return (
    <div className="border text-gray-600 w-full p-4 rounded-2xl bg-white space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm gap-2">
          <Sparkles size={18} />
          <p className="text-gray-800 font-medium">AI Performance Analysis</p>
        </div>
      </div>

     {/* CREATOR CARDS */}
<div className="overflow-x-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {creators.map((c, index) => {
      const score = calculateCreatorScore(c);
      const batch = getBatch(score.points);

      const openCreatorPage = () => {
        if (typeof window !== "undefined") {
          localStorage.setItem("creator_score", JSON.stringify(score));
        }
        router.push(`/app/creator/${c.code}`);
      };

      return (
        <div
          key={index}
          className="relative border rounded-2xl bg-gray-50 p-4 cursor-pointer hover:shadow-md transition"
          onClick={openCreatorPage}
        >
          <button
  onClick={(e) => {
    e.stopPropagation();
    openCreatorPage();
  }}
  className="absolute top-3 right-3 text-xs px-3 py-1 rounded-lg border border-purple-200 text-purple-700 bg-white hover:bg-purple-50 transition"
>
  Report
</button>


          <p className="text-xs text-gray-400 mb-2">Code: {c.code}</p>

          <div className="flex items-center gap-3 mb-2">
            <Image
              src={c.avatar}
              alt="creator"
              height={40}
              width={40}
              className="rounded-full"
            />

            <div className="font-medium">
              <p className="text-sm text-gray-800">{c.performance}</p>
              <p className="text-xs text-gray-500">
                Score: {score.points}
              </p>
              <p className="text-[10px] mt-1 px-2 py-0.5 rounded-full bg-purple-200 text-purple-700 inline-block">
                {batch}
              </p>
            </div>
          </div>

          <div className="mb-2">{getTrendBadge(c.trend)}</div>

          <div className="text-xs bg-purple-50 text-purple-700 p-2 rounded-xl border border-purple-200">
            {c.suggestion}
          </div>
        </div>
      );
    })}
  </div>
</div>


      {/* DATA TABLE */}
      <div className="mt-6">
        <p className="text-sm font-medium text-gray-700 mb-3">
          Performance Data Table
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border rounded-xl overflow-hidden">
            <thead className="bg-gray-100">
              <tr className="text-left text-gray-700">
                <th className="p-3">Creator Code</th>
                <th className="p-3">Views</th>
                <th className="p-3">Clicks</th>
                <th className="p-3">CTR</th>
                <th className="p-3">Sales</th>
                <th className="p-3">Score</th>
              </tr>
            </thead>

            <tbody>
              {creators.map((c) => {
                const score = calculateCreatorScore(c);

                return (
                  <tr key={c.code} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium text-gray-800">{c.code}</td>
                    <td className="p-3">{c.views.toLocaleString()}</td>
                    <td className="p-3">{c.clicks.toLocaleString()}</td>
                    <td className="p-3">{c.ctr}</td>
                    <td className="p-3">{c.sales}</td>
                    <td className="p-3">{score.points}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
