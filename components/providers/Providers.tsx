"use client";

import { AuthProvider } from "./AuthProvider";
import { TournamentProvider } from "./TournamentProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <AuthProvider>
    <TournamentProvider>{children}</TournamentProvider>
  </AuthProvider>
);
