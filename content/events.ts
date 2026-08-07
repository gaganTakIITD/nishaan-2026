export const eventCategories = [
  {
    slug: "music",
    title: "Music",
    description:
      "Vocal and instrumental performances — solo or group — celebrating rhythm, melody, and expression.",
    format: "Stage performance",
    action: "Register for Music",
  },
  {
    slug: "dance",
    title: "Dance",
    description:
      "Inclusive choreography for solo and group acts that move the audience with energy and grace.",
    format: "Stage performance",
    action: "Register for Dance",
  },
  {
    slug: "drama",
    title: "Drama",
    description:
      "Theatre and storytelling that centre lived experience, imagination, and powerful stage presence.",
    format: "Stage performance",
    action: "Register for Drama",
  },
  {
    slug: "painting",
    title: "Painting & Drawing",
    description:
      "Visual art on canvas and paper — originality, technique, and artistic voice are celebrated.",
    format: "On-site / display",
    action: "Register for Art",
  },
  {
    slug: "photography",
    title: "Photography",
    description:
      "Still frames that capture campus life, culture, and the spirit of inclusion at NISHAAN.",
    format: "Submission / display",
    action: "Register for Photos",
  },
  {
    slug: "wordsmith",
    title: "Wordsmith",
    description:
      "Poetry and essay — words that engage, provoke, and belong on stage or in print.",
    format: "Reading / written",
    action: "Register for Wordsmith",
  },
] as const;

export const scheduleSkeleton = [
  {
    time: "Morning",
    title: "Opening & welcome",
    detail: "Hosted by the Office of Accessible Education.",
  },
  {
    time: "Midday",
    title: "Performing arts segments",
    detail: "Music, dance, and drama showcases.",
  },
  {
    time: "Afternoon",
    title: "Wordsmith & visual arts",
    detail: "Poetry, essay, photography, and painting recognition.",
  },
  {
    time: "Late afternoon",
    title: "Featured inclusive performance",
    detail: "Guest / highlight act slot.",
  },
  {
    time: "Closing",
    title: "Vote of thanks & recognition",
    detail: "Certificates and closing remarks by OAE faculty advisors.",
  },
] as const;
