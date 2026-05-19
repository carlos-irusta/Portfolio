import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Carlos — Software Developer",
  description:
    "Building reliable software for real businesses. Clean architecture, production-ready systems.",
  openGraph: {
    title: "Carlos — Software Developer",
    description:
      "Building reliable software for real businesses. Clean architecture, production-ready systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen antialiased" style={{ background: "var(--bg-base)", color: "var(--text-primary)" }}>
        {children}
      </body>
    </html>
  );
}
