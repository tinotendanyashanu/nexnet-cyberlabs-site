import { Metadata } from "next";
import { ImageHero } from "@/components/ImageHero";
import { FileText, ShieldCheck, Scale, Lock, Globe, Users, AlertCircle, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Data Protection Agreement (DPA) | NexNet CyberLabs",
  description: "GDPR & POPIA-compliant Data Processing Agreement template for clients engaging NexNet CyberLabs as a data processor.",
};

const dpaHighlights = [
  { title: "Controller-Processor Relationship", desc: "Client remains data controller; NexNet acts as processor under explicit instructions.", icon: Users },
  { title: "Processing Scope", desc: "Limited to incident data, forensic artifacts, training records as specified in SOW.", icon: FileText },
  { title: "Security Measures", desc: "ISO 27001-aligned controls, encryption at rest/transit, access controls, audit logs.", icon: ShieldCheck },
  { title: "Subprocessors", desc: "Pre-approved list with 30-day change notification; client objection rights.", icon: Globe },
  { title: "Data Subject Rights", desc: "Assistance with DSAR requests, deletion, rectification within 14 days.", icon: Scale },
  { title: "Breach Notification", desc: "Notification to controller within 24 hours of confirmed data breach.", icon: AlertCircle },
];

const dataCategories = [
  { category: "Incident Response Data", examples: ["System logs", "Network captures", "Memory dumps", "Malware samples"], retention: "24 months post-engagement" },
  { category: "Forensic Evidence", examples: ["Disk images", "Timeline artifacts", "Chain of custody records"], retention: "36 months (legal hold precedence)" },
  { category: "Training Records", examples: ["Participant names", "Assessment scores", "Certification status"], retention: "7 years (accreditation requirements)" },
  { category: "Contact & Billing", examples: ["Email addresses", "Phone numbers", "Invoicing details"], retention: "7 years (tax compliance)" },
];

const securityCommitments = [
  "Encryption at rest (AES-256) and in transit (TLS 1.3)",
  "Role-based access control with least privilege principle",
  "Multi-factor authentication for privileged access",
  "Annual penetration testing and vulnerability scanning",
  "Security awareness training for all personnel (annual)",
  "ISO 27001-certified ISMS with continuous monitoring",
];

export default function DataProtectionAgreementPage() {
  return (
    <div className="min-h-screen">
      <ImageHero
        bgSrc="/images/globe-network.svg"
        title="Data Protection Agreement (DPA)"
        subtitle="GDPR & POPIA-compliant Data Processing Agreement establishing controller-processor relationship, security commitments, and data subject rights."
        ctaPrimary={{ text: "Download DPA Template", href: "#download" }}
        ctaSecondary={{ text: "Request Custom DPA", href: "/contact" }}
      />

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-center">
              <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">GDPR</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Art. 28 Compliant</p>
            </div>
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-center">
              <Scale className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">POPIA</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Sec. 21 Aligned</p>
            </div>
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-center">
              <ShieldCheck className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">ISO 27001</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">A.5.19 Controls</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">DPA Key Provisions</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {dpaHighlights.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div key={i} className="p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800">
                  <div className="flex items-start gap-4">
                    <IconComponent className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <h2 className="text-3xl font-bold mb-8">Data Categories & Retention</h2>
          <div className="space-y-6 mb-12">
            {dataCategories.map((cat, i) => (
              <div key={i} className="p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                <div className="flex items-start justify-between gap-6 mb-3">
                  <h3 className="text-xl font-semibold">{cat.category}</h3>
                  <span className="px-3 py-1 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 text-xs font-semibold whitespace-nowrap">
                    {cat.retention}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Examples:</p>
                <div className="flex flex-wrap gap-2">
                  {cat.examples.map((ex, idx) => (
                    <span key={idx} className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8">Technical & Organizational Measures</h2>
          <div className="p-8 rounded-xl border-2 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 mb-12">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              NexNet CyberLabs implements the following security measures as processor:
            </p>
            <ul className="grid md:grid-cols-2 gap-3">
              {securityCommitments.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-3xl font-bold mb-8">International Data Transfers</h2>
          <div className="p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 mb-12">
            <div className="flex items-start gap-4 mb-4">
              <Globe className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Standard Contractual Clauses (SCCs)</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  Data transfers between our Harare (Zimbabwe) and Warsaw (Poland/EU) facilities are governed by EU Standard Contractual Clauses (Module 2: Controller to Processor) with supplementary measures:
                </p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                    <span>Encryption in transit (TLS 1.3) and at rest (AES-256)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                    <span>Access controls limiting data access to authorized personnel only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                    <span>Contractual commitments with hosting providers (ISO 27001, SOC 2)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                    <span>Regular Transfer Impact Assessments (TIA) per Schrems II requirements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div id="download" className="p-8 rounded-xl border-2 border-blue-300 dark:border-blue-700 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 text-center">
            <Download className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Download DPA Template</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Standard DPA template for client engagements. For customized terms or questions, contact our legal team.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download DPA (PDF)
              </button>
              <a href="/contact" className="px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                Request Custom DPA
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-blue-900 to-gray-900">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Scale className="w-16 h-16 text-brand-teal mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Questions About Data Processing?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our Data Protection Officer for clarifications, DPA negotiations, or data subject rights assistance.
          </p>
          <a href="mailto:dpo@nexnet.example" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-teal text-black font-semibold rounded-lg hover:bg-teal-400 transition-colors">
            Contact DPO
          </a>
        </div>
      </section>
    </div>
  );
}
