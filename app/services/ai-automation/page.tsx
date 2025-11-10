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
  { phase: "Phase 1", title: "Log-Based Anomaly Detection", duration: "Week 1-2", description: "Machine learning models trained to identify unusual patterns in log data indicating potential threats with continuous learning." },
  { phase: "Phase 2", title: "ML-Powered Phishing Detection", duration: "Week 2-3", description: "Automated analysis of emails and URLs using NLP to identify phishing with 94% accuracy." },
  { phase: "Phase 3", title: "Autonomous Threat Triage", duration: "Week 3-4", description: "AI bots automatically categorize, prioritize, and route alerts reducing analyst workload by 60%." },
  { phase: "Phase 4", title: "ChatOps Integration", duration: "Week 4-5", description: "AI assistants integrated with SOC workflows for automated playbook execution." }
];

const tools = ["Python", "TensorFlow", "LangChain", "Elasticsearch", "Jupyter", "Scikit-learn", "Keras", "Apache Spark"];
const frameworks = ["Machine Learning", "NLP", "Anomaly Detection", "Deep Learning"];

const faqs = [
  { question: "How does AI improve security?", answer: "AI enables real-time threat detection, automated triage reducing alert fatigue by 60%, and predictive analytics to identify threats before they become incidents." },
  { question: "Do you train custom models?", answer: "Yes. We train models on your specific environment, log patterns, and threat profile for maximum accuracy and minimal false positives." },
  { question: "What is the implementation time?", answer: "Basic anomaly detection can be deployed in 2-3 weeks. Complex models with deep learning require 6-8 weeks for training and validation." },
  { question: "Will AI replace our SOC team?", answer: "No. AI augments your team by handling routine tasks, allowing analysts to focus on complex investigations and strategic work." },
  { question: "How accurate are the models?", answer: "Our production models achieve 94% accuracy with <5% false positive rate. Models are continuously retrained as new threats emerge." }
];

export default function AIAutomationPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&h=1080&fit=crop" alt="AI Automation" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/70 to-brand-navy" />
        </div>
        <div className="relative z-10 section-container text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal text-sm font-semibold mb-6">AI & Machine Learning</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">AI & Automation in Cyber Defense</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Faster detection, smarter response. AI-powered models that detect anomalies, automate log analysis, and predict threats in real time.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">Deploy AI<ArrowRight className="w-5 h-5" /></Link>
            <a href="tel:+2638677004321" className="btn-secondary inline-flex items-center gap-2"><Phone className="w-5 h-5" />Speak to Team</a>
          </div>
        </div>
      </section>
      <section className="section-container py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="grid sm:grid-cols-3 gap-6">
              <GlowCard className="text-center p-6"><div className="text-4xl font-bold text-brand-teal mb-2">15+</div><div className="text-gray-400">ML Models Deployed</div></GlowCard>
              <GlowCard className="text-center p-6"><div className="text-4xl font-bold text-brand-teal mb-2">94%</div><div className="text-gray-400">Alert Accuracy</div></GlowCard>
              <GlowCard className="text-center p-6"><div className="text-4xl font-bold text-brand-teal mb-2">60%</div><div className="text-gray-400">Response Time Reduction</div></GlowCard>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Intelligent Security Automation</h2>
              <p className="text-gray-300 leading-relaxed">Harness AI and machine learning to detect anomalies, automate threat triage, and predict attacks before they happen. Our models reduce alert fatigue by 50% while improving detection accuracy.</p>
            </div>
            <div><h3 className="text-2xl font-bold mb-4">AI Technologies</h3><PillList pills={frameworks} variant="secondary" /></div>
            <div><h2 className="text-3xl font-bold mb-6">AI Implementation</h2><Timeline items={methodology} /></div>
            <div>
              <h2 className="text-3xl font-bold mb-6">AI/ML Stack</h2>
              <div className="grid sm:grid-cols-2 gap-4">{tools.map((tool, idx) => (<GlowCard key={idx} className="p-4 flex items-center gap-3"><ServerIcon className="w-6 h-6 text-brand-teal flex-shrink-0" /><div className="font-semibold">{tool}</div></GlowCard>))}</div>
            </div>
            <div><h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2><Accordion items={faqs} /></div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <GlowCard className="p-6" glow><h3 className="text-xl font-bold mb-4">Ready for AI?</h3><p className="text-gray-300 mb-6 text-sm">Deploy machine learning models to automate threat detection and response.</p><div className="space-y-3"><Link href="/contact" className="btn-primary w-full flex items-center justify-center gap-2">Get Started</Link><a href="tel:+2638677004321" className="btn-secondary w-full flex items-center justify-center gap-2"><Phone className="w-5 h-5" />Call Now</a></div></GlowCard>
              <GlowCard className="p-6"><h4 className="font-bold mb-3 flex items-center gap-2"><ShieldCheckIcon className="w-5 h-5 text-brand-teal" />Key Outcomes</h4><ul className="space-y-2 text-sm text-gray-300"><li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" /><span>50% reduction in alert fatigue</span></li><li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" /><span>Real-time threat detection</span></li><li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" /><span>Automated response workflows</span></li><li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" /><span>Predictive analytics</span></li></ul></GlowCard>
            </div>
          </div>
        </div>
      </section>
      <CTA />
      <ServiceStructuredData name="AI & Automation in Cyber Defense" description="AI-powered models that detect anomalies, automate log analysis, and predict threats in real time." provider="NexNet CyberLabs" areaServed={["Zimbabwe", "Poland", "Africa", "European Union"]} availableChannel={{ serviceUrl: "https://nexnet-cyberlabs.com/services/ai-automation", servicePhone: "+263-86-7700-4321" }} />
    </>
  );
}
