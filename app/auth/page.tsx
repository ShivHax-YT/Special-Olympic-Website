"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/components/providers/AuthProvider";

export default function AuthPage() {
  const { user, signIn, register, signOut } = useAuth();
  const [mode, setMode] = useState<"signin" | "register">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState<"athlete" | "host">("athlete");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setMessage(null);
    try {
      if (mode === "signin") {
        await signIn(email, password);
        setMessage("Signed in locally. Connect Supabase to enable server-backed auth.");
      } else {
        await register(email, password, role, name);
        setMessage("Account created locally. Update lib/supabaseClient.ts with credentials to go live.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to authenticate.");
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <header className="space-y-3 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-accent">Authentication</p>
        <h1 className="text-3xl font-bold text-white">Sign in or create an account</h1>
        <p className="text-base text-slate-300">
          This flow is mocked for local testing. Replace it with Supabase auth when credentials are ready.
        </p>
      </header>

      {user ? (
        <div className="card-surface rounded-2xl p-6 text-center shadow-card">
          <p className="text-sm text-slate-200">
            Signed in as <span className="font-semibold text-white">{user.email}</span> ({user.role})
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link
              href={user.role === "host" ? "/dashboard" : "/tournaments"}
              className="focus-ring rounded-full bg-gradient-to-r from-primary via-accent to-primary px-5 py-2 text-sm font-semibold text-white shadow-card"
            >
              Continue to {user.role === "host" ? "dashboard" : "tournaments"}
            </Link>
            <button
              type="button"
              onClick={signOut}
              className="focus-ring rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-white"
            >
              Sign out
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="card-surface rounded-2xl p-6 shadow-card space-y-4"
          aria-label="Authentication form"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-accent">
                {mode === "signin" ? "Welcome back" : "Create profile"}
              </p>
              <h2 className="text-xl font-semibold text-white">
                {mode === "signin" ? "Sign in" : "Create an account"}
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="mode"
                  value="signin"
                  checked={mode === "signin"}
                  onChange={() => setMode("signin")}
                  className="focus-ring h-4 w-4 accent-primary"
                />
                Sign in
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="mode"
                  value="register"
                  checked={mode === "register"}
                  onChange={() => setMode("register")}
                  className="focus-ring h-4 w-4 accent-primary"
                />
                Register
              </label>
            </div>
          </div>

          {mode === "register" && (
            <label className="flex flex-col gap-2 text-sm font-semibold text-white">
              Full name
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="focus-ring rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500"
                placeholder="Alex Morgan"
              />
            </label>
          )}

          <label className="flex flex-col gap-2 text-sm font-semibold text-white">
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="focus-ring rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500"
              placeholder="you@example.com"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-semibold text-white">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              minLength={6}
              className="focus-ring rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500"
              placeholder="At least 6 characters"
            />
          </label>

          {mode === "register" && (
            <div className="flex flex-wrap gap-3 text-sm text-slate-200">
              <label className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2">
                <input
                  type="radio"
                  name="role"
                  value="athlete"
                  checked={role === "athlete"}
                  onChange={() => setRole("athlete")}
                  className="focus-ring h-4 w-4 accent-primary"
                />
                Athlete
              </label>
              <label className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2">
                <input
                  type="radio"
                  name="role"
                  value="host"
                  checked={role === "host"}
                  onChange={() => setRole("host")}
                  className="focus-ring h-4 w-4 accent-primary"
                />
                Host
              </label>
            </div>
          )}

          {error && <p className="rounded-lg bg-accent/10 px-4 py-2 text-sm text-accent">{error}</p>}
          {message && <p className="rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary-light">{message}</p>}

          <button
            type="submit"
            className="focus-ring w-full rounded-full bg-gradient-to-r from-primary via-accent to-primary px-6 py-3 text-base font-semibold text-white shadow-card transition hover:scale-[1.01]"
          >
            {mode === "signin" ? "Sign in" : "Create account"}
          </button>
        </form>
      )}
    </div>
  );
}
