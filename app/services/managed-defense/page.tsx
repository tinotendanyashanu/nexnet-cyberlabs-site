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
  { phase: "24/7", title: "Continuous Log Monitoring", duration: "Always-On", description: "24/7 monitoring of security logs from endpoints, network devices, cloud platforms, and applications using enterprise SIEM." },
  { phase: "Real-time", title: "Threat Detection & Alerting", duration: "Instant", description: "Real-time threat detection using SIEM, EDR, and threat intelligence with immediate stakeholder alerting via SMS, email, Slack." },
  { phase: "On-Call", title: "24/7 Advisory Hotline", duration: "As Needed", description: "Direct access to security analysts for incident triage, guidance, and emergency response coordination anytime." },
  { phase: "Monthly", title: "Risk Reporting", duration: "Monthly", description: "Executive-ready monthly reports on security posture, threat landscape, and risk trends with board-ready visualizations." }
];

const tools = ["ELK Stack", "Wazuh", "Splunk", "MISP", "SentinelOne", "CrowdStrike", "Velociraptor", "TheHive"];
const frameworks = ["NIST CSF", "MITRE ATT&CK", "ISO 27001", "SOC 2"];

const faqs = [
  { question: "What is included in managed defense?", answer: "24/7 SOC monitoring, threat detection and response, log aggregation and analysis, monthly risk reporting, on-call incident support, and quarterly security reviews." },
  { question: "How quickly do you detect threats?", answer: "Our mean time to detect (MTTD) is under 15 minutes for high-severity threats. Critical incidents trigger immediate phone/SMS alerts to your designated contacts." },
  { question: "Can you integrate with our existing tools?", answer: "Yes. We support integration with most SIEM, EDR, firewalls, and cloud platforms. We'll work with your existing stack or deploy our recommended tooling." },
  { question: "What is the pricing model?", answer: "Pricing is based on number of monitored assets (endpoints, servers, cloud accounts). Most clients pay $5,000-$15,000/month depending on environment size." },
  { question: "Do you provide incident response?", answer: "Yes. Managed defense includes basic incident triage and containment. For complex incidents requiring forensics, we engage our DFIR team (additional cost applies)." }
];

export default function ManagedDefensePage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop" alt="Managed Defense" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/70 to-brand-navy" />
        </div>
        <div className="relative z-10 section-container text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal text-sm font-semibold mb-6">24/7 SOC Services</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Managed Defense & Monitoring</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Continuous vigilance for continuous threats. Subscription-based managed defense with 24/7 monitoring, detection, and response.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">Get Protected<ArrowRight className="w-5 h-5" /></Link>
            <a href="tel:+2638677004321" className="btn-secondary inline-flex items-center gap-2"><Phone className="w-5 h-5" />Speak to SOC</a>
          </div>
        </div>
      </section>
      <section className="section-container py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="grid sm:grid-cols-3 gap-6">
              <GlowCard className="text-center p-6"><div className="text-4xl font-bold text-brand-teal mb-2">45+</div><div className="text-gray-400">Clients Monitored</div></GlowCard>
              <GlowCard className="text-center p-6"><div className="text-4xl font-bold text-brand-teal mb-2">{'<'}15min</div><div className="text-gray-400">Mean Time to Detect</div></GlowCard>
              <GlowCard className="text-center p-6"><div className="text-4xl font-bold text-brand-teal mb-2">{'<'}1h</div><div className="text-gray-400">Threat Containment</div></GlowCard>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">24/7 Security Operations Center</h2>
              <p className="text-gray-300 leading-relaxed">Building an internal SOC is expensive and time-consuming. Our managed defense service provides enterprise-grade monitoring, threat detection, and incident response at a predictable monthly cost.</p>
            </div>
            <div><h3 className="text-2xl font-bold mb-4">SOC Frameworks</h3><PillList pills={frameworks} variant="secondary" /></div>
            <div><h2 className="text-3xl font-bold mb-6">Managed Services</h2><Timeline items={methodology} /></div>
            <div>
              <h2 className="text-3xl font-bold mb-6">SOC Technology Stack</h2>
              <div className="grid sm:grid-cols-2 gap-4">{tools.map((tool, idx) => (<GlowCard key={idx} className="p-4 flex items-center gap-3"><ServerIcon className="w-6 h-6 text-brand-teal flex-shrink-0" /><div className="font-semibold">{tool}</div></GlowCard>))}</div>
            </div>
            <div><h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2><Accordion items={faqs} /></div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <GlowCard className="p-6" glow><h3 className="text-xl font-bold mb-4">Get 24/7 Protection</h3><p className="text-gray-300 mb-6 text-sm">Subscribe to managed defense for continuous monitoring and expert incident response.</p><div className="space-y-3"><Link href="/contact" className="btn-primary w-full flex items-center justify-center gap-2">Get Quote</Link><a href="tel:+2638677004321" className="btn-secondary w-full flex items-center justify-center gap-2"><Phone className="w-5 h-5" />Call Now</a></div></GlowCard>
              <GlowCard className="p-6"><h4 className="font-bold mb-3 flex items-center gap-2"><ShieldCheckIcon className="w-5 h-5 text-brand-teal" />Key Outcomes</h4><ul className="space-y-2 text-sm text-gray-300"><li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" /><span>24/7 security monitoring</span></li><li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" /><span>Rapid threat response</span></li><li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" /><span>Expert analyst support</span></li><li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" /><span>Predictable monthly cost</span></li></ul></GlowCard>
            </div>
          </div>
        </div>
      </section>
      <CTA />
      <ServiceStructuredData name="Managed Defense & Monitoring" description="Subscription-based managed defense with 24/7 monitoring, detection, and response." provider="NexNet CyberLabs" areaServed={["Zimbabwe", "Poland", "Africa", "European Union"]} availableChannel={{ serviceUrl: "https://nexnet-cyberlabs.com/services/managed-defense", servicePhone: "+263-86-7700-4321" }} />
    </>
  );
}
