"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Template6GalleryPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=80",
      alt: "Golden Croissants",
    },
    {
      src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=80",
      alt: "Berry Fruit Cake",
    },
    {
      src: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=700&q=80",
      alt: "Meringue Tart",
    },
    {
      src: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=700&q=80",
      alt: "Crispy Biscuits",
    },
    {
      src: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=700&q=80",
      alt: "Glazed Hazelnut Eclairs",
    },
    {
      src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=700&q=80",
      alt: "Swirl Cookies on Yellow",
    },
    {
      src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80",
      alt: "Artisan Breads on Platter",
    },
    {
      src: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=700&q=80",
      alt: "Chef Garnishing Tart",
    },
    {
      src: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=700&q=80",
      alt: "Frosted Citrus Cupcake",
    },
  ];

  const faqs = [
    {
      question: "What products do you offer?",
      answer:
        "We offer an exquisite variety of artisanal breads, handcrafted croissants, eclairs, seasonal fruit tarts, cookies, and made-from-scratch pastries. We also brew specialty organic coffees, iced signature beverages, and premium loose-leaf teas.",
    },
    {
      question: "Are your products baked fresh every day?",
      answer:
        "Yes! Every item is prepared and baked fresh every morning by our pastry chefs using 100% organic ingredients, pure European butter, and freshly harvested citrus zest. We never serve day-old pastries.",
    },
    {
      question: "How can I place an order?",
      answer:
        "You can place orders directly at our cafe counter, order through our online product catalog, or contact us at +39 02 123 4567 for bespoke celebration cakes and catering pre-orders.",
    },
    {
      question: "Do you offer eggless and vegan options?",
      answer:
        "Yes, we proudly offer a dedicated assortment of eggless pastries, vegan sourdough loaves, dairy-free fruit tarts, and plant-based milks for all espresso beverages.",
    },
    {
      question: "Do you provide home delivery?",
      answer:
        "Yes, we provide prompt local home delivery across our city area. All items are packaged in temperature-controlled boxes to ensure they arrive fresh, warm, and crispy.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full pb-20">
      
      {/* 1. OUR GALLERY HEADING */}
      <section className="pt-12 pb-8 px-6 md:px-14 text-center">
        <h1 className="text-[38px] md:text-[50px] font-bold font-playfair italic text-[#1f284c] tracking-tight">
          Our Gallery
        </h1>
      </section>

      {/* 2. 3x3 PHOTO GRID */}
      <section className="px-6 md:px-14 max-w-[1140px] mx-auto pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-7">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-[3/4] rounded-[6px] overflow-hidden shadow-sm bg-stone-200 group hover:shadow-md transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="px-6 md:px-14 max-w-[1140px] mx-auto pt-6">
        <h2 className="text-[30px] md:text-[38px] font-bold font-playfair text-[#1f284c] mb-6 tracking-tight">
          Frequently Asked Questions
        </h2>

        {/* Slate Blue Accordion Stack */}
        <div className="rounded-[4px] overflow-hidden shadow-sm border border-[#5d6f8f]/30">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-white/20 last:border-b-0 bg-[#65799b] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4 px-6 md:px-8 text-left flex items-center justify-between text-white font-medium text-[15px] md:text-[16px] hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-white transition-transform duration-300 shrink-0 ml-4 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 md:px-8 pb-5 pt-1 text-white/90 text-[13px] md:text-[14px] leading-relaxed font-light bg-[#5c6f8f]/60 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
