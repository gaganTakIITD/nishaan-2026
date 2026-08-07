import type { Metadata } from "next";
import { ComingSoon, PageHeader, Section } from "@/components/ui/PageChrome";
import { mapPoints } from "@/content/team";
import { CampusMap } from "./CampusMap";

export const metadata: Metadata = {
  title: "Campus Accessibility Map",
  description:
    "Accessible routes, ramps, venues, and e-rickshaw points for NISHAAN at IIT Delhi.",
};

export default function AccessibilityMapPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Campus Map"
        title="Find your way"
        description="Access-related points on the IIT Delhi campus. A detailed graphic map will replace this shell when available."
      />
      <Section>
        <ComingSoon label="Official map graphic forthcoming" />
        <div className="mt-8">
          <CampusMap />
        </div>

        <h2 className="mt-16 font-display text-sm font-semibold uppercase tracking-[0.18em] text-nishaan-leaf-deep">
          Text alternative — access points
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-nishaan-muted">
          Equivalent information for screen reader users and anyone who prefers a
          list over the diagram.
        </p>
        <ul className="mt-8 divide-y divide-[var(--border)]">
          {mapPoints.map((point) => (
            <li key={point.id} id={`map-${point.id}`} className="scroll-mt-28 py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-nishaan-gold">
                {point.type}
              </p>
              <h3 className="mt-1 font-display text-xl font-semibold text-nishaan-ink">
                {point.name}
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-nishaan-muted">
                {point.detail}
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
