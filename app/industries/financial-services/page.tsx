import { Metadata } from "next";
import Link from "next/link";
import { ImageHero } from "@/components/ImageHero";
import { 
  Building2, 
  ShieldAlert, 
  Scale, 
  Globe2, 
  Lock,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  FileCheck,
  Users,
  Database,
  Smartphone
} from "lucide-react";

export const metadata: Metadata = {
  title: "Financial Services Cybersecurity | NexNet CyberLabs",
  description: "Specialized cybersecurity solutions for banks, insurance, fintech, and financial institutions across Africa and Europe. Regulatory compliance, fraud prevention, and threat intelligence.",
};

export default function FinancialServicesPage() {
  return (
    <div className="min-h-screen">
      <ImageHero
        bgSrc="/images/globe-network.svg"
        title="Financial Services Security"
        subtitle="Protecting Africa's financial infrastructure with specialized cybersecurity solutions for banks, insurance, fintech, and investment firms."
        ctaPrimary={{ text: "Schedule Consultation", href: "/contact/consultation" }}
        ctaSecondary={{ text: "View Case Studies", href: "#case-studies" }}
      />

      {/* Industry Overview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">Financial Sector Landscape</h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Africa&apos;s financial services sector is experiencing unprecedented digital transformation, 
                with mobile banking penetration exceeding 60% in Zimbabwe and Kenya, and fintech investments 
                surpassing $3 billion across the continent in 2024. This rapid digitization brings immense 
                opportunity—but also heightened cybersecurity risks.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                Financial institutions face sophisticated threats including ransomware, business email 
                compromise (BEC), ATM malware, mobile banking trojans, and insider threats. Regulatory 
                pressures from the Reserve Bank of Zimbabwe (RBZ), South African Reserve Bank (SARB), 
                European Central Bank (ECB), and international frameworks like PCI DSS and SWIFT CSP add 
                complexity to security operations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">$2.1B</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Annual cyber losses in African financial sector (2024)
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">78%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Financial institutions targeted by ransomware in 2024
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">156</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Average days to detect a breach in banking systems
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
              <h2 className="text-3xl font-bold">Financial Sector Threats</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Ransomware & Extortion */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-xl border border-red-200 dark:border-red-800">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Ransomware & Extortion</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Financial institutions are prime targets for double-extortion ransomware attacks 
                      that encrypt data and threaten to leak sensitive customer information.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="font-semibold">LockBit 3.0</span> - Targeted 23 African banks in 2024
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="font-semibold">BlackCat/ALPHV</span> - Payment systems encryption
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="font-semibold">Clop</span> - Exploits file transfer vulnerabilities
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BEC & Wire Fraud */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 p-8 rounded-xl border border-orange-200 dark:border-orange-800">
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Business Email Compromise (BEC)</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Sophisticated social engineering attacks targeting finance departments to authorize 
                      fraudulent wire transfers, averaging $180,000 per successful attack.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span className="font-semibold">CEO Fraud</span> - Executive impersonation attacks
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span className="font-semibold">Vendor Compromise</span> - Fake invoice schemes
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span className="font-semibold">Account Takeover</span> - Credential stuffing attacks
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Banking Malware */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl border border-purple-200 dark:border-purple-800">
                <div className="flex items-start gap-4">
                  <Smartphone className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Mobile Banking Trojans</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Africa&apos;s mobile-first banking ecosystem is targeted by Android banking trojans 
                      that steal credentials, intercept OTPs, and perform unauthorized transactions.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="font-semibold">Anatsa/TeaBot</span> - 650+ banking apps targeted
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="font-semibold">Xenomorph</span> - Overlay attack capabilities
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="font-semibold">Hydra/Brunhilda</span> - SMS interception
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ATM & POS Attacks */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-4">
                  <Database className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">ATM & Point-of-Sale Attacks</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Physical and logical attacks on ATM networks and POS terminals, including 
                      jackpotting malware, card skimmers, and supply chain compromises.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="font-semibold">ATMitch</span> - Cash-out malware infections
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="font-semibold">Ploutus.D</span> - SMS-controlled cash dispense
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="font-semibold">POS RAM Scrapers</span> - Payment card theft
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
              <Scale className="w-8 h-8 text-green-600" />
              <h2 className="text-3xl font-bold">Regulatory Frameworks</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* PCI DSS */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-green-200 dark:border-green-800">
                <FileCheck className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">PCI DSS 4.0</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Payment Card Industry Data Security Standard for all entities storing, processing, 
                  or transmitting cardholder data.
                </p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>12 core requirements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Network segmentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Quarterly ASV scans</span>
                  </div>
                </div>
              </div>

              {/* SWIFT CSP */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800">
                <Globe2 className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">SWIFT CSP</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Customer Security Programme for banks using SWIFT messaging for international 
                  wire transfers and payments.
                </p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>32 mandatory controls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Environment isolation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Attestation reporting</span>
                  </div>
                </div>
              </div>

              {/* RBZ Guidelines */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-purple-200 dark:border-purple-800">
                <Building2 className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">RBZ Cybersecurity</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Reserve Bank of Zimbabwe guidelines on cybersecurity, data protection, 
                  and incident reporting for financial institutions.
                </p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span>Incident reporting (72h)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span>Annual audits required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span>Data localization rules</span>
                  </div>
                </div>
              </div>

              {/* GDPR / POPIA */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-orange-200 dark:border-orange-800">
                <Lock className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">GDPR / POPIA</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  European GDPR and South African POPIA for customer data protection, 
                  privacy rights, and breach notification.
                </p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span>72-hour breach notice</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span>Right to be forgotten</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span>Data processing records</span>
                  </div>
                </div>
              </div>

              {/* SARB Guidelines */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-red-200 dark:border-red-800">
                <ShieldAlert className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">SARB Prudential</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  South African Reserve Bank prudential standards for banking supervision, 
                  operational resilience, and cyber risk management.
                </p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span>Cyber risk frameworks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span>Board-level oversight</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span>Recovery/resilience plans</span>
                  </div>
                </div>
              </div>

              {/* ISO 27001 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-teal-200 dark:border-teal-800">
                <FileCheck className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">ISO 27001:2022</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  International standard for information security management systems (ISMS), 
                  required by many financial regulators.
                </p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span>93 security controls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span>Risk assessment process</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span>Annual certification</span>
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
              <h2 className="text-3xl font-bold">Financial Services Solutions</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-bold mb-4">Compliance & Audit Readiness</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  End-to-end support for PCI DSS, SWIFT CSP, ISO 27001, and regulatory compliance 
                  with gap assessments, remediation roadmaps, and audit preparation.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>PCI DSS SAQ completion and ASV scanning (quarterly)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>SWIFT CSP attestation framework implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>ISO 27001 certification support (6-12 months)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>RBZ/SARB regulatory reporting and incident response</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl border border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-bold mb-4">Fraud Detection & Prevention</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Advanced threat detection for BEC, wire fraud, account takeover, and transaction 
                  anomalies using behavioral analytics and machine learning.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Email security (DMARC, SPF, DKIM) and anti-phishing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Transaction monitoring and anomaly detection (SIEM)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Mobile app security assessments and hardening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Insider threat detection and user behavior analytics</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-xl border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-bold mb-4">Penetration Testing & Red Team</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Specialized security assessments for banking infrastructure including core banking 
                  systems, mobile apps, ATM networks, SWIFT environments, and APIs.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Core banking system penetration testing (Temenos, Oracle)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Mobile banking app security reviews (iOS & Android)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>ATM network and physical security assessments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Red team exercises simulating APT and insider threats</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-xl border border-orange-200 dark:border-orange-800">
                <h3 className="text-xl font-bold mb-4">Incident Response & Forensics</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  24/7 incident response for ransomware, BEC, data breaches, and fraud with digital 
                  forensics, malware analysis, and regulatory breach notification support.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>24/7 emergency response hotline (+263 and +27)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Ransomware containment and recovery (72h SLA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Forensic analysis for fraud investigations (court-admissible)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>RBZ/SARB incident notification and reporting assistance</span>
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
              <h2 className="text-3xl font-bold">Financial Services Case Studies</h2>
            </div>

            <div className="space-y-8">
              {/* Case Study 1: Commercial Bank */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border-l-4 border-blue-600">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Commercial Bank - Ransomware Recovery</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                        Banking
                      </span>
                      <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm font-medium">
                        Incident Response
                      </span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                        Digital Forensics
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Q2 2024</div>
                    <div className="text-sm text-gray-500">Harare, Zimbabwe</div>
                  </div>
                </div>

                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Challenge:</strong> A leading commercial bank in Zimbabwe suffered a LockBit 3.0 
                    ransomware attack that encrypted critical database servers and threatened to leak customer 
                    records. The attack occurred on a Friday evening, impacting ATM networks and mobile banking 
                    services with potential exposure of 450,000 customer accounts.
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Response:</strong> NexNet&apos;s incident response team was onsite within 3 hours, 
                    implementing containment measures to isolate infected systems and preserve forensic evidence. 
                    We conducted memory forensics to identify the initial access vector (phishing email with 
                    malicious macro), performed malware analysis to understand encryption methods, and developed 
                    a recovery strategy using offline backups verified to be clean.
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Outcome:</strong> Full system restoration within 72 hours with zero data loss. We 
                    provided RBZ-compliant incident reporting, implemented enhanced email security (DMARC, SPF, 
                    anti-malware), deployed endpoint detection and response (EDR) across 1,200+ endpoints, and 
                    conducted organization-wide security awareness training. The bank avoided the $2.3 million 
                    ransom demand and maintained regulatory compliance with no customer data leakage.
                  </p>

                  <div className="grid grid-cols-4 gap-4 mt-6">
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">72h</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Recovery Time</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">$0</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Data Loss</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">450K</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Accounts Protected</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">$2.3M</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Ransom Avoided</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study 2: Fintech */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border-l-4 border-purple-600">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Fintech Startup - PCI DSS Compliance</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                        Fintech
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                        Compliance
                      </span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                        PCI DSS
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Q3 2024</div>
                    <div className="text-sm text-gray-500">Cape Town, South Africa</div>
                  </div>
                </div>

                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Challenge:</strong> A fast-growing mobile payments fintech needed PCI DSS 3.2.1 
                    (SAQ D) certification to process card payments directly, but lacked internal security 
                    expertise and faced a 90-day deadline from their acquiring bank. The platform processed 
                    15,000+ transactions daily with annual volume exceeding $12 million.
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Approach:</strong> We conducted a comprehensive gap assessment identifying 47 
                    non-compliances across the 12 PCI DSS requirements. Our team implemented network 
                    segmentation to isolate the cardholder data environment (CDE), deployed web application 
                    firewall (WAF) and intrusion detection/prevention systems (IDS/IPS), established 
                    centralized logging and monitoring, and developed security policies and procedures. 
                    Quarterly vulnerability scans (ASV) and annual penetration testing were scheduled.
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Outcome:</strong> PCI DSS SAQ D compliance achieved in 85 days, enabling direct 
                    card processing and reducing transaction fees by 35%. The company saved $180,000 annually 
                    in payment gateway costs, improved security posture dramatically, and gained competitive 
                    advantage in the South African fintech market. Ongoing managed compliance services ensure 
                    continuous adherence to PCI DSS requirements.
                  </p>

                  <div className="grid grid-cols-4 gap-4 mt-6">
                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">85d</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Compliance Time</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">35%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Fee Reduction</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">47</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Gaps Resolved</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">$180K</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Annual Savings</div>
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
          <h2 className="text-3xl font-bold mb-4">Secure Your Financial Infrastructure</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Partner with Africa&apos;s leading cybersecurity experts for comprehensive financial services protection, regulatory compliance, and incident response.
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
