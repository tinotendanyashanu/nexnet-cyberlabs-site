import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academy Internship - NexNet CyberLabs",
  description: "Build DFIR, intelligence, and GRC skills with NexNet CyberLabs internships."
};

const rotations = [
  { title: "DFIR Pod", details: "Shadow incident commanders, perform evidence collections, and write court-ready notes." },
  { title: "Threat Intelligence Pod", details: "Track adversaries, draft intelligence notes, and brief executives." },
  { title: "GRC Pod", details: "Assist with ISO 27001 gap assessments, policy drafting, and audit simulations." }
];

export default function InternshipPage() {
  return (
    <div className="container py-16 space-y-8">
      <div className="max-w-3xl">
        <p className="text-brand-teal text-sm uppercase tracking-[0.3em]">Internship Program</p>
        <h1 className="text-4xl font-semibold mt-3">Deploy with our responders</h1>
        <p className="text-gray-300 mt-4">
          12-week paid internships with on-call rotations, mentorship, and certification pathways.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {rotations.map((rotation) => (
          <article key={rotation.title} className="card">
            <h2 className="text-xl font-semibold">{rotation.title}</h2>
            <p className="text-gray-300 mt-3 text-sm">{rotation.details}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

