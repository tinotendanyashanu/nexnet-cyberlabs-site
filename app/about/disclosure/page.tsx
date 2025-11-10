import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Responsible Disclosure - NexNet CyberLabs",
  description: "Guidelines for reporting vulnerabilities to NexNet CyberLabs."
};

const steps = [
  { title: "Report securely", detail: "Email security@nexnet.example with encryption (PGP fingerprint C6A1 1F85 2F42 1ACC E912 5D58 F244 8F3B D79B 9C1A)." },
  { title: "Provide detail", detail: "Include reproduction steps, scope, impact, and proof-of-concept when safe." },
  { title: "Allow remediation time", detail: "We request 30 days before public disclosure unless mutual agreement states otherwise." },
  { title: "Stay lawful", detail: "No exploitation of data, privacy violations, or service disruption during testing." }
];

export default function DisclosurePage() {
  return (
    <div className="container py-16 space-y-8">
      <div className="max-w-3xl">
        <p className="text-brand-teal text-sm uppercase tracking-[0.3em]">Responsible Disclosure</p>
        <h1 className="text-4xl font-semibold mt-3">Help us secure the ecosystem</h1>
        <p className="text-gray-300 mt-4">
          We operate a safe-harbor program for researchers acting in good faith. Follow the guidelines below to ensure a fast response.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {steps.map((step) => (
          <article key={step.title} className="card">
            <h2 className="text-xl font-semibold">{step.title}</h2>
            <p className="text-gray-300 mt-2">{step.detail}</p>
          </article>
        ))}
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold">Service-Level Objectives</h2>
        <ul className="text-gray-300 mt-3 space-y-2 list-disc list-inside">
          <li>Acknowledge reports within 48 hours.</li>
          <li>Provide initial assessment within 7 days.</li>
          <li>Offer status updates every 7 days until remediation.</li>
          <li>Credit researchers (optional) upon coordinated disclosure.</li>
        </ul>
      </div>
    </div>
  );
}

