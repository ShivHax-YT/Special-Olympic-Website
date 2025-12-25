"use client";

import Link from "next/link";
import { TournamentForm } from "@/components/forms/TournamentForm";
import { useAuth } from "@/components/providers/AuthProvider";
import { useTournaments } from "@/components/providers/TournamentProvider";
import { Tournament } from "@/types";

const statusOptions: Tournament["status"][] = ["Open", "In Progress", "Closed"];

export default function DashboardPage() {
  const { user } = useAuth();
  const { tournaments, updateTournamentStatus } = useTournaments();

  if (!user || user.role !== "host") {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-white">Host dashboard</h1>
        <p className="text-slate-300">
          Sign in as a host to create tournaments and manage accessibility details. Authentication is currently mocked
          for local development—connect Supabase to go live.
        </p>
        <Link
          href="/auth"
          className="focus-ring inline-flex w-fit rounded-full bg-gradient-to-r from-primary via-accent to-primary px-5 py-3 text-sm font-semibold text-white shadow-card"
        >
          Go to sign in
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.25em] text-accent">Host</p>
        <h1 className="text-3xl font-bold text-white">Manage tournaments</h1>
        <p className="text-base text-slate-300">
          Create inclusive events and keep accessibility notes current. All data is stored locally until Supabase is
          connected.
        </p>
      </header>

      <TournamentForm />

      <section className="card-surface rounded-2xl p-6 shadow-card">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xl font-semibold text-white">Your tournaments</h2>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
            {tournaments.length} events
          </span>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full divide-y divide-white/10 text-left text-sm text-slate-200">
            <thead className="text-xs uppercase tracking-[0.2em] text-slate-400">
              <tr>
                <th className="px-3 py-2">Name</th>
                <th className="px-3 py-2">Date</th>
                <th className="px-3 py-2">Location</th>
                <th className="px-3 py-2">Slots</th>
                <th className="px-3 py-2">Status</th>
                <th className="px-3 py-2 sr-only">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {tournaments.map((tournament) => (
                <tr key={tournament.id} className="hover:bg-white/5">
                  <td className="px-3 py-3 font-semibold text-white">{tournament.name}</td>
                  <td className="px-3 py-3">
                    {new Date(tournament.date).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-3 py-3">{tournament.location}</td>
                  <td className="px-3 py-3">{tournament.slots}</td>
                  <td className="px-3 py-3">
                    <label className="sr-only" htmlFor={`status-${tournament.id}`}>
                      Update status for {tournament.name}
                    </label>
                    <select
                      id={`status-${tournament.id}`}
                      value={tournament.status}
                      onChange={(event) => updateTournamentStatus(tournament.id, event.target.value as Tournament["status"])}
                      className="focus-ring rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white"
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status} className="bg-surface text-white">
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-3 py-3 text-right">
                    <Link
                      href={`/tournaments/${tournament.id}`}
                      className="focus-ring inline-flex rounded-full bg-primary/20 px-3 py-2 text-xs font-semibold text-primary-light transition hover:bg-primary/30"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
