import Link from "next/link";

const quickLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/cookies", label: "Cookie Policy" },
  { href: "/disclosure", label: "Disclosure" },
  { href: "https://www.linkedin.com/company/nexnet-cyberlabs/jobs/", label: "Careers", external: true }
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-brand-navy">
      <div className="container py-10 grid gap-8 md:grid-cols-4 text-sm text-gray-300">
        <div>
          <div className="font-semibold text-white">NexNet CyberLabs</div>
          <p className="mt-3">
            Investigations-first cybersecurity lab serving Africa and the EU with IR, DFIR, intelligence, and academy programs.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3 text-base">Solutions</h3>
          <ul className="space-y-2">
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/industries">Industries</Link></li>
            <li><Link href="/trust">Trust Center</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3 text-base">Resources</h3>
          <ul className="space-y-2">
            <li><Link href="/insights">Insights</Link></li>
            <li><Link href="/academy">Academy</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3 text-base">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) =>
              link.external ? (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} NexNet CyberLabs. All rights reserved.
      </div>
    </footer>
  );
}

