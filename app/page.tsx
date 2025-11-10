"use client";

import Link from "next/link";
import Image from "next/image";
import VideoHero from "@/components/ui/VideoHero";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Carousel from "@/components/ui/Carousel";
import { StructuredData } from "@/components/StructuredData";
import { serviceDirectory } from "@/lib/site-data";
import { 
  ShieldCheckIcon, 
  ChartBarIcon, 
  UserGroupIcon, 
  GlobeAltIcon,
  ArrowRightIcon,
  CheckBadgeIcon,
  BoltIcon,
  AcademicCapIcon
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <>
      {/* Hero Section with Video Background */}
      <VideoHero
        poster="/images/hero/globe-network.svg"
        title="Connecting Intelligence. Securing Nations."
        subtitle="Africa-born, EU-operating cybersecurity labs delivering investigations-first IR, DFIR, and intelligence programs with measurable outcomes."
        primaryCTA={{ text: "Request a Consultation", href: "/contact/consultation" }}
        secondaryCTA={{ text: "Emergency Incident Response", href: "/contact/incident" }}
      />

      {/* KPI Band with Animated Counters */}
      <section className="relative py-12 border-y border-white/10 bg-gradient-to-r from-brand-navy via-brand-slate to-brand-navy">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-teal mb-2">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <p className="text-gray-400 text-sm uppercase tracking-wide">Incidents Resolved</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-teal mb-2">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <p className="text-gray-400 text-sm uppercase tracking-wide">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-teal mb-2">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <p className="text-gray-400 text-sm uppercase tracking-wide">Countries Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-teal mb-2">
                <AnimatedCounter end={1200} suffix="+" />
              </div>
              <p className="text-gray-400 text-sm uppercase tracking-wide">Professionals Trained</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px glow-line" />
      </section>

      {/* Services Showcase - Redesigned */}
      <section className="relative py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-slate/50 to-brand-navy" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Floating Icons */}
        <div className="absolute top-40 left-[15%] animate-float">
          <ShieldCheckIcon className="w-12 h-12 text-brand-teal/20" />
        </div>
        <div className="absolute top-60 right-[20%] animate-float delay-500">
          <BoltIcon className="w-10 h-10 text-purple-400/20" />
        </div>
        <div className="absolute bottom-40 left-[25%] animate-float delay-1000">
          <CheckBadgeIcon className="w-14 h-14 text-blue-400/20" />
        </div>

        <div className="relative container mx-auto px-6">
          {/* Section Header with Animation */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/30 mb-4">
              <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
              <span className="text-brand-teal font-semibold text-sm uppercase tracking-widest">Core Services</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-brand-teal to-white bg-clip-text text-transparent">
              Investigations-First Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From digital forensics to threat intelligence, our services are built on 
              <span className="text-brand-teal font-semibold"> real-world investigation experience</span>
            </p>
          </div>

          {/* Services Grid with Staggered Animation */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Penetration Testing",
                description: "Comprehensive security assessments using proven methodologies and cutting-edge tools.",
                icon: <ShieldCheckIcon className="w-10 h-10" />,
                href: "/services/security-assessments",
                gradient: "from-blue-500/20 to-cyan-500/20",
                iconBg: "bg-blue-500/10",
                delay: "delay-100"
              },
              {
                title: "Digital Forensics",
                description: "Evidence-grade investigations for incident response and legal proceedings with court-admissible results.",
                icon: <CheckBadgeIcon className="w-10 h-10" />,
                href: "/services/digital-forensics",
                gradient: "from-purple-500/20 to-pink-500/20",
                iconBg: "bg-purple-500/10",
                delay: "delay-200"
              },
              {
                title: "Threat Intelligence",
                description: "Contextual threat data tailored to African and EU threat landscapes with actionable insights.",
                icon: <ChartBarIcon className="w-10 h-10" />,
                href: "/services/threat-intelligence",
                gradient: "from-teal-500/20 to-green-500/20",
                iconBg: "bg-teal-500/10",
                delay: "delay-300"
              },
              {
                title: "SOC Operations",
                description: "24/7 security monitoring and incident response capabilities with rapid threat containment.",
                icon: <BoltIcon className="w-10 h-10" />,
                href: "/services/soc-operations",
                gradient: "from-yellow-500/20 to-orange-500/20",
                iconBg: "bg-yellow-500/10",
                delay: "delay-400"
              },
              {
                title: "GRC Consulting",
                description: "Navigate compliance requirements with expert guidance on regulatory frameworks.",
                icon: <GlobeAltIcon className="w-10 h-10" />,
                href: "/services/governance-risk-compliance",
                gradient: "from-indigo-500/20 to-blue-500/20",
                iconBg: "bg-indigo-500/10",
                delay: "delay-500"
              },
              {
                title: "Security Training",
                description: "Hands-on cybersecurity education for professionals at all levels with industry certifications.",
                icon: <AcademicCapIcon className="w-10 h-10" />,
                href: "/academy",
                gradient: "from-red-500/20 to-pink-500/20",
                iconBg: "bg-red-500/10",
                delay: "delay-600"
              }
            ].map((service, index) => (
              <Link key={index} href={service.href} className={`group animate-fade-in-up ${service.delay}`}>
                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-teal/20 hover:border-brand-teal/50">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-2xl animate-border-glow" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with Animated Background */}
                    <div className={`inline-flex p-4 rounded-xl ${service.iconBg} border border-white/10 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <div className="text-brand-teal group-hover:text-white transition-colors duration-300">
                        {service.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-teal transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Arrow Indicator */}
                    <div className="flex items-center gap-2 text-brand-teal font-semibold opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                      <span className="text-sm uppercase tracking-wide">Learn More</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-brand-teal/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Link>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center animate-fade-in-up delay-700">
            <Link 
              href="/services" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-brand-teal to-brand-teal-light text-brand-navy font-bold text-lg shadow-lg shadow-brand-teal/30 hover:shadow-brand-teal/50 hover:scale-105 transition-all duration-300"
            >
              <span>Explore Full Service Catalog</span>
              <ArrowRightIcon className="w-5 h-5 animate-bounce-horizontal" />
            </Link>
          </div>
        </div>

        {/* Bottom Glow Line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-brand-teal to-transparent" />
      </section>

      {/* Visual Impact Showcase - New Photo Section */}
      <section className="relative py-24 overflow-hidden bg-brand-navy">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/30 mb-4">
              <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
              <span className="text-brand-teal font-semibold text-sm uppercase tracking-widest">Our Work in Action</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-brand-teal to-white bg-clip-text text-transparent">
              Where Expertise Meets Execution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From advanced SOC operations to hands-on training, see how we deliver results
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
                title: "Advanced Threat Hunting",
                category: "Security Operations",
                gradient: "from-blue-600/80 to-cyan-600/80"
              },
              {
                image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
                title: "Digital Forensics Lab",
                category: "Investigation",
                gradient: "from-purple-600/80 to-pink-600/80"
              },
              {
                image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
                title: "Threat Intelligence Center",
                category: "Analysis",
                gradient: "from-teal-600/80 to-green-600/80"
              },
              {
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
                title: "24/7 SOC Monitoring",
                category: "Response",
                gradient: "from-orange-600/80 to-red-600/80"
              },
              {
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
                title: "Compliance Framework",
                category: "Governance",
                gradient: "from-indigo-600/80 to-blue-600/80"
              },
              {
                image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
                title: "Hands-On Training",
                category: "Education",
                gradient: "from-rose-600/80 to-pink-600/80"
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`group relative h-80 rounded-2xl overflow-hidden animate-fade-in-up delay-${(idx + 1) * 100}`}
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold mb-3 uppercase tracking-wider">
                      {item.category}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-sm font-semibold">Learn More</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Decorative Border */}
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-2xl transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Carousel - Enhanced */}
      <section className="relative py-32 overflow-hidden">
        {/* Multi-Layer Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-slate via-brand-navy to-brand-slate" />
        <div className="absolute inset-0 grid-pattern opacity-5" />
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-brand-teal/20 to-purple-500/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-l from-blue-500/20 to-brand-teal/20 rounded-full blur-3xl animate-float-slow delay-2000" />

        {/* Decorative Elements */}
        <div className="absolute top-20 right-[10%] w-32 h-32 border-2 border-brand-teal/20 rounded-full animate-spin-slow" />
        <div className="absolute bottom-40 left-[15%] w-24 h-24 border-2 border-purple-500/20 rounded-lg animate-spin-reverse" />

        <div className="relative container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-brand-teal/20 to-purple-500/20 border border-brand-teal/30 mb-6 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
              <span className="text-brand-teal font-bold text-sm uppercase tracking-widest">Success Stories</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-brand-teal to-purple-400 bg-clip-text text-transparent">
                Real-World Impact
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Confidential case abstracts demonstrating our 
              <span className="text-brand-teal font-semibold"> methodology and measurable outcomes</span>
            </p>
          </div>
          
          {/* Enhanced Carousel */}
          <div className="max-w-6xl mx-auto animate-fade-in-up delay-200">
            <div className="min-h-[500px]">
              <Carousel autoPlay interval={7000} showControls showIndicators className="h-[500px]">
                {[
                  {
                    sector: "Financial Services",
                    title: "Multi-jurisdiction fraud investigation",
                    impact: "Recovered $2.3M in assets",
                    description: "Led cross-border digital forensics investigation involving 4 countries. Provided court-admissible evidence that resulted in successful prosecution and asset recovery.",
                    stats: [
                      { label: "Countries", value: "4" },
                      { label: "Days", value: "21" },
                      { label: "Recovery", value: "$2.3M" }
                    ],
                    icon: <CheckBadgeIcon className="w-8 h-8" />,
                    color: "from-blue-500 to-cyan-500",
                    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop"
                  },
                  {
                    sector: "Telecommunications",
                    title: "Network intrusion response",
                    impact: "Contained breach in under 6 hours",
                    description: "Rapid incident response to sophisticated APT attack. Identified patient zero, removed persistence mechanisms, and hardened infrastructure to prevent reinfection.",
                    stats: [
                      { label: "Response Time", value: "6hrs" },
                      { label: "Systems Secured", value: "150+" },
                      { label: "Malware Variants", value: "12" }
                    ],
                    icon: <BoltIcon className="w-8 h-8" />,
                    color: "from-purple-500 to-pink-500",
                    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop"
                  },
                  {
                    sector: "Public Sector",
                    title: "National cyber capacity building",
                    impact: "Trained 200+ government personnel",
                    description: "Delivered comprehensive cybersecurity training program for national CERT team. Included hands-on labs, incident simulation, and policy development workshops.",
                    stats: [
                      { label: "Trainees", value: "200+" },
                      { label: "Certifications", value: "85%" },
                      { label: "Weeks", value: "8" }
                    ],
                    icon: <AcademicCapIcon className="w-8 h-8" />,
                    color: "from-teal-500 to-green-500",
                    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop"
                  }
                ].map((caseStudy, index) => (
                  <div key={index} className="h-full flex items-center justify-center p-8">
                    <div className="relative max-w-4xl w-full group">
                      {/* Main Card */}
                      <div className="relative p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/20 backdrop-blur-xl shadow-2xl overflow-hidden">
                        {/* Background Image */}
                        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                          <Image
                            src={caseStudy.image}
                            alt={caseStudy.title}
                            fill
                            className="object-cover"
                            sizes="1200px"
                          />
                        </div>
                        
                        {/* Animated Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                      
                        {/* Content */}
                        <div className="relative z-10">
                          {/* Header with Icon */}
                          <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center gap-4">
                              <div className={`p-4 rounded-2xl bg-gradient-to-br ${caseStudy.color} opacity-20 border border-white/20`}>
                                <div className="text-brand-teal">
                                  {caseStudy.icon}
                                </div>
                              </div>
                              <div>
                                <div className="inline-block px-4 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/40 text-brand-teal text-xs font-bold mb-2 uppercase tracking-wider">
                                  {caseStudy.sector}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold">{caseStudy.title}</h3>
                              </div>
                            </div>
                          </div>

                          {/* Impact Statement */}
                          <div className={`text-3xl font-bold mb-6 bg-gradient-to-r ${caseStudy.color} bg-clip-text text-transparent`}>
                            {caseStudy.impact}
                          </div>

                          {/* Description */}
                          <p className="text-gray-200 text-lg leading-relaxed mb-8">
                            {caseStudy.description}
                          </p>

                          {/* Stats Grid */}
                          <div className="grid grid-cols-3 gap-6 mb-8">
                            {caseStudy.stats.map((stat, idx) => (
                              <div key={idx} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="text-2xl font-bold text-brand-teal mb-1">{stat.value}</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wide">{stat.label}</div>
                              </div>
                            ))}
                          </div>

                          {/* CTA */}
                          <Link 
                            href="/insights/case-studies" 
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal font-semibold hover:bg-brand-teal/20 hover:scale-105 transition-all duration-300 group/link"
                          >
                            <span>View All Case Studies</span>
                            <ArrowRightIcon className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-brand-teal/30 to-transparent rounded-full blur-2xl" />
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-purple-500/30 to-transparent rounded-full blur-2xl" />
                      </div>
                    </div>
                  </div>
              ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Strip - Reimagined */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-slate to-brand-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-teal/5 via-transparent to-transparent" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 grid-pattern opacity-10" />

        {/* Animated Lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-teal/50 to-transparent animate-shimmer" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-shimmer delay-1000" />

        <div className="relative container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
              Powered by world-class partnerships
            </p>
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
              Trusted by leading organizations across Africa and Europe
            </h3>
          </div>

          {/* Partners Grid with Animation */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              { name: "DigitalGeeks", color: "from-blue-400 to-cyan-400", delay: "" },
              { name: "Sanganai", color: "from-purple-400 to-pink-400", delay: "delay-100" },
              { name: "PreciAgro", color: "from-teal-400 to-green-400", delay: "delay-200" },
              { name: "Partner 4", color: "from-orange-400 to-red-400", delay: "delay-300" },
              { name: "Partner 5", color: "from-indigo-400 to-blue-400", delay: "delay-400" },
              { name: "Partner 6", color: "from-pink-400 to-rose-400", delay: "delay-500" }
            ].map((partner, i) => (
              <div 
                key={i} 
                className={`group animate-fade-in-up ${partner.delay}`}
              >
                <div className="relative h-32 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-110 hover:border-brand-teal/50 hover:shadow-lg hover:shadow-brand-teal/20">
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Partner Logo Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className={`w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br ${partner.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300 flex items-center justify-center`}>
                        <UserGroupIcon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-xs font-semibold text-gray-500 group-hover:text-gray-300 transition-colors">
                        {partner.name}
                      </div>
                    </div>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-2xl animate-border-glow" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { 
                icon: <ShieldCheckIcon className="w-8 h-8" />,
                label: "ISO 27001 Certified",
                color: "from-blue-400 to-cyan-400",
                delay: "delay-600"
              },
              { 
                icon: <CheckBadgeIcon className="w-8 h-8" />,
                label: "GDPR Compliant",
                color: "from-purple-400 to-pink-400",
                delay: "delay-700"
              },
              { 
                icon: <GlobeAltIcon className="w-8 h-8" />,
                label: "15+ Countries Served",
                color: "from-teal-400 to-green-400",
                delay: "delay-700"
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 animate-fade-in-up ${item.delay}`}
              >
                <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color} opacity-20`}>
                  <div className="text-white">{item.icon}</div>
                </div>
                <span className="text-sm font-semibold text-gray-300">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner - Enhanced */}
      <section className="relative py-32 overflow-hidden">
        {/* Multi-Layer Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 via-brand-navy to-purple-500/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-teal/30 via-transparent to-transparent" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-20 animate-pulse-slow" />

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-[10%] w-32 h-32 border-2 border-brand-teal/30 rounded-full animate-float" />
        <div className="absolute top-40 right-[15%] w-24 h-24 border-2 border-purple-400/30 rounded-lg rotate-45 animate-float delay-500" />
        <div className="absolute bottom-32 left-[20%] w-40 h-40 border-2 border-blue-400/20 rounded-full animate-spin-slow" />
        <div className="absolute bottom-40 right-[25%] w-28 h-28 bg-gradient-to-br from-brand-teal/10 to-purple-500/10 rounded-2xl rotate-12 animate-float delay-1000" />

        {/* Large Glowing Orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-brand-teal/30 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-l from-purple-500/30 to-transparent rounded-full blur-3xl animate-pulse-slow delay-1000" />

        {/* Content Container */}
        <div className="relative container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Main Content Card */}
            <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/20 backdrop-blur-xl shadow-2xl overflow-hidden">
              {/* Decorative Corner Accents */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-brand-teal/40 to-transparent rounded-br-full" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-purple-500/40 to-transparent rounded-tl-full" />
              
              {/* Animated Icon Badge */}
              <div className="relative z-10 flex justify-center mb-8 animate-fade-in-up">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-teal/30 rounded-full blur-xl animate-pulse" />
                  <div className="relative p-6 rounded-full bg-gradient-to-br from-brand-teal/20 to-purple-500/20 border-2 border-brand-teal/50">
                    <ShieldCheckIcon className="w-12 h-12 text-brand-teal" />
                  </div>
                </div>
              </div>

              {/* Heading */}
              <div className="relative z-10 text-center mb-8 animate-fade-in-up delay-100">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white via-brand-teal to-purple-400 bg-clip-text text-transparent">
                    Ready to Strengthen Your Security Posture?
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                  Our elite team is available 
                  <span className="text-brand-teal font-bold"> 24/7 </span> 
                  for incident response and strategic consultations.
                </p>
              </div>

              {/* Feature Pills */}
              <div className="relative z-10 flex flex-wrap justify-center gap-4 mb-10 animate-fade-in-up delay-200">
                {[
                  { icon: <BoltIcon className="w-4 h-4" />, text: "Rapid Response" },
                  { icon: <CheckBadgeIcon className="w-4 h-4" />, text: "Expert Team" },
                  { icon: <GlobeAltIcon className="w-4 h-4" />, text: "Global Coverage" }
                ].map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/20 backdrop-blur-sm"
                  >
                    <div className="text-brand-teal">{feature.icon}</div>
                    <span className="text-sm font-semibold text-gray-200">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="relative z-10 flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-300">
                <Link 
                  href="/contact/consultation" 
                  className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-brand-teal to-brand-teal-light text-brand-navy font-bold text-lg shadow-xl shadow-brand-teal/40 hover:shadow-2xl hover:shadow-brand-teal/60 hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
                >
                  <span>Schedule a Consultation</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  
                  {/* Button Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                <Link 
                  href="/contact/incident" 
                  className="group px-8 py-4 rounded-full bg-white/5 border-2 border-brand-teal/50 text-brand-teal font-bold text-lg hover:bg-brand-teal/10 hover:border-brand-teal hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
                >
                  <BoltIcon className="w-5 h-5 animate-pulse" />
                  <span>Emergency Incident Response</span>
                </Link>
              </div>

              {/* Trust Badge */}
              <div className="relative z-10 mt-10 text-center animate-fade-in-up delay-400">
                <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
                  <CheckBadgeIcon className="w-5 h-5 text-brand-teal" />
                  <span>Trusted by 500+ organizations globally</span>
                </p>
              </div>

              {/* Animated Border Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-50">
                <div className="absolute inset-0 rounded-3xl animate-border-glow" />
              </div>
            </div>

            {/* Supporting Stats */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 animate-fade-in-up delay-500">
              {[
                { value: "< 1hr", label: "Average Response Time" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "24/7", label: "Global Coverage" }
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-3xl font-bold text-brand-teal mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-brand-teal to-transparent" />
      </section>

      <StructuredData
        id="service-schema"
        data={Object.values(serviceDirectory).map((service) => ({
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          description: service.summary,
          areaServed: ["Africa", "European Union"],
          provider: { "@type": "Organization", name: "NexNet CyberLabs" }
        }))}
      />
    </>
  );
}

