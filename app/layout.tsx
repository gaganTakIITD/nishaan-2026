import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { AccessibilityShell } from "@/components/accessibility/AccessibilityShell";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NISHAAN 2026 · IIT Delhi",
    template: "%s · NISHAAN 2026",
  },
  description:
    "NISHAAN 2026 — an inclusive cultural celebration for students with disabilities, organised by the Office of Accessible Education at IIT Delhi.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fontsource/opendyslexic@5.0.0/index.min.css"
        />
        <style>{`:root { --font-opendyslexic: "OpenDyslexic", "Comic Sans MS", sans-serif; }`}</style>
      </head>
      <body className="flex min-h-full flex-col font-sans text-foreground">
        <AccessibilityShell>
          <SkipLink />
          <Header />
          {children}
          <Footer />
        </AccessibilityShell>
      </body>
    </html>
  );
}
