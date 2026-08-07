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
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-nishaan-ink">
              How to open the toolbar
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-nishaan-muted">
              <li>
                Activate the floating person-icon button labelled{" "}
                <strong className="text-nishaan-ink">
                  Open Accessibility Settings
                </strong>{" "}
                (bottom-right).
              </li>
              <li>Adjust grouped controls in the modal panel.</li>
              <li>
                Press <kbd className="rounded bg-nishaan-mist px-1.5 py-0.5 text-xs">Esc</kbd>{" "}
                or Close to dismiss. Settings persist in{" "}
                <code className="text-sm">localStorage</code> on this device.
              </li>
              <li>Use Reset All Settings to restore defaults.</li>
            </ol>

            <h2 className="mt-10 font-display text-2xl font-semibold text-nishaan-ink">
              Feature groups
            </h2>
            <div className="mt-4 space-y-6">
              {features.map((f) => (
                <section key={f.group}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-nishaan-leaf">
                    {f.group}
                  </h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-nishaan-muted">
                    {f.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>

          <aside className="space-y-10 lg:border-l lg:border-[var(--border)] lg:pl-10">
            <div>
              <h2 className="font-display text-xl font-semibold text-nishaan-ink">
                Keyboard map
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-nishaan-muted">
                <li>
                  <kbd className="rounded border border-[var(--border)] px-1.5 py-0.5 text-xs">
                    Tab
                  </kbd>{" "}
                  /{" "}
                  <kbd className="rounded border border-[var(--border)] px-1.5 py-0.5 text-xs">
                    Shift+Tab
                  </kbd>{" "}
                  — move focus
                </li>
                <li>
                  <kbd className="rounded border border-[var(--border)] px-1.5 py-0.5 text-xs">
                    Enter
                  </kbd>{" "}
                  /{" "}
                  <kbd className="rounded border border-[var(--border)] px-1.5 py-0.5 text-xs">
                    Space
                  </kbd>{" "}
                  — activate controls
                </li>
                <li>
                  <kbd className="rounded border border-[var(--border)] px-1.5 py-0.5 text-xs">
                    Esc
                  </kbd>{" "}
                  — close accessibility panel or mobile menu
                </li>
                <li>
                  Skip link at top of page — jump to{" "}
                  <code className="text-xs">#main-content</code>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-nishaan-ink">
                Accessibility statement
              </h2>
              <p className="mt-3 text-sm text-nishaan-muted">
                We aim to conform to{" "}
                <strong className="text-nishaan-ink">WCAG 2.2 Level AA</strong>{" "}
                for this site: semantic landmarks, heading order, visible focus,
                labelled forms, alternative text for meaningful graphics, reduced
                motion support, and a keyboard-operable path through all primary
                flows.
              </p>
              <p className="mt-3 text-sm text-nishaan-muted">
                The toolbar enhances personalisation; it does not replace real
                assistive technologies. Changes are announced via an{" "}
                <code className="text-xs">aria-live</code> region.
              </p>
              <p className="mt-3 text-sm text-nishaan-muted">
                Found a barrier?{" "}
                <Link href="/contact" className="font-semibold text-nishaan-leaf-deep">
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
