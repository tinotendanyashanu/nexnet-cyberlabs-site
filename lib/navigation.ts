import { type LucideIcon } from "lucide-react";

export type NavLink = {
  href: string;
  label: string;
  description?: string;
  icon?: LucideIcon;
};

export const servicesNav: NavLink[] = [
  {
    href: "/services",
    label: "All Services",
    description: "Complete service catalog with 13 offerings"
  },
  {
    href: "/services/incident-response",
    label: "Incident Response",
    description: "24/7 breach containment and management"
  },
  {
    href: "/services/digital-forensics",
    label: "Digital Forensics",
    description: "Court-admissible evidence and investigations"
  },
  {
    href: "/services/threat-intelligence",
    label: "Threat Intelligence",
    description: "OSINT and dark web monitoring"
  },
  {
    href: "/services/grc",
    label: "GRC",
    description: "Governance, risk and compliance programs"
  },
  {
    href: "/services/assessments",
    label: "Penetration Testing",
    description: "Security assessments and vulnerability testing"
  }
];

export const industriesNav: NavLink[] = [
  { href: "/industries/financial-services", label: "Financial Services", description: "Banks, fintechs, insurers" },
  { href: "/industries/telecom", label: "Telecom", description: "Carriers and mobile operators" },
  { href: "/industries/mining-energy", label: "Mining & Energy", description: "Industrial and utilities" },
  { href: "/industries/public-sector", label: "Public Sector", description: "Government and agencies" },
  { href: "/industries/education", label: "Education", description: "Universities and schools" }
];

export const insightsNav: NavLink[] = [
  { href: "/insights/news", label: "News", description: "Company and industry updates" },
  { href: "/insights/reports", label: "Reports", description: "Research and deep dives" },
  { href: "/insights/case-studies", label: "Case Studies", description: "Real-world outcomes" },
  { href: "/insights/threat-briefs", label: "Threat Briefs", description: "IOCs and emerging threats" }
];

export const topLinks: NavLink[] = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/insights", label: "Insights" },
  { href: "/academy", label: "Academy" },
  { href: "/company", label: "Company" },
  { href: "/careers", label: "Careers" },
  { href: "/trust", label: "Trust" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
  { href: "/security-policy", label: "Security Policy" },
  { href: "/data-protection-agreement", label: "Data Protection Agreement" },
  { href: "/responsible-disclosure", label: "Responsible Disclosure" },
  { href: "/contact", label: "Contact" }
];

export const searchableNav: NavLink[] = [
  ...topLinks,
  ...servicesNav,
  ...industriesNav,
  ...insightsNav
];
