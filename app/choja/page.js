import { Suspense } from "react";
import Navbar from "../components/Navbar";
import CategoryBar from "../components/CategoryBar";
import Categories from "../components/Categories";
import RecentListings from "../components/RecentListings";
import Footer from "../components/Footer";

export const metadata = {
  title: "Choja Classifieds | Local Buy & Sell Marketplace (Cheaper Than OLX)",
  description: "Choja by AjuBaju is India's trusted local classifieds marketplace & much cheaper alternative to OLX. Post ads at the lowest rates to buy and sell used mobile phones, bikes, cars, furniture, and laptops in Kolhapur, Pune, and across Maharashtra.",
  keywords: [
    // OLX Direct Keyword Interception
    "olx", "olx india", "olx classifieds", "olx buy and sell", "olx used cars", 
    "olx used bikes", "olx second hand mobile", "olx kolhapur", "olx pune", "olx maharashtra", 
    "olx alternative", "olx alternative India", "sites like olx", "cheaper than olx", 
    "cheaper alternative to olx", "low cost ads like olx", "best alternative to olx", "olx autos alternative",
    // Quikr & Marketplace Competitors
    "quikr", "quikr alternative", "quikr kolhapur", "facebook marketplace alternative india", 
    "second hand selling app", "affordable ad posting sites", "local classifieds portal", "lowest price ad posting",
    // Core Brand
    "Choja", "Choja classifieds", "ajubaju choja", "choja ads", "choja market",
    // Categories & Product Search
    "used mobile phones near me", "second hand bikes kolhapur", "used cars buy sell", "pre-owned electronics",
    "used furniture sale", "buy sell used items", "second hand laptops online", "local services classifieds", 
    "hire local technician", "home appliances second hand",
    // Geo Intent
    "choja kolhapur", "kolhapur classified ads", "kolhapur local listings", "buy sell kolhapur", 
    "post ads cheaper than olx", "budget classifieds maharashtra", "pune classifieds", "sangli buy sell"
  ],
  alternates: {
    canonical: "https://ajubaju.co.in/choja",
  },
  openGraph: {
    title: "Choja Classifieds | Buy & Sell Used Goods (Cheaper Than OLX Alternative)",
    description: "Post ads at rates much cheaper than OLX and browse verified second-hand mobiles, bikes, cars, and furniture on Choja by AjuBaju. The #1 affordable OLX alternative in Maharashtra.",
    url: "https://ajubaju.co.in/choja",
    siteName: "Choja by AjuBaju",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://ajubaju.co.in/images/merchant_shop_storefront.png",
        width: 1200,
        height: 630,
        alt: "Choja Local Classifieds - Cheaper Than OLX Alternative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Choja Classifieds | Buy & Sell (Cheaper Than OLX)",
    description: "Post ads much cheaper than OLX and explore local classifieds on Choja by AjuBaju. Buy & sell used items near you.",
    images: ["https://ajubaju.co.in/images/merchant_shop_storefront.png"],
  },
};

export default function ChojaPage() {
  return (
    <main className="relative z-10 min-h-screen bg-transparent">
      <Suspense fallback={<div className="h-16 bg-gray-50 animate-pulse" />}>
        <Navbar />
      </Suspense>

      {/* Semantic SEO Header for Ranking & Authority */}
      <section className="mx-auto max-w-7xl px-4 pt-6 pb-2 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b border-gray-200/80 pb-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
              Choja Classifieds <span className="text-[#e89a23] text-lg sm:text-xl font-semibold">| Cheaper Than OLX Buy &amp; Sell Marketplace</span>
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              The trusted local alternative to OLX &amp; Quikr in Maharashtra. Post ads at rates much cheaper than OLX to buy &amp; sell used mobiles, bikes, cars, furniture, and explore neighborhood services.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
              💰 Much Cheaper Than OLX
            </span>
            <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800 ring-1 ring-inset ring-amber-600/20">
              ⚡ Verified Local Community
            </span>
          </div>
        </div>
      </section>

      <div className="relative z-10 w-full">
        <CategoryBar />
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse mx-8 rounded-3xl mt-10" />}>
          <RecentListings />
        </Suspense>
      </div>

      <Footer />
    </main>
  );
}
