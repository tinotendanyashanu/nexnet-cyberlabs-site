import { Metadata } from "next";
import { ImageHero } from "@/components/ImageHero";
import { Shield, Eye, Lock, Globe, UserCheck, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | NexNet CyberLabs",
  description: "How NexNet CyberLabs processes personal data under GDPR, POPIA, and Zimbabwe Cyber and Data Protection Act with transparency and data subject rights."
};

const dataCategories = [
  { category: "Contact & Account Data", examples: ["Name, email, phone, company, job title"], purpose: "Service delivery, account management, support" },
  { category: "Incident Response Data", examples: ["System logs, network captures, malware samples"], purpose: "Forensic investigation, threat analysis" },
  { category: "Training & Academy Data", examples: ["Assessment scores, certification status, attendance"], purpose: "Educational services, accreditation" },
  { category: "Marketing Data", examples: ["Newsletter subscriptions, event registrations, preferences"], purpose: "Communications (consent-based)" },
  { category: "Technical Telemetry", examples: ["IP addresses, user agents, session identifiers"], purpose: "Security, fraud prevention, service optimization" },
];

const legalBases = [
  { basis: "Contractual Necessity", description: "Processing required to deliver cybersecurity services, training, or consulting as agreed in contracts." },
  { basis: "Legitimate Interest", description: "Service improvement, fraud prevention, system security, and threat intelligence (balanced against your rights)." },
  { basis: "Consent", description: "Marketing communications, newsletter, event invitations (withdrawable at any time via unsubscribe links)." },
  { basis: "Legal Obligation", description: "Regulatory reporting (breach notifications), tax compliance, lawful law enforcement requests." },
];

