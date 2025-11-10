import { Metadata } from "next";
import Link from "next/link";
import { ImageHero } from "@/components/ImageHero";
import { 
  GraduationCap, 
  ShieldAlert, 
  BookOpen, 
  Lock,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  FileCheck,
  Database
} from "lucide-react";

export const metadata: Metadata = {
  title: "Education Sector Cybersecurity | NexNet CyberLabs",
  description: "Specialized cybersecurity solutions for universities, schools, and educational institutions across Africa. Student data protection, research security, and campus network safety.",
};

export default function EducationPage() {
  return (
    <div className="min-h-screen">
      <ImageHero
        bgSrc="/images/globe-network.svg"
        title="Education Sector Security"
        subtitle="Protecting Africa's educational institutions with specialized cybersecurity solutions for universities, schools, and research centers safeguarding student data and academic integrity."
        ctaPrimary={{ text: "Schedule Consultation", href: "/contact/consultation" }}
        ctaSecondary={{ text: "View Case Studies", href: "#case-studies" }}
      />

      {/* Industry Overview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">Education Sector Landscape</h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                African higher education is experiencing rapid digital transformation with online learning 
                platforms, digital libraries, learning management systems (LMS), and cloud-based collaboration 
                tools. Zimbabwe&apos;s universities serve over 180,000 students, while South Africa&apos;s 
                higher education sector enrolls 1.1 million students across 26 public universities.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                However, educational institutions face mounting cyber threats including ransomware targeting 
                exam systems, student data breaches, research IP theft, credential stuffing attacks, and 
                DDoS extortion. Limited IT security budgets, BYOD (Bring Your Own Device) culture, open 
                campus networks, and valuable research data make universities attractive yet vulnerable targets.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">$2.7B</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Annual cyber losses in global education sector (2024)
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">64%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Universities targeted by ransomware in 2024
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">8.9M</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Student records exposed in breaches globally (2024)
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
              <h2 className="text-3xl font-bold">Education Sector Threats</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Ransomware */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-xl border border-red-200 dark:border-red-800">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Ransomware & Exam System Attacks</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Ransomware attacks timed to exam periods encrypting student information systems, 
                      learning management platforms, and exam databases causing academic disruption.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="font-semibold">Vice Society</span> - Education sector specialization
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="font-semibold">LockBit 3.0</span> - 28 universities in Africa (2024)
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="font-semibold">Rhysida</span> - Student data exfiltration
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Student Data Breaches */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 p-8 rounded-xl border border-orange-200 dark:border-orange-800">
                <div className="flex items-start gap-4">
                  <Database className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Student Data Breaches & Identity Theft</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Breaches of student information systems (SIS) exposing personal data, academic records, 
                      financial aid information, and biometric data used for identity theft.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span className="font-semibold">SQL Injection</span> - Database extraction attacks
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span className="font-semibold">Misconfigured S3</span> - Cloud storage leaks
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span className="font-semibold">Insider Access</span> - Staff data theft
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Research IP Theft */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl border border-purple-200 dark:border-purple-800">
                <div className="flex items-start gap-4">
                  <BookOpen className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Research IP Theft & Espionage</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Nation-state and corporate espionage targeting valuable research in agriculture, 
                      mining, medical sciences, and technology for competitive intelligence.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="font-semibold">APT41 (China)</span> - Academic research targeting
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="font-semibold">APT28</span> - Defense research theft
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="font-semibold">Corporate Espionage</span> - Patent theft
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Credential Attacks */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-4">
                  <Lock className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Credential Stuffing & Account Takeover</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Automated credential stuffing attacks targeting student and faculty accounts using 
                      breached password lists, compromising email, LMS, and financial aid systems.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="font-semibold">Credential Stuffing</span> - Automated login attacks
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="font-semibold">Phishing Campaigns</span> - Fake Office 365 logins
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="font-semibold">BEC Attacks</span> - Email account compromise
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
              <h2 className="text-3xl font-bold">Education Sector Solutions</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-bold mb-4">Student Data Protection & Privacy</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Comprehensive data protection for student information systems (SIS), learning management 
                  systems (LMS), and academic records with encryption and access controls.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>FERPA/POPIA compliance for student records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Database encryption and access logging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Data loss prevention (DLP) for sensitive records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Privacy impact assessments and audits</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl border border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-bold mb-4">Campus Network Security</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Secure campus network architecture with network segmentation, guest WiFi isolation, 
                  BYOD security, and protection for residence hall networks.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Network segmentation (academic, admin, guest, IoT)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>802.1X network access control (NAC)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>BYOD security with mobile device management (MDM)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>DDoS protection for campus infrastructure</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-xl border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-bold mb-4">Research Security & IP Protection</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Protection for valuable research data, intellectual property, and collaborative 
                  research platforms with threat intelligence and insider threat detection.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Research data classification and protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Secure collaboration platforms (encrypted file sharing)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Threat intelligence for APT detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Insider threat monitoring and user behavior analytics</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-xl border border-orange-200 dark:border-orange-800">
                <h3 className="text-xl font-bold mb-4">Security Awareness & Training</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Comprehensive security awareness programs for students, faculty, and staff with 
                  phishing simulations, cybersecurity courses, and incident reporting training.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Student cybersecurity orientation programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Faculty/staff security awareness training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Phishing simulation campaigns (quarterly)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Cybersecurity curriculum integration support</span>
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
              <h2 className="text-3xl font-bold">Education Sector Case Study</h2>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border-l-4 border-blue-600">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Public University - Ransomware Prevention</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                      Higher Education
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                      Network Security
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                      Data Protection
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
                  <strong>Challenge:</strong> A major public university with 18,000 students faced escalating 
                  cybersecurity risks including multiple phishing attacks, unsecured BYOD devices on campus 
                  WiFi, flat network architecture with no segmentation, and legacy student information system 
                  (SIS) with known vulnerabilities. Peer institutions had suffered ransomware attacks disrupting 
                  exam periods, creating urgency for preventive security measures.
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Response:</strong> NexNet conducted a comprehensive security assessment identifying 
                  142 critical and high-risk vulnerabilities. We implemented network segmentation creating 
                  six security zones (academic, administrative, student residence, guest WiFi, research, DMZ), 
                  deployed next-generation firewalls with IPS, established 802.1X network access control (NAC) 
                  for device authentication, and implemented endpoint detection and response (EDR) on 2,400+ 
                  faculty/staff endpoints. Security awareness training was delivered to 850 staff and integrated 
                  into student orientation for 5,000+ new students annually.
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Outcome:</strong> Zero ransomware incidents in 12 months (compared to 3 attempted 
                  attacks blocked by new controls). Phishing click rate reduced from 38% to 6% through 
                  awareness training. Successfully protected student database with 18,000 records and secured 
                  research data valued at $2.3 million. Achieved POPIA compliance for student data protection. 
                  Security posture improvement of 87% (from initial assessment baseline). University now 
                  operates a student-run Security Operations Center (SOC) with NexNet mentorship, creating 
                  cybersecurity career pathways for graduates.
                </p>

                <div className="grid grid-cols-4 gap-4 mt-6">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">0</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Ransomware Incidents</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">87%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Security Improvement</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">142</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Vulnerabilities Fixed</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">6%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Phishing Click Rate</div>
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
          <h2 className="text-3xl font-bold mb-4">Secure Your Educational Institution</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Partner with Africa&apos;s leading education cybersecurity experts for student data protection, campus network security, and research IP protection.
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
