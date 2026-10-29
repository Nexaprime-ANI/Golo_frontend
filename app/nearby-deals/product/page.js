import { redirect } from "next/navigation";
import { getPublicMerchantProductById } from "../../lib/api/merchant";
import ProductClient from "./ProductClient";

export async function generateMetadata(props) {
  const searchParams = await props.searchParams;
  const id = searchParams?.id;
  if (!id) {
    return {
      title: "Product Details | AjuBaju",
      description: "View product details on AjuBaju.",
    };
  }

  try {
    const data = await getPublicMerchantProductById(id);
    const product = data?.data;
    
    if (!product) {
      return {
        title: "Product Not Found | AjuBaju",
      };
    }

    const defaultImage = "https://ajubaju.co.in/images/merchant_shop_storefront.png"; // Must be PNG/JPG for WhatsApp
    let ogImage = product.images?.[0] || product.image || defaultImage;

    // WhatsApp rejects .webp and .avif. If it's Cloudinary with f_auto, replace it.
    if (typeof ogImage === "string") {
      ogImage = ogImage.replace("f_auto", "f_jpg").replace(/\.webp$|\.avif$/, ".jpg");
      if (ogImage.startsWith("/")) {
        ogImage = `https://ajubaju.co.in${ogImage}`;
      }
    }

    const desc = product.description || `Check out ${product.name} on AjuBaju!`;

    const productUrl = `https://ajubaju.co.in/nearby-deals/product?id=${encodeURIComponent(id)}`;

    return {
      title: `${product.name} | AjuBaju Deals`,
      description: desc,
      keywords: [
        product.name,
        product.category || "Local Products",
        "store products",
        "nearby shopping",
        "local deals",
        "AjuBaju",
      ],
      alternates: {
        canonical: productUrl,
      },
      openGraph: {
        title: `${product.name} | AjuBaju`,
        description: desc,
        url: productUrl,
        images: [{ url: ogImage }],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: `${product.name} | AjuBaju`,
        description: desc,
        images: [ogImage],
      }
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Product Details | AjuBaju",
    };
  }
}

export default async function ProductPage(props) {
  const searchParams = await props.searchParams;
  const id = searchParams?.id;

  if (!id && (searchParams?.q || searchParams?.location)) {
    const params = new URLSearchParams();
    for (const [key, val] of Object.entries(searchParams || {})) {
      if (val !== undefined && val !== null && val !== "") {
        params.set(key, String(val));
      }
    }
    redirect(`/nearby-deals?${params.toString()}`);
  }

  let productSchema = null;
  let breadcrumbSchema = null;

  if (id) {
    try {
      const data = await getPublicMerchantProductById(id);
      const product = data?.data || data;
      if (product) {
        const productUrl = `https://ajubaju.co.in/nearby-deals/product?id=${encodeURIComponent(id)}`;
        let imgUrl = "https://ajubaju.co.in/images/merchant_shop_storefront.png";
        if (product?.images?.[0]) imgUrl = product.images[0];
        else if (product?.image) imgUrl = product.image;

        productSchema = {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.name,
          "description": product.description || `Buy ${product.name} at the best price on AjuBaju.`,
          "image": imgUrl,
          "sku": String(product.id || id),
          "category": product.category || "General",
          "offers": {
            "@type": "Offer",
            "url": productUrl,
            "price": Number(product.price || 0),
            "priceCurrency": "INR",
            "availability":
              product.stockQuantity > 0
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock",
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
              "name": "Nearby Deals",
              "item": "https://ajubaju.co.in/nearby-deals",
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": product.name,
              "item": productUrl,
            },
          ],
        };
      }
    } catch (e) {
      // Non-blocking schema fallback
    }
  }

  return (
    <>
      {productSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      <ProductClient />
    </>
  );
}
