import { Metadata } from "next";
import Link from "next/link";
import { ImageHero } from "@/components/ImageHero";
import { 
  Building2,
  Clock,
  TrendingUp,
  CheckCircle,
  Shield,
  DollarSign,
  Users,
  AlertTriangle,
  Target
} from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies | NexNet CyberLabs",
  description: "Real-world cybersecurity success stories from NexNet CyberLabs engagements across Africa. See how we helped organizations prevent breaches, respond to incidents, and improve security posture.",
};

// Detailed case studies with metrics
const caseStudies = [
  {
    id: "commercial-bank-ransomware-response",
    title: "Commercial Bank Ransomware Recovery: Zero Downtime, $2.3M Ransom Avoided",
    client: "Major Commercial Bank, Zimbabwe",
    sector: "Financial Services",
    challenge: "LockBit 3.0 ransomware encrypted critical banking systems including core banking platform, ATM network, and customer database. Attackers demanded $2.3M ransom with 48-hour deadline.",
    solution: "Deployed incident response team within 2 hours. Isolated infected systems, activated air-gapped backups, rebuilt infrastructure with enhanced segmentation, and restored operations in 72 hours.",
    metrics: [
      { label: "Response Time", value: "2 hours", icon: Clock },
      { label: "Recovery Time", value: "72 hours", icon: TrendingUp },
      { label: "Ransom Avoided", value: "$2.3M", icon: DollarSign },
      { label: "Accounts Protected", value: "450,000", icon: Users }
    ],
    results: [
      "Full operational recovery without paying ransom",
      "Zero data loss from air-gapped backups",
      "Implemented network segmentation preventing lateral movement",
      "Deployed EDR across all endpoints within 1 week",
      "Conducted post-incident security training for all staff"
    ],
    services: ["Digital Forensics & Incident Response", "Security Assessments"],
    featured: true,
    publishDate: "2025-08-15"
  },
  {
    id: "telecom-ddos-mitigation",
    title: "Telecommunications Provider: 627 Gbps DDoS Attack Mitigation",
    client: "Regional Mobile Network Operator, Southern Africa",
    sector: "Telecommunications",
    challenge: "Sustained volumetric DDoS attack targeting customer-facing services (mobile app, USSD, web portal) causing service outages affecting 8.5M subscribers. Peak attack volume reached 627 Gbps.",
    solution: "Activated DDoS mitigation infrastructure with anycast routing, deployed rate limiting at edge, implemented behavioral analysis to distinguish legitimate traffic, coordinated with upstream ISPs.",
    metrics: [
      { label: "Peak Attack Volume", value: "627 Gbps", icon: AlertTriangle },
      { label: "Subscribers Protected", value: "8.5M", icon: Users },
      { label: "Attack Mitigation Rate", value: "98%", icon: Shield },
      { label: "Service Uptime", value: "99.97%", icon: TrendingUp }
    ],
    results: [
      "98% of malicious traffic blocked automatically",
      "Service availability maintained above 99.97%",
      "Prevented estimated $1.8M in revenue loss",
      "Implemented always-on DDoS protection",
      "Created incident response playbook for future attacks"
    ],
    services: ["Threat Intelligence", "Security Operations"],
    featured: true,
    publishDate: "2025-07-22"
  },
  {
    id: "mining-company-ot-security",
    title: "Gold Mining Operation: Critical Infrastructure Protection & IEC 62443 Compliance",
    client: "Large-Scale Gold Mining Company, Zimbabwe",
    sector: "Mining & Energy",
    challenge: "Legacy SCADA systems controlling underground ventilation, water pumping, and ore processing had 78 critical vulnerabilities. No network segmentation between IT and OT. Regulatory requirement for IEC 62443 SL-2 compliance.",
    solution: "Conducted comprehensive OT security assessment, implemented industrial firewalls for IT/OT segmentation, patched/upgraded SCADA systems, deployed passive monitoring for OT networks, achieved IEC 62443 SL-2 certification.",
    metrics: [
      { label: "Vulnerabilities Fixed", value: "78", icon: CheckCircle },
      { label: "Compliance Level", value: "SL-2", icon: Shield },
      { label: "Losses Prevented", value: "$12M", icon: DollarSign },
      { label: "Systems Protected", value: "240+", icon: Target }
    ],
    results: [
      "Achieved IEC 62443 Security Level 2 certification",
      "Prevented potential $12M in production losses from attacks",
      "Zero OT security incidents in 18 months post-implementation",
      "Network segmentation reduced attack surface by 87%",
      "Trained 45 operations staff on OT security best practices"
    ],
    services: ["Security Assessments", "Governance, Risk & Compliance"],
    featured: true,
    publishDate: "2025-06-10"
  },
  {
    id: "fintech-pci-dss-certification",
    title: "FinTech Startup: PCI DSS 3.2.1 Certification in 85 Days",
    client: "Mobile Payments Platform, Kenya",
    sector: "Financial Services",
    challenge: "Fast-growing fintech startup processing 2.5M transactions monthly needed PCI DSS Level 1 certification to partner with major card networks. Failed initial assessment with 127 findings across 12 requirements.",
    solution: "Provided gap analysis, remediation roadmap, and hands-on implementation support. Redesigned cardholder data environment, implemented tokenization, enhanced access controls, deployed SIEM, conducted penetration testing.",
    metrics: [
      { label: "Time to Compliance", value: "85 days", icon: Clock },
      { label: "Findings Remediated", value: "127", icon: CheckCircle },
      { label: "Processing Fee Reduction", value: "35%", icon: DollarSign },
      { label: "Annual Savings", value: "$180K", icon: TrendingUp }
    ],
    results: [
      "Achieved PCI DSS Level 1 certification on first re-audit",
      "35% reduction in card processing fees (estimated $180K annual savings)",
      "Implemented tokenization reducing PCI scope by 60%",
      "Deployed 24/7 log monitoring and alerting",
      "Established ongoing compliance program with quarterly reviews"
    ],
    services: ["Governance, Risk & Compliance", "Security Assessments"],
    featured: false,
    publishDate: "2025-05-18"
  },
  {
    id: "university-ransomware-prevention",
    title: "Public University: Ransomware Prevention Through Security Transformation",
    client: "Public University, Zimbabwe",
    sector: "Education",
    challenge: "University with 18,000 students had outdated security controls, no endpoint protection, weak access management, and frequent phishing incidents. High risk of ransomware attack targeting research data and student records.",
    solution: "Comprehensive security transformation including EDR deployment, MFA implementation, security awareness training, vulnerability management program, and 24/7 SOC monitoring.",
    metrics: [
      { label: "Ransomware Incidents", value: "0", icon: Shield },
      { label: "Security Improvement", value: "87%", icon: TrendingUp },
      { label: "Vulnerabilities Fixed", value: "142", icon: CheckCircle },
      { label: "Phishing Rate", value: "6%", icon: Users }
    ],
    results: [
      "Zero ransomware incidents over 24 months (vs. 3 near-misses previously)",
      "Security posture improved from 23% to 91% (Cybersecurity Maturity Model)",
      "Phishing click rate reduced from 28% to 6% through training",
      "142 high/critical vulnerabilities remediated",
      "Protected research data worth estimated $4.5M"
    ],
    services: ["Security Assessments", "Security Awareness Training", "Security Operations"],
    featured: false,
    publishDate: "2025-04-25"
  },
  {
    id: "government-agency-apt-detection",
    title: "Government Agency: Advanced Persistent Threat Detection & Remediation",
    client: "Government Ministry, Southern Africa",
    sector: "Public Sector",
    challenge: "Suspected nation-state APT compromise of government network. Indicators of data exfiltration to foreign IP addresses. Need for covert investigation without alerting attackers.",
    solution: "Deployed forensic collection across 850 endpoints, conducted memory analysis, identified custom malware variants, traced command & control infrastructure, coordinated remediation with law enforcement.",
    metrics: [
      { label: "Endpoints Analyzed", value: "850", icon: Target },
      { label: "Malware Variants Found", value: "7", icon: AlertTriangle },
      { label: "Dwell Time Identified", value: "8 months", icon: Clock },
      { label: "Data Recovered", value: "98%", icon: CheckCircle }
    ],
    results: [
      "Identified APT41 (Chinese nation-state group) as threat actor",
      "Discovered 7 custom malware variants with C2 channels",
      "Determined 8-month dwell time with access to classified systems",
      "Successfully eradicated threat actors with coordinated remediation",
      "Implemented advanced threat detection preventing reinfection"
    ],
    services: ["Digital Forensics & Incident Response", "Threat Intelligence"],
    featured: false,
    publishDate: "2025-03-12"
  },
  {
    id: "retail-chain-security-program",
    title: "Retail Chain: Enterprise Security Program from Ground Up",
    client: "Multi-National Retail Chain, Southern Africa",
    sector: "Retail",
    challenge: "Retail chain with 180 locations across 4 countries had no formal security program, suffered POS malware incident, and faced compliance requirements for international expansion.",
    solution: "Built comprehensive security program including governance framework, risk assessments, policy development, security architecture design, vendor risk management, and incident response capability.",
    metrics: [
      { label: "Locations Secured", value: "180", icon: Building2 },
      { label: "Countries Covered", value: "4", icon: Target },
      { label: "Fraud Reduction", value: "76%", icon: DollarSign },
      { label: "Program Maturity", value: "L3", icon: TrendingUp }
    ],
    results: [
      "Established security governance program (ISO 27001 framework)",
      "Deployed payment card encryption across all 180 POS locations",
      "76% reduction in payment fraud incidents",
      "Achieved Capability Maturity Level 3 (from Level 1)",
      "Enabled international expansion into EU markets with GDPR compliance"
    ],
    services: ["Governance, Risk & Compliance", "Security Assessments"],
    featured: false,
    publishDate: "2025-02-08"
  }
];

