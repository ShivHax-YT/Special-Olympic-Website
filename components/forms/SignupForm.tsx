"use client";

import { useState } from "react";
import { Tournament } from "@/types";

type SignupFormProps = {
  tournament: Tournament;
};

export const SignupForm = ({ tournament }: SignupFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    if (!name.trim() || !email.trim()) {
      setError("Name and email are required to complete registration.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section aria-labelledby="signup-title" className="card-surface rounded-2xl p-6 shadow-card">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Register</p>
          <h2 id="signup-title" className="text-2xl font-bold text-white">
            Sign up for {tournament.name}
          </h2>
        </div>
        <span className="rounded-full bg-primary/20 px-4 py-2 text-xs font-semibold text-primary-light">
          {tournament.status === "Open" ? "Accepting athletes" : "Join the waitlist"}
        </span>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" aria-describedby="signup-helper">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-semibold text-white" htmlFor="athlete-name">
            Full name
            <input
              id="athlete-name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              className="focus-ring w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500"
              placeholder="Jordan Lee"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-semibold text-white" htmlFor="athlete-email">
            Email
            <input
              id="athlete-email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="focus-ring w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500"
              placeholder="you@example.com"
            />
          </label>
        </div>

        <label className="flex flex-col gap-2 text-sm font-semibold text-white" htmlFor="accommodations">
          Accessibility or coaching notes
          <textarea
            id="accommodations"
            name="accommodations"
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            rows={4}
            className="focus-ring w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500"
            placeholder="Preferred communication style, mobility needs, sensory supports..."
          />
          <span id="signup-helper" className="text-xs text-slate-400">
            We keep athletes, unified partners, and caregivers informed with accessible itineraries.
          </span>
        </label>

        {error && <p className="rounded-lg bg-accent/10 px-4 py-2 text-sm text-accent">{error}</p>}

        {submitted ? (
          <p className="rounded-lg bg-primary/15 px-4 py-3 text-sm text-primary-light">
            Thank you for registering! We&apos;ll confirm your spot and share travel and accessibility details via
            email.
          </p>
        ) : (
          <button
            type="submit"
            className="focus-ring w-full rounded-full bg-gradient-to-r from-primary via-accent to-primary px-6 py-3 text-base font-semibold text-white shadow-card transition hover:scale-[1.01]"
          >
            Submit registration
          </button>
        )}
      </form>
    </section>
  );
};
