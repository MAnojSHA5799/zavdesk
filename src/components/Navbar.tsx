"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Add,
  CalendarEdit,
  DirectNotification,
  SearchNormal1,
  SidebarLeft,
} from "iconsax-react";
import ProfileImage from "../components/assets/profile.png";

export default function Navbar({
  isOpen,
  sidebarChange,
}: {
  isOpen: boolean;
  sidebarChange: (value: boolean) => void;
}) {
  const [role, setRole] = useState("creator");

  useEffect(() => {
    const r = localStorage.getItem("user_role");
    if (r) setRole(r);
  }, []);

  return (
    <div>
      <div className="flex p-4 md:p-6 justify-between items-center">
        {/* Left: Profile */}
        <div className="flex items-center gap-2">
          <Image
            src={ProfileImage}
            alt="User"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">Manoj</p>
            <p className="text-xs font-medium text-gray-500">
              Welcome back, {role}
            </p>
          </div>
        </div>

        {/* Mobile Sidebar Toggle */}
        <button
          onClick={() => sidebarChange(!isOpen)}
          className="md:hidden text-gray-500"
        >
          <SidebarLeft size={20} />
        </button>

        {/* Right Icons */}
        <div className="hidden md:flex gap-2 text-gray-500">
          <button className="h-8 w-8 grid place-items-center hover:bg-gray-100 rounded-lg">
            <SearchNormal1 size={16} />
          </button>

          <button className="h-8 w-8 grid place-items-center hover:bg-gray-100 rounded-lg">
            <DirectNotification size={16} />
          </button>

          <button className="h-8 px-2 border rounded-lg flex items-center gap-1 hover:bg-gray-100 text-xs">
            <CalendarEdit size={16} /> <span>Schedule</span>
          </button>

          {role === "creator" && (
            <button className="h-8 px-3 bg-primary text-white rounded-lg flex items-center gap-1 hover:bg-primary/80 text-xs">
              <Add size={16} /> Create Link
            </button>
          )}
        </div>
      </div>

      <hr className="bg-gray-300 mx-2" />
    </div>
  );
}
