import { Metadata } from "next";
import Link from "next/link";
import { ImageHero } from "@/components/ImageHero";
import { 
  Mountain, 
  ShieldAlert, 
  Zap, 
  Factory, 
  Lock,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  FileCheck,
  Users,
  Database,
  Cpu
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mining & Energy Cybersecurity | NexNet CyberLabs",
  description: "Specialized cybersecurity solutions for mining, oil & gas, and power utilities across Africa. OT/IT security, SCADA protection, and regulatory compliance.",
};

export default function MiningEnergyPage() {
  return (
    <div className="min-h-screen">
      <ImageHero
        bgSrc="/images/globe-network.svg"
        title="Mining & Energy Security"
        subtitle="Protecting Africa's critical mining and energy infrastructure with specialized OT/IT convergence security, SCADA protection, and industrial cybersecurity solutions."
        ctaPrimary={{ text: "Schedule Consultation", href: "/contact/consultation" }}
        ctaSecondary={{ text: "View Case Studies", href: "#case-studies" }}
      />

      {/* Industry Overview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Mountain className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">Mining & Energy Sector Landscape</h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Africa&apos;s mining and energy sectors are economic powerhouses, with Zimbabwe&apos;s mining 
                contributing $6.2 billion (67% of export earnings) and South Africa remaining the world&apos;s 
                largest platinum and top-5 gold producer. The continent holds 30% of global mineral reserves 
                including cobalt, diamonds, platinum, and rare earth elements critical for technology and 
                renewable energy industries.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                However, this strategic importance makes mining and energy infrastructure prime targets for 
                ransomware, industrial espionage, sabotage, and nation-state cyber operations. Convergence 
                of operational technology (OT) and information technology (IT) systems creates attack 
                surfaces that can impact physical safety, environmental compliance, and production continuity. 
                Legacy SCADA systems, remote site connectivity, and supply chain vulnerabilities compound risks.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">$3.8B</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Annual cyber losses in global mining & energy (2024)
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">83%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Industrial operators targeted by ransomware in 2024
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">$47M</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Average cost of production downtime per incident
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
              <h2 className="text-3xl font-bold">Mining & Energy Sector Threats</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Ransomware & Production Disruption */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-xl border border-red-200 dark:border-red-800">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Ransomware & Operational Disruption</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Targeted ransomware attacks on mining operations, refineries, and power plants that 
                      encrypt SCADA systems, production databases, and safety systems, causing extended downtime.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="font-semibold">LockBit 3.0</span> - Targeted 34 mining companies in 2024
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="font-semibold">BlackCat/ALPHV</span> - Energy sector specialization
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="font-semibold">EKANS/SNAKE</span> - ICS/SCADA-specific ransomware
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="font-semibold">Ragnar Locker</span> - Energy infrastructure targeting
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Industrial Espionage */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 p-8 rounded-xl border border-orange-200 dark:border-orange-800">
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Industrial Espionage & IP Theft</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Nation-state and corporate espionage targeting geological survey data, mining techniques, 
                      refining processes, and strategic resource information for competitive advantage.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span className="font-semibold">APT41 (China)</span> - Mining sector targeting
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span className="font-semibold">APT28/Fancy Bear</span> - Energy infrastructure focus
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span className="font-semibold">Volt Typhoon</span> - Critical infrastructure access
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span className="font-semibold">Corporate Insiders</span> - IP exfiltration to competitors
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SCADA & ICS Attacks */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl border border-purple-200 dark:border-purple-800">
                <div className="flex items-start gap-4">
                  <Cpu className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">SCADA & ICS Vulnerabilities</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Exploitation of unpatched SCADA systems, industrial control systems (ICS), programmable 
                      logic controllers (PLCs), and human-machine interfaces (HMIs) in remote mining sites.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="font-semibold">Legacy Systems</span> - Unpatched Windows XP/7 systems
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="font-semibold">Modbus/DNP3</span> - Unauthenticated protocols
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="font-semibold">Remote Access</span> - VNC, RDP, TeamViewer exposure
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="font-semibold">Default Credentials</span> - Unchanged factory passwords
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Supply Chain Attacks */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-4">
                  <Database className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Supply Chain & Third-Party Risks</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Compromised equipment vendors, software updates, engineering contractors, and logistics 
                      providers creating backdoors into mining and energy operational networks.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="font-semibold">Hardware Trojans</span> - Counterfeit equipment with backdoors
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="font-semibold">Software Updates</span> - Malicious firmware/patches
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="font-semibold">Contractor Access</span> - Third-party VPN compromises
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="font-semibold">Logistics Systems</span> - Transportation tracking hacks
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
              {/* IEC 62443 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-green-200 dark:border-green-800">
                <Cpu className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">IEC 62443</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  International standard for industrial automation and control systems (IACS) security, 
                  widely adopted in mining and energy sectors.
                </p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Security zones and conduits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Security level targets (SL 1-4)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Risk assessment process</span>
                  </div>
                </div>
              </div>

              {/* NERC CIP */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800">
                <Zap className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">NERC CIP</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  North American Electric Reliability Corporation Critical Infrastructure Protection 
                  standards for power generation and transmission entities.
                </p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>11 CIP standards (002-014)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Electronic security perimeters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Incident reporting (1 hour)</span>
                  </div>
                </div>
              </div>

              {/* ISO 27001 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-purple-200 dark:border-purple-800">
                <Lock className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">ISO 27001:2022</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Information security management system (ISMS) standard required by many mining 
                  and energy companies for IT/OT convergence security.
                </p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span>93 security controls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span>OT-specific annexes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span>Annual recertification</span>
                  </div>
                </div>
              </div>

              {/* Zimbabwe Mining Act */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-orange-200 dark:border-orange-800">
                <Mountain className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Zimbabwe Mining Act</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Mines and Minerals Act (Chapter 21:05) requirements for safety, environmental 
                  compliance, and data protection in mining operations.
                </p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span>Safety system integrity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span>Environmental monitoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span>Geological data protection</span>
                  </div>
                </div>
              </div>

              {/* MPRDA */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-red-200 dark:border-red-800">
                <Factory className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">South Africa MPRDA</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Mineral and Petroleum Resources Development Act requirements for operational 
                  security, community safety, and resource management.
                </p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span>Social License to Operate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span>Environmental Impact Assessments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span>Safety and security plans</span>
                  </div>
                </div>
              </div>

              {/* NIS2 Directive */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-teal-200 dark:border-teal-800">
                <ShieldAlert className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">EU NIS2 Directive</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  European Network and Information Security Directive for energy utilities and 
                  critical infrastructure with operations in Europe.
                </p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span>24-hour initial reporting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span>Supply chain security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span>Board-level accountability</span>
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
              <h2 className="text-3xl font-bold">Mining & Energy Solutions</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-bold mb-4">OT/IT Convergence Security</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Secure integration of operational technology (OT) and information technology (IT) 
                  networks with network segmentation, industrial firewalls, and zero-trust architecture.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>IEC 62443-compliant network segmentation (zones & conduits)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Industrial firewalls and unidirectional gateways</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Secure remote access for contractors and vendors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Asset discovery and inventory (SCADA, ICS, IoT devices)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl border border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-bold mb-4">SCADA & ICS Protection</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Comprehensive SCADA security with vulnerability assessments, patch management, 
                  anomaly detection, and incident response for industrial control systems.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>SCADA security assessments and penetration testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Industrial IDS/IPS (Nozomi Networks, Claroty, Dragos)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Patch management for legacy OT systems (virtual patching)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Protocol analysis (Modbus, DNP3, OPC, Profinet)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-xl border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-bold mb-4">Industrial Incident Response</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  24/7 emergency response for ransomware, sabotage, and cyber-physical attacks on 
                  mining and energy operations with specialized OT forensics expertise.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>24/7 industrial incident response hotline (2-hour onsite SLA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Ransomware containment and OT system recovery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>SCADA forensics and malware analysis (EKANS, Industroyer)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Production continuity planning and backup strategies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-xl border border-orange-200 dark:border-orange-800">
                <h3 className="text-xl font-bold mb-4">Regulatory Compliance & Certification</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Full compliance support for IEC 62443, NERC CIP, ISO 27001, and regional mining 
                  regulations with gap assessments and certification assistance.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>IEC 62443 risk assessment and security level targeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>NERC CIP compliance program development (CIP-002 to CIP-014)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>ISO 27001 ISMS for mining operations (6-12 months)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Zimbabwe/South Africa mining regulation compliance</span>
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
              <h2 className="text-3xl font-bold">Mining & Energy Case Studies</h2>
            </div>

            <div className="space-y-8">
              {/* Case Study 1: Gold Mining */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border-l-4 border-blue-600">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Gold Mining Company - SCADA Security</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                        Mining
                      </span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                        OT Security
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                        IEC 62443
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Q2 2024</div>
                    <div className="text-sm text-gray-500">Kadoma, Zimbabwe</div>
                  </div>
                </div>

                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Challenge:</strong> A major gold mining operation producing 85,000 oz annually 
                    operated a 15-year-old SCADA system controlling ore processing, cyanide leaching, and 
                    tailings management with zero cybersecurity controls. The network was flat (no segmentation), 
                    PLCs used default credentials, and remote access was unmonitored. Regulatory pressure from 
                    mining authorities and cyber insurance requirements mandated immediate OT security improvements.
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Response:</strong> NexNet implemented IEC 62443-compliant network segmentation 
                    creating four security zones (Enterprise, DMZ, Operations, Safety) with industrial firewalls 
                    and unidirectional data diodes. We deployed Nozomi Networks for continuous OT asset monitoring, 
                    established secure remote access with MFA for contractors, implemented virtual patching for 
                    legacy systems that couldn&apos;t be updated, and created incident response playbooks specific 
                    to mining operations including cyanide system protection protocols.
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Outcome:</strong> Achieved IEC 62443 Security Level 2 (SL-2) compliance, reducing 
                    cyber insurance premiums by 40% ($180,000 annual savings). Prevented a ransomware attack that 
                    penetrated the corporate network but was blocked by OT segmentation—avoiding estimated $12 
                    million in production losses. Discovered and remediated 78 critical OT vulnerabilities 
                    including 23 PLCs with default passwords. Zero safety incidents related to SCADA systems since 
                    implementation. Compliance position strengthened for international financing and partnerships.
                  </p>

                  <div className="grid grid-cols-4 gap-4 mt-6">
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">SL-2</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">IEC 62443 Level</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">$12M</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Losses Prevented</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">78</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Vulnerabilities Fixed</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">40%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Insurance Reduction</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study 2: Power Utility */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border-l-4 border-purple-600">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Power Utility - Ransomware Recovery</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                        Energy
                      </span>
                      <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm font-medium">
                        Incident Response
                      </span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                        Business Continuity
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Q3 2024</div>
                    <div className="text-sm text-gray-500">Mutare, Zimbabwe</div>
                  </div>
                </div>

                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Challenge:</strong> A regional power utility serving 450,000 customers suffered a 
                    BlackCat ransomware attack encrypting billing systems, customer databases, and corporate IT 
                    infrastructure. While SCADA systems remained operational due to air-gapped design, customer 
                    service was completely disabled. The attackers demanded $3.2 million ransom and threatened 
                    to leak customer data and publish vulnerabilities in the power grid SCADA systems.
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Approach:</strong> NexNet&apos;s industrial incident response team arrived onsite 
                    within 90 minutes. We performed forensic acquisition of infected systems, identified the 
                    initial access vector (phishing email with malicious attachment), and contained the attack 
                    by isolating affected network segments. Parallel recovery operations restored billing systems 
                    from offline backups (tested and verified clean). We conducted SCADA system security audits 
                    to validate air-gap integrity and implemented compensating controls to prevent lateral 
                    movement if corporate IT was compromised again.
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Outcome:</strong> Full operational recovery in 96 hours with zero power generation 
                    disruption. No ransom paid; backups allowed complete restoration of 2.3TB of customer and 
                    billing data. Post-incident improvements included endpoint detection and response (EDR) on 
                    1,800+ endpoints, network segmentation between corporate IT and OT (SCADA), security awareness 
                    training for 450 employees (68% to 94% phishing test pass rate), and 24/7 managed SOC 
                    monitoring. Regulatory compliance maintained with Zimbabwe Energy Regulatory Authority (ZERA).
                  </p>

                  <div className="grid grid-cols-4 gap-4 mt-6">
                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">96h</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Recovery Time</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">$0</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Ransom Paid</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">0</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Power Disruptions</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">2.3TB</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Data Recovered</div>
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
          <h2 className="text-3xl font-bold mb-4">Secure Your Mining & Energy Operations</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Partner with Africa&apos;s leading industrial cybersecurity experts for OT/IT security, SCADA protection, regulatory compliance, and incident response.
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
