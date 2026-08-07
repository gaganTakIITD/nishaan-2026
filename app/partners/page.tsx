import type { Metadata } from "next";
import Link from "next/link";
import { ComingSoon, PageHeader, Section } from "@/components/ui/PageChrome";
import { partners } from "@/content/team";

export const metadata: Metadata = {
  title: "Partners & Sponsors",
  description: "Institutional partners and sponsors of NISHAAN 2026.",
};

export default function PartnersPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Partners"
        title="Partners & sponsors"
        description="Institutional anchors for NISHAAN. Sponsor marks will appear here when confirmed."
      />
      <Section>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {partners.map((p) => (
            <li key={p.name}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group imprint-tile flex h-full flex-col p-6 no-underline sm:p-8"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-oae-primary">
                  {p.type}
                </span>
                <span className="mt-4 font-display text-xl font-semibold tracking-tight text-balance text-oae-text transition-colors duration-300 group-hover:text-oae-primary sm:text-2xl">
                  {p.name}
                </span>
                <span className="mt-auto pt-6 text-sm font-semibold text-oae-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Visit site →
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-16 imprint-tile border-fest-warm/30 bg-fest-warm-soft/40 p-8 sm:p-10">
          <ComingSoon label="Sponsor logos forthcoming" />
          <p className="mt-4 max-w-md text-base leading-relaxed text-fest-muted">
            Interested in supporting NISHAAN 2026?{" "}
            <Link
              href="/contact"
              className="font-semibold text-oae-primary-dark underline decoration-oae-primary/30 underline-offset-4"
            >
              Contact OAE
            </Link>
            .
          </p>
        </div>
      </Section>
    </main>
  );
}
