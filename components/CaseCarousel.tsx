"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { caseStudies } from "@/lib/site-data";

export function CaseCarousel() {
  const [index, setIndex] = useState(0);
  const active = caseStudies[index];

  function go(dir: number) {
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return caseStudies.length - 1;
      if (next >= caseStudies.length) return 0;
      return next;
    });
  }

  return (
    <section className="bg-white/5 border-y border-white/10 py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-brand-teal text-sm uppercase tracking-[0.2em]">Case Studies</p>
            <h2 className="text-3xl font-semibold">Measurable incident outcomes</h2>
            <p className="text-gray-300 mt-2 max-w-2xl">
              Confidentiality-protected summaries from recent engagements across regulated industries.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="h-12 w-12 rounded-full border border-white/20 hover:border-brand-teal transition-colors" onClick={() => go(-1)} aria-label="Previous case">
              &larr;
            </button>
            <button className="h-12 w-12 rounded-full border border-white/20 hover:border-brand-teal transition-colors" onClick={() => go(1)} aria-label="Next case">
              &rarr;
            </button>
          </div>
        </div>

        <div className="relative mt-12 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.article
              key={active.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="card"
            >
              <p className="text-sm text-brand-teal font-semibold">{active.sector}</p>
              <h3 className="text-2xl font-semibold mt-3">{active.title}</h3>
              <p className="text-gray-300 mt-4">{active.result}</p>
              <div className="flex gap-2 mt-6">
                {caseStudies.map((_, dotIndex) => (
                  <span
                    key={`dot-${dotIndex}`}
                    className={`h-2 w-2 rounded-full ${dotIndex === index ? "bg-brand-teal" : "bg-white/20"}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

