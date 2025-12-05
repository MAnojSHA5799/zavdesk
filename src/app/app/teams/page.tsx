"use client";

import React from "react";
import PageNavbar, {
  PageNavbarLeftContent,
  PageNavbarRightContent,
  PageNavbarIconButton
} from "@/components/layout/PageNavbar";

import { Profile, SearchNormal1, Notification } from "iconsax-react";

const creatorDetails = {
  id: 1,
  creatorName: "Priya Verma",
  username: "priya.vibes",
  email: "priyaverma@example.com",
  gender: "Female",
  age: 27,
  dob: "1998-02-22",

  followers: 32000,
  likes: 510000,

  profileDetails:
    "Travel influencer with global brand collaborations. Creates aesthetic content around destinations, hotel reviews, and lifestyle.",

  connectedAccounts: {
    facebook: {
      connected: true,
      profileName: "Priya Verma",
      friends: 1840,
      fbUserId: "fb_99882211",
      pagesManaged: ["Priya Vlogs", "Travel with Priya"],
    },
    instagram: {
      connected: true,
      username: "priya.vibes",
      igUserId: "ig_77220198",
      mediaCount: 420,
      reels: 190,
      posts: 230,
      storiesHighlights: ["Dubai", "Food", "Goa", "Bali"],
    },
  },

  status: "Active",

  insights: {
    engagementRate: "4.8%",
    avgLikesPerPost: 2100,
    avgCommentsPerPost: 140,
    topCountries: ["India", "UAE", "Singapore"],
    topAgeGroups: ["18-24", "25-34"],
  },

  contactInfo: {
    businessEmail: "business.priya@example.com",
    phone: "+91 9988776622",
    location: "Mumbai, India",
  },
};

export default function CreatorDetailsPage() {
  return (
    <div className="w-full">

      {/* ---------------- NAVBAR TOP FIXED ---------------- */}
      <div className="sticky top-0 z-40 bg-white shadow-sm">
        <PageNavbar>
          <PageNavbarLeftContent>
            <div className="border rounded-full w-10 h-10 all-center">
              <Profile size={18} />
            </div>
            <div>
              <h1 className="text-sm font-semibold text-gray-800">Creator Details</h1>
              <p className="text-xs font-medium text-gray-500">
                Complete creator analytics & connected accounts
              </p>
            </div>
          </PageNavbarLeftContent>

          <PageNavbarRightContent>
            <PageNavbarIconButton>
              <SearchNormal1 size={16} />
            </PageNavbarIconButton>
            <PageNavbarIconButton>
              <Notification size={16} />
            </PageNavbarIconButton>
          </PageNavbarRightContent>
        </PageNavbar>
      </div>

      {/* ---------------- PAGE CONTENT ---------------- */}
      <div className="p-6 text-gray-700">

        {/* HEADER */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center text-2xl font-bold text-pink-600">
            {creatorDetails.creatorName.charAt(0)}
          </div>

          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              {creatorDetails.creatorName}
            </h1>
            <p className="text-sm text-gray-500">@{creatorDetails.username}</p>
            <span
              className={`text-xs px-3 py-1 rounded-full mt-1 inline-block ${
                creatorDetails.status === "Active"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {creatorDetails.status}
            </span>
          </div>
        </div>

        {/* BASIC INFO + METRICS */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* BASIC INFO */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-sm font-semibold mb-3 text-gray-900">Basic Info</h2>

            <div className="space-y-2 text-sm">
              <p><strong>Name:</strong> {creatorDetails.creatorName}</p>
              <p><strong>Email:</strong> {creatorDetails.email}</p>
              <p><strong>Gender:</strong> {creatorDetails.gender}</p>
              <p><strong>Age:</strong> {creatorDetails.age}</p>
              <p><strong>DOB:</strong> {creatorDetails.dob}</p>
            </div>
          </div>

          {/* METRICS */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-sm font-semibold mb-3 text-gray-900">Metrics</h2>

            <div className="space-y-2 text-sm">
              <p><strong>Followers:</strong> {creatorDetails.followers.toLocaleString()}</p>
              <p><strong>Total Likes:</strong> {creatorDetails.likes.toLocaleString()}</p>
              <p><strong>Engagement Rate:</strong> {creatorDetails.insights.engagementRate}</p>
              <p><strong>Avg Likes/Post:</strong> {creatorDetails.insights.avgLikesPerPost}</p>
              <p><strong>Avg Comments/Post:</strong> {creatorDetails.insights.avgCommentsPerPost}</p>
            </div>
          </div>
        </div>

        {/* PROFILE DETAILS */}
        <div className="bg-white p-4 rounded-xl shadow mb-6">
          <h2 className="text-sm font-semibold mb-3 text-gray-900">Profile Details</h2>
          <p className="text-sm leading-6">{creatorDetails.profileDetails}</p>
        </div>

        {/* CONNECTED ACCOUNTS */}
        <div className="bg-white p-4 rounded-xl shadow mb-6">
          <h2 className="text-sm font-semibold mb-4 text-gray-900">Connected Accounts</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Facebook */}
            <div className="p-3 rounded-xl bg-blue-50">
              <h3 className="font-semibold text-blue-700">Facebook</h3>
              {creatorDetails.connectedAccounts.facebook.connected ? (
                <div className="mt-2 text-sm">
                  <p><strong>Name:</strong> {creatorDetails.connectedAccounts.facebook.profileName}</p>
                  <p><strong>Friends:</strong> {creatorDetails.connectedAccounts.facebook.friends}</p>
                  <p><strong>Pages:</strong> {creatorDetails.connectedAccounts.facebook.pagesManaged.join(", ")}</p>
                </div>
              ) : (
                <p className="text-sm text-gray-500">Not Connected</p>
              )}
            </div>

            {/* Instagram */}
            <div className="p-3 rounded-xl bg-pink-50">
              <h3 className="font-semibold text-pink-700">Instagram</h3>
              {creatorDetails.connectedAccounts.instagram.connected ? (
                <div className="mt-2 text-sm">
                  <p><strong>Username:</strong> {creatorDetails.connectedAccounts.instagram.username}</p>
                  <p><strong>Posts:</strong> {creatorDetails.connectedAccounts.instagram.posts}</p>
                  <p><strong>Reels:</strong> {creatorDetails.connectedAccounts.instagram.reels}</p>
                  <p>
                    <strong>Highlights:</strong> <br />
                    {creatorDetails.connectedAccounts.instagram.storiesHighlights.join(", ")}
                  </p>
                </div>
              ) : (
                <p className="text-sm text-gray-500">Not Connected</p>
              )}
            </div>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="bg-white p-4 rounded-xl shadow mb-6">
          <h2 className="text-sm font-semibold mb-3 text-gray-900">Contact Info</h2>

          <div className="text-sm space-y-2">
            <p><strong>Business Email:</strong> {creatorDetails.contactInfo.businessEmail}</p>
            <p><strong>Phone:</strong> {creatorDetails.contactInfo.phone}</p>
            <p><strong>Location:</strong> {creatorDetails.contactInfo.location}</p>
          </div>
        </div>

        {/* INSIGHTS */}
        <div className="bg-white p-4 rounded-xl shadow mb-6">
          <h2 className="text-sm font-semibold mb-3 text-gray-900">Insights</h2>

          <div className="text-sm">
            <p><strong>Top Countries:</strong> {creatorDetails.insights.topCountries.join(", ")}</p>
            <p><strong>Top Age Groups:</strong> {creatorDetails.insights.topAgeGroups.join(", ")}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
