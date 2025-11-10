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
  { phase: "Phase 1", title: "Cloud Configuration Review", duration: "Week 1-2", description: "Security assessment of AWS, Azure, GCP configurations against CIS benchmarks and cloud security best practices." },
  { phase: "Phase 2", title: "IAM & Access Control", duration: "Week 2-3", description: "Review and hardening of identity and access management policies with privilege escalation testing and least-privilege implementation." },
  { phase: "Phase 3", title: "Network Segmentation", duration: "Week 3-4", description: "Evaluation of network architecture, VPC design, segmentation controls, and lateral movement prevention strategies." },
  { phase: "Phase 4", title: "Infrastructure Hardening", duration: "Week 4-5", description: "Security group audits, encryption implementation, logging configuration, and compliance validation." }
];

const tools = ["OpenVAS", "CloudSploit", "ScoutSuite", "Prowler", "AWS Security Hub", "Azure Defender", "GCP SCC", "Terraform"];
const frameworks = ["CIS Benchmarks", "AWS Well-Architected", "Azure Security Baseline", "NIST Cloud"];

const faqs = [
  { question: "Which cloud providers do you support?", answer: "We support AWS, Azure, Google Cloud Platform, and hybrid/multi-cloud environments. Our team has deep expertise in all major cloud platforms." },
  { question: "Will you access our production environment?", answer: "We typically work in read-only mode using least-privilege IAM roles. For penetration testing, we coordinate carefully with your team and can work in non-production environments." },
  { question: "How do you handle multi-cloud environments?", answer: "We use tools like ScoutSuite and CloudSploit that support multi-cloud assessments, providing unified security posture reports across all platforms." },
  { question: "Can you help with cloud migration security?", answer: "Yes. We provide secure cloud migration planning, architecture reviews, and post-migration security validation to ensure your workloads are protected from day one." },
  { question: "Do you provide ongoing cloud security?", answer: "Yes. We offer cloud security posture management (CSPM) as a service with continuous monitoring, automated remediation, and monthly security reports." }
];

export default function CloudSecurityPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop" alt="Cloud Security" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/70 to-brand-navy" />
        </div>
        <div className="relative z-10 section-container text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal text-sm font-semibold mb-6">Cloud Security</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Cloud & Infrastructure Security</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Resilience begins with architecture. Assess and secure on-premise, cloud, and hybrid infrastructure with modern security standards.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">Request Assessment<ArrowRight className="w-5 h-5" /></Link>
            <a href="tel:+2638677004321" className="btn-secondary inline-flex items-center gap-2"><Phone className="w-5 h-5" />Speak to Team</a>
          </div>
        </div>
      </section>
      <section className="section-container py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="grid sm:grid-cols-3 gap-6">
              <GlowCard className="text-center p-6"><div className="text-4xl font-bold text-brand-teal mb-2">120+</div><div className="text-gray-400">Cloud Audits</div></GlowCard>
              <GlowCard className="text-center p-6"><div className="text-4xl font-bold text-brand-teal mb-2">45</div><div className="text-gray-400">Avg Misconfigs/Audit</div></GlowCard>
              <GlowCard className="text-center p-6"><div className="text-4xl font-bold text-brand-teal mb-2">90%</div><div className="text-gray-400">Remediation Rate</div></GlowCard>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Secure Your Cloud Infrastructure</h2>
              <p className="text-gray-300 leading-relaxed">Cloud misconfigurations are the leading cause of data breaches. Our cloud security assessments identify vulnerabilities in AWS, Azure, and GCP environments, ensuring your infrastructure follows CIS benchmarks and industry best practices.</p>
            </div>
            <div><h3 className="text-2xl font-bold mb-4">Cloud Frameworks</h3><PillList pills={frameworks} variant="secondary" /></div>
            <div><h2 className="text-3xl font-bold mb-6">Assessment Methodology</h2><Timeline items={methodology} /></div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Cloud Security Tools</h2>
              <div className="grid sm:grid-cols-2 gap-4">{tools.map((tool, idx) => (<GlowCard key={idx} className="p-4 flex items-center gap-3"><ServerIcon className="w-6 h-6 text-brand-teal flex-shrink-0" /><div className="font-semibold">{tool}</div></GlowCard>))}</div>
            </div>
            <div><h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2><Accordion items={faqs} /></div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <GlowCard className="p-6" glow><h3 className="text-xl font-bold mb-4">Secure Your Cloud</h3><p className="text-gray-300 mb-6 text-sm">Get a comprehensive cloud security assessment aligned to CIS benchmarks.</p><div className="space-y-3"><Link href="/contact" className="btn-primary w-full flex items-center justify-center gap-2">Schedule Audit</Link><a href="tel:+2638677004321" className="btn-secondary w-full flex items-center justify-center gap-2"><Phone className="w-5 h-5" />Call Now</a></div></GlowCard>
              <GlowCard className="p-6"><h4 className="font-bold mb-3 flex items-center gap-2"><ShieldCheckIcon className="w-5 h-5 text-brand-teal" />Key Outcomes</h4><ul className="space-y-2 text-sm text-gray-300"><li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" /><span>Hardened cloud infrastructure</span></li><li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" /><span>CIS benchmark compliance</span></li><li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" /><span>Reduced attack surface</span></li><li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" /><span>IAM best practices</span></li></ul></GlowCard>
            </div>
          </div>
        </div>
      </section>
      <CTA />
      <ServiceStructuredData slug="cloud-security" />
    </>
  );
}
