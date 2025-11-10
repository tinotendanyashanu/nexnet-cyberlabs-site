import { Metadata } from "next";
import { ImageHero } from "@/components/ImageHero";
import { Cookie, Shield, Eye, Settings, ToggleLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | NexNet CyberLabs",
  description: "Cookie usage on NexNet CyberLabs domains with privacy-first analytics, essential cookies, and user preference management."
};

const cookieTypes = [
  {
    category: "Essential Cookies",
    icon: Shield,
    purpose: "Required for website functionality and security",
    examples: [
      { name: "session_token", duration: "Session", description: "Authentication state for customer portal" },
      { name: "csrf_token", duration: "Session", description: "Cross-site request forgery protection" },
      { name: "load_balancer", duration: "Session", description: "Ensures consistent server routing" },
    ],
    canDisable: false,
  },
  {
    category: "Analytics Cookies",
    icon: Eye,
    purpose: "Privacy-first usage analytics (IP anonymization enabled)",
    examples: [
      { name: "_pk_id", duration: "13 months", description: "Matomo visitor identifier (anonymized)" },
      { name: "_pk_ses", duration: "30 minutes", description: "Matomo session identifier" },
      { name: "_pk_ref", duration: "6 months", description: "Attribution source tracking" },
    ],
    canDisable: true,
  },
  {
    category: "Preference Cookies",
    icon: Settings,
    purpose: "Remember user preferences and consent choices",
    examples: [
      { name: "cookie_consent", duration: "12 months", description: "Stores cookie consent preferences" },
      { name: "locale_pref", duration: "12 months", description: "Language and region preference" },
      { name: "theme_pref", duration: "12 months", description: "Dark/light mode preference" },
    ],
    canDisable: true,
  },
];

export default function CookiePolicy() {
  return (
    <div className="min-h-screen">
      <ImageHero
        bgSrc="/images/globe-network.svg"
        title="Cookie Policy"
        subtitle="Transparent cookie usage with privacy-first analytics and granular consent management. We minimize tracking and respect your privacy."
        ctaPrimary={{ text: "Manage Cookie Preferences", href: "#manage" }}
        ctaSecondary={{ text: "Privacy Policy", href: "/privacy" }}
      />

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-center">
              <Cookie className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">3</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Cookie Categories</p>
            </div>
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-center">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">Privacy-First</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">IP Anonymization</p>
            </div>
            <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-center">
              <ToggleLeft className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-1">User Control</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Granular Consent</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl prose prose-slate dark:prose-invert">
          <p className="text-sm text-gray-600 dark:text-gray-400">Last updated: 09 November 2025</p>

          <h2 className="flex items-center gap-3 mt-12"><Cookie className="w-6 h-6 text-blue-600" /> What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device by websites you visit. They enable websites to remember your actions, preferences, and improve user experience. We use cookies for essential functionality, privacy-friendly analytics, and preference storage.
          </p>

          <h2 className="mt-12">Cookie Categories We Use</h2>
          <div className="not-prose space-y-8">
            {cookieTypes.map((type, i) => {
              const IconComponent = type.icon;
              return (
                <div key={i} className="p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-semibold">{type.category}</h3>
                    </div>
                    <span className={`px-3 py-1 rounded text-xs font-semibold ${
                      type.canDisable 
                        ? 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200'
                        : 'bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200'
                    }`}>
                      {type.canDisable ? 'Optional' : 'Required'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{type.purpose}</p>
                  <div className="space-y-3">
                    {type.examples.map((ex, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700">
                        <div className="flex items-start justify-between gap-4 mb-1">
                          <span className="font-mono text-sm font-semibold">{ex.name}</span>
                          <span className="text-xs text-gray-600 dark:text-gray-400">{ex.duration}</span>
                        </div>
                        <p className="text-xs text-gray-700 dark:text-gray-300">{ex.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <h2 className="mt-12">Third-Party Cookies</h2>
          <p>
            We do NOT use third-party advertising or tracking cookies. Our analytics platform (Matomo) is self-hosted, ensuring data stays within our control and complies with GDPR without requiring separate consent in many jurisdictions.
          </p>

          <h2 id="manage" className="flex items-center gap-3 mt-12"><ToggleLeft className="w-6 h-6 text-blue-600" /> Managing Cookie Preferences</h2>
          <p>
            You have several options to control cookie usage:
          </p>
          <div className="not-prose space-y-4">
            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <h3 className="font-semibold mb-2">1. Cookie Banner (This Website)</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Use the cookie consent banner (shown on first visit) to toggle optional cookie categories. Your preferences are stored for 12 months.
              </p>
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors">
                Update Cookie Preferences
              </button>
            </div>
            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <h3 className="font-semibold mb-2">2. Browser Settings</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Configure your browser to block or delete cookies:
              </p>
              <ul className="text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                <li>• <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li>• <strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                <li>• <strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li>• <strong>Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <h3 className="font-semibold mb-2">3. Do Not Track (DNT)</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                We honor the Do Not Track browser setting by disabling non-essential analytics cookies when DNT is enabled.
              </p>
            </div>
          </div>

          <h2 className="mt-12">Impact of Disabling Cookies</h2>
          <ul>
            <li><strong>Essential Cookies:</strong> Cannot be disabled without breaking core functionality (login, security, load balancing). Disabling may prevent portal access.</li>
            <li><strong>Analytics Cookies:</strong> Disabling prevents usage tracking but does not impact functionality. Helps us understand popular content and improve UX.</li>
            <li><strong>Preference Cookies:</strong> Disabling means your language, theme, and consent preferences won&apos;t be remembered across sessions.</li>
          </ul>

          <h2 className="mt-12">Data Retention</h2>
          <p>
            Cookie data is retained for the durations specified in each category (see tables above). Analytics data is aggregated and anonymized after 13 months. You can request deletion of your analytics profile via <a href="mailto:privacy@nexnet.example" className="text-blue-600 underline">privacy@nexnet.example</a>.
          </p>

          <h2 className="mt-12">International Transfers</h2>
          <p>
            Our self-hosted Matomo analytics infrastructure resides in EU data centers (Warsaw, Poland). No analytics data is transferred to third parties or non-EU jurisdictions.
          </p>

          <h2 className="mt-12">Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy to reflect changes in our practices or legal requirements. Material changes will be communicated via website notice. Continued use after changes constitutes acceptance.
          </p>

          <h2 className="mt-12">Contact</h2>
          <p>
            Questions about cookies or data processing? Contact our Data Protection Officer:<br />
            <a href="mailto:dpo@nexnet.example" className="text-blue-600 underline">dpo@nexnet.example</a>
          </p>
          <p className="mt-2">
            For general privacy inquiries:<br />
            <a href="mailto:privacy@nexnet.example" className="text-blue-600 underline">privacy@nexnet.example</a>
          </p>
        </div>
      </section>
    </div>
  );
}

