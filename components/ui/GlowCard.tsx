"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function GlowCard({ 
  children, 
  className, 
  hover = true,
  glow = true 
}: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5 } : {}}
      className={clsx(
        "relative rounded-2xl p-8 transition-all duration-300",
        "bg-white/5 backdrop-blur-sm border border-white/10",
        hover && "hover:bg-white/10 hover:border-white/20",
        glow && "hover:shadow-glow",
        className
      )}
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-teal to-transparent opacity-50" />
      
      {children}
    </motion.div>
  );
}
