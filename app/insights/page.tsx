export const metadata = { title: "Insights — NexNet CyberLabs" };

const posts = [
  { title: "Chain of Custody in Digital Forensics: A Practical SOP", tag: "Forensics" },
  { title: "Tabletop Exercises that Actually Work", tag: "IR" },
  { title: "GDPR in Africa: Practical Steps for Cross-Region Teams", tag: "GRC" }
];

export default function InsightsPage() {
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-semibold">Insights</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {posts.map(p => (
          <article className="card" key={p.title}>
            <span className="text-xs uppercase tracking-wide text-brand-teal">{p.tag}</span>
            <h3 className="text-xl font-semibold mt-2">{p.title}</h3>
            <p className="mt-3 text-gray-300">Read more →</p>
          </article>
        ))}
      </div>
    </div>
  );
}
