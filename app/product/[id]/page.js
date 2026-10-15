import AdClient from "./AdClient";

function getAbsoluteUrl(path) {
  if (!path) return "https://ajubaju.co.in/images/merchant_shop_storefront.png";
  if (path.startsWith("http")) return path;
  if (path.startsWith("/")) return `https://ajubaju.co.in${path}`;
  return `https://ajubaju.co.in/${path}`;
}

export async function generateMetadata(props) {
  const params = await props.params;
  const adId = params?.id;
  
  if (!adId) {
    return {
      title: "Ad not found | Choja Classifieds | AjuBaju",
      description: "This classified ad does not exist or has been removed."
    };
  }

  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002";
    const res = await fetch(`${baseUrl}/ads/${adId}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Ad fetch failed");
    const data = await res.json();
    const ad = data.data || data;

    const title = ad?.title || ad?.productName || "Classified Ad";
    const description = ad?.description || `Check out ${title} on Choja Classifieds by AjuBaju!`;
    const canonicalUrl = `https://ajubaju.co.in/product/${adId}`;
    
    let imageUrl = "https://ajubaju.co.in/images/merchant_shop_storefront.png";
    if (ad?.images && ad.images.length > 0) {
      imageUrl = getAbsoluteUrl(ad.images[0]);
    } else if (ad?.imageUrl) {
      imageUrl = getAbsoluteUrl(ad.imageUrl);
    } else if (ad?.adImage) {
      imageUrl = getAbsoluteUrl(ad.adImage);
    }
    
    // Force jpeg for WhatsApp compatibility
    if (imageUrl.includes("res.cloudinary.com")) {
      imageUrl = imageUrl.replace(/\.(webp|avif|png|heic)$/i, ".jpg");
    }

    return {
      title: `${title} | Choja Classifieds | AjuBaju`,
      description,
      keywords: [
        title,
        `${title} OLX`,
        `${title} second hand`,
        `${title} price`,
        ad?.category || "Classifieds",
        "Choja ads",
        "buy sell second hand",
        "used products",
        "free classified ads",
        "olx alternative",
        "olx classifieds",
        "ajubaju choja"
      ],
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: `${title} | Choja Classifieds`,
        description,
        url: canonicalUrl,
        siteName: "Choja by AjuBaju",
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: title,
            type: "image/jpeg",
          }
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: `${title} | Choja Classifieds`,
        description,
        images: [imageUrl],
      }
    };
  } catch (err) {
    console.error("Error generating metadata for ad:", err);
    return {
      title: "Classified Ad | Choja | AjuBaju",
      description: "Check out this classified ad on Choja by AjuBaju!"
    };
  }
}

export default async function AdPage(props) {
  const params = await props.params;
  const adId = params?.id;

  let adSchema = null;
  let breadcrumbSchema = null;

  if (adId) {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002";
      const res = await fetch(`${baseUrl}/ads/${adId}`, { cache: "no-store" });
      if (res.ok) {
        const json = await res.json();
        const ad = json.data || json;
        if (ad) {
          const title = ad.title || ad.productName || "Classified Ad";
          const desc = ad.description || `Buy or sell ${title} on Choja Classifieds by AjuBaju.`;
          const canonicalUrl = `https://ajubaju.co.in/product/${adId}`;
          const category = ad.category || "General";

          let imgUrl = "https://ajubaju.co.in/images/merchant_shop_storefront.png";
          if (ad.images && ad.images.length > 0) imgUrl = getAbsoluteUrl(ad.images[0]);
          else if (ad.imageUrl) imgUrl = getAbsoluteUrl(ad.imageUrl);

          adSchema = {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": title,
            "description": desc,
            "image": imgUrl,
            "category": category,
            "offers": {
              "@type": "Offer",
              "url": canonicalUrl,
              "price": Number(ad.price || 0),
              "priceCurrency": "INR",
              "itemCondition": "https://schema.org/UsedCondition",
              "availability": "https://schema.org/InStock",
              ...(ad.contactInfo?.name
                ? {
                    "seller": {
                      "@type": "Person",
                      "name": ad.contactInfo.name,
                    },
                  }
                : {}),
            },
          };

          breadcrumbSchema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://ajubaju.co.in",
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Choja Classifieds",
                "item": "https://ajubaju.co.in/choja",
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": category,
                "item": `https://ajubaju.co.in/choja?category=${encodeURIComponent(category)}`,
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": title,
                "item": canonicalUrl,
              },
            ],
          };
        }
      }
    } catch (e) {
      // Non-blocking schema fallback
    }
  }

  return (
    <>
      {adSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(adSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      <AdClient params={props.params} />
    </>
  );
}
