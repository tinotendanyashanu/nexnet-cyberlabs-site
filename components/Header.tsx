"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/academy", label: "Academy" },
  { href: "/insights", label: "Insights" },
  { href: "/company", label: "Company" },
  { href: "/trust", label: "Trust" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close on escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Focus trap when menu open (simple)
  useEffect(() => {
    if (open && menuRef.current) {
      const focusable = menuRef.current.querySelectorAll<HTMLElement>("a, button");
      focusable[0]?.focus();
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-brand-navy/80 supports-[backdrop-filter]:bg-brand-navy/60 border-b border-white/10">
      <div className="container h-16 flex items-center justify-between" aria-label="Primary Navigation">
        <Link href="/" className="font-semibold flex items-center gap-2 focus:outline-none focus-visible:ring ring-brand-teal/70 rounded-md">
          {/* Using next/image for optimized logo delivery */}
          <img src="/logo.svg" alt="NexNet CyberLabs" className="h-6 w-6" />
          <span className="hidden sm:inline">NexNet CyberLabs</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map(i => {
            const active = pathname === i.href;
            return (
              <Link
                key={i.href}
                href={i.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm transition-colors ${active ? "text-white" : "text-gray-300 hover:text-white"}`}
              >
                {i.label}
              </Link>
            );
          })}
        </nav>
  <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-white/15 text-gray-200 hover:text-white hover:border-white/40 focus:outline-none focus-visible:ring ring-brand-teal/60"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(v => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10" ref={menuRef}>
          <div className="container py-4 flex flex-col gap-2">
            {nav.map(i => {
              const active = pathname === i.href;
              return (
                <Link
                  key={i.href}
                  href={i.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`px-2 py-2 rounded-md text-sm transition-colors ${active ? "bg-brand-teal text-black" : "text-gray-300 hover:bg-white/10"}`}
                >
                  {i.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
