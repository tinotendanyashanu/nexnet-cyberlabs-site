"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface Pill {
  label: string;
  icon?: React.ReactNode;
}

interface PillListProps {
  pills: (string | Pill)[];
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function PillList({ pills, variant = "primary", className }: PillListProps) {
  const variants = {
    primary: "bg-brand-teal/10 border-brand-teal/30 text-brand-teal",
    secondary: "bg-white/5 border-white/20 text-gray-300",
    outline: "bg-transparent border-white/30 text-white hover:bg-white/5",
  };

  return (
    <div className={clsx("flex flex-wrap gap-3", className)}>
      {pills.map((pill, index) => {
        const label = typeof pill === "string" ? pill : pill.label;
        const icon = typeof pill === "object" ? pill.icon : null;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={clsx(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all",
              variants[variant]
            )}
          >
            {icon}
            {label}
          </motion.div>
        );
      })}
    </div>
  );
}
