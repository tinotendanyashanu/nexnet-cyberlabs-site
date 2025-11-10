"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { industries } from "@/lib/site-data";

export function IndustryTabs() {
  const [activeKey, setActiveKey] = useState(industries[0].key);
  const active = industries.find((item) => item.key === activeKey)!;
  const reduceMotion = useReducedMotion();

  return (
    <section className="mt-12">
      <div className="flex flex-wrap gap-3">
        {industries.map((industry) => (
          <button
            key={industry.key}
            className={`px-4 py-2 rounded-full border text-sm transition-all ${
              activeKey === industry.key
                ? "border-brand-teal bg-brand-teal/20 text-brand-teal"
                : "border-white/15 text-gray-300 hover:border-brand-teal/60"
            }`}
            onClick={() => setActiveKey(industry.key)}
          >
            {industry.name}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-10 items-center">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduceMotion ? undefined : { duration: 0.6 }}
          className="card"
        >
          <p className="text-brand-teal text-sm font-semibold uppercase tracking-[0.2em]">{active.name}</p>
          <h3 className="text-2xl font-semibold mt-3">{active.synopsis}</h3>
          <p className="text-sm text-gray-400 mt-4">Compliance focus</p>
          <ul className="flex flex-wrap gap-2 mt-2">
            {active.controls.map((control) => (
              <li key={control} className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/90">
                {control}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-400 mt-6">Critical needs</p>
          <ul className="mt-2 list-disc list-inside text-gray-300 space-y-1">
            {active.needs.map((need) => (
              <li key={need}>{need}</li>
            ))}
          </ul>
        </motion.div>
        <div className="relative">
          <Image
            src={active.image}
            alt={`Industry: ${active.name}`}
            width={900}
            height={600}
            className="w-full h-80 object-cover rounded-2xl border border-white/10"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

