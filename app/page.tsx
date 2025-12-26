import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <Hero />
      <Highlights />

      <section className="card-surface rounded-2xl p-6 shadow-card">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-accent">Mission</p>
            <h2 className="text-3xl font-bold text-white">Equity through sport</h2>
            <p className="text-base leading-relaxed text-slate-300">
              Our mission is to make tournament planning and participation effortless for athletes, unified partners,
              and hosts. From labeled form fields to keyboard-friendly navigation, every screen is crafted to reduce
              cognitive load and celebrate inclusion.
            </p>
            <ul className="space-y-2 text-sm text-slate-200">
              <li>• Clear wayfinding, semantic landmarks, and skip links</li>
              <li>• High-contrast palettes and generous touch targets</li>
              <li>• Prepared for Supabase auth, storage, and realtime updates</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tournaments"
                className="focus-ring rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:scale-[1.01]"
              >
                View tournaments
              </Link>
              <Link
                href="/auth"
                className="focus-ring rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30"
              >
                Sign in
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
            <h3 className="text-lg font-semibold text-white">Platform values</h3>
            <dl className="mt-4 grid grid-cols-1 gap-3">
              <div className="rounded-xl bg-white/5 p-4">
                <dt className="text-xs uppercase tracking-[0.2em] text-accent">Accessibility</dt>
                <dd className="mt-2">
                  Keyboard operability, descriptive labels, and live region updates for status changes.
                </dd>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <dt className="text-xs uppercase tracking-[0.2em] text-accent">Trust</dt>
                <dd className="mt-2">
                  Prepared for Supabase auth—replace the local auth mock when credentials are ready.
                </dd>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <dt className="text-xs uppercase tracking-[0.2em] text-accent">Community</dt>
                <dd className="mt-2">
                  Host dashboards and athlete flows prioritize clarity so volunteers can assist quickly.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
