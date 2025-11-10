import { Metadata } from "next";
import { ImageHero } from "@/components/ImageHero";
import { FileText, Scale, ShieldAlert, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use | NexNet CyberLabs",
  description: "Terms governing use of NexNet CyberLabs websites, services, and customer portals with liability, confidentiality, and dispute resolution provisions."
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <ImageHero
        bgSrc="/images/globe-network.svg"
        title="Terms of Use"
        subtitle="Legal terms governing your use of NexNet CyberLabs websites, services, and portals. Please review carefully before accessing our services."
        ctaPrimary={{ text: "Contact Legal", href: "mailto:legal@nexnet.example" }}
        ctaSecondary={{ text: "Privacy Policy", href: "/privacy" }}
      />

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-center">
              <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-sm font-bold text-blue-600 mb-1">Effective Date</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">09 November 2025</p>
            </div>
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-center">
              <Scale className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-sm font-bold text-blue-600 mb-1">Governing Law</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Zimbabwe / EU</p>
            </div>
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-center">
              <ShieldAlert className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-sm font-bold text-blue-600 mb-1">Binding Agreement</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Upon Access/Use</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl prose prose-slate dark:prose-invert">
          <h2 className="flex items-center gap-3"><FileText className="w-6 h-6 text-blue-600" /> 1. Acceptance of Terms</h2>
          <p>
            By accessing nexnet.example, any subdomains, or using our cybersecurity services (collectively, the &quot;Services&quot;), you agree to be bound by these Terms of Use (&quot;Terms&quot;). If you represent an organization, you confirm you have authority to bind that entity to these Terms.
          </p>
          <p>
            If you do not agree to these Terms, you must immediately cease use of the Services.
          </p>

          <h2 className="flex items-center gap-3 mt-12"><Scale className="w-6 h-6 text-blue-600" /> 2. Scope of Services</h2>
          <p>
            NexNet CyberLabs provides:
          </p>
          <ul>
            <li><strong>Cybersecurity Services:</strong> Digital forensics, incident response, threat intelligence, security assessments, GRC consulting, security awareness training.</li>
            <li><strong>Training & Academy:</strong> Certification programs, internships, workshops.</li>
            <li><strong>Informational Content:</strong> News, research reports, threat briefs, case studies (subject to separate licensing where applicable).</li>
          </ul>
          <p>
            Specific service terms are governed by signed Statements of Work (SOW), Master Services Agreements (MSA), or Training Enrollment Agreements.
          </p>

          <h2 className="mt-12">3. Use of Content</h2>
          <p>
            All content on this website (text, graphics, logos, reports, code samples, training materials) is owned by NexNet CyberLabs or licensed to us and is protected by copyright, trademark, and other intellectual property laws.
          </p>
          <p>
            <strong>You may:</strong>
          </p>
          <ul>
            <li>View and download content for personal, non-commercial informational purposes.</li>
            <li>Share links to publicly accessible pages.</li>
          </ul>
          <p>
            <strong>You may NOT:</strong>
          </p>
          <ul>
            <li>Redistribute, republish, or repackage content without written permission.</li>
            <li>Reverse engineer, decompile, or extract source code from tools or platforms.</li>
            <li>Remove copyright notices, watermarks, or attribution.</li>
            <li>Use content for commercial purposes (e.g., reselling reports, training materials).</li>
          </ul>

          <h2 className="flex items-center gap-3 mt-12"><ShieldAlert className="w-6 h-6 text-blue-600" /> 4. Confidentiality & Security</h2>
          <p>
            <strong>Client Data:</strong> All client data shared through secure portals, incident forms, or during engagements is governed by executed Non-Disclosure Agreements (NDAs) and Data Protection Agreements (DPAs). Unauthorized disclosure is prohibited and subject to contractual remedies.
          </p>
          <p>
            <strong>Your Obligations:</strong>
          </p>
          <ul>
            <li>Protect login credentials to customer portals and training platforms.</li>
            <li>Do not share accounts or access tokens.</li>
            <li>Notify us immediately of suspected account compromise: <a href="mailto:security@nexnet.example" className="text-blue-600 underline">security@nexnet.example</a></li>
          </ul>

          <h2 className="mt-12">5. Prohibited Activities</h2>
          <p>
            You agree NOT to:
          </p>
          <ul>
            <li>Attempt unauthorized access to systems, networks, or data (except under authorized penetration testing agreements).</li>
            <li>Introduce malware, viruses, or disruptive code.</li>
            <li>Conduct denial-of-service (DoS/DDoS) attacks.</li>
            <li>Scrape, spider, or harvest data using automated tools.</li>
            <li>Impersonate NexNet CyberLabs staff or misrepresent affiliation.</li>
            <li>Use Services for illegal activities (fraud, money laundering, intellectual property theft).</li>
          </ul>
          <p>
            Violations may result in account termination, service suspension, and legal action.
          </p>

          <h2 className="flex items-center gap-3 mt-12"><AlertCircle className="w-6 h-6 text-blue-600" /> 6. Disclaimers & Limitations of Liability</h2>
          <p>
            <strong>Services &quot;As Is&quot;:</strong> Services are provided &quot;as is&quot; without warranties of any kind, express or implied, including merchantability, fitness for particular purpose, or non-infringement.
          </p>
          <p>
            <strong>No Guarantee of Security:</strong> While we employ industry-standard security measures, no system is 100% secure. We do not guarantee prevention of all security incidents.
          </p>
          <p>
            <strong>Limitation of Liability:</strong> To the fullest extent permitted by law, NexNet CyberLabs&apos; total liability for any claims arising from these Terms or the Services is limited to the fees paid by you in the 12 months preceding the claim.
          </p>
          <p>
            <strong>Excluded Damages:</strong> We are not liable for indirect, incidental, consequential, punitive, or special damages (including lost profits, lost data, business interruption) even if advised of the possibility.
          </p>
          <p>
            <strong>Exceptions:</strong> Nothing in these Terms excludes liability for death or personal injury caused by negligence, fraud, or liabilities that cannot be excluded by law.
          </p>

          <h2 className="mt-12">7. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless NexNet CyberLabs, its officers, employees, and contractors from any claims, damages, losses, or expenses (including legal fees) arising from:
          </p>
          <ul>
            <li>Your violation of these Terms.</li>
            <li>Your misuse of Services or content.</li>
            <li>Your violation of any third-party rights (including intellectual property).</li>
            <li>Unauthorized access or data breaches caused by your negligence.</li>
          </ul>

          <h2 className="mt-12">8. Service Modifications & Availability</h2>
          <p>
            We reserve the right to:
          </p>
          <ul>
            <li>Modify, suspend, or discontinue Services (or portions thereof) at any time.</li>
            <li>Update these Terms with 30 days&apos; notice for material changes (continued use constitutes acceptance).</li>
            <li>Perform maintenance causing temporary unavailability (scheduled maintenance communicated in advance).</li>
          </ul>
          <p>
            We are not liable for service interruptions due to force majeure events (natural disasters, cyberattacks, government actions, infrastructure failures).
          </p>

          <h2 className="flex items-center gap-3 mt-12"><Scale className="w-6 h-6 text-blue-600" /> 9. Governing Law & Dispute Resolution</h2>
          <p>
            <strong>Governing Law:</strong> These Terms are governed by the laws of Zimbabwe and, where applicable, the European Union (for EU-based clients).
          </p>
          <p>
            <strong>Dispute Resolution:</strong>
          </p>
          <ul>
            <li><strong>Negotiation:</strong> Parties will attempt good-faith negotiation for 30 days.</li>
            <li><strong>Mediation:</strong> If unresolved, disputes will be mediated by a mutually agreed neutral party.</li>
            <li><strong>Arbitration:</strong> Unresolved disputes after mediation will be settled by binding arbitration under UNCITRAL rules in Harare, Zimbabwe (or alternative venue by mutual agreement).</li>
          </ul>
          <p>
            <strong>Class Action Waiver:</strong> You agree to resolve disputes individually and waive participation in class actions or collective proceedings.
          </p>

          <h2 className="mt-12">10. Termination</h2>
          <p>
            We may terminate or suspend your access to Services immediately without notice if you:
          </p>
          <ul>
            <li>Breach these Terms.</li>
            <li>Engage in fraudulent or illegal activity.</li>
            <li>Pose a security risk to our systems or other users.</li>
          </ul>
          <p>
            Upon termination, all licenses granted to you under these Terms immediately cease. Provisions related to confidentiality, liability limitations, and dispute resolution survive termination.
          </p>

          <h2 className="mt-12">11. Severability</h2>
          <p>
            If any provision of these Terms is found unenforceable or invalid, that provision will be modified to reflect the parties&apos; intent or severed, and the remaining provisions will remain in full effect.
          </p>

          <h2 className="mt-12">12. Entire Agreement</h2>
          <p>
            These Terms, together with referenced policies (Privacy Policy, Cookie Policy, DPA) and executed service agreements (SOW, MSA), constitute the entire agreement between you and NexNet CyberLabs regarding use of Services.
          </p>

          <h2 className="mt-12">13. Contact & Legal Notices</h2>
          <p>
            <strong>Legal Department:</strong> <a href="mailto:legal@nexnet.example" className="text-blue-600 underline">legal@nexnet.example</a>
          </p>
          <p>
            <strong>Mailing Address:</strong><br />
            NexNet CyberLabs<br />
            Legal Department<br />
            [Address Line 1]<br />
            Harare, Zimbabwe
          </p>
          <p>
            All legal notices must be sent via email with &quot;LEGAL NOTICE&quot; in the subject line and will be deemed received within 2 business days.
          </p>
        </div>
      </section>
    </div>
  );
}

