import type { Metadata } from "next";
import Link from "next/link";
import { ComingSoon, PageHeader, Section } from "@/components/ui/PageChrome";
import { eventCategories } from "@/content/events";
import { media } from "@/content/site";

export const metadata: Metadata = {
  title: "Events",
  description: "NISHAAN cultural categories — music, dance, drama, art, photography, wordsmith.",
};

export default function EventsPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Events"
        title="Cultural categories"
        description="Six showcases for NISHAAN 2026. Rules and formats will be published here."
        image={{ src: media.chapter.events, alt: "" }}
      />
      <Section>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {eventCategories.map((cat) => (
            <li key={cat.slug} id={cat.slug} className="oae-card scroll-mt-28 p-5">
              <h2 className="text-xl font-semibold text-nishaan-ink">{cat.title}</h2>
              <p className="mt-2 text-sm text-nishaan-muted">{cat.description}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-nishaan-muted">
          In 2025, a highlight was the featured performance by{" "}
          <em>We Are One Dance Group</em>.
        </p>
        <Link
          href="/register"
          className="btn-primary mt-6 inline-flex rounded-md px-4 py-2 text-sm font-semibold no-underline"
        >
          Register for a category
        </Link>
        <ComingSoon label="2026 category rules forthcoming" />
      </Section>
    </main>
  );
}
