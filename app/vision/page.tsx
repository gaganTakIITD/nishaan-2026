import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui/PageChrome";
import { media } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Vision",
  description: "NISHAAN's inclusion manifesto — a mark of belonging for every student.",
};

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
        <blockquote className="max-w-4xl font-display text-3xl leading-[1.25] text-nishaan-ink sm:text-4xl md:text-5xl">
          “Accessible higher education is a fundamental right of PwDs. At IIT
          Delhi, we are committed to providing an inclusive environment…”
        </blockquote>
        <p className="mt-6 text-sm text-nishaan-muted">
          — Prof. Vikram Singh, Faculty Advisor / Faculty In-charge (PwBD)
        </p>

        <div className="mt-20 grid gap-12 border-t border-[var(--border)] pt-16 sm:grid-cols-2">
          {[
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
          ].map((item) => (
            <div key={item.title}>
              <h2 className="font-display text-2xl font-semibold text-nishaan-ink">
                {item.title}
              </h2>
              <p className="mt-3 text-nishaan-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
