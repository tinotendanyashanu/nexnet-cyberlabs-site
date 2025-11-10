"use client";

import { ImageHero } from "@/components/ImageHero";
import { Target, Shield, Award, Heart, BookOpen, Eye, Zap, TrendingUp, Users, Globe, Briefcase, ArrowRight, CheckCircle2, Sparkles, Rocket } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const pillars = [
    { 
      icon: Shield, 
      title: "Discipline", 
      details: ["Standardized procedures", "Proper documentation", "Professional conduct"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconBg: "bg-blue-500/10"
    },
    { 
      icon: BookOpen, 
      title: "Knowledge First", 
      details: ["Research culture", "Continuous training", "Lifelong learning"],
      gradient: "from-purple-500/20 to-pink-500/20",
      iconBg: "bg-purple-500/10"
    },
    { 
      icon: Award, 
      title: "Reputation Over Revenue", 
      details: ["Trust before profit", "Transparency", "Evidence-based work"],
      gradient: "from-teal-500/20 to-green-500/20",
      iconBg: "bg-teal-500/10"
    },
    { 
      icon: Heart, 
      title: "Community Impact", 
      details: ["Mentorship", "Training next generation", "Regional resilience"],
      gradient: "from-rose-500/20 to-pink-500/20",
      iconBg: "bg-rose-500/10"
    },
    { 
      icon: Target, 
      title: "Integrity", 
      details: ["No unethical hacking", "Lawful frameworks", "Responsible disclosure"],
      gradient: "from-indigo-500/20 to-blue-500/20",
      iconBg: "bg-indigo-500/10"
    }
  ];

  const methodology = [
    { step: "Assess", desc: "Identify risks, vulnerabilities, and threat landscape", color: "from-blue-500 to-cyan-500" },
    { step: "Protect", desc: "Implement defensive controls and best practices", color: "from-purple-500 to-pink-500" },
    { step: "Detect", desc: "Continuously monitor for abnormal behaviors", color: "from-teal-500 to-green-500" },
    { step: "Respond", desc: "Contain and neutralize threats rapidly", color: "from-orange-500 to-red-500" },
    { step: "Recover & Report", desc: "Restore operations and document findings", color: "from-indigo-500 to-blue-500" }
  ];

  const leadership = [
    { 
      name: "Tinotenda Nyashanu", 
      role: "Co‑Founder & Technical Director", 
      blurb: "AI and cybersecurity engineer with background in digital forensics, data science, and intelligent systems. Leads R&D and technology innovation.",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    { 
      name: "Cyber Investigations Lead", 
      role: "Co‑Founder & Head of Cyber Investigations", 
      blurb: "Network forensics, threat intelligence, and incident management lead. Oversees IR and forensic operations.",
      gradient: "from-purple-500/10 to-pink-500/10"
    },
    { 
      name: "Academy Director", 
      role: "Co‑Founder & Director of Cyber Academy", 
      blurb: "Leads CyberLabs Academy and internship program, managing training pipelines and regional capacity-building.",
      gradient: "from-teal-500/10 to-green-500/10"
    }
  ];

  const operations = [
    { 
      icon: Briefcase, 
      type: "Headquarters", 
      where: "Harare, Zimbabwe", 
      note: "Main operations center and strategic command",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    { 
      icon: Globe, 
      type: "European Desk", 
      where: "Warsaw, Poland", 
      note: "24/7 EU client services and cyber fusion center",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    { 
      icon: BookOpen, 
      type: "Research Hubs", 
      where: "Nairobi • Johannesburg • Lagos", 
      note: "Regional threat intelligence and training",
      gradient: "from-teal-500/20 to-green-500/20"
    },
    { 
      icon: Users, 
      type: "Remote Cyber Pods", 
      where: "Distributed (Africa & EU)", 
      note: "Cloud-based analyst teams and intern networks",
      gradient: "from-orange-500/20 to-red-500/20"
    }
  ];

  const commitments = [
    { text: "Zimbabwe Cyber & Data Protection Act and EU GDPR alignment", icon: Shield },
    { text: "Secure data handling and role-based access controls", icon: Target },
    { text: "Responsible vulnerability disclosure program", icon: CheckCircle2 },
    { text: "Client confidentiality and NDAs by default", icon: Award },
    { text: "Continuous improvement via internal audits & R&D", icon: Rocket },
    { text: "ISO 27001 (cert) and SOC 2 (roadmap)", icon: Sparkles }
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

      {/* Who We Are - Redesigned */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-slate/50 to-brand-navy" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl animate-pulse" />
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/30 mb-4">
                <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                <span className="text-brand-teal font-semibold text-sm uppercase tracking-widest">Our Story</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-brand-teal to-white bg-clip-text text-transparent">
                Who We Are
              </h2>
            </div>

            {/* Main Content */}
            <div className="space-y-8 animate-fade-in-up delay-200">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed text-center">
                NexNet CyberLabs builds a world‑class African cybersecurity institution that protects, investigates,
                and educates with <span className="text-brand-teal font-bold">integrity and discipline</span>. We specialize in
                <span className="text-white font-semibold"> digital forensics, incident response, OSINT, threat intelligence, GRC,</span>
                and <span className="text-white font-semibold">security training</span>.
              </p>

              {/* Vision & Mission Cards */}
              <div className="grid md:grid-cols-2 gap-6 mt-12">
                <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-brand-teal/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-teal/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                        <Eye className="h-6 w-6 text-brand-teal" />
                      </div>
                      <h3 className="text-2xl font-bold group-hover:text-brand-teal transition-colors">Vision</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                      Become Africa's leading world‑class cybersecurity and intelligence bureau — reshaping the global
                      narrative from dependency to leadership through integrity, discipline, and knowledge‑based defense.
                    </p>
                  </div>
                </div>

                <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-brand-teal/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                        <Target className="h-6 w-6 text-brand-teal" />
                      </div>
                      <h3 className="text-2xl font-bold group-hover:text-brand-teal transition-colors">Mission</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                      Deliver disciplined, knowledge‑driven cyber defense and investigations through ethical, evidence‑based,
                      and transparent practices that safeguard businesses, governments, and individuals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars - Redesigned */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-slate via-brand-navy to-brand-slate" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/30 mb-4">
              <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
              <span className="text-brand-teal font-semibold text-sm uppercase tracking-widest">Our Values</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-brand-teal to-white bg-clip-text text-transparent">
              Core Pillars
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Values that guide every engagement and decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className={`group animate-fade-in-up delay-${(idx + 1) * 100}`}>
                  <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-teal/20 hover:border-brand-teal/50">
                    <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className={`inline-flex p-4 rounded-xl ${p.iconBg} border border-white/10 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <Icon className="h-7 w-7 text-brand-teal group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-teal transition-colors">{p.title}</h3>
                      <ul className="space-y-2">
                        {p.details.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                            <CheckCircle2 className="w-4 h-4 text-brand-teal mt-1 flex-shrink-0" />
                            <span className="text-sm">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology - Redesigned */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-slate/50 to-brand-navy" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-brand-teal/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/30 mb-4">
                <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                <span className="text-brand-teal font-semibold text-sm uppercase tracking-widest">Our Approach</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-brand-teal to-white bg-clip-text text-transparent">
                Our Methodology
              </h2>
              <p className="text-xl text-gray-300">
                Hybrid intelligence model aligned with NIST, ISO 27001, MITRE ATT&CK, and GDPR
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {methodology.map((m, i) => (
                <div key={m.step} className={`group animate-fade-in-up delay-${(i + 1) * 100}`}>
                  <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-brand-teal/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-teal/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${m.color} text-white font-bold text-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-teal transition-colors">{m.step}</h3>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{m.desc}</p>
                      
                      <div className="flex items-center gap-2 text-brand-teal font-semibold opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300 mt-4">
                        <span className="text-sm uppercase tracking-wide">Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-brand-teal/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership - Redesigned */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-slate via-brand-navy to-brand-slate" />
        <div className="absolute top-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/30 mb-4">
              <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
              <span className="text-brand-teal font-semibold text-sm uppercase tracking-widest">Meet The Team</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-brand-teal to-white bg-clip-text text-transparent">
              Leadership
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multidisciplinary expertise in defense, investigations, and education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {leadership.map((l, idx) => (
              <div key={l.name} className={`group animate-fade-in-up delay-${(idx + 1) * 100}`}>
                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-teal/20 hover:border-brand-teal/50">
                  <div className={`absolute inset-0 bg-gradient-to-br ${l.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    {/* Avatar Placeholder */}
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-teal to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-teal transition-colors">{l.name}</h3>
                    <p className="text-brand-teal text-sm font-semibold mb-4 uppercase tracking-wide">{l.role}</p>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-sm">
                      {l.blurb}
                    </p>
                  </div>

                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-brand-teal/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Operations - Redesigned */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-slate/50 to-brand-navy" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/30 mb-4">
              <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
              <span className="text-brand-teal font-semibold text-sm uppercase tracking-widest">Global Presence</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-brand-teal to-white bg-clip-text text-transparent">
              Global Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Remote‑first with strategic hubs across Africa and the EU
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {operations.map((o, idx) => {
              const Icon = o.icon;
              return (
                <div key={o.type} className={`group animate-fade-in-up delay-${(idx + 1) * 100}`}>
                  <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-teal/20 hover:border-brand-teal/50">
                    <div className={`absolute inset-0 bg-gradient-to-br ${o.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-4 rounded-xl bg-brand-teal/10 border border-brand-teal/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <Icon className="h-7 w-7 text-brand-teal" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold group-hover:text-brand-teal transition-colors">{o.type}</h3>
                          <p className="text-sm text-gray-400 mt-1 font-semibold">{o.where}</p>
                        </div>
                      </div>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                        {o.note}
                      </p>
                    </div>

                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-brand-teal/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitments - Redesigned */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-slate via-brand-navy to-brand-slate" />
        <div className="absolute inset-0 grid-pattern opacity-10" />
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/30 mb-4">
                <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                <span className="text-brand-teal font-semibold text-sm uppercase tracking-widest">Trust & Compliance</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-brand-teal to-white bg-clip-text text-transparent">
                Our Commitment to Trust
              </h2>
              <p className="text-xl text-gray-300">
                Strict ethical, legal, and technical standards in every operation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commitments.map((c, idx) => {
                const Icon = c.icon;
                return (
                  <div key={c.text} className={`group animate-fade-in-up delay-${(idx + 1) * 100}`}>
                    <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-brand-teal/50 transition-all duration-500 hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                      
                      <div className="relative z-10 flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-brand-teal/10 border border-brand-teal/20 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-5 h-5 text-brand-teal" />
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                          {c.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links - Redesigned */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-slate/50 to-brand-navy" />
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <h3 className="text-3xl font-bold mb-4">Explore More</h3>
            <p className="text-gray-400">Dive deeper into our story and capabilities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { href: "/about/history", label: "Our History", icon: BookOpen, gradient: "from-blue-500/20 to-cyan-500/20" }, 
              { href: "/about/pillars", label: "Pillars", icon: Shield, gradient: "from-purple-500/20 to-pink-500/20" }, 
              { href: "/about/team", label: "Team", icon: Users, gradient: "from-teal-500/20 to-green-500/20" }, 
              { href: "/about/partners", label: "Partners", icon: Globe, gradient: "from-orange-500/20 to-red-500/20" }
            ].map((l, idx) => {
              const Icon = l.icon;
              return (
                <Link 
                  key={l.href} 
                  href={l.href} 
                  className={`group animate-fade-in-up delay-${(idx + 1) * 100}`}
                >
                  <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-teal/20 hover:border-brand-teal/50">
                    <div className={`absolute inset-0 bg-gradient-to-br ${l.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10 text-center">
                      <div className="inline-flex p-4 rounded-xl bg-brand-teal/10 border border-brand-teal/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-brand-teal" />
                      </div>
                      <h4 className="text-xl font-bold mb-2 group-hover:text-brand-teal transition-colors">{l.label}</h4>
                      <div className="flex items-center justify-center gap-2 text-brand-teal font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm">Explore</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
