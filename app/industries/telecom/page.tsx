import { Metadata } from "next";
import Link from "next/link";
import { ImageHero } from "@/components/ImageHero";
import { 
  Radio, 
  ShieldAlert, 
  Network, 
  Globe2, 
  Wifi,
  TrendingUp,
  CheckCircle,
  FileCheck,
  Database,
  Smartphone
} from "lucide-react";

export const metadata: Metadata = {
  title: "Telecommunications Cybersecurity | NexNet CyberLabs",
  description: "Specialized cybersecurity solutions for telecom operators, ISPs, and mobile network operators across Africa and Europe. 5G security, network infrastructure protection, and regulatory compliance.",
};

export default function TelecomPage() {
  return (
    <div className="min-h-screen">
      <ImageHero
        bgSrc="/images/globe-network.svg"
        title="Telecommunications Security"
        subtitle="Protecting Africa's telecommunications infrastructure with specialized solutions for mobile operators, ISPs, and network service providers."
        ctaPrimary={{ text: "Schedule Consultation", href: "/contact/consultation" }}
        ctaSecondary={{ text: "View Case Studies", href: "#case-studies" }}
      />

      {/* Industry Overview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Radio className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">Telecom Sector Landscape</h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Africa&apos;s telecommunications sector is experiencing explosive growth, with mobile 
                penetration exceeding 85% across the continent and 5G deployments accelerating in major 
                markets. Zimbabwe&apos;s telecom sector alone generates over $1.2 billion annually, while 
                South Africa leads the continent with advanced fiber and 5G infrastructure.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                However, this rapid digital transformation exposes telecom operators to sophisticated 
                cyber threats including SS7/Diameter protocol attacks, DDoS extortion, SIM swap fraud, 
                ransomware targeting billing systems, and nation-state espionage. Regulatory requirements 
                from POTRAZ (Zimbabwe), ICASA (South Africa), and international bodies like ITU and GSMA 
                add complexity to security operations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">$890M</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Annual cyber losses in African telecom sector (2024)
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">67%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Telecom operators targeted by DDoS attacks in 2024
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">12K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  SIM swap fraud incidents reported in Zimbabwe (2024)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sector-Specific Threats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <ShieldAlert className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl font-bold">Telecommunications Sector Threats</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* SS7/Diameter Attacks */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-xl border border-red-200 dark:border-red-800">
                <div className="flex items-start gap-4">
                  <Network className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">SS7 / Diameter Protocol Attacks</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Exploitation of legacy signaling protocols (SS7) and newer Diameter protocol 
                      vulnerabilities for location tracking, SMS interception, and call redirection.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="font-semibold">Location Tracking</span> - Real-time subscriber geolocation
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="font-semibold">SMS Interception</span> - 2FA bypass and espionage
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="font-semibold">Call Redirection</span> - Eavesdropping attacks
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="font-semibold">Roaming Fraud</span> - Fraudulent interconnect billing
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* DDoS Attacks */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 p-8 rounded-xl border border-orange-200 dark:border-orange-800">
                <div className="flex items-start gap-4">
                  <Wifi className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">DDoS & Infrastructure Attacks</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Volumetric DDoS attacks targeting network infrastructure, DNS servers, billing 
                      systems, and customer portals, often accompanied by extortion demands.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span className="font-semibold">Volumetric DDoS</span> - 500+ Gbps attacks recorded
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span className="font-semibold">Application Layer</span> - HTTP flood attacks
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span className="font-semibold">DNS Amplification</span> - Reflection attacks
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span className="font-semibold">Ransom DDoS</span> - Extortion campaigns
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SIM Swap Fraud */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl border border-purple-200 dark:border-purple-800">
                <div className="flex items-start gap-4">
                  <Smartphone className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">SIM Swap & Mobile Fraud</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Social engineering attacks targeting customer service agents to fraudulently 
                      transfer phone numbers, enabling account takeover and financial fraud.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="font-semibold">Social Engineering</span> - Customer service exploitation
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="font-semibold">Account Takeover</span> - Banking and crypto theft
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="font-semibold">Insider Threats</span> - Corrupt employee involvement
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="font-semibold">Document Fraud</span> - Fake ID submissions
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ransomware & Data Breaches */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-4">
                  <Database className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Ransomware & Data Breaches</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Targeted ransomware attacks on billing systems, customer databases, and operational 
                      technology (OT) networks, with average ransom demands exceeding $1.5 million.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="font-semibold">Billing Systems</span> - Revenue assurance disruption
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="font-semibold">Customer Data</span> - PII of millions exposed
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="font-semibold">OT Networks</span> - SCADA and network management
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="font-semibold">Supply Chain</span> - Third-party vendor compromises
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <FileCheck className="w-8 h-8 text-green-600" />
              <h2 className="text-3xl font-bold">Regulatory Frameworks</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* POTRAZ */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-green-200 dark:border-green-800">
                <Radio className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">POTRAZ Guidelines</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Postal and Telecommunications Regulatory Authority of Zimbabwe requirements for 
                  cybersecurity, network resilience, and incident reporting.
                </p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>48-hour incident reporting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Network security audits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Data localization compliance</span>
                  </div>
                </div>
              </div>

              {/* ICASA */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800">
                <Network className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">ICASA Regulations</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Independent Communications Authority of South Africa standards for electronic 
                  communications security and consumer protection.
                </p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>ECTA compliance required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Network infrastructure security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>POPIA data protection</span>
                  </div>
                </div>
              </div>

              {/* GSMA */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-purple-200 dark:border-purple-800">
                <Globe2 className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">GSMA Standards</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  GSM Association security guidelines for mobile network operators including SS7 
                  protection, fraud prevention, and 5G security.
                </p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span>FS.07 SS7 protection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span>FS.19 roaming security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span>5G security baselines</span>
                  </div>
                </div>
              </div>

              {/* ITU-T */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-orange-200 dark:border-orange-800">
                <ShieldAlert className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">ITU-T X.1051</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  International Telecommunication Union security framework for telecom infrastructure, 
                  including network resilience and threat intelligence.
                </p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span>Network security management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span>Incident response procedures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span>Cybersecurity capabilities</span>
                  </div>
                </div>
              </div>

              {/* NIS2 Directive */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-red-200 dark:border-red-800">
                <FileCheck className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">EU NIS2 Directive</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  European Network and Information Security Directive for critical infrastructure 
                  operators with pan-African networks operating in Europe.
                </p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span>24-hour initial reporting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span>Risk management measures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span>Supply chain security</span>
                  </div>
                </div>
              </div>

              {/* ISO 27001 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-teal-200 dark:border-teal-800">
                <CheckCircle className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">ISO 27001:2022</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Information security management system (ISMS) standard increasingly required 
                  for telecom operators and service providers.
                </p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span>93 security controls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span>Risk-based approach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span>Annual recertification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">Telecommunications Solutions</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-bold mb-4">SS7/Diameter Security & Fraud Prevention</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Comprehensive signaling security with SS7/Diameter firewalls, real-time threat 
                  detection, and fraud management systems to protect against protocol exploitation.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>SS7 firewall deployment and configuration (GSMA FS.07)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Diameter edge agent (DEA) for 4G/5G core protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Real-time fraud detection and prevention systems (FMS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>SIM swap detection and prevention workflows</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl border border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-bold mb-4">Network Infrastructure Protection</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Multi-layered DDoS mitigation, network segmentation, and infrastructure hardening 
                  for core networks, radio access networks (RAN), and backhaul systems.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>DDoS mitigation (on-premise and cloud scrubbing centers)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Network segmentation and microsegmentation (zero trust)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>5G security architecture design and implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>OT/IT convergence security for SCADA and network management</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-xl border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-bold mb-4">Compliance & Regulatory Support</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Full compliance management for POTRAZ, ICASA, GSMA, ITU, and ISO standards with 
                  gap assessments, remediation, and continuous monitoring.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>POTRAZ/ICASA compliance audits and reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>GSMA security certification (FS.07, FS.19, FS.28)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>ISO 27001 ISMS implementation and certification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>NIS2 Directive compliance for European operations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-xl border border-orange-200 dark:border-orange-800">
                <h3 className="text-xl font-bold mb-4">Incident Response & Threat Intelligence</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  24/7 security operations center (SOC) services, incident response for ransomware 
                  and breaches, and telecom-specific threat intelligence feeds.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>24/7 managed SOC with telecom-specific use cases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Ransomware and data breach incident response</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Telecom threat intelligence (SS7, DDoS, fraud trends)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Digital forensics for fraud investigations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <FileCheck className="w-8 h-8 text-green-600" />
              <h2 className="text-3xl font-bold">Telecommunications Case Studies</h2>
            </div>

            <div className="space-y-8">
              {/* Case Study 1: Mobile Operator */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border-l-4 border-blue-600">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Mobile Network Operator - SS7 Security</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                        Telecommunications
                      </span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                        SS7 Security
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                        Fraud Prevention
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Q1 2024</div>
                    <div className="text-sm text-gray-500">Harare, Zimbabwe</div>
                  </div>
                </div>

                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Challenge:</strong> Zimbabwe&apos;s largest mobile network operator with 8.5 
                    million subscribers detected suspicious SS7 activity including location tracking requests 
                    from foreign networks and SMS interception attempts. The operator faced POTRAZ regulatory 
                    pressure to implement signaling security controls and prevent subscriber fraud, particularly 
                    targeting mobile money and banking users.
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Response:</strong> NexNet deployed a comprehensive SS7 firewall solution with 
                    GSMA FS.07 compliant filtering rules, real-time threat detection, and automated blocking 
                    of malicious signaling messages. We implemented Diameter Edge Agent (DEA) for 4G core 
                    protection, established Security Operations Center (SOC) monitoring with telecom-specific 
                    use cases, and integrated with the fraud management system (FMS) to correlate SS7 attacks 
                    with fraudulent transactions.
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Outcome:</strong> 99.7% reduction in SS7-based location tracking attempts (from 
                    3,200+ monthly to fewer than 10), complete elimination of SMS interception incidents, and 
                    prevention of $1.8 million in mobile money fraud over 6 months. The operator achieved POTRAZ 
                    compliance, reduced customer complaints by 65%, and gained competitive advantage by marketing 
                    &quot;secure network&quot; capabilities. Ongoing managed security services ensure continuous 
                    protection and threat intelligence updates.
                  </p>

                  <div className="grid grid-cols-4 gap-4 mt-6">
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">99.7%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Attack Reduction</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">$1.8M</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Fraud Prevented</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">8.5M</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Subscribers Protected</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">65%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Complaint Reduction</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study 2: ISP */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border-l-4 border-purple-600">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Internet Service Provider - DDoS Mitigation</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                        ISP
                      </span>
                      <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm font-medium">
                        DDoS Protection
                      </span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                        Infrastructure Security
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Q3 2024</div>
                    <div className="text-sm text-gray-500">Johannesburg, South Africa</div>
                  </div>
                </div>

                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Challenge:</strong> A major South African ISP serving 320,000 business and 
                    residential customers faced escalating DDoS attacks averaging 3-4 incidents per week, 
                    with peak volumetric attacks reaching 485 Gbps. Extortion groups demanded Bitcoin ransoms 
                    to stop attacks. Customer churn increased 12% due to service disruptions, and the company 
                    faced ICASA regulatory scrutiny for network resilience failures.
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Approach:</strong> We implemented a hybrid DDoS mitigation architecture combining 
                    on-premise scrubbing appliances (100 Gbps capacity) for smaller attacks with cloud-based 
                    scrubbing centers (terabit-scale) for volumetric floods. BGP Flowspec integration enabled 
                    automatic traffic diversion during attacks. We deployed machine learning-based anomaly 
                    detection for early warning, established 24/7 SOC monitoring, and created incident response 
                    playbooks for rapid mitigation. Network segmentation isolated critical infrastructure.
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Outcome:</strong> 98% of DDoS attacks mitigated automatically within 90 seconds 
                    with zero customer-visible downtime. Largest successfully mitigated attack: 627 Gbps 
                    volumetric UDP flood. Customer churn reversed to -2% (net growth), NPS score improved 23 
                    points, and no ransom payments made to extortion groups. ICASA compliance achieved with 
                    improved network resilience metrics. The ISP now markets &quot;DDoS-protected network&quot; 
                    as a premium feature, generating $450,000 in additional annual revenue.
                  </p>

                  <div className="grid grid-cols-4 gap-4 mt-6">
                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">98%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Auto-Mitigation Rate</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">627</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Gbps Peak Attack</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">0%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Downtime</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">+23</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">NPS Points</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Secure Your Telecommunications Infrastructure</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Partner with Africa&apos;s leading telecom cybersecurity experts for SS7 security, DDoS protection, fraud prevention, and regulatory compliance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact/consultation"
              className="px-8 py-3 bg-brand-teal text-black font-semibold rounded-lg hover:bg-teal-400 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/insights/case-studies"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Download Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