const sectors = ["All Sectors", "Financial Services", "Telecommunications", "Mining & Energy", "Education", "Public Sector", "Retail"];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <ImageHero
        bgSrc="/images/globe-network.svg"
        title="Client Success Stories"
        subtitle="Real-world case studies showcasing how NexNet CyberLabs helped organizations across Africa prevent breaches, respond to incidents, achieve compliance, and transform their security posture."
        ctaPrimary={{ text: "Discuss Your Challenge", href: "/contact" }}
        ctaSecondary={{ text: "View Services", href: "/services" }}
      />

      {/* Stats Overview */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Successful engagements
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-600 mb-1">$45M+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Losses prevented for clients
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-600 mb-1">4.2 hrs</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Average incident response time
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Client satisfaction rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Filter */}
      <section className="py-8 bg-white dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold">Filter by Sector</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {sectors.map((sector) => (
                <button
                  key={sector}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    sector === "All Sectors"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {sector}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">Featured Case Studies</h2>
            </div>

            <div className="space-y-12">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className={`bg-gradient-to-br ${
                    study.featured
                      ? "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800"
                      : "from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border-gray-200 dark:border-gray-700"
                  } p-8 rounded-xl border-2`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold">
                      {study.sector}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {study.client}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-6">{study.title}</h3>

                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                      <h4 className="font-bold mb-3 text-blue-600 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        Challenge
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3 text-green-600 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Solution
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {study.solution}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3 text-purple-600 flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        Services Used
                      </h4>
                      <ul className="space-y-1">
                        {study.services.map((service, idx) => (
                          <li key={idx} className="text-sm text-gray-700 dark:text-gray-300">
                            • {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-white/50 dark:bg-gray-900/50 rounded-lg">
                    {study.metrics.map((metric, idx) => {
                      const IconComponent = metric.icon;
                      return (
                        <div key={idx} className="text-center">
                          <IconComponent className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-blue-600 mb-1">
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {metric.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      Results & Impact
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-16 h-16 text-brand-teal mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Security Posture?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss your cybersecurity challenges and explore how we can help protect your organization.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-brand-teal text-black font-semibold rounded-lg hover:bg-teal-400 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

