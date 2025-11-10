import Image from "next/image";
import { Metadata } from "next";
import { Accordion } from "@/components/Accordion";
import { PricingTiers } from "@/components/PricingTiers";
import { ToolingStack } from "@/components/ToolingStack";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Shield, Zap, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Services - NexNet CyberLabs",
  description: "Comprehensive cybersecurity services including incident response, digital forensics, threat intelligence, GRC, penetration testing, and more."
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy/95 to-black">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="container relative py-20 md:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>13 Specialized Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              End-to-End Cybersecurity Services
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From 24/7 incident response to strategic consulting, we provide comprehensive security solutions 
              tailored to African enterprises and global organizations operating in emerging markets.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 border border-white/10">
                <Zap className="w-5 h-5 text-brand-teal" />
                <div>
                  <div className="text-sm text-gray-400">Response Time</div>
                  <div className="font-semibold text-white">{'<'} 2 hours</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 border border-white/10">
                <Globe className="w-5 h-5 text-brand-teal" />
                <div>
                  <div className="text-sm text-gray-400">Global Coverage</div>
                  <div className="font-semibold text-white">24/7/365</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 border border-white/10">
                <Shield className="w-5 h-5 text-brand-teal" />
                <div>
                  <div className="text-sm text-gray-400">Client Success</div>
                  <div className="font-semibold text-white">99% Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Portfolio</h2>
          <p className="text-gray-400 text-lg">
            Comprehensive cybersecurity capabilities delivered by experienced professionals with 
            deep expertise in African and international regulatory landscapes.
          </p>
        </div>
        <ServicesGrid detailed />
      </section>

      {/* Pricing Tiers */}
      <section className="bg-gradient-to-br from-brand-navy/50 to-black/50 py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Engagement Models</h2>
            <p className="text-gray-400 text-lg">
              Choose the engagement model that fits your organization's needs and budget.
            </p>
          </div>
          <PricingTiers />
        </div>
      </section>

      {/* Tooling Stack */}
      <section className="container py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise-Grade Tools</h2>
          <p className="text-gray-400 text-lg">
            We leverage industry-leading tools and platforms to deliver measurable security outcomes.
          </p>
        </div>
        <ToolingStack />
      </section>

      {/* FAQs */}
      <section className="container py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <Accordion
            items={[
              { 
                q: "How fast can you mobilize incident response?", 
                a: "We begin remote triage within 2 hours of engagement. Our 24/7 SOC and global presence enable rapid containment and eradication, with on-site teams deployed within 24 hours when required." 
              },
              { 
                q: "Do you provide court-ready forensic reports?", 
                a: "Yes. All digital forensics engagements include full chain-of-custody documentation, evidence preservation following ISO/IEC 27037 standards, and court-admissible reports. We have testified in 35+ cases across multiple jurisdictions." 
              },
              { 
                q: "Can you align to our existing compliance framework?", 
                a: "Absolutely. Our assessments and remediation guidance map to ISO 27001, NIST CSF, PCI DSS, GDPR, POPIA, Zimbabwe Cyber & Data Protection Act, and other regional frameworks. We provide gap analysis and roadmap development." 
              },
              { 
                q: "What industries do you specialize in?", 
                a: "We serve Financial Services, Telecoms, Mining & Energy, Government & Public Sector, Healthcare, Education, and SMEs across Africa and internationally. Our team has deep expertise in sector-specific compliance requirements." 
              },
              { 
                q: "Do you offer retainer-based services?", 
                a: "Yes. Our Managed Defense & Monitoring service provides 24/7 SOC coverage on a monthly retainer. We also offer retainer-based consulting through our CISO-as-a-Service and strategic advisory programs." 
              }
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16">
        <div className="card bg-gradient-to-br from-brand-teal/10 to-brand-purple/10 border-brand-teal/20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to strengthen your security posture?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Speak with our security experts to discuss your requirements and explore how we can help 
            protect your organization from emerging cyber threats.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="px-8 py-4 rounded-lg bg-brand-teal hover:bg-brand-teal/90 text-white font-semibold transition-all hover:scale-105"
            >
              Schedule a Consultation
            </a>
            <a 
              href="/trust" 
              className="px-8 py-4 rounded-lg border border-white/20 hover:bg-white/5 text-white font-semibold transition-all"
            >
              View Trust Center
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

