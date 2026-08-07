import type { Metadata } from "next";
import { ComingSoon, PageHeader, Section } from "@/components/ui/PageChrome";
import { facultyTeam, studentTeamPlaceholders } from "@/content/team";

export const metadata: Metadata = {
  title: "Organising Team",
  description: "Faculty and student organisers of NISHAAN 2026.",
};

export default function TeamPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Meet the team"
        title="Organising team"
        description="Faculty leadership from OAE / ODI. Student coordinator roles will be announced for 2026."
      />
      <Section>
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-oae-primary">
          Faculty
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {facultyTeam.map((person) => (
            <li key={person.name} className="group imprint-tile p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-oae-mint font-display text-lg font-semibold text-oae-primary transition-all duration-300 group-hover:bg-oae-primary group-hover:text-white">
                {person.name
                  .split(" ")
                  .filter((p) => p.startsWith("Prof") === false)
                  .map((p) => p[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-balance text-oae-text transition-colors duration-300 group-hover:text-oae-primary">
                {person.name}
              </h3>
              <p className="mt-2 text-sm font-semibold text-oae-primary">
                {person.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-oae-muted">
                {person.note}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-oae-primary">
            Student team
          </h2>
          <ComingSoon label="Names and photographs forthcoming" />
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
