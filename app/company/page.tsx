import { ImageHero } from "@/components/ImageHero";

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
    <>
      <ImageHero
        title="Company"
        subtitle="NexNet CyberLabs is an investigations-first security bureau founded in Zimbabwe and operating across Africa and the EU."
        bgSrc="/images/hero/network-connections.svg"
        ctaPrimary={{ href: "/about", text: "Learn More" }}
      />
    
    <div className="container py-20">
      <h2 className="text-2xl font-semibold mt-10">Our Pillars in Action</h2>
      <ul className="grid md:grid-cols-2 gap-4 mt-4">
        {pillars.map(p => <li key={p} className="card">{p}</li>)}
      </ul>

      <h2 className="text-2xl font-semibold mt-10">Responsible Disclosure</h2>
      <div className="card mt-4">
        <p className="text-gray-300">
          We welcome vulnerability reports at <span className="text-brand-teal">security@nexnet.example</span>. 
          A PGP key will be published on this page.
        </p>
      </div>
    </div>
    </>
  );
}
