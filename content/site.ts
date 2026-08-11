export const site = {
  name: "NISHAAN",
  nameHi: "निशान",
  year: 2026,
  editionLabel: "IIT Delhi · Office of Accessible Education",
  tagline: "A mark of belonging",
  headline: "Where talent takes its mark",
  supporting:
    "An inclusive cultural celebration for students with disabilities, organised by the Office of Accessible Education at IIT Delhi.",
  dateLabel: "Programme date to be announced",
  venue: "IIT Delhi campus",
  oaeUrl: "https://oae.iitd.ac.in/",
  odiUrl: "https://odi.iitd.ac.in/",
  iitdUrl: "https://home.iitd.ac.in/",
} as const;

export const heroSlides = [
  {
    title: "NISHAAN 2026",
    location: "Indian Institute of Technology Delhi",
    description:
      "IIT Delhi's inclusive cultural fest for students with disabilities — six categories, one welcoming stage.",
    image: "/media/hero-stage.svg",
    cta: { href: "/events", label: "Explore Events" },
  },
  {
    title: "Celebrate ability. Amplify voices.",
    location: "Music · Dance · Drama · Art · Photography · Wordsmith",
    description:
      "Perform, exhibit, or write — open to students from IIT Delhi and colleges across Delhi.",
    image: "/media/chapter-events.svg",
    cta: { href: "/schedule", label: "View Schedule" },
  },
  {
    title: "Organised by OAE",
    location: "Office of Accessible Education · IIT Delhi",
    description:
      "Accessibility support at every step — from registration notes to campus navigation.",
    image: "/media/chapter-about.svg",
    cta: { href: "/about", label: "About NISHAAN" },
  },
] as const;

/** Primary bar for laptop/desktop — everything else under More */
export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/schedule", label: "Schedule" },
  { href: "/team", label: "Team" },
] as const;

export const moreNav = [
  { href: "/vision", label: "Vision" },
  { href: "/guidelines", label: "Guidelines" },
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
    name: "Prof. Sujin Babu",
    role: "Faculty Advisor",
    department: "Physics · Office of Accessible Education, IIT Delhi",
    phone: "+91 11 2659 1030",
    email: "advisoroae@admin.iitd.ac.in",
  },
  facultyAdvisorIi: {
    name: "Prof. Gourab Kar",
    role: "Faculty Advisor",
    department: "Office of Accessible Education, IIT Delhi",
    phone: "+91 11 2659 8597",
    email: "advisoroae@admin.iitd.ac.in",
  },
  deanOdi: {
    name: "Prof. Deepak Kumar",
    role: "Dean, Diversity & Inclusion",
    phone: "+91 11 2659 8798",
    email: "dean_odi@admin.iitd.ac.in",
  },
} as const;

/** NISHAAN was not held in 2023 — first edition was 2024 */
export const history = [
  {
    edition: 1,
    year: 2024,
    notes: "First organised — recognition with cash prizes and certificates",
  },
  {
    edition: 2,
    year: 2025,
    notes: "Inter-college participation from colleges across Delhi",
  },
  {
    edition: 3,
    year: 2026,
    notes: "The mark continues — programme details forthcoming",
  },
] as const;

/** Atmospheric media — real photos from prior editions */
export const media = {
  hero: {
    src: "/media/hero/stage.jpg",
    alt: "Inclusive stage performance at NISHAAN — dancers and performers together",
  },
  past: [
    {
      src: "/media/past/2025-01.jpg",
      alt: "Performers on stage during NISHAAN",
      caption: "On stage",
    },
    {
      src: "/media/past/2025-02.jpg",
      alt: "Students celebrating during NISHAAN",
      caption: "In the room",
    },
    {
      src: "/media/past/2024-01.jpg",
      alt: "Cultural showcase at NISHAAN",
      caption: "In the frame",
    },
  ],
  chapter: {
    about: "/media/showcase/show-08.jpg",
    events: "/media/past/2024-01.jpg",
    vision: "/media/past/2025-01.jpg",
  },
} as const;
