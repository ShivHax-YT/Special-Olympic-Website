import { User } from "@/types";

export const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

export const createUserProfile = (email: string, role: User["role"], name?: string): User => ({
  email: email.toLowerCase(),
  role,
  name: name?.trim() || email.split("@")[0],
});