const rights = [
  { right: "Access", description: "Request a copy of your personal data we hold." },
  { right: "Rectification", description: "Correct inaccurate or incomplete data." },
  { right: "Erasure (Right to be Forgotten)", description: "Delete your data when no longer needed or consent withdrawn." },
  { right: "Restriction", description: "Limit processing while we verify accuracy or assess lawfulness." },
  { right: "Objection", description: "Object to processing based on legitimate interest or direct marketing." },
  { right: "Portability", description: "Receive your data in structured, machine-readable format." },
  { right: "Withdraw Consent", description: "Revoke consent for marketing or optional processing at any time." },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <ImageHero
        bgSrc="/images/globe-network.svg"
        title="Privacy Policy"
        subtitle="Transparent data processing practices aligned with GDPR, POPIA, and Zimbabwe Cyber and Data Protection Act. Your rights, our commitments."
        ctaPrimary={{ text: "Contact DPO", href: "mailto:dpo@nexnet.example" }}
        ctaSecondary={{ text: "Data Protection Agreement", href: "/legal/data-protection-agreement" }}
      />

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-center">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-sm font-bold text-blue-600 mb-1">GDPR</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">EU Regulation</p>
            </div>
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-center">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-sm font-bold text-blue-600 mb-1">POPIA</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">South Africa</p>
            </div>
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-center">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-sm font-bold text-blue-600 mb-1">Zimbabwe</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Cyber & Data Protection Act</p>
            </div>
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-center">
              <UserCheck className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-sm font-bold text-blue-600 mb-1">30 Days</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">DSAR Response Time</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl prose prose-slate dark:prose-invert">
          <p className="text-sm text-gray-600 dark:text-gray-400">Last updated: 09 November 2025</p>
          
          <h2 className="flex items-center gap-3 mt-12"><Eye className="w-6 h-6 text-blue-600" /> What We Collect</h2>
          <div className="not-prose space-y-4">
            {dataCategories.map((cat, i) => (
              <div key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <h3 className="font-semibold mb-1">{cat.category}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1"><strong>Examples:</strong> {cat.examples}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Purpose:</strong> {cat.purpose}</p>
              </div>
            ))}
          </div>

          <h2 className="flex items-center gap-3 mt-12"><Lock className="w-6 h-6 text-blue-600" /> Legal Bases for Processing</h2>
          <div className="not-prose space-y-4">
            {legalBases.map((lb, i) => (
              <div key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <h3 className="font-semibold mb-1">{lb.basis}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{lb.description}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-12">Retention Periods</h2>
          <ul>
            <li><strong>Incident Response Data:</strong> 24 months post-engagement (legal hold precedence applies)</li>
            <li><strong>Forensic Evidence:</strong> 36 months (regulatory and litigation requirements)</li>
            <li><strong>Training Records:</strong> 7 years (accreditation body requirements)</li>
            <li><strong>Marketing Consents:</strong> Until withdrawal or 24 months of inactivity</li>
            <li><strong>Billing Records:</strong> 7 years (tax compliance)</li>
          </ul>

          <h2 className="flex items-center gap-3 mt-12"><Globe className="w-6 h-6 text-blue-600" /> International Data Transfers</h2>
          <p>
            Data may be transferred between our Harare (Zimbabwe) and Warsaw (Poland/EU) facilities. We implement:
          </p>
          <ul>
            <li><strong>Standard Contractual Clauses (SCCs):</strong> EU-approved Module 2 (Controller to Processor)</li>
            <li><strong>Encryption:</strong> TLS 1.3 in transit, AES-256 at rest</li>
            <li><strong>Access Controls:</strong> Role-based with geo-restrictions where feasible</li>
            <li><strong>Transfer Impact Assessments:</strong> Quarterly reviews per Schrems II guidance</li>
          </ul>

          <h2 className="flex items-center gap-3 mt-12"><UserCheck className="w-6 h-6 text-blue-600" /> Your Data Subject Rights</h2>
          <div className="not-prose space-y-3">
            {rights.map((r, i) => (
              <div key={i} className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <h3 className="font-semibold text-sm mb-1">{r.right}</h3>
                <p className="text-xs text-gray-700 dark:text-gray-300">{r.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-4">
            <strong>To exercise your rights:</strong> Email <a href="mailto:privacy@nexnet.example" className="text-blue-600 underline">privacy@nexnet.example</a> with your request. We respond within 30 days (extendable to 60 days for complex requests with notification).
          </p>

          <h2 className="mt-12">Automated Decision-Making</h2>
          <p>
            We do not use automated decision-making or profiling that produces legal or similarly significant effects. Threat intelligence scoring uses human review for all client-facing decisions.
          </p>

          <h2 className="mt-12">Cookies & Tracking</h2>
          <p>
            See our <a href="/cookies" className="text-blue-600 underline">Cookie Policy</a> for details on essential, analytics, and preference cookies. We use privacy-first analytics (Matomo) with IP anonymization.
          </p>

          <h2 className="mt-12">Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to individuals under 18. We do not knowingly collect data from minors. If you believe we have inadvertently collected such data, contact us for deletion.
          </p>

          <h2 className="mt-12">Changes to This Policy</h2>
          <p>
            We may update this policy to reflect legal, operational, or service changes. Material changes will be communicated via email (for registered users) and website notice 30 days prior to effective date.
          </p>

          <h2 className="flex items-center gap-3 mt-12"><Mail className="w-6 h-6 text-blue-600" /> Contact & Complaints</h2>
          <p>
            <strong>Data Protection Officer:</strong> <a href="mailto:dpo@nexnet.example" className="text-blue-600 underline">dpo@nexnet.example</a>
          </p>
          <p>
            <strong>General Privacy Inquiries:</strong> <a href="mailto:privacy@nexnet.example" className="text-blue-600 underline">privacy@nexnet.example</a>
          </p>
          <p className="mt-4">
            You have the right to lodge a complaint with your local supervisory authority:
          </p>
          <ul>
            <li><strong>EU:</strong> <a href="https://edpb.europa.eu/about-edpb/board/members_en" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">EU Data Protection Authorities</a></li>
            <li><strong>South Africa:</strong> Information Regulator (POPIA) - <a href="https://www.justice.gov.za/inforeg/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">inforeg.org.za</a></li>
            <li><strong>Zimbabwe:</strong> Postal and Telecommunications Regulatory Authority of Zimbabwe (POTRAZ)</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

