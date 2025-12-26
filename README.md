# Special Olympics Tournament Platform

Accessible-first Next.js application for Special Olympics tournaments with Tailwind CSS styling, mock authentication, and a host dashboard ready for future Supabase integration.

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open http://localhost:3000 to view the site.

> The app uses localStorage for mock authentication and tournament data until Supabase credentials are available.

## Project structure

- `app/` – App Router pages (`/`, `/tournaments`, `/tournaments/[id]`, `/dashboard`, `/auth`)
- `components/` – Reusable UI blocks, forms, and context providers
- `data/tournaments.ts` – Seed data for tournaments
- `lib/` – Utility helpers plus Supabase client placeholder
- `types/` – Shared TypeScript types

## Supabase readiness

Add your Supabase keys to `.env.local` (see `.env.example`) and update data flows to use the client in `lib/supabaseClient.ts`. Authentication currently uses a lightweight mock in `AuthProvider` and can be replaced with Supabase Auth once configured.

## Accessibility checklist

- Keyboard-visible focus states and skip link
- High-contrast palette and readable typography
- Form labels, helper text, and live status messaging
