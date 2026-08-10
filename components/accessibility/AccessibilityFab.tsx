"use client";

import { useAccessibility } from "./AccessibilityProvider";
import { AccessibilityIcon } from "./AccessibilityIcon";

/** Fixed bottom-right — matches OAE / ODI site accessibility trigger */
export function AccessibilityFab() {
  const { open, setOpen } = useAccessibility();

  return (
    <button
      type="button"
      className="fixed bottom-4 right-5 z-[9999] flex h-10 w-10 items-center justify-center rounded-full bg-black text-white backdrop-blur-sm transition-transform duration-300 ease-out hover:scale-105 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-black md:shadow-lg"
      aria-haspopup="dialog"
      aria-expanded={open}
      aria-controls="accessibility-settings-panel"
      onClick={() => setOpen(!open)}
      title={open ? "Close Accessibility Settings" : "Open Accessibility Settings"}
    >
      <span className="sr-only">
        {open ? "Close Accessibility Settings" : "Open Accessibility Settings"}
      </span>
      <AccessibilityIcon className="h-5 w-5" />
    </button>
  );
}
