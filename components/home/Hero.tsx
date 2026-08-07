"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { eventCategories } from "@/content/events";
import { festStats } from "@/content/fest";
import { heroSlides, media, site } from "@/content/site";

export function Hero() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  const slide = heroSlides[index]!;
  const marquee = [...eventCategories, ...eventCategories];

  return (
    <section
      aria-label="NISHAAN banner"
      className="relative w-full overflow-hidden border-b border-fest-rule bg-fest-paper"
    >
      <div className="shell relative grid items-stretch gap-8 py-10 sm:py-12 lg:grid-cols-12 lg:gap-10 lg:py-14">
        <div className="flex min-w-0 flex-col justify-center lg:col-span-5">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-fest-rule bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-oae-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-oae-primary" aria-hidden="true" />
            {site.year} edition · Inclusive cultural fest
          </div>

          <p
            className="mt-5 font-display text-3xl font-semibold tracking-tight text-fest-warm sm:text-4xl"
            lang="hi"
          >
            {site.nameHi}
          </p>

          <h1 className="mt-1 font-display text-[clamp(2.85rem,8vw,5.75rem)] font-bold leading-[0.92] tracking-tight text-balance text-fest-ink">
            {site.name}
            <span className="ml-2 align-top text-xl font-semibold text-fest-muted sm:text-2xl lg:text-3xl">
              {site.year}
            </span>
          </h1>

          <p className="mt-3 text-sm font-medium text-fest-muted">
            {site.editionLabel}
          </p>

          <p
            key={slide.title}
            className="mt-4 max-w-lg text-base leading-relaxed text-pretty text-fest-muted sm:text-lg"
          >
            {slide.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/register"
              className="btn-primary rounded-xl px-6 py-3 text-sm no-underline"
            >
              Register interest
            </Link>
            <Link
              href="/events"
              className="btn-secondary rounded-xl px-6 py-3 text-sm no-underline"
            >
              Browse events
            </Link>
          </div>

          <p className="mt-6 text-sm text-fest-muted">
            {site.dateLabel}
            <span className="mx-2 text-fest-rule" aria-hidden="true">
              ·
            </span>
            {site.venue}
          </p>

          <div
            className="mt-5 flex gap-2"
            role="tablist"
            aria-label="Banner slides"
          >
            {heroSlides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Slide ${i + 1}: ${s.title}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-oae-primary"
                    : "w-2 bg-fest-rule hover:bg-oae-primary/40"
                }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="relative min-h-[20rem] overflow-hidden rounded-2xl border border-fest-rule bg-fest-field shadow-[0_20px_50px_rgba(28,26,23,0.08)] sm:min-h-[24rem] lg:col-span-7 lg:min-h-[28rem]">
          <Image
            src={media.hero.src}
            alt={media.hero.alt}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent p-5 pt-24 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-fest-warm-soft">
              From previous editions
            </p>
            <p className="mt-1 font-display text-xl font-semibold text-white sm:text-2xl">
              Talent, belonging, and the stage
            </p>
            <p className="mt-1.5 max-w-md text-sm leading-relaxed text-white/85">
              Inclusive performances that bring students with disabilities onto
              a shared cultural platform.
            </p>
          </div>
        </div>
      </div>

      {/* Scale strip — fest clarity (inspired by SANGAM’s clear event framing) */}
      <div className="border-t border-fest-rule bg-white">
        <ul className="shell grid grid-cols-2 divide-x divide-fest-rule lg:grid-cols-4">
          {festStats.map((stat) => (
            <li key={stat.label} className="px-4 py-5 sm:px-6 sm:py-6">
              <p className="font-display text-2xl font-semibold tracking-tight text-fest-ink sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-fest-muted">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="border-t border-fest-rule bg-fest-field/90"
        aria-label="Event categories"
      >
        <div className="overflow-hidden py-3.5">
          <div className="imprint-marquee-track gap-8 px-4 text-sm font-medium tracking-wide text-fest-muted">
            {marquee.map((cat, i) => (
              <span
                key={`${cat.slug}-${i}`}
                className="inline-flex items-center gap-8"
              >
                <span>{cat.title}</span>
                <span className="text-fest-warm" aria-hidden="true">
                  ✦
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
