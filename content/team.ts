export const facultyTeam = [
  {
    name: "Prof. Angelie Multani",
    role: "Dean, Diversity & Inclusion",
    note: "Office of Diversity & Inclusion, IIT Delhi",
  },
  {
    name: "Prof. Vikram Singh",
    role: "Faculty Advisor / Faculty In-charge (PwBD)",
    note: "Chemical Engineering · Office of Accessible Education",
  },
] as const;

export const studentTeamPlaceholders = [
  { name: "Student Coordinator", role: "Overall coordination — TBD" },
  { name: "Events Lead", role: "Category programming — TBD" },
  { name: "Accessibility Lead", role: "Venue & support logistics — TBD" },
  { name: "Outreach Lead", role: "College outreach — TBD" },
  { name: "Design & Media", role: "Creative & communications — TBD" },
  { name: "Volunteers", role: "On-ground support — TBD" },
] as const;

export const partners = [
  {
    name: "Office of Accessible Education (OAE)",
    href: "https://oae.iitd.ac.in/",
    type: "Organiser",
  },
  {
    name: "Office of Diversity & Inclusion (ODI)",
    href: "https://odi.iitd.ac.in/",
    type: "Parent office",
  },
  {
    name: "Indian Institute of Technology Delhi",
    href: "https://home.iitd.ac.in/",
    type: "Host institution",
  },
] as const;

export const mapPoints = [
  {
    id: "lhc",
    name: "Lecture Hall Complex (LHC)",
    detail: "OAE office at LH 124, ground floor. Primary accessible venue cluster.",
    type: "Venue / Office",
  },
  {
    id: "ramps",
    name: "Classroom & common-area ramps",
    detail: "Ramps available in classrooms and common areas across campus.",
    type: "Access route",
  },
  {
    id: "lifts",
    name: "Lifts with Braille signage",
    detail: "Braille signage in lifts; braille name plates on campus.",
    type: "Wayfinding",
  },
  {
    id: "washrooms",
    name: "Accessible washrooms",
    detail:
      "Accessible washrooms and a portable accessible restroom near the main admin building.",
    type: "Facility",
  },
  {
    id: "erickshaw",
    name: "Accessible e-rickshaw / e-cart points",
    detail: "Campus mobility support for students with disabilities. Pickup points TBD for fest day.",
    type: "Transport",
  },
  {
    id: "hostels",
    name: "Accessible hostel accommodations",
    detail: "Accessible residential options for participants staying on campus (as applicable).",
    type: "Accommodation",
  },
] as const;
