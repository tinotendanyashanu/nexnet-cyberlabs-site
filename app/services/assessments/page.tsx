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
    title: "Web & API Testing",
    duration: "Week 1-2",
    description: "Comprehensive penetration testing of web applications and APIs following OWASP Top 10 methodology with authentication bypass and authorization testing."
  },
  {
    phase: "Phase 2",
    title: "Cloud & Infrastructure Assessment",
    duration: "Week 2-3",
    description: "Security assessment of AWS, Azure, GCP environments and hybrid infrastructure configurations including IAM, network segmentation, and misconfigurations."
  },
  {
    phase: "Phase 3",
    title: "Attack Simulations",
    duration: "Week 3-4",
    description: "External and internal network penetration testing simulating real-world attack scenarios including lateral movement and privilege escalation."
  },
  {
    phase: "Phase 4",
    title: "Mitigation Planning",
    duration: "Week 4-5",
    description: "Detailed remediation guidance prioritized by risk with re-testing to verify fixes and comprehensive executive reporting."
  }
];

const tools = [
  "Burp Suite",
  "Nessus",
  "Metasploit",
  "Nmap",
  "OWASP ZAP",
  "BloodHound",
  "Cobalt Strike",
  "Nikto"
];

const frameworks = ["OWASP Top 10", "PTES", "OSSTMM", "NIST SP 800-115"];

const faqs = [
  {
    question: "What types of penetration tests do you offer?",
    answer: "We offer web application testing, API security testing, cloud infrastructure assessments, network penetration testing (internal/external), mobile app testing, and wireless security assessments."
  },
  {
    question: "How long does a penetration test take?",
    answer: "Most web application assessments take 1-2 weeks. Infrastructure penetration tests typically require 2-3 weeks. The timeline depends on scope, complexity, and environment size."
  },
  {
    question: "Will testing disrupt our operations?",
    answer: "We work closely with your team to minimize disruption. Testing is typically performed in staging environments or during off-peak hours with careful coordination and rollback procedures."
  },
  {
    question: "Do you provide remediation support?",
    answer: "Yes. All assessments include detailed remediation guidance with code examples and configuration recommendations. We also offer re-testing to verify fixes at no additional cost."
  },
  {
    question: "Can you test our cloud infrastructure?",
    answer: "Absolutely. We specialize in AWS, Azure, and GCP security assessments including IAM misconfigurations, storage permissions, network segmentation, and container security."
  }
];

export default function AssessmentsPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop"
            alt="Penetration Testing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/70 to-brand-navy" />
        </div>
        <div className="relative z-10 section-container text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal text-sm font-semibold mb-6">
            Security Testing
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Penetration Testing & Vulnerability Assessment
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Find weaknesses before attackers do. Ethical hackers perform controlled simulations to identify and validate vulnerabilities across systems, networks, and applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Request Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+2638677004321" className="btn-secondary inline-flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Speak to Team
            </a>
          </div>
        </div>
      </section>

      <section className="section-container py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="grid sm:grid-cols-3 gap-6">
              <GlowCard className="text-center p-6">
                <div className="text-4xl font-bold text-brand-teal mb-2">90+</div>
                <div className="text-gray-400">Assessments/Year</div>
              </GlowCard>
              <GlowCard className="text-center p-6">
                <div className="text-4xl font-bold text-brand-teal mb-2">100%</div>
                <div className="text-gray-400">Findings Validated</div>
              </GlowCard>
              <GlowCard className="text-center p-6">
                <div className="text-4xl font-bold text-brand-teal mb-2">85%</div>
                <div className="text-gray-400">Retest Success</div>
              </GlowCard>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Discover Vulnerabilities Before Attackers Do</h2>
              <div className="prose prose-invert max-w-none space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Our ethical hackers use the same tools and techniques as real attackers to identify security 
                  weaknesses in your applications, networks, and cloud infrastructure. We follow industry-standard 
                  methodologies like OWASP Top 10 and PTES to ensure comprehensive coverage.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Every assessment includes detailed findings with proof-of-concept exploits, business impact analysis, 
                  and actionable remediation guidance prioritized by risk. We retest at no additional cost to verify fixes.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Testing Standards</h3>
              <PillList pills={frameworks} variant="secondary" />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Assessment Methodology</h2>
              <Timeline items={methodology} />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Testing Tools</h2>
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
                <h3 className="text-xl font-bold mb-4">Ready to Test?</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Schedule a penetration test or vulnerability assessment to identify security weaknesses.
                </p>
                <div className="space-y-3">
                  <Link href="/contact" className="btn-primary w-full flex items-center justify-center gap-2">
                    Request Quote
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
                    <span>Comprehensive vulnerability identification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Actionable remediation roadmap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Third-party assurance reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Free retesting to verify fixes</span>
                  </li>
                </ul>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <ServiceStructuredData
        name="Penetration Testing & Vulnerability Assessment"
        description="Ethical hacking to identify and validate vulnerabilities across systems, networks, and applications."
        provider="NexNet CyberLabs"
        areaServed={["Zimbabwe", "Poland", "Africa", "European Union"]}
        availableChannel={{
          serviceUrl: "https://nexnet-cyberlabs.com/services/assessments",
          servicePhone: "+263-86-7700-4321"
        }}
      />
    </>
  );
}
