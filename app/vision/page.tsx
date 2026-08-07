import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui/PageChrome";
import { media } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Vision",
  description:
    "NISHAAN's inclusion manifesto — a mark of belonging for every student.",
};

const pillars = [
  {
    title: "Belonging",
    body: "Culture and campus life that welcome every body and every mind.",
  },
  {
    title: "Visibility",
    body: "A public celebration of talent that is too often sidelined.",
  },
  {
    title: "Partnership",
    body: "Inter-college solidarity across Delhi’s disability community.",
  },
  {
    title: "Continuity",
    body: "Cultural inclusion (NISHAAN) paired with sports inclusion (SANGAM).",
  },
] as const;

export default function VisionPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Our Vision"
        title="No student left off stage"
        description="Disability never means exclusion from cultural life — at IIT Delhi or among peer colleges across Delhi."
        image={{
          src: media.chapter.vision,
          alt: "Chapter atmosphere for Vision",
        }}
      />
      <Section>
        <blockquote className="imprint-tile max-w-4xl border-l-4 border-l-oae-primary p-8 sm:p-10">
          <p className="font-display text-2xl leading-relaxed text-pretty text-oae-text sm:text-3xl md:text-4xl md:leading-snug">
            “Accessible higher education is a fundamental right of PwDs. At IIT
            Delhi, we are committed to providing an inclusive environment…”
          </p>
          <footer className="mt-6 text-sm leading-relaxed text-oae-muted">
            — Prof. Vikram Singh, Faculty Advisor / Faculty In-charge (PwBD)
          </footer>
        </blockquote>

        <div className="mt-20 grid grid-cols-1 gap-6 border-t border-oae-border pt-16 sm:grid-cols-2 lg:gap-8">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="group imprint-tile p-6 transition-all duration-300 sm:p-8"
            >
              <h2 className="font-display text-2xl font-semibold tracking-tight text-balance text-oae-text transition-colors duration-300 group-hover:text-oae-primary">
                {item.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-pretty text-oae-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
