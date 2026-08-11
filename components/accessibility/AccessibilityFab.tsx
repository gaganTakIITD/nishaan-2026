"use client";

import Image from "next/image";
import { useAccessibility } from "./AccessibilityProvider";

/** Fixed bottom-right — original universal-access icon on black circle (OAE style) */
export function AccessibilityFab() {
  const { open, setOpen } = useAccessibility();

  return (
    <button
      type="button"
      className="fixed bottom-4 right-5 z-[9999] flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-black text-white transition-transform duration-300 ease-out hover:scale-105 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-black md:shadow-lg"
      aria-haspopup="dialog"
      aria-expanded={open}
      aria-controls="accessibility-settings-panel"
      onClick={() => setOpen(!open)}
      title={open ? "Close Accessibility Settings" : "Open Accessibility Settings"}
    >
      <span className="sr-only">
        {open ? "Close Accessibility Settings" : "Open Accessibility Settings"}
      </span>
      <Image
        src="/brand/a11y-icon.png"
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 object-cover"
        aria-hidden="true"
        priority
      />
    </button>
  );
}
