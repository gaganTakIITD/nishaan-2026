import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ComingSoon, PageHeader, Section } from "@/components/ui/PageChrome";
import { pastGallery } from "@/content/gallery";
import { history, media, site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "What NISHAAN is, its history from 2023 to 2026, and the Office of Accessible Education.",
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
          alt: "Chapter atmosphere for About NISHAAN",
        }}
      />
      <Section>
        <div className="grid gap-16 lg:grid-cols-12">
          <article className="space-y-5 text-lg text-nishaan-muted lg:col-span-7">
            <p>
              Organised by the{" "}
              <a
                href={site.oaeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-nishaan-leaf-deep underline-offset-2 hover:underline"
              >
                Office of Accessible Education (OAE)
              </a>{" "}
              under the Office of Diversity &amp; Inclusion, NISHAAN is not IIT
              Delhi&apos;s flagship student cultural festival (Rendezvous). It is
              a dedicated accessibility-and-inclusion cultural platform.
            </p>
            <p>
              Students with disabilities — from IIT Delhi and colleges across
              Delhi — take the stage through music, dance, drama, painting,
              photography, and Wordsmith (poetry &amp; essay).
            </p>
            <p>
              NISHAAN sits alongside{" "}
              <strong className="font-medium text-nishaan-ink">SANGAM</strong>,
              OAE&apos;s inclusive sports meet, as part of the institute&apos;s
              cultural and extracurricular inclusion calendar.
            </p>
          </article>

          <aside className="lg:col-span-4 lg:col-start-9">
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-nishaan-leaf-deep">
              Editions
            </h2>
            <ol className="mt-6 space-y-0">
              {history.map((h) => (
                <li
                  key={h.year}
                  className="border-l border-nishaan-ink/20 py-5 pl-5 first:pt-0"
                >
                  <p className="font-display text-2xl font-semibold text-nishaan-ink">
                    {h.year}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-nishaan-muted">
                    Edition {h.edition}
                  </p>
                  <p className="mt-2 text-sm text-nishaan-muted">{h.notes}</p>
                </li>
              ))}
            </ol>
            <ComingSoon label="2026 programme details forthcoming" />
          </aside>
        </div>
      </Section>

      <section
        className="section-mist w-full border-y border-[var(--border)]"
        aria-labelledby="past-photos"
      >
        <div className="shell py-14">
          <h2
            id="past-photos"
            className="font-display text-2xl font-semibold text-nishaan-ink sm:text-3xl"
          >
            Photos from previous events
          </h2>
          <p className="mt-2 max-w-2xl text-nishaan-muted">
            Official photographs from NISHAAN 2023–2025 will replace these frames.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pastGallery.map((item) => (
              <li
                key={item.id}
                className="overflow-hidden border border-[var(--border)] bg-white"
              >
                <div className="relative aspect-[3/2]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="flex justify-between px-3 py-2 text-sm">
                  <span className="text-nishaan-ink">{item.caption}</span>
                  <span className="text-nishaan-leaf">{item.year}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Section>
        <Link href="/vision" className="font-semibold text-nishaan-leaf-deep">
          Read our vision →
        </Link>
      </Section>
    </main>
  );
}
