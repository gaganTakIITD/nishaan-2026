import type { Metadata } from "next";
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
        <p className="text-sm text-nishaan-muted" role="status">
          {site.dateLabel} · {site.venue}
        </p>
        <ComingSoon label="Timed programme forthcoming" />
        <ol className="mt-12">
          {scheduleSkeleton.map((slot, i) => (
            <li
              key={slot.title}
              className="grid gap-3 border-l-2 border-nishaan-ink py-8 pl-8 sm:grid-cols-[10rem_1fr] sm:gap-12"
            >
              <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-nishaan-gold">
                {slot.time}
              </p>
              <div>
                <h2 className="font-display text-2xl font-semibold text-nishaan-ink sm:text-3xl">
                  <span className="mr-3 text-nishaan-muted tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {slot.title}
                </h2>
                <p className="mt-2 max-w-xl text-nishaan-muted">{slot.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </main>
  );
}
