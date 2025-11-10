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
    title: "Asset & Threat Identification",
    duration: "Week 1",
    description: "Comprehensive inventory of digital assets with threat modeling and attack surface analysis across all business units."
  },
  {
    phase: "Phase 2",
    title: "Control Effectiveness Review",
    duration: "Week 2-3",
    description: "Evaluation of existing security controls against industry standards, best practices, and regulatory requirements."
  },
  {
    phase: "Phase 3",
    title: "Risk Scoring & Prioritization",
    duration: "Week 3-4",
    description: "Quantitative risk assessment with scoring dashboard using FAIR methodology for executive decision-making."
  },
  {
    phase: "Phase 4",
    title: "Strategic Roadmap",
    duration: "Week 4-5",
    description: "Detailed mitigation roadmap with timelines, resource requirements, cost estimates, and success metrics."
  }
];

const tools = [
  "FAIR",
  "NIST CSF",
  "PowerBI",
  "ServiceNow",
  "Qualys",
  "Tenable",
  "RiskLens",
  "LogicGate"
];

const frameworks = ["NIST RMF", "FAIR", "ISO 27005", "OCTAVE"];

const faqs = [
  {
    question: "What is included in a cyber risk assessment?",
    answer: "Our assessments include asset inventory, threat modeling, control evaluation, vulnerability scanning, risk scoring using FAIR methodology, and a prioritized remediation roadmap with cost estimates."
  },
  {
    question: "How is risk quantified?",
    answer: "We use the FAIR (Factor Analysis of Information Risk) methodology to quantify risk in financial terms, providing clear ROI calculations for security investments."
  },
  {
    question: "Can you assess third-party vendors?",
    answer: "Yes. We provide third-party risk assessments including vendor questionnaires, security posture reviews, and ongoing monitoring of supplier cyber risk."
  },
  {
    question: "How often should we conduct risk assessments?",
    answer: "We recommend annual comprehensive assessments with quarterly updates for high-risk areas. Major changes (mergers, new systems, regulatory changes) should trigger ad-hoc assessments."
  },
  {
    question: "Do you provide executive dashboards?",
    answer: "Yes. Every assessment includes an interactive PowerBI dashboard with risk scoring, trend analysis, and board-ready visualizations updated in real-time."
  }
];

export default function RiskAssessmentPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop"
            alt="Risk Assessment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/70 to-brand-navy" />
        </div>
        <div className="relative z-10 section-container text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal text-sm font-semibold mb-6">
            Risk Management
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Cyber Risk Assessment & Security Audits
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Know your exposure before it becomes an incident. Organization-wide cyber risk audits to identify vulnerabilities and recommend resilience strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Request Assessment
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
                <div className="text-4xl font-bold text-brand-teal mb-2">150+</div>
                <div className="text-gray-400">Risk Assessments</div>
              </GlowCard>
              <GlowCard className="text-center p-6">
                <div className="text-4xl font-bold text-brand-teal mb-2">40%</div>
                <div className="text-gray-400">Avg Risk Reduction</div>
              </GlowCard>
              <GlowCard className="text-center p-6">
                <div className="text-4xl font-bold text-brand-teal mb-2">8+</div>
                <div className="text-gray-400">Client Sectors</div>
              </GlowCard>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Quantify and Manage Cyber Risk</h2>
              <div className="prose prose-invert max-w-none space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Understanding your cyber risk exposure is essential for making informed security investment decisions. 
                  Our risk assessments provide executive-ready quantification of threats, vulnerabilities, and potential 
                  business impact using the FAIR methodology.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We evaluate your entire attack surface, assess control effectiveness, and deliver a prioritized 
                  mitigation roadmap with clear ROI calculations and resource requirements.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Risk Frameworks</h3>
              <PillList pills={frameworks} variant="secondary" />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Assessment Methodology</h2>
              <Timeline items={methodology} />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Risk Analysis Tools</h2>
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
                <h3 className="text-xl font-bold mb-4">Assess Your Risk</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Schedule a comprehensive cyber risk assessment to understand your exposure and prioritize security investments.
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
                    <span>Executive-ready risk scoring dashboard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Prioritized mitigation roadmap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Compliance alignment for audits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Clear ROI for security investments</span>
                  </li>
                </ul>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <ServiceStructuredData slug="risk-assessment" />
    </>
  );
}
