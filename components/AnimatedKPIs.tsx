"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { heroStats } from "@/lib/site-data";

const formatter = new Intl.NumberFormat("en-US");

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1500;
          const steps = 60;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="text-3xl font-semibold text-white">
      {formatter.format(count)}
      {suffix}
    </div>
  );
}

export function AnimatedKPIs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-2 md:grid-cols-5 gap-6 text-gray-300"
    >
      {heroStats.map((stat) => (
        <div key={stat.label}>
          <div className="text-3xl font-semibold text-white flex items-baseline gap-1">
            {stat.prefix && <span>{stat.prefix}</span>}
            <AnimatedNumber target={stat.value} suffix="" />
            {stat.suffix && <span>{stat.suffix}</span>}
          </div>
          <p className="mt-1 text-sm">{stat.label}</p>
        </div>
      ))}
    </motion.div>
  );
}

