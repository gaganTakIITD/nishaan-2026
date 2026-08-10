import type { Metadata } from "next";
import Link from "next/link";
import { ComingSoon, PageHeader, Section } from "@/components/ui/PageChrome";
import { eventCategories } from "@/content/events";
import { RegisterForm } from "./RegisterForm";

export const metadata: Metadata = {
  title: "Register",
  description: "Register Interest for NISHAAN 2026 — official form link coming soon.",
};

export default function RegisterPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Register"
        title="Leave your mark"
        description="Accessible registration for NISHAAN 2026. The official form link will replace this interest shell when published."
      />
      <Section>
        <ComingSoon label="Official registration link forthcoming" />

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-oae-primary">
              Categories
            </h2>
            <ul className="mt-6 space-y-3">
              {eventCategories.map((c, i) => (
                <li
                  key={c.slug}
                  className="imprint-tile flex items-center gap-3 px-4 py-3 text-fest-ink"
                >
                  <span className="font-display text-sm tabular-nums text-oae-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium">{c.title}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-fest-muted">
              Review{" "}
              <Link
                href="/guidelines"
                className="font-semibold text-oae-primary-dark underline decoration-oae-primary/30 underline-offset-4"
              >
                participation guidelines
              </Link>{" "}
              before registering. Mention access needs so OAE can plan support.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <RegisterForm />
          </div>
        </div>
      </Section>
    </main>
  );
}
