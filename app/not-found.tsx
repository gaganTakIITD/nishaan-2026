import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <div className="shell flex flex-1 flex-col items-start justify-center py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-oae-primary">
          404
        </p>
        <h1 className="mt-3 max-w-xl font-display text-4xl font-bold tracking-tight text-balance text-fest-ink sm:text-5xl">
          This page left no mark
        </h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-pretty text-fest-muted sm:text-lg">
          The link may be outdated, or the page has moved. Head home or browse
          events to continue.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="btn-primary rounded-xl px-5 py-2.5 text-sm no-underline"
          >
            Back to Home
          </Link>
          <Link
            href="/events"
            className="btn-secondary rounded-xl px-5 py-2.5 text-sm no-underline"
          >
            Browse Events
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-fest-rule bg-white px-5 py-2.5 text-sm font-semibold text-fest-ink no-underline hover:bg-fest-field"
          >
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
