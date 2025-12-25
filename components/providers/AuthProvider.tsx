"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { createUserProfile, isValidEmail } from "@/lib/auth";
import { User } from "@/types";

type AuthContextShape = {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, role: User["role"], name?: string) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextShape | undefined>(undefined);
const STORAGE_KEY = "special-olympics:user";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch (error) {
        console.warn("Unable to parse stored user", error);
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!user) {
      localStorage.removeItem(STORAGE_KEY);
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }, [user]);

  const signIn = async (email: string, password: string) => {
    if (!isValidEmail(email)) throw new Error("Please enter a valid email.");
    if (password.trim().length < 6) throw new Error("Password should be at least 6 characters.");
    setUser(createUserProfile(email, "athlete"));
  };

  const register = async (email: string, password: string, role: User["role"], name?: string) => {
    if (!isValidEmail(email)) throw new Error("Please enter a valid email.");
    if (password.trim().length < 6) throw new Error("Password should be at least 6 characters.");
    setUser(createUserProfile(email, role, name));
  };

  const signOut = () => setUser(null);

  const value = useMemo(
    () => ({ user, loading, signIn, register, signOut }),
    [user, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
