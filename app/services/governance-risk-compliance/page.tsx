"use client";

import Image from "next/image";
import Link from "next/link";
import { FileCheck, Scale, AlertTriangle, BookOpen, ArrowRight, Phone, CheckCircle } from "lucide-react";
import { ShieldCheckIcon, DocumentCheckIcon } from "@heroicons/react/24/outline";
import GlowCard from "@/components/ui/GlowCard";
import Timeline from "@/components/ui/Timeline";
import Accordion from "@/components/ui/Accordion";
import PillList from "@/components/ui/PillList";
import { CTA } from "@/components/CTA";
import { ServiceStructuredData } from "@/components/ServiceStructuredData";

const services = [
  {
    icon: FileCheck,
    title: "Compliance Assessments",
    description: "Gap analysis and readiness assessments for GDPR, POPIA, ISO 27001, PCI DSS, and sector-specific regulations."
  },
  {
    icon: Scale,
    title: "Risk Management",
    description: "Enterprise risk assessments, business impact analysis, and quantitative risk modeling."
  },
  {
    icon: AlertTriangle,
    title: "Third-Party Risk",
    description: "Vendor security assessments, supply chain risk evaluation, and ongoing monitoring programs."
  },
  {
    icon: BookOpen,
    title: "Policy Development",
    description: "Security policy framework design, procedure documentation, and employee handbook creation."
  }
];

const methodology = [
  {
    phase: "Phase 1",
    title: "Current State Assessment",
    duration: "2-4 weeks",
    description: "Document review, stakeholder interviews, gap analysis against compliance frameworks, and risk identification."
  },
  {
    phase: "Phase 2",
    title: "Remediation Roadmap",
    duration: "1-2 weeks",
    description: "Prioritized remediation plan, policy development, control implementation guidance, and resource planning."
  },
  {
    phase: "Phase 3",
    title: "Implementation Support",
    duration: "3-6 months",
    description: "Ongoing support for control implementation, evidence collection, internal audits, and certification readiness."
  }
];

const frameworks = ["ISO 27001", "GDPR", "POPIA", "PCI DSS", "NIST CSF", "SOC 2"];

const faqs = [
  {
    question: "What is the difference between GDPR and POPIA?",
    answer: "GDPR is the EU data protection regulation, while POPIA is South Africa\'s Protection of Personal Information Act. Both have similar principles (lawful processing, data minimization, security), but POPIA has lighter penalties and is enforced by South Africa\'s Information Regulator."
  },
  {
    question: "How long does ISO 27001 certification take?",
    answer: "Typically 6-12 months from gap assessment to certification audit. Timeline depends on current maturity, organization size, and resource commitment. We guide you through each stage including certification body selection."
  },
  {
    question: "Do you help with GDPR compliance for African companies?",
    answer: "Yes. Many African companies process EU citizen data (European customers, partners, employees) and must comply with GDPR. We help with data mapping, legal basis assessment, DPIAs, and GDPR-compliant contracts."
  },
  {
    question: "What is a business impact analysis (BIA)?",
    answer: "A BIA identifies critical business processes, assesses impact of disruptions, and determines recovery time objectives (RTOs). This informs disaster recovery planning and cyber insurance requirements."
  },
  {
    question: "Can you be our virtual CISO?",
    answer: "Absolutely. Our vCISO service provides fractional executive leadership including board reporting, strategy development, vendor management, and regulatory liaison."
  }
];

export default function GovernanceRiskCompliancePage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=1080&fit=crop"
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
            Navigate complex regulations with confidence. ISO 27001, GDPR, POPIA, and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Request Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#services" className="btn-secondary inline-flex items-center gap-2">
              View Services
            </Link>
          </div>
        </div>
      </section>
      <section className="section-container py-20" id="services">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">GRC Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, idx) => (
                  <GlowCard key={idx} className="p-6">
                    <service.icon className="w-10 h-10 text-brand-teal mb-4" />
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </GlowCard>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Compliance Frameworks</h3>
              <PillList pills={frameworks} variant="secondary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Compliance Journey</h2>
              <p className="text-gray-300 mb-8">
                Our proven methodology takes you from gap identification to full compliance and certification.
              </p>
              <Timeline items={methodology} />
            </div>
            <GlowCard className="p-8 bg-gradient-to-br from-brand-teal/5 to-transparent">
              <h2 className="text-2xl font-bold mb-4">Case Study: ISO 27001 for Payment Processor</h2>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="font-semibold text-white mb-2">Challenge</h3>
                  <p>
                    A mobile payment startup needed ISO 27001 certification to win enterprise contracts. Had no formal ISMS or security policies.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Approach</h3>
                  <p>
                    Performed gap analysis against Annex A controls, designed ISMS framework, developed 45+ policies and procedures, implemented technical controls, and prepared for Stage 1/2 audits.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Outcome</h3>
                  <p>
                    Achieved ISO 27001 certification in 8 months with zero non-conformities. Client secured $5M enterprise contract within 30 days of certification.
                  </p>
                </div>
              </div>
            </GlowCard>
            <div>
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <Accordion items={faqs} />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <GlowCard className="p-6" glow>
                <h3 className="text-xl font-bold mb-4">Start Your Compliance Journey</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Get a free 30-minute consultation to discuss your compliance needs and timeline.
                </p>
                <div className="space-y-3">
                  <Link href="/contact" className="btn-primary w-full flex items-center justify-center gap-2">
                    Book Consultation
                  </Link>
                  <a href="tel:+2638677004321" className="btn-secondary w-full flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Us
                  </a>
                </div>
              </GlowCard>
              <GlowCard className="p-6">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <ShieldCheckIcon className="w-5 h-5 text-brand-teal" />
                  Frameworks We Support
                </h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>ISO 27001 & 27002</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>GDPR & POPIA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>PCI DSS & SOC 2</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>NIST Cybersecurity Framework</span>
                  </li>
                </ul>
              </GlowCard>
              <GlowCard className="p-6">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <DocumentCheckIcon className="w-5 h-5 text-brand-teal" />
                  Deliverables
                </h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li> Gap analysis report</li>
                  <li> Remediation roadmap</li>
                  <li> Policy & procedure templates</li>
                  <li> Risk assessment & treatment</li>
                  <li> Audit readiness support</li>
                  <li> Ongoing compliance monitoring</li>
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
