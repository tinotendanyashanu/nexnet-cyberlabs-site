"use client";

import Image from "next/image";
import Link from "next/link";
import { Target, Bug, Cloud, Code, Wifi, Lock, CheckCircle, ArrowRight, Phone } from "lucide-react";
import { ShieldCheckIcon, DocumentCheckIcon } from "@heroicons/react/24/outline";
import GlowCard from "@/components/ui/GlowCard";
import Timeline from "@/components/ui/Timeline";
import Accordion from "@/components/ui/Accordion";
import PillList from "@/components/ui/PillList";
import { CTA } from "@/components/CTA";
import { ServiceStructuredData } from "@/components/ServiceStructuredData";

const assessmentTypes = [
  {
    icon: Wifi,
    title: "Network Penetration Testing",
    description: "External and internal network security testing to identify misconfigurations, exposed services, and lateral movement paths.",
    duration: "1-3 weeks"
  },
  {
    icon: Code,
    title: "Web Application Testing",
    description: "Comprehensive security testing of web apps, APIs, and mobile backends against OWASP Top 10 and business logic flaws.",
    duration: "2-4 weeks"
  },
  {
    icon: Cloud,
    title: "Cloud Security Assessment",
    description: "AWS, Azure, and GCP security posture evaluation covering IAM, storage, compute, and network configurations.",
    duration: "1-2 weeks"
  },
  {
    icon: Target,
    title: "Red Team Operations",
    description: "Full-spectrum adversary simulation to test detection, response, and organizational resilience.",
    duration: "3-6 weeks"
  }
];

const methodology = [
  {
    phase: "Phase 1",
    title: "Scoping & Reconnaissance",
    duration: "1-3 days",
    description: "Define assessment objectives, target scope, rules of engagement, and perform passive reconnaissance including OSINT gathering."
  },
  {
    phase: "Phase 2",
    title: "Active Testing & Exploitation",
    duration: "1-4 weeks",
    description: "Execute vulnerability scanning, manual testing, exploit development, and privilege escalation attempts based on scope."
  },
  {
    phase: "Phase 3",
    title: "Reporting & Debrief",
    duration: "3-5 days",
    description: "Comprehensive report with CVSS scoring, proof-of-concepts, remediation recommendations, and executive debrief."
  }
];

const frameworks = ["OWASP Top 10", "PTES", "NIST 800-115", "OSSTMM"];

const faqs = [
  {
    question: "What is the difference between vulnerability scanning and penetration testing?",
    answer: "Vulnerability scanning is automated identification of known vulnerabilities. Penetration testing involves manual exploitation attempts, chaining vulnerabilities, and business logic testing by skilled ethical hackers."
  },
  {
    question: "Will testing disrupt our operations?",
    answer: "We coordinate testing windows with your team to minimize business impact. Production testing can be done during maintenance windows or against staging environments."
  },
  {
    question: "Do you follow industry-standard methodologies?",
    answer: "Yes. We follow PTES (Penetration Testing Execution Standard), OWASP guidelines, and NIST 800-115. All findings include CVSS v3 scoring."
  },
  {
    question: "Can you test mobile applications?",
    answer: "Absolutely. We perform static and dynamic analysis of iOS and Android apps, including API testing, insecure storage, and reverse engineering."
  },
  {
    question: "What happens after you find vulnerabilities?",
    answer: "Critical findings are reported immediately. We provide detailed remediation guidance and offer retesting services to validate fixes."
  }
];

export default function SecurityAssessmentsPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop"
            alt="Security Assessments"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/70 to-brand-navy" />
        </div>
        <div className="relative z-10 section-container text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal text-sm font-semibold mb-6">
            Penetration Testing
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Security Assessments & Penetration Testing
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ethical hacking and red team operations to identify vulnerabilities before attackers do.
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
              <h2 className="text-3xl font-bold mb-6">Assessment Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {assessmentTypes.map((type, idx) => (
                  <GlowCard key={idx} className="p-6">
                    <type.icon className="w-10 h-10 text-brand-teal mb-4" />
                    <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{type.description}</p>
                    <div className="text-xs text-brand-teal">Duration: {type.duration}</div>
                  </GlowCard>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Testing Frameworks</h3>
              <PillList pills={frameworks} variant="secondary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Testing Methodology</h2>
              <p className="text-gray-300 mb-8">
                We follow PTES (Penetration Testing Execution Standard) and OWASP guidelines for all engagements.
              </p>
              <Timeline items={methodology} />
            </div>
            <GlowCard className="p-8 bg-gradient-to-br from-brand-teal/5 to-transparent">
              <h2 className="text-2xl font-bold mb-4">Case Study: Fintech API Security Assessment</h2>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="font-semibold text-white mb-2">Challenge</h3>
                  <p>
                    A fintech startup needed pre-launch security assessment of their mobile banking API handling transactions for 100K+ users.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Approach</h3>
                  <p>
                    We performed OWASP API Security Top 10 testing, business logic abuse scenarios, and rate limiting bypasses. Found critical authentication bypass and mass assignment vulnerabilities.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Outcome</h3>
                  <p>
                    All critical issues remediated before launch. Client avoided potential data breach affecting 100K+ customer accounts.
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
                <h3 className="text-xl font-bold mb-4">Ready to Test Your Defenses?</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Our ethical hackers are ready to help you identify vulnerabilities before attackers do.
                </p>
                <div className="space-y-3">
                  <Link href="/contact" className="btn-primary w-full flex items-center justify-center gap-2">
                    Request Quote
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
                  What We Test
                </h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Web & mobile applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Network infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Cloud environments (AWS/Azure/GCP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>APIs & microservices</span>
                  </li>
                </ul>
              </GlowCard>
              <GlowCard className="p-6">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <DocumentCheckIcon className="w-5 h-5 text-brand-teal" />
                  Deliverables
                </h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li> Comprehensive assessment report</li>
                  <li> CVSS v3 risk scoring</li>
                  <li> Proof-of-concept exploits</li>
                  <li> Remediation guidance</li>
                  <li> Executive summary</li>
                  <li> Retest after fixes (optional)</li>
                </ul>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>
      <CTA />
      <ServiceStructuredData slug="assessments" />
    </>
  );
}
