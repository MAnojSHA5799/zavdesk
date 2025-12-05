"use client";

import Image from "next/image";
import {
  ArrowRight2,
  Document,
  Element3,
  Folder2,
  Headphone,
  Link2,
  Profile2User,
  Setting2,
  Star,
  Wallet,
  Chart1,
  Triangle,
} from "iconsax-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ProfileImg from "./assets/profile.png";
import React, { useEffect, useState } from "react";

interface MenuItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  children?: { label: string; href: string }[];
}

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const [role, setRole] = useState<"creator" | "admin">("creator");
  const [openMenu, setOpenMenu] = useState<string | null>(null); // dropdown open

  useEffect(() => {
    const r = localStorage.getItem("user_role") as "creator" | "admin";
    if (r) setRole(r);
  }, []);

  const logout = () => {
    localStorage.removeItem("user_role");
    router.push("/login");
  };

  // ---------------------- CREATOR MENU ----------------------
  const creatorMenu: MenuItem[] = [
    { href: "/app/dashboard", label: "Dashboard", icon: <Element3 size={16} /> },
    { href: "/app/teams", label: "Creator Details", icon: <Profile2User size={16} /> },
    { href: "/app/links", label: "Create Links", icon: <Link2 size={16} /> },
    { href: "/app/earnings", label: "Earnings", icon: <Star size={16} /> },
    { href: "/app/orders", label: "Orders", icon: <Document size={16} /> },
    { href: "/app/products", label: "Products", icon: <Folder2 size={16} /> },
    { href: "/app/payouts", label: "Payouts", icon: <Wallet size={16} /> },
    { href: "/app/ai-analysis", label: "AI Analysis", icon: <Chart1 size={16} /> },
  ];

  // ---------------------- ADMIN MENU ----------------------
  const adminMenu: MenuItem[] = [
    { label: "Dashboard", href: "/admin/dashboard", icon: <Element3 size={16} /> },

    {
      label: "Creators",
      icon: <Profile2User size={16} />,
      children: [
        { label: "All Creators", href: "/admin/creators" },
        { label: "Creator Requests", href: "/admin/creators/requests" },
      ],
    },

    {
      label: "Sellers",
      icon: <Folder2 size={16} />,
      children: [
        { label: "All Sellers", href: "/admin/sellers" },
        { label: "Seller Requests", href: "/admin/sellers/requests" },
      ],
    },

    {
      label: "Customers",
      icon: <Profile2User size={16} />,
      children: [
        { label: "All Customers", href: "/admin/customers" },
        { label: "Customer Requests", href: "/admin/customers/requests" },
      ],
    },

    { label: "Orders", href: "/admin/orders", icon: <Document size={16} /> },
    { label: "Payments", href: "/admin/payments", icon: <Wallet size={16} /> },
    { label: "Products", href: "/admin/products", icon: <Folder2 size={16} /> },
    { label: "Support", href: "/admin/support", icon: <Headphone size={16} /> },
  ];

  const menu = role === "admin" ? adminMenu : creatorMenu;

  return (
    <div className="w-60 shrink-0 h-screen border-r bg-white">
      {/* TOP BRAND */}
      <div className="h-[70px] p-6 flex items-center gap-2">
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-violet-500 text-white">
          <Triangle size={20} />
        </div>
        <div>
          <h1 className="text-sm font-bold text-gray-800 capitalize">{role}</h1>
          <p className="text-xs text-gray-500">HeyCollab</p>
        </div>
      </div>

      <hr />

      <div className="flex flex-col justify-between h-full">
        {/* MENU SECTION */}
        <div className="pt-6 text-gray-600 text-xs font-medium space-y-2">
          {menu.map((item, index) => {
            const isOpen = openMenu === item.label;

            return (
              <React.Fragment key={index}>
                {/* PARENT ITEM */}
                <button
                  onClick={() =>
                    item.children ? setOpenMenu(isOpen ? null : item.label) : router.push(item.href!)
                  }
                  className={`flex w-full items-center gap-2 px-6 py-2 duration-200 hover:px-8 ${
                    pathname === item.href ? "text-violet-600 font-semibold" : ""
                  }`}
                >
                  {item.icon}
                  {item.label}

                  {item.children && (
                    <span className="ml-auto">{isOpen ? "▾" : "▸"}</span>
                  )}
                </button>

                {/* DROPDOWN ITEMS */}
                {item.children && isOpen && (
                  <div className="ml-10 space-y-1">
                    {item.children.map((sub, i) => (
                      <Link
                        key={i}
                        href={sub.href}
                        className={`block text-xs py-1 px-2 rounded hover:bg-violet-50 ${
                          pathname === sub.href ? "text-violet-600 font-semibold" : ""
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* BOTTOM PROFILE SECTION */}
        <div>
          <div className="text-gray-500 text-xs font-medium">
            <button className="flex px-6 py-2 items-center gap-2 hover:px-8 duration-200">
              <Setting2 size={16} /> Settings
            </button>

            <button className="flex px-6 py-2 items-center gap-2 hover:px-8 duration-200">
              <Headphone size={16} /> Support
            </button>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between px-6 pb-6 items-center">
            <div className="flex items-center gap-2">
              <Image src={ProfileImg} alt="User" width={36} height={36} className="rounded-full" />

              <div>
                <p className="text-sm font-semibold text-gray-800">Manoj</p>
                <p className="text-xs text-gray-500">steve@apple.com</p>
              </div>
            </div>

            <button onClick={logout} className="text-gray-500 hover:text-red-500">
              <ArrowRight2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
