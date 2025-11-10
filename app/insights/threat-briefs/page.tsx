import { Metadata } from "next";
import Link from "next/link";
import { ImageHero } from "@/components/ImageHero";
import { 
  Shield,
  AlertTriangle,
  Globe,
  Lock,
  Eye,
  Download,
  Calendar,
  Target,
  Activity
} from "lucide-react";

export const metadata: Metadata = {
  title: "Threat Intelligence Briefs | NexNet CyberLabs",
  description: "Timely threat intelligence briefings covering emerging threats, APT campaigns, vulnerability alerts, and security advisories relevant to organizations across Africa.",
};

// Threat intelligence briefs
const threatBriefs = [
  {
    id: "lockbit-africa-targeting-dec-2025",
    title: "LockBit 3.0 Ransomware Campaign Targeting African Financial Institutions",
    category: "Ransomware Alert",
    severity: "Critical",
    publishDate: "2025-12-02",
    summary: "LockBit 3.0 ransomware group has intensified targeting of financial institutions across Southern Africa, with 14 confirmed intrusions in the past 30 days. Threat actors are exploiting CVE-2023-4966 (Citrix Bleed) for initial access.",
    threatActor: "LockBit 3.0",
    targetSectors: ["Financial Services", "Banking", "Insurance"],
    affectedRegions: ["Southern Africa", "East Africa"],
    iocs: [
      "IP: 185.220.101.34 (C2 server)",
      "Domain: lockbitsupdated[.]org",
      "Hash: 7a1c8f3e9d2b4a6c8e1f9a3b5c7d9e2f (ransomware binary)",
      "Registry: HKLM\\SOFTWARE\\LockBit\\ID"
    ],
    recommendations: [
      "Immediately patch CVE-2023-4966 on all Citrix ADC/Gateway appliances",
      "Enable MFA on all VPN and remote access solutions",
      "Review and test backup recovery procedures (target: RTO < 24 hours)",
      "Deploy EDR with ransomware behavioral detection on all endpoints",
      "Implement network segmentation to limit lateral movement"
    ],
    mitreTactics: ["Initial Access", "Persistence", "Defense Evasion", "Impact"],
    cveReferences: ["CVE-2023-4966"],
    public: true
  },
  {
    id: "apt41-critical-infrastructure-nov-2025",
    title: "APT41 Espionage Campaign Against Southern African Critical Infrastructure",
    category: "APT Campaign",
    severity: "Critical",
    publishDate: "2025-11-18",
    summary: "Chinese nation-state group APT41 conducting sustained espionage campaign against energy, mining, and telecommunications sectors. Campaign duration estimated at 8+ months with focus on intellectual property theft and strategic intelligence gathering.",
    threatActor: "APT41 (Double Dragon)",
    targetSectors: ["Energy", "Mining", "Telecommunications", "Government"],
    affectedRegions: ["Zimbabwe", "Zambia", "South Africa", "Botswana"],
    iocs: [
      "IP: 103.85.24.156 (C2 infrastructure)",
      "Domain: update-services[.]net",
      "Hash: a3d5e7f9c1b8d4a6e2f8c9b1a5d7e3f9 (DUSTMAN backdoor)",
      "File: msconfig32.dll (trojanized DLL)",
      "Certificate: CN=Microsoft Corporation (fraudulent code signing cert)"
    ],
    recommendations: [
      "Conduct comprehensive network hunt for APT41 TTPs and IOCs",
      "Review privileged access logs for anomalous authentication",
      "Implement application whitelisting on critical OT systems",
      "Deploy network segmentation between IT and OT environments",
      "Enable enhanced logging on domain controllers and VPN gateways",
      "Consider engaging DFIR team for compromise assessment"
    ],
    mitreTactics: ["Reconnaissance", "Initial Access", "Execution", "Persistence", "Privilege Escalation", "Defense Evasion", "Credential Access", "Discovery", "Lateral Movement", "Collection", "Exfiltration"],
    cveReferences: ["CVE-2023-36874", "CVE-2023-3519"],
    public: false
  },
  {
    id: "ddos-telecom-surge-oct-2025",
    title: "340% Surge in DDoS Attacks Against African Telecommunications Providers",
    category: "DDoS Alert",
    severity: "High",
    publishDate: "2025-10-25",
    summary: "Significant increase in volumetric DDoS attacks targeting mobile network operators and ISPs across Africa. Average attack size increased from 87 Gbps to 294 Gbps. Attribution: multiple cybercriminal groups offering DDoS-for-hire services.",
    threatActor: "Multiple (DDoS-for-hire services)",
    targetSectors: ["Telecommunications", "Internet Service Providers"],
    affectedRegions: ["Sub-Saharan Africa"],
    iocs: [
      "Attack Vector: UDP reflection/amplification (NTP, DNS, SSDP)",
      "Botnet: Mirai variant with IoT device targeting",
      "Peak bandwidth: 627 Gbps (largest observed attack)"
    ],
    recommendations: [
      "Implement rate-limiting and traffic shaping at network edge",
      "Deploy DDoS mitigation service with anycast routing",
      "Conduct capacity planning to handle 3-5x normal traffic volume",
      "Establish incident response procedures with ISP/upstream providers",
      "Monitor for reconnaissance activity (port scans, service enumeration)"
    ],
    mitreTactics: ["Resource Hijacking", "Network Denial of Service"],
    cveReferences: [],
    public: true
  },
  {
    id: "mobile-money-fraud-sep-2025",
    title: "Sophisticated Mobile Money Fraud Campaign Using SIM Swap and SS7 Exploits",
    category: "Fraud Alert",
    severity: "High",
    publishDate: "2025-09-14",
    summary: "Organized fraud ring exploiting SIM swap vulnerabilities and SS7 protocol weaknesses to compromise mobile money accounts. Estimated $2.4M stolen from 3,800+ victims across 5 countries in Q3 2025.",
    threatActor: "Organized Cybercrime Group (likely Nigerian-based)",
    targetSectors: ["Mobile Money", "Financial Services", "Telecommunications"],
    affectedRegions: ["East Africa", "Southern Africa"],
    iocs: [
      "Phone numbers used for SIM swap requests (see restricted IOC feed)",
      "Suspicious SS7 signaling patterns (MAP_SEND_ROUTING_INFO)",
      "Money mule accounts identified in Kenya, Tanzania, Uganda"
    ],
    recommendations: [
      "Implement multi-factor authentication beyond SMS OTP",
      "Deploy SIM swap detection and alerting mechanisms",
      "Consider SS7 firewall for telecommunications operators",
      "Educate customers on SIM swap fraud indicators",
      "Implement transaction velocity limits and behavioral analytics",
      "Coordinate with law enforcement on money mule accounts"
    ],
    mitreTactics: ["Initial Access", "Credential Access", "Collection"],
    cveReferences: [],
    public: true
  },
  {
    id: "exchange-proxyshell-aug-2025",
    title: "Active Exploitation of Microsoft Exchange ProxyShell Vulnerabilities",
    category: "Vulnerability Alert",
    severity: "Critical",
    publishDate: "2025-08-20",
    summary: "Despite patches being available for 4+ years, threat actors continue successfully exploiting ProxyShell vulnerabilities (CVE-2021-34473, CVE-2021-34523, CVE-2021-31207) against unpatched Exchange servers across Africa. 67 confirmed compromises in August 2025.",
    threatActor: "Multiple (opportunistic exploitation)",
    targetSectors: ["All Sectors", "SMEs"],
    affectedRegions: ["Pan-African"],
    iocs: [
      "Webshell: /aspnet_client/system_web/*.aspx",
      "POST requests to /autodiscover/autodiscover.json",
      "Suspicious powershell.exe spawned from w3wp.exe",
      "Credential dumping via procdump.exe or lsass memory access"
    ],
    recommendations: [
      "IMMEDIATELY patch Exchange servers (or migrate to Exchange Online)",
      "Review Exchange servers for webshells and persistence mechanisms",
      "Audit mailbox access logs for suspicious authentication",
      "Implement network segmentation to isolate Exchange servers",
      "Deploy EDR with specific detection rules for Exchange exploitation",
      "Consider Microsoft Exchange Emergency Mitigation Service"
    ],
    mitreTactics: ["Initial Access", "Execution", "Persistence", "Privilege Escalation", "Credential Access"],
    cveReferences: ["CVE-2021-34473", "CVE-2021-34523", "CVE-2021-31207"],
    public: true
  },
  {
    id: "insider-threat-mining-jul-2025",
    title: "Insider Threat: Mining Sector Intellectual Property Theft Trends",
    category: "Insider Threat",
    severity: "Medium",
    publishDate: "2025-07-10",
    summary: "Analysis of 12 insider threat incidents in mining sector reveals common pattern: departing employees exfiltrating geological survey data, mineral reserve estimates, and exploration plans. Average financial impact: $4.2M per incident.",
    threatActor: "Insider (Employee/Contractor)",
    targetSectors: ["Mining & Energy", "Natural Resources"],
    affectedRegions: ["Southern Africa"],
    iocs: [
      "Large file transfers to personal cloud storage (Dropbox, OneDrive)",
      "USB device usage spikes during notice period",
      "Email forwarding rules to personal accounts",
      "After-hours VPN access patterns",
      "Printing/exporting of sensitive documents"
    ],
    recommendations: [
      "Implement Data Loss Prevention (DLP) solution",
      "Monitor and restrict USB device usage on sensitive systems",
      "Review access rights during employee offboarding process",
      "Deploy User and Entity Behavior Analytics (UEBA)",
      "Classify and label intellectual property for tracking",
      "Conduct exit interviews with security awareness component"
    ],
    mitreTactics: ["Collection", "Exfiltration"],
    cveReferences: [],
    public: false
  }
];

