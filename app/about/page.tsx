"use client";

import { ImageHero } from "@/components/ImageHero";
import { Target, Shield, Award, Heart, BookOpen, Eye, Zap, TrendingUp, Users, Globe, Briefcase } from "lucide-react";

export default function AboutPage() {
  const pillars = [
    { icon: Shield, title: "Discipline", details: ["Standardized procedures", "Proper documentation", "Professional conduct"] },
    { icon: BookOpen, title: "Knowledge First", details: ["Research culture", "Continuous training", "Lifelong learning"] },
    { icon: Award, title: "Reputation Over Revenue", details: ["Trust before profit", "Transparency", "Evidence-based work"] },
    { icon: Heart, title: "Community Impact", details: ["Mentorship", "Training next generation", "Regional resilience"] },
    { icon: Target, title: "Integrity", details: ["No unethical hacking", "Lawful frameworks", "Responsible disclosure"] }
  ];

  const methodology = [
    { step: "Assess", desc: "Identify risks, vulnerabilities, and threat landscape" },
    { step: "Protect", desc: "Implement defensive controls and best practices" },
    { step: "Detect", desc: "Continuously monitor for abnormal behaviors" },
    { step: "Respond", desc: "Contain and neutralize threats rapidly" },
    { step: "Recover & Report", desc: "Restore operations and document findings" }
  ];

  const leadership = [
    { name: "Tinotenda Nyashanu", role: "Co‑Founder & Technical Director", blurb: "AI and cybersecurity engineer with background in digital forensics, data science, and intelligent systems. Leads R&D and technology innovation." },
    { name: "Cyber Investigations Lead", role: "Co‑Founder & Head of Cyber Investigations", blurb: "Network forensics, threat intelligence, and incident management lead. Oversees IR and forensic operations." },
    { name: "Academy Director", role: "Co‑Founder & Director of Cyber Academy", blurb: "Leads CyberLabs Academy and internship program, managing training pipelines and regional capacity-building." }
  ];

  const operations = [
    { icon: Briefcase, type: "Headquarters", where: "Harare, Zimbabwe", note: "Main operations center and strategic command" },
    { icon: Globe, type: "European Desk", where: "Warsaw, Poland", note: "24/7 EU client services and cyber fusion center" },
    { icon: BookOpen, type: "Research Hubs", where: "Nairobi • Johannesburg • Lagos", note: "Regional threat intelligence and training" },
    { icon: Users, type: "Remote Cyber Pods", where: "Distributed (Africa & EU)", note: "Cloud-based analyst teams and intern networks" }
  ];

  const commitments = [
    "Zimbabwe Cyber & Data Protection Act and EU GDPR alignment",
    "Secure data handling and role-based access controls",
    "Responsible vulnerability disclosure program",
    "Client confidentiality and NDAs by default",
    "Continuous improvement via internal audits & R&D",
    "ISO 27001 (cert) and SOC 2 (roadmap)"
  ];

  return (
    <>
      <ImageHero
        title="About NexNet CyberLabs"
        subtitle="A professional cybersecurity and intelligence bureau founded in 2024 in Harare, Zimbabwe — operating across Africa and Europe."
        bgSrc="/images/hero/network-connections.svg"
        ctaPrimary={{ href: "/contact", text: "Work With Us" }}
        ctaSecondary={{ href: "/services", text: "Our Services" }}
      />

      <div className="container py-20 space-y-12">
        {/* Who We Are */}
        <section className="space-y-4 max-w-4xl">
          <h2 className="text-3xl font-bold">Who We Are</h2>
          <p className="text-xl text-gray-300">
            NexNet CyberLabs builds a world‑class African cybersecurity institution that protects, investigates,
            and educates with integrity and discipline. We specialize in
            <span className="text-white"> digital forensics, incident response, OSINT, threat intelligence, GRC,</span>
            and <span className="text-white">security training</span>.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <article className="card">
              <h3 className="text-lg font-semibold">Vision</h3>
              <p className="text-gray-300 mt-2 text-sm">
                Become Africa's leading world‑class cybersecurity and intelligence bureau — reshaping the global
                narrative from dependency to leadership through integrity, discipline, and knowledge‑based defense.
              </p>
            </article>
            <article className="card">
              <h3 className="text-lg font-semibold">Mission</h3>
              <p className="text-gray-300 mt-2 text-sm">
                Deliver disciplined, knowledge‑driven cyber defense and investigations through ethical, evidence‑based,
                and transparent practices that safeguard businesses, governments, and individuals.
              </p>
            </article>
          </div>
        </section>

        {/* Core Pillars */}
        <section>
          <h2 className="text-3xl font-bold">Our Core Pillars</h2>
          <p className="text-gray-400 mt-2">Values that guide every engagement</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <article key={p.title} className="card">
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-brand-teal" />
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                  </div>
                  <ul className="text-sm text-gray-300 mt-3 space-y-1">
                    {p.details.map((d) => (
                      <li key={d}>• {d}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        {/* Methodology */}
        <section className="max-w-4xl">
          <h2 className="text-3xl font-bold">Our Methodology</h2>
          <p className="text-gray-400 mt-2">Hybrid intelligence model aligned with NIST, ISO 27001, MITRE ATT&CK, and GDPR</p>
          <ol className="mt-4 grid md:grid-cols-2 gap-4">
            {methodology.map((m, i) => (
              <li key={m.step} className="card">
                <div className="text-sm text-brand-teal font-semibold">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-lg font-semibold mt-1">{m.step}</h3>
                <p className="text-sm text-gray-300 mt-1">{m.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Leadership */}
        <section>
          <h2 className="text-3xl font-bold">Leadership</h2>
          <p className="text-gray-400 mt-2">Multidisciplinary expertise — defense, investigations, education</p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {leadership.map((l) => (
              <article key={l.name} className="card">
                <h3 className="text-lg font-semibold">{l.name}</h3>
                <p className="text-brand-teal text-sm font-semibold mt-1">{l.role}</p>
                <p className="text-sm text-gray-300 mt-2">{l.blurb}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Global Operations */}
        <section>
          <h2 className="text-3xl font-bold">Global Operations</h2>
          <p className="text-gray-400 mt-2">Remote‑first with strategic hubs across Africa and the EU</p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            {operations.map((o) => {
              const Icon = o.icon;
              return (
                <article key={o.type} className="card">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-brand-teal" />
                    <div>
                      <h3 className="text-lg font-semibold">{o.type}</h3>
                      <p className="text-sm text-gray-400">{o.where}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 mt-2">{o.note}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Commitments */}
        <section className="max-w-4xl">
          <h2 className="text-3xl font-bold">Our Commitment to Trust</h2>
          <p className="text-gray-400 mt-2">Strict ethical, legal, and technical standards in every operation</p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            {commitments.map((c) => (
              <div key={c} className="card text-sm text-gray-300">{c}</div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[{ href: "/about/history", label: "Our History" }, { href: "/about/pillars", label: "Pillars" }, { href: "/about/team", label: "Team" }, { href: "/about/partners", label: "Partners" }].map((l) => (
            <a key={l.href} href={l.href} className="card hover:bg-white/10 transition-colors">
              <span className="text-brand-teal font-semibold">{l.label} →</span>
            </a>
          ))}
        </section>
      </div>
    </>
  );
}
