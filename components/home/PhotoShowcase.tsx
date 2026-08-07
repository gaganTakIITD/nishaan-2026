"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { showcaseGallery } from "@/content/gallery";

type Item = (typeof showcaseGallery)[number];

export function PhotoShowcase({
  eyebrow = "Moments",
  title = "Where talent takes its mark",
  description = "Scenes from previous NISHAAN editions — performance, recognition, and community.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  const [active, setActive] = useState<Item | null>(null);
  const dialogTitleId = useId();

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  const featured = showcaseGallery[0]!;
  const rest = showcaseGallery.slice(1);

  return (
    <section className="w-full border-y border-fest-rule bg-fest-paper py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-3 sm:gap-4">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fest-warm">
              {eyebrow}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-balance text-fest-ink sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-pretty text-fest-muted sm:mt-3 sm:text-lg">
              {description}
            </p>
          </div>
          <p className="hidden text-sm text-fest-muted sm:block">
            Tap any frame to enlarge
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-12 lg:gap-5">
          <button
            type="button"
            className="group relative col-span-1 overflow-hidden rounded-2xl border border-fest-rule text-left lg:col-span-7"
            onClick={() => setActive(featured)}
          >
            <div className="relative aspect-[16/10] bg-fest-field lg:aspect-auto lg:min-h-[28rem]">
              <Image
                src={featured.src}
                alt={featured.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 58vw"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent p-4 pt-14 sm:p-5 sm:pt-16">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-fest-warm-soft sm:text-xs">
                  Featured
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-white sm:text-2xl">
                  {featured.caption}
                </p>
              </div>
            </div>
          </button>

          <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-5 lg:grid-cols-2 lg:gap-5">
            {rest.slice(0, 4).map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className="group relative block w-full overflow-hidden rounded-2xl border border-fest-rule text-left"
                  onClick={() => setActive(item)}
                >
                  <div className="relative aspect-[4/3] bg-fest-field">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 1024px) 50vw, 20vw"
                    />
                  </div>
                  <span className="absolute bottom-2 left-2 rounded-xl bg-white/90 px-2 py-0.5 text-[0.65rem] font-medium text-fest-ink sm:text-xs">
                    {item.caption}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-3 grid grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-4 sm:gap-4 lg:gap-5">
          {rest.slice(4).map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className="group relative block w-full overflow-hidden rounded-2xl border border-fest-rule text-left"
                onClick={() => setActive(item)}
              >
                <div className="relative aspect-[5/4] bg-fest-field">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-2.5 pb-2 pt-8 text-[0.65rem] font-medium text-white opacity-100 sm:px-3 sm:text-xs sm:opacity-0 sm:transition-opacity sm:duration-300 sm:group-hover:opacity-100">
                  {item.caption}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {active ? (
        <div className="fixed inset-0 z-[90]" role="presentation">
          <button
            type="button"
            className="absolute inset-0 bg-fest-ink/70"
            aria-label="Close photo"
            onClick={() => setActive(null)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
            className="absolute inset-3 m-auto flex max-h-[92vh] max-w-5xl flex-col overflow-hidden rounded-2xl border border-fest-rule bg-white shadow-2xl sm:inset-8"
          >
            <div className="flex items-start justify-between gap-3 border-b border-fest-rule px-3 py-3 sm:px-4">
              <div className="min-w-0">
                <h3
                  id={dialogTitleId}
                  className="font-display text-base font-semibold text-fest-ink sm:text-lg"
                >
                  {active.caption}
                </h3>
                <p className="truncate text-xs text-fest-muted sm:text-sm">
                  {active.alt}
                </p>
              </div>
              <button
                type="button"
                className="shrink-0 rounded-xl border border-fest-rule px-3 py-1.5 text-sm font-medium text-fest-ink hover:bg-fest-field"
                onClick={() => setActive(null)}
              >
                Close
              </button>
            </div>
            <div className="relative min-h-[50vh] flex-1 bg-fest-paper sm:min-h-0">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                className="object-contain p-2 sm:p-4"
                sizes="90vw"
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
