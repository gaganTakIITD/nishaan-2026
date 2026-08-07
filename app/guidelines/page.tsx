import type { Metadata } from "next";
import Link from "next/link";
import { ComingSoon, PageHeader, Section } from "@/components/ui/PageChrome";

export const metadata: Metadata = {
  title: "Participation Guidelines",
  description:
    "Eligibility, documents, and support for NISHAAN 2026 participants.",
};

const checklist = [
  {
    title: "Eligibility",
    items: [
      "Open to students with disabilities (IIT Delhi and colleges across Delhi / NCR — exact criteria TBD).",
      "Valid student ID and disability documentation as required by OAE (format TBD).",
    ],
  },
  {
    title: "Registration",
    items: [
      "Complete the registration form when the 2026 link is published.",
      "Select cultural category / categories and note any access requirements.",
    ],
  },
  {
    title: "On the day",
    items: [
      "Arrive with ID; follow venue wayfinding and volunteer guidance.",
      "Accessible e-rickshaw / campus mobility support available — pickup points TBA.",
      "Scribe, interpreter, or other support: request in advance via OAE contacts.",
    ],
  },
  {
    title: "Recognition",
    items: [
      "Certificates for participants (historical practice).",
      "Prizes where applicable — details for 2026 TBD.",
    ],
  },
] as const;

export default function GuidelinesPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Guidelines"
        title="Participation guidelines"
        description="Structured checklist placeholders until the official 2026 rulebook and PDF are published by OAE."
      />
      <Section>
        <ComingSoon label="Official rulebook PDF forthcoming" />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {checklist.map((block, i) => (
            <section
              key={block.title}
              aria-labelledby={`g-${block.title}`}
              className="group imprint-tile p-6 sm:p-8"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h2
                  id={`g-${block.title}`}
                  className="font-display text-2xl font-semibold tracking-tight text-balance text-oae-text transition-colors duration-300 group-hover:text-oae-primary"
                >
                  {block.title}
                </h2>
                <span className="font-display text-sm tabular-nums text-oae-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <ul className="mt-5 space-y-3">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-oae-muted"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-oae-primary"
                      aria-hidden="true"
                    />
                    <span className="text-pretty">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-12 text-base leading-relaxed text-oae-muted">
          Questions?{" "}
          <Link
            href="/contact"
            className="font-semibold text-oae-primary underline decoration-oae-primary/30 underline-offset-4 transition-all duration-300 hover:decoration-oae-primary"
          >
            Contact OAE
          </Link>
        </p>
      </Section>
    </main>
  );
}
