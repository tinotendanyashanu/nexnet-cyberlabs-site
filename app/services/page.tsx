import Image from "next/image";
import { Metadata } from "next";
import { Accordion } from "@/components/Accordion";
import { PricingTiers } from "@/components/PricingTiers";
import { ToolingStack } from "@/components/ToolingStack";
import { ServicesGrid } from "@/components/ServicesGrid";

export const metadata: Metadata = {
  title: "Services - NexNet CyberLabs",
  description: "Incident response retainers, DFIR, threat intelligence, assessments, and governance programs."
};

export default function ServicesPage() {
  return (
    <div className="container py-16 space-y-12">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src="/images/services/cyber-security-bg.svg"
          alt=""
          width={1600}
          height={900}
          className="w-full h-64 md:h-96 object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/70 to-black/50" />
        <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">Service Catalog</h1>
          <p className="mt-2 text-gray-200 max-w-3xl drop-shadow-md text-lg">
            Measurable outcomes and disciplined responders across the cyber kill-chain.
          </p>
        </div>
      </div>

      <ServicesGrid detailed />

      <PricingTiers />
      <ToolingStack />

      <section>
        <h2 className="text-2xl font-semibold">Engagement FAQs</h2>
        <div className="mt-4">
          <Accordion
            items={[
              { q: "How fast can you mobilize IR?", a: "We begin remote triage within hours post-intake. On-site teams are airborne within 24h depending on visa/logistics." },
              { q: "Do you provide court-ready reports?", a: "Yes. Chain-of-custody, imaging, and expert testimony preparation are included in DFIR engagements." },
              { q: "Can you align to our controls framework?", a: "Our findings map to ISO 27001, NIST CSF, PCI DSS, NERC CIP, POPIA, and GDPR requirements." }
            ]}
          />
        </div>
      </section>
    </div>
  );
}

