import type { Metadata } from "next";
import Link from "next/link";
import { PhotoShowcase } from "@/components/home/PhotoShowcase";
import { ComingSoon, PageHeader, Section } from "@/components/ui/PageChrome";
import { history, media, site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "What NISHAAN is, its history from 2024 to 2026, and the Office of Accessible Education.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="About NISHAAN"
        title="A mark of belonging"
        description="An annual inclusive cultural event at IIT Delhi celebrating the creativity, diversity, and talent of students with disabilities."
        image={{
          src: media.chapter.about,
          alt: "Recognition moment at NISHAAN",
        }}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <article className="space-y-6 text-lg leading-relaxed text-fest-muted lg:col-span-7">
            <p className="text-pretty">
              Organised by the{" "}
              <a
                href={site.oaeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-oae-primary-dark underline decoration-oae-primary/30 underline-offset-4 transition-all duration-300 hover:decoration-oae-primary"
              >
                Office of Accessible Education (OAE)
              </a>{" "}
              under the Office of Diversity &amp; Inclusion, NISHAAN is not IIT
              Delhi&apos;s flagship student cultural festival (Rendezvous). It is
              a dedicated accessibility-and-inclusion cultural platform.
            </p>
            <p className="text-pretty">
              Students with disabilities — from IIT Delhi and colleges across
              Delhi — take the stage through music, dance, drama, painting,
              photography, and Wordsmith (poetry &amp; essay).
            </p>
            <p className="text-pretty">
              NISHAAN sits alongside{" "}
              <strong className="font-semibold text-fest-ink">SANGAM</strong>,
              OAE&apos;s inclusive sports meet, as part of the institute&apos;s
              cultural and extracurricular inclusion calendar.
            </p>
          </article>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="imprint-tile p-6 sm:p-7">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-fest-warm">
                Editions
              </h2>
              <ol className="mt-6 space-y-0">
                {history.map((h) => (
                  <li
                    key={h.year}
                    className="border-l-2 border-fest-rule py-5 pl-5 first:pt-0 last:pb-0"
                  >
                    <p className="font-display text-2xl font-semibold tracking-tight text-fest-ink">
                      {h.year}
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-fest-muted">
                      Edition {h.edition}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-fest-muted">
                      {h.notes}
                    </p>
                  </li>
                ))}
              </ol>
              <div className="mt-6">
                <ComingSoon label="2026 programme details forthcoming" />
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <div id="past-photos">
        <PhotoShowcase
          eyebrow="Gallery"
          title="Photos from previous events"
          description="Moments from previous NISHAAN editions on the IIT Delhi campus — click any frame to enlarge."
        />
      </div>

      <Section>
        <Link
          href="/vision"
          className="inline-flex items-center gap-2 text-base font-semibold text-oae-primary transition-all duration-300 hover:gap-3"
        >
          Read our vision
          <span aria-hidden="true">→</span>
        </Link>
      </Section>
    </main>
  );
}
