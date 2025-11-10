import Script from "next/script";

interface StructuredDataProps {
  data: Record<string, unknown> | Record<string, unknown>[];
  id: string;
}

export function StructuredData({ data, id }: StructuredDataProps) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

