import { Metadata } from "next";
import Link from "next/link";
import { ImageHero } from "@/components/ImageHero";
import { 
  Briefcase, 
  Calendar,
  DollarSign,
  MapPin,
  Award,
  CheckCircle,
  Clock,
  Users,
  Target,
  TrendingUp
} from "lucide-react";

export const metadata: Metadata = {
  title: "Internship Program | NexNet CyberLabs Academy",
  description: "Gain real-world cybersecurity experience through NexNet CyberLabs' internship program. Work alongside industry professionals on client engagements and SOC operations.",
};

export default function InternshipsPage() {
  return (
    <div className="min-h-screen">
      <ImageHero
        bgSrc="/images/globe-network.svg"
        title="Cybersecurity Internship Program"
        subtitle="Bridge the gap between learning and professional practice. Our internships provide hands-on experience with real client engagements, mentorship from senior consultants, and potential full-time employment opportunities."
        ctaPrimary={{ text: "Apply for Internship", href: "/academy/join" }}
        ctaSecondary={{ text: "View Positions", href: "#positions" }}
      />

      {/* Program Overview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">About the Internship Program</h2>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                NexNet CyberLabs Internship Program offers students and recent graduates the opportunity to 
                work on real cybersecurity projects alongside experienced professionals. Unlike traditional 
                internships that focus on observing, our interns actively participate in client engagements, 
                security assessments, and SOC operations under close supervision.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                We offer both structured internships for academy graduates and competitive external internships 
                for qualified candidates from universities across Africa. Our program has a strong track record: 
                67% of interns receive full-time job offers upon completion.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <Calendar className="w-8 h-8 text-blue-600 mb-3" />
                <div className="text-2xl font-bold text-blue-600 mb-1">3-6</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Months duration
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <Users className="w-8 h-8 text-blue-600 mb-3" />
                <div className="text-2xl font-bold text-blue-600 mb-1">24</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Interns annually
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <DollarSign className="w-8 h-8 text-blue-600 mb-3" />
                <div className="text-2xl font-bold text-blue-600 mb-1">Paid</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Stipend provided
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
                <div className="text-2xl font-bold text-blue-600 mb-1">67%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Conversion to FTE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Target className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">What You&apos;ll Gain</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-bold mb-4">Technical Experience</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Participate in real penetration testing engagements (web apps, networks, APIs)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Conduct vulnerability assessments and security audits for live clients</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Monitor security events in our 24/7 Security Operations Center</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Assist with digital forensics investigations and incident response cases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Develop custom security tools and automation scripts (Python, Bash, PowerShell)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Learn industry-standard tools: Burp Suite, Metasploit, Splunk, ELK, Nessus</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl border border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-bold mb-4">Professional Development</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">1-on-1 mentorship from senior security consultants with 10+ years experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Write professional penetration testing and audit reports for clients</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Present findings to client stakeholders and executive teams</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Prepare for industry certifications (CEH, OSCP, Security+, CySA+)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Attend client meetings, understand business requirements and risk assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Network with industry professionals at security conferences and meetups</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Positions */}
      <section id="positions" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Award className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">Available Internship Positions</h2>
            </div>

            <div className="space-y-6">
              {/* Position 1 */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Penetration Testing Intern</h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                        <MapPin className="w-3 h-3 inline mr-1" />
                        Harare or Cape Town
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                        <Calendar className="w-3 h-3 inline mr-1" />
                        6 months
                      </span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                        <DollarSign className="w-3 h-3 inline mr-1" />
                        $800/month stipend
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Join our offensive security team to conduct penetration tests and vulnerability assessments 
                  for clients across financial services, telecom, and government sectors. Learn advanced 
                  exploitation techniques, web application hacking, and network penetration testing.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold mb-3 text-sm">Requirements</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Basic understanding of networking (TCP/IP, HTTP, DNS)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Linux/Windows command line proficiency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Programming skills (Python, Bash preferred)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Completed cybersecurity training or relevant degree</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-3 text-sm">Nice to Have</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>CEH, Security+, or eJPT certification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Experience with CTF challenges or bug bounties</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Familiarity with Burp Suite, Metasploit, Nmap</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Link
                  href="/academy/join"
                  className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Apply Now
                </Link>
              </div>

              {/* Position 2 */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">SOC Analyst Intern</h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                        <MapPin className="w-3 h-3 inline mr-1" />
                        Harare (Hybrid)
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                        <Calendar className="w-3 h-3 inline mr-1" />
                        3-6 months
                      </span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                        <DollarSign className="w-3 h-3 inline mr-1" />
                        $700/month stipend
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Work in our 24/7 Security Operations Center monitoring client networks, analyzing security 
                  alerts, investigating incidents, and responding to threats. Gain experience with SIEM platforms, 
                  threat intelligence, and incident response procedures.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold mb-3 text-sm">Requirements</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Understanding of security concepts and threat landscape</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Basic knowledge of Windows and Linux systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Strong analytical and problem-solving skills</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Ability to work rotating shifts (including nights)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-3 text-sm">Nice to Have</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Experience with Splunk, ELK, or QRadar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Knowledge of MITRE ATT&CK framework</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>CompTIA Security+ or CySA+ certification</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Link
                  href="/academy/join"
                  className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Apply Now
                </Link>
              </div>

              {/* Position 3 */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Digital Forensics Intern</h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                        <MapPin className="w-3 h-3 inline mr-1" />
                        Cape Town
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                        <Calendar className="w-3 h-3 inline mr-1" />
                        6 months
                      </span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                        <DollarSign className="w-3 h-3 inline mr-1" />
                        $750/month stipend
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Assist our DFIR team with digital forensics investigations, evidence collection, malware 
                  analysis, and incident response. Work on high-profile cases involving data breaches, 
                  ransomware attacks, and insider threats.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold mb-3 text-sm">Requirements</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Understanding of file systems and operating systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Attention to detail and documentation skills</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Basic scripting knowledge (Python preferred)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Understanding of chain of custody procedures</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-3 text-sm">Nice to Have</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Experience with FTK, EnCase, or Autopsy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Malware analysis or reverse engineering skills</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>GCFE or similar forensics certification</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Link
                  href="/academy/join"
                  className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Application Process</h2>
            
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Submit Application</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Complete the online application form with your resume, academic transcripts, and a cover 
                    letter explaining why you&apos;re interested in the specific internship position.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Technical Assessment</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Shortlisted candidates complete a technical assessment relevant to their role (pentesting CTF, 
                    SOC triage simulation, or forensics challenge). Typically 2-4 hours, completed remotely.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Interview</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Final candidates meet with team leads and senior consultants via video call for a 45-minute 
                    interview covering technical skills, problem-solving ability, and cultural fit.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Offer & Onboarding</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Selected interns receive an offer letter and begin onboarding 2 weeks before the start date. 
                    Onboarding includes security clearance, NDAs, tool access, and team introductions.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                Application Timeline
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                We accept applications on a rolling basis throughout the year. Most positions start in January, 
                April, or July. Apply at least 6 weeks before your desired start date to allow time for the 
                selection process.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/academy/join"
                  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Apply Now
                </Link>
                <a
                  href="mailto:internships@nexnetcyberlabs.com"
                  className="px-6 py-2 bg-transparent border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
