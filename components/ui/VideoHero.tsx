"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface VideoHeroProps {
  srcMp4?: string;
  srcWebm?: string;
  poster: string;
  title: string;
  subtitle: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export default function VideoHero({
  srcMp4,
  srcWebm,
  poster,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
}: VideoHeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {srcMp4 || srcWebm ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={poster}
            className="w-full h-full object-cover"
          >
            {srcWebm && <source src={srcWebm} type="video/webm" />}
            {srcMp4 && <source src={srcMp4} type="video/mp4" />}
          </video>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${poster})` }}
          />
        )}
      </div>

      {/* Gradient Scrim */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 via-brand-navy/50 to-brand-navy z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30 z-10" />

      {/* Content */}
      <div className="relative z-20 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-gradient-white"
          >
            {title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className="btn-primary inline-flex items-center gap-2 group"
              >
                {primaryCTA.text}
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
            
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="btn-secondary inline-flex items-center gap-2"
              >
                {secondaryCTA.text}
              </Link>
            )}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-brand-teal rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
