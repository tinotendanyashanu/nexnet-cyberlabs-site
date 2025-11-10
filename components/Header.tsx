"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/academy", label: "Academy" },
  { href: "/insights", label: "Insights" },
  { href: "/trust", label: "Trust" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll for enhanced blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-brand-navy/80 backdrop-blur-2xl border-b border-white/10 shadow-lg"
            : "bg-brand-navy/60 backdrop-blur-xl border-b border-white/5"
        )}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between h-11">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 -ml-2 px-2 py-1 rounded-lg hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 ring-brand-teal/50"
            >
              <Image
                src="/logo.svg"
                alt="NexNet CyberLabs"
                width={24}
                height={24}
                priority
                className="w-6 h-6"
              />
              <span className="text-[15px] font-medium hidden sm:inline">
                NexNet <span className="text-brand-teal">CyberLabs</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center flex-1 gap-8" aria-label="Primary Navigation">
              {navigation.map((item) => {
                const active = pathname === item.href || pathname?.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={clsx(
                      "text-[13px] font-normal transition-all relative py-1",
                      active ? "text-white" : "text-gray-300 hover:text-white"
                    )}
                  >
                    {item.label}
                    {active && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-[10px] left-0 right-0 h-[2px] bg-brand-teal rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Search Icon (Desktop) */}
              <button
                className="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg hover:bg-white/5 transition-colors text-gray-300 hover:text-white"
                aria-label="Search"
              >
                <MagnifyingGlassIcon className="w-[18px] h-[18px]" />
              </button>

              {/* CTA Button (Desktop) */}
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center px-3 py-1.5 text-[13px] font-medium bg-brand-teal hover:bg-brand-teal/90 text-white rounded-full transition-all hover:shadow-lg hover:shadow-brand-teal/20"
              >
                Get Started
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden flex items-center justify-center w-8 h-8 rounded-lg hover:bg-white/5 transition-colors text-gray-200 hover:text-white"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? (
                  <XMarkIcon className="w-5 h-5" />
                ) : (
                  <Bars3Icon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-[48px] left-0 right-0 z-50 lg:hidden max-h-[calc(100vh-48px)] overflow-y-auto"
            >
              <div className="bg-brand-navy/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
                <div className="max-w-[1200px] mx-auto px-6 py-6">
                  {/* Search Bar */}
                  <div className="mb-6">
                    <div className="relative">
                      <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="search"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-teal focus:bg-white/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* Navigation Links */}
                  <nav className="space-y-1" aria-label="Mobile Navigation">
                    {navigation.map((item) => {
                      const active = pathname === item.href || pathname?.startsWith(item.href + "/");
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          aria-current={active ? "page" : undefined}
                          className={clsx(
                            "block px-4 py-3 rounded-xl text-[15px] font-medium transition-all",
                            active
                              ? "bg-brand-teal text-white"
                              : "text-gray-300 hover:bg-white/5 hover:text-white active:bg-white/10"
                          )}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </nav>

                  {/* Mobile CTA */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <Link
                      href="/contact"
                      onClick={() => setOpen(false)}
                      className="block w-full text-center px-4 py-3 bg-brand-teal hover:bg-brand-teal/90 text-white rounded-xl font-medium text-[15px] transition-all active:scale-95"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-11" />
    </>
  );
}
