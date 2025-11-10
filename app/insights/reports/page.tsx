import { Metadata } from "next";
import Link from "next/link";
import { ImageHero } from "@/components/ImageHero";
import { 
  FileText,
  Download,
  Calendar,
  TrendingUp,
  Shield,
  Globe,
  AlertTriangle,
  Lock,
  Eye
} from "lucide-react";

export const metadata: Metadata = {
  title: "Security Research Reports | NexNet CyberLabs",
  description: "Download comprehensive cybersecurity research reports, threat landscape analyses, and industry benchmarks from NexNet CyberLabs Intelligence team.",
};

// Research reports with detailed content
const reports = [
  {
    id: "q3-2025-threat-landscape",
    title: "Q3 2025 Africa Threat Landscape Report",
    description: "Comprehensive analysis of cyber threats targeting African organizations in Q3 2025, including ransomware trends, DDoS attacks, mobile banking fraud, and nation-state activity.",
    category: "Threat Intelligence",
    publishDate: "2025-10-15",
    pages: 68,
    format: "PDF",
    fileSize: "4.2 MB",
    highlights: [
      "340% increase in DDoS attacks targeting SADC telecom infrastructure",
      "LockBit 3.0 responsible for 42% of ransomware incidents in financial sector",
      "Mobile money fraud up 180% YoY with new USSD exploitation techniques",
      "APT41 and APT28 activity targeting mining and energy sectors"
    ],
    downloadUrl: "/reports/q3-2025-threat-landscape.pdf",
    isPublic: true,
    coverImage: "/images/globe-network.svg"
  },
  {
    id: "african-banking-security-2025",
    title: "State of Banking Security in Africa 2025",
    description: "Annual benchmark report examining cybersecurity maturity, incident trends, regulatory compliance, and technology adoption across 180 African banking institutions.",
    category: "Industry Report",
    publishDate: "2025-09-20",
    pages: 92,
    format: "PDF",
    fileSize: "6.8 MB",
    highlights: [
      "Only 23% of African banks have mature threat detection capabilities",
      "Average incident response time: 18 hours (vs. 4 hours globally)",
      "PCI DSS compliance rates: 67% (up from 52% in 2024)",
      "$450M+ in fraud losses prevented through improved security controls"
    ],
    downloadUrl: "/reports/african-banking-security-2025.pdf",
    isPublic: false,
    coverImage: "/images/globe-network.svg"
  },
  {
    id: "ransomware-readiness-assessment-2025",
    title: "Ransomware Readiness Assessment: African Enterprises 2025",
    description: "Evaluation of ransomware preparedness across 250 African organizations, covering backup strategies, incident response plans, cyber insurance, and recovery capabilities.",
    category: "Research Report",
    publishDate: "2025-08-30",
    pages: 54,
    format: "PDF",
    fileSize: "3.6 MB",
    highlights: [
      "78% of organizations lack tested ransomware recovery procedures",
      "Average ransomware payment: $340,000 (down from $580,000 in 2024)",
      "Organizations with cyber insurance: 31% (up from 18%)",
      "Air-gapped backup adoption increased to 45% from 28%"
    ],
    downloadUrl: "/reports/ransomware-readiness-2025.pdf",
    isPublic: true,
    coverImage: "/images/globe-network.svg"
  },
  {
    id: "critical-infrastructure-threat-brief-2025",
    title: "Critical Infrastructure Threat Brief: Mining & Energy Sectors",
    description: "Deep-dive analysis of cyber threats targeting OT/ICS environments in African mining and energy operations, including SCADA vulnerabilities and APT campaigns.",
    category: "Threat Intelligence",
    publishDate: "2025-07-25",
    pages: 78,
    format: "PDF",
    fileSize: "5.4 MB",
    highlights: [
      "EKANS/SNAKE ransomware specifically targeting industrial control systems",
      "78 critical SCADA vulnerabilities identified across 40 mine sites",
      "APT41 compromised 12 power utilities for espionage purposes",
      "Supply chain attacks via compromised HMI software updates"
    ],
    downloadUrl: "/reports/critical-infrastructure-threat-brief-2025.pdf",
    isPublic: false,
    coverImage: "/images/globe-network.svg"
  },
  {
    id: "mobile-money-security-assessment",
    title: "Mobile Money Security Assessment: East & Southern Africa",
    description: "Technical security evaluation of mobile money platforms across Kenya, Tanzania, Uganda, Zimbabwe, and South Africa, covering app security, API vulnerabilities, and fraud trends.",
    category: "Research Report",
    publishDate: "2025-06-15",
    pages: 86,
    format: "PDF",
    fileSize: "7.1 MB",
    highlights: [
      "42% of tested mobile money apps had high-risk vulnerabilities",
      "SIM swap fraud responsible for $120M+ in losses across 5 countries",
      "Weak API authentication in 67% of platforms tested",
      "Recommendations for implementing biometric authentication"
    ],
    downloadUrl: "/reports/mobile-money-security-2025.pdf",
    isPublic: true,
    coverImage: "/images/globe-network.svg"
  },
  {
    id: "compliance-benchmark-2025",
    title: "African Cybersecurity Compliance Benchmark 2025",
    description: "Analysis of regulatory compliance trends including GDPR, POPIA, PCI DSS, ISO 27001, and sector-specific requirements across 15 African countries.",
    category: "Compliance Report",
    publishDate: "2025-05-20",
    pages: 64,
    format: "PDF",
    fileSize: "4.8 MB",
    highlights: [
      "ISO 27001 certifications increased 45% YoY in Southern Africa",
      "POPIA compliance rates: 58% (SA organizations with >50 employees)",
      "Average cost of non-compliance: $2.4M in fines and remediation",
      "Data localization requirements emerging in 8 African countries"
    ],
    downloadUrl: "/reports/compliance-benchmark-2025.pdf",
    isPublic: false,
    coverImage: "/images/globe-network.svg"
  },
  {
    id: "cloud-security-adoption-africa",
    title: "Cloud Security Adoption in Africa: 2025 Survey Results",
    description: "Survey of 320 African organizations on cloud migration trends, security challenges, multi-cloud strategies, and lessons learned from cloud breaches.",
    category: "Industry Report",
    publishDate: "2025-04-10",
    pages: 72,
    format: "PDF",
    fileSize: "5.2 MB",
    highlights: [
      "68% of organizations now use public cloud (up from 52% in 2024)",
      "AWS dominates with 54% market share, followed by Azure (32%)",
      "Cloud misconfigurations responsible for 73% of cloud breaches",
      "Average cloud security spending: 14% of total cloud budget"
    ],
    downloadUrl: "/reports/cloud-security-adoption-2025.pdf",
    isPublic: true,
    coverImage: "/images/globe-network.svg"
  },
  {
    id: "insider-threat-analysis-2024",
    title: "Insider Threat Analysis: African Organizations 2024 Review",
    description: "Retrospective analysis of insider threat incidents in 2024, covering privileged access abuse, data exfiltration, sabotage, and employee monitoring strategies.",
    category: "Threat Intelligence",
    publishDate: "2025-02-28",
    pages: 58,
    format: "PDF",
    fileSize: "3.9 MB",
    highlights: [
      "Insider threats responsible for 28% of data breaches in 2024",
      "Average time to detect insider threat: 246 days",
      "Financial motivation drove 62% of insider incidents",
      "User behavior analytics (UBA) adoption increased to 34%"
    ],
    downloadUrl: "/reports/insider-threat-analysis-2024.pdf",
    isPublic: false,
    coverImage: "/images/globe-network.svg"
  }
];

