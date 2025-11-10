import { StructuredData } from "@/components/StructuredData";

interface ArticleProps {
  title: string;
  description: string;
  datePublished: string; // ISO date
  author: string;
  image?: string;
  url: string;
  type?: "Article" | "TechArticle" | "Report";
}

export function ArticleStructuredData({ title, description, datePublished, author, image, url, type = "Article" }: ArticleProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": type,
    headline: title,
    description,
    datePublished,
    author: { "@type": "Person", name: author },
    publisher: {
      "@type": "Organization",
      name: "NexNet CyberLabs",
      logo: { "@type": "ImageObject", url: "https://www.nexnet.example/logo.svg" }
    },
    image: image || "https://www.nexnet.example/logo.svg",
    mainEntityOfPage: url
  };
  return <StructuredData id={`article-${datePublished}-${title}`} data={data} />;
}
