"use client";

import Image from "next/image";
import { photoGallery } from "@/lib/site-data";
import { motion, useReducedMotion } from "framer-motion";

export function Gallery() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {photoGallery.map((src, index) => (
        <motion.div
          key={src}
          initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduceMotion ? undefined : { delay: index * 0.05 }}
          className="relative h-48 rounded-2xl overflow-hidden border border-white/10"
        >
          <Image src={src} alt={`Academy highlight ${index + 1}`} fill className="object-cover" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </motion.div>
      ))}
    </div>
  );
}

