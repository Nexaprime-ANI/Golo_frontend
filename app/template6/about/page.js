"use client";

import { template6Team } from "../data/template6Data";

export default function Template6AboutPage() {
  const topStripImages = [
    {
      src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
      alt: "Croissants",
    },
    {
      src: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80",
      alt: "Eclairs with nuts",
    },
    {
      src: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=600&q=80",
      alt: "Decorating Strawberry Cake",
    },
    {
      src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
      alt: "Freshly baked pastries",
    },
  ];

  return (
    <div className="w-full pb-20">
      
      {/* 1. TOP GALLERY STRIP (4 VERTICAL PHOTOS) */}
      <section className="w-full grid grid-cols-2 md:grid-cols-4 gap-0 border-b border-gray-200">
        {topStripImages.map((img, idx) => (
          <div key={idx} className="relative aspect-[3/4] overflow-hidden group">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </section>

      {/* 2. WELCOME BANNER (SLATE BLUE) */}
      <section className="w-full bg-[#6c7f9f] text-white py-16 md:py-20 px-6 md:px-14 text-center">
        <div className="max-w-[860px] mx-auto space-y-6">
          <h1 className="text-[36px] md:text-[46px] font-bold font-playfair italic text-[#1f284c] tracking-tight leading-tight">
            Welcome to Sand & Saga Cafe
          </h1>

          <p className="text-[14px] md:text-[15px] text-white/95 leading-relaxed font-light">
            What started as a simple love for good coffee has grown into a place where our community comes together — one cup at a time. Since [year], we’ve been serving up freshly brewed coffee, handcrafted drinks, and made-from-scratch food in a space designed to feel like a home away from home.
          </p>
        </div>
      </section>

      {/* 3. OUR STORY SECTION (SPLIT WITH DIAGONAL IMAGE) */}
      <section className="w-full bg-white py-16 md:py-24 px-6 md:px-14 border-b border-[#e2d8ca]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-[34px] md:text-[42px] font-bold font-playfair italic text-[#1f284c] tracking-tight">
              Our Story
            </h2>

            <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed font-normal">
              Sand and Saga began with a simple idea: great coffee shouldn’t be complicated, and a café should feel like more than just a place to grab a quick drink. Founded by [founder name/story], we set out to create a space where quality, warmth, and community come first.
            </p>

            <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed font-normal">
              Every cup we pour reflects our commitment to sourcing the best beans, roasting them with care, and serving them with a smile.
            </p>
          </div>

          {/* Right Image: Angled Crop Eclairs on cooling rack */}
          <div className="lg:col-span-6 relative flex justify-end">
            <div
              className="relative w-full max-w-[520px] aspect-[1.15/1] rounded-[24px] overflow-hidden shadow-2xl"
              style={{
                clipPath: "polygon(14% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=900&q=80"
                alt="Our Story Pastries"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. MEET OUR TEAM */}
      <section className="w-full py-16 md:py-20 px-6 md:px-14">
        <div className="max-w-[1240px] mx-auto space-y-12">
          <h2 className="text-[34px] md:text-[42px] font-bold font-playfair italic text-[#1f284c] tracking-tight">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-10">
            {template6Team.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-3 group">
                <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden shadow-lg border-4 border-white transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-[16px] text-gray-900 font-playfair tracking-wide pt-1">
                  {member.name}
                </h4>
                <p className="text-[12px] text-gray-500 font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
