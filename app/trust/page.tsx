export const metadata = { title: "Trust — NexNet CyberLabs" };

export default function TrustPage() {
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-semibold">Trust & Compliance</h1>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="card">
          <h3 className="text-xl font-semibold">Security</h3>
          <ul className="list-disc list-inside text-gray-300 mt-3">
            <li>HSTS, strict CSP, and modern security headers</li>
            <li>Evidence handling SOPs & chain-of-custody</li>
            <li>Responsible disclosure: security@nexnet.example (PGP available)</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold">Privacy & Law</h3>
          <ul className="list-disc list-inside text-gray-300 mt-3">
            <li>GDPR-ready for EU clients</li>
            <li>Zimbabwe Cyber & Data Protection Act alignment</li>
            <li>Data processing addendum on request</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
