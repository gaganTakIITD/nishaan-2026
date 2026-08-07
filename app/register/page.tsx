import type { Metadata } from "next";
import { ComingSoon, PageHeader, Section } from "@/components/ui/PageChrome";
import { eventCategories } from "@/content/events";
import { RegisterForm } from "./RegisterForm";

export const metadata: Metadata = {
  title: "Register",
  description: "Register interest for NISHAAN 2026 — official form link coming soon.",
};

export default function RegisterPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Register"
        title="Leave your mark"
        description="Accessible registration for NISHAAN 2026. The official form link will replace this interest shell when published."
      />
      <Section>
        <ComingSoon label="Official registration link forthcoming" />

        <div className="mt-12 grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-nishaan-leaf-deep">
              Categories
            </h2>
            <ul className="mt-6 space-y-3">
              {eventCategories.map((c, i) => (
                <li key={c.slug} className="flex gap-3 text-nishaan-ink">
                  <span className="font-display text-nishaan-gold tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {c.title}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-nishaan-muted">
              Review{" "}
              <a href="/guidelines" className="font-medium text-nishaan-leaf-deep">
                participation guidelines
              </a>{" "}
              before registering. Mention access needs so OAE can plan support.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <RegisterForm />
          </div>
        </div>
      </Section>
    </main>
  );
}
