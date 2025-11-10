"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, Search, Users, Shield, Database, ArrowRight, Phone, CheckCircle } from "lucide-react";
import { ShieldCheckIcon, DocumentCheckIcon } from "@heroicons/react/24/outline";
import GlowCard from "@/components/ui/GlowCard";
import Timeline from "@/components/ui/Timeline";
import Accordion from "@/components/ui/Accordion";
import PillList from "@/components/ui/PillList";
import { CTA } from "@/components/CTA";
import { ServiceStructuredData } from "@/components/ServiceStructuredData";

const services = [
  {
    icon: Globe,
    title: "Strategic Threat Intelligence",
    description: "High-level intelligence on geopolitical threats, emerging attack trends, and industry-specific risk landscapes."
  },
  {
    icon: Search,
    title: "Tactical Threat Intelligence",
    description: "Actionable IOCs, TTPs, and threat actor infrastructure for immediate defensive use."
  },
  {
    icon: Users,
    title: "OSINT Investigations",
    description: "Open-source intelligence gathering for due diligence, insider threat investigations, and supply chain risk."
  },
  {
    icon: Shield,
    title: "Dark Web Monitoring",
    description: "Continuous monitoring of underground forums, marketplaces, and paste sites for data leaks and threats."
  }
];

const methodology = [
  {
    phase: "Phase 1",
    title: "Requirements Gathering",
    duration: "1-2 days",
    description: "Define intelligence requirements (PIRs), threat landscape, key assets, and risk appetite with stakeholders."
  },
  {
    phase: "Phase 2",
    title: "Collection & Analysis",
    duration: "Ongoing",
    description: "Gather data from OSINT, dark web sources, threat feeds, and industry sharing communities. Analyze for relevance and accuracy."
  },
  {
    phase: "Phase 3",
    title: "Dissemination & Action",
    duration: "Daily/Weekly",
    description: "Deliver actionable intelligence reports, IOC feeds, and strategic briefings. Support defensive implementation."
  }
];

const frameworks = ["MITRE ATT&CK", "Diamond Model", "Kill Chain", "STIX/TAXII"];

const faqs = [
  {
    question: "What is the difference between strategic and tactical threat intelligence?",
    answer: "Strategic intelligence focuses on high-level trends, geopolitical risks, and long-term threat landscapes for executive decision-making. Tactical intelligence provides actionable IOCs, TTPs, and immediate defensive guidance for security operations teams."
  },
  {
    question: "How fresh is your threat intelligence data?",
    answer: "Tactical IOC feeds are updated daily. Dark web monitoring is continuous with real-time alerts for critical findings. Strategic reports are delivered monthly with ad-hoc updates for major incidents."
  },
  {
    question: "Do you monitor for our brand on the dark web?",
    answer: "Yes. We monitor underground forums, paste sites, and marketplaces for mentions of your brand, leaked credentials, executive targeting, and data dumps."
  },
  {
    question: "Can you integrate with our SIEM/SOAR platform?",
    answer: "Absolutely. We provide IOCs in STIX/TAXII format compatible with most SIEM/SOAR platforms including Splunk, QRadar, Sentinel, and XSOAR."
  },
  {
    question: "What regions do you cover?",
    answer: "We specialize in African and European threat landscapes, with visibility into global APT groups, ransomware operators, and nation-state actors targeting these regions."
  }
];

export default function ThreatIntelligencePage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop"
            alt="Threat Intelligence"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/70 to-brand-navy" />
        </div>
        <div className="relative z-10 section-container text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal text-sm font-semibold mb-6">
            Threat Intelligence
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Threat Intelligence & OSINT
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Strategic and tactical intelligence to stay ahead of emerging threats and adversaries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Subscribe to Intel Feed
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
              <h2 className="text-3xl font-bold mb-6">Intelligence Services</h2>
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
              <h3 className="text-2xl font-bold mb-4">Intelligence Frameworks</h3>
              <PillList pills={frameworks} variant="secondary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Intelligence Cycle</h2>
              <p className="text-gray-300 mb-8">
                We follow the intelligence cycle: Requirements  Collection  Analysis  Dissemination  Feedback.
              </p>
              <Timeline items={methodology} />
            </div>
            <GlowCard className="p-8 bg-gradient-to-br from-brand-teal/5 to-transparent">
              <h2 className="text-2xl font-bold mb-4">Case Study: Executive Protection via OSINT</h2>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="font-semibold text-white mb-2">Challenge</h3>
                  <p>
                    A mining company CEO was receiving targeted threats. Client needed to assess digital footprint and identify threat actors.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Approach</h3>
                  <p>
                    We performed comprehensive OSINT on the executive, identified exposed personal information, monitored dark web forums for targeting discussions, and profiled threat actors.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Outcome</h3>
                  <p>
                    Identified coordinated harassment campaign by activist group. Implemented digital hygiene measures, removed exposed PII, and provided ongoing monitoring. No physical incidents occurred.
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
                <h3 className="text-xl font-bold mb-4">Start Your Intel Subscription</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Get daily IOC feeds, monthly strategic reports, and 24/7 dark web monitoring.
                </p>
                <div className="space-y-3">
                  <Link href="/contact" className="btn-primary w-full flex items-center justify-center gap-2">
                    Subscribe Now
                  </Link>
                  <a href="tel:+2638677004321" className="btn-secondary w-full flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Discuss Needs
                  </a>
                </div>
              </GlowCard>
              <GlowCard className="p-6">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <ShieldCheckIcon className="w-5 h-5 text-brand-teal" />
                  Intelligence Sources
                </h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Dark web forums & marketplaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>OSINT & social media</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Threat sharing communities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Proprietary honeypots & sensors</span>
                  </li>
                </ul>
              </GlowCard>
              <GlowCard className="p-6">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <DocumentCheckIcon className="w-5 h-5 text-brand-teal" />
                  Deliverables
                </h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li> Daily IOC feeds (STIX/TAXII)</li>
                  <li> Monthly strategic reports</li>
                  <li> Real-time dark web alerts</li>
                  <li> APT group profiles</li>
                  <li> Executive threat briefings</li>
                  <li> MITRE ATT&CK mappings</li>
                </ul>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>
      <CTA />
      <ServiceStructuredData slug="threat-intelligence" />
    </>
  );
}
