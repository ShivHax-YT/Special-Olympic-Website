"use client";

import { useState } from "react";
import { useTournaments } from "../providers/TournamentProvider";
import { Tournament } from "@/types";

const categories: Tournament["category"][] = ["Track & Field", "Swimming", "Basketball", "Unified Sports", "Winter Sports"];

export const TournamentForm = () => {
  const { addTournament } = useTournaments();
  const [form, setForm] = useState<Omit<Tournament, "id">>({
    name: "",
    description: "",
    date: "",
    location: "",
    category: "Track & Field",
    slots: 50,
    accessibilityNotes: "Wheelchair-accessible venues, visual schedules, sensory-friendly spaces.",
    status: "Open",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (key: keyof Omit<Tournament, "id">, value: string | number) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addTournament(form);
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="card-surface rounded-2xl p-6 shadow-card space-y-4" aria-label="Create tournament form">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Host</p>
          <h3 className="text-xl font-semibold text-white">Create a new tournament</h3>
        </div>
        {submitted && <span className="rounded-full bg-primary/20 px-4 py-2 text-xs font-semibold text-primary-light">Saved locally</span>}
      </div>

      <label className="flex flex-col gap-2 text-sm font-semibold text-white">
        Tournament name
        <input
          required
          value={form.name}
          onChange={(event) => handleChange("name", event.target.value)}
          className="focus-ring rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500"
          placeholder="Unified Summer Games"
        />
      </label>

      <label className="flex flex-col gap-2 text-sm font-semibold text-white">
        Description
        <textarea
          required
          rows={3}
          value={form.description}
          onChange={(event) => handleChange("description", event.target.value)}
          className="focus-ring rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500"
          placeholder="Inclusive sports weekend with certified coaches and sensory-friendly lounges."
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-3">
        <label className="flex flex-col gap-2 text-sm font-semibold text-white">
          Date
          <input
            type="date"
            required
            value={form.date}
            onChange={(event) => handleChange("date", event.target.value)}
            className="focus-ring rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-white">
          Location
          <input
            required
            value={form.location}
            onChange={(event) => handleChange("location", event.target.value)}
            className="focus-ring rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500"
            placeholder="Portland, OR"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-white">
          Category
          <select
            value={form.category}
            onChange={(event) => handleChange("category", event.target.value)}
            className="focus-ring rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white"
          >
            {categories.map((category) => (
              <option key={category} value={category} className="bg-surface text-white">
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-semibold text-white">
          Slots available
          <input
            type="number"
            min={1}
            value={form.slots}
            onChange={(event) => handleChange("slots", Number(event.target.value))}
            className="focus-ring rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-white">
          Status
          <select
            value={form.status}
            onChange={(event) => handleChange("status", event.target.value)}
            className="focus-ring rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white"
          >
            {["Open", "Closed", "In Progress"].map((status) => (
              <option key={status} value={status} className="bg-surface text-white">
                {status}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm font-semibold text-white">
        Accessibility notes
        <textarea
          rows={3}
          value={form.accessibilityNotes}
          onChange={(event) => handleChange("accessibilityNotes", event.target.value)}
          className="focus-ring rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500"
          placeholder="Adaptive equipment availability, companion passes, sensory-friendly hours."
        />
      </label>

      <button
        type="submit"
        className="focus-ring w-full rounded-full bg-gradient-to-r from-primary via-accent to-primary px-6 py-3 text-base font-semibold text-white shadow-card transition hover:scale-[1.01]"
      >
        Save tournament
      </button>

      <p className="text-xs text-slate-400">
        Data is stored locally for now. Connect Supabase in <code className="font-mono">lib/supabaseClient.ts</code>{" "}
        when credentials are available.
      </p>
    </form>
  );
};
