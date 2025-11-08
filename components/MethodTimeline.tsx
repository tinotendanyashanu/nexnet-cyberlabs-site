export function MethodTimeline() {
  const steps = [
    { t: "Intake", d: "Clear scope, roles, confidentiality, incident context." },
    { t: "Evidence Control", d: "Chain-of-custody, imaging, secure storage." },
    { t: "Analysis", d: "Triage, timeline, IOCs, root cause." },
    { t: "Findings", d: "Executive and technical reporting, artifacts." },
    { t: "Remediation & Training", d: "Hardening plan, tabletop exercise, metrics." }
  ];
  return (
    <ol className="grid md:grid-cols-5 gap-6">
      {steps.map(s => (
        <li key={s.t} className="card">
          <h4 className="font-semibold">{s.t}</h4>
          <p className="text-gray-300 mt-2">{s.d}</p>
        </li>
      ))}
    </ol>
  );
}
