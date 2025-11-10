import { MetadataRoute } from "next";

const baseUrl = "https://www.nexnet.example";

// NOTE: Keep in sync with site-data & navigation updates. Dynamic routes (services, industries, insights posts, careers) are appended below.
const staticRoutes = [
  "",
  "/about",
  "/about/leadership",
  "/about/pillars",
  "/about/disclosure",
  "/services",
  "/industries",
  "/academy",
  "/trust",
  "/contact",
  "/privacy",
  "/terms",
  "/cookies",
  "/security-policy",
  "/data-protection-agreement",
  "/responsible-disclosure",
  "/careers"
];

import { serviceDirectory, industries, blogPosts } from "@/lib/site-data";
import { roles } from "@/lib/careers";

function serviceRoutes() {
  return Object.keys(serviceDirectory).map(slug => `/services/${slug}`);
}

function industryRoutes() {
  return industries.map(i => `/industries/${i.key === "financial" ? "financial-services" : i.key === "energy" ? "mining-energy" : i.key === "government" ? "public-sector" : i.key}`);
}

function insightRoutes() {
  return blogPosts.map(p => `/insights/${p.slug}`);
}

function careerRoutes() {
  return roles.map(r => `/careers/${r.slug}`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const dynamic = [
    ...serviceRoutes(),
    ...industryRoutes(),
    ...insightRoutes(),
    ...careerRoutes()
  ];
  const all = [...staticRoutes, ...dynamic];
  const now = new Date();
  return all.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services") ? 0.9 : 0.7
  }));
}

