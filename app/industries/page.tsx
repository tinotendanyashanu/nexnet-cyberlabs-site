export const metadata = { title: "Industries — NexNet CyberLabs" };

export default function IndustriesPage() {
  const items = [
    { name: "Financial Services", desc: "Reduce time-to-containment and meet audit expectations (PCI DSS, ISO 27001)." },
    { name: "Insurance", desc: "Data quality, fraud analytics, incident readiness, and recovery planning." },
    { name: "Public Sector", desc: "Resilient infrastructure, critical services continuity, civic trust." },
    { name: "Telecom", desc: "Protect core networks, identity systems, and revenue assurance." },
    { name: "Mining & Energy", desc: "OT/IT convergence hardening, incident drills, third-party assurance." },
    { name: "NGOs / IGOs", desc: "High-risk contexts, data protection, beneficiary privacy, and safety." },
    { name: "SMB", desc: "Right-sized controls, security coaching, and affordable assessments." }
  ];
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-semibold">Industries</h1>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {items.map((it) => (
          <div key={it.name} className="card">
            <h3 className="text-2xl font-medium">{it.name}</h3>
            <p className="text-gray-300 mt-2">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
