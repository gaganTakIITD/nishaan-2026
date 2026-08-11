import type { Metadata } from "next";
import Image from "next/image";
import { ComingSoon, PageHeader, Section } from "@/components/ui/PageChrome";
import { oaeTeam, studentTeamPlaceholders } from "@/content/team";

export const metadata: Metadata = {
  title: "Organising Team",
  description:
    "Office of Accessible Education team organising NISHAAN 2026 at IIT Delhi.",
};

export default function TeamPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Meet the Team"
        title="Our Team"
        description="The Office of Accessible Education team behind NISHAAN — faculty leadership, consultants, and campus representation."
      />
      <Section>
        <h2 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-oae-primary">
          Our Team
        </h2>
        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {oaeTeam.map((person) => (
            <li
              key={person.name}
              className="group flex flex-col items-center rounded-2xl border border-fest-rule bg-white px-6 py-8 text-center shadow-[0_8px_24px_rgba(28,26,23,0.04)] transition-all duration-300 hover:border-oae-primary/25 hover:shadow-[0_12px_28px_rgba(27,122,61,0.08)]"
            >
              <div className="relative h-[7rem] w-[7rem] overflow-hidden rounded-full ring-[3px] ring-oae-primary/80 sm:h-32 sm:w-32">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-balance text-oae-primary sm:text-2xl">
                {person.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fest-muted">
                {person.role}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-fest-rule pt-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-oae-primary">
            Student Fest Coordinators
          </h2>
          <ComingSoon label="Names and Photographs Forthcoming" />
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {studentTeamPlaceholders.map((person) => (
            <li
              key={person.role}
              className="group imprint-tile flex flex-col gap-2 p-5 sm:p-6"
            >
              <h3 className="font-display text-lg font-semibold tracking-tight text-oae-text transition-colors duration-300 group-hover:text-oae-primary">
                {person.name}
              </h3>
              <p className="text-sm leading-relaxed text-oae-muted">
                {person.role}
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
