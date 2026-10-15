export const metadata = {
  title: "Nearby Deals, Store Offers & Local Discount Vouchers",
  description: "Browse verified local discounts, merchant store offers, restaurant dining coupons, and retail savings near you. Save up to 70% with AjuBaju's active deals hub.",
  keywords: [
    "nearby deals", "local offers", "store discounts", "discount vouchers", "restaurant coupons near me",
    "shopping discounts", "salon spa offers", "supermarket discounts", "local savings app",
    "Nearbuy alternative", "Magicpin offers alternative", "Justdial shop offers",
    "kolhapur deals", "rajarampuri store discounts", "best deals today"
  ],
  alternates: {
    canonical: "https://ajubaju.co.in/nearby-deals",
  },
  openGraph: {
    title: "Nearby Deals, Store Offers & Local Discount Vouchers | AjuBaju",
    description: "Browse verified local discounts, merchant store offers, and savings near you with AjuBaju.",
    url: "https://ajubaju.co.in/nearby-deals",
    siteName: "AjuBaju Deals",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://ajubaju.co.in/images/merchant_shop_storefront.png",
        width: 1200,
        height: 630,
        alt: "AjuBaju Nearby Deals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nearby Deals, Store Offers & Local Discount Vouchers | AjuBaju",
    description: "Browse verified local discounts, merchant store offers, and savings near you with AjuBaju.",
    images: ["https://ajubaju.co.in/images/merchant_shop_storefront.png"],
  },
};

export default function NearbyDealsLayout({ children }) {
  return children;
}
