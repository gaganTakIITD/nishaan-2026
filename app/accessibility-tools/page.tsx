import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Section } from "@/components/ui/PageChrome";

export const metadata: Metadata = {
  title: "Accessibility Tools",
  description:
    "Documentation for the NISHAAN first-party accessibility toolbar and WCAG commitment.",
};

const features = [
  {
    group: "Text",
    items: [
      "Font size, letter spacing, and line height (CSS variables)",
      "Dyslexia-friendly font (OpenDyslexic)",
    ],
  },
  {
    group: "Vision",
    items: [
      "High contrast, dark mode, light background, negative contrast",
      "Grayscale and saturation control",
      "Color-blind filters: protanopia, deuteranopia, tritanopia (SVG matrices)",
    ],
  },
  {
    group: "Reading",
    items: ["Reading guide", "Reading mask"],
  },
  {
    group: "Pointer & focus",
    items: ["Big cursor", "Underline links", "Highlight focus"],
  },
  {
    group: "Motion & navigation",
    items: [
      "Pause animations (also respects prefers-reduced-motion)",
      "Keyboard navigation emphasis",
      "Page structure / landmarks jump list",
    ],
  },
] as const;

export default function AccessibilityToolsPage() {
  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Accessibility"
        title="Accessibility tools & statement"
        description="NISHAAN ships a first-party accessibility toolbar inspired by OAE’s in-house settings panel — not a third-party SaaS widget."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-oae-text">
              How to open the toolbar
            </h2>
            <ol className="mt-6 space-y-3 text-base leading-relaxed text-oae-muted">
              <li className="flex gap-3">
                <span className="font-display text-sm font-semibold text-oae-primary">
                  01
                </span>
                <span>
                  Activate the floating accessibility button labelled{" "}
                  <strong className="font-semibold text-oae-text">
                    Open Accessibility Settings
                  </strong>{" "}
                  (bottom-right of the viewport — fixed while you scroll).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-display text-sm font-semibold text-oae-primary">
                  02
                </span>
                <span>Adjust grouped controls in the modal panel.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-display text-sm font-semibold text-oae-primary">
                  03
                </span>
                <span>
                  Press{" "}
                  <kbd className="rounded-md border border-oae-border bg-oae-mint/60 px-1.5 py-0.5 text-xs text-oae-text">
                    Esc
                  </kbd>{" "}
                  or Close to dismiss. Settings persist in{" "}
                  <code className="text-sm text-oae-text">localStorage</code> on
                  this device.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-display text-sm font-semibold text-oae-primary">
                  04
                </span>
                <span>Use Reset All Settings to restore defaults.</span>
              </li>
            </ol>

            <h2 className="mt-14 text-3xl font-bold tracking-tight text-balance text-oae-text">
              Feature groups
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <section key={f.group} className="group imprint-tile p-5 sm:p-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-oae-primary transition-colors duration-300 group-hover:text-oae-primary-dark">
                    {f.group}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {f.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-relaxed text-oae-muted"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-oae-primary"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="imprint-tile p-6 sm:p-7">
              <h2 className="font-display text-xl font-semibold tracking-tight text-oae-text">
                Keyboard map
              </h2>
              <ul className="mt-5 space-y-4 text-sm leading-relaxed text-oae-muted">
                <li>
                  <kbd className="rounded-md border border-oae-border bg-white px-1.5 py-0.5 text-xs text-oae-text">
                    Tab
                  </kbd>{" "}
                  /{" "}
                  <kbd className="rounded-md border border-oae-border bg-white px-1.5 py-0.5 text-xs text-oae-text">
                    Shift+Tab
                  </kbd>{" "}
                  — move focus
                </li>
                <li>
                  <kbd className="rounded-md border border-oae-border bg-white px-1.5 py-0.5 text-xs text-oae-text">
                    Enter
                  </kbd>{" "}
                  /{" "}
                  <kbd className="rounded-md border border-oae-border bg-white px-1.5 py-0.5 text-xs text-oae-text">
                    Space
                  </kbd>{" "}
                  — activate controls
                </li>
                <li>
                  <kbd className="rounded-md border border-oae-border bg-white px-1.5 py-0.5 text-xs text-oae-text">
                    Esc
                  </kbd>{" "}
                  — close accessibility panel or mobile menu
                </li>
                <li>
                  Skip link at top of page — jump to{" "}
                  <code className="text-xs text-oae-text">#main-content</code>
                </li>
              </ul>
            </div>

            <div className="imprint-tile border-oae-primary/20 bg-oae-mint/30 p-6 sm:p-7">
              <h2 className="font-display text-xl font-semibold tracking-tight text-oae-text">
                Accessibility statement
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-pretty text-oae-muted">
                We aim to conform to{" "}
                <strong className="font-semibold text-oae-text">
                  WCAG 2.2 Level AA
                </strong>{" "}
                for this site: semantic landmarks, heading order, visible focus,
                labelled forms, alternative text for meaningful graphics, reduced
                motion support, and a keyboard-operable path through all primary
                flows.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-pretty text-oae-muted">
                The toolbar enhances personalisation; it does not replace real
                assistive technologies. Changes are announced via an{" "}
                <code className="text-xs text-oae-text">aria-live</code> region.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-oae-muted">
                Found a barrier?{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-oae-primary-dark underline decoration-oae-primary/30 underline-offset-4"
                >
                  Contact OAE
                </Link>
                .
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </main>
  );
}
