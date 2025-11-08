export const metadata = { title: "Company — NexNet CyberLabs" };

export default function CompanyPage() {
  const pillars = [
    "Integrity — no illegal or unethical hacking.",
    "Discipline — structured work and strict standards.",
    "Knowledge First — learning is never secondary.",
    "Reputation over Revenue — credibility drives profit.",
    "Community Impact — training and upliftment."
  ];
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-semibold">Company</h1>
      <p className="mt-4 text-gray-300 max-w-3xl">
        NexNet CyberLabs is an investigations-first security bureau founded in Zimbabwe and operating across Africa and the EU.
      </p>
      <h2 className="text-2xl font-semibold mt-10">Our Pillars</h2>
      <ul className="grid md:grid-cols-2 gap-4 mt-4">
        {pillars.map(p => <li key={p} className="card">{p}</li>)}
      </ul>
    </div>
  );
}
