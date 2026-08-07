export const eventCategories = [
  {
    slug: "music",
    title: "Music",
    description:
      "Dynamic and graceful performances celebrating vocal and instrumental talent.",
  },
  {
    slug: "dance",
    title: "Dance",
    description:
      "Solo and group performances — inclusive choreography that moves audiences.",
  },
  {
    slug: "drama",
    title: "Drama",
    description:
      "Stage storytelling and theatre that centre lived experience and imagination.",
  },
  {
    slug: "painting",
    title: "Painting & Drawing",
    description:
      "Visual art showcases recognising artistic excellence on canvas and paper.",
  },
  {
    slug: "photography",
    title: "Photography",
    description:
      "Frames that capture campus, culture, and the spirit of inclusion.",
  },
  {
    slug: "wordsmith",
    title: "Wordsmith",
    description:
      "Poetry and essay — words that engage, provoke, and belong on stage.",
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
