"use client";

import Image from "next/image";
import Link from "next/link";
import { PhotoShowcase } from "@/components/home/PhotoShowcase";
import { eventCovers, pastGallery } from "@/content/gallery";
import { eventCategories } from "@/content/events";
import { oaeFamily } from "@/content/fest";
import { history, media, site } from "@/content/site";

export function HomeSections() {
  const featuredPast = pastGallery[0]!;
  const otherPast = pastGallery.slice(1);

  return (
    <div>
      <section className="w-full bg-white py-12 md:py-16 lg:py-20">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fest-warm">
              About the Fest
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-balance text-fest-ink sm:text-4xl lg:text-5xl">
              A mark of belonging
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-pretty text-fest-muted sm:text-lg">
              NISHAAN is IIT Delhi&apos;s annual inclusive cultural event organised
              by the Office of Accessible Education. Students with disabilities
              from colleges across Delhi showcase talent in music, dance, drama,
              painting, photography, and Wordsmith.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-fest-muted">
              Distinct from Rendezvous — a dedicated platform for belonging,
              visibility, and creative excellence. Alongside SANGAM (OAE&apos;s
              sports fest), NISHAAN is the cultural imprint of inclusive campus
              life at IIT Delhi.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="btn-primary inline-flex rounded-xl px-5 py-2.5 text-sm no-underline"
              >
                Learn More
              </Link>
              <Link
                href="/vision"
                className="btn-secondary inline-flex rounded-xl px-5 py-2.5 text-sm no-underline"
              >
                Our Vision
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="imprint-tile flex h-full min-h-[12rem] flex-col justify-end px-6 py-7 sm:px-8 sm:py-8">
              <p className="font-display text-3xl font-semibold tracking-tight text-fest-ink sm:text-4xl">
                {site.name}{" "}
                <span lang="hi" className="text-fest-warm">
                  {site.nameHi}
                </span>
              </p>
              <p className="mt-2 text-sm text-fest-muted">{site.editionLabel}</p>
            </div>
          </div>
        </div>

        <div className="shell mt-12">
          <ol className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
            {history.map((h) => (
              <li
                key={h.year}
                className="imprint-tile border-l-4 border-l-fest-warm bg-fest-paper px-4 py-4"
              >
                <p className="font-display text-2xl font-semibold text-fest-ink">
                  {h.year}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-fest-muted">
                  Edition {h.edition}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-fest-muted">
                  {h.notes}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="w-full border-y border-fest-rule bg-fest-paper py-12 md:py-16">
        <div className="shell">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-oae-primary">
              Participate
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-balance text-fest-ink sm:text-4xl">
              How to join NISHAAN
            </h2>
            <p className="mt-2 text-base leading-relaxed text-fest-muted">
              Three clear steps — the same clarity you&apos;d expect from an
              inclusive campus fest registration flow.
            </p>
          </div>
          <ol className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Pick a Category",
                body: "Music, Dance, Drama, Art, Photography, or Wordsmith — choose where you want to shine.",
                href: "/events",
                cta: "Browse Events",
              },
              {
                step: "02",
                title: "Read Guidelines",
                body: "Check eligibility and note any accessibility support you need on campus.",
                href: "/guidelines",
                cta: "Open Guidelines",
              },
              {
                step: "03",
                title: "Register Interest",
                body: "Submit the interest form until the official registration link is published.",
                href: "/register",
                cta: "Register Now",
              },
            ].map((item) => (
              <li key={item.step} className="imprint-tile flex flex-col p-5 sm:p-6">
                <span className="font-display text-sm tabular-nums text-fest-warm">
                  {item.step}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-fest-ink">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-fest-muted">
                  {item.body}
                </p>
                <Link
                  href={item.href}
                  className="mt-5 text-sm font-semibold text-oae-primary no-underline hover:underline"
                >
                  {item.cta} →
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="imprint-field w-full border-b border-fest-rule py-12 md:py-16 lg:py-20">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-oae-primary">
                Programme
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-balance text-fest-ink sm:text-4xl">
                Cultural Categories
              </h2>
              <p className="mt-2 text-base leading-relaxed text-fest-muted">
                Six showcases for NISHAAN {site.year} — pick a format, then
                register your interest.
              </p>
            </div>
            <Link
              href="/events"
              className="text-sm font-semibold text-oae-primary underline decoration-oae-primary/30 underline-offset-4 transition-colors hover:decoration-oae-primary"
            >
              View All Events →
            </Link>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {eventCategories.map((cat, i) => (
              <li key={cat.slug}>
                <Link
                  href={`/events#${cat.slug}`}
                  className="group imprint-tile flex h-full flex-col overflow-hidden no-underline"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-fest-field">
                    <Image
                      src={eventCovers[cat.slug] ?? "/media/hero/stage.jpg"}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
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
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-fest-ink transition-colors group-hover:text-oae-primary">
                      {cat.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-fest-muted">
                      {cat.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-oae-primary">
                      Explore {cat.title}
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative w-full overflow-hidden">
        <div className="relative min-h-[18rem] sm:min-h-[22rem] lg:min-h-[26rem]">
          <Image
            src={media.hero.src}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-fest-ink/80 via-fest-ink/55 to-fest-ink/25" />
          <div className="shell relative flex h-full min-h-[18rem] items-end py-10 sm:min-h-[22rem] sm:py-12 lg:min-h-[26rem] lg:py-14">
            <div className="max-w-xl text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fest-warm-soft">
                The stage is shared
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Where every performance leaves a mark
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
                From first rehearsal to final applause — NISHAAN centres dignity,
                access, and creative excellence.
              </p>
              <Link
                href="/about#past-photos"
                className="mt-6 inline-flex rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-fest-ink no-underline transition-opacity hover:opacity-90"
              >
                See Past Moments →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PhotoShowcase />

      <section className="w-full border-y border-fest-rule bg-white py-12 md:py-16">
        <div className="shell">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fest-warm">
              OAE at IIT Delhi
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-balance text-fest-ink sm:text-4xl">
              Culture &amp; sport, same commitment
            </h2>
            <p className="mt-2 text-base leading-relaxed text-fest-muted">
              Inspired by how SANGAM frames inclusive competition with clarity —
              NISHAAN brings the same institutional care to the cultural stage.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {oaeFamily.map((fest) => {
              const inner = (
                <>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-display text-2xl font-semibold text-fest-ink">
                        {fest.name}{" "}
                        <span className="text-fest-warm" lang="hi">
                          {fest.nameHi}
                        </span>
                      </p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-oae-primary">
                        {fest.kind}
                      </p>
                    </div>
                    {fest.current ? (
                      <span className="rounded-lg bg-oae-primary px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-white">
                        You are here
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-fest-muted">
                    {fest.blurb}
                  </p>
                  {!fest.current ? (
                    <span className="mt-5 inline-flex text-sm font-semibold text-oae-primary">
                      Learn on OAE →
                    </span>
                  ) : null}
                </>
              );

              return (
                <li key={fest.name}>
                  {fest.current ? (
                    <div className="imprint-tile h-full border-oae-primary/35 bg-fest-field/40 p-6 sm:p-7">
                      {inner}
                    </div>
                  ) : (
                    <a
                      href={fest.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="imprint-tile group flex h-full flex-col p-6 no-underline sm:p-7"
                    >
                      {inner}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="w-full bg-fest-paper py-12 md:py-16 lg:py-20">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fest-warm">
                Archive
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-balance text-fest-ink sm:text-4xl">
                Past Editions
              </h2>
              <p className="mt-2 text-base leading-relaxed text-pretty text-fest-muted">
                A look back at NISHAAN on campus — stages, stories, and shared
                celebration.
              </p>
            </div>
            <Link
              href="/about#past-photos"
              className="text-sm font-semibold text-oae-primary underline decoration-oae-primary/30 underline-offset-4"
            >
              More on About →
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
            <article className="group imprint-tile overflow-hidden lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden bg-fest-field lg:aspect-auto lg:min-h-[22rem]">
                <Image
                  src={featuredPast.src}
                  alt={featuredPast.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
              <div className="flex items-baseline justify-between gap-3 border-t border-fest-rule px-5 py-4">
                <div>
                  <h3 className="font-display text-xl font-semibold text-fest-ink">
                    NISHAAN {featuredPast.year}
                  </h3>
                  <p className="mt-0.5 text-sm text-fest-muted">
                    {featuredPast.caption}
                  </p>
                </div>
                <span className="text-sm font-medium text-fest-warm">
                  {featuredPast.year}
                </span>
              </div>
            </article>

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {otherPast.slice(0, 3).map((item) => (
                <li
                  key={item.id}
                  className="group imprint-tile grid grid-cols-[7.5rem_1fr] overflow-hidden sm:grid-cols-[9rem_1fr]"
                >
                  <div className="relative min-h-[5.5rem] bg-fest-field">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="150px"
                    />
                  </div>
                  <div className="flex flex-col justify-center px-4 py-3">
                    <h3 className="font-semibold tracking-tight text-fest-ink transition-colors group-hover:text-oae-primary">
                      NISHAAN {item.year}
                    </h3>
                    <p className="mt-0.5 text-sm text-fest-muted">{item.caption}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="imprint-warm w-full border-y border-fest-rule py-12 md:py-14">
        <div className="shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance text-fest-ink sm:text-4xl">
              Ready to take the stage?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-pretty text-fest-muted">
              {site.dateLabel} · {site.venue}. Register your interest, review
              guidelines, and explore the campus map.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/register"
              className="btn-primary rounded-xl px-5 py-2.5 text-sm no-underline"
            >
              Register Interest
            </Link>
            <Link
              href="/schedule"
              className="btn-secondary rounded-xl px-5 py-2.5 text-sm no-underline"
            >
              View Schedule
            </Link>
            <Link
              href="/accessibility-map"
              className="rounded-xl border border-fest-rule bg-white px-5 py-2.5 text-sm font-semibold text-fest-ink no-underline transition-all duration-300 hover:border-oae-primary/40"
            >
              Campus Map
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-12 md:py-14">
        <div className="shell flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fest-muted">
            Organised by
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            <a
              href={site.oaeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center no-underline"
            >
              <Image
                src="/brand/oae-logo.png"
                alt="Office of Accessible Education, IIT Delhi"
                width={160}
                height={160}
                className="h-28 w-auto object-contain"
              />
              <p className="mt-3 font-display text-lg font-semibold tracking-tight text-fest-ink sm:text-xl">
                Office of Accessible Education
              </p>
              <span className="mt-1 text-sm text-oae-primary underline decoration-oae-primary/30 underline-offset-4">
                oae.iitd.ac.in
              </span>
            </a>
            <a
              href={site.odiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center no-underline"
            >
              <Image
                src="/brand/odi-logo.png"
                alt="Office of Diversity and Inclusion, IIT Delhi"
                width={220}
                height={102}
                className="h-20 w-auto object-contain sm:h-24"
              />
              <p className="mt-3 font-display text-lg font-semibold tracking-tight text-fest-ink sm:text-xl">
                Office of Diversity &amp; Inclusion
              </p>
              <span className="mt-1 text-sm text-oae-primary underline decoration-oae-primary/30 underline-offset-4">
                odi.iitd.ac.in
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
