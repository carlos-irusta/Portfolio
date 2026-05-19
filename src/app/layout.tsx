import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400"],
});

// ─── Site-wide constants ───────────────────────────────────────────────────
const SITE_URL = "https://portfolio-lilac-six-45.vercel.app/";
const FULL_NAME = "Carlos Irusta";
const TITLE = "Carlos Irusta — Software Developer";
const DESCRIPTION =
  "Production-ready software systems, clean architecture, and real-world problem solving. " +
  "Building reliable full-stack applications with TypeScript, Next.js, and PostgreSQL.";

// ─── Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // ── Base URL — resolves relative paths for OG images, canonical, etc. ──
  metadataBase: new URL(SITE_URL),

  // ── Title ──
  title: {
    default: TITLE,
    template: `%s — ${FULL_NAME}`,
  },

  // ── Description ──
  description: DESCRIPTION,

  // ── Authors & creator ──
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,

  // ── Keywords — structural, not spammy ──
  keywords: [
    "software developer",
    "full-stack engineer",
    "TypeScript",
    "Next.js",
    "PostgreSQL",
    "clean architecture",
    "production systems",
    "web engineering",
  ],

  // ── Canonical ──
  alternates: {
    canonical: SITE_URL,
  },

  // ── Robots ──
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph ──
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: FULL_NAME,
    locale: "en_US",
    // opengraph-image.tsx in /app is auto-detected — no manual images array needed
  },

  // ── Twitter / X ──
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@carlosirusta",
  },

  // ── Icons — icon.svg in /app is auto-detected by Next.js ──
  // Explicit reference here ensures apple-touch fallback and theme color
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },

  // ── Theme color — matches bg-base ──
  other: {
    "theme-color": "#13131a",
    "color-scheme": "dark",
    "msapplication-TileColor": "#13131a",
  },
};

// ─── Layout ───────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body
        className="min-h-screen antialiased"
        style={{ background: "var(--bg-base)", color: "var(--text-primary)" }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
