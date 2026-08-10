"use client";

import { useAccessibility } from "./AccessibilityProvider";

/** Lucide Accessibility — same universal-access mark as oae.iitd.ac.in */
function AccessibilityIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>
  );
}

/** Fixed bottom-right — stays on screen while scrolling, every route */
export function AccessibilityFab() {
  const { open, setOpen } = useAccessibility();

  return (
    <button
      type="button"
      className="fixed bottom-4 right-5 z-[120] flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shadow-lg backdrop-blur-sm transition-transform duration-300 ease-out hover:scale-105 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-oae-primary sm:bottom-6 sm:right-6"
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
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      ) : (
        <AccessibilityIcon className="h-5 w-5" />
      )}
    </button>
  );
}
