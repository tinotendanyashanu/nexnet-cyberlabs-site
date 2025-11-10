"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { StructuredData } from "@/components/StructuredData";
import { breadcrumbJsonLd } from "@/lib/seo";

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

export function Breadcrumbs() {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;
  const parts = pathname.split("/").filter(Boolean);
  let href = "";

  return (
    <nav aria-label="Breadcrumb" className="border-b border-white/10 bg-brand-navy/60 backdrop-blur">
      <StructuredData id="breadcrumbs-schema" data={breadcrumbJsonLd(pathname)} />
      <ol className="container flex flex-wrap items-center gap-2 py-2 text-sm text-gray-300">
        <li>
          <Link href="/" className="hover:text-white">Home</Link>
        </li>
        {parts.map((seg, idx) => {
          href += `/${seg}`;
          const isLast = idx === parts.length - 1;
          return (
            <li key={href} className="flex items-center gap-2">
              <span aria-hidden>
                /
              </span>
              {isLast ? (
                <span aria-current="page" className="text-white">{humanize(seg)}</span>
              ) : (
                <Link href={href} className="hover:text-white">{humanize(seg)}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
