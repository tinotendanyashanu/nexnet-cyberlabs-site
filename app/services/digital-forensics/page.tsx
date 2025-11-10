"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import { ShieldCheckIcon, DocumentCheckIcon, ServerIcon } from "@heroicons/react/24/outline";
import GlowCard from "@/components/ui/GlowCard";
import Timeline from "@/components/ui/Timeline";
import Accordion from "@/components/ui/Accordion";
import PillList from "@/components/ui/PillList";
import { CTA } from "@/components/CTA";
import { ServiceStructuredData } from "@/components/ServiceStructuredData";

const methodology = [
  {
    phase: "Phase 1",
    title: "Detection & Triage",
    duration: "0-2 hours",
    description: "Initial alert assessment, severity classification, stakeholder notification, evidence preservation, and incident response team activation."
  },
  {
    phase: "Phase 2",
    title: "Containment",
    duration: "2-12 hours",
    description: "Isolate affected systems, deploy EDR agents, implement network segmentation, and preserve volatile memory and disk images."
  },
  {
    phase: "Phase 3",
    title: "Investigation",
    duration: "12-72 hours",
    description: "Timeline reconstruction, malware analysis, threat actor TTPs mapping to MITRE ATT&CK, and comprehensive impact assessment."
  },
  {
    phase: "Phase 4",
    title: "Remediation & Recovery",
    duration: "72+ hours",
    description: "Threat eradication, system hardening, secure restoration, post-incident monitoring, and executive debrief with lessons learned."
  }
];

const tools = [
  "Velociraptor",
  "Autopsy / Sleuth Kit",
  "Volatility",
  "KAPE",
  "FTK Imager",
  "Wireshark / Zeek",
  "Splunk / ELK",
  "IDA Pro / Ghidra"
];

const frameworks = ["NIST CSF", "MITRE ATT&CK", "ISO 27035", "SANS DFIR"];

const faqs = [
  {
    question: "What is your incident response time?",
    answer: "Our 24/7 hotline guarantees initial response within 30 minutes. On-site or remote engagement begins within 2-4 hours depending on your location and the severity of the incident."
  },
  {
    question: "Do you provide court-admissible evidence?",
    answer: "Yes. All evidence is collected, preserved, and documented following strict chain of custody procedures that meet legal standards for admissibility in African and EU courts."
  },
  {
    question: "Can you handle multi-jurisdiction incidents?",
    answer: "Absolutely. With teams in Harare and Warsaw, we have experience managing cross-border incidents involving multiple African and EU jurisdictions, including coordination with local law enforcement."
  },
  {
    question: "What types of incidents do you handle?",
    answer: "We respond to ransomware attacks, data breaches, insider threats, business email compromise, APT intrusions, malware infections, and any security incident requiring forensic investigation."
  },
  {
    question: "How do you ensure confidentiality?",
    answer: "All investigations are conducted under strict NDA with secure evidence handling, encrypted communications, and need-to-know access controls. We never disclose client identities or case details."
  },
  {
    question: "Do you provide expert witness testimony?",
    answer: "Yes. Our senior forensic analysts have testified in courts across Africa and Europe. We provide comprehensive expert witness services including report preparation and courtroom testimony."
  }
];

export default function DigitalForensicsPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop"
            alt="Digital Forensics"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/70 to-brand-navy" />
        </div>
        <div className="relative z-10 section-container text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal text-sm font-semibold mb-6">
            DFIR Services
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Digital Forensics & Incident Response
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Enterprise-grade DFIR services with 24/7 availability, rapid containment, and court-admissible evidence handling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Report Incident
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+2638677004321" className="btn-secondary inline-flex items-center gap-2">
              <Phone className="w-5 h-5" />
              24/7 Hotline
            </a>
          </div>
        </div>
      </section>
      <section className="section-container py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="grid sm:grid-cols-3 gap-6">
              <GlowCard className="text-center p-6">
                <div className="text-4xl font-bold text-brand-teal mb-2">30min</div>
                <div className="text-gray-400">Initial Response</div>
              </GlowCard>
              <GlowCard className="text-center p-6">
                <div className="text-4xl font-bold text-brand-teal mb-2">24/7</div>
                <div className="text-gray-400">Availability</div>
              </GlowCard>
              <GlowCard className="text-center p-6">
                <div className="text-4xl font-bold text-brand-teal mb-2">200+</div>
                <div className="text-gray-400">Incidents Handled</div>
              </GlowCard>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">What is DFIR?</h2>
              <div className="prose prose-invert max-w-none space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Digital Forensics and Incident Response (DFIR) combines two critical cybersecurity disciplines: 
                  the scientific collection and analysis of digital evidence (forensics) with the tactical containment 
                  and remediation of active security incidents (incident response).
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Industry Frameworks</h3>
              <PillList pills={frameworks} variant="secondary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">DFIR Methodology</h2>
              <Timeline items={methodology} />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Forensic Tooling</h2>
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
                <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Our incident response team is available 24/7/365 to handle active security incidents.
                </p>
                <div className="space-y-3">
                  <a href="tel:+2638677004321" className="btn-primary w-full flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Hotline
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
                    <span>Court-admissible evidence collection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Malware reverse engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Memory & disk forensics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Expert witness testimony</span>
                  </li>
                </ul>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>
      <CTA />
      <ServiceStructuredData
        name="Digital Forensics & Incident Response"
        description="Enterprise-grade DFIR services with 24/7 availability, rapid containment, and court-admissible evidence handling."
        provider="NexNet CyberLabs"
        areaServed={["Zimbabwe", "Poland", "Africa", "European Union"]}
        availableChannel={{
          serviceUrl: "https://nexnet-cyberlabs.com/services/digital-forensics",
          servicePhone: "+263-86-7700-4321"
        }}
      />
    </>
  );
}
