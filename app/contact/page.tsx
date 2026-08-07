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
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-xl font-semibold text-nishaan-ink">
                Office of Accessible Education
              </h2>
              <ul className="mt-3 space-y-2 text-nishaan-muted">
                <li>
                  Email:{" "}
                  <a href={`mailto:${contacts.oae.email}`}>{contacts.oae.email}</a>
                </li>
                <li>{contacts.oae.office}</li>
                <li>
                  Web:{" "}
                  <a href={site.oaeUrl} target="_blank" rel="noopener noreferrer">
                    oae.iitd.ac.in
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-nishaan-ink">
                {contacts.facultyAdvisor.name}
              </h2>
              <p className="text-sm text-nishaan-leaf">{contacts.facultyAdvisor.role}</p>
              <ul className="mt-2 space-y-1 text-sm text-nishaan-muted">
                <li>{contacts.facultyAdvisor.department}</li>
                <li>
                  <a href={`tel:${contacts.facultyAdvisor.phone.replace(/\s/g, "")}`}>
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
            <div>
              <h2 className="font-display text-xl font-semibold text-nishaan-ink">
                {contacts.deanOdi.name}
              </h2>
              <p className="text-sm text-nishaan-leaf">{contacts.deanOdi.role}</p>
              <ul className="mt-2 space-y-1 text-sm text-nishaan-muted">
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
          </div>
          <ContactForm />
        </div>
      </Section>
    </main>
  );
}
