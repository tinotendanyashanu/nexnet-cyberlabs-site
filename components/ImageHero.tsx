"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface ImageHeroProps {
  title: string;
  subtitle: string;
  ctaPrimary: { href: string; text: string };
  ctaSecondary?: { href: string; text: string };
  bgSrc?: string;
}

export function ImageHero({ title, subtitle, ctaPrimary, ctaSecondary, bgSrc }: ImageHeroProps) {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {bgSrc && (
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            <Image src={bgSrc} alt="Background: Cybersecurity theme" fill className="object-cover opacity-30" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/70 via-brand-navy/85 to-brand-navy" />
          </div>
        </div>
      )}

      <div className="container relative z-10 py-28">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduceMotion ? undefined : { duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg">
            {title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl drop-shadow-md">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={ctaPrimary.href}
              className="rounded-md px-6 py-3.5 bg-brand-teal font-semibold text-black hover:bg-brand-teal/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus-visible:ring-2 ring-brand-teal/60"
            >
              {ctaPrimary.text}
            </Link>
            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className="rounded-md px-6 py-3.5 border-2 border-white/30 hover:border-white/50 hover:bg-white/10 backdrop-blur-sm transition-all font-semibold shadow-lg focus:outline-none focus-visible:ring-2 ring-brand-teal/60"
              >
                {ctaSecondary.text}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

