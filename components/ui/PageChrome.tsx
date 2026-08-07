import Image from "next/image";
import type { ReactNode } from "react";

/** OAE-style page masthead — soft mint, never black */
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
    <header className="w-full border-b border-[var(--border)] bg-oae-mint">
      {image ? (
        <div className="relative">
          <div className="absolute inset-0 opacity-30" aria-hidden="true">
            <Image src={image.src} alt="" fill className="object-cover" sizes="100vw" priority />
          </div>
          <div className="shell relative py-10 sm:py-12">
            {eyebrow ? (
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-oae-primary">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="max-w-3xl text-3xl font-bold text-nishaan-ink sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 max-w-2xl text-nishaan-muted">{description}</p>
          </div>
        </div>
      ) : (
        <div className="shell py-10 sm:py-12">
          {eyebrow ? (
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-oae-primary">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-3xl text-3xl font-bold text-nishaan-ink sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-nishaan-muted">{description}</p>
        </div>
      )}
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
    <Tag id={id} className={`shell py-10 sm:py-12 ${className}`}>
      {children}
    </Tag>
  );
}

export function ComingSoon({ label = "Details forthcoming" }: { label?: string }) {
  return (
    <p className="text-sm text-nishaan-muted" role="status">
      {label}
    </p>
  );
}
