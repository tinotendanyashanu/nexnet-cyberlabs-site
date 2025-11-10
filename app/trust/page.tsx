"use client";

import Image from "next/image";
import { Shield, Lock, FileCheck, Award, CheckCircle2, Download, ExternalLink, Clock } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";
import Timeline from "@/components/ui/Timeline";
import Accordion from "@/components/ui/Accordion";

const certifications = [
  { 
    name: "ISO 27001:2022", 
    status: "Certified", 
    issuingBody: "QSA Europe",
    date: "Valid until Dec 2025",
    badge: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=200&h=200&fit=crop"
  },
  { 
    name: "SOC 2 Type II", 
    status: "In Progress", 
    issuingBody: "Control Trust",
    date: "Q1 2026 expected",
    badge: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=200&fit=crop"
  },
  { 
    name: "Cyber Essentials Plus", 
    status: "Certified", 
    issuingBody: "UK IASME",
    date: "Valid until Jun 2025",
    badge: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=200&h=200&fit=crop"
  },
  { 
    name: "CREST Penetration Testing", 
    status: "Accredited", 
    issuingBody: "CREST International",
    date: "Annual renewal",
    badge: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop"
  }
];

const complianceMatrix = [
  { 
    framework: "ISO 27001:2022", 
    coverage: "Full ISMS implementation covering 93 controls across 14 domains. Lead auditor coaching and certification prep.",
    status: "Certified",
    color: "from-green-500/20 to-emerald-500/20"
  },
  { 
    framework: "NIST Cybersecurity Framework", 
    coverage: "Tier 3 (Repeatable) implementation with assessments, progression roadmaps, and continuous monitoring.",
    status: "Implemented",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  { 
    framework: "GDPR & POPIA", 
    coverage: "Data mapping, DPIAs, DPO advisory, breach notification protocols, and cross-border transfer mechanisms.",
    status: "Operational",
    color: "from-purple-500/20 to-pink-500/20"
  },
  { 
    framework: "SOC 2 Type II", 
    coverage: "Trust Services Criteria (Security, Availability, Confidentiality). Control design, evidence collection, monitoring automation.",
    status: "In Progress",
    color: "from-amber-500/20 to-orange-500/20"
  }
];

const securityFeatures = [
  {
    icon: Shield,
    title: "End-to-End Encryption",
    description: "AES-256 encryption at rest, TLS 1.3 in transit. Zero-knowledge architecture for forensic evidence."
  },
  {
    icon: Lock,
    title: "Access Controls",
    description: "Role-based access control (RBAC), multi-factor authentication, and privileged access management."
  },
  {
    icon: FileCheck,
    title: "Audit Logging",
    description: "Immutable audit trails for all data access, modifications, and system changes. 7-year retention."
  },
  {
    icon: Award,
    title: "Third-Party Audits",
    description: "Annual penetration tests, quarterly vulnerability scans, and continuous security monitoring."
  }
];

const auditTimeline = [
  {
    phase: "Q1",
    title: "External Penetration Test",
    description: "CREST-accredited annual infrastructure and application penetration testing by independent third parties.",
    icon: Shield
  },
  {
    phase: "Q2",
    title: "ISO 27001 Surveillance",
    description: "Annual surveillance audit by QSA Europe to maintain ISO 27001:2022 certification status.",
    icon: Award
  },
  {
    phase: "Q3",
    title: "Vulnerability Assessment",
    description: "Quarterly vulnerability scanning across all internet-facing assets and internal infrastructure.",
    icon: FileCheck
  },
  {
    phase: "Q4",
    title: "SOC 2 Readiness",
    description: "Continuous evidence collection and control testing for SOC 2 Type II audit preparation.",
    icon: Lock
  }
];

const penTestReports = [
  {
    year: "2024",
    scope: "Infrastructure & Web Applications",
    findings: "0 Critical, 2 High, 5 Medium",
    remediation: "100% remediated within SLA",
    report: "/docs/pentest-2024.pdf"
  },
  {
    year: "2023",
    scope: "API & Mobile Applications",
    findings: "0 Critical, 1 High, 3 Medium",
    remediation: "100% remediated within SLA",
    report: "/docs/pentest-2023.pdf"
  },
  {
    year: "2022",
    scope: "Full Infrastructure Assessment",
    findings: "1 Critical, 3 High, 7 Medium",
    remediation: "100% remediated within SLA",
    report: "/docs/pentest-2022.pdf"
  }
];

const faqs = [
  {
    question: "How is client data protected?",
    answer: "We use AES-256 encryption at rest and TLS 1.3 in transit. All forensic evidence is stored in zero-knowledge encrypted vaults with client-controlled keys. Access is logged and monitored with immutable audit trails."
  },
  {
    question: "What is your incident response SLA?",
    answer: "For security incidents affecting our systems: detection within 15 minutes, containment within 1 hour, and client notification within 2 hours. We maintain 24/7 security operations coverage across Harare and Warsaw."
  },
  {
    question: "Do you have SOC 2 certification?",
    answer: "We are currently pursuing SOC 2 Type II certification with expected completion in Q1 2026. We maintain SOC 2-equivalent controls and evidence collection processes in preparation."
  },
  {
    question: "How often are penetration tests conducted?",
    answer: "Annual CREST-accredited penetration tests by independent third parties, quarterly vulnerability scans, and continuous monitoring. All findings are remediated within defined SLAs based on severity."
  },
  {
    question: "What compliance frameworks do you support?",
    answer: "We maintain ISO 27001:2022 certification and implement NIST CSF, GDPR, POPIA, and SOC 2 controls. We can provide client-specific compliance support for PCI DSS, HIPAA, and sector-specific regulations."
  },
  {
    question: "How do you handle data deletion requests?",
    answer: "We provide cryptographic deletion attestations within 30 days of request. All backups are purged within 90 days. Forensic evidence follows chain-of-custody requirements and retention schedules agreed with clients."
  }
];

export default function TrustPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&h=1080&fit=crop"
            alt="Trust & Security"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/95 via-brand-navy/85 to-brand-navy" />
        </div>
        <div className="relative z-10 section-container text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Shield className="w-5 h-5 text-brand-teal" />
            <span className="text-sm font-semibold">Security First. Always.</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Trust & <span className="text-brand-teal">Security</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Enterprise-grade security, compliance transparency, and responsible disclosure practices that protect your data and our shared digital future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#compliance" className="btn-primary inline-flex items-center gap-2">
              <FileCheck className="w-5 h-5" />
              View Compliance
            </a>
            <a href="#disclosure" className="btn-secondary inline-flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Report Vulnerability
            </a>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Certifications & Accreditations</h2>
          <p className="text-gray-300 text-lg">Independently verified security and compliance standards</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <GlowCard key={idx} className="p-6 text-center" hover>
              <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto mb-4 border-2 border-brand-teal/30">
                <Image
                  src={cert.badge}
                  alt={cert.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal text-sm mb-3">
                <CheckCircle2 className="w-4 h-4" />
                {cert.status}
              </div>
              <p className="text-sm text-gray-400 mb-1">{cert.issuingBody}</p>
              <p className="text-xs text-gray-500">{cert.date}</p>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* Compliance Matrix */}
      <section className="section-container py-20 bg-gradient-to-b from-transparent to-brand-navy/30" id="compliance">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Compliance Framework Coverage</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Mapped across ISO, NIST, GDPR/POPIA, and SOC 2 controls with continuous monitoring
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {complianceMatrix.map((item, idx) => (
            <GlowCard key={idx} className="p-6" hover>
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} border border-brand-teal/30 flex items-center justify-center mb-4`}>
                <Award className="w-7 h-7 text-brand-teal" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.framework}</h3>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/20 text-sm mb-3">
                {item.status}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{item.coverage}</p>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* Security Features */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Security Architecture</h2>
          <p className="text-gray-300 text-lg">Enterprise-grade controls protecting your data</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature, idx) => (
            <GlowCard key={idx} className="p-6" hover>
              <div className="w-12 h-12 rounded-xl bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-brand-teal" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* Penetration Test Reports */}
      <section className="section-container py-20 bg-gradient-to-b from-transparent to-brand-navy/30">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Penetration Test Results</h2>
          <p className="text-gray-300 text-lg">Third-party security assessments with full remediation</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {penTestReports.map((report, idx) => (
            <GlowCard key={idx} className="p-6" hover>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-brand-teal">{report.year}</h3>
                <Shield className="w-8 h-8 text-brand-teal/50" />
              </div>
              <p className="text-sm text-gray-400 mb-3">{report.scope}</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Findings:</span>
                  <span className="font-semibold">{report.findings}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Remediation:</span>
                  <span className="text-green-400 font-semibold">{report.remediation}</span>
                </div>
              </div>
              <a 
                href={report.report} 
                className="flex items-center gap-2 text-brand-teal hover:underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4" />
                Download Summary
              </a>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* Audit Timeline */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Audit & Assessment Schedule</h2>
          <p className="text-gray-300 text-lg">Continuous verification and independent assessments</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Timeline items={auditTimeline} />
        </div>
      </section>

      {/* FAQs */}
      <section className="section-container py-20 bg-gradient-to-b from-transparent to-brand-navy/30">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Security & Compliance FAQs</h2>
          <p className="text-gray-300 text-lg">Common questions about our security practices</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion items={faqs} />
        </div>
      </section>

      {/* Responsible Disclosure */}
      <section className="section-container py-20" id="disclosure">
        <GlowCard className="p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-brand-teal" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">Responsible Disclosure Program</h2>
              <p className="text-gray-400">Security researchers are valued partners</p>
            </div>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              If you've discovered a security vulnerability in our systems or services, we want to hear from you. We're committed to working with security researchers to verify and address vulnerabilities quickly and responsibly.
            </p>
            <div className="bg-brand-navy/50 rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4">Reporting Guidelines</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong className="text-white">Email:</strong> security@nexnet-cyberlabs.com (PGP key available)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong className="text-white">Acknowledgment:</strong> Initial response within 48 hours
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong className="text-white">Updates:</strong> Status updates every 7 days until resolution
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong className="text-white">Safe Harbor:</strong> Good faith research is protected under our policy
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="mailto:security@nexnet-cyberlabs.com" className="btn-primary inline-flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Report Vulnerability
              </a>
              <a href="/docs/security-policy.pdf" className="btn-secondary inline-flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                View Full Policy
              </a>
            </div>
          </div>
        </GlowCard>
      </section>

      {/* Final CTA */}
      <section className="section-container py-20">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-purple-500/20" />
          <GlowCard className="relative p-12 text-center">
            <FileCheck className="w-16 h-16 text-brand-teal mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Need Compliance Support?</h2>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Our GRC team can help you achieve ISO 27001, SOC 2, or sector-specific compliance certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Schedule Consultation
              </a>
              <a href="/services/governance-risk-compliance" className="btn-secondary inline-flex items-center gap-2">
                <Award className="w-5 h-5" />
                GRC Services
              </a>
            </div>
          </GlowCard>
        </div>
      </section>
    </>
  );
}
