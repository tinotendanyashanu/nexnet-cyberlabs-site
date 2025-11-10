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
    title: "Phishing Simulations",
    duration: "Week 1-2",
    description: "Realistic phishing campaigns to test and improve employee awareness and reporting behaviors with detailed metrics and user feedback."
  },
  {
    phase: "Phase 2",
    title: "Executive Crisis Exercises",
    duration: "Week 3-4",
    description: "Tabletop exercises simulating cyber incidents for board and executive decision-making practice including media response and stakeholder communication."
  },
  {
    phase: "Phase 3",
    title: "Technical Workshops",
    duration: "Week 5-6",
    description: "Hands-on training in secure development, cloud security hygiene, and defensive techniques tailored to your technology stack."
  },
  {
    phase: "Phase 4",
    title: "Academy Programs",
    duration: "8-12 weeks",
    description: "Comprehensive technical bootcamps through NexNet Academy with certification pathways in DFIR, penetration testing, and security operations."
  }
];

const tools = [
  "RangeForce",
  "Immersive Labs",
  "Miro",
  "CTFd",
  "KnowBe4",
  "PhishMe",
  "Canvas LMS",
  "Slack"
];

const frameworks = ["NIST NICE", "CIS Controls", "SANS Security Awareness"];

const faqs = [
  {
    question: "How effective is security awareness training?",
    answer: "Our clients see an average 30% reduction in phishing susceptibility within 60 days. We measure effectiveness through simulated attacks, knowledge assessments, and behavioral metrics."
  },
  {
    question: "Do you customize training content?",
    answer: "Yes. All training is customized to your industry, technology stack, and threat profile. We incorporate your branding, use cases, and real incidents (where appropriate)."
  },
  {
    question: "Can you train executive teams?",
    answer: "Absolutely. We offer executive-specific programs including crisis management simulations, board briefings, and strategic cyber risk workshops tailored to leadership."
  },
  {
    question: "What is NexNet Academy?",
    answer: "NexNet Academy is our technical training division offering hands-on bootcamps in DFIR, penetration testing, threat intelligence, and SOC operations with certification pathways."
  },
  {
    question: "Do you provide ongoing training programs?",
    answer: "Yes. We offer monthly phishing simulations, quarterly security awareness campaigns, and annual refresher training to maintain security culture over time."
  }
];

export default function TrainingPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&h=1080&fit=crop"
            alt="Security Training"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/70 to-brand-navy" />
        </div>
        <div className="relative z-10 section-container text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal text-sm font-semibold mb-6">
            Training & Education
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Security Awareness & Executive Training
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your people are your first line of defense. Customized cybersecurity training programs for technical staff, executives, and general workforce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Schedule Training
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/academy" className="btn-secondary inline-flex items-center gap-2">
              Visit Academy
            </Link>
          </div>
        </div>
      </section>

      <section className="section-container py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="grid sm:grid-cols-3 gap-6">
              <GlowCard className="text-center p-6">
                <div className="text-4xl font-bold text-brand-teal mb-2">1,200+</div>
                <div className="text-gray-400">Professionals Trained</div>
              </GlowCard>
              <GlowCard className="text-center p-6">
                <div className="text-4xl font-bold text-brand-teal mb-2">4.8/5</div>
                <div className="text-gray-400">Satisfaction Score</div>
              </GlowCard>
              <GlowCard className="text-center p-6">
                <div className="text-4xl font-bold text-brand-teal mb-2">30%</div>
                <div className="text-gray-400">Behavior Uplift</div>
              </GlowCard>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Building a Security-Conscious Culture</h2>
              <div className="prose prose-invert max-w-none space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Technology alone cannot protect your organization. Your people need the knowledge and skills 
                  to recognize threats, respond appropriately, and maintain security best practices in their daily work.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our training programs combine realistic simulations, hands-on workshops, and executive crisis exercises 
                  to build lasting security awareness and preparedness across all levels of your organization.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Training Frameworks</h3>
              <PillList pills={frameworks} variant="secondary" />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Training Approach</h2>
              <Timeline items={methodology} />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Training Platforms</h2>
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
                <h3 className="text-xl font-bold mb-4">Ready to Train?</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Strengthen your human firewall with customized security awareness training and technical bootcamps.
                </p>
                <div className="space-y-3">
                  <Link href="/contact" className="btn-primary w-full flex items-center justify-center gap-2">
                    Schedule Training
                  </Link>
                  <Link href="/academy" className="btn-secondary w-full flex items-center justify-center">
                    Browse Academy
                  </Link>
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
                    <span>Measurable improvement in security awareness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>30% reduction in phishing susceptibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Executive crisis management readiness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span>Technical certification pathways</span>
                  </li>
                </ul>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <ServiceStructuredData slug="training" />
    </>
  );
}
