import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ComingSoon, PageHeader, Section } from "@/components/ui/PageChrome";
import { eventCovers } from "@/content/gallery";
import { eventCategories } from "@/content/events";
import { media } from "@/content/site";

export const metadata: Metadata = {
  title: "Events",
  description:
    "NISHAAN cultural categories — music, dance, drama, art, photography, wordsmith.",
};

export default function EventsPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Events"
        title="Cultural categories"
        description="Six showcases for NISHAAN 2026. Choose a category, review guidelines, then register your interest."
        image={{ src: media.chapter.events, alt: "" }}
      />
      <Section>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {eventCategories.map((cat, i) => (
            <li
              key={cat.slug}
              id={cat.slug}
              className="group imprint-tile flex scroll-mt-28 flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/10] bg-fest-field">
                <Image
                  src={eventCovers[cat.slug] ?? "/media/hero/stage.jpg"}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <span className="absolute left-3 top-3 rounded-lg bg-white/95 px-2.5 py-1 font-display text-xs tabular-nums text-fest-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="absolute right-3 top-3 rounded-lg bg-fest-ink/80 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-white">
                  {cat.format}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-balance text-fest-ink transition-colors group-hover:text-oae-primary">
                  {cat.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-pretty text-fest-muted">
                  {cat.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link
                    href="/register"
                    className="btn-primary rounded-xl px-4 py-2 text-xs no-underline"
                  >
                    {cat.action}
                  </Link>
                  <Link
                    href="/guidelines"
                    className="rounded-xl border border-fest-rule bg-white px-4 py-2 text-xs font-semibold text-fest-ink no-underline hover:bg-fest-field"
                  >
                    Guidelines
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 imprint-tile border-fest-warm/30 bg-fest-warm-soft/40 p-6 sm:p-8">
          <h3 className="font-display text-xl font-semibold text-fest-ink">
            What to do next
          </h3>
          <ol className="mt-4 grid gap-3 sm:grid-cols-3">
            <li className="rounded-xl bg-white/80 p-4">
              <p className="font-display text-sm text-fest-warm">01</p>
              <p className="mt-1 font-semibold text-fest-ink">Choose a category</p>
              <p className="mt-1 text-sm text-fest-muted">
                Pick Music, Dance, Drama, Art, Photography, or Wordsmith.
              </p>
            </li>
            <li className="rounded-xl bg-white/80 p-4">
              <p className="font-display text-sm text-fest-warm">02</p>
              <p className="mt-1 font-semibold text-fest-ink">Read guidelines</p>
              <p className="mt-1 text-sm text-fest-muted">
                Check eligibility and note any access support you need.
              </p>
            </li>
            <li className="rounded-xl bg-white/80 p-4">
              <p className="font-display text-sm text-fest-warm">03</p>
              <p className="mt-1 font-semibold text-fest-ink">Register interest</p>
              <p className="mt-1 text-sm text-fest-muted">
                Submit the interest form until the official link is published.
              </p>
            </li>
          </ol>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/register"
              className="btn-primary rounded-xl px-5 py-2.5 text-sm no-underline"
            >
              Register interest
            </Link>
            <ComingSoon label="2026 category rules forthcoming" />
          </div>
        </div>
      </Section>
    </main>
  );
}
