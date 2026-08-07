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
        <ul className="divide-y divide-[var(--border)]">
          {partners.map((p) => (
            <li key={p.name}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-1 py-8 no-underline transition hover:opacity-80 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span className="font-display text-2xl font-semibold text-nishaan-ink">
                  {p.name}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-nishaan-muted">
                  {p.type}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-16 border-t border-[var(--border)] pt-10">
          <ComingSoon label="Sponsor logos forthcoming" />
          <p className="mt-3 max-w-md text-sm text-nishaan-muted">
            Interested in supporting NISHAAN 2026?{" "}
            <Link href="/contact" className="font-medium text-nishaan-leaf-deep">
              Contact OAE
            </Link>
            .
          </p>
        </div>
      </Section>
    </main>
  );
}
