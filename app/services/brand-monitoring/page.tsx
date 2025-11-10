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
    title: "Executive Exposure Scanning",
    duration: "24/7 Continuous",
    description: "Continuous monitoring of executive digital footprints for PII exposure, credential leaks, and impersonation risks across surface, deep, and dark web."
  },
  {
    phase: "Phase 2",
    title: "Data Breach Alerting",
    duration: "Real-time",
    description: "Real-time alerts when organization credentials, customer data, or confidential information appears in data breaches or dark web markets."
  },
  {
    phase: "Phase 3",
    title: "Domain Impersonation Detection",
    duration: "Daily Scans",
    description: "Monitor for typosquatting domains, phishing sites, fake social media accounts, and brand impersonation attempts targeting your organization."
  },
  {
    phase: "Phase 4",
    title: "Takedown Support",
    duration: "As needed",
    description: "Coordinated takedown of malicious domains, fake accounts, leaked data, and phishing sites working with registrars, hosting providers, and law enforcement."
  }
];

const tools = [
  "HaveIBeenPwned",
  "DomainTools",
  "IntelX",
  "SpiderFoot",
  "Shodan",
  "Recorded Future",
  "ThreatConnect",
  "Flare"
];

const frameworks = ["OSINT", "Dark Web Intelligence", "Brand Protection"];

const faqs = [
  {
    question: "What is brand monitoring?",
    answer: "Brand monitoring tracks your organization's digital presence across the internet, dark web, and data breach markets to identify credential leaks, impersonation attacks, and reputation threats."
  },
  {
    question: "How quickly do you detect threats?",
    answer: "Our monitoring runs 24/7 with real-time alerting. Critical threats (credential leaks, active phishing sites) trigger immediate notifications via SMS, email, and Slack."
  },
  {
    question: "Can you take down malicious sites?",
    answer: "Yes. We coordinate takedowns with domain registrars, hosting providers, and law enforcement. Our success rate for domain takedowns is 95% within 48 hours of identification."
  },
  {
    question: "Do you monitor social media?",
    answer: "Yes. We monitor for fake executive accounts, brand impersonation, and malicious campaigns targeting your organization across major social media platforms."
  },
  {
    question: "What happens if our data is leaked?",
    answer: "We immediately alert you with details on what was exposed, where it appeared, and recommended actions. We assist with takedown requests and can support credential resets."
  }
];

export default function BrandMonitoringPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&h=1080&fit=crop"
            alt="Brand Monitoring"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/70 to-brand-navy" />
        </div>
        <div className="relative z-10 section-container text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal text-sm font-semibold mb-6">
            Digital Protection
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Brand & Digital Footprint Monitoring
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Protect your name, data, and online identity. Monitor internet, dark web, and data leak markets for exposed credentials and confidential information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Start Monitoring
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
                <div className="text-4xl font-bold text-brand-teal mb-2">80+</div>
                <div className="text-gray-400">Brands Monitored</div>
              </GlowCard>
              <GlowCard className="text-center p-6">
                <div className="text-4xl font-bold text-brand-teal mb-2">Weekly</div>
                <div className="text-gray-400">Alerts Delivered</div>
              </GlowCard>
              <GlowCard className="text-center p-6">
                <div className="text-4xl font-bold text-brand-teal mb-2">95%</div>
                <div className="text-gray-400">Takedown Success</div>
              </GlowCard>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Protect Your Digital Reputation</h2>
              <div className="prose prose-invert max-w-none space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Your brand's digital presence extends far beyond your website. Threat actors constantly probe 
                  for exposed credentials, create impersonation sites, and leverage your brand for phishing attacks. 
                  Our monitoring service provides continuous surveillance and rapid response.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We scan data breach databases, dark web markets, typosquatting domains, and social media for 
                  threats to your organization's reputation, intellectual property, and customer trust.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Monitoring Techniques</h3>
              <PillList pills={frameworks} variant="secondary" />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Monitoring Services</h2>
              <Timeline items={methodology} />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Intelligence Tools</h2>
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
                <h3 className="text-xl font-bold mb-4">Start Monitoring</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Protect your brand with 24/7 monitoring of data breaches, impersonation attempts, and digital threats.
                </p>
                <div className="space-y-3">
                  <Link href="/contact" className="btn-primary w-full flex items-center justify-center gap-2">
                    Get Started
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
                    <span>Early detection of credential leaks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Brand reputation protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Rapid takedown of malicious sites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Reduced phishing attack surface</span>
                  </li>
                </ul>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <ServiceStructuredData
        name="Brand & Digital Footprint Monitoring"
        description="Monitor internet, dark web, and data leak markets for exposed credentials and confidential information."
        provider="NexNet CyberLabs"
        areaServed={["Zimbabwe", "Poland", "Africa", "European Union"]}
        availableChannel={{
          serviceUrl: "https://nexnet-cyberlabs.com/services/brand-monitoring",
          servicePhone: "+263-86-7700-4321"
        }}
      />
    </>
  );
}
