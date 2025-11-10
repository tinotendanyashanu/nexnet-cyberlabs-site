import { StructuredData } from "@/components/StructuredData";
import { serviceDirectory, type ServiceSlug } from "@/lib/site-data";

interface Props { slug: ServiceSlug; }

export function ServiceStructuredData({ slug }: Props) {
  const svc = serviceDirectory[slug];
  if (!svc) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.name,
    description: svc.summary,
    provider: {
      "@type": "Organization",
      name: "NexNet CyberLabs",
      url: "https://www.nexnet.example"
    },
    areaServed: ["Africa", "European Union"],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        price: "0",
        description: "Engagements are custom-priced; contact for proposal"
      }
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${svc.name} Methodology`,
      itemListElement: svc.methodology.map(m => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: m.title, description: m.detail }
      }))
    }
  };
  return <StructuredData id={`svc-${slug}-schema`} data={data} />;
}