const categories = ["All Briefs", "Ransomware Alert", "APT Campaign", "DDoS Alert", "Vulnerability Alert", "Fraud Alert", "Insider Threat"];
const severityColors = {
  "Critical": "text-red-600 bg-red-100 dark:bg-red-900/30",
  "High": "text-orange-600 bg-orange-100 dark:bg-orange-900/30",
  "Medium": "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30"
};

export default function ThreatBriefsPage() {
  return (
    <div className="min-h-screen">
      <ImageHero
        bgSrc="/images/globe-network.svg"
        title="Threat Intelligence Briefs"
        subtitle="Timely, actionable threat intelligence covering emerging threats, APT campaigns, vulnerability alerts, and security advisories relevant to organizations across Africa."
        ctaPrimary={{ text: "Subscribe to Threat Intel", href: "/contact" }}
        ctaSecondary={{ text: "Request Private Briefing", href: "/contact" }}
      />

      {/* Stats Overview */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-600 mb-1">150+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Threat briefs published
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                <Activity className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Threat monitoring coverage
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                <Globe className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-600 mb-1">45</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Countries monitored
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                <Target className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-600 mb-1">8,500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  IOCs tracked monthly
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
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold">Filter by Category</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    category === "All Briefs"
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

      {/* Threat Briefs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
              {threatBriefs.map((brief) => (
                <div
                  key={brief.id}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${severityColors[brief.severity as keyof typeof severityColors]}`}>
                          {brief.severity}
                        </span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold">
                          {brief.category}
                        </span>
                        {!brief.public && (
                          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-semibold flex items-center gap-1">
                            <Lock className="w-3 h-3" />
                            Restricted
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{brief.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{brief.summary}</p>
                    </div>
                    <div className="text-right ml-6">
                      <Calendar className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {new Date(brief.publishDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold text-sm mb-2 text-red-600 flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Threat Actor
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{brief.threatActor}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-2 text-blue-600 flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        Target Sectors
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {brief.targetSectors.join(", ")}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-2 text-green-600 flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        Affected Regions
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {brief.affectedRegions.join(", ")}
                      </p>
                    </div>
                  </div>

                  {brief.public ? (
                    <>
                      {/* IOCs */}
                      <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                        <h4 className="font-bold text-sm mb-3 text-yellow-800 dark:text-yellow-200 flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          Indicators of Compromise (IOCs)
                        </h4>
                        <ul className="space-y-1">
                          {brief.iocs.map((ioc, idx) => (
                            <li key={idx} className="text-sm font-mono text-gray-800 dark:text-gray-200">
                              {ioc}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Recommendations */}
                      <div className="mb-6">
                        <h4 className="font-bold text-sm mb-3 text-green-600 flex items-center gap-2">
                          <Shield className="w-4 h-4" />
                          Recommendations
                        </h4>
                        <ul className="space-y-2">
                          {brief.recommendations.map((rec, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <span className="text-green-600 font-bold mt-0.5">•</span>
                              <span className="text-gray-700 dark:text-gray-300">{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* MITRE ATT&CK */}
                      <div className="mb-6">
                        <h4 className="font-bold text-sm mb-3 flex items-center gap-2">
                          MITRE ATT&CK Tactics
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {brief.mitreTactics.map((tactic, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded text-xs font-medium"
                            >
                              {tactic}
                            </span>
                          ))}
                        </div>
                      </div>

                      {brief.cveReferences.length > 0 && (
                        <div className="mb-6">
                          <h4 className="font-bold text-sm mb-3 flex items-center gap-2">
                            CVE References
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {brief.cveReferences.map((cve, idx) => (
                              <a
                                key={idx}
                                href={`https://nvd.nist.gov/vuln/detail/${cve}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded text-xs font-mono hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                              >
                                {cve}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-semibold">
                        <Download className="w-4 h-4" />
                        Download Full Brief (PDF)
                      </button>
                    </>
                  ) : (
                    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-center">
                      <Lock className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <h4 className="font-bold mb-2">Restricted Access</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        This threat brief contains sensitive intelligence and detailed IOCs available only to NexNet CyberLabs Threat Intelligence subscribers.
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                      >
                        Request Access
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <Activity className="w-16 h-16 text-brand-teal mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Subscribe to Threat Intelligence Feed</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get timely threat briefs, IOC feeds, and security advisories delivered directly to your security operations team.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-brand-teal text-black font-semibold rounded-lg hover:bg-teal-400 transition-colors"
            >
              Subscribe Now
            </Link>
            <Link
              href="/services/threat-intelligence"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
