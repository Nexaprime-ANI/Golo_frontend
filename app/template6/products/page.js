"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";
import { template6Products } from "../data/template6Data";

export default function Template6ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("price-desc");
  const [isSortOpen, setIsSortOpen] = useState(false);

  const sortOptions = [
    { label: "Price – High to Low", value: "price-desc" },
    { label: "Price – Low to High", value: "price-asc" },
    { label: "Alphabetically", value: "alpha" },
    { label: "Recently Added", value: "recent" },
  ];

  const currentSortLabel = sortOptions.find(o => o.value === sortBy)?.label || "Price – High to Low";

  const filteredProducts = useMemo(() => {
    let list = template6Products.filter(p => {
      if (!searchTerm.trim()) return true;
      const q = searchTerm.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
    });

    if (sortBy === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "alpha") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }
    return list;
  }, [searchTerm, sortBy]);

  return (
    <div className="w-full min-h-screen px-6 md:px-14 py-8 max-w-[1280px] mx-auto">
      
      {/* SEARCH AND SORT BAR */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
        
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search collection..."
            className="w-full bg-[#f4ebe0] border border-[#d8cdbf] rounded-full pl-9 pr-4 py-2 text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#d4a329] focus:bg-white transition-all shadow-inner"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="relative flex items-center gap-2 self-end sm:self-auto">
          <span className="text-[11px] font-bold tracking-wider text-gray-500 uppercase">
            SORT BY:
          </span>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="bg-white border border-[#d8cdbf] rounded-[8px] px-3.5 py-1.5 text-[12px] font-medium text-gray-800 flex items-center gap-2 hover:border-[#d4a329] transition-colors shadow-sm"
            >
              <span>{currentSortLabel}</span>
              <ChevronDown size={14} className="text-gray-500" />
            </button>

            {isSortOpen && (
              <div className="absolute right-0 top-full mt-1.5 w-48 bg-white border border-gray-100 rounded-[10px] shadow-xl py-1 z-30">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      setSortBy(opt.value);
                      setIsSortOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 text-[12px] transition-colors flex items-center justify-between ${
                      sortBy === opt.value
                        ? "text-[#d4a329] font-bold bg-[#faf6ed]"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span>{opt.label}</span>
                    {sortBy === opt.value && <span>✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* PRODUCTS GRID (3 COLUMNS) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-[20px] overflow-hidden shadow-lg border border-[#e5dcd0] flex flex-col group hover:-translate-y-1.5 transition-all duration-300"
          >
            {/* Product Image */}
            <div className="relative aspect-[1.12/1] w-full overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Tags overlay */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                {product.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-black/75 backdrop-blur-sm text-white text-[9px] font-medium px-2 py-0.5 rounded-full tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-[17px] font-playfair text-gray-900 leading-snug">
                    {product.name}
                  </h3>
                  <span className="font-bold text-[15px] font-playfair text-[#d4a329] shrink-0">
                    {product.priceFormatted}
                  </span>
                </div>

                <p className="text-[12px] text-gray-500 leading-relaxed line-clamp-2">
                  {product.description}
                </p>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <Link
                  href={`/template6/products/${product.id}`}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-gray-500 hover:text-[#d4a329] transition-colors"
                >
                  View Details →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 bg-white/60 rounded-[24px] mt-6">
          <p className="text-gray-500 text-sm">No products found matching &ldquo;{searchTerm}&rdquo;.</p>
          <button
            onClick={() => setSearchTerm("")}
            className="mt-3 text-xs font-bold text-[#d4a329] hover:underline"
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
}
