"use client";

import Link from "next/link";
import { Badge } from "./Badge";
import { Tournament } from "@/types";

type Props = {
  tournament: Tournament;
};

export const TournamentCard = ({ tournament }: Props) => (
  <article className="gradient-border relative overflow-hidden rounded-2xl bg-surface/80 p-[1px] shadow-card">
    <div className="card-surface relative h-full rounded-[18px] p-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Badge label={tournament.category} />
          <Badge
            label={tournament.status}
            tone={tournament.status === "Open" ? "success" : tournament.status === "Closed" ? "warning" : "info"}
          />
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
          {new Date(tournament.date).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-semibold text-white">{tournament.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{tournament.description}</p>

      <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-200">
        <div className="rounded-lg bg-white/5 p-3">
          <p className="text-xs uppercase tracking-widest text-slate-400">Location</p>
          <p className="font-semibold text-white">{tournament.location}</p>
        </div>
        <div className="rounded-lg bg-white/5 p-3">
          <p className="text-xs uppercase tracking-widest text-slate-400">Slots</p>
          <p className="font-semibold text-white">{tournament.slots} athletes</p>
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-200">
        <span className="font-semibold text-white">Accessibility:</span> {tournament.accessibilityNotes}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <Link
          href={`/tournaments/${tournament.id}`}
          className="focus-ring rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2 text-sm font-semibold text-white shadow-card transition hover:scale-[1.02]"
        >
          View details
        </Link>
        <p className="text-xs text-slate-400">High-contrast, screen-reader-friendly</p>
      </div>
    </div>
  </article>
);
