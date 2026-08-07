import type { AccessibilitySettings } from "./types";

function setFlag(name: string, on: boolean) {
  if (on) document.documentElement.setAttribute(name, "true");
  else document.documentElement.removeAttribute(name);
}

/** Single composed filter — avoids conflicting CSS filter rules on #site-content */
function contentFilter(settings: AccessibilitySettings): string {
  const parts: string[] = [];
  if (settings.negativeContrast) parts.push("invert(1) hue-rotate(180deg)");
  if (settings.grayscale) parts.push("grayscale(1)");
  if (settings.colorBlind === "protanopia") parts.push("url(#cb-protanopia)");
  if (settings.colorBlind === "deuteranopia") parts.push("url(#cb-deuteranopia)");
  if (settings.colorBlind === "tritanopia") parts.push("url(#cb-tritanopia)");
  if (settings.saturation !== 1) parts.push(`saturate(${settings.saturation})`);
  return parts.length ? parts.join(" ") : "none";
}

export function applyAccessibilityModes(settings: AccessibilitySettings) {
  const root = document.documentElement;

  root.style.setProperty("--a11y-font-size", String(settings.fontSize));
  root.style.setProperty(
    "--a11y-letter-spacing",
    `${settings.letterSpacing}em`,
  );
  root.style.setProperty("--a11y-line-height", String(settings.lineHeight));
  root.style.setProperty("--a11y-saturation", String(settings.saturation));
  root.style.setProperty("--a11y-content-filter", contentFilter(settings));

  setFlag("data-a11y-dyslexia", settings.dyslexiaFont);
  setFlag("data-a11y-high-contrast", settings.highContrast);
  setFlag("data-a11y-dark", settings.darkMode);
  setFlag("data-a11y-light-bg", settings.lightBackground);
  setFlag("data-a11y-negative", settings.negativeContrast);
  setFlag("data-a11y-grayscale", settings.grayscale);
  setFlag("data-a11y-underline-links", settings.underlineLinks);
  setFlag("data-a11y-big-cursor", settings.bigCursor);
  setFlag("data-a11y-highlight-focus", settings.highlightFocus);
  setFlag("data-a11y-pause-animations", settings.pauseAnimations);
  setFlag("data-a11y-keyboard-nav", settings.keyboardNav);

  if (settings.colorBlind === "none") {
    root.removeAttribute("data-a11y-colorblind");
  } else {
    root.setAttribute("data-a11y-colorblind", settings.colorBlind);
  }
}

export function clearAccessibilityModes() {
  const attrs = [
    "data-a11y-dyslexia",
    "data-a11y-high-contrast",
    "data-a11y-dark",
    "data-a11y-light-bg",
    "data-a11y-negative",
    "data-a11y-grayscale",
    "data-a11y-underline-links",
    "data-a11y-big-cursor",
    "data-a11y-highlight-focus",
    "data-a11y-pause-animations",
    "data-a11y-keyboard-nav",
    "data-a11y-colorblind",
  ];
  attrs.forEach((a) => document.documentElement.removeAttribute(a));
  document.documentElement.style.setProperty("--a11y-font-size", "1");
  document.documentElement.style.setProperty("--a11y-letter-spacing", "0em");
  document.documentElement.style.setProperty("--a11y-line-height", "1.65");
  document.documentElement.style.setProperty("--a11y-saturation", "1");
  document.documentElement.style.setProperty("--a11y-content-filter", "none");
}
