import { Metadata } from "next";
import { IndustryTabs } from "@/components/IndustryTabs";
import { reports } from "@/lib/site-data";
import { CaseCarousel } from "@/components/CaseCarousel";
import GlowCard from "@/components/ui/GlowCard";
import { ImageHero } from "@/components/ImageHero";

export const metadata: Metadata = {
  title: "Industries - NexNet CyberLabs",
  description: "Tailored cybersecurity programs for financial services, telecom, mining & energy, government, and education."
};

export default function IndustriesPage() {
  return (
    <>
      <ImageHero
        title="Sector-grade intelligence and response"
        subtitle="We design controls and incident programs matched to each industry's regulators, adversaries, and operating realities."
        bgSrc="/images/hero/network-connections.svg"
        ctaPrimary={{ text: "View Services", href: "/services" }}
      />
    
    <div className="container py-16 space-y-12">

      <IndustryTabs />

      {/* Sector Outcomes */}
      <CaseCarousel />

      <section className="grid md:grid-cols-3 gap-6">
        <article className="card">
          <h2 className="text-xl font-semibold">Compliance accelerators</h2>
          <ul className="mt-4 space-y-2 text-gray-300 text-sm">
            <li>NIST CSF tier progression workshops</li>
            <li>ISO 27001 gap assessments + readiness sprints</li>
            <li>GDPR/POPIA RoPA automation</li>
          </ul>
        </article>
        <article className="card">
          <h2 className="text-xl font-semibold">Regulator reporting desks</h2>
          <p className="text-gray-300 mt-2">
            Incident desks dedicated to SARB, ECB, POTRAZ, ZHRC, and data protection authorities across Africa + EU.
          </p>
        </article>
        <article className="card">
          <h2 className="text-xl font-semibold">Sector threat briefs</h2>
          <p className="text-gray-300 mt-2">
            Quarterly threat intelligence reports with actionable countermeasures and executive narratives.
          </p>
        </article>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Downloadable one-pagers</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {reports.map((report) => (
            <a
              key={report.href}
              href={report.href}
              className="card hover:border-brand-teal transition-colors"
              download
            >
              <p className="text-brand-teal text-sm uppercase tracking-[0.2em]">PDF</p>
              <h3 className="text-xl font-semibold mt-2">{report.title}</h3>
              <p className="text-gray-300 mt-2 text-sm">{report.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Consultation CTA */}
      <section>
        <GlowCard className="p-10 text-center">
          <h3 className="text-2xl font-bold mb-2">Ready to tailor a sector program?</h3>
          <p className="text-gray-300 mb-6">Book a consultation to align controls, reporting, and incident readiness to your regulators and risks.</p>
          <div className="flex gap-3 justify-center">
            <a href="/contact" className="btn-primary">Request Consultation</a>
            <a href="/services" className="btn-secondary">Explore Services</a>
          </div>
        </GlowCard>
      </section>
    </div>
    </>
  );
}

