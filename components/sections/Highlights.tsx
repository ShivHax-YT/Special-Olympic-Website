const highlights = [
  {
    title: "Accessibility-first",
    body: "WCAG-conscious typography, color contrast, focus styles, and structured forms make every flow navigable.",
  },
  {
    title: "Host-ready dashboards",
    body: "Create tournaments, track capacity, and share accessibility notes with volunteers and caregivers.",
  },
  {
    title: "Supabase friendly",
    body: "Prepared for Supabase auth, storage, and real-time updates—just add your keys in .env.local.",
  },
];

export const Highlights = () => (
  <section className="grid gap-6 md:grid-cols-3">
    {highlights.map((item) => (
      <article key={item.title} className="card-surface rounded-2xl p-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.25em] text-accent">{item.title}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-200">{item.body}</p>
      </article>
    ))}
  </section>
);
