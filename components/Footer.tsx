export const Footer = () => (
  <footer className="border-t border-white/5 bg-surface/80">
    <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
      <p>
        Built for inclusive competition. Crafted with accessibility-first design and ready for Supabase
        integration.
      </p>
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white">WCAG AA</span>
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white">Keyboard-first</span>
      </div>
    </div>
  </footer>
);
