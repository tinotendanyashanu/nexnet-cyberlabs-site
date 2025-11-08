"use client";
import { useEffect, useState } from "react";

const KEY = "nexnet_cookie_consent_v1";

export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(KEY) : null;
    if (!stored) setOpen(true);
  }, []);

  if (!open) return null;
  return (
    <div className="fixed bottom-4 inset-x-0 px-4 z-50">
      <div className="mx-auto max-w-3xl bg-white/10 backdrop-blur border border-white/15 rounded-2xl p-4 flex flex-col gap-3 md:flex-row md:items-center md:gap-6 shadow-soft">
        <p className="text-sm text-gray-200 leading-relaxed">
          We use minimal, privacy-friendly analytics and essential cookies. Additional tracking will always be opt‑in.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            className="px-4 py-2 rounded-md bg-brand-teal text-black text-sm font-medium focus:outline-none focus-visible:ring ring-brand-teal/60"
            onClick={() => {
              window.localStorage.setItem(KEY, "accepted");
              setOpen(false);
            }}
          >Accept</button>
          <button
            className="px-4 py-2 rounded-md border border-white/20 text-sm text-gray-200 hover:border-white/40 focus:outline-none focus-visible:ring ring-brand-teal/60"
            onClick={() => {
              window.localStorage.setItem(KEY, "dismissed");
              setOpen(false);
            }}
          >Dismiss</button>
        </div>
      </div>
    </div>
  );
}
