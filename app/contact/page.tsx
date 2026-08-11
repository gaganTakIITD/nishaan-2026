import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui/PageChrome";
import { contacts, site } from "@/content/site";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the Office of Accessible Education about NISHAAN 2026.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Contact Us"
        title="Get in touch"
        description="Reach the Office of Accessible Education for NISHAAN queries, access support, or partnership interest."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div className="group imprint-tile p-6 sm:p-7">
              <h2 className="font-display text-xl font-semibold tracking-tight text-oae-text transition-colors duration-300 group-hover:text-oae-primary">
                Office of Accessible Education
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-oae-muted">
                <li>
                  Email:{" "}
                  <a
                    href={`mailto:${contacts.oae.email}`}
                    className="font-medium text-oae-primary-dark"
                  >
                    {contacts.oae.email}
                  </a>
                </li>
                <li>{contacts.oae.office}</li>
                <li>
                  Web:{" "}
                  <a
                    href={site.oaeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-oae-primary-dark"
                  >
                    oae.iitd.ac.in
                  </a>
                </li>
              </ul>
            </div>

            <div className="group imprint-tile p-6 sm:p-7">
              <h2 className="font-display text-xl font-semibold tracking-tight text-oae-text transition-colors duration-300 group-hover:text-oae-primary">
                {contacts.deanOdi.name}
              </h2>
              <p className="mt-1 text-sm font-semibold text-oae-primary">
                {contacts.deanOdi.role}
              </p>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-oae-muted">
                <li>
                  <a href={`tel:${contacts.deanOdi.phone.replace(/\s/g, "")}`}>
                    {contacts.deanOdi.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contacts.deanOdi.email}`}>
                    {contacts.deanOdi.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="group imprint-tile p-6 sm:p-7">
              <h2 className="font-display text-xl font-semibold tracking-tight text-oae-text transition-colors duration-300 group-hover:text-oae-primary">
                {contacts.facultyAdvisor.name}
              </h2>
              <p className="mt-1 text-sm font-semibold text-oae-primary">
                {contacts.facultyAdvisor.role}
              </p>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-oae-muted">
                <li>{contacts.facultyAdvisor.department}</li>
                <li>
                  <a
                    href={`tel:${contacts.facultyAdvisor.phone.replace(/\s/g, "")}`}
                  >
                    {contacts.facultyAdvisor.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contacts.facultyAdvisor.email}`}>
                    {contacts.facultyAdvisor.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="group imprint-tile p-6 sm:p-7">
              <h2 className="font-display text-xl font-semibold tracking-tight text-oae-text transition-colors duration-300 group-hover:text-oae-primary">
                {contacts.facultyAdvisorIi.name}
              </h2>
              <p className="mt-1 text-sm font-semibold text-oae-primary">
                {contacts.facultyAdvisorIi.role}
              </p>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-oae-muted">
                <li>{contacts.facultyAdvisorIi.department}</li>
                <li>
                  <a
                    href={`tel:${contacts.facultyAdvisorIi.phone.replace(/\s/g, "")}`}
                  >
                    {contacts.facultyAdvisorIi.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contacts.facultyAdvisorIi.email}`}>
                    {contacts.facultyAdvisorIi.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <ContactForm />
        </div>
      </Section>
    </main>
  );
}
