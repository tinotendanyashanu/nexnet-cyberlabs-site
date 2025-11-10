import { Metadata } from "next";
import Link from "next/link";
import { ImageHero } from "@/components/ImageHero";
import { 
  Award, 
  CheckCircle,
  BookOpen,
  Clock,
  DollarSign,
  Target,
  TrendingUp,
  Shield
} from "lucide-react";

export const metadata: Metadata = {
  title: "Certifications | NexNet CyberLabs Academy",
  description: "Industry-recognized cybersecurity certifications and exam preparation at NexNet CyberLabs Academy. Prepare for CEH, OSCP, Security+, CySA+, CISSP, and more.",
};

export default function CertificationsPage() {
  return (
    <div className="min-h-screen">
      <ImageHero
        bgSrc="/images/globe-network.svg"
        title="Cybersecurity Certifications"
        subtitle="Validate your skills with industry-recognized certifications. Our exam preparation bootcamps and voucher programs help you achieve CEH, OSCP, Security+, CySA+, CISSP, and more."
        ctaPrimary={{ text: "Enroll in Prep Course", href: "/academy/join" }}
        ctaSecondary={{ text: "View All Certifications", href: "#certifications" }}
      />

      {/* Overview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">Certification Programs</h2>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                NexNet CyberLabs Academy offers comprehensive certification preparation programs designed by 
                certified instructors with real-world experience. We provide structured study plans, hands-on 
                labs, practice exams, and exam vouchers to maximize your success rate.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                Our certification bootcamps have a 92% first-attempt pass rate, significantly higher than 
                industry averages. We offer both standalone certification prep courses and bundled packages 
                that include training + exam voucher at discounted rates.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  First-attempt pass rate
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Certifications supported
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">280+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Students certified in 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Tracks */}
      <section id="certifications" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Shield className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">Certification Tracks</h2>
            </div>

            <div className="space-y-8">
              {/* Entry Level */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-green-600" />
                  </div>
                  Entry Level Certifications
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* CompTIA Security+ */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold mb-1">CompTIA Security+</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Foundational security certification</p>
                      </div>
                      <Award className="w-8 h-8 text-green-600" />
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-green-600" />
                        <span>4 weeks preparation</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="w-4 h-4 text-green-600" />
                        <span>$650 (training + voucher)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Target className="w-4 h-4 text-green-600" />
                        <span>Ideal for: Career starters, IT professionals transitioning to security</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Network security fundamentals</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Threat management & risk mitigation</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Cryptography and identity management</span>
                      </li>
                    </ul>

                    <Link
                      href="/academy/join"
                      className="inline-block px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Enroll Now
                    </Link>
                  </div>

                  {/* CEH */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold mb-1">Certified Ethical Hacker (CEH)</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">EC-Council foundational hacking cert</p>
                      </div>
                      <Award className="w-8 h-8 text-green-600" />
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-green-600" />
                        <span>6 weeks preparation</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="w-4 h-4 text-green-600" />
                        <span>$1,200 (training + voucher)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Target className="w-4 h-4 text-green-600" />
                        <span>Ideal for: Aspiring penetration testers, security analysts</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Hacking methodologies & reconnaissance</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Network & web application pentesting</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Malware, social engineering, and evasion</span>
                      </li>
                    </ul>

                    <Link
                      href="/academy/join"
                      className="inline-block px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Intermediate Level */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  Intermediate Level Certifications
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* CySA+ */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold mb-1">CompTIA CySA+</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Cybersecurity analyst certification</p>
                      </div>
                      <Award className="w-8 h-8 text-blue-600" />
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span>5 weeks preparation</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="w-4 h-4 text-blue-600" />
                        <span>$850 (training + voucher)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Target className="w-4 h-4 text-blue-600" />
                        <span>Ideal for: SOC analysts, threat hunters, incident responders</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Threat & vulnerability management</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Security operations & monitoring (SIEM)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Incident response & forensics</span>
                      </li>
                    </ul>

                    <Link
                      href="/academy/join"
                      className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Enroll Now
                    </Link>
                  </div>

                  {/* GCIH */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold mb-1">GIAC Certified Incident Handler (GCIH)</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">SANS incident response certification</p>
                      </div>
                      <Award className="w-8 h-8 text-blue-600" />
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span>6 weeks preparation</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="w-4 h-4 text-blue-600" />
                        <span>$1,800 (training + voucher)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Target className="w-4 h-4 text-blue-600" />
                        <span>Ideal for: Incident responders, DFIR specialists</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Incident detection & response methodologies</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Malware analysis & reverse engineering</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Network & host forensics</span>
                      </li>
                    </ul>

                    <Link
                      href="/academy/join"
                      className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Advanced Level */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  Advanced Level Certifications
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* OSCP */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold mb-1">Offensive Security Certified Professional (OSCP)</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Advanced pentesting certification</p>
                      </div>
                      <Award className="w-8 h-8 text-purple-600" />
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-purple-600" />
                        <span>12 weeks preparation</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="w-4 h-4 text-purple-600" />
                        <span>$2,500 (training + lab + voucher)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Target className="w-4 h-4 text-purple-600" />
                        <span>Ideal for: Experienced pentesters, red teamers</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>Advanced exploitation techniques & buffer overflows</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>Privilege escalation (Windows & Linux)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>24-hour hands-on exam simulation</span>
                      </li>
                    </ul>

                    <Link
                      href="/academy/join"
                      className="inline-block px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Enroll Now
                    </Link>
                  </div>

                  {/* CISSP */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold mb-1">Certified Information Systems Security Professional (CISSP)</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">ISC² security management certification</p>
                      </div>
                      <Award className="w-8 h-8 text-purple-600" />
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-purple-600" />
                        <span>8 weeks preparation</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="w-4 h-4 text-purple-600" />
                        <span>$1,500 (training + voucher)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Target className="w-4 h-4 text-purple-600" />
                        <span>Ideal for: Security managers, CISOs, architects (5+ years exp required)</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>8 domains: Security & Risk, Asset Security, Architecture, etc.</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>Governance, risk management, & compliance</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>Security operations & software development</span>
                      </li>
                    </ul>

                    <Link
                      href="/academy/join"
                      className="inline-block px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Certifications */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Other Supported Certifications</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold mb-2">Cloud Security</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>AWS Certified Security - Specialty</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Microsoft Azure Security Engineer (AZ-500)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>CCSP (Certified Cloud Security Professional)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold mb-2">Offensive Security</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>OSEP (Offensive Security Experienced Penetration Tester)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>CRTP (Certified Red Team Professional)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>eWPTX (Web Penetration Tester eXtreme)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold mb-2">Forensics & GRC</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>GCFE (GIAC Certified Forensics Examiner)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>CISM (Certified Information Security Manager)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>CRISC (Certified in Risk & Information Systems Control)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Don&apos;t see the certification you&apos;re looking for? We offer custom preparation programs for most major 
                cybersecurity certifications. Contact us at{" "}
                <a href="mailto:certifications@nexnetcyberlabs.com" className="text-blue-600 hover:text-blue-700 underline">
                  certifications@nexnetcyberlabs.com
                </a>{" "}
                to discuss your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Certified?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our certification bootcamps and achieve your career goals. Financial aid and payment plans available.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/academy/join"
              className="px-8 py-3 bg-brand-teal text-black font-semibold rounded-lg hover:bg-teal-400 transition-colors"
            >
              Enroll in Prep Course
            </Link>
            <Link
              href="/academy/programs"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
