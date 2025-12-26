"use client";

import { TournamentCard } from "@/components/TournamentCard";
import { useTournaments } from "@/components/providers/TournamentProvider";

export default function TournamentsPage() {
  const { tournaments } = useTournaments();

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.25em] text-accent">Tournaments</p>
        <h1 className="text-3xl font-bold text-white">Inclusive events across the country</h1>
        <p className="text-base text-slate-300">
          Browse Special Olympics competitions with clear accessibility notes, capacity counts, and next steps.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {tournaments.map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))}
      </div>
    </div>
  );
}
