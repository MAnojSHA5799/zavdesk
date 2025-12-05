"use client";
import "../../.././globals.css";
import { useEffect, useState } from "react";
import { CheckCircle, AlertCircle, Zap, TrendingUp } from "lucide-react";

interface ScoreBreakdown {
  quality: number;
  frequency: number;
  engagement: number;
  sales: number;
  consistency: number;
  fraud: number;
}

interface CreatorScore {
  total: number;
  points: number;
  breakdown: ScoreBreakdown;
  details?: {
    contentDays?: number;
    engagementMetric?: number;
    salesCount?: number;
    consistencyDays?: number;
    fraudDetected?: boolean;
  };
}

export default function CreatorDetailPage() {
  const [score, setScore] = useState<CreatorScore | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("creator_score");
    if (stored) {
      try {
        setScore(JSON.parse(stored));
      } catch (err) {
        console.error("Invalid creator_score format:", err);
      }
    }
  }, []);

  if (!score) {
    return (
      <div className="p-6">
        <p className="text-gray-500 text-sm">Loading creator score...</p>
      </div>
    );
  }

  const { breakdown, details } = score;

  // Auto-detect batch level
  const getBatchLevel = (points: number) => {
    if (points >= 5000) return "Diamond";
    if (points >= 1500) return "Gold";
    if (points >= 500) return "Silver";
    if (points >= 250) return "Platinum";
    return "Beginner";
  };

  const batch = getBatchLevel(score.points);

  const scoreCards = [
    {
      label: "Content Quality",
      value: breakdown.quality ?? 0,
      weight: 0.2,
      reason: `The creator’s content has been evaluated for clarity, production quality, creativity, and relevance. High-quality content indicates professionalism and audience satisfaction. This component contributes a weight of 0.2 (20%) to the overall performance score.`,
      icon: <CheckCircle size={20} className="text-green-500" />,
    },
    {
      label: "Content Frequency",
      value: breakdown.frequency ?? 0,
      weight: 0.5,
      reason: `Content was posted consistently on ${details?.contentDays ?? 0} days during the evaluation period. Regular posting maintains audience interest and retention. The frequency of content posting contributes a significant weight of 0.5 (50%) to the total score.`,
      icon: <Zap size={20} className="text-yellow-500" />,
    },
    {
      label: "Engagement",
      value: breakdown.engagement ?? 0,
      weight: 0.3,
      reason: `Audience engagement is measured through likes, comments, shares, and interactions, totaling ${details?.engagementMetric ?? 0} engagement points during the evaluation period. Higher engagement indicates effective content strategies and active followers. Engagement contributes a weight of 0.3 (30%) to the overall score.`,
      icon: <TrendingUp size={20} className="text-blue-500" />,
    },
    {
      label: "Sales Performance",
      value: breakdown.sales ?? 0,
      weight: 0.5,
      reason: `The creator generated ${details?.salesCount ?? 0} sales during the evaluation period. Sales performance reflects the creator’s ability to convert audience interest into revenue. This metric contributes a weight of 0.5 (50%) to the total score.`,
      icon: <CheckCircle size={20} className="text-purple-500" />,
    },
    {
      label: "Consistency",
      value: breakdown.consistency ?? 0,
      weight: 0.1,
      reason: `Consistency of content creation and posting over ${details?.consistencyDays ?? 0} days ensures sustained audience engagement and platform reliability. This factor contributes a smaller weight of 0.1 (10%) to the overall score.`,
      icon: <Zap size={20} className="text-orange-500" />,
    },
    {
      label: "Fraud Check",
      value: breakdown.fraud ?? 0,
      weight: 0.1,
      reason: `The account has been reviewed for fraudulent behavior. ${
        details?.fraudDetected ? "Potential fraudulent activity was detected." : "No fraudulent activity was found."
      } Maintaining authenticity is critical for long-term credibility. This factor contributes a weight of 0.1 (10%) to the total score.`,
      icon: <AlertCircle size={20} className="text-red-500" />,
    },
  ];

  return (
    <div className="relative p-6 space-y-8 min-h-screen">

      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-30"
        style={{
          backgroundImage: "url('/im.jpg')",
        }}
      />

      {/* BODY CONTENT (kept above background) */}
      <div className="relative z-10">

        <h1 className="text-2xl mb-3 font-bold">Creator Performance Report</h1>

        {/* OVERALL SCORE */}
        <div className="p-6 mb-3 bg-white shadow-lg rounded-2xl border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-gray-500 font-medium">Overall Score</p>
            <p className="text-4xl font-extrabold text-purple-700 mt-1">
              {score.points} Points
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Total Weight: {score.total.toFixed(2)}
            </p>
          </div>
          <div className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold">
            Batch Level: {batch}
          </div>
        </div>

        {/* SCORE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-3">
          {scoreCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border shadow-sm p-5 hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-2">
                {card.icon}
                <p className="font-semibold text-gray-700">
                  {card.label} ({card.weight})
                </p>
              </div>

              <p className="text-2xl font-bold text-gray-800">{card.value}</p>

              <p className="mt-2 text-xs text-gray-500 border border-gray-200 rounded-lg p-2 bg-gray-50">
                {card.reason}
              </p>

              <div className="mt-3 h-2 w-full bg-gray-200 rounded-full">
                <div
                  className={`h-2 rounded-full ${
                    card.value > 75
                      ? "bg-green-500"
                      : card.value > 50
                      ? "bg-yellow-400"
                      : "bg-red-500"
                  }`}
                  style={{ width: `${Math.min(card.value, 100)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* BATCH INFO */}
        <div className="p-6  bg-white rounded-2xl border shadow">
          <h3 className="text-lg font-semibold mb-2">Batch Categories</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>Platinum – 250 points</li>
            <li>Silver – 500 points</li>
            <li>Gold – 1500 points</li>
            <li>Diamond – 5000 points</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">
            Note: Diamond level typically requires ~10,000 product sales
            (5000 ÷ 0.5). Batch calculation considers sales, consistency, and fraud check.
          </p>
        </div>

      </div>
    </div>
  );
}