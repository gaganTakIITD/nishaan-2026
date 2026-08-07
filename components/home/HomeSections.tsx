"use client";

import Image from "next/image";
import Link from "next/link";
import { pastGallery } from "@/content/gallery";
import { eventCategories } from "@/content/events";
import { site } from "@/content/site";

/** Home built like OAE: mint sections + white cards */
export function HomeSections() {
  return (
    <div>
      {/* About strip */}
      <section className="w-full bg-white py-12 sm:py-16">
        <div className="shell grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-nishaan-ink sm:text-3xl">
              About {site.name}
            </h2>
            <p className="mt-4 text-nishaan-muted">
              NISHAAN is IIT Delhi&apos;s annual inclusive cultural event organised
              by the Office of Accessible Education. Students with disabilities
              from colleges across Delhi showcase talent in music, dance, drama,
              painting, photography, and Wordsmith.
            </p>
            <Link
              href="/about"
              className="btn-primary mt-6 inline-flex rounded-md px-4 py-2 text-sm font-semibold no-underline"
            >
              Learn more
            </Link>
          </div>
          <div className="oae-card overflow-hidden p-0">
            <div className="relative aspect-[16/10] bg-oae-mint">
              <Image
                src="/media/chapter-about.svg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events — OAE card grid */}
      <section className="oae-section-mint w-full py-12 sm:py-16">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-nishaan-ink sm:text-3xl">
                Events
              </h2>
              <p className="mt-2 text-nishaan-muted">
                Cultural categories for NISHAAN {site.year}
              </p>
            </div>
            <Link href="/events" className="text-sm font-semibold text-oae-primary underline">
              View all
            </Link>
          </div>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {eventCategories.map((cat) => (
              <li key={cat.slug}>
                <Link href={`/events#${cat.slug}`} className="oae-card block h-full p-5 no-underline">
                  <h3 className="text-lg font-semibold text-nishaan-ink">{cat.title}</h3>
                  <p className="mt-2 text-sm text-nishaan-muted">{cat.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Past editions gallery — like OAE Events cards for NISHAAN 2024/2025 */}
      <section className="w-full bg-white py-12 sm:py-16">
        <div className="shell">
          <h2 className="text-2xl font-bold text-nishaan-ink sm:text-3xl">
            Past editions
          </h2>
          <p className="mt-2 max-w-2xl text-nishaan-muted">
            Photos from previous NISHAAN events (2023–2025). Replace placeholders
            with official photographs in <code className="text-sm">public/media/past/</code>.
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pastGallery.map((item) => (
              <li key={item.id} className="oae-card overflow-hidden p-0">
                <div className="relative aspect-[4/3] bg-oae-mint">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-nishaan-ink">
                    NISHAAN {item.year}
                  </h3>
                  <p className="mt-1 text-sm text-nishaan-muted">{item.caption}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Schedule / CTA — soft sage like OAE accent sections */}
      <section className="oae-section-sage w-full py-12 sm:py-16">
        <div className="shell grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-nishaan-ink sm:text-3xl">
              Schedule & registration
            </h2>
            <p className="mt-3 text-nishaan-muted">
              {site.dateLabel} · {site.venue}. Register your interest and review
              participation guidelines.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/schedule"
              className="btn-primary rounded-md px-5 py-2.5 text-sm font-semibold no-underline"
            >
              View schedule
            </Link>
            <Link
              href="/register"
              className="rounded-md border-2 border-oae-primary bg-white px-5 py-2.5 text-sm font-semibold text-oae-primary no-underline hover:bg-oae-mint"
            >
              Register
            </Link>
            <Link
              href="/accessibility-map"
              className="rounded-md border border-[var(--border)] bg-white px-5 py-2.5 text-sm font-semibold text-nishaan-ink no-underline"
            >
              Campus map
            </Link>
          </div>
        </div>
      </section>

      {/* Organised by OAE */}
      <section className="w-full bg-white py-12">
        <div className="shell text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-nishaan-muted">
            Organised by
          </p>
          <p className="mt-2 text-xl font-semibold text-nishaan-ink">
            Office of Accessible Education
          </p>
          <a
            href={site.oaeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-oae-primary underline"
          >
            Visit oae.iitd.ac.in
          </a>
        </div>
      </section>
    </div>
  );
}
