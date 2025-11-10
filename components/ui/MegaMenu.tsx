"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

interface MenuItem {
  label: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
  image?: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface MegaMenuProps {
  logo: string;
  sections: Record<string, MenuSection[]>;
  simpleLinks?: Array<{ label: string; href: string }>;
  ctaButton?: { label: string; href: string };
}

export default function MegaMenu({ logo, sections, simpleLinks = [], ctaButton }: MegaMenuProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const hasDropdown = (key: string) => sections[key] && sections[key].length > 0;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <nav className="container mx-auto px-6 py-4" aria-label="Global navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="NexNet CyberLabs" width={180} height={40} className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {Object.keys(sections).map((key) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors py-2"
                  aria-expanded={activeDropdown === key}
                  aria-haspopup="true"
                >
                  {key}
                  {hasDropdown(key) && (
                    <ChevronDownIcon
                      className={clsx(
                        "w-4 h-4 transition-transform",
                        activeDropdown === key && "rotate-180"
                      )}
                    />
                  )}
                </button>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {activeDropdown === key && hasDropdown(key) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-screen max-w-4xl"
                    >
                      <div className="glass-strong rounded-2xl p-8 shadow-2xl border border-white/20">
                        <div className="grid grid-cols-2 gap-8">
                          {sections[key].map((section, idx) => (
                            <div key={idx}>
                              <h3 className="text-sm font-semibold text-brand-teal mb-4 uppercase tracking-wide">
                                {section.title}
                              </h3>
                              <ul className="space-y-3">
                                {section.items.map((item, itemIdx) => (
                                  <li key={itemIdx}>
                                    <Link
                                      href={item.href}
                                      className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all"
                                    >
                                      {item.image && (
                                        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                          <Image
                                            src={item.image}
                                            alt={item.label}
                                            fill
                                            className="object-cover"
                                          />
                                        </div>
                                      )}
                                      {item.icon && (
                                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                                          {item.icon}
                                        </div>
                                      )}
                                      <div>
                                        <p className="font-medium text-white group-hover:text-brand-teal transition-colors">
                                          {item.label}
                                        </p>
                                        {item.description && (
                                          <p className="text-sm text-gray-400 mt-1">
                                            {item.description}
                                          </p>
                                        )}
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Simple Links */}
            {simpleLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* CTA Button */}
            {ctaButton && (
              <Link href={ctaButton.href} className="btn-primary">
                {ctaButton.label}
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="lg:hidden" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed inset-y-0 right-0 w-full max-w-sm glass-strong border-l border-white/20 overflow-y-auto">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <Image src={logo} alt="NexNet CyberLabs" width={150} height={32} className="h-8 w-auto" />
                  <button
                    type="button"
                    className="p-2 text-gray-300 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                {/* Navigation */}
                <div className="space-y-2">
                  {Object.keys(sections).map((key) => (
                    <div key={key} className="border-b border-white/10 pb-2">
                      {hasDropdown(key) ? (
                        <>
                          <button
                            onClick={() =>
                              setActiveMobileDropdown(
                                activeMobileDropdown === key ? null : key
                              )
                            }
                            className="flex items-center justify-between w-full py-3 text-white hover:text-brand-teal transition-colors"
                          >
                            <span className="font-medium">{key}</span>
                            <ChevronDownIcon
                              className={clsx(
                                "w-5 h-5 transition-transform",
                                activeMobileDropdown === key && "rotate-180"
                              )}
                            />
                          </button>
                          <AnimatePresence>
                            {activeMobileDropdown === key && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                {sections[key].map((section, idx) => (
                                  <div key={idx} className="pl-4 py-2">
                                    <p className="text-xs font-semibold text-brand-teal mb-2 uppercase">
                                      {section.title}
                                    </p>
                                    <ul className="space-y-2">
                                      {section.items.map((item, itemIdx) => (
                                        <li key={itemIdx}>
                                          <Link
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block py-2 text-gray-300 hover:text-white transition-colors"
                                          >
                                            {item.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={sections[key][0]?.items[0]?.href || "/"}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-3 text-white hover:text-brand-teal transition-colors"
                        >
                          {key}
                        </Link>
                      )}
                    </div>
                  ))}

                  {simpleLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3 text-white hover:text-brand-teal transition-colors border-b border-white/10"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* CTA Button */}
                {ctaButton && (
                  <Link
                    href={ctaButton.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="btn-primary w-full mt-6 text-center block"
                  >
                    {ctaButton.label}
                  </Link>
                )}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </header>
  );
}
