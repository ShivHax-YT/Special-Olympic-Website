import { Tournament } from "@/types";

export const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const sortTournaments = (items: Tournament[]) =>
  [...items].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
