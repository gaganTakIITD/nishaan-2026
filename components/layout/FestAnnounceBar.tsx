import Link from "next/link";
import { site } from "@/content/site";

/** Slim fest ticker — clarity borrowed from inclusive fest announcements (e.g. SANGAM) */
export function FestAnnounceBar() {
  return (
    <div className="border-b border-white/15 bg-oae-primary text-white">
      <div className="shell flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-2 text-sm">
        <p className="min-w-0 leading-snug">
          <span className="font-semibold tracking-wide">
            {site.name} {site.year}
          </span>
          <span className="mx-2 opacity-50" aria-hidden="true">
            ·
          </span>
          <span className="text-white/90">{site.dateLabel}</span>
          <span className="mx-2 hidden opacity-50 sm:inline" aria-hidden="true">
            ·
          </span>
          <span className="hidden text-white/90 sm:inline">{site.venue}</span>
        </p>
        <Link
          href="/register"
          className="shrink-0 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-oae-primary no-underline transition-opacity hover:opacity-90"
        >
          Register interest →
        </Link>
      </div>
    </div>
  );
}
