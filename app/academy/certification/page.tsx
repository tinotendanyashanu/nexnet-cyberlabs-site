import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certification Pathways - NexNet CyberLabs",
  description: "Curated certification journeys for analysts, responders, and executives."
};

const pathways = [
  { name: "Operations Track", stack: ["CYSA+", "GCIA", "GCTI"], support: "Lab access, mock exams, mentorship" },
  { name: "Leadership Track", stack: ["CISM", "CISSP", "ISO 27001 Lead Auditor"], support: "Board brief coaching, peer councils" },
  { name: "Specialist Track", stack: ["GCFA", "OSCP", "CCSP"], support: "1:1 coaching, study pods, retake vouchers" }
];

export default function CertificationPage() {
  return (
    <div className="container py-16 space-y-8">
      <div className="max-w-3xl">
        <p className="text-brand-teal text-sm uppercase tracking-[0.3em]">Certification Pathways</p>
        <h1 className="text-4xl font-semibold mt-3">Certify with real-world context</h1>
        <p className="text-gray-300 mt-4">
          Structured journeys with labs, coaching, and exam prep to accelerate your credentials.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {pathways.map((pathway) => (
          <article key={pathway.name} className="card space-y-4">
            <h2 className="text-xl font-semibold">{pathway.name}</h2>
            <p className="text-brand-teal text-sm uppercase tracking-[0.3em]">Stack</p>
            <ul className="text-gray-300 text-sm space-y-1">
              {pathway.stack.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
            <p className="text-gray-400 text-sm">Support: {pathway.support}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

