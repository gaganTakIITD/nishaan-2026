export const site = {
  name: "NISHAAN",
  nameHi: "निशान",
  year: 2026,
  editionLabel: "IIT Delhi · Office of Accessible Education",
  tagline: "A mark left on the stage",
  headline: "Where talent takes its mark",
  supporting:
    "An inclusive cultural celebration for students with disabilities.",
  dateLabel: "Programme date to be announced",
  venue: "IIT Delhi campus",
  oaeUrl: "https://oae.iitd.ac.in/",
  odiUrl: "https://odi.iitd.ac.in/",
  iitdUrl: "https://home.iitd.ac.in/",
} as const;

/** Slim primary nav — everything else under More */
export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/schedule", label: "Schedule" },
] as const;

export const moreNav = [
  { href: "/vision", label: "Vision" },
  { href: "/guidelines", label: "Guidelines" },
  { href: "/team", label: "Team" },
  { href: "/partners", label: "Partners" },
  { href: "/accessibility-map", label: "Campus Map" },
  { href: "/contact", label: "Contact" },
  { href: "/accessibility-tools", label: "Accessibility Tools" },
] as const;

/** @deprecated use primaryNav + moreNav */
export const navItems = [
  ...primaryNav,
  { href: "/register", label: "Register" },
  ...moreNav,
] as const;

export const footerNav = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/schedule", label: "Schedule" },
  { href: "/register", label: "Register" },
  { href: "/vision", label: "Vision" },
  { href: "/team", label: "Team" },
  { href: "/accessibility-map", label: "Campus Map" },
  { href: "/contact", label: "Contact" },
  { href: "/accessibility-tools", label: "Accessibility" },
] as const;

export const contacts = {
  oae: {
    email: "oae@admin.iitd.ac.in",
    office: "LH 124, Ground Floor, Lecture Hall Complex (LHC), IIT Delhi",
  },
  facultyAdvisor: {
    name: "Prof. Vikram Singh",
    role: "Faculty Advisor / Faculty In-charge (PwBD)",
    department: "Chemical Engineering, IIT Delhi",
    phone: "+91 11 2659 1030",
    email: "vs225@chemical.iitd.ac.in",
  },
  deanOdi: {
    name: "Prof. Angelie Multani",
    role: "Dean, Diversity & Inclusion",
    phone: "+91 11 2654 8798",
    email: "dean_odi@admin.iitd.ac.in",
  },
} as const;

export const history = [
  { edition: 1, year: 2023, notes: "First organised — a new imprint on campus culture" },
  {
    edition: 2,
    year: 2024,
    notes: "Recognition with cash prizes and certificates",
  },
  {
    edition: 3,
    year: 2025,
    notes: "Inter-college participation from colleges across Delhi",
  },
  {
    edition: 4,
    year: 2026,
    notes: "The mark continues — programme details forthcoming",
  },
] as const;

/** Atmospheric media — swap paths when OAE supplies official photos */
export const media = {
  hero: {
    src: "/media/hero-stage.svg",
    alt: "Atmospheric stage lights — placeholder visual for NISHAAN 2026",
  },
  past: [
    {
      src: "/media/past/2025-01.svg",
      alt: "Photo placeholder — NISHAAN 2025",
      caption: "On stage",
    },
    {
      src: "/media/past/2025-02.svg",
      alt: "Photo placeholder — NISHAAN 2025",
      caption: "In the room",
    },
    {
      src: "/media/past/2024-01.svg",
      alt: "Photo placeholder — NISHAAN 2024",
      caption: "In the frame",
    },
  ],
  chapter: {
    about: "/media/chapter-about.svg",
    events: "/media/chapter-events.svg",
    vision: "/media/chapter-vision.svg",
  },
} as const;
