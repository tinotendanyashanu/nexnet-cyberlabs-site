import { type LucideIcon } from "lucide-react";

export type NavLink = {
  href: string;
  label: string;
  description?: string;
  icon?: LucideIcon;
};

export const servicesNav: NavLink[] = [
  {
    href: "/services/digital-forensics",
    label: "Digital Forensics",
    description: "Evidence collection, analysis, expert reporting"
  },
  {
    href: "/services/threat-intelligence",
    label: "Threat Intelligence",
    description: "Strategic, operational, and tactical intel"
  },
  {
    href: "/services/governance-risk-compliance",
    label: "Governance, Risk & Compliance",
    description: "ISO 27001, SOC 2, GDPR/POPIA guidance"
  },
  {
    href: "/services/security-assessments",
    label: "Security Assessments",
    description: "Penetration testing and security reviews"
  },
  {
    href: "/services/security-awareness-training",
    label: "Security Awareness Training",
    description: "Human risk reduction and culture building"
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
