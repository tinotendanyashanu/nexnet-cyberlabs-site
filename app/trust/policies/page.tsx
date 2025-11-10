import { Metadata } from "next";
import { FileText, ShieldCheck, Workflow, Users, AlertTriangle, RefreshCcw, Lock } from "lucide-react";
import { ImageHero } from "@/components/ImageHero";

type Policy = {
  name: string;
  summary: string;
  mappedFrameworks: string[];
  owner: string;
  reviewCycle: string;
  lastReview: string;
  nextReview: string;
  artifacts: string[];
  criticality: "High" | "Medium" | "Low";
};

const policies: Policy[] = [
  {
    name: "Information Security Policy",
    summary: "Core ISMS governance statement defining roles, risk methodology, control ownership, and continual improvement objectives.",
    mappedFrameworks: ["ISO 27001 A.5-A.10", "NIST CSF ID.GV", "SOC 2 CC1.2", "GDPR Art.32"],
    owner: "CISO",
    reviewCycle: "Annual + Triggered by major change",
    lastReview: "2025-08-12",
    nextReview: "2026-08-11",
    artifacts: ["Risk Register", "Control Catalogue", "Security Objectives Tracker"],
    criticality: "High"
  },
  {
    name: "Incident Response Policy",
    summary: "Defines classification tiers, escalation matrix, communication flows (internal & regulatory), and post-incident learning process.",
    mappedFrameworks: ["ISO 27001 A.5.29", "NIST CSF RS.IM", "SOC 2 CC7.2"],
    owner: "Head of DFIR",
    reviewCycle: "Semi-Annual",
    lastReview: "2025-09-01",
    nextReview: "2026-03-01",
    artifacts: ["IR Playbooks", "After Action Report Template", "Breach Notification SOP"],
    criticality: "High"
  },
  {
    name: "Data Retention & Disposal Policy",
    summary: "Specifies retention schedules for forensic evidence, client data, training records, with secure deletion & legal hold processes.",
    mappedFrameworks: ["ISO 27001 A.5.12", "GDPR Art.5(1)(e)", "POPIA Sec.14", "SOC 2 CC2.1"],
    owner: "Data Protection Officer",
    reviewCycle: "Annual",
    lastReview: "2025-07-19",
    nextReview: "2026-07-18",
    artifacts: ["Retention Schedule Register", "Deletion Attestation Log", "Legal Hold Tracker"],
    criticality: "Medium"
  },
  {
    name: "Supplier & Third-Party Security Policy",
    summary: "Tiered vendor risk model, onboarding security due diligence requirements, continuous monitoring & contract clause standards.",
    mappedFrameworks: ["ISO 27001 A.5.19", "NIST CSF ID.SC", "SOC 2 CC1.3"],
    owner: "Vendor Risk Lead",
    reviewCycle: "Annual",
    lastReview: "2025-06-02",
    nextReview: "2026-06-01",
    artifacts: ["Vendor Risk Register", "Security Questionnaire", "Monitoring SLA"],
    criticality: "Medium"
  },
  {
    name: "Access Control Policy",
    summary: "Role-based access principles, provisioning & deprovisioning workflows, privileged access management, periodic entitlement reviews.",
    mappedFrameworks: ["ISO 27001 A.5.15", "NIST CSF PR.AC", "SOC 2 CC6.1", "GDPR Art.25"],
    owner: "Security Operations Lead",
    reviewCycle: "Annual",
    lastReview: "2025-08-27",
    nextReview: "2026-08-26",
    artifacts: ["Access Review Evidence", "Privileged Access Register", "Joiner/Mover/Leaver Workflow"],
    criticality: "High"
  },
  {
    name: "Vulnerability Management Policy",
    summary: "Scanning cadence, risk-based prioritization SLA, patch verification steps, exception & compensating control documentation.",
    mappedFrameworks: ["ISO 27001 A.5.37", "NIST CSF PR.IP", "SOC 2 CC7.1"],
    owner: "SecOps Engineer",
    reviewCycle: "Annual",
    lastReview: "2025-05-30",
    nextReview: "2026-05-29",
    artifacts: ["Exception Register", "Patch SLA Dashboard", "Scan Result Archive"],
    criticality: "High"
  }
];

export const metadata: Metadata = {
  title: "Security & Governance Policies | NexNet CyberLabs",
  description: "Framework-aligned policy catalog with ownership, review cycles, mapped standards, and supporting artifacts for assurance processes." 
};

export default function PoliciesPage() {
  return (
    <div className="min-h-screen">
      <ImageHero
        title="Governance & Security Policy Catalog"
        subtitle="Framework-mapped policies with clear ownership, review discipline, and operational artifacts supporting due diligence and continuous improvement."
        bgSrc="/images/globe-network.svg"
        ctaPrimary={{ href: "/contact", text: "Request Policy Extracts" }}
        ctaSecondary={{ href: "/trust/certifications", text: "View Certifications" }}
      />

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800">
              <FileText className="w-8 h-8 text-blue-600 mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">6</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Core Policies Published</p>
            </div>
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800">
              <ShieldCheck className="w-8 h-8 text-blue-600 mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">On-Time Reviews (YTD)</p>
            </div>
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800">
              <RefreshCcw className="w-8 h-8 text-blue-600 mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">0</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Overdue Policies</p>
            </div>
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800">
              <Users className="w-8 h-8 text-blue-600 mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">4</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Distinct Owners</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl space-y-10">
          {policies.map(policy => (
            <div key={policy.name} className="rounded-xl border-2 p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border-blue-200 dark:border-blue-700">
              <div className="flex flex-wrap items-start justify-between gap-6 mb-6">
                <div>
                  <h2 className="text-2xl font-bold flex items-center gap-3">
                    <FileText className="w-6 h-6 text-blue-600" />
                    {policy.name}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mt-3 max-w-3xl">{policy.summary}</p>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1 min-w-[220px]">
                  <p className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Criticality: <span className="font-medium">{policy.criticality}</span></p>
                  <p className="flex items-center gap-2"><Workflow className="w-4 h-4" /> Owner: <span className="font-medium">{policy.owner}</span></p>
                  <p className="flex items-center gap-2"><RefreshCcw className="w-4 h-4" /> Cycle: <span className="font-medium">{policy.reviewCycle}</span></p>
                  <p className="flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Last Review: <span className="font-medium">{policy.lastReview}</span></p>
                  <p className="flex items-center gap-2"><Lock className="w-4 h-4" /> Next Review: <span className="font-medium">{policy.nextReview}</span></p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="font-semibold mb-2 text-blue-600">Mapped Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    {policy.mappedFrameworks.map((fw,i) => (
                      <span key={i} className="px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 text-xs font-medium">{fw}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-blue-600">Supporting Artifacts</h3>
                  <ul className="space-y-2 text-sm">
                    {policy.artifacts.map((a,i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">•</span><span className="text-gray-700 dark:text-gray-300">{a}</span></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-blue-600">Assurance Impact</h3>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>Accelerates audit scoping & evidence requests.</li>
                    <li>Clarifies accountability for control operation.</li>
                    <li>Enables measurable continuous improvement metrics.</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold">Request Redacted Copy</button>
                <button className="px-5 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-sm font-semibold">Map to Your Controls</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-blue-900 to-gray-900 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Need Policy Mapping Support?</h2>
          <p className="text-lg text-gray-300 mb-8">We assist regulated clients in aligning governance artifacts with their internal frameworks and regulator expectations.</p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-brand-teal text-black font-semibold hover:bg-teal-400 transition-colors">Start Alignment Conversation</a>
        </div>
      </section>
    </div>
  );
}

