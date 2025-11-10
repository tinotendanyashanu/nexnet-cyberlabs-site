"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { searchableNav } from "@/lib/navigation";
import { Search } from "lucide-react";

export function SiteSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [] as typeof searchableNav;
    return searchableNav
      .map((item) => ({ ...item, score: score(item.label, q) + score(item.description ?? "", q) }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);
  }, [query]);

  return (
    <div className="relative w-64">
      <label htmlFor="site-search" className="sr-only">Search</label>
      <div className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
        <Search className="w-4 h-4" />
      </div>
      <input
        id="site-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search pages..."
        className="w-full rounded-md bg-white/5 border border-white/10 pl-8 pr-3 py-1.5 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-teal"
      />
      {query && results.length > 0 && (
        <div className="absolute z-50 mt-2 w-full rounded-md border border-white/10 bg-brand-navy shadow-xl overflow-hidden">
          <ul className="max-h-80 overflow-auto">
            {results.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="block px-3 py-2 text-sm hover:bg-white/10 focus:bg-white/10 focus:outline-none"
                  onClick={() => setQuery("")}
                >
                  <div className="text-white">{r.label}</div>
                  {r.description && <div className="text-xs text-gray-400">{r.description}</div>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// Simple scoring: presence and prefix boost
function score(text: string, q: string): number {
  const t = text.toLowerCase();
  if (!q) return 0;
  if (t.startsWith(q)) return 3;
  if (t.includes(q)) return 1;
  return 0;
}
