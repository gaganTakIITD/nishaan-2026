"use client";

import { useAccessibility } from "./AccessibilityProvider";

/** Fixed bottom-right — stays on screen while scrolling, every route */
export function AccessibilityFab() {
  const { open, setOpen } = useAccessibility();

  return (
    <button
      type="button"
      className="fixed bottom-4 right-4 z-[120] flex h-14 w-14 items-center justify-center rounded-full bg-oae-primary text-white shadow-[0_8px_24px_rgba(27,122,61,0.35)] ring-4 ring-white transition-transform duration-300 ease-out hover:scale-105 hover:bg-oae-primary-dark focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-oae-primary sm:bottom-6 sm:right-6"
      aria-haspopup="dialog"
      aria-expanded={open}
      aria-controls="accessibility-settings-panel"
      onClick={() => setOpen(!open)}
      title={open ? "Close Accessibility Settings" : "Open Accessibility Settings"}
    >
      <span className="sr-only">
        {open ? "Close Accessibility Settings" : "Open Accessibility Settings"}
      </span>
      {open ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-7 w-7"
          fill="currentColor"
        >
          <path d="M12 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm-1 6h2c1.7 0 3 1.3 3 3v3h-2v8h-2v-8H8v-3c0-1.7 1.3-3 3-3Z" />
        </svg>
      )}
    </button>
  );
}
