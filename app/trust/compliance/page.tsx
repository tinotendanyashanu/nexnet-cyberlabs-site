import { Metadata } from "next";
import { ImageHero } from "@/components/ImageHero";
import { CheckCircle2, ClipboardList, FileSpreadsheet, Globe, Building2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Compliance Mappings & Regulatory Alignment | NexNet CyberLabs",
  description: "Regulatory adherence matrices and framework mappings across ISO 27001, NIST CSF, SOC 2, PCI DSS, GDPR, POPIA, and sector regulations for African markets.",
};

const frameworks = [
  { name: "ISO 27001:2022", areas: ["ISMS Governance", "Risk Management", "Annex A Controls"], coverage: 0.92 },
  { name: "NIST CSF 2.0", areas: ["Identify", "Protect", "Detect", "Respond", "Recover"], coverage: 0.88 },
  { name: "SOC 2 (TSC)", areas: ["Security", "Availability", "Confidentiality"], coverage: 0.83 },
  { name: "PCI DSS v4.0", areas: ["Tokenization", "Network Segmentation", "Vuln Mgmt"], coverage: 0.76 },
  { name: "GDPR", areas: ["Lawful Basis", "DPIA", "DPO Oversight"], coverage: 0.81 },
  { name: "POPIA (SA)", areas: ["Conditions for Processing", "Cross-Border", "Security Safeguards"], coverage: 0.84 },
];

const regulators = [
  { region: "Zimbabwe", agencies: ["POTRAZ", "RBZ"], topics: ["Cyber & Data Protection Act", "Banking Directive on Cybersecurity"], alignment: "High" },
  { region: "South Africa", agencies: ["Information Regulator (POPIA)", "FSCA"], topics: ["POPIA Compliance", "Financial Sector Cyber Framework"], alignment: "High" },
  { region: "Kenya", agencies: ["ODPC", "CBK"], topics: ["Data Protection Act", "Cybersecurity Guidelines for Banks"], alignment: "Medium" },
  { region: "Botswana", agencies: ["BOCRA"], topics: ["Data Protection Act (2018)"], alignment: "Medium" },
];

const matrix = [
  { control: "Asset Inventory & Classification", refs: ["ISO A.5.9", "NIST ID.AM", "SOC2 CC1.1"], evidence: ["CMDB Export", "Tagging Policy"] },
  { control: "Access Control & PAM", refs: ["ISO A.5.15", "NIST PR.AC", "SOC2 CC6.1"], evidence: ["PAM Config", "JML Workflow", "Access Review Log"] },
  { control: "Vulnerability Management", refs: ["ISO A.5.37", "NIST PR.IP", "SOC2 CC7.1"], evidence: ["Scan Results", "Patch Dashboard", "Exception Register"] },
  { control: "Incident Response", refs: ["ISO A.5.29", "NIST RS.IM", "SOC2 CC7.2"], evidence: ["IR Playbooks", "AAR Template", "Breach SOP"] },
  { control: "Backup & Recovery", refs: ["ISO A.8.13", "NIST PR.IP-4", "PCI 12.10.1"], evidence: ["Backup Test Report", "RTO/RPO Matrix"] },
  { control: "Supplier Risk", refs: ["ISO A.5.19", "NIST ID.SC", "SOC2 CC1.3"], evidence: ["Vendor Register", "Security Questionnaire", "Contract Clauses"] },
];

export default function CompliancePage() {
  const widthClass = (pct: number) => {
    const p = Math.round(pct * 100);
    if (p >= 95) return "w-full";
    if (p >= 90) return "w-11/12";
    if (p >= 85) return "w-10/12";
    if (p >= 80) return "w-9/12";
    if (p >= 75) return "w-3/4";
    if (p >= 66) return "w-8/12";
    if (p >= 50) return "w-1/2";
    if (p >= 33) return "w-1/3";
    if (p >= 25) return "w-1/4";
    return "w-1/5";
  };
  return (
    <div className="min-h-screen">
      <ImageHero
        bgSrc="/images/globe-network.svg"
        title="Regulatory Compliance & Framework Mapping"
        subtitle="Clear alignment to international standards and African regulatory requirements with evidence-backed controls and matrices."
        ctaPrimary={{ text: "Request Mapping Pack", href: "/contact" }}
        ctaSecondary={{ text: "View Certifications", href: "/trust/certifications" }}
      />

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-center">
              <ShieldCheck className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">6</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Frameworks Mapped</p>
            </div>
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-center">
              <ClipboardList className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">30+</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Controls in Matrix</p>
            </div>
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-center">
              <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">4</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Regulatory Regions</p>
            </div>
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-center">
              <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">High</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Regulatory Alignment</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold mb-6">Framework Coverage</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {frameworks.map(fw => (
              <div key={fw.name} className="p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800">
                <h3 className="text-xl font-semibold mb-2">{fw.name}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{fw.areas.join(", ")}</p>
                <div className="w-full h-3 rounded bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <div className={`h-3 bg-blue-600 ${widthClass(fw.coverage)}`} />
                </div>
                <p className="text-xs text-gray-500 mt-2">Estimated coverage: {Math.round(fw.coverage*100)}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold mb-6">Control Matrix (Excerpt)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {matrix.map(row => (
              <div key={row.control} className="p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{row.control}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">Refs: {row.refs.join(", ")}</p>
                  </div>
                  <FileSpreadsheet className="w-6 h-6 text-blue-600" />
                </div>
                <ul className="mt-3 space-y-2 text-sm">
                  {row.evidence.map((ev,i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">•</span><span className="text-gray-700 dark:text-gray-300">{ev}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold mb-6">Regulatory Alignment (Africa)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {regulators.map(reg => (
              <div key={reg.region} className="p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{reg.region}</h3>
                  <span className="px-2 py-1 text-xs rounded bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200">{reg.alignment} Alignment</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">Agencies: {reg.agencies.join(", ")}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">Key Topics: {reg.topics.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-blue-900 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Regulator-Friendly Mapping Pack?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">We provide control matrices, data flows, risk registers, and policy crosswalks tailored to your regulator or auditor.</p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-teal text-black font-semibold rounded-lg hover:bg-teal-400 transition-colors">
            <CheckCircle2 className="w-5 h-5" /> Request Mapping Pack
          </a>
        </div>
      </section>
    </div>
  );
}
