"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { applyAccessibilityModes, clearAccessibilityModes } from "./applyModes";
import { ColorBlindFilters } from "./filters";
import {
  A11Y_STORAGE_KEY,
  DEFAULT_A11Y_SETTINGS,
  type AccessibilitySettings,
} from "./types";

type AccessibilityContextValue = {
  settings: AccessibilitySettings;
  open: boolean;
  setOpen: (open: boolean) => void;
  update: <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K],
  ) => void;
  reset: () => void;
  announce: string;
  landmarks: { id: string; label: string }[];
  refreshLandmarks: () => void;
};

const AccessibilityContext = createContext<AccessibilityContextValue | null>(
  null,
);

function loadSettings(): AccessibilitySettings {
  try {
    const raw = localStorage.getItem(A11Y_STORAGE_KEY);
    if (!raw) return DEFAULT_A11Y_SETTINGS;
    return { ...DEFAULT_A11Y_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_A11Y_SETTINGS;
  }
}

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>(
    DEFAULT_A11Y_SETTINGS,
  );
  const [hydrated, setHydrated] = useState(false);
  const [open, setOpen] = useState(false);
  const [announce, setAnnounce] = useState("");
  const [landmarks, setLandmarks] = useState<{ id: string; label: string }[]>(
    [],
  );
  const [guideY, setGuideY] = useState(0);
  const [viewportH, setViewportH] = useState(800);

  const refreshLandmarks = useCallback(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main, [role='main'], nav, [role='navigation'], header, footer, h1, h2, [id]",
      ),
    );
    const seen = new Set<string>();
    const list: { id: string; label: string }[] = [];
    nodes.forEach((el, i) => {
      let id = el.id;
      if (!id) {
        id = `a11y-landmark-${i}`;
        el.id = id;
      }
      if (seen.has(id)) return;
      seen.add(id);
      const label =
        el.getAttribute("aria-label") ||
        el.getAttribute("aria-labelledby") ||
        el.tagName.toLowerCase() +
          (el.textContent
            ? `: ${el.textContent.trim().slice(0, 48)}`
            : "");
      if (["MAIN", "NAV", "HEADER", "FOOTER", "H1", "H2"].includes(el.tagName) || el.getAttribute("role")) {
        list.push({ id, label: label.replace(/\s+/g, " ").trim() });
      }
    });
    setLandmarks(list.slice(0, 24));
  }, []);

  useEffect(() => {
    const loaded = loadSettings();
    setSettings(loaded);
    applyAccessibilityModes(loaded);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    applyAccessibilityModes(settings);
    localStorage.setItem(A11Y_STORAGE_KEY, JSON.stringify(settings));
  }, [settings, hydrated]);

  useEffect(() => {
    const onResize = () => setViewportH(window.innerHeight);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!settings.readingGuide && !settings.readingMask) return;
    const onMove = (e: PointerEvent) => setGuideY(e.clientY);
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [settings.readingGuide, settings.readingMask]);

  useEffect(() => {
    if (!open) return;
    refreshLandmarks();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, refreshLandmarks]);

  const update = useCallback(
    <K extends keyof AccessibilitySettings>(
      key: K,
      value: AccessibilitySettings[K],
    ) => {
      setSettings((prev) => ({ ...prev, [key]: value }));
      setAnnounce(`Updated ${String(key).replace(/([A-Z])/g, " $1")}`);
    },
    [],
  );

  const reset = useCallback(() => {
    setSettings(DEFAULT_A11Y_SETTINGS);
    clearAccessibilityModes();
    applyAccessibilityModes(DEFAULT_A11Y_SETTINGS);
    localStorage.removeItem(A11Y_STORAGE_KEY);
    setAnnounce("All accessibility settings reset");
  }, []);

  const value = useMemo(
    () => ({
      settings,
      open,
      setOpen,
      update,
      reset,
      announce,
      landmarks,
      refreshLandmarks,
    }),
    [settings, open, update, reset, announce, landmarks, refreshLandmarks],
  );

  return (
    <AccessibilityContext.Provider value={value}>
      <ColorBlindFilters />
      {children}
      {settings.readingGuide ? (
        <div
          className="a11y-reading-guide"
          style={{ top: guideY }}
          aria-hidden="true"
        />
      ) : null}
      {settings.readingMask ? (
        <div
          className="a11y-reading-mask"
          style={{
            clipPath: `inset(${Math.max(0, guideY - 60)}px 0 ${Math.max(0, viewportH - guideY - 60)}px 0)`,
          }}
          aria-hidden="true"
        />
      ) : null}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announce}
      </div>
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) {
    throw new Error("useAccessibility must be used within AccessibilityProvider");
  }
  return ctx;
}
