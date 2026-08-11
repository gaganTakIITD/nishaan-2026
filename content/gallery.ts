/** Past editions — NISHAAN was not held in 2023; first edition was 2024 */
export const pastGallery = [
  {
    id: "2025-1",
    year: 2025,
    src: "/media/past/2025-01.jpg",
    alt: "Performers on stage during NISHAAN at IIT Delhi",
    caption: "On Stage",
  },
  {
    id: "2025-2",
    year: 2025,
    src: "/media/past/2025-02.jpg",
    alt: "Students celebrating during NISHAAN at IIT Delhi",
    caption: "In the Hall",
  },
  {
    id: "2024-1",
    year: 2024,
    src: "/media/past/2024-01.jpg",
    alt: "Cultural performance at NISHAAN 2024",
    caption: "Cultural Showcase",
  },
  {
    id: "2024-2",
    year: 2024,
    src: "/media/past/2024-02.jpg",
    alt: "Participants gathered at NISHAAN 2024",
    caption: "Participants",
  },
  {
    id: "2024-3",
    year: 2024,
    src: "/media/past/2024-03.jpg",
    alt: "Welcome session at the first NISHAAN edition in 2024",
    caption: "Welcome",
  },
  {
    id: "2024-4",
    year: 2024,
    src: "/media/showcase/show-08.jpg",
    alt: "Tea break gathering during NISHAAN — community and belonging",
    caption: "Belonging",
  },
] as const;

/** Featured editorial showcase — richer home/about storytelling */
export const showcaseGallery = [
  {
    id: "show-01",
    src: "/media/showcase/show-01.jpg",
    alt: "Inclusive performance moment at NISHAAN",
    caption: "Shared Stage",
    span: "wide" as const,
  },
  {
    id: "show-02",
    src: "/media/showcase/show-02.jpg",
    alt: "Audience and performers at NISHAAN",
    caption: "In the Room",
    span: "normal" as const,
  },
  {
    id: "show-03",
    src: "/media/showcase/show-03.jpg",
    alt: "Cultural dance presentation at NISHAAN",
    caption: "Dance",
    span: "normal" as const,
  },
  {
    id: "show-04",
    src: "/media/showcase/show-04.jpg",
    alt: "Celebration and recognition at NISHAAN",
    caption: "Recognition",
    span: "normal" as const,
  },
  {
    id: "show-05",
    src: "/media/showcase/show-05.jpg",
    alt: "Stage ensemble at NISHAAN",
    caption: "Ensemble",
    span: "wide" as const,
  },
  {
    id: "show-06",
    src: "/media/showcase/show-06.jpg",
    alt: "Participants gathering before performances",
    caption: "Gathering",
    span: "normal" as const,
  },
  {
    id: "show-07",
    src: "/media/showcase/show-07.jpg",
    alt: "Performance energy at NISHAAN",
    caption: "Energy",
    span: "normal" as const,
  },
  {
    id: "show-08",
    src: "/media/showcase/show-08.jpg",
    alt: "Tea break gathering during NISHAAN — community and belonging",
    caption: "Belonging",
    span: "normal" as const,
  },
] as const;

/** Event category cover images for richer cards */
export const eventCovers: Record<string, string> = {
  music: "/media/showcase/show-07.jpg",
  dance: "/media/hero/stage.jpg",
  drama: "/media/showcase/show-01.jpg",
  painting: "/media/showcase/show-04.jpg",
  photography: "/media/showcase/show-02.jpg",
  wordsmith: "/media/showcase/show-06.jpg",
};
