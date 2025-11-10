import { Metadata } from "next";
import Link from "next/link";
import { ImageHero } from "@/components/ImageHero";
import { 
  Users, 
  GraduationCap,
  Building2,
  Award,
  CheckCircle,
  Handshake,
  Target,
  TrendingUp
} from "lucide-react";

export const metadata: Metadata = {
  title: "Academy Partners | NexNet CyberLabs",
  description: "Academic and industry partnerships at NexNet CyberLabs Academy. Collaborating with universities, certification bodies, and technology vendors to deliver world-class cybersecurity education.",
};

export default function AcademyPartnersPage() {
  return (
    <div className="min-h-screen">
      <ImageHero
        bgSrc="/images/globe-network.svg"
        title="Academy Partners"
        subtitle="Building Africa's cybersecurity future through strategic partnerships with leading universities, certification bodies, technology vendors, and industry organizations."
        ctaPrimary={{ text: "Become a Partner", href: "/contact" }}
        ctaSecondary={{ text: "View Programs", href: "/academy/programs" }}
      />

      {/* Partnership Overview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Handshake className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">Our Partnership Ecosystem</h2>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                NexNet CyberLabs Academy collaborates with academic institutions, certification bodies, technology 
                vendors, and industry organizations to deliver comprehensive cybersecurity education. Our partnerships 
                enable curriculum development, instructor training, student internships, and technology access.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                We work with universities across Zimbabwe, South Africa, Kenya, and Nigeria to bridge the gap 
                between academic theory and industry practice. Our industry partnerships provide students with 
                real-world exposure through guest lectures, workshops, and internship opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  University partnerships
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Technology vendors
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Certification bodies
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Partners */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">Academic Partners</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-bold mb-4">Zimbabwe Universities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">University of Zimbabwe (UZ)</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Computer Science Department - Guest lectures, internships, cyber range access
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">National University of Science & Technology (NUST)</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Information Security program collaboration, joint research initiatives
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Midlands State University (MSU)</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Cybersecurity workshops, capture-the-flag competitions, student projects
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Harare Institute of Technology (HIT)</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Technical training programs, lab equipment donations, mentorship
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl border border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-bold mb-4">Regional Universities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">University of Cape Town (UCT)</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        South Africa - Research collaboration, student internships
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">University of Witwatersrand (Wits)</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        South Africa - Joint cybersecurity curriculum development
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">University of Nairobi</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Kenya - East Africa cybersecurity education programs
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">University of Lagos</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Nigeria - West Africa talent pipeline, virtual training programs
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4">Partnership Benefits for Universities</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600">For Faculty</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Free instructor training on latest cybersecurity trends</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Access to our cyber range for practical teaching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Guest lectures from industry practitioners</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Joint research opportunities and publications</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600">For Students</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Discounted academy programs and certifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Priority internship and job placement opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Capstone project mentorship from consultants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Industry networking events and conferences</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Building2 className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">Technology & Certification Partners</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Splunk */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="h-16 flex items-center justify-center mb-4">
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">Splunk</div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Official Splunk Education Partner providing SIEM training, lab licenses, and certification vouchers.
                </p>
                <div className="text-xs text-blue-600 font-semibold">Training Partner</div>
              </div>

              {/* EC-Council */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="h-16 flex items-center justify-center mb-4">
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">EC-Council</div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Authorized EC-Council Training Center for CEH, CHFI, and other ethical hacking certifications.
                </p>
                <div className="text-xs text-blue-600 font-semibold">Authorized Training Center</div>
              </div>

              {/* CompTIA */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="h-16 flex items-center justify-center mb-4">
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">CompTIA</div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  CompTIA Academic Partner delivering Security+, CySA+, PenTest+, and CASP+ training programs.
                </p>
                <div className="text-xs text-blue-600 font-semibold">Academic Partner</div>
              </div>

              {/* ISC2 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="h-16 flex items-center justify-center mb-4">
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">(ISC)²</div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Authorized Training Partner for CISSP, SSCP, and CCSP certifications with official courseware.
                </p>
                <div className="text-xs text-blue-600 font-semibold">Authorized Training Partner</div>
              </div>

              {/* Offensive Security */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="h-16 flex items-center justify-center mb-4">
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">OffSec</div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Providing OSCP, OSEP, and OSWP exam preparation with custom lab environments and mentorship.
                </p>
                <div className="text-xs text-blue-600 font-semibold">Training Provider</div>
              </div>

              {/* Microsoft */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="h-16 flex items-center justify-center mb-4">
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">Microsoft</div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Microsoft Partner delivering Azure security training (AZ-500, SC-200, SC-300) with lab access.
                </p>
                <div className="text-xs text-blue-600 font-semibold">Learning Partner</div>
              </div>

              {/* AWS */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="h-16 flex items-center justify-center mb-4">
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">AWS</div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  AWS Training Partner providing cloud security training and AWS Security Specialty certification prep.
                </p>
                <div className="text-xs text-blue-600 font-semibold">Training Partner</div>
              </div>

              {/* SANS */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="h-16 flex items-center justify-center mb-4">
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">SANS Institute</div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Collaborating on GIAC certification preparation courses (GCIH, GCFE, GPEN) with group discounts.
                </p>
                <div className="text-xs text-blue-600 font-semibold">Training Collaboration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Partners */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Users className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">Industry & Hiring Partners</h2>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-xl border border-green-200 dark:border-green-800 mb-8">
              <h3 className="text-xl font-bold mb-4">Hiring Partners</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our graduates are recruited by leading organizations across Africa and internationally. We work 
                closely with hiring partners to ensure our curriculum aligns with industry needs.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Financial Services</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Reserve Bank of Zimbabwe</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Standard Bank Group (South Africa)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Econet Wireless Zimbabwe</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technology & Consulting</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Liquid Intelligent Technologies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Accenture Africa</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Deloitte Cyber Africa</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-blue-600" />
                Partnership Benefits
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-semibold mb-2">Talent Pipeline</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Direct access to pre-screened, job-ready cybersecurity professionals through internships and 
                    recruiting events.
                  </p>
                </div>
                <div>
                  <Award className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-semibold mb-2">Custom Training</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Tailored training programs for your organization&apos;s specific security tools, processes, and 
                    technology stack.
                  </p>
                </div>
                <div>
                  <Users className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-semibold mb-2">Upskilling Programs</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Group training packages for existing teams with volume discounts and flexible scheduling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Interested in partnering with NexNet CyberLabs Academy? We welcome collaborations with universities, 
            certification bodies, technology vendors, and hiring organizations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-brand-teal text-black font-semibold rounded-lg hover:bg-teal-400 transition-colors"
            >
              Contact Partnerships Team
            </Link>
            <Link
              href="/academy/programs"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              View Academy Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
