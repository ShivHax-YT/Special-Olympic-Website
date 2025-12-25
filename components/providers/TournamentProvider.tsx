"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { seedTournaments } from "@/data/tournaments";
import { sortTournaments, toSlug } from "@/lib/tournaments";
import { Tournament } from "@/types";

type TournamentContextShape = {
  tournaments: Tournament[];
  addTournament: (tournament: Omit<Tournament, "id">) => void;
  updateTournamentStatus: (id: string, status: Tournament["status"]) => void;
};

const STORAGE_KEY = "special-olympics:tournaments";

const TournamentContext = createContext<TournamentContextShape | undefined>(undefined);

export const TournamentProvider = ({ children }: { children: React.ReactNode }) => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (stored) {
      try {
        setTournaments(sortTournaments(JSON.parse(stored)));
        return;
      } catch (error) {
        console.warn("Unable to parse stored tournaments", error);
      }
    }
    setTournaments(sortTournaments(seedTournaments));
  }, []);

  useEffect(() => {
    if (tournaments.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tournaments));
    }
  }, [tournaments]);

  const addTournament = (tournament: Omit<Tournament, "id">) => {
    const safeId = toSlug(tournament.name) || `tournament-${Date.now()}`;
    const newTournament: Tournament = { ...tournament, id: safeId };
    setTournaments((prev) => sortTournaments([...prev, newTournament]));
  };

  const updateTournamentStatus = (id: string, status: Tournament["status"]) => {
    setTournaments((prev) =>
      prev.map((tournament) => (tournament.id === id ? { ...tournament, status } : tournament)),
    );
  };

  const value = useMemo(
    () => ({
      tournaments,
      addTournament,
      updateTournamentStatus,
    }),
    [tournaments],
  );

  return <TournamentContext.Provider value={value}>{children}</TournamentContext.Provider>;
};

export const useTournaments = () => {
  const ctx = useContext(TournamentContext);
  if (!ctx) throw new Error("useTournaments must be used within TournamentProvider");
  return ctx;
};
