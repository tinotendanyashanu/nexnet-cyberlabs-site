"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface TimelineItem {
  phase: string;
  title: string;
  description: string;
  duration?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export default function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={clsx("relative", className)}>
      {/* Vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-teal via-brand-teal/50 to-transparent" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-20"
          >
            {/* Circle marker */}
            <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-brand-teal shadow-glow" />
            
            {/* Content */}
            <div className="glass-card">
              <div className="flex items-start justify-between mb-2">
                <span className="text-sm font-semibold text-brand-teal uppercase tracking-wide">
                  {item.phase}
                </span>
                {item.duration && (
                  <span className="text-sm text-gray-500">{item.duration}</span>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
