import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Protection - NexNet CyberLabs",
  description: "GDPR and POPIA-aligned data protection practices."
};

const sections = [
  { title: "Lawful Basis", body: "We process data on contractual necessity, legitimate interest, and consent for marketing. Data subjects may withdraw consent at any time." },
  { title: "International Transfers", body: "Data resides in EU- and Africa-based regions with Standard Contractual Clauses (SCCs) and encryption at rest and in transit." },
  { title: "Data Subject Rights", body: "We honor access, rectification, erasure, restriction, objection, and portability requests within 30 days." },
  { title: "Subprocessors", body: "We maintain a vetted list of subprocessors (SIEM, ticketing, telemetry). Clients are notified before changes." }
];

export default function DataProtectionPage() {
  return (
    <div className="container py-16 space-y-8">
      <div className="max-w-3xl">
        <p className="text-brand-teal text-sm uppercase tracking-[0.3em]">Data Protection</p>
        <h1 className="text-4xl font-semibold mt-3">GDPR & POPIA ready</h1>
        <p className="text-gray-300 mt-4">
          Privacy engineering embedded throughout our services, from evidence handling to training cohorts.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <article key={section.title} className="card">
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <p className="text-gray-300 mt-3">{section.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

