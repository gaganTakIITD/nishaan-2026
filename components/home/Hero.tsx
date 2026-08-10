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
      <div className="shell relative grid items-stretch gap-6 py-8 sm:gap-8 sm:py-12 lg:grid-cols-12 lg:gap-10 lg:py-14">
        <div className="flex min-w-0 flex-col justify-center lg:col-span-5">
          <div className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-fest-rule bg-white px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-oae-primary sm:px-3 sm:text-xs sm:tracking-[0.14em]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-oae-primary" aria-hidden="true" />
            <span className="truncate">{site.year} edition · Inclusive fest</span>
          </div>

          <p
            className="mt-4 font-display text-2xl font-semibold tracking-tight text-fest-warm sm:mt-5 sm:text-4xl"
            lang="hi"
          >
            {site.nameHi}
          </p>

          <h1 className="mt-1 font-display text-[clamp(2.4rem,11vw,5.75rem)] font-bold leading-[0.92] tracking-tight text-balance text-fest-ink">
            {site.name}
            <span className="ml-2 align-top text-lg font-semibold text-fest-muted sm:text-2xl lg:text-3xl">
              {site.year}
            </span>
          </h1>

          <p className="mt-2 text-sm font-medium text-fest-muted sm:mt-3">
            {site.editionLabel}
          </p>

          <p
            key={slide.title}
            className="mt-3 max-w-lg text-sm leading-relaxed text-pretty text-fest-muted sm:mt-4 sm:text-lg"
          >
            {slide.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3">
            <Link
              href="/register"
              className="btn-primary rounded-xl px-5 py-2.5 text-sm no-underline sm:px-6 sm:py-3"
            >
              Register Interest
            </Link>
            <Link
              href="/events"
              className="btn-secondary rounded-xl px-5 py-2.5 text-sm no-underline sm:px-6 sm:py-3"
            >
              Browse Events
            </Link>
          </div>

          <p className="mt-4 text-xs text-fest-muted sm:mt-6 sm:text-sm">
            {site.dateLabel}
            <span className="mx-2 text-fest-rule" aria-hidden="true">
              ·
            </span>
            {site.venue}
          </p>

          <div
            className="mt-4 flex gap-2 sm:mt-5"
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

        <div className="relative min-h-[14rem] overflow-hidden rounded-2xl border border-fest-rule bg-fest-field shadow-[0_20px_50px_rgba(28,26,23,0.08)] sm:min-h-[22rem] lg:col-span-7 lg:min-h-[28rem]">
          <Image
            src={media.hero.src}
            alt={media.hero.alt}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent p-4 pt-16 sm:p-7 sm:pt-24">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-fest-warm-soft sm:text-xs">
              From previous editions
            </p>
            <p className="mt-1 font-display text-lg font-semibold text-white sm:text-2xl">
              Talent, belonging, and the stage
            </p>
            <p className="mt-1 hidden max-w-md text-sm leading-relaxed text-white/85 sm:mt-1.5 sm:block">
              Inclusive performances that bring students with disabilities onto
              a shared cultural platform.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-fest-rule bg-white">
        <ul className="shell grid grid-cols-2 divide-x divide-y divide-fest-rule sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {festStats.map((stat, i) => (
            <li
              key={stat.label}
              className={`px-3 py-4 sm:px-6 sm:py-6 ${i >= 2 ? "lg:border-t-0" : ""}`}
            >
              <p className="font-display text-xl font-semibold tracking-tight text-fest-ink sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-0.5 text-xs text-fest-muted sm:mt-1 sm:text-sm">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="border-t border-fest-rule bg-fest-field/90"
        aria-label="Event categories"
      >
        <div className="overflow-hidden py-3 sm:py-3.5">
          <div className="imprint-marquee-track gap-6 px-4 text-xs font-medium tracking-wide text-fest-muted sm:gap-8 sm:text-sm">
            {marquee.map((cat, i) => (
              <span
                key={`${cat.slug}-${i}`}
                className="inline-flex items-center gap-6 sm:gap-8"
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
