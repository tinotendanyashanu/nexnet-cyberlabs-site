"use client";

import { FormEvent, useState } from "react";
import { newsletterBenefits } from "@/lib/site-data";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const valid = email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!valid) return;
    setSubmitted(true);
  }

  return (
    <section className="card mt-10">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <p className="text-brand-teal text-sm font-semibold uppercase tracking-[0.2em]">Newsletter</p>
          <h3 className="text-2xl font-semibold mt-2">Subscribe to NexNet Insights</h3>
          <ul className="mt-4 space-y-2 text-gray-300">
            {newsletterBenefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-teal" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={onSubmit} className="space-y-3">
          <label htmlFor="newsletter-email" className="text-sm font-medium text-gray-200">
            Work email
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="you@company.com"
            className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white focus:border-brand-teal focus:outline-none"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setSubmitted(false);
            }}
          />
          {!valid && email.length > 0 && (
            <p className="text-sm text-red-400">Enter a valid email address.</p>
          )}
          <button
            type="submit"
            className="w-full rounded-xl bg-brand-teal text-black font-semibold py-3 hover:bg-brand-teal/80 transition-colors"
          >
            Join list
          </button>
          {submitted && <p className="text-sm text-brand-teal font-medium">Subscribed. Watch your inbox.</p>}
        </form>
      </div>
    </section>
  );
}

