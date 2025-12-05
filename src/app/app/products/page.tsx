"use client";
import React, { useState } from "react";
import { Search, Star, ShoppingBag } from "lucide-react";

export default function ProductsPage() {
  const [search, setSearch] = useState("");

  const [products] = useState([
    {
      id: 1,
      title: "Winter Jacket",
      brand: "Zara",
      price: 2499,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    },
    {
      id: 2,
      title: "Makeup Kit",
      brand: "Lakme",
      price: 1299,
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1526040652367-ac003a0475fe?w=400",
    },
    {
      id: 3,
      title: "Running Shoes",
      brand: "Nike",
      price: 3599,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    },
    {
      id: 4,
      title: "Sports Socks",
      brand: "Puma",
      price: 299,
      rating: 4.1,
      image:
        "https://images.unsplash.com/photo-1600180758890-6c4b0b57a5a9?w=400",
    },
  ]);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Products</h1>
      </div>

      {/* SEARCH BAR */}
      <div className="flex items-center gap-2 bg-white border px-4 py-2 rounded-xl shadow-sm w-full md:w-1/3">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search products..."
          className="outline-none w-full text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-4 space-y-2">
              <h2 className="text-lg font-medium">{item.title}</h2>
              <p className="text-sm text-gray-500">{item.brand}</p>

              <div className="flex items-center gap-1 text-yellow-500 text-sm">
                <Star size={16} className="fill-yellow-500 text-yellow-500" />
                {item.rating}
              </div>

              <p className="font-semibold text-lg">₹{item.price}</p>

              <button className="mt-2 w-full bg-black text-white py-2 rounded-xl flex items-center justify-center gap-2">
                <ShoppingBag size={16} /> Promote This Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}