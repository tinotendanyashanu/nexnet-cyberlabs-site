import { KPIBand } from "@/components/KPIBand";
import { ServicesGrid } from "@/components/ServicesGrid";
import { MethodTimeline } from "@/components/MethodTimeline";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
      <section className="container py-28">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Cybersecurity you can trust.<span className="block">Outcomes you can prove.</span>
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-3xl">
          NexNet CyberLabs is an Africa-born, enterprise-ready cybersecurity bureau.
          We investigate incidents, secure systems, and train teams across Africa and the EU—
          with disciplined methods and court-ready reporting.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="/contact" className="rounded-md px-5 py-3 bg-brand-teal font-medium text-black">
            Request a Consultation
          </a>
          <a href="/contact#emergency" className="rounded-md px-5 py-3 border border-white/20">
            Emergency Incident? Call 24/7
          </a>
        </div>
        <div className="mt-12">
          <KPIBand />
        </div>
      </section>

      <section className="container py-10">
        <ServicesGrid />
      </section>

      <section className="container py-16">
        <MethodTimeline />
      </section>

      <section className="container py-16">
        <CTA />
      </section>
    </>
  );
}
