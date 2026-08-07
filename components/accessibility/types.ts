export type ColorBlindMode = "none" | "protanopia" | "deuteranopia" | "tritanopia";

export type AccessibilitySettings = {
  fontSize: number;
  letterSpacing: number;
  lineHeight: number;
  dyslexiaFont: boolean;
  highContrast: boolean;
  darkMode: boolean;
  lightBackground: boolean;
  negativeContrast: boolean;
  grayscale: boolean;
  saturation: number;
  colorBlind: ColorBlindMode;
  readingGuide: boolean;
  readingMask: boolean;
  bigCursor: boolean;
  underlineLinks: boolean;
  highlightFocus: boolean;
  pauseAnimations: boolean;
  keyboardNav: boolean;
};

export const DEFAULT_A11Y_SETTINGS: AccessibilitySettings = {
  fontSize: 1,
  letterSpacing: 0,
  lineHeight: 1.65,
  dyslexiaFont: false,
  highContrast: false,
  darkMode: false,
  lightBackground: false,
  negativeContrast: false,
  grayscale: false,
  saturation: 1,
  colorBlind: "none",
  readingGuide: false,
  readingMask: false,
  bigCursor: false,
  underlineLinks: false,
  highlightFocus: false,
  pauseAnimations: false,
  keyboardNav: false,
};

export const A11Y_STORAGE_KEY = "nishaan-a11y-settings-v1";
