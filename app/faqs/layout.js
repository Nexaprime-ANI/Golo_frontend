export const metadata = {
  title: "Frequently Asked Questions (FAQs) | AjuBaju",
  description: "Find answers to frequently asked questions about AjuBaju local deals, store vouchers, merchant onboarding, and Choja classifieds at rates much cheaper than OLX.",
  alternates: {
    canonical: "https://ajubaju.co.in/faqs",
  },
  openGraph: {
    title: "Frequently Asked Questions (FAQs) | AjuBaju",
    description: "Got questions? Find complete answers about AjuBaju local deals, vouchers, merchant tools, and Choja classifieds.",
    url: "https://ajubaju.co.in/faqs",
    siteName: "AjuBaju",
    locale: "en_IN",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is AjuBaju?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AjuBaju is a hyper-local discovery and retail savings platform designed to connect neighborhood merchants with local shoppers. It allows customers to discover nearby retail stores, browse real-time product catalogs, claim exclusive discount vouchers, and interact directly with store owners."
      }
    },
    {
      "@type": "Question",
      "name": "How do I find offers and deals near me on AjuBaju?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Click 'Nearby Deals' in the navigation bar, allow location access or manually set your current city or area, and view nearby deals sorted by distance on interactive maps and deal cards."
      }
    },
    {
      "@type": "Question",
      "name": "What is Choja by AjuBaju?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Choja is AjuBaju's dedicated classified ads marketplace. It allows local users to post classified ads at prices much cheaper than OLX, buy and sell used mobile phones, bikes, cars, furniture, and explore local services near them. It serves as a trusted, highly affordable alternative to OLX."
      }
    },
    {
      "@type": "Question",
      "name": "How can I register as a merchant on AjuBaju?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visit the Merchant Portal and click 'Register as Merchant'. Fill in your store name, business email, contact number, store category, and create a password. Provide your physical store address and pin your location on the map to complete onboarding."
      }
    },
    {
      "@type": "Question",
      "name": "How do I claim and redeem an offer voucher?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Find an offer on the homepage or nearby deals feed and click 'Claim Offer'. A unique QR code voucher is generated and saved to your account. Present this QR code at the physical merchant counter to redeem your discount."
      }
    }
  ]
};

export default function FaqsLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
