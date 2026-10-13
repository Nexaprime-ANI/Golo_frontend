"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { template6Products } from "../../data/template6Data";

export default function Template6ProductDetailPage() {
  const params = useParams();
  const productId = params?.id;

  // Find product by id, default to cold-coffee if not found
  const product = template6Products.find((p) => p.id === productId) || template6Products.find((p) => p.id === "cold-coffee") || template6Products[0];

  const defaultImages = [
    product.image || "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=400&q=80",
  ];

  const [activeImage, setActiveImage] = useState(defaultImages[0]);

  return (
    <div className="w-full min-h-[calc(100vh-140px)] px-6 md:px-14 py-10 max-w-[1240px] mx-auto">
      
      {/* Back button */}
      <div className="mb-4">
        <Link
          href="/template6/products"
          className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-gray-500 hover:text-[#d4a329] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Products</span>
        </Link>
      </div>

      {/* Heading */}
      <h1 className="text-[36px] md:text-[46px] font-bold font-playfair text-[#1f284c] mb-10 tracking-tight">
        Product Details
      </h1>

      {/* Main Product Card matching Image 2 */}
      <div className="bg-white overflow-hidden border border-[#e5a93c] grid grid-cols-1 md:grid-cols-2 shadow-md">
        
        {/* Left: Main Product Image - edge to edge */}
        <div className="relative w-full h-[360px] md:h-full min-h-[380px] bg-black/5">
          <img
            src={activeImage}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-300"
          />
        </div>

        {/* Right: Product Info & Thumbnails */}
        <div className="p-8 md:p-12 flex flex-col justify-between space-y-6 bg-white">
          <div className="space-y-5">
            {/* Title in warm amber/gold */}
            <h2 className="text-[34px] md:text-[44px] font-bold font-playfair text-[#f5a623] tracking-tight leading-tight">
              {product.id === "cold-coffee" ? "Cold Coffee" : product.name}
            </h2>

            {/* Description */}
            <p className="text-[13px] md:text-[14px] text-gray-600 leading-relaxed font-normal">
              {product.id === "cold-coffee"
                ? "Premium Cold Coffee. Cool, creamy, and irresistibly delicious—our signature cold coffee is the perfect pick-me-up anytime. Available in vanilla, chocolate rich flavors."
                : product.description}
            </p>

            {/* Category and Price Pill */}
            <div className="flex items-center justify-between gap-4 pt-3 flex-wrap">
              <div className="text-[13px] text-gray-700 font-medium">
                Category : <span className="text-gray-900 font-semibold">{product.category}</span>
              </div>

              <div className="border border-[#f5a623] text-[#f5a623] rounded-full px-8 py-1.5 font-bold text-[13px] tracking-wide bg-white">
                {product.id === "cold-coffee" ? "₹ 100" : product.priceFormatted}
              </div>
            </div>
          </div>

          {/* Thumbnails row matching Image 2 */}
          <div className="pt-8">
            <div className="flex items-center gap-6">
              {defaultImages.map((thumb, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImage(thumb)}
                  className={`w-28 h-28 md:w-36 md:h-36 overflow-hidden transition-all cursor-pointer ${
                    activeImage === thumb
                      ? "ring-2 ring-[#f5a623] shadow-md scale-102"
                      : "opacity-85 hover:opacity-100 hover:shadow-sm"
                  }`}
                >
                  <img
                    src={thumb}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
