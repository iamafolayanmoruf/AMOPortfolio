// ============================================
// EXPERIENCE / JOURNEY — Edit milestones here
// ============================================

export type Milestone = {
  id: number;
  year: string;
  title: string;
  description: string;
};

export const milestones: Milestone[] = [
  {
    id: 1,
    year: "2022",
    title: "Started Learning Web Development",
    description:
      "Began my journey into web development by learning HTML, CSS, and JavaScript. Built my first static websites and fell in love with creating things on the web.",
  },
  {
    id: 2,
    year: "2022",
    title: "Built First React Project",
    description:
      "Learned React and built my first interactive web application. Understood component-based architecture, state management, and modern frontend patterns.",
  },
  {
    id: 3,
    year: "2023",
    title: "Started Working with Mobile Apps",
    description:
      "Expanded into mobile development with React Native and Expo. Built cross-platform applications that work on both iOS and Android devices.",
  },
  {
    id: 4,
    year: "2023",
    title: "Learned Backend Technologies",
    description:
      "Dove into backend development with Node.js, Express, MongoDB, Firebase, and Supabase. Started building full-stack applications with real databases.",
  },
  {
    id: 5,
    year: "2024",
    title: "Started Building Startup Ideas",
    description:
      "Began working on real startup projects — building platforms and apps designed to solve actual problems for users and businesses.",
  },
  {
    id: 6,
    year: "2024 – Present",
    title: "Built Real-World Projects for Business Use",
    description:
      "Developed production-grade applications including recycling reward systems, student marketplaces, admin dashboards, and finance trackers. Focused on clean code and polished user experiences.",
  },
];
