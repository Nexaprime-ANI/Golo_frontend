"use client";

import Link from "next/link";
import { Coffee, Heart, ShoppingBag, Award, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import { template6CitrusSweets } from "./data/template6Data";

export default function Template6HomePage() {
  return (
    <div className="w-full pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full py-10 md:py-16 px-6 md:px-14 overflow-hidden bg-gradient-to-b from-[#f9f4ea] to-[#ece4d9]">
        {/* Soft yellow radial glows on corners */}
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-[#fbe7a8]/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -right-16 w-80 h-80 bg-[#fde9af]/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left: Bakery Display Photo */}
          <div className="relative rounded-[24px] overflow-hidden shadow-xl aspect-[4/3] lg:aspect-[1.1/1] border-4 border-white/80">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
              alt="Sand and Saga Bakery Window"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right: White Card with Details */}
          <div className="bg-white/95 backdrop-blur-sm rounded-[24px] p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col justify-center space-y-6">
            <h1 className="text-[38px] md:text-[48px] font-bold font-playfair text-[#1f284c] leading-[1.15] tracking-tight">
              Sand & Saga <br />
              Bakery
            </h1>

            <div className="flex items-center gap-2 text-[#d4a329]">
              <ShieldCheck size={18} className="stroke-[2]" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-gray-500">
                Our Quality Promise
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
              <div>
                <h4 className="font-bold text-[15px] text-gray-900 mb-1">100% Organic</h4>
                <p className="text-[12px] text-gray-500 leading-relaxed">
                  No synthetic pesticides or wax coatings on our fruits.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[15px] text-gray-900 mb-1">Daily Zesting!</h4>
                <p className="text-[12px] text-gray-500 leading-relaxed">
                  Pastries are prepared with zest harvested just minutes before baking.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/template6/about"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-[#d4a329] text-[#d4a329] font-medium text-[13px] hover:bg-[#d4a329] hover:text-white transition-all duration-200 shadow-sm"
              >
                Learn About Our Producers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR HERITAGE BANNER */}
      <section className="px-6 md:px-14 py-8">
        <div className="max-w-[1240px] mx-auto bg-[#6f80a2] rounded-[24px] p-8 md:p-14 text-white shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left image: Hands Kneading Dough */}
          <div className="lg:col-span-5 rounded-[20px] overflow-hidden aspect-[1/1] shadow-md border-2 border-white/20">
            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
              alt="Where Every Bread Tells a Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right text: Heritage Story */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
            <div className="flex items-center gap-2 text-white/80">
              <Sparkles size={16} />
              <span className="text-[11px] font-bold tracking-widest uppercase">
                Our Heritage
              </span>
            </div>

            <h2 className="text-[32px] md:text-[40px] font-bold font-playfair text-[#f1bb48] leading-tight tracking-tight">
              Where Every Bread <br />
              Tells a Story
            </h2>

            <p className="text-[13px] md:text-[14px] text-white/90 leading-relaxed font-light">
              Inspired by the rich tradition of coffee culture and the joy of sharing good food, our cafe blends timeless flavors with modern hospitality. Every cup and every dish is prepared with care, passion, and a commitment to excellence.
            </p>

            <p className="text-[12px] md:text-[13px] text-white/75 leading-relaxed font-light">
              These are generic versions. If you share your cafe’s name, theme (modern, vintage, luxury, college hangout, etc.), and a few details about how it started, I can write a unique “Our Origin” section that feels authentic to your brand.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FOUR FEATURE HIGHLIGHTS */}
      <section className="px-6 md:px-14 py-14">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-center space-y-3 px-2">
            <div className="w-14 h-14 rounded-full bg-[#d4a329] text-white flex items-center justify-center shadow-md">
              <Coffee size={24} />
            </div>
            <h3 className="text-[18px] font-bold font-playfair text-gray-900">
              Premium Quality Coffee
            </h3>
            <p className="text-[12px] text-gray-600 leading-relaxed">
              Expertly brewed from carefully selected beans to deliver rich flavor and exceptional freshness in every cup.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center space-y-3 px-2">
            <div className="w-14 h-14 rounded-full bg-[#d4a329] text-white flex items-center justify-center shadow-md">
              <Heart size={24} />
            </div>
            <h3 className="text-[18px] font-bold font-playfair text-gray-900">
              Family Friendly
            </h3>
            <p className="text-[12px] text-gray-600 leading-relaxed">
              Freshly prepared using quality ingredients, offering the perfect combination of taste, freshness, and satisfaction.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center space-y-3 px-2">
            <div className="w-14 h-14 rounded-full bg-[#d4a329] text-white flex items-center justify-center shadow-md">
              <ShoppingBag size={24} />
            </div>
            <h3 className="text-[18px] font-bold font-playfair text-gray-900">
              Takeaway and Delivery
            </h3>
            <p className="text-[12px] text-gray-600 leading-relaxed">
              A warm, welcoming atmosphere where friends and families can relax, connect, and enjoy quality time together.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center space-y-3 px-2">
            <div className="w-14 h-14 rounded-full bg-[#d4a329] text-white flex items-center justify-center shadow-md">
              <Award size={24} />
            </div>
            <h3 className="text-[18px] font-bold font-playfair text-gray-900">
              Delicious Snacks
            </h3>
            <p className="text-[12px] text-gray-600 leading-relaxed">
              Enjoy your favorite coffee and meals wherever you are with our quick takeaway and reliable home delivery service.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CITRUS SWEETS SECTION */}
      <section className="px-6 md:px-14 py-8">
        <div className="max-w-[1240px] mx-auto text-center space-y-3 mb-12">
          {/* Icon */}
          <div className="text-gray-400 flex justify-center">
            <span className="text-2xl">✻</span>
          </div>

          <h2 className="text-[34px] md:text-[42px] font-bold font-playfair text-gray-900 tracking-tight">
            Citrus Sweets
          </h2>

          <p className="text-[13px] md:text-[14px] text-gray-600 max-w-xl mx-auto">
            Handcrafted daily in our kitchen using freshly harvested citrus zest and aromatic blossoms.
          </p>

          <div className="w-16 h-[1.5px] bg-gray-400 mx-auto mt-4"></div>
        </div>

        {/* 3 Sweets Cards */}
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {template6CitrusSweets.map((sweet) => (
            <div
              key={sweet.id}
              className="bg-white rounded-[20px] overflow-hidden shadow-lg border border-gray-100 flex flex-col group hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Image with Tag */}
              <div className="relative aspect-[1.15/1] w-full overflow-hidden bg-gray-100">
                <img
                  src={sweet.image}
                  alt={sweet.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3.5 left-3.5 bg-black/75 backdrop-blur-sm text-white text-[10px] font-medium px-2.5 py-1 rounded-full tracking-wider">
                  {sweet.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-bold text-[17px] font-playfair text-gray-900">
                      {sweet.name}
                    </h3>
                    <span className="font-bold text-[15px] font-playfair text-gray-900">
                      {sweet.price}
                    </span>
                  </div>

                  <p className="text-[12px] text-gray-500 leading-relaxed">
                    {sweet.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <Link
                    href={`/template6/products/cold-coffee`}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-gray-500 hover:text-[#d4a329] transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browse Full Products CTA */}
        <div className="text-center mt-12">
          <Link
            href="/template6/products"
            className="inline-flex items-center gap-2 text-[13px] font-bold text-gray-800 hover:text-[#d4a329] transition-colors"
          >
            <span>Browse Full Products</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
