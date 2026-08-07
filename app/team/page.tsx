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
        <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-nishaan-leaf-deep">
          Faculty
        </h2>
        <ul className="mt-8 divide-y divide-[var(--border)]">
          {facultyTeam.map((person) => (
            <li
              key={person.name}
              className="grid gap-2 py-8 sm:grid-cols-[1fr_1.2fr] sm:gap-10"
            >
              <div>
                <h3 className="font-display text-2xl font-semibold text-nishaan-ink">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-nishaan-leaf-deep">
                  {person.role}
                </p>
              </div>
              <p className="text-nishaan-muted sm:pt-1">{person.note}</p>
            </li>
          ))}
        </ul>

        <h2 className="mt-16 font-display text-sm font-semibold uppercase tracking-[0.18em] text-nishaan-leaf-deep">
          Student team
        </h2>
        <ComingSoon label="Names and photographs forthcoming" />
        <ul className="mt-8 divide-y divide-[var(--border)]">
          {studentTeamPlaceholders.map((person) => (
            <li
              key={person.role}
              className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <h3 className="font-display text-xl font-semibold text-nishaan-ink">
                {person.role.split("—")[0]?.trim() || person.role}
              </h3>
              <p className="text-sm text-nishaan-muted">{person.name}</p>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
