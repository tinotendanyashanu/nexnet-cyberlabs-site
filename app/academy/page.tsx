export const metadata = { title: "Academy — NexNet CyberLabs" };

export default function AcademyPage() {
  const courses = [
    { title: "Executive Cyber Briefing", level: "Exec", outcome: "Board-level risk understanding and action plan." },
    { title: "Blue Team Lab: IR & Forensics", level: "Intermediate", outcome: "Hands-on triage, timeline analysis, artifacts." },
    { title: "GRC Essentials (GDPR + ISO 27001)", level: "Beginner", outcome: "Program setup, roles, metrics, audit readiness." }
  ];
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-semibold">Academy</h1>
      <p className="text-gray-300 mt-4 max-w-3xl">
        Practical labs. Real tooling. Regional context. Training that changes behavior and improves outcomes.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {courses.map(c => (
          <div className="card" key={c.title}>
            <h3 className="text-xl font-semibold">{c.title}</h3>
            <p className="text-sm text-gray-400 mt-1">Level: {c.level}</p>
            <p className="mt-3 text-gray-300">{c.outcome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
