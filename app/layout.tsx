import type { Metadata } from "next";
import { Providers } from "@/components/providers/Providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Special Olympics Tournament Hub",
  description: "Accessible platform to host and join Special Olympics tournaments with Supabase-ready foundations.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className="flex min-h-screen flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus-ring absolute left-4 top-4 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg">
        Skip to main content
      </a>
      <Providers>
        <Header />
        <main id="main" className="flex-1">
          <div className="mx-auto max-w-6xl px-4 py-12">{children}</div>
        </main>
        <Footer />
      </Providers>
    </body>
  </html>
);

export default RootLayout;
