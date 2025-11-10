import Image from "next/image";
import { Metadata } from "next";
import { leadershipTeam } from "@/lib/site-data";
import { ImageHero } from "@/components/ImageHero";

export const metadata: Metadata = {
  title: "Leadership - NexNet CyberLabs",
  description: "Executive team leading NexNet CyberLabs across DFIR, intelligence, compliance, and education."
};

export default function LeadershipPage() {
  return (
    <>
      <ImageHero
        title="Building disciplined, resilient teams"
        subtitle="Meet the team accountable for steering NexNet CyberLabs across incident response, intelligence, governance, and academy programs."
        bgSrc="/images/hero/network-connections.svg"
        ctaPrimary={{ text: "About Us", href: "/about" }}
      />
    
    <div className="container py-16 space-y-8">

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leadershipTeam.map((leader) => (
          <article key={leader.name} className="card space-y-4">
            <Image
              src={leader.avatar}
              alt={leader.name}
              width={96}
              height={96}
              className="rounded-full border border-white/20 object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold">{leader.name}</h2>
              <p className="text-brand-teal text-sm">{leader.title}</p>
            </div>
            <p className="text-gray-300 text-sm">{leader.focus}</p>
          </article>
        ))}
      </div>
    </div>
    </>
  );
}

