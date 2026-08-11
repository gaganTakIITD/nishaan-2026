/** Official OAE team — matches oae.iitd.ac.in Our Team */
export const oaeTeam = [
  {
    name: "Prof. Deepak Kumar",
    role: "Dean, Diversity & Inclusion",
    image: "/brand/team/deepak-kumar.png",
  },
  {
    name: "Prof. Sujin Babu",
    role: "Faculty Advisor",
    image: "/brand/team/sujin-babu.png",
  },
  {
    name: "Prof. Gourab Kar",
    role: "Faculty Advisor",
    image: "/brand/team/gourab-kar.png",
  },
  {
    name: "Anoushka Augustine",
    role: "Consultant, OAE",
    image: "/brand/team/anoushka-augustine.png",
  },
  {
    name: "Sashank Sekhar Sabat",
    role: "Student Representative - SAC (PwD)",
    image: "/brand/team/sashank-sabat.png",
  },
  {
    name: "Monu Kumar",
    role: "Sr. Office Assistant",
    image: "/brand/team/monu-kumar.png",
  },
] as const;

/** @deprecated use oaeTeam */
export const facultyTeam = oaeTeam.slice(0, 3);

/** @deprecated use oaeTeam */
export const oaeStaff = oaeTeam.slice(3);

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
