import { ServicesGrid } from "@/components/ServicesGrid";

export const metadata = { title: "Services — NexNet CyberLabs" };

export default function ServicesPage() {
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-semibold">Services</h1>
      <p className="mt-4 text-gray-300 max-w-3xl">
        From incident response to governance and training, our services are designed to deliver
        measurable outcomes with disciplined, repeatable methods.
      </p>
      <div className="mt-10">
        <ServicesGrid detailed />
      </div>

      <div className="mt-16 space-y-12">
        <section id="ir" aria-labelledby="ir-title" className="card">
          <h2 id="ir-title" className="text-2xl font-semibold">Incident Response</h2>
          <p className="text-gray-300 mt-2">Triage, containment, forensics, recovery. Executive and technical reporting with measurable outcomes.</p>
          <ul className="list-disc list-inside text-gray-300 mt-3">
            <li>2h kickoff target; SLA options available</li>
            <li>Evidence handling & chain-of-custody</li>
            <li>Root cause analysis & hardening plan</li>
          </ul>
        </section>

        <section id="forensics" aria-labelledby="forensics-title" className="card">
          <h2 id="forensics-title" className="text-2xl font-semibold">Digital Forensics & Investigations</h2>
          <p className="text-gray-300 mt-2">Court-ready methods, artifacts, and SOPs. Timeline reconstruction, malware analysis, reporting.</p>
        </section>

        <section id="intel" aria-labelledby="intel-title" className="card">
          <h2 id="intel-title" className="text-2xl font-semibold">Threat Intelligence (OSINT & CTI)</h2>
          <p className="text-gray-300 mt-2">Collection plans, monitoring, and decision-ready notes aligned to your risk register.</p>
        </section>

        <section id="assess" aria-labelledby="assess-title" className="card">
          <h2 id="assess-title" className="text-2xl font-semibold">Security Assessments</h2>
          <p className="text-gray-300 mt-2">Pen tests, red/blue team exercises, and application security reviews with prioritized remediation.</p>
        </section>

        <section id="grc" aria-labelledby="grc-title" className="card">
          <h2 id="grc-title" className="text-2xl font-semibold">Governance, Risk & Compliance</h2>
          <p className="text-gray-300 mt-2">GDPR and ISO 27001 readiness, policies, audits, metrics, and program setup.</p>
        </section>

        <section id="training" aria-labelledby="training-title" className="card">
          <h2 id="training-title" className="text-2xl font-semibold">Security Training & Awareness</h2>
          <p className="text-gray-300 mt-2">Hands-on labs, exec briefings, and behavior-change campaigns tailored to your teams.</p>
        </section>
      </div>
    </div>
  );
}
