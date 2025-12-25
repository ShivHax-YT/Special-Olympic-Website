"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "./providers/AuthProvider";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/tournaments", label: "Tournaments" },
  { href: "/dashboard", label: "Host Dashboard" },
];

export const Header = () => {
  const pathname = usePathname();
  const { user, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-surface/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3 focus-ring rounded-lg px-2 py-1">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-lg">
            <span className="text-xl font-black text-white">SO</span>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Inclusive Sport</p>
            <p className="text-lg font-bold leading-none text-white">Special Olympics</p>
          </div>
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-2">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-primary text-white shadow-card"
                    : "text-slate-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {user ? (
            <div className="flex items-center gap-3 rounded-full bg-white/5 px-3 py-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent text-center text-sm font-bold leading-8 text-white">
                {user.name?.[0]?.toUpperCase() ?? "U"}
              </div>
              <div className="hidden text-left sm:block">
                <p className="text-xs uppercase tracking-widest text-slate-400">{user.role}</p>
                <p className="text-sm font-semibold text-white">{user.email}</p>
              </div>
              <button
                type="button"
                onClick={signOut}
                className="focus-ring rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/20"
              >
                Sign out
              </button>
            </div>
          ) : (
            <Link
              href="/auth"
              className="focus-ring rounded-full bg-gradient-to-r from-primary via-accent to-primary px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:scale-[1.02]"
            >
              Sign in
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};
