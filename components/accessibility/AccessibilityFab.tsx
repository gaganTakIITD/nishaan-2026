"use client";

import { useAccessibility } from "./AccessibilityProvider";

/** Mid-right floating a11y control — same pattern as OAE */
export function AccessibilityFab() {
  const { open, setOpen } = useAccessibility();

  return (
    <button
      type="button"
      className="fixed right-4 top-1/2 z-[70] flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-oae-primary text-white shadow-lg ring-4 ring-white transition hover:scale-105 hover:bg-[var(--oae-primary-dark)] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-oae-primary"
      aria-haspopup="dialog"
      aria-expanded={open}
      aria-controls="accessibility-settings-panel"
      onClick={() => setOpen(true)}
      title="Open Accessibility Settings"
    >
      <span className="sr-only">Open Accessibility Settings</span>
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M12 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm-1 6h2c1.7 0 3 1.3 3 3v3h-2v8h-2v-8H8v-3c0-1.7 1.3-3 3-3Z" />
      </svg>
    </button>
  );
}
