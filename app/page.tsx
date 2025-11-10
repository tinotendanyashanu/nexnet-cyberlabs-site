"use client";

import Link from "next/link";
import VideoHero from "@/components/ui/VideoHero";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import GlowCard from "@/components/ui/GlowCard";
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
import Image from "next/image";

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

      {/* Services Showcase with Images */}
      <section className="section-container">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="text-sm uppercase tracking-widest text-brand-teal font-semibold mb-2">Core Services</p>
            <h2 className="text-4xl md:text-5xl font-bold">Investigations-first expertise</h2>
            <p className="text-gray-400 mt-3 max-w-2xl">
              From digital forensics to threat intelligence, our services are built on real-world investigation experience.
            </p>
          </div>
          <Link 
            href="/services" 
            className="btn-secondary inline-flex items-center gap-2 group"
          >
            View full catalog
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Penetration Testing",
              description: "Comprehensive security assessments using proven methodologies.",
              icon: <ShieldCheckIcon className="w-8 h-8" />,
              href: "/services/security-assessments",
              image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop"
            },
            {
              title: "Digital Forensics",
              description: "Evidence-grade investigations for incident response and legal proceedings.",
              icon: <CheckBadgeIcon className="w-8 h-8" />,
              href: "/services/digital-forensics",
              image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop"
            },
            {
              title: "Threat Intelligence",
              description: "Contextual threat data tailored to African and EU threat landscapes.",
              icon: <ChartBarIcon className="w-8 h-8" />,
              href: "/services/threat-intelligence",
              image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop"
            },
            {
              title: "SOC Operations",
              description: "24/7 security monitoring and incident response capabilities.",
              icon: <BoltIcon className="w-8 h-8" />,
              href: "/services/soc-operations",
              image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
            },
            {
              title: "GRC Consulting",
              description: "Navigate compliance requirements with expert guidance.",
              icon: <GlobeAltIcon className="w-8 h-8" />,
              href: "/services/governance-risk-compliance",
              image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
            },
            {
              title: "Security Training",
              description: "Hands-on cybersecurity education for professionals at all levels.",
              icon: <AcademicCapIcon className="w-8 h-8" />,
              href: "/academy",
              image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
            }
          ].map((service, index) => (
            <Link key={index} href={service.href}>
              <GlowCard className="h-full group cursor-pointer">
                <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-brand-teal">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-teal transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {service.description}
                </p>
              </GlowCard>
            </Link>
          ))}
        </div>
      </section>

      {/* Case Studies Carousel */}
      <section className="py-20 bg-gradient-to-b from-brand-navy to-brand-slate relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-brand-teal font-semibold mb-2">Success Stories</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Real-world impact</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Confidential case abstracts demonstrating our methodology and measurable outcomes.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto h-96">
            <Carousel autoPlay interval={7000} showControls showIndicators>
              {[
                {
                  sector: "Financial Services",
                  title: "Multi-jurisdiction fraud investigation",
                  impact: "Recovered $2.3M in assets",
                  description: "Led cross-border digital forensics investigation involving 4 countries. Provided court-admissible evidence that resulted in successful prosecution and asset recovery."
                },
                {
                  sector: "Telecommunications",
                  title: "Network intrusion response",
                  impact: "Contained breach in under 6 hours",
                  description: "Rapid incident response to sophisticated APT attack. Identified patient zero, removed persistence mechanisms, and hardened infrastructure to prevent reinfection."
                },
                {
                  sector: "Public Sector",
                  title: "National cyber capacity building",
                  impact: "Trained 200+ government personnel",
                  description: "Delivered comprehensive cybersecurity training program for national CERT team. Included hands-on labs, incident simulation, and policy development workshops."
                }
              ].map((caseStudy, index) => (
                <div key={index} className="h-full flex items-center justify-center p-8">
                  <GlowCard className="max-w-3xl">
                    <div className="inline-block px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal text-xs font-semibold mb-4">
                      {caseStudy.sector}
                    </div>
                    <h3 className="text-3xl font-bold mb-3">{caseStudy.title}</h3>
                    <div className="text-2xl text-brand-teal font-semibold mb-4">
                      {caseStudy.impact}
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {caseStudy.description}
                    </p>
                    <Link href="/insights/case-studies" className="text-brand-teal hover:text-brand-teal-light transition-colors inline-flex items-center gap-2">
                      View all case studies
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </GlowCard>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Partners Strip */}
      <section className="py-16 border-y border-white/10">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm uppercase tracking-widest text-gray-500 mb-8">
            Trusted by leading organizations across Africa and Europe
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all">
                <div className="w-32 h-12 bg-white/5 rounded-lg flex items-center justify-center text-gray-500 text-xs">
                  Partner {i}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner with Gradient */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 via-brand-navy to-brand-teal/20" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to strengthen your security posture?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is available 24/7 for incident response and consultations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact/consultation" className="btn-primary inline-flex items-center gap-2">
              Schedule a consultation
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link href="/contact/incident" className="btn-secondary inline-flex items-center gap-2">
              Report an incident
            </Link>
          </div>
        </div>
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

