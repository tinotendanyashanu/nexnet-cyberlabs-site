"use client";

import { ImageHero } from "@/components/ImageHero";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2024",
    quarter: "Q1",
    title: "Foundation",
    description: "Three Zimbabwean cybersecurity professionals unite to establish NexNet CyberLabs in Harare with a vision to build Africa's leading cybersecurity bureau.",
    highlights: [
      "Company registration in Zimbabwe",
      "Initial team of 3 founders + 5 interns",
      "First incident response playbook developed"
    ]
  },
  {
    year: "2024",
    quarter: "Q2",
    title: "First Major Client",
    description: "Delivered first cross-border incident response program for a regional financial institution, containing a ransomware attack within 48 hours.",
    highlights: [
      "Established 24/7 IR hotline",
      "Zero data loss achieved",
      "Client retained for managed detection"
    ]
  },
  {
    year: "2024",
    quarter: "Q3",
    title: "EU Expansion",
    description: "Opened cyber fusion office in Warsaw, Poland to serve European clients and establish compliance with GDPR requirements.",
    highlights: [
      "Warsaw office operational",
      "EU data residency compliance",
      "First EU client onboarded (telecom sector)"
    ]
  },
  {
    year: "2024",
    quarter: "Q4",
    title: "ISO 27001 Certification",
    description: "Achieved ISO 27001:2022 certification, validating our information security management system and operational discipline.",
    highlights: [
      "ISO 27001 certified by QSA Europe",
      "Academy program launched with 50 students",
      "Research lab established"
    ]
  },
  {
    year: "2025",
    quarter: "Q1",
    title: "Academy Milestone",
    description: "CyberLabs Academy trained 500+ professionals across Africa, with 12 interns converted to full-time analysts.",
    highlights: [
      "500+ professionals trained",
      "12 interns hired full-time",
      "Partnership with 3 African universities"
    ]
  },
  {
    year: "2025",
    quarter: "Q2",
    title: "Regional Leadership",
    description: "Recognized as a leading DFIR provider in Southern Africa, with operations spanning 8 countries and 40+ active clients.",
    highlights: [
      "Operations in 8 African countries",
      "40+ enterprise clients",
      "Published 15 threat intelligence reports"
    ]
  },
  {
    year: "2025",
    quarter: "Q3-Q4",
    title: "Scaling & Innovation",
    description: "Expanded service portfolio to include threat intelligence platform, GRC automation, and executive advisory.",
    highlights: [
      "Threat intelligence platform launched",
      "SOC 2 Type II in progress",
      "Team grown to 35+ professionals"
    ]
  }
];

export default function HistoryPage() {
  return (
    <>
      <ImageHero
        title="Our History"
        subtitle="From founding in Harare to global operations across Africa and the EU. The journey of building a world-class cybersecurity bureau."
        bgSrc="/images/hero/network-connections.svg"
        ctaPrimary={{ href: "/about", text: "About Us" }}
        ctaSecondary={{ href: "/about/team", text: "Meet the Team" }}
      />

      <div className="container py-20 space-y-16">
        <section className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Journey</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            NexNet CyberLabs was founded in 2024 by three cybersecurity professionals from Zimbabwe who recognized
            a critical gap: Africa&apos;s growing digital economy lacked disciplined, investigations-first incident response
            and threat intelligence capabilities. What began as a small team in Harare has grown into a bureau serving
            clients across 8 African countries and the European Union.
          </p>
        </section>

        <section className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-teal via-brand-teal/50 to-transparent"></div>
          
          <div className="space-y-12">
            {timeline.map((event, index) => (
              <motion.div
                key={`${event.year}-${event.quarter}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
              >
                <div className={index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}>
                  <div className="inline-block px-4 py-1 bg-brand-teal/20 border border-brand-teal rounded-full text-brand-teal text-sm font-semibold mb-3">
                    {event.year} {event.quarter}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {event.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-gray-400">
                        {index % 2 === 0 ? `${highlight} ←` : `→ ${highlight}`}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-brand-teal rounded-full transform -translate-x-1.5 md:-translate-x-2 ring-4 ring-brand-navy"></div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="card max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">What&apos;s Next</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-brand-teal mb-2">2026 Roadmap</h3>
              <ul className="space-y-2 text-gray-300">
                <li>→ SOC 2 Type II certification completion</li>
                <li>→ Open third office in East Africa (Nairobi)</li>
                <li>→ Launch managed detection & response (MDR) platform</li>
                <li>→ Train 2,000+ professionals through Academy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand-teal mb-2">Long-term Vision</h3>
              <ul className="space-y-2 text-gray-300">
                <li>→ Become Africa&apos;s most trusted cyber intelligence bureau</li>
                <li>→ Establish 5+ regional offices across Africa</li>
                <li>→ Contribute to African cybersecurity policy development</li>
                <li>→ Build pipeline of 10,000+ trained African cyber professionals</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
