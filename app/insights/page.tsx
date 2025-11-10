"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BookOpen, FileText, Download, TrendingUp, Calendar, User, Clock, Search, Filter } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";

const blogPosts = [
  {
    slug: "zero-day-triage",
    title: "Zero-Day Triage Across Distributed Teams",
    summary: "Playbooks for coordinating Africa + EU IR teams when zero-days drop on a Friday night.",
    author: "Tariro Makoni",
    date: "2025-03-12",
    tags: ["Incident Response", "Process", "Playbooks"],
    hero: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    readingTime: "8 min",
    category: "Incident Response"
  },
  {
    slug: "grc-fast-lane",
    title: "GRC in the Fast Lane: ISO 27001 in 120 Days",
    summary: "How our hybrid audit pods accelerated certification for a Zimbabwean fintech unicorn.",
    author: "Zanele Sibanda",
    date: "2025-02-04",
    tags: ["GRC", "ISO 27001"],
    hero: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    readingTime: "6 min",
    category: "Compliance"
  },
  {
    slug: "threat-landscape-ssa",
    title: "2025 Threat Landscape for Sub-Saharan Africa",
    summary: "Top ransomware crews, geo-political drivers, and sector hotspots.",
    author: "Mateusz Kowalski",
    date: "2025-01-18",
    tags: ["Threat Intel", "Reports"],
    hero: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
    readingTime: "12 min",
    category: "Threat Intelligence"
  },
  {
    slug: "phishing-awareness-2025",
    title: "Phishing Awareness: 2025 Trends & Countermeasures",
    summary: "Latest phishing techniques targeting African enterprises and how to build resilience through training.",
    author: "Farai Gumbo",
    date: "2025-01-05",
    tags: ["Security Awareness", "Training"],
    hero: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    readingTime: "7 min",
    category: "Security Awareness"
  },
  {
    slug: "forensics-mobile-devices",
    title: "Mobile Device Forensics in Cross-Border Investigations",
    summary: "Techniques and legal considerations for mobile forensics across African and European jurisdictions.",
    author: "Kacper Nowak",
    date: "2024-12-20",
    tags: ["Digital Forensics", "Mobile"],
    hero: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    readingTime: "10 min",
    category: "Digital Forensics"
  },
  {
    slug: "soc-automation-playbooks",
    title: "Building SOC Automation Playbooks That Actually Work",
    summary: "Lessons from deploying SOAR platforms across 15+ African SOCs with real playbook examples.",
    author: "James Chikwanha",
    date: "2024-12-01",
    tags: ["SOC", "Automation", "SOAR"],
    hero: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    readingTime: "9 min",
    category: "SOC Operations"
  }
];

const reports = [
  { 
    title: "State of DFIR in Emerging Markets", 
    description: "Benchmarks and field notes from 60+ incidents across Africa and Eastern Europe.", 
    href: "/docs/state-of-dfir.pdf",
    pages: "42 pages",
    published: "Q4 2024"
  },
  { 
    title: "Executive Guide to Cyber Resilience", 
    description: "Board-focused playbook for resilience decisions and budget justification.", 
    href: "/docs/executive-guide.pdf",
    pages: "28 pages",
    published: "Q3 2024"
  },
  { 
    title: "Education Sector Threat Brief", 
    description: "Research panel findings and mitigation guidance for universities and schools.", 
    href: "/docs/education-brief.pdf",
    pages: "35 pages",
    published: "Q2 2024"
  },
  { 
    title: "2025 Ransomware Trends Report", 
    description: "Analysis of 200+ ransomware incidents with actor attribution and TTPs.", 
    href: "/docs/ransomware-2025.pdf",
    pages: "56 pages",
    published: "Q1 2025"
  }
];

const caseStudies = [
  { 
    title: "Telecom Supply Chain Breach", 
    result: "Zero customer impact, regulator brief in 36h.", 
    sector: "Telecom",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
  },
  { 
    title: "Digital Bank Ransomware", 
    result: "99% data recovery, new IR runbooks, no ransom paid.", 
    sector: "Financial Services",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop"
  },
  { 
    title: "Government CERT Enablement", 
    result: "Incident response maturity uplift to level 4.", 
    sector: "Government",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600&h=400&fit=crop"
  }
];

