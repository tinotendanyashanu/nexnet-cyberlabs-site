import { Metadata } from "next";
import Link from "next/link";
import { ImageHero } from "@/components/ImageHero";
import { 
  GraduationCap, 
  Award, 
  Code, 
  Shield,
  Users,
  Clock,
  CheckCircle,
  BookOpen,
  Laptop,
  Target
} from "lucide-react";

export const metadata: Metadata = {
  title: "Academy Programs | NexNet CyberLabs",
  description: "Professional cybersecurity training programs, certifications, and hands-on courses from NexNet CyberLabs Academy. Develop practical skills in penetration testing, incident response, and security operations.",
};

export default function AcademyProgramsPage() {
  return (
    <div className="min-h-screen">
      <ImageHero
        bgSrc="/images/globe-network.svg"
        title="Academy Training Programs"
        subtitle="Professional cybersecurity education with hands-on labs, real-world scenarios, and industry-recognized certifications. Building Africa's next generation of cybersecurity professionals."
        ctaPrimary={{ text: "Apply Now", href: "/academy/join" }}
        ctaSecondary={{ text: "View Schedule", href: "#schedule" }}
      />

      {/* Program Overview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">About NexNet CyberLabs Academy</h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                NexNet CyberLabs Academy was founded in 2024 to address Africa&apos;s critical cybersecurity 
                skills gap. We provide practical, hands-on training that combines theoretical knowledge with 
                real-world scenarios drawn from our frontline consulting engagements. Our programs are designed 
                by practitioners for practitioners, ensuring graduates are job-ready from day one.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                We offer flexible learning formats including in-person bootcamps at our Harare and Cape Town 
                facilities, virtual instructor-led training, and hybrid models. All programs include access to 
                our state-of-the-art cyber range for hands-on exercises simulating real attack scenarios.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">350+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Students trained since 2024
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">87%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Job placement rate within 6 months
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Industry-recognized certifications offered
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Award className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">Flagship Programs</h2>
            </div>

            <div className="space-y-8">
              {/* Cybersecurity Bootcamp */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border-2 border-blue-200 dark:border-blue-800 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Shield className="w-8 h-8 text-blue-600" />
                        <h3 className="text-2xl font-bold">Professional Cybersecurity Bootcamp</h3>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                          12 Weeks Full-Time
                        </span>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                          Beginner to Intermediate
                        </span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                          In-Person & Virtual
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-600">$2,500</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Full Program</div>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Our flagship 12-week intensive bootcamp transforms beginners into job-ready cybersecurity 
                    professionals. Covering network security, penetration testing, incident response, and 
                    security operations with 60% hands-on labs and 40% theory.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                        Curriculum Modules
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Networking Fundamentals & TCP/IP (Week 1-2)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Linux & Windows Security (Week 3-4)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Web Application Security & OWASP Top 10 (Week 5-6)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Penetration Testing Methodology (Week 7-8)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Incident Response & Digital Forensics (Week 9-10)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Capstone Project & Certification Prep (Week 11-12)</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5 text-blue-600" />
                        Learning Outcomes
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Conduct network & web application pentests</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Respond to security incidents and breaches</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Analyze malware and perform forensic analysis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Configure firewalls, IDS/IPS, and SIEM systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Write professional security assessment reports</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>Pass industry certifications (CEH, Security+)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-blue-200 dark:border-blue-700">
                    <Link
                      href="/academy/join"
                      className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Apply Now
                    </Link>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Next cohort: January 2026
                    </div>
                  </div>
                </div>
              </div>

              {/* Advanced Penetration Testing */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border-2 border-purple-200 dark:border-purple-800 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Code className="w-8 h-8 text-purple-600" />
                        <h3 className="text-2xl font-bold">Advanced Penetration Testing</h3>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                          8 Weeks Part-Time
                        </span>
                        <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">
                          Advanced Level
                        </span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                          Evening & Weekend
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-purple-600">$1,800</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Full Program</div>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Advanced offensive security training for experienced professionals. Master red team tactics, 
                    exploit development, Active Directory attacks, and advanced evasion techniques. Prepares for 
                    OSCP, OSEP, and CRTP certifications.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold mb-3">Curriculum Highlights</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Advanced network & infrastructure pentesting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Active Directory enumeration & lateral movement</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Exploit development & buffer overflow attacks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>EDR/AV evasion and obfuscation techniques</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Red team operations & C2 frameworks (Cobalt Strike)</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3">Prerequisites</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>2+ years in cybersecurity or IT</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Proficiency in Linux/Windows administration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Basic programming skills (Python, Bash)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Understanding of networking protocols</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>CEH or Security+ certification recommended</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-purple-200 dark:border-purple-700">
                    <Link
                      href="/academy/join"
                      className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Apply Now
                    </Link>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Next cohort: February 2026
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Operations Center Analyst */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border-2 border-green-200 dark:border-green-800 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Laptop className="w-8 h-8 text-green-600" />
                        <h3 className="text-2xl font-bold">SOC Analyst Training Program</h3>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                          6 Weeks Full-Time
                        </span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                          Entry to Intermediate
                        </span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                          Hybrid Format
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-600">$1,500</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Full Program</div>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Specialized training for Security Operations Center (SOC) roles. Learn threat detection, 
                    SIEM administration, incident triage, and threat hunting using industry-standard tools 
                    including Splunk, ELK Stack, and Microsoft Sentinel.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold mb-3">Core Skills</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>SIEM deployment & log analysis (Splunk, ELK)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Threat detection & alert triage workflows</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Malware analysis & sandbox investigation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Network traffic analysis with Wireshark/Zeek</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Threat intelligence integration (MISP, OpenCTI)</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3">Career Preparation</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>24/7 SOC operations simulation exercises</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Incident response playbook development</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Industry certification preparation (CySA+, GCIH)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Job placement assistance & resume building</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Access to NexNet SOC for internship opportunities</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-green-200 dark:border-green-700">
                    <Link
                      href="/academy/join"
                      className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Apply Now
                    </Link>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Next cohort: January 2026
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short Courses */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Users className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">Short Courses & Workshops</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Course 1 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="text-lg font-bold mb-2">Web Application Security</h3>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  2 weeks • $450 • Virtual
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  OWASP Top 10, SQL injection, XSS, CSRF, authentication bypass, and secure coding practices.
                </p>
                <Link href="/academy/join" className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                  Learn More →
                </Link>
              </div>

              {/* Course 2 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="text-lg font-bold mb-2">Cloud Security (AWS/Azure)</h3>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  3 weeks • $650 • Hybrid
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  Cloud security fundamentals, IAM, S3 security, network configurations, and compliance frameworks.
                </p>
                <Link href="/academy/join" className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                  Learn More →
                </Link>
              </div>

              {/* Course 3 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="text-lg font-bold mb-2">Digital Forensics & IR</h3>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  2 weeks • $500 • In-Person
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  Evidence collection, disk forensics, memory analysis, malware analysis, and incident response procedures.
                </p>
                <Link href="/academy/join" className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                  Learn More →
                </Link>
              </div>

              {/* Course 4 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="text-lg font-bold mb-2">Mobile App Security</h3>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  2 weeks • $450 • Virtual
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  iOS & Android security testing, reverse engineering, API security, and secure mobile development.
                </p>
                <Link href="/academy/join" className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                  Learn More →
                </Link>
              </div>

              {/* Course 5 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="text-lg font-bold mb-2">Threat Intelligence Analysis</h3>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  1 week • $350 • Virtual
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  OSINT techniques, dark web monitoring, threat actor profiling, and intelligence reporting.
                </p>
                <Link href="/academy/join" className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                  Learn More →
                </Link>
              </div>

              {/* Course 6 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <h3 className="text-lg font-bold mb-2">GRC & Compliance</h3>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  2 weeks • $500 • Hybrid
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  ISO 27001, NIST CSF, risk assessment, policy development, and audit preparation.
                </p>
                <Link href="/academy/join" className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="schedule" className="py-20 bg-gradient-to-b from-blue-900 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Cybersecurity Career?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join Africa&apos;s premier cybersecurity academy. Financial aid available. Apply now for upcoming cohorts starting January 2026.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/academy/join"
              className="px-8 py-3 bg-brand-teal text-black font-semibold rounded-lg hover:bg-teal-400 transition-colors"
            >
              Apply to Academy
            </Link>
            <Link
              href="/academy/internships"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Explore Internships
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