const reportCategories = [
  "All Reports",
  "Threat Intelligence",
  "Industry Report",
  "Research Report",
  "Compliance Report"
];

export default function ReportsPage() {
  return (
    <div className="min-h-screen">
      <ImageHero
        bgSrc="/images/globe-network.svg"
        title="Security Research Reports"
        subtitle="Download in-depth research reports, threat intelligence briefings, and industry benchmarks based on real-world data from our operations across Africa."
        ctaPrimary={{ text: "Request Custom Report", href: "/contact" }}
        ctaSecondary={{ text: "View Case Studies", href: "/insights/case-studies" }}
      />

      {/* Report Stats */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                <FileText className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-600 mb-1">24+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Published reports
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Organizations analyzed
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                <Globe className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-600 mb-1">15</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  African countries covered
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                <Download className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-600 mb-1">8,500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Report downloads
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3">
              {reportCategories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    category === "All Reports"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Reports */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">Latest Reports</h2>
            </div>

            <div className="space-y-8">
              {reports.map((report) => (
                <div
                  key={report.id}
                  className={`bg-gradient-to-br ${
                    report.isPublic
                      ? "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800"
                      : "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800"
                  } p-8 rounded-xl border-2`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 ${
                          report.isPublic
                            ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                            : "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
                        } rounded-full text-xs font-semibold`}>
                          {report.category}
                        </span>
                        {!report.isPublic && (
                          <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-xs font-semibold flex items-center gap-1">
                            <Lock className="w-3 h-3" />
                            Gated Content
                          </span>
                        )}
                        <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                          <Calendar className="w-4 h-4" />
                          {new Date(report.publishDate).toLocaleDateString('en-US', { 
                            month: 'long', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-3">
                        {report.title}
                      </h3>

                      <p className="text-gray-700 dark:text-gray-300 mb-6">
                        {report.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Eye className="w-5 h-5 text-blue-600" />
                          Key Highlights
                        </h4>
                        <ul className="grid md:grid-cols-2 gap-3">
                          {report.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <AlertTriangle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          {report.pages} pages
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          {report.format} • {report.fileSize}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                    {report.isPublic ? (
                      <Link
                        href={report.downloadUrl}
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                      >
                        <Download className="w-5 h-5" />
                        Download Report
                      </Link>
                    ) : (
                      <Link
                        href="/contact"
                        className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
                      >
                        <Lock className="w-5 h-5" />
                        Request Access
                      </Link>
                    )}
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {report.isPublic
                        ? "Free download - no registration required"
                        : "Fill out form to receive download link via email"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Research CTA */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-900 to-gray-900 p-12 rounded-2xl text-center">
            <Shield className="w-16 h-16 text-brand-teal mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Need Custom Research?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our Intelligence team can conduct custom research tailored to your organization&apos;s specific 
              industry, threat landscape, or compliance requirements.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-brand-teal text-black font-semibold rounded-lg hover:bg-teal-400 transition-colors"
              >
                Request Custom Report
              </Link>
              <Link
                href="/services/threat-intelligence"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                View Threat Intel Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

