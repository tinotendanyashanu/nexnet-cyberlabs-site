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
  {
    phase: "Phase 1",
    title: "Security Posture Assessment",
    duration: "Week 1-2",
    description: "Comprehensive evaluation of current security controls and maturity against industry standards including ISO 27001, NIST CSF, and local regulations."
  },
  {
    phase: "Phase 2",
    title: "Policy & SOP Drafting",
    duration: "Week 3-4",
    description: "Development of security policies, procedures, and standards aligned to ISO 27001, NIST, GDPR, and Zimbabwe Cyber & Data Protection Act."
  },
  {
    phase: "Phase 3",
    title: "Risk Register Creation",
    duration: "Week 5-6",
    description: "Identification, assessment, and documentation of organizational cyber risks with mitigation strategies and ownership assignments."
  },
  {
    phase: "Phase 4",
    title: "Compliance Alignment",
    duration: "Week 7-8",
    description: "GDPR, POPIA, and Zimbabwe Cyber & Data Protection Act compliance assessments, gap analysis, and remediation roadmap development."
  }
];

const tools = [
  "OneTrust",
  "Vanta",
  "LogicGate",
  "PowerBI",
  "ServiceNow GRC",
  "AuditBoard",
  "Drata",
  "Secureframe"
];

const frameworks = ["ISO 27001", "NIST CSF", "GDPR", "POPIA", "Zimbabwe Cyber Act", "SOC 2", "PCI DSS"];

const faqs = [
  {
    question: "How long does ISO 27001 certification take?",
    answer: "With our accelerated program, most organizations achieve ISO 27001 readiness within 120 days. The timeline depends on your current security maturity and organizational complexity."
  },
  {
    question: "Do you help with GDPR compliance?",
    answer: "Yes. We provide comprehensive GDPR compliance assessments including DPIA workflows, RoPA maintenance, data mapping, and consent management aligned to EU requirements."
  },
  {
    question: "What is included in a GRC assessment?",
    answer: "Our GRC assessments include controls review, stakeholder interviews, evidence gathering, maturity benchmarking, gap analysis, and a prioritized remediation roadmap with cost estimates."
  },
  {
    question: "Can you prepare us for audits?",
    answer: "Absolutely. We provide mock audits, evidence room preparation, auditor Q&A enablement, and staff coaching to ensure you pass external audits with confidence."
  },
  {
    question: "Do you provide ongoing GRC support?",
    answer: "Yes. We offer quarterly policy refresh services, continuous compliance monitoring, and executive risk dashboards to maintain your security posture over time."
  }
];

export default function GRCPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop"
            alt="Governance Risk Compliance"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/70 to-brand-navy" />
        </div>
        <div className="relative z-10 section-container text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal text-sm font-semibold mb-6">
            GRC Services
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Governance, Risk & Compliance
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Security built on governance and accountability. Align cybersecurity with international standards through structured risk assessments, audits, and policy development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Start Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+2638677004321" className="btn-secondary inline-flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Speak to Consultant
            </a>
          </div>
        </div>
      </section>

      <section className="section-container py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="grid sm:grid-cols-3 gap-6">
              <GlowCard className="text-center p-6">
                <div className="text-4xl font-bold text-brand-teal mb-2">100%</div>
                <div className="text-gray-400">Audit Pass Rate</div>
              </GlowCard>
              <GlowCard className="text-center p-6">
                <div className="text-4xl font-bold text-brand-teal mb-2">7+</div>
                <div className="text-gray-400">Compliance Frameworks</div>
              </GlowCard>
              <GlowCard className="text-center p-6">
                <div className="text-4xl font-bold text-brand-teal mb-2">40+</div>
                <div className="text-gray-400">Clients Certified</div>
              </GlowCard>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Build Security on Solid Governance</h2>
              <div className="prose prose-invert max-w-none space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Effective cybersecurity starts with strong governance, quantified risk management, and compliance 
                  with international standards. Our GRC practice helps organizations align their security programs 
                  with ISO 27001, NIST CSF, GDPR, and regional regulations.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We provide comprehensive security posture assessments, policy development, risk quantification, 
                  and audit preparation to ensure your organization meets regulatory requirements and industry best practices.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Compliance Frameworks</h3>
              <PillList pills={frameworks} variant="secondary" />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">GRC Methodology</h2>
              <Timeline items={methodology} />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">GRC Platform & Tools</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {tools.map((tool, idx) => (
                  <GlowCard key={idx} className="p-4 flex items-center gap-3">
                    <ServerIcon className="w-6 h-6 text-brand-teal flex-shrink-0" />
                    <div className="font-semibold">{tool}</div>
                  </GlowCard>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <Accordion items={faqs} />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <GlowCard className="p-6" glow>
                <h3 className="text-xl font-bold mb-4">Ready for Compliance?</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Speak with our GRC consultants to assess your current posture and develop a roadmap to certification.
                </p>
                <div className="space-y-3">
                  <Link href="/contact" className="btn-primary w-full flex items-center justify-center gap-2">
                    Schedule Assessment
                  </Link>
                  <a href="tel:+2638677004321" className="btn-secondary w-full flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </div>
              </GlowCard>

              <GlowCard className="p-6">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <ShieldCheckIcon className="w-5 h-5 text-brand-teal" />
                  Key Outcomes
                </h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>ISO 27001, NIST CSF, or GDPR compliance readiness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Executive-ready risk dashboards and reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Accelerated audit preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Certification paths and timelines</span>
                  </li>
                </ul>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <ServiceStructuredData slug="grc" />
    </>
  );
}
