"use client";

import { useEffect, useId, useRef } from "react";
import { useAccessibility } from "./AccessibilityProvider";
import type { ColorBlindMode } from "./types";

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  const id = useId();
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-center justify-between gap-3 rounded-xl px-2 py-2.5 hover:bg-fest-field/70"
    >
      <span className="text-sm text-fest-ink">{label}</span>
      <input
        id={id}
        type="checkbox"
        className="h-5 w-5 shrink-0 accent-oae-primary"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </label>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  display,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  display: string;
}) {
  const id = useId();
  return (
    <label htmlFor={id} className="block px-2 py-2.5">
      <span className="flex items-center justify-between text-sm text-fest-ink">
        <span>{label}</span>
        <span className="tabular-nums text-fest-muted">{display}</span>
      </span>
      <input
        id={id}
        type="range"
        className="mt-2 w-full accent-oae-primary"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </label>
  );
}

export function AccessibilityPanel() {
  const {
    open,
    setOpen,
    settings,
    update,
    reset,
    landmarks,
    refreshLandmarks,
  } = useAccessibility();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[110]" role="presentation">
      <button
        type="button"
        className="absolute inset-0 bg-fest-ink/40"
        aria-label="Close accessibility settings"
        onClick={() => setOpen(false)}
      />
      <div
        ref={panelRef}
        id="accessibility-settings-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="a11y-panel-title"
        className="absolute inset-x-0 bottom-0 flex max-h-[min(78vh,640px)] w-full flex-col rounded-t-2xl border border-fest-rule bg-white shadow-2xl sm:inset-x-auto sm:bottom-24 sm:right-6 sm:max-h-[min(82vh,680px)] sm:w-full sm:max-w-md sm:rounded-2xl"
      >
        <div className="flex items-start justify-between gap-3 border-b border-fest-rule px-4 py-3.5 sm:px-5 sm:py-4">
          <div>
            <h2
              id="a11y-panel-title"
              className="font-display text-lg font-semibold text-fest-ink sm:text-xl"
            >
              Accessibility Settings
            </h2>
            <p className="mt-1 text-xs text-fest-muted">
              Saved on this device. Esc or the button to close.
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="rounded-xl px-2.5 py-1.5 text-sm font-medium text-fest-ink hover:bg-fest-field"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto overscroll-contain px-2 py-3 sm:space-y-5 sm:px-3 sm:py-4">
          <section aria-labelledby="a11y-text">
            <h3
              id="a11y-text"
              className="px-2 text-xs font-semibold uppercase tracking-[0.14em] text-oae-primary"
            >
              Text Options
            </h3>
            <Slider
              label="Font Size"
              value={settings.fontSize}
              min={0.85}
              max={1.6}
              step={0.05}
              display={`${Math.round(settings.fontSize * 100)}%`}
              onChange={(v) => update("fontSize", v)}
            />
            <Slider
              label="Letter Spacing"
              value={settings.letterSpacing}
              min={0}
              max={0.2}
              step={0.01}
              display={`${settings.letterSpacing.toFixed(2)}em`}
              onChange={(v) => update("letterSpacing", v)}
            />
            <Slider
              label="Line Height"
              value={settings.lineHeight}
              min={1.2}
              max={2.2}
              step={0.05}
              display={settings.lineHeight.toFixed(2)}
              onChange={(v) => update("lineHeight", v)}
            />
            <Toggle
              label="Dyslexia-friendly Font"
              checked={settings.dyslexiaFont}
              onChange={(v) => update("dyslexiaFont", v)}
            />
          </section>

          <section aria-labelledby="a11y-vision">
            <h3
              id="a11y-vision"
              className="px-2 text-xs font-semibold uppercase tracking-[0.14em] text-oae-primary"
            >
              Visual Options
            </h3>
            <Toggle
              label="High Contrast"
              checked={settings.highContrast}
              onChange={(v) => update("highContrast", v)}
            />
            <Toggle
              label="Dark Mode"
              checked={settings.darkMode}
              onChange={(v) => update("darkMode", v)}
            />
            <Toggle
              label="Light Background"
              checked={settings.lightBackground}
              onChange={(v) => update("lightBackground", v)}
            />
            <Toggle
              label="Negative Contrast"
              checked={settings.negativeContrast}
              onChange={(v) => update("negativeContrast", v)}
            />
            <Toggle
              label="Grayscale"
              checked={settings.grayscale}
              onChange={(v) => update("grayscale", v)}
            />
            <Slider
              label="Saturation"
              value={settings.saturation}
              min={0}
              max={2}
              step={0.1}
              display={`${Math.round(settings.saturation * 100)}%`}
              onChange={(v) => update("saturation", v)}
            />
            <label className="block px-2 py-2 text-sm">
              <span className="text-fest-ink">Color-blind filter</span>
              <select
                className="mt-2 w-full rounded-xl border border-fest-rule bg-white px-3 py-2.5 text-fest-ink"
                value={settings.colorBlind}
                onChange={(e) =>
                  update("colorBlind", e.target.value as ColorBlindMode)
                }
              >
                <option value="none">None</option>
                <option value="protanopia">Protanopia</option>
                <option value="deuteranopia">Deuteranopia</option>
                <option value="tritanopia">Tritanopia</option>
              </select>
            </label>
          </section>

          <section aria-labelledby="a11y-reading">
            <h3
              id="a11y-reading"
              className="px-2 text-xs font-semibold uppercase tracking-[0.14em] text-oae-primary"
            >
              Reading Aids
            </h3>
            <Toggle
              label="Reading Guide"
              checked={settings.readingGuide}
              onChange={(v) => update("readingGuide", v)}
            />
            <Toggle
              label="Reading Mask"
              checked={settings.readingMask}
              onChange={(v) => update("readingMask", v)}
            />
          </section>

          <section aria-labelledby="a11y-pointer">
            <h3
              id="a11y-pointer"
              className="px-2 text-xs font-semibold uppercase tracking-[0.14em] text-oae-primary"
            >
              Pointer &amp; Focus
            </h3>
            <Toggle
              label="Big Cursor"
              checked={settings.bigCursor}
              onChange={(v) => update("bigCursor", v)}
            />
            <Toggle
              label="Underline Links"
              checked={settings.underlineLinks}
              onChange={(v) => update("underlineLinks", v)}
            />
            <Toggle
              label="Highlight Focus"
              checked={settings.highlightFocus}
              onChange={(v) => update("highlightFocus", v)}
            />
          </section>

          <section aria-labelledby="a11y-motion">
            <h3
              id="a11y-motion"
              className="px-2 text-xs font-semibold uppercase tracking-[0.14em] text-oae-primary"
            >
              Motion &amp; Navigation
            </h3>
            <Toggle
              label="Pause Animations"
              checked={settings.pauseAnimations}
              onChange={(v) => update("pauseAnimations", v)}
            />
            <Toggle
              label="Keyboard Navigation Emphasis"
              checked={settings.keyboardNav}
              onChange={(v) => update("keyboardNav", v)}
            />
            <div className="px-2 py-2">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm font-medium text-fest-ink">Page structure</p>
                <button
                  type="button"
                  className="text-xs text-oae-primary underline"
                  onClick={refreshLandmarks}
                >
                  Refresh
                </button>
              </div>
              <ul className="max-h-36 space-y-1 overflow-y-auto rounded-xl border border-fest-rule p-2 text-sm">
                {landmarks.length === 0 ? (
                  <li className="text-fest-muted">No landmarks found</li>
                ) : (
                  landmarks.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="block rounded-lg px-2 py-1.5 text-fest-ink no-underline hover:bg-fest-field"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </section>
        </div>

        <div className="border-t border-fest-rule px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-5 sm:py-4">
          <button
            type="button"
            className="w-full rounded-xl border border-fest-rule bg-fest-field px-4 py-3 text-sm font-semibold text-oae-primary-dark hover:bg-fest-warm-soft/60"
            onClick={reset}
          >
            Reset All Settings
          </button>
        </div>
      </div>
    </div>
  );
}
