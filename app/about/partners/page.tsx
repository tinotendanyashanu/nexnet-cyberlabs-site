import { Metadata } from "next";
import { ImageHero } from "@/components/ImageHero";
import { Building2, GraduationCap, Shield, Globe2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Partners & Alliances - NexNet CyberLabs",
  description: "Technology partners, academic institutions, and cybersecurity alliances powering NexNet CyberLabs operations."
};

const technologyPartners = [
  {
    name: "Microsoft",
    category: "Cloud & Security",
    description: "Azure Sentinel SIEM, Microsoft Defender, cloud security solutions",
    partnership: "Azure Gold Partner, Microsoft Security Partner"
  },
  {
    name: "AWS",
    category: "Cloud Infrastructure",
    description: "EC2, S3, GuardDuty, Security Hub for forensic workloads and threat intelligence platform",
    partnership: "AWS Advanced Consulting Partner"
  },
  {
    name: "Cisco",
    category: "Network Security",
    description: "Firepower NGFW, Umbrella DNS security, Secure Endpoint",
    partnership: "Cisco Select Partner"
  },
  {
    name: "Fortinet",
    category: "Security Solutions",
    description: "FortiGate firewalls, FortiAnalyzer, FortiEDR endpoint detection",
    partnership: "Fortinet Professional Partner"
  },
  {
    name: "CrowdStrike",
    category: "Endpoint Security",
    description: "Falcon platform for EDR, threat hunting, and managed detection",
    partnership: "CrowdStrike Ready Partner"
  },
  {
    name: "Splunk",
    category: "SIEM & Analytics",
    description: "Enterprise Security, SOAR, log aggregation and correlation",
    partnership: "Splunk Services Partner"
  }
];

const academicPartners = [
  {
    name: "University of Zimbabwe",
    location: "Harare, Zimbabwe",
    collaboration: "Joint research on APT tactics, internship program, guest lectures in computer science department",
    established: "2024"
  },
  {
    name: "Chinhoyi University of Technology",
    location: "Chinhoyi, Zimbabwe",
    collaboration: "Cybersecurity curriculum development, lab sponsorship, annual capture-the-flag competition",
    established: "2024"
  },
  {
    name: "National University of Science and Technology",
    location: "Bulawayo, Zimbabwe",
    collaboration: "Digital forensics research, student mentorship, equipment donations",
    established: "2024"
  },
  {
    name: "Warsaw University of Technology",
    location: "Warsaw, Poland",
    collaboration: "European cybersecurity policy research, exchange program, joint publications",
    established: "2024"
  },
  {
    name: "African Cybersecurity Research Institute",
    location: "Virtual / Pan-African",
    collaboration: "Threat intelligence sharing, joint research grants, continental policy advocacy",
    established: "2025"
  }
];

const industryAlliances = [
  {
    name: "FIRST (Forum of Incident Response and Security Teams)",
    type: "Global",
    description: "Member organization for information sharing and best practices in incident response"
  },
  {
    name: "AfricaCERT",
    type: "Regional",
    description: "Coordination center for African CERTs and CSIRTs, threat intelligence sharing"
  },
  {
    name: "MISP Project",
    type: "Open Source",
    description: "Contributor to Malware Information Sharing Platform, threat intelligence standards"
  },
  {
    name: "OWASP Foundation",
    type: "Open Source",
    description: "Supporting member, contributor to web application security resources"
  },
  {
    name: "Cloud Security Alliance",
    type: "Industry",
    description: "Member of African chapter, cloud security research and standards development"
  },
  {
    name: "CREST International",
    type: "Industry",
    description: "Application pending for CREST accreditation for penetration testing services"
  }
];

export default function PartnersPage() {
  return (
    <>
      <ImageHero
        title="Partners & Alliances"
        subtitle="Building a world-class cybersecurity bureau requires world-class partnerships across technology, academia, and industry."
        bgSrc="/images/hero/globe-network.svg"
        ctaPrimary={{ href: "/contact", text: "Partner With Us" }}
        ctaSecondary={{ href: "/about", text: "About Us" }}
      />

      <div className="container py-20 space-y-20">
        {/* Technology Partners */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-brand-teal" />
            <h2 className="text-3xl font-bold">Technology Partners</h2>
          </div>
          <p className="text-gray-300 mb-8 max-w-3xl">
            We partner with leading technology vendors to deliver enterprise-grade security solutions
            to our clients across Africa and the EU.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyPartners.map((partner) => (
              <article key={partner.name} className="card space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{partner.name}</h3>
                  <Building2 className="w-5 h-5 text-brand-teal" />
                </div>
                <p className="text-sm text-brand-teal font-medium">{partner.category}</p>
                <p className="text-gray-300 text-sm">{partner.description}</p>
                <p className="text-xs text-gray-400 pt-2 border-t border-white/10">
                  {partner.partnership}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Academic Partners */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-brand-teal" />
            <h2 className="text-3xl font-bold">Academic Partners</h2>
          </div>
          <p className="text-gray-300 mb-8 max-w-3xl">
            We collaborate with universities across Africa and Europe for research, curriculum development,
            and building the next generation of cybersecurity professionals.
          </p>
          <div className="space-y-6">
            {academicPartners.map((partner) => (
              <article key={partner.name} className="card">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div>
                      <h3 className="text-xl font-bold">{partner.name}</h3>
                      <p className="text-sm text-gray-400">{partner.location}</p>
                    </div>
                    <p className="text-gray-300">{partner.collaboration}</p>
                  </div>
                  <span className="px-3 py-1 bg-brand-teal/20 text-brand-teal rounded-full text-xs font-semibold whitespace-nowrap">
                    Since {partner.established}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Industry Alliances */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Globe2 className="w-8 h-8 text-brand-teal" />
            <h2 className="text-3xl font-bold">Industry Alliances</h2>
          </div>
          <p className="text-gray-300 mb-8 max-w-3xl">
            We participate in global and regional cybersecurity communities to share knowledge,
            collaborate on research, and advance industry standards.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {industryAlliances.map((alliance) => (
              <article key={alliance.name} className="card">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-lg font-bold">{alliance.name}</h3>
                  <span className="px-2 py-1 bg-white/5 text-gray-400 rounded text-xs whitespace-nowrap">
                    {alliance.type}
                  </span>
                </div>
                <p className="text-gray-300 text-sm">{alliance.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Partnership CTA */}
        <section className="card bg-gradient-to-br from-brand-teal/10 to-transparent border-brand-teal/30 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Become a Partner</h2>
          <p className="text-gray-300 mb-6">
            Interested in partnering with NexNet CyberLabs? We&apos;re open to technology integrations,
            academic collaborations, and joint research initiatives.
          </p>
          <a 
            href="/contact"
            className="inline-block rounded-md px-6 py-3 bg-brand-teal font-semibold text-black hover:bg-brand-teal/90 transition-all"
          >
            Contact Partnerships Team
          </a>
        </section>
      </div>
    </>
  );
}
