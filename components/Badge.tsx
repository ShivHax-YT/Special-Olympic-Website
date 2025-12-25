type BadgeProps = {
  label: string;
  tone?: "info" | "success" | "warning";
};

const toneMap = {
  info: "bg-white/10 text-slate-100",
  success: "bg-primary/20 text-primary-light",
  warning: "bg-accent/20 text-accent",
};

export const Badge = ({ label, tone = "info" }: BadgeProps) => (
  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${toneMap[tone]} focus-ring`}>{label}</span>
);
