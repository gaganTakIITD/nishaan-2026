/** Past editions — NISHAAN was not held in 2023; first edition was 2024.
 *  Photos sourced from OAE gallery (oae.iitd.ac.in NISHAAN 2024 / 2025). */
export const pastGallery = [
  {
    id: "2025-1",
    year: 2025,
    src: "/media/past/2025-01.jpg",
    alt: "Inclusive stage dance at NISHAAN 2025 — performers together in salute",
    caption: "On Stage",
  },
  {
    id: "2025-2",
    year: 2025,
    src: "/media/past/2025-02.jpg",
    alt: "Dance formation at NISHAAN 2025 with wheelchair artists",
    caption: "We Are One",
  },
  {
    id: "2024-1",
    year: 2024,
    src: "/media/past/2024-01.jpg",
    alt: "Student speaking at NISHAAN 2024 with OAE poster behind",
    caption: "Opening Words",
  },
  {
    id: "2024-2",
    year: 2024,
    src: "/media/past/2024-02.jpg",
    alt: "Certificate moment at NISHAAN 2024",
    caption: "Recognition",
  },
  {
    id: "2024-3",
    year: 2024,
    src: "/media/past/2024-03.jpg",
    alt: "Host with microphone at the first NISHAAN edition in 2024",
    caption: "Welcome",
  },
] as const;

/** Featured editorial showcase — richer home/about storytelling */
export const showcaseGallery = [
  {
    id: "show-01",
    src: "/media/showcase/show-01.jpg",
    alt: "Inclusive dance ensemble at NISHAAN 2025",
    caption: "Shared Stage",
    span: "wide" as const,
  },
  {
    id: "show-02",
    src: "/media/showcase/show-02.jpg",
    alt: "Classical dance formation with wheelchair performers at NISHAAN",
    caption: "We Are One",
    span: "normal" as const,
  },
  {
    id: "show-03",
    src: "/media/showcase/show-03.jpg",
    alt: "Music performance with harmonium at NISHAAN",
    caption: "Music",
    span: "normal" as const,
  },
  {
    id: "show-04",
    src: "/media/showcase/show-04.jpg",
    alt: "Solo dance performance at NISHAAN",
    caption: "Dance",
    span: "normal" as const,
  },
  {
    id: "show-05",
    src: "/media/showcase/show-05.jpg",
    alt: "Stage moment with sign language interpretation at NISHAAN",
    caption: "Access on Stage",
    span: "wide" as const,
  },
  {
    id: "show-06",
    src: "/media/showcase/show-06.jpg",
    alt: "Guitar performance at NISHAAN",
    caption: "In the Spotlight",
    span: "normal" as const,
  },
  {
    id: "show-07",
    src: "/media/showcase/show-07.jpg",
    alt: "Certificate presentation at NISHAAN",
    caption: "Recognition",
    span: "normal" as const,
  },
  {
    id: "show-08",
    src: "/media/showcase/show-08.jpg",
    alt: "Student addressing the room at NISHAAN 2024",
    caption: "Voice",
    span: "normal" as const,
  },
] as const;

/** Event category cover images for richer cards */
export const eventCovers: Record<string, string> = {
  music: "/media/showcase/show-03.jpg",
  dance: "/media/showcase/show-04.jpg",
  drama: "/media/showcase/show-05.jpg",
  painting: "/media/showcase/show-07.jpg",
  photography: "/media/showcase/show-08.jpg",
  wordsmith: "/media/showcase/show-06.jpg",
};
