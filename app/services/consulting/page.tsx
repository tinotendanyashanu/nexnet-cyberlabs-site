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
  { phase: "Phase 1", title: "CISO-as-a-Service", duration: "Ongoing", description: "Virtual CISO providing strategic leadership, governance, and executive advisory for organizations without full-time security leadership." },
  { phase: "Phase 2", title: "Security Strategy", duration: "4-6 weeks", description: "Development of comprehensive security strategies aligned to business objectives and risk appetite with board-ready presentations." },
  { phase: "Phase 3", title: "Maturity Modeling", duration: "2-3 weeks", description: "Assessment of current security maturity with roadmap for progressive capability development aligned to CMMI." },
  { phase: "Phase 4", title: "Crisis Management Planning", duration: "3-4 weeks", description: "Development of incident response plans, business continuity strategies, and crisis communication frameworks." }
];

const tools = ["NIST CSF", "CMMI", "FAIR", "PowerBI", "ServiceNow", "OneTrust", "Vanta", "Drata"];
const frameworks = ["NIST CSF", "CMMI", "FAIR Risk", "ISO 27001"];

const faqs = [
  { question: "What is CISO-as-a-Service?", answer: "Virtual CISO provides part-time executive security leadership including strategy, governance, vendor management, board reporting, and team mentorship at a fraction of full-time cost." },
  { question: "How often does a vCISO engage?", answer: "Typically 2-4 days per month with on-call availability for incidents and board meetings. Engagement level scales with organizational needs." },
  { question: "Can you help with board reporting?", answer: "Yes. We prepare executive-ready security dashboards, quarterly board presentations, and risk reports that translate technical issues into business language." },
  { question: "Do you provide interim CISO services?", answer: "Yes. We can serve as interim CISO during recruitment, organizational changes, or special projects requiring temporary executive security leadership." },
  { question: "What industries do you serve?", answer: "We serve Financial Services, Healthcare, Manufacturing, Technology, Government, and Nonprofits across Africa and internationally." }
];

export default function ConsultingPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&h=1080&fit=crop" alt="Consulting" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/70 to-brand-navy" />
        </div>
        <div className="relative z-10 section-container text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal text-sm font-semibold mb-6">Strategic Advisory</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Cybersecurity Consulting & Strategy</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Strategic security for modern enterprises. Executive-level cybersecurity advisory turning technical defenses into business advantage.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">Schedule Consultation<ArrowRight className="w-5 h-5" /></Link>
            <a href="tel:+2638677004321" className="btn-secondary inline-flex items-center gap-2"><Phone className="w-5 h-5" />Speak to CISO</a>
          </div>
        </div>
      </section>
      <section className="section-container py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="grid sm:grid-cols-3 gap-6">
              <GlowCard className="text-center p-6"><div className="text-4xl font-bold text-brand-teal mb-2">60+</div><div className="text-gray-400">Consulting Clients</div></GlowCard>
              <GlowCard className="text-center p-6"><div className="text-4xl font-bold text-brand-teal mb-2">25+</div><div className="text-gray-400">vCISO Engagements</div></GlowCard>
              <GlowCard className="text-center p-6"><div className="text-4xl font-bold text-brand-teal mb-2">2 levels</div><div className="text-gray-400">Avg Maturity Increase</div></GlowCard>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Executive Security Leadership</h2>
              <p className="text-gray-300 leading-relaxed">Transform cybersecurity from cost center to strategic business enabler. Our consultants provide executive-level guidance on security strategy, risk management, and organizational resilience.</p>
            </div>
            <div><h3 className="text-2xl font-bold mb-4">Consulting Frameworks</h3><PillList pills={frameworks} variant="secondary" /></div>
            <div><h2 className="text-3xl font-bold mb-6">Advisory Services</h2><Timeline items={methodology} /></div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Strategy Tools</h2>
              <div className="grid sm:grid-cols-2 gap-4">{tools.map((tool, idx) => (<GlowCard key={idx} className="p-4 flex items-center gap-3"><ServerIcon className="w-6 h-6 text-brand-teal flex-shrink-0" /><div className="font-semibold">{tool}</div></GlowCard>))}</div>
            </div>
            <div><h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2><Accordion items={faqs} /></div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <GlowCard className="p-6" glow><h3 className="text-xl font-bold mb-4">Need Strategic Guidance?</h3><p className="text-gray-300 mb-6 text-sm">Engage a virtual CISO to provide executive security leadership and strategic advisory.</p><div className="space-y-3"><Link href="/contact" className="btn-primary w-full flex items-center justify-center gap-2">Schedule Call</Link><a href="tel:+2638677004321" className="btn-secondary w-full flex items-center justify-center gap-2"><Phone className="w-5 h-5" />Call Now</a></div></GlowCard>
              <GlowCard className="p-6"><h4 className="font-bold mb-3 flex items-center gap-2"><ShieldCheckIcon className="w-5 h-5 text-brand-teal" />Key Outcomes</h4><ul className="space-y-2 text-sm text-gray-300"><li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" /><span>Clear security strategy aligned to business</span></li><li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" /><span>Executive visibility into cyber risk</span></li><li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" /><span>Optimized security investments</span></li><li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" /><span>Board-ready reporting</span></li></ul></GlowCard>
            </div>
          </div>
        </div>
      </section>
      <CTA />
      <ServiceStructuredData slug="consulting" />
    </>
  );
}
