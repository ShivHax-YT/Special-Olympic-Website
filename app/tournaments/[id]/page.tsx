"use client";

import Link from "next/link";
import { useMemo } from "react";
import { SignupForm } from "@/components/forms/SignupForm";
import { useTournaments } from "@/components/providers/TournamentProvider";

type PageProps = {
  params: { id: string };
};

export default function TournamentDetailPage({ params }: PageProps) {
  const { tournaments } = useTournaments();
  const tournament = useMemo(() => tournaments.find((item) => item.id === params.id), [params.id, tournaments]);

  if (!tournament) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-white">Tournament not found</h1>
        <p className="text-slate-300">Try exploring the list of active events.</p>
        <Link
          href="/tournaments"
          className="focus-ring inline-flex w-fit rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-white"
        >
          Back to tournaments
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.25em] text-accent">{tournament.category}</p>
        <h1 className="text-4xl font-bold text-white">{tournament.name}</h1>
        <p className="text-base text-slate-300">{tournament.description}</p>
        <dl className="grid gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 text-sm text-slate-200 sm:grid-cols-3">
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">Date</dt>
            <dd className="mt-1 text-white">
              {new Date(tournament.date).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" })}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">Location</dt>
            <dd className="mt-1 text-white">{tournament.location}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">Slots</dt>
            <dd className="mt-1 text-white">{tournament.slots} athletes</dd>
          </div>
        </dl>
      </header>

      <section className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="card-surface rounded-2xl p-6 shadow-card space-y-4">
          <h2 className="text-xl font-semibold text-white">Accessibility & experience</h2>
          <p className="text-sm leading-relaxed text-slate-200">{tournament.accessibilityNotes}</p>
          <ul className="space-y-2 text-sm text-slate-200">
            <li>• Volunteers trained on inclusive communication</li>
            <li>• Emergency contacts and care partners welcome</li>
            <li>• Clear signage, visual schedules, and quiet rooms</li>
          </ul>
          <div className="rounded-xl bg-white/5 p-4 text-sm text-slate-300">
            Ready for real-time updates? Connect Supabase in <code className="font-mono">lib/supabaseClient.ts</code>{" "}
            and sync this page with live rosters, start lists, and announcements.
          </div>
        </div>
        <SignupForm tournament={tournament} />
      </section>
    </div>
  );
}
