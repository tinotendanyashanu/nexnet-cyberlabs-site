"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import { ShieldCheckIcon, ServerIcon } from "@heroicons/react/24/outline";
import GlowCard from "@/components/ui/GlowCard";
import Timeline from "@/components/ui/Timeline";
import Accordion from "@/components/ui/Accordion";
import PillList from "@/components/ui/PillList";
import { CTA } from "@/components/CTA";
import { ServiceStructuredData } from "@/components/ServiceStructuredData";

const methodology = [
  { phase: "Phase 1", title: "Policy Drafting & Review", duration: "4-6 weeks", description: "Development and review of cybersecurity policies, data protection laws, and digital governance frameworks aligned to international standards." },
  { phase: "Phase 2", title: "Legal Evidence Standards", duration: "Ongoing", description: "Advisory on digital evidence collection, preservation, and presentation standards for legal proceedings in African and EU jurisdictions." },
  { phase: "Phase 3", title: "National Awareness Programs", duration: "3-6 months", description: "Design of national cybersecurity awareness campaigns and capacity-building initiatives for public and private sectors." },
  { phase: "Phase 4", title: "Public-Private Collaboration", duration: "Ongoing", description: "Facilitation of partnerships between government, private sector, and civil society for national cyber resilience." }
];

const tools = ["GDPR", "Budapest Convention", "AU Cyber Convention", "NIST", "ISO 27001", "POPIA", "Zimbabwe Cyber Act", "Draft Legislation"];
const frameworks = ["International Cyber Law", "Budapest Convention", "AU Malabo Convention", "GDPR"];

const faqs = [
  { question: "Do you help draft cyber laws?", answer: "Yes. We work with governments, regulators, and parliamentary committees to draft modern cyber laws aligned to Budapest Convention, AU Malabo Convention, and best practices." },
  { question: "Can you provide expert witness services?", answer: "Yes. Our team provides expert witness testimony on cybersecurity and digital forensics matters in African and European courts." },
  { question: "Do you train law enforcement?", answer: "Yes. We design and deliver cyber investigation training programs for law enforcement, prosecutors, and judges on digital evidence handling and cybercrime." },
  { question: "What is your government experience?", answer: "We've advised 5 African governments on cyber policy, worked with 12+ regulatory agencies, and contributed to 20+ national cybersecurity awareness programs." },
  { question: "Can you help with international cooperation?", answer: "Yes. We facilitate cross-border cyber incident response, mutual legal assistance, and public-private information sharing agreements." }
];

export default function CyberLawPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop" alt="Cyber Law" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/70 to-brand-navy" />
        </div>
        <div className="relative z-10 section-container text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal text-sm font-semibold mb-6">Policy & Legislation</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Cyber Law & Policy Advisory</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Building frameworks for digital justice. Work with policymakers and institutions to shape cyber laws and response frameworks aligned with global standards.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">Request Advisory<ArrowRight className="w-5 h-5" /></Link>
            <a href="tel:+2638677004321" className="btn-secondary inline-flex items-center gap-2"><Phone className="w-5 h-5" />Speak to Team</a>
          </div>
        </div>
      </section>
      <section className="section-container py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="grid sm:grid-cols-3 gap-6">
              <GlowCard className="text-center p-6"><div className="text-4xl font-bold text-brand-teal mb-2">12+</div><div className="text-gray-400">Policy Projects</div></GlowCard>
              <GlowCard className="text-center p-6"><div className="text-4xl font-bold text-brand-teal mb-2">5</div><div className="text-gray-400">Jurisdictions Advised</div></GlowCard>
              <GlowCard className="text-center p-6"><div className="text-4xl font-bold text-brand-teal mb-2">20+</div><div className="text-gray-400">Training Programs</div></GlowCard>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Shaping Digital Governance</h2>
              <p className="text-gray-300 leading-relaxed">Modern cyber threats require modern legal frameworks. We work with governments, regulators, and institutions across Africa to develop cyber laws, train law enforcement, and build national resilience aligned to international conventions.</p>
            </div>
            <div><h3 className="text-2xl font-bold mb-4">Legal Frameworks</h3><PillList pills={frameworks} variant="secondary" /></div>
            <div><h2 className="text-3xl font-bold mb-6">Advisory Services</h2><Timeline items={methodology} /></div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Legal Instruments</h2>
              <div className="grid sm:grid-cols-2 gap-4">{tools.map((tool, idx) => (<GlowCard key={idx} className="p-4 flex items-center gap-3"><ServerIcon className="w-6 h-6 text-brand-teal flex-shrink-0" /><div className="font-semibold">{tool}</div></GlowCard>))}</div>
            </div>
            <div><h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2><Accordion items={faqs} /></div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <GlowCard className="p-6" glow><h3 className="text-xl font-bold mb-4">Need Policy Advisory?</h3><p className="text-gray-300 mb-6 text-sm">Engage our policy team to draft modern cyber laws and build national resilience frameworks.</p><div className="space-y-3"><Link href="/contact" className="btn-primary w-full flex items-center justify-center gap-2">Contact Us</Link><a href="tel:+2638677004321" className="btn-secondary w-full flex items-center justify-center gap-2"><Phone className="w-5 h-5" />Call Now</a></div></GlowCard>
              <GlowCard className="p-6"><h4 className="font-bold mb-3 flex items-center gap-2"><ShieldCheckIcon className="w-5 h-5 text-brand-teal" />Key Outcomes</h4><ul className="space-y-2 text-sm text-gray-300"><li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" /><span>Modern cyber laws aligned internationally</span></li><li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" /><span>Enhanced national resilience</span></li><li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" /><span>Effective public-private partnerships</span></li><li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" /><span>Capacity-building programs</span></li></ul></GlowCard>
            </div>
          </div>
        </div>
      </section>
      <CTA />
      <ServiceStructuredData slug="cyber-law" />
    </>
  );
}
