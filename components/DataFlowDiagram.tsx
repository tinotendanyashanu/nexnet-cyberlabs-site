const steps = [
  { title: "Collection", detail: "Scoped intake portals, encrypted uploads, zero trust access." },
  { title: "Processing", detail: "Isolated analysis enclaves with audited tooling and segmentation." },
  { title: "Storage", detail: "Geo-fenced vaults, envelope encryption, lifecycle management." },
  { title: "Sharing", detail: "Need-to-know disclosures, signed NDAs, regulator channels." },
  { title: "Deletion", detail: "Automated retention timers, evidence destruction attestations." }
];

export function DataFlowDiagram() {
  return (
    <div className="relative mt-10">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-teal to-transparent" aria-hidden="true" />
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={step.title} className="pl-12 relative">
            <span className="absolute left-0 top-0 h-8 w-8 rounded-full border border-brand-teal flex items-center justify-center text-sm font-semibold text-brand-teal">
              {index + 1}
            </span>
            <div className="card">
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-300 mt-2">{step.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

