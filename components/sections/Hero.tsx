import Link from "next/link";

export const Hero = () => (
  <section className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
    <div className="space-y-6">
      <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
        Accessible by design
      </p>
      <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
        Special Olympics tournaments, built for inclusion and ease.
      </h1>
      <p className="text-lg leading-relaxed text-slate-300">
        Plan, host, and join Special Olympics events with confidence. Every flow is keyboard accessible, screen-reader
        friendly, and ready for Supabase-powered authentication and data.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/tournaments"
          className="focus-ring rounded-full bg-gradient-to-r from-primary via-accent to-primary px-6 py-3 text-base font-semibold text-white shadow-card transition hover:scale-[1.02]"
        >
          Explore tournaments
        </Link>
        <Link
          href="/dashboard"
          className="focus-ring rounded-full border border-white/10 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:border-white/30"
        >
          Host dashboard
        </Link>
      </div>
      <div className="flex flex-wrap gap-3 text-sm text-slate-300">
        <span className="rounded-full bg-white/5 px-3 py-1">WCAG AA contrast</span>
        <span className="rounded-full bg-white/5 px-3 py-1">Skip-to-content shortcuts</span>
        <span className="rounded-full bg-white/5 px-3 py-1">Form labels + hints</span>
      </div>
    </div>

    <div className="relative">
      <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-accent/10 blur-3xl" aria-hidden />
      <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="gradient-border relative overflow-hidden rounded-3xl bg-surface/80 p-[1px] shadow-card">
        <div className="grid-pattern relative rounded-[22px] p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-white">Unified Sports Scheduler</p>
            <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary-light">Live</span>
          </div>
          <ul className="mt-6 space-y-3 text-sm text-slate-200">
            <li className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
              <span>Inclusive track heats</span>
              <span className="text-xs text-slate-400">3 officials assigned</span>
            </li>
            <li className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
              <span>Swimming relays</span>
              <span className="text-xs text-slate-400">Audio & visual timers</span>
            </li>
            <li className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
              <span>Unified basketball</span>
              <span className="text-xs text-slate-400">Volunteer bench crew</span>
            </li>
          </ul>
          <p className="mt-5 text-xs text-slate-400">
            Ready to connect to Supabase for real-time heat sheets, rosters, and delegate communication.
          </p>
        </div>
      </div>
    </div>
  </section>
);
