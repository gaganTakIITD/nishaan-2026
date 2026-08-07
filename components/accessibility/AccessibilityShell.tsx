"use client";

import type { ReactNode } from "react";
import { AccessibilityFab } from "./AccessibilityFab";
import { AccessibilityPanel } from "./AccessibilityPanel";
import { AccessibilityProvider } from "./AccessibilityProvider";

/** Global a11y chrome — FAB stays viewport-fixed while page content scrolls */
export function AccessibilityShell({ children }: { children: ReactNode }) {
  return (
    <AccessibilityProvider>
      <div id="site-content" className="flex min-h-full flex-1 flex-col">
        {children}
      </div>
      <AccessibilityFab />
      <AccessibilityPanel />
    </AccessibilityProvider>
  );
}
