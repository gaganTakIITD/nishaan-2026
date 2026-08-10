import type { Metadata } from "next";
import Link from "next/link";
import { ComingSoon, PageHeader, Section } from "@/components/ui/PageChrome";
import { scheduleSkeleton } from "@/content/events";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Schedule",
  description: "Day timeline for NISHAAN 2026 — skeleton pending final programme.",
};

export default function SchedulePage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Schedule"
        title="Day at a glance"
        description="A structured outline based on prior editions. Exact times and halls for 2026 will replace this skeleton."
      />
      <Section>
        <div className="flex flex-wrap items-center gap-4">
          <p
            className="rounded-xl border border-fest-rule bg-white px-4 py-1.5 text-sm text-fest-muted"
            role="status"
          >
            {site.dateLabel} · {site.venue}
          </p>
          <ComingSoon label="Timed programme forthcoming" />
        </div>

        <ol className="mt-10 space-y-4">
          {scheduleSkeleton.map((slot, i) => (
            <li
              key={slot.title}
              className="imprint-tile grid gap-3 border-l-4 border-l-fest-warm p-5 transition-colors sm:grid-cols-[11rem_1fr] sm:gap-10 sm:p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-oae-primary">
                {slot.time}
              </p>
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-balance text-fest-ink sm:text-3xl">
                  <span className="mr-3 tabular-nums text-fest-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {slot.title}
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-pretty text-fest-muted">
                  {slot.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/register"
            className="btn-primary rounded-xl px-5 py-2.5 text-sm no-underline"
          >
            Register Interest
          </Link>
          <Link
            href="/contact"
            className="btn-secondary rounded-xl px-5 py-2.5 text-sm no-underline"
          >
            Ask About Timing
          </Link>
        </div>
      </Section>
    </main>
  );
}
