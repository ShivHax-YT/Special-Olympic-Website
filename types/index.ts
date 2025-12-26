export type TournamentCategory = "Track & Field" | "Swimming" | "Basketball" | "Unified Sports" | "Winter Sports";

export type Tournament = {
  id: string;
  name: string;
  description: string;
  date: string;
  location: string;
  category: TournamentCategory;
  slots: number;
  accessibilityNotes: string;
  status: "Open" | "Closed" | "In Progress";
};

export type User = {
  email: string;
  role: "athlete" | "host";
  name?: string;
};
