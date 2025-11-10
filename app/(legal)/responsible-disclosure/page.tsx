import { Metadata } from "next";
import { ImageHero } from "@/components/ImageHero";
import { ShieldAlert, Target, FileCheck, Scale, Lock, Mail, AlertTriangle, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Responsible Disclosure Program | NexNet CyberLabs",
  description: "Vulnerability reporting program with scope, safe harbor, and coordinated disclosure guidelines for security researchers.",
};

const scope = [
  { asset: "*.nexnet.example", type: "Web Applications", priority: "High" },
  { asset: "portal.nexnet.example", type: "Customer Portal", priority: "High" },
  { asset: "academy.nexnet.example", type: "Training Platform", priority: "Medium" },
  { asset: "nexnet.example", type: "Corporate Website", priority: "Low" },
];

const outOfScope = [
  "Social engineering (phishing staff, physical intrusion)",
  "Denial of Service (DoS/DDoS) attacks",
  "Spam or abuse of support channels",
  "Third-party services (GitHub, AWS Console, Matomo hosting)",
  "Non-security-impacting issues (typos, HTTP headers without PoC)",
];

const safeHarbor = [
  "We will not pursue legal action against good-faith security research",
  "Avoid accessing customer data; use test accounts only",
  "Report vulnerabilities promptly and privately via security@nexnet.example",
  "Allow reasonable time (90 days) for remediation before public disclosure",
  "Do not extort, threaten, or demand payment",
];

export default function ResponsibleDisclosurePage() {
  return (
    <div className="min-h-screen">
      <ImageHero
        bgSrc="/images/globe-network.svg"
        title="Responsible Disclosure Program"
        subtitle="We welcome security researchers to report vulnerabilities responsibly. Clear scope, safe harbor provisions, and coordinated disclosure timelines."
        ctaPrimary={{ text: "Report Vulnerability", href: "mailto:security@nexnet.example" }}
        ctaSecondary={{ text: "View Security Policy", href: "/legal/security-policy" }}
      />

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-center">
              <ShieldAlert className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">24h</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Initial Response SLA</p>
            </div>
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-center">
              <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">90d</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Remediation Window</p>
            </div>
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-center">
              <FileCheck className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">42</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Disclosures Handled (2023-2025)</p>
            </div>
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-center">
              <Scale className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Safe Harbor Honored</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <Target className="w-8 h-8 text-blue-600" />
              In-Scope Assets
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We welcome reports on the following assets. Priority indicates remediation urgency and recognition eligibility.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {scope.map((s, i) => (
              <div key={i} className="p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold font-mono">{s.asset}</h3>
                  <span className={`px-2 py-1 text-xs rounded font-semibold ${
                    s.priority === 'High' ? 'bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200' :
                    s.priority === 'Medium' ? 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200' :
                    'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}>
                    {s.priority}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{s.type}</p>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              Out of Scope
            </h2>
            <div className="p-6 rounded-xl border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
              <ul className="space-y-3">
                {outOfScope.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-0.5">✗</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <Scale className="w-8 h-8 text-green-600" />
              Safe Harbor Provisions
            </h2>
            <div className="p-6 rounded-xl border-2 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We commit to the following safe harbor terms for researchers acting in good faith:
              </p>
              <ul className="space-y-3">
                {safeHarbor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <FileCheck className="w-8 h-8 text-blue-600" />
              Reporting Process
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800">
                <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
                <h3 className="font-semibold mb-2">Submit Report</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Email <a href="mailto:security@nexnet.example" className="text-blue-600 underline">security@nexnet.example</a> with:
                  vulnerability description, steps to reproduce, impact assessment, PoC if applicable.
                </p>
              </div>
              <div className="p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800">
                <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
                <h3 className="font-semibold mb-2">Acknowledgment</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  We respond within 24 hours (business days) with case ID, severity assessment, and estimated remediation timeline.
                </p>
              </div>
              <div className="p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800">
                <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                <h3 className="font-semibold mb-2">Coordinated Disclosure</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  After remediation, we coordinate public disclosure with researcher credit (if desired) and publish advisory.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <Lock className="w-8 h-8 text-purple-600" />
              Severity Classification
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg border-2 border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20">
                <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Critical</h4>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  RCE, SQL injection, authentication bypass, mass data exposure. Response: immediate.
                </p>
              </div>
              <div className="p-4 rounded-lg border-2 border-orange-300 dark:border-orange-700 bg-orange-50 dark:bg-orange-900/20">
                <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">High</h4>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  Privilege escalation, IDOR, XSS (stored), CSRF. Response: 7 days.
                </p>
              </div>
              <div className="p-4 rounded-lg border-2 border-yellow-300 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/20">
                <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">Medium</h4>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  XSS (reflected), open redirects, information disclosure. Response: 30 days.
                </p>
              </div>
              <div className="p-4 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Low</h4>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  Security headers, clickjacking, rate limiting. Response: 90 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-blue-900 to-gray-900">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Mail className="w-16 h-16 text-brand-teal mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Report a Vulnerability</h2>
          <p className="text-xl text-gray-300 mb-8">
            For critical vulnerabilities, contact us immediately at <a href="mailto:security@nexnet.example" className="text-brand-teal underline">security@nexnet.example</a>
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:security@nexnet.example" className="px-8 py-3 bg-brand-teal text-black font-semibold rounded-lg hover:bg-teal-400 transition-colors">
              Submit Report
            </a>
            <a href="/legal/security-policy" className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Security Policy
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
