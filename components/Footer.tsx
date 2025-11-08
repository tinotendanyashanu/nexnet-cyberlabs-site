import Link from "next/link";
export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="container py-10 grid md:grid-cols-3 gap-6 text-gray-300">
        <div>
          <div className="font-semibold text-white">NexNet CyberLabs</div>
          <p className="mt-2 text-sm">Africa-born, enterprise-ready cybersecurity. Investigations, IR, training, and compliance.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Link href="/services">Services</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/academy">Academy</Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/insights">Insights</Link>
            <Link href="/company">Company</Link>
            <Link href="/trust">Trust</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="text-sm">
          <div className="flex gap-4">
            <Link href="/(legal)/privacy">Privacy</Link>
            <Link href="/(legal)/terms">Terms</Link>
            <Link href="/(legal)/cookies">Cookies</Link>
          </div>
          <p className="mt-4">© {new Date().getFullYear()} NexNet CyberLabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
