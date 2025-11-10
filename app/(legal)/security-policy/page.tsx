import { Metadata } from "next";
import { ImageHero } from "@/components/ImageHero";
import { Shield, Lock, Eye, Server, Users, FileCheck, RefreshCcw, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Security Policy | NexNet CyberLabs",
  description: "Technical security controls, infrastructure security, access management, and operational security measures protecting NexNet CyberLabs services.",
};

const securityDomains = [
  {
    title: "Infrastructure Security",
    icon: Server,
    controls: [
      "Multi-region deployment (Africa, EU) with geographic redundancy",
      "Network segmentation (DMZ, production, OT, corporate zones)",
      "Industrial firewalls with application-layer inspection",
      "DDoS mitigation (anycast routing, rate limiting, CDN)",
      "Zero Trust architecture with micro-segmentation (Phase 2 in progress)",
    ],
  },
  {
    title: "Access Control",
    icon: Lock,
    controls: [
      "Multi-factor authentication (MFA) mandatory for all access",
      "Role-based access control (RBAC) with least privilege",
      "Privileged Access Management (PAM) for administrative accounts",
      "Just-in-time access for sensitive operations",
      "Quarterly access reviews and automated deprovisioning",
    ],
  },
  {
    title: "Data Protection",
    icon: Shield,
    controls: [
      "Encryption at rest: AES-256 for all data stores",
      "Encryption in transit: TLS 1.3 (TLS 1.2 minimum)",
      "Tokenization for payment card data (PCI DSS scope reduction)",
      "Data classification and handling procedures",
      "Air-gapped backups with 3-2-1 backup strategy",
    ],
  },
  {
    title: "Vulnerability Management",
    icon: AlertTriangle,
    controls: [
      "Weekly vulnerability scans (internal + external)",
      "Critical patches within 7 days, high within 14 days",
      "Quarterly penetration testing by independent firms",
      "Bug bounty and responsible disclosure program",
      "Continuous dependency scanning for applications",
    ],
  },
  {
    title: "Logging & Monitoring",
    icon: Eye,
    controls: [
      "Centralized SIEM with 24/7 SOC monitoring",
      "12-month log retention (critical systems: 24 months)",
      "Real-time alerting for security events (MITRE ATT&CK mapped)",
      "User behavior analytics (UEBA) for anomaly detection",
      "Quarterly log review and tuning exercises",
    ],
  },
  {
    title: "Personnel Security",
    icon: Users,
    controls: [
      "Background checks for all staff (criminal, credit, references)",
      "Annual security awareness training (100% completion rate)",
      "Quarterly phishing simulations (current click rate: 6%)",
      "Confidentiality agreements and code of conduct",
      "Secure offboarding with exit interviews and access revocation",
    ],
  },
];

const incidentResponse = [
  { phase: "Detection", sla: "Real-time to 30 mins", description: "SIEM alerting, UEBA anomalies, threat intel feeds" },
  { phase: "Triage", sla: "< 2 hours", description: "Severity classification, stakeholder notification, evidence preservation" },
  { phase: "Containment", sla: "< 4 hours (critical)", description: "Isolation, network segmentation, access revocation" },
  { phase: "Eradication", sla: "< 24 hours", description: "Malware removal, vulnerability patching, IOC blocking" },
  { phase: "Recovery", sla: "< 72 hours", description: "Service restoration, validation testing, monitoring" },
  { phase: "Lessons Learned", sla: "Within 14 days", description: "After-action report, control improvements, training updates" },
];

const compliance = [
  { framework: "ISO 27001:2022", status: "Certified", scope: "ISMS covering all operations", renewal: "2026-03-17" },
  { framework: "SOC 2 Type II", status: "In Progress", scope: "MDR Platform", renewal: "Report expected Q1 2026" },
  { framework: "GDPR & POPIA", status: "Compliant", scope: "Data processing operations", renewal: "Continuous" },
  { framework: "PCI DSS (Partner)", status: "Aligned", scope: "Advisory services only", renewal: "2025-11-11" },
];

export default function SecurityPolicyPage() {
  return (
    <div className="min-h-screen">
      <ImageHero
        bgSrc="/images/globe-network.svg"
        title="Security Policy & Technical Controls"
        subtitle="Comprehensive technical and organizational measures protecting our infrastructure, data, and services. ISO 27001-certified with continuous monitoring."
        ctaPrimary={{ text: "Request Evidence Pack", href: "/contact" }}
        ctaSecondary={{ text: "Responsible Disclosure", href: "/legal/responsible-disclosure" }}
      />

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-center">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">ISO 27001</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Certified ISMS</p>
            </div>
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-center">
              <Eye className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">SOC Monitoring</p>
            </div>
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-center">
              <RefreshCcw className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Patch Compliance</p>
            </div>
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-center">
              <AlertTriangle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">0</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Major Breaches (3 yrs)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12">Security Control Domains</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {securityDomains.map((domain, i) => {
              const IconComponent = domain.icon;
              return (
                <div key={i} className="p-8 rounded-xl border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                  <div className="flex items-center gap-3 mb-6">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                    <h3 className="text-2xl font-bold">{domain.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {domain.controls.map((control, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{control}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <h2 className="text-3xl font-bold mb-8">Incident Response Process</h2>
          <div className="space-y-4 mb-20">
            {incidentResponse.map((phase, i) => (
              <div key={i} className="p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{phase.phase}</h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{phase.description}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 text-sm font-semibold whitespace-nowrap">
                    {phase.sla}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8">Compliance & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {compliance.map((item, i) => (
              <div key={i} className="p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-semibold">{item.framework}</h3>
                  <span className={`px-2 py-1 text-xs rounded font-semibold ${
                    item.status === 'Certified' || item.status === 'Compliant' 
                      ? 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200'
                      : item.status === 'In Progress'
                      ? 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200'
                      : 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{item.scope}</p>
                <p className="text-xs text-gray-500">{item.renewal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-blue-900 to-gray-900">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <FileCheck className="w-16 h-16 text-brand-teal mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Security Questionnaire or Evidence Request?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We provide security documentation for vendor due diligence including control matrices, penetration test summaries, and certification evidence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="px-8 py-3 bg-brand-teal text-black font-semibold rounded-lg hover:bg-teal-400 transition-colors">
              Request Evidence Pack
            </a>
            <a href="/trust/certifications" className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              View Certifications
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
