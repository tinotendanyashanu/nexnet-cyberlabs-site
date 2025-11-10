import { Metadata } from "next";
import { ImageHero } from "@/components/ImageHero";
import { CalendarDays, Rocket, ShieldCheck, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Security Roadmap & Transparency | NexNet CyberLabs",
  description: "Our forward-looking security and compliance roadmap, transparency reports, and commitments to continual improvement.",
};

const milestones = [
  {
    date: "2025-12",
    title: "SOC 2 Type II Report Publication",
    description: "Complete 12-month observation window and publish independent attestation report for MDR platform.",
    status: "Planned",
    impact: ["Assurance for enterprise buyers", "Improved vendor onboarding speed"],
  },
  {
    date: "2026-Q1",
    title: "Zero Trust Network Segmentation (Phase 2)",
    description: "Extend micro-segmentation to lab networks and administrative zones; enforce just-in-time access across privileged workflows.",
    status: "Planned",
    impact: ["Reduced blast radius", "Improved auditability"],
  },
  {
    date: "2026-Q2",
    title: "Customer Trust Portal (Beta)",
    description: "Self-service evidence packs, policy extracts, security questionnaires, uptime & vulnerability metrics.",
    status: "Planned",
    impact: ["Faster due diligence", "Greater transparency"],
  },
  {
    date: "2026-Q3",
    title: "Purple Team Program Expansion",
    description: "Continuous attack simulation and detection engineering pipeline across SOC and DFIR functions.",
    status: "Planned",
    impact: ["Improved detection quality", "Mean Time to Detect ↓"],
  }
];

const transparency = [
  { label: "Mean Time to Detect (MTTD)", value: "38 mins" },
  { label: "Mean Time to Respond (MTTR)", value: "4.2 hrs" },
  { label: "Patch Compliance (<14 days)", value: "98%" },
  { label: "Critical Findings (Q3 2025)", value: "0" },
  { label: "Security Training Completion", value: "100%" },
];

export default function RoadmapPage() {
  return (
    <div className="min-h-screen">
      <ImageHero
        bgSrc="/images/globe-network.svg"
        title="Security Roadmap & Transparency"
        subtitle="Clear commitments, measurable outcomes, and open communication about how we evolve our security posture."
        ctaPrimary={{ text: "Request Briefing", href: "/contact" }}
        ctaSecondary={{ text: "View Certifications", href: "/trust/certifications" }}
      />

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-5 gap-6">
            {transparency.map((t, i) => (
              <div key={i} className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-center">
                <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600 mb-1">{t.value}</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <Rocket className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold">Upcoming Milestones</h2>
          </div>
          <div className="space-y-6">
            {milestones.map(m => (
              <div key={m.title} className="rounded-xl border-2 border-blue-200 dark:border-blue-800 p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CalendarDays className="w-4 h-4" />
                      <span>{m.date}</span>
                      <span className="px-2 py-0.5 text-xs rounded bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200">{m.status}</span>
                    </div>
                    <h3 className="text-xl font-semibold mt-2">{m.title}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 max-w-3xl">{m.description}</p>
                  </div>
                  <ShieldCheck className="w-6 h-6 text-blue-600 flex-shrink-0" />
                </div>
                <ul className="mt-3 flex flex-wrap gap-2 text-xs">
                  {m.impact.map((i, idx) => (
                    <li key={idx} className="px-2 py-1 rounded bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200">{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-blue-900 to-gray-900 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Stakeholder Briefings & Trust Reports</h2>
          <p className="text-lg text-gray-300 mb-8">Quarterly updates including vulnerability metrics, incident learnings, audit status, and roadmap progress for customers and partners.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="px-8 py-3 rounded-lg bg-brand-teal text-black font-semibold hover:bg-teal-400 transition-colors">Request Stakeholder Briefing</a>
            <a href="/trust/certifications" className="px-8 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors">View Certifications</a>
          </div>
        </div>
      </section>
    </div>
  );
}
