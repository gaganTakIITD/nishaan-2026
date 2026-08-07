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
        <div className="mt-10">
          <CampusMap />
        </div>

        <h2 className="mt-20 text-xs font-semibold uppercase tracking-[0.18em] text-oae-primary">
          Text alternative — access points
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-pretty text-oae-muted">
          Equivalent information for screen reader users and anyone who prefers a
          list over the diagram.
        </p>
        <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {mapPoints.map((point) => (
            <li
              key={point.id}
              id={`map-${point.id}`}
              className="group imprint-tile scroll-mt-28 p-5 sm:p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-oae-primary">
                {point.type}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-balance text-oae-text transition-colors duration-300 group-hover:text-oae-primary">
                {point.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-pretty text-oae-muted">
                {point.detail}
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
