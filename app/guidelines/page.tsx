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
        <div className="mt-10 space-y-10">
          {checklist.map((block) => (
            <section key={block.title} aria-labelledby={`g-${block.title}`}>
              <h2
                id={`g-${block.title}`}
                className="font-display text-2xl font-semibold text-nishaan-ink"
              >
                {block.title}
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-nishaan-muted">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <p className="mt-10 text-sm">
          Questions?{" "}
          <Link href="/contact" className="font-semibold text-nishaan-leaf-deep">
            Contact OAE
          </Link>
        </p>
      </Section>
    </main>
  );
}
