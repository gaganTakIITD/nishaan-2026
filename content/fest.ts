export const festStats = [
  { value: "6", label: "Cultural categories" },
  { value: "4th", label: "Edition in 2026" },
  { value: "Inter-college", label: "Open across Delhi" },
  { value: "OAE", label: "Organised with care" },
] as const;

/** OAE sibling fests — SANGAM is sports; NISHAAN is culture */
export const oaeFamily = [
  {
    name: "NISHAAN",
    nameHi: "निशान",
    kind: "Inclusive cultural fest",
    blurb:
      "Stage, art, and word — a welcoming platform for creative expression.",
    href: "/",
    current: true,
  },
  {
    name: "SANGAM",
    nameHi: "संगम",
    kind: "Inclusive sports fest",
    blurb:
      "OAE’s inter-college sports meet — confluence of ability, competition, and campus belonging.",
    href: "https://oae.iitd.ac.in/",
    current: false,
  },
] as const;
