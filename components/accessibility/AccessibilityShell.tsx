"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { AccessibilityProvider } from "./AccessibilityProvider";

const AccessibilityFab = dynamic(
  () => import("./AccessibilityFab").then((m) => m.AccessibilityFab),
  { ssr: false },
);

const AccessibilityPanel = dynamic(
  () => import("./AccessibilityPanel").then((m) => m.AccessibilityPanel),
  { ssr: false },
);

export function AccessibilityShell({ children }: { children: ReactNode }) {
  return (
    <AccessibilityProvider>
      {children}
      <AccessibilityFab />
      <AccessibilityPanel />
    </AccessibilityProvider>
  );
}
