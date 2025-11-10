"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { servicesNav, industriesNav, insightsNav, type NavLink } from "@/lib/navigation";

// (Reserved for future extension: if individual mega menus need distinct props)
// interface MegaMenuProps { label: string; items: NavLink[] }

function Panel({ items, onClose }: { items: NavLink[]; onClose: () => void }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {items.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className="group block rounded-lg p-4 bg-white/5 hover:bg-white/10 border border-white/10 focus:outline-none focus-visible:ring ring-brand-teal/60 transition"
          onClick={onClose}
        >
          <div className="font-semibold text-white mb-1 group-hover:text-brand-teal">{item.label}</div>
          {item.description && <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>}
        </Link>
      ))}
    </div>
  );
}

export function MegaMenus() {
  const [open, setOpen] = useState<string | null>(null);
  const [lastTrigger, setLastTrigger] = useState<HTMLButtonElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setOpen(null);
    }
    window.addEventListener("mousedown", handler);
    return () => window.removeEventListener("mousedown", handler);
  }, []);

  // ESC support and focus return
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(null);
        lastTrigger?.focus();
      }
      // Focus trap: Tab/Shift+Tab loops within panel
      if (open && panelRef.current && (e.key === "Tab")) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>("a,button");
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, lastTrigger]);

  const toggle = (key: string, btn?: HTMLButtonElement) => {
    setOpen(o => (o === key ? null : key));
    if (btn) setLastTrigger(btn);
  };

  return (
    <div ref={containerRef} className="hidden xl:flex items-stretch gap-2 relative ml-8" aria-label="Mega menus">
      <div className="flex items-center gap-2">
        <button
          onClick={e => toggle("services", e.currentTarget)}
          className={`px-3 py-2 text-sm rounded-md font-medium transition-colors ${open === "services" ? "bg-white/10 text-white" : "text-gray-300 hover:text-white"}`}
          aria-haspopup="true"
          aria-controls="megamenu-services"
          type="button"
        >
          Services
        </button>
        <button
          onClick={e => toggle("industries", e.currentTarget)}
          className={`px-3 py-2 text-sm rounded-md font-medium transition-colors ${open === "industries" ? "bg-white/10 text-white" : "text-gray-300 hover:text-white"}`}
          aria-haspopup="true"
          aria-controls="megamenu-industries"
          type="button"
        >
          Industries
        </button>
        <button
          onClick={e => toggle("insights", e.currentTarget)}
          className={`px-3 py-2 text-sm rounded-md font-medium transition-colors ${open === "insights" ? "bg-white/10 text-white" : "text-gray-300 hover:text-white"}`}
          aria-haspopup="true"
          aria-controls="megamenu-insights"
          type="button"
        >
          Insights
        </button>
      </div>
      {open && (
        <div
          ref={panelRef}
          className="absolute top-full left-0 w-[900px] max-w-[90vw] mt-2 rounded-xl border border-white/10 bg-brand-navy/95 backdrop-blur-xl shadow-2xl overflow-hidden"
          role="dialog"
          aria-label={`${open} menu`}
          id={open === "services" ? "megamenu-services" : open === "industries" ? "megamenu-industries" : "megamenu-insights"}
        >
          {open === "services" && <Panel items={servicesNav} onClose={() => setOpen(null)} />}
          {open === "industries" && <Panel items={industriesNav} onClose={() => setOpen(null)} />}
          {open === "insights" && <Panel items={insightsNav} onClose={() => setOpen(null)} />}
        </div>
      )}
    </div>
  );
}
