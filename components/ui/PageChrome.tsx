import Image from "next/image";
import type { ReactNode } from "react";

export function PageHeader({
  title,
  description,
  eyebrow,
  image,
}: {
  title: string;
  description: string;
  eyebrow?: string;
  image?: { src: string; alt: string };
}) {
  return (
    <header className="relative w-full overflow-hidden border-b border-fest-rule bg-fest-field">
      <div
        className="pointer-events-none absolute -right-10 top-0 h-48 w-48 rounded-full border border-fest-rule/70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 h-24 w-[40%] border-t border-fest-warm/40"
        aria-hidden="true"
      />
      {image ? (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          aria-hidden="true"
        >
          <Image
            src={image.src}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      ) : null}

      <div className="shell relative py-10 sm:py-12 lg:py-14">
        {eyebrow ? (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-oae-primary">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-4xl font-display text-3xl font-bold tracking-tight text-balance text-fest-ink sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-pretty text-fest-muted sm:text-lg">
          {description}
        </p>
      </div>
    </header>
  );
}

export function Section({
  children,
  className = "",
  id,
  as: Tag = "section",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "article";
}) {
  return (
    <Tag id={id} className={`shell py-12 md:py-14 lg:py-16 ${className}`}>
      {children}
    </Tag>
  );
}

export function ComingSoon({
  label = "Details forthcoming",
}: {
  label?: string;
}) {
  return (
    <p
      className="inline-flex items-center gap-2 rounded-xl border border-fest-rule bg-white px-3 py-1.5 text-sm text-fest-muted"
      role="status"
    >
      <span
        className="h-1.5 w-1.5 rounded-full bg-fest-warm"
        aria-hidden="true"
      />
      {label}
    </p>
  );
}
