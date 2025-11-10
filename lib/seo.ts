export const siteBaseUrl = "https://www.nexnet.example";

export function canonical(pathname: string): string {
  if (!pathname.startsWith("/")) pathname = "/" + pathname;
  return siteBaseUrl + pathname;
}

export function breadcrumbJsonLd(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  let path = "";
  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteBaseUrl + "/"
    },
    ...parts.map((seg, idx) => {
      path += `/${seg}`;
      return {
        "@type": "ListItem",
        position: idx + 2,
        name: humanize(seg),
        item: siteBaseUrl + path
      };
    })
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement
  };
}

const labelMap: Record<string, string> = {
  services: "Services",
  industries: "Industries",
  insights: "Insights",
  academy: "Academy",
  company: "Company",
  trust: "Trust",
  careers: "Careers",
  privacy: "Privacy",
  terms: "Terms",
  cookies: "Cookies",
  "security-policy": "Security Policy",
  "data-protection-agreement": "Data Protection Agreement",
  "responsible-disclosure": "Responsible Disclosure",
  "digital-forensics": "Digital Forensics",
  "threat-intelligence": "Threat Intelligence",
  "governance-risk-compliance": "Governance, Risk & Compliance",
  "security-assessments": "Security Assessments",
  "security-awareness-training": "Security Awareness Training",
  "financial-services": "Financial Services",
  "mining-energy": "Mining & Energy",
  "public-sector": "Public Sector",
  "case-studies": "Case Studies",
  "threat-briefs": "Threat Briefs"
};

function humanize(seg: string) {
  return labelMap[seg] || seg.split("-").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ");
}