const categories = ["All", "Incident Response", "Threat Intelligence", "Digital Forensics", "Compliance", "Security Awareness", "SOC Operations"];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=1920&h=1080&fit=crop"
            alt="Insights & Research"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/95 via-brand-navy/85 to-brand-navy" />
        </div>
        <div className="relative z-10 section-container text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <BookOpen className="w-5 h-5 text-brand-teal" />
            <span className="text-sm font-semibold">Insights & Research</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Field Notes & <span className="text-brand-teal">Intelligence</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stories from incident frontlines, academy labs, and boardroom briefings across Africa and the EU.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#articles" className="btn-primary inline-flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Read Articles
            </a>
            <a href="#reports" className="btn-secondary inline-flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Reports
            </a>
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="bg-brand-navy/50 backdrop-blur-sm border-y border-brand-teal/20 py-8" id="articles">
        <div className="section-container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl glass-card border border-white/10 focus:border-brand-teal focus:outline-none transition-colors"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === category
                        ? "bg-brand-teal text-white"
                        : "glass-card border border-white/10 text-gray-300 hover:border-brand-teal/50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Grid */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
          <p className="text-gray-300 text-lg">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} {activeCategory !== "All" && `in ${activeCategory}`}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, idx) => (
            <GlowCard key={idx} className="overflow-hidden" hover>
              <div className="relative h-48">
                <Image
                  src={post.hero}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-brand-teal/90 backdrop-blur-sm text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  <span></span>
                  <Clock className="w-4 h-4" />
                  {post.readingTime}
                </div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.summary}</p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
                <Link 
                  href={`/insights/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-brand-teal hover:underline text-sm"
                >
                  Read More
                  <TrendingUp className="w-4 h-4" />
                </Link>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* Reports Section */}
      <section className="section-container py-20 bg-gradient-to-b from-transparent to-brand-navy/30" id="reports">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Threat Reports & Research</h2>
          <p className="text-gray-300 text-lg">In-depth analysis and actionable intelligence for security leaders</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reports.map((report, idx) => (
            <GlowCard key={idx} className="p-6" hover>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-brand-teal" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{report.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{report.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <span>{report.pages}</span>
                    <span></span>
                    <span>{report.published}</span>
                  </div>
                  <a 
                    href={report.href}
                    className="inline-flex items-center gap-2 text-brand-teal hover:underline text-sm"
                    download
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Case Studies</h2>
          <p className="text-gray-300 text-lg">Real incident outcomes from recent engagements</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, idx) => (
            <GlowCard key={idx} className="overflow-hidden" hover>
              <div className="relative h-48">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs font-semibold border border-white/20 mb-2">
                    {study.sector}
                  </span>
                  <h3 className="text-lg font-bold">{study.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 text-sm">{study.result}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-container py-20">
        <GlowCard className="p-12 text-center max-w-3xl mx-auto">
          <BookOpen className="w-16 h-16 text-brand-teal mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-gray-300 text-lg mb-6">
            Get monthly threat briefs, incident playbooks, and research updates delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your.email@company.com"
              className="flex-1 px-4 py-3 rounded-xl glass-card border border-white/10 focus:border-brand-teal focus:outline-none transition-colors"
              required
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-4">No spam. Unsubscribe anytime.</p>
        </GlowCard>
      </section>

      {/* Final CTA */}
      <section className="section-container py-20">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-purple-500/20" />
          <GlowCard className="relative p-12 text-center">
            <FileText className="w-16 h-16 text-brand-teal mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Need Custom Research?</h2>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Our threat intelligence team can provide sector-specific threat briefs and custom research for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Request Research
              </a>
              <a href="/services/threat-intelligence" className="btn-secondary inline-flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Threat Intel Services
              </a>
            </div>
          </GlowCard>
        </div>
      </section>
    </>
  );
}
