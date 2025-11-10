import { Metadata } from "next";
import { Target, Shield, GraduationCap, Award, Users } from "lucide-react";

const pillars = [
  { icon: Target, title: "Integrity", details: ["Responsible disclosure practices", "Lawful interception only", "Client confidentiality charters"] },
  { icon: Shield, title: "Discipline", details: ["Runbooks for every engagement", "After-action reviews", "Outcome-based KPIs"] },
  { icon: GraduationCap, title: "Knowledge First", details: ["10% time for R&D", "Academy scholarships", "Joint research with universities"] },
  { icon: Award, title: "Reputation over Revenue", details: ["Conflict-of-interest screening", "No pay-to-play partnerships", "Transparent pricing"] },
  { icon: Users, title: "Community Impact", details: ["Mentorship circles", "Cyber clinics for SMEs", "STEM outreach programs"] }
];

export const metadata: Metadata = {
  title: "Our Pillars - NexNet CyberLabs",
  description: "The values guiding every NexNet CyberLabs engagement."
};

export default function PillarsPage() {
  return (
    <div className="container py-16 space-y-8">
      <div className="max-w-3xl">
        <p className="text-brand-teal text-sm uppercase tracking-[0.3em]">Values</p>
        <h1 className="text-4xl font-semibold mt-3">Five pillars that anchor our conduct</h1>
        <p className="text-gray-300 mt-4">
          We hold ourselves accountable to measurable behaviors that protect clients, communities, and our own people.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <article key={pillar.title} className="card space-y-3">
              <Icon className="h-8 w-8 text-brand-teal" />
              <h2 className="text-xl font-semibold">{pillar.title}</h2>
              <ul className="text-gray-300 text-sm space-y-1">
                {pillar.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  );
}

