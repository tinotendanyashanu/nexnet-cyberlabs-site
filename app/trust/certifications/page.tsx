import { Metadata } from "next";
import { ShieldCheck, FileCheck, RefreshCcw, Calendar, ExternalLink, Lock, Clock } from "lucide-react";
import { ImageHero } from "@/components/ImageHero";

type Certification = {
  name: string;
  status: string;
  scope: string;
  standardRef: string;
  issued: string;
  renewal: string;
  lastAudit: string;
  auditor: string;
  evidence: string;
  assuranceLevel: string;
  notes: string[];
  inProgress?: boolean;
};

const certifications: Certification[] = [
  {
    name: "ISO 27001:2022",
    status: "Certified",
    scope: "Digital Forensics Lab (Harare), Security Operations Platform (Warsaw), Training Academy",
    standardRef: "ISO/IEC 27001:2022 Annex A Controls",
    issued: "2025-03-18",
    renewal: "2026-03-17",
    lastAudit: "2025-09-04",
    auditor: "QSA Europe",
    evidence: "Statement of Applicability (SoA), Stage 2 Audit Report, Corrective Action Log",
    assuranceLevel: "Third-party certification with annual surveillance & 3-year recertification",
    notes: [
      "Security Objectives met for 2025 (9/9)",
      "Zero major non-conformities in last surveillance audit",
      "Risk register reviewed quarterly with board oversight"
    ]
  },
  {
    name: "SOC 2 Type II",
    status: "Audit Fieldwork",
    scope: "Managed Detection & Response (MDR) Platform & Supporting Infrastructure",
    standardRef: "AICPA TSC (Security, Availability, Confidentiality)",
    issued: "(Report Pending)",
    renewal: "Rolling 12-month period ending 2026-02-28",
    lastAudit: "Fieldwork window: 2025-03-01 → 2026-02-28",
    auditor: "Control Trust LLC",
    evidence: "Control Matrix, System Description (v1.3), Population Samples",
    assuranceLevel: "Independent attestation (Type II coverage)",
    notes: [
      "All 54 scoped controls operating effectively as of interim checkpoint",
      "No exceptions reported in interim penetration test",
      "Formal subservice carve-out list established"
    ],
    inProgress: true
  },
  {
    name: "PCI DSS (via QSA Partner)",
    status: "QSA Partnership",
    scope: "Advisory & Assessment Support for Banking / FinTech Clients",
    standardRef: "PCI DSS v4.0 (Assessor Alignment)",
    issued: "2024-11-12",
    renewal: "2025-11-11",
    lastAudit: "2025-08-22 (Internal Readiness Review)",
    auditor: "Partner QSA: SecurePayments Global",
    evidence: "QSA Partnership Agreement, Attestation of Alignment",
    assuranceLevel: "Programmatic partnership (not merchant scope)",
    notes: [
      "Tokenization reference architecture reduces PCI scope by ~60%",
      "Maintained vulnerability scan cadence (ASV quarterly + internal monthly)",
      "Library of >30 compensating control templates"
    ]
  },
  {
    name: "Cyber Essentials (Plus)",
    status: "Certified",
    scope: "Corporate Network & Endpoints (UK/EU Region)",
    standardRef: "UK Cyber Essentials Plus Technical Controls",
    issued: "2025-05-06",
    renewal: "2026-05-05",
    lastAudit: "2025-05-01 (Independent Assessment)",
    auditor: "IASME Consortium",
    evidence: "Assessment Report, Remediation Closure Letter",
    assuranceLevel: "Annual certification with external validation",
    notes: [
      "Patch compliance >98% within 14-day SLA",
      "Application allow‑listing enforced for privileged endpoints",
      "No critical findings in 2025 penetration validation"
    ]
  }
];

export const metadata: Metadata = {
  title: "Security Certifications & Attestations | NexNet CyberLabs",
  description: "Independent security certifications (ISO 27001, Cyber Essentials), in-progress SOC 2 Type II audit, PCI DSS partnership. Evidence-based assurance of our controls and governance." 
};

export default function CertificationsPage() {
  return (
    <div className="min-h-screen">
      <ImageHero
        title="Independent Assurance & Certifications"
        subtitle="External audits, attestations, and partnerships demonstrating our control effectiveness and commitment to continuous improvement."
        bgSrc="/images/globe-network.svg"
        ctaPrimary={{ href: "/contact", text: "Request Evidence Pack" }}
        ctaSecondary={{ href: "/trust/roadmap", text: "View Roadmap" }}
      />

      {/* Snapshot Stats */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800">
              <ShieldCheck className="w-8 h-8 text-blue-600 mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">4</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Assurance Programs</p>
            </div>
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800">
              <FileCheck className="w-8 h-8 text-blue-600 mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">0</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Major Non‑Conformities (YTD)</p>
            </div>
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800">
              <RefreshCcw className="w-8 h-8 text-blue-600 mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Patch SLA (&lt;14 days)</p>
            </div>
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800">
              <Clock className="w-8 h-8 text-blue-600 mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">4.2h</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Mean Incident Response Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl space-y-12">
          {certifications.map(cert => (
            <div
              key={cert.name}
              className={`rounded-xl border-2 p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 ${cert.inProgress ? 'border-yellow-300 dark:border-yellow-600' : 'border-blue-200 dark:border-blue-700'}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold flex items-center gap-3">
                    {cert.inProgress && (
                      <span className="px-2 py-1 text-xs rounded bg-yellow-200 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-200 font-semibold">In Progress</span>
                    )}
                    {cert.name}
                  </h2>
                  <p className="text-sm mt-2 text-blue-600 dark:text-blue-300 font-medium tracking-wide uppercase">{cert.status}</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-3xl">{cert.assuranceLevel}</p>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1 min-w-[200px]">
                  <p className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Issued / Start: <span className="font-medium">{cert.issued}</span></p>
                  <p className="flex items-center gap-2"><RefreshCcw className="w-4 h-4" /> Renewal: <span className="font-medium">{cert.renewal}</span></p>
                  <p className="flex items-center gap-2"><FileCheck className="w-4 h-4" /> Last Audit: <span className="font-medium">{cert.lastAudit}</span></p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="font-semibold mb-2 text-blue-600">Scope</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{cert.scope}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-blue-600">Standard Reference</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{cert.standardRef}</p>
                  <p className="text-xs text-gray-500 mt-2">Auditor: {cert.auditor}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-blue-600">Evidence Artifacts</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{cert.evidence}</p>
                  <button className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold">
                    <Lock className="w-4 h-4" /> Request Access
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2 text-green-600"><ShieldCheck className="w-4 h-4" /> Highlights</h4>
                  <ul className="space-y-2 text-sm">
                    {cert.notes.map((n, i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">•</span><span className="text-gray-700 dark:text-gray-300">{n}</span></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2 text-purple-600"><ExternalLink className="w-4 h-4" /> Customer Value</h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>Mapped controls accelerate vendor due diligence questionnaires.</li>
                    <li>Provides assurance baseline for regulated sector engagements.</li>
                    <li>Supports shared responsibility discussions in managed services.</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-gray-900 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Need an Evidence Package?</h2>
            <p className="text-lg text-gray-300 mb-8">We provide NDAs, SoA extracts, penetration summaries, vulnerability management metrics, and control matrices for qualified prospects.</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-brand-teal text-black font-semibold hover:bg-teal-400 transition-colors">
              Request Evidence Pack
            </a>
        </div>
      </section>
    </div>
  );
}

