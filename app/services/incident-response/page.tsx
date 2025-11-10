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
    title: "24/7 Breach Containment",
    duration: "0-2 hours",
    description: "Rapid containment and triage using proven response frameworks (NIST SP 800-61, ISO/IEC 27035). Immediate threat assessment and stakeholder communication."
  },
  {
    phase: "Phase 2",
    title: "Malware & Ransomware Analysis",
    duration: "2-12 hours",
    description: "In-depth analysis of malicious code and ransomware to understand attack vectors, impact, and threat actor TTPs mapped to MITRE ATT&CK."
  },
  {
    phase: "Phase 3",
    title: "Root Cause & Impact Assessment",
    duration: "12-48 hours",
    description: "Comprehensive investigation to identify how the breach occurred, what was affected, and full scope of compromise across your environment."
  },
  {
    phase: "Phase 4",
    title: "Post-Incident Hardening",
    duration: "48+ hours",
    description: "Evidence collection, documentation for legal/regulatory requirements, staff guidance, and implementation of controls to prevent recurrence."
  }
];

const tools = [
  "Velociraptor",
  "Splunk",
  "MISP",
  "Sysmon",
  "SentinelOne",
  "TheHive",
  "Elastic SIEM",
  "Volatility"
];

const frameworks = ["NIST SP 800-61", "ISO/IEC 27035", "MITRE ATT&CK", "SANS IR"];

const faqs = [
  {
    question: "What is your incident response SLA?",
    answer: "We guarantee initial response within 2 hours of engagement. Remote triage begins immediately, with containment actions typically initiated within the first 6 hours depending on incident complexity."
  },
  {
    question: "Do you provide 24/7 incident response?",
    answer: "Yes. Our Security Operations Center operates 24/7/365 with dedicated incident response teams in Harare and Warsaw ready to respond to breaches at any time."
  },
  {
    question: "What types of incidents do you respond to?",
    answer: "We handle all types of security incidents including ransomware attacks, data breaches, business email compromise, APT intrusions, insider threats, DDoS attacks, and malware infections."
  },
  {
    question: "How do you handle evidence for legal proceedings?",
    answer: "All incident response engagements include forensic-grade evidence collection with full chain of custody documentation suitable for legal, regulatory, or insurance requirements."
  },
  {
    question: "Can you work with our existing security team?",
    answer: "Absolutely. We seamlessly integrate with your internal teams, providing expertise augmentation or full incident command depending on your needs. We can also purple team with your SOC."
  }
];

export default function IncidentResponsePage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop"
            alt="Incident Response"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/70 to-brand-navy" />
        </div>
        <div className="relative z-10 section-container text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal text-sm font-semibold mb-6">
            24/7 Response Services
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Incident Response & Breach Management
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            When seconds matter, we restore control. 24/7 breach containment and triage with rapid response to minimize downtime and data loss.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Report Breach
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+2638677004321" className="btn-secondary inline-flex items-center gap-2">
              <Phone className="w-5 h-5" />
              24/7 Emergency Hotline
            </a>
          </div>
        </div>
      </section>

      <section className="section-container py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="grid sm:grid-cols-3 gap-6">
              <GlowCard className="text-center p-6">
                <div className="text-4xl font-bold text-brand-teal mb-2">{'<'}2h</div>
                <div className="text-gray-400">Response Time</div>
              </GlowCard>
              <GlowCard className="text-center p-6">
                <div className="text-4xl font-bold text-brand-teal mb-2">{'<'}6h</div>
                <div className="text-gray-400">Containment Window</div>
              </GlowCard>
              <GlowCard className="text-center p-6">
                <div className="text-4xl font-bold text-brand-teal mb-2">99%</div>
                <div className="text-gray-400">Success Rate</div>
              </GlowCard>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">When Every Second Counts</h2>
              <div className="prose prose-invert max-w-none space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Security breaches don't wait for business hours. Our 24/7 incident response team provides 
                  immediate containment, expert analysis, and complete remediation following industry-leading 
                  frameworks like NIST SP 800-61 and ISO/IEC 27035.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  From ransomware attacks to data breaches, our experienced responders minimize operational 
                  downtime, preserve evidence for legal proceedings, and strengthen your defenses against 
                  future attacks.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Industry Frameworks</h3>
              <PillList pills={frameworks} variant="secondary" />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Our Response Methodology</h2>
              <Timeline items={methodology} />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Response Tooling</h2>
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
                <h3 className="text-xl font-bold mb-4">Active Breach?</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Call our emergency hotline immediately. Our incident response team is standing by 24/7/365.
                </p>
                <div className="space-y-3">
                  <a href="tel:+2638677004321" className="btn-primary w-full flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Emergency Hotline
                  </a>
                  <Link href="/contact" className="btn-secondary w-full flex items-center justify-center">
                    Report Incident
                  </Link>
                </div>
              </GlowCard>

              <GlowCard className="p-6">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <ShieldCheckIcon className="w-5 h-5 text-brand-teal" />
                  Key Capabilities
                </h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Rapid containment within 6 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Complete documentation for legal/regulatory needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Strengthened defenses to prevent recurrence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Malware and ransomware analysis</span>
                  </li>
                </ul>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <ServiceStructuredData slug="incident-response" />
    </>
  );
}
