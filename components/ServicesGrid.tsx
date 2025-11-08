import Link from "next/link";

const items = [
  { href: "/services#ir", title: "Incident Response", desc: "Triage, containment, forensics, and remediation with executive briefings." },
  { href: "/services#forensics", title: "Digital Forensics & Investigations", desc: "Court-ready evidence handling, timeline analysis, and reporting." },
  { href: "/services#intel", title: "Threat Intelligence (OSINT & CTI)", desc: "Collection plans, monitoring, and decision-ready intel notes." },
  { href: "/services#assess", title: "Security Assessments", desc: "Pen tests, red/blue team, application security reviews." },
  { href: "/services#grc", title: "Governance, Risk & Compliance", desc: "GDPR/ISO 27001 readiness, policies, and audit support." },
  { href: "/services#training", title: "Security Training & Awareness", desc: "Hands-on labs, exec briefings, behavior change campaigns." }
];

export function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map(i => (
        <article key={i.title} className="card">
          <h3 className="text-xl font-semibold">{i.title}</h3>
          <p className="text-gray-300 mt-2">{i.desc}</p>
          {detailed && <Link href={i.href} className="inline-block mt-4 text-brand-teal">Learn more →</Link>}
        </article>
      ))}
    </div>
  );
}
