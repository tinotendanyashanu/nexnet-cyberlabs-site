import { Metadata } from "next";
import Link from "next/link";
import { ImageHero } from "@/components/ImageHero";
import { 
  Building, 
  ShieldAlert, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  FileCheck,
  Users,
  Database,
  Flag
} from "lucide-react";

export const metadata: Metadata = {
  title: "Public Sector Cybersecurity | NexNet CyberLabs",
  description: "Specialized cybersecurity solutions for government agencies, municipalities, and public institutions across Africa and Europe. Compliance, data protection, and critical infrastructure security.",
};

export default function PublicSectorPage() {
  return (
    <div className="min-h-screen">
      <ImageHero
        bgSrc="/images/globe-network.svg"
        title="Public Sector Security"
        subtitle="Protecting government institutions, municipalities, and public services with specialized cybersecurity solutions for Africa's digital government transformation."
        ctaPrimary={{ text: "Schedule Consultation", href: "/contact/consultation" }}
        ctaSecondary={{ text: "View Case Studies", href: "#case-studies" }}
      />

      {/* Industry Overview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Building className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">Public Sector Landscape</h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                African governments are accelerating digital transformation initiatives including e-government 
                services, digital identity systems, tax portals, healthcare records, and smart city projects. 
                Zimbabwe&apos;s e-Government program aims to digitize 80% of government services by 2026, while 
                South Africa&apos;s National Digital and Future Skills Strategy targets comprehensive digital 
                public services.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                However, public sector institutions face sophisticated cyber threats including ransomware, 
                data breaches, election interference, espionage, and hacktivism. Legacy systems, limited 
                cybersecurity budgets, and high-value data make government agencies attractive targets. 
                Nation-state actors frequently target public infrastructure for intelligence gathering and 
                geopolitical influence operations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">$4.2B</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Annual cyber losses in global public sector (2024)
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">71%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Government agencies targeted by ransomware in 2024
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">245</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Average days to detect nation-state breaches
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
              <h2 className="text-3xl font-bold">Public Sector Threats</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Ransomware */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-xl border border-red-200 dark:border-red-800">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Ransomware & Service Disruption</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Targeted ransomware attacks on government systems disrupting public services, 
                      healthcare, education, and emergency response with extended recovery timelines.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="font-semibold">LockBit 3.0</span> - 47 government agencies in 2024
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="font-semibold">BlackCat/ALPHV</span> - Municipal systems targeting
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="font-semibold">Ryuk/Conti</span> - Healthcare system encryption
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nation-State Attacks */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 p-8 rounded-xl border border-orange-200 dark:border-orange-800">
                <div className="flex items-start gap-4">
                  <Flag className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Nation-State Espionage & APTs</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Advanced Persistent Threats (APTs) from nation-state actors targeting diplomatic 
                      communications, defense systems, and strategic government information.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span className="font-semibold">APT41 (China)</span> - Government network infiltration
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span className="font-semibold">APT28/Fancy Bear</span> - Election interference
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span className="font-semibold">Lazarus Group</span> - Financial theft operations
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Breaches */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl border border-purple-200 dark:border-purple-800">
                <div className="flex items-start gap-4">
                  <Database className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Data Breaches & Identity Theft</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Breaches of citizen databases, national ID systems, voter registration, tax records, 
                      and healthcare information enabling mass identity theft and fraud.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="font-semibold">Citizen Databases</span> - PII of millions exposed
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="font-semibold">Healthcare Records</span> - Medical data leaks
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="font-semibold">Tax Systems</span> - Financial information theft
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Insider Threats */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Insider Threats & Corruption</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Malicious or negligent insiders with privileged access to government systems 
                      facilitating data theft, fraud, and unauthorized access for personal gain.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="font-semibold">Privileged Abuse</span> - Unauthorized data access
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="font-semibold">Data Exfiltration</span> - Information selling
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="font-semibold">Credential Sharing</span> - Access control violations
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">Public Sector Solutions</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-bold mb-4">E-Government Security Architecture</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Secure-by-design architecture for e-government platforms, digital identity systems, 
                  online portals, and citizen services with zero-trust security models.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Zero-trust architecture for e-government services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Digital identity and authentication (biometric, PKI)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Secure citizen portals and mobile apps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>API security for inter-agency integrations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl border border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-bold mb-4">Data Protection & Privacy Compliance</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Comprehensive data protection programs for citizen data, ensuring compliance with 
                  GDPR, POPIA, and local privacy regulations with robust encryption and access controls.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>GDPR/POPIA compliance for citizen data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Database encryption and key management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Data loss prevention (DLP) and monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Privacy impact assessments (PIAs)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-xl border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-bold mb-4">Critical Infrastructure Protection</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Security for government critical infrastructure including emergency services, 
                  healthcare systems, utilities, and defense networks with 24/7 monitoring.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>24/7 Security Operations Center (SOC) for government</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Critical infrastructure risk assessments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Emergency response and business continuity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Threat intelligence and APT detection</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-xl border border-orange-200 dark:border-orange-800">
                <h3 className="text-xl font-bold mb-4">Incident Response & Digital Forensics</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Rapid incident response for ransomware, breaches, and APT attacks with digital 
                  forensics capabilities and law enforcement coordination.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>24/7 government incident response hotline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Ransomware containment and recovery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Court-admissible digital forensics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>APT malware analysis and attribution</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <FileCheck className="w-8 h-8 text-green-600" />
              <h2 className="text-3xl font-bold">Public Sector Case Study</h2>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border-l-4 border-blue-600">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Municipal Government - Ransomware Recovery</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                      Government
                    </span>
                    <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm font-medium">
                      Incident Response
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                      Business Continuity
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Q1 2024</div>
                  <div className="text-sm text-gray-500">Bulawayo, Zimbabwe</div>
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Challenge:</strong> A major municipal government serving 650,000 residents suffered 
                  a LockBit ransomware attack encrypting tax systems, billing databases, permit management, 
                  and HR systems. Citizen services were completely disabled including online payments, permit 
                  applications, and utility billing. The attackers demanded $1.8 million ransom and threatened 
                  to leak sensitive citizen data including tax records and identification documents.
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Response:</strong> NexNet&apos;s incident response team deployed within 2 hours, 
                  implementing containment measures and conducting forensic analysis. We identified the initial 
                  access vector (compromised VPN with weak credentials), isolated infected systems, and began 
                  parallel recovery operations using offline backups. Security enhancements included network 
                  segmentation, MFA deployment, endpoint detection and response (EDR), and comprehensive security 
                  awareness training for 850 government employees.
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Outcome:</strong> Full system restoration in 84 hours with zero citizen data leakage 
                  and no ransom payment. Recovered 4.2TB of municipal data from tested backups. Post-incident 
                  improvements achieved 95% security posture enhancement with ISO 27001 compliance roadmap, 
                  24/7 SOC monitoring, and quarterly penetration testing. Citizen service portal redesigned 
                  with secure architecture, reducing fraud incidents by 78%. Municipality saved $1.8M ransom 
                  and gained public trust through transparent incident communication.
                </p>

                <div className="grid grid-cols-4 gap-4 mt-6">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">84h</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Recovery Time</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">$0</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Ransom Paid</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">4.2TB</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Data Recovered</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">78%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Fraud Reduction</div>
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
          <h2 className="text-3xl font-bold mb-4">Secure Your Government Infrastructure</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Partner with Africa&apos;s leading public sector cybersecurity experts for e-government security, data protection, and incident response.
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
