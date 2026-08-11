/** Universal Access pictogram — original OAE-style floating toolbar icon */
export function AccessibilityIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      {/* Head */}
      <circle cx="12" cy="4" r="2.2" />
      {/* Arms reaching up/out + torso */}
      <path d="M3.8 9.1c0-.72.58-1.3 1.3-1.3h13.8c.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3h-1.55l.95 5.4c.2 1.14-1.05 2-2.02 1.4L12.9 14.4v6.35c0 .85-1.3.85-1.3 0V14.4L8.02 16.2c-.97.6-2.22-.26-2.02-1.4l.95-5.4H5.1c-.72 0-1.3-.58-1.3-1.3Z" />
      {/* Legs spread */}
      <path d="M11.35 14.2 8.2 21.1a1.15 1.15 0 0 0 2.1.9l1.7-3.7 1.7 3.7a1.15 1.15 0 0 0 2.1-.9l-3.15-6.9h-1.3Z" />
    </svg>
  );
}
