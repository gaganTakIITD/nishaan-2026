"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

const slides = [
  {
    title: "NISHAAN 2026",
    location: "Indian Institute of Technology, Delhi",
    description: site.headline,
    image: "/media/hero-stage.svg",
  },
  {
    title: "Celebrating talent & inclusion",
    location: "Office of Accessible Education",
    description: site.supporting,
    image: "/media/chapter-events.svg",
  },
  {
    title: "A mark of belonging",
    location: "Students with disabilities across Delhi",
    description: "Music · Dance · Drama · Art · Photography · Wordsmith",
    image: "/media/chapter-about.svg",
  },
] as const;

/** OAE-style hero carousel */
export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  const slide = slides[index]!;

  return (
    <section aria-label="NISHAAN banner" className="relative w-full bg-oae-sage">
      <div className="relative min-h-[22rem] w-full overflow-hidden sm:min-h-[28rem] lg:min-h-[32rem]">
        {slides.map((s, i) => (
          <div
            key={s.title}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={s.image}
              alt=""
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/15" />
          </div>
        ))}

        <div className="shell relative flex min-h-[22rem] flex-col justify-end pb-10 pt-16 text-white sm:min-h-[28rem] sm:pb-12 lg:min-h-[32rem]">
          <p className="animate-brand-reveal text-sm font-medium text-oae-mint">
            {slide.location}
          </p>
          <h1 className="animate-brand-reveal-delay mt-2 max-w-3xl text-3xl font-bold sm:text-4xl lg:text-5xl">
            {slide.title}
          </h1>
          <p className="animate-brand-reveal-delay-2 mt-3 max-w-xl text-base text-white/90 sm:text-lg">
            {slide.description}
          </p>
          <div className="animate-brand-reveal-delay-2 mt-6 flex flex-wrap gap-3">
            <Link
              href="/register"
              className="btn-primary rounded-md px-5 py-2.5 text-sm font-semibold no-underline"
            >
              Register
            </Link>
            <Link
              href="/events"
              className="rounded-md border border-white/80 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white no-underline backdrop-blur-sm hover:bg-white/20"
            >
              View events
            </Link>
          </div>
        </div>
      </div>

      <div className="shell flex justify-center gap-2 py-3" role="tablist" aria-label="Banner slides">
        {slides.map((s, i) => (
          <button
            key={s.title}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Slide ${i + 1}: ${s.title}`}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index ? "bg-oae-primary" : "bg-oae-sage"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
