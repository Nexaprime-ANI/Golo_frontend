import { redirect } from "next/navigation";
import DealClient from "./DealClient";

function getAbsoluteUrl(path) {
  if (!path) return "https://www.ajubaju.com/images/default-offer.jpg";
  if (path.startsWith("http")) return path;
  if (path.startsWith("/")) return `https://www.ajubaju.com${path}`;
  return `https://www.ajubaju.com/${path}`;
}

export async function generateMetadata(props) {
  const searchParams = await props.searchParams;
  const offerId = searchParams?.offerId;
  
  if (!offerId) {
    if (searchParams?.q || searchParams?.location) {
      return {
        title: "Search Nearby Deals | AjuBaju",
        description: "Browse nearby deals, offers, and local merchants on AjuBaju."
      };
    }
    return {
      title: "Offer not found | AjuBaju",
      description: "This offer does not exist or has been removed."
    };
  }

  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002";
    const res = await fetch(`${baseUrl}/offers/${offerId}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Offer fetch failed");
    const data = await res.json();
    const offer = data.data || data;

    const title = offer?.title || offer?.offerTitle || offer?.productName || "AjuBaju Offer";
    const description = offer?.description || "Check out this amazing offer on AjuBaju!";
    
    let imageUrl = "https://www.ajubaju.com/images/default-offer.jpg";
    if (offer?.images && offer.images.length > 0) {
      imageUrl = getAbsoluteUrl(offer.images[0]);
    } else if (offer?.imageUrl) {
      imageUrl = getAbsoluteUrl(offer.imageUrl);
    } else if (offer?.offerImage) {
      imageUrl = getAbsoluteUrl(offer.offerImage);
    } else if (offer?.selectedProducts?.[0]?.imageUrl) {
      imageUrl = getAbsoluteUrl(offer.selectedProducts[0].imageUrl);
    } else if (offer?.selectedProducts?.[0]?.image) {
      imageUrl = getAbsoluteUrl(offer.selectedProducts[0].image);
    } else if (offer?.merchant?.shopPhoto) {
      imageUrl = getAbsoluteUrl(offer.merchant.shopPhoto);
    }

    // Force jpeg for WhatsApp compatibility
    if (imageUrl.includes("res.cloudinary.com")) {
      imageUrl = imageUrl.replace(/\.(webp|avif|png|heic)$/i, ".jpg");
    }

    const offerUrl = `https://www.ajubaju.com/nearby-deals/deal?offerId=${encodeURIComponent(offerId)}`;

    return {
      title: `${title} | AjuBaju`,
      description,
      openGraph: {
        title: `Checkout this offer: ${title}`,
        description,
        url: offerUrl,
        siteName: "AjuBaju",
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
        title: `Checkout this offer: ${title}`,
        description,
        images: [imageUrl],
      }
    };
  } catch (err) {
    console.error("Error generating metadata for offer:", err);
    return {
      title: "AjuBaju Offer",
      description: "Check out this amazing offer on AjuBaju!"
    };
  }
}

export default async function DealPage(props) {
  const searchParams = await props.searchParams;
  const offerId = searchParams?.offerId;

  // If a search query or location was passed instead of an offerId, redirect to the search/deals page
  if (!offerId && (searchParams?.q || searchParams?.location)) {
    const params = new URLSearchParams();
    for (const [key, val] of Object.entries(searchParams || {})) {
      if (val !== undefined && val !== null && val !== "") {
        params.set(key, String(val));
      }
    }
    redirect(`/nearby-deals?${params.toString()}`);
  }

  return <DealClient />;
}
