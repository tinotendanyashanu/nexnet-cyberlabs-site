"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, Target, Mail, Video, ArrowRight, Phone, CheckCircle } from "lucide-react";
import { ShieldCheckIcon, DocumentCheckIcon } from "@heroicons/react/24/outline";
import GlowCard from "@/components/ui/GlowCard";
import Timeline from "@/components/ui/Timeline";
import Accordion from "@/components/ui/Accordion";
import PillList from "@/components/ui/PillList";
import { CTA } from "@/components/CTA";
import { ServiceStructuredData } from "@/components/ServiceStructuredData";

const programs = [
  {
    icon: Users,
    title: "Security Awareness Foundation",
    description: "Comprehensive baseline training covering password security, phishing, social engineering, and data protection.",
    duration: "2-4 hours"
  },
  {
    icon: Target,
    title: "Phishing Simulation Campaigns",
    description: "Realistic phishing attacks to test and train employees, with detailed metrics and follow-up training.",
    duration: "Quarterly"
  },
  {
    icon: Mail,
    title: "Role-Based Training",
    description: "Specialized training for developers, executives, HR, and finance teams based on their unique risk profiles.",
    duration: "4-8 hours"
  },
  {
    icon: Video,
    title: "Executive Cyber Briefings",
    description: "Quarterly briefings for C-suite and board members on threat landscape, regulatory changes, and strategic risks.",
    duration: "1 hour"
  }
];

const methodology = [
  {
    phase: "Phase 1",
    title: "Baseline Assessment",
    duration: "1 week",
    description: "Initial phishing simulation to establish baseline click rates and security awareness maturity assessment."
  },
  {
    phase: "Phase 2",
    title: "Training Delivery",
    duration: "Ongoing",
    description: "Interactive training modules, live workshops, micro-learning content, and role-based specialized training."
  },
  {
    phase: "Phase 3",
    title: "Continuous Reinforcement",
    duration: "Monthly",
    description: "Ongoing phishing simulations, security tips, gamification, and metrics tracking to maintain security culture."
  }
];

const topics = ["Phishing & Social Engineering", "Password Security", "Data Protection", "Remote Work Security", "Incident Reporting"];

const faqs = [
  {
    question: "How effective is security awareness training?",
    answer: "Studies show security awareness training reduces phishing susceptibility by 30-50%. Our clients typically see click rates drop from 20-30% to under 5% within 6 months."
  },
  {
    question: "Can training be customized for our industry?",
    answer: "Absolutely. We tailor content for banking, healthcare, mining, retail, and other sectors with industry-specific threats and compliance requirements (GDPR, POPIA, PCI DSS)."
  },
  {
    question: "Is training available in local languages?",
    answer: "Yes. We deliver training in English, French, Portuguese, Swahili, and other African languages to ensure maximum comprehension across your workforce."
  },
  {
    question: "How do phishing simulations work?",
    answer: "We send realistic phishing emails that mimic current attack trends. Employees who click receive immediate education. We track metrics and provide detailed reports for management."
  },
  {
    question: "Can you train remote and field workers?",
    answer: "Yes. Our platform supports online self-paced learning, mobile-friendly content, and offline delivery for workers without reliable internet access."
  }
];

export default function SecurityAwarenessTrainingPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&h=1080&fit=crop"
            alt="Security Awareness Training"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/70 to-brand-navy" />
        </div>
        <div className="relative z-10 section-container text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal text-sm font-semibold mb-6">
            Training Programs
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Security Awareness Training
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your employees from security risk to your strongest defense layer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Request Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#programs" className="btn-secondary inline-flex items-center gap-2">
              View Programs
            </Link>
          </div>
        </div>
      </section>
      <section className="section-container py-20" id="programs">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Training Programs</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {programs.map((program, idx) => (
                  <GlowCard key={idx} className="p-6">
                    <program.icon className="w-10 h-10 text-brand-teal mb-4" />
                    <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{program.description}</p>
                    <div className="text-xs text-brand-teal">Duration: {program.duration}</div>
                  </GlowCard>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Training Topics</h3>
              <PillList pills={topics} variant="secondary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Training Approach</h2>
              <p className="text-gray-300 mb-8">
                We use behavior-driven training that goes beyond check-the-box compliance to create lasting security culture change.
              </p>
              <Timeline items={methodology} />
            </div>
            <GlowCard className="p-8 bg-gradient-to-br from-brand-teal/5 to-transparent">
              <h2 className="text-2xl font-bold mb-4">Case Study: Manufacturing Firm Phishing Reduction</h2>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="font-semibold text-white mb-2">Challenge</h3>
                  <p>
                    A 500-employee manufacturing company suffered a Business Email Compromise (BEC) attack resulting in $200K loss. Phishing click rate was 35%.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Approach</h3>
                  <p>
                    Implemented comprehensive awareness program with monthly phishing simulations, targeted training for high-risk users, and executive briefings. Delivered content in English and Portuguese.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Outcome</h3>
                  <p>
                    Click rate reduced to 4% in 6 months. Employees reported 12 real phishing attempts within first year, preventing estimated $400K+ in losses.
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
                <h3 className="text-xl font-bold mb-4">Start Building Security Culture</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Get a free demo of our training platform and see sample phishing simulations.
                </p>
                <div className="space-y-3">
                  <Link href="/contact" className="btn-primary w-full flex items-center justify-center gap-2">
                    Request Demo
                  </Link>
                  <a href="tel:+2638677004321" className="btn-secondary w-full flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Discuss Program
                  </a>
                </div>
              </GlowCard>
              <GlowCard className="p-6">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <ShieldCheckIcon className="w-5 h-5 text-brand-teal" />
                  Training Features
                </h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Interactive video modules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Realistic phishing simulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Gamification & leaderboards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Multi-language support</span>
                  </li>
                </ul>
              </GlowCard>
              <GlowCard className="p-6">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <DocumentCheckIcon className="w-5 h-5 text-brand-teal" />
                  You Get
                </h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li> Training portal access</li>
                  <li> Monthly phishing campaigns</li>
                  <li> Completion tracking & reports</li>
                  <li> Customized content</li>
                  <li> Executive dashboards</li>
                  <li> Compliance certificates</li>
                </ul>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>
      <CTA />
      <ServiceStructuredData
        name="Security Awareness Training"
        description="Transform your employees from security risk to your strongest defense layer."
        provider="NexNet CyberLabs"
        areaServed={["Zimbabwe", "Poland", "Africa", "European Union"]}
        availableChannel={{
          serviceUrl: "https://nexnet-cyberlabs.com/services/security-awareness-training",
          servicePhone: "+263-86-7700-4321"
        }}
      />
    </>
  );
}
