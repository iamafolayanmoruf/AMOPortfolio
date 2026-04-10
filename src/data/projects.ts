// ============================================
// PROJECTS — Edit your project details here
// ============================================

export type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  liveLink: string;
  stack: string[];
  category: "web" | "mobile" | "fullstack" | "tool";
};

export const projects: Project[] = [
  {
    id: 1,
    name: "The Lagos Wellness Club",
    description:
      "A modern wellness community website helping Lagosians find calm, clarity, and connection through curated events, shop, and directory.",
    image: "/images/project-tlwc.png",
    liveLink: "https://www.thelagoswellnessclub.com/",
    stack: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Vercel"],
    category: "web",
  },
  {
    id: 2,
    name: "Those Who Dine",
    description:
      "A premium food and dining experience website showcasing flavourful journeys and curated culinary moments.",
    image: "/images/project-twd.png",
    liveLink: "https://www.thosewhodine.co/",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    category: "web",
  },
  {
    id: 3,
    name: "Bamdo Lod",
    description:
      "An e-commerce grocery platform offering a wide assortment of staple foods, local delicacies, and special offers with delivery to all hostels on campus.",
    image: "/images/project-bamdolod.png",
    liveLink: "https://bamdolod.vercel.app/",
    stack: ["React", "Tailwind CSS", "Vercel"],
    category: "web",
  },
  {
    id: 4,
    name: "Tukay",
    description:
      "A modern fintech and business platform with a sleek brand identity, built for seamless digital financial experiences.",
    image: "/images/project-tukay.png",
    liveLink: "https://tukay-taupe.vercel.app/",
    stack: ["React", "Tailwind CSS", "Vercel"],
    category: "web",
  },
  {
    id: 5,
    name: "Fashion Store",
    description:
      "A stylish e-commerce fashion website featuring unique clothing collections, new arrivals, seasonal sales, and a vibrant shopping community experience.",
    image: "/images/project-fashion.png",
    liveLink: "https://myfashion-shopping.netlify.app/",
    stack: ["React", "CSS", "Netlify"],
    category: "web",
  },
  {
    id: 6,
    name: "Shortlet",
    description:
      "A purpose-driven housing and community platform providing pathways to better opportunities, helping the homeless with reality and hope.",
    image: "/images/project-shortlet.png",
    liveLink: "https://short-let-site.vercel.app/",
    stack: ["React", "Tailwind CSS", "Vercel"],
    category: "web",
  },
  {
    id: 7,
    name: "Nidle Outfit",
    description:
      "A premium fashion e-commerce platform featuring Paris Fabric collections, seasonal lookbooks, product showcases, and a polished shopping experience.",
    image: "/images/project-nidle.png",
    liveLink: "https://e-comerce-fashionsite.netlify.app/",
    stack: ["React", "CSS", "Netlify"],
    category: "web",
  },
  {
    id: 8,
    name: "Amways",
    description:
      "A health and wellness e-commerce platform offering vitamins, minerals, and plant nutrients for healthy aging, with product discovery and shopping features.",
    image: "/images/project-amway.png",
    liveLink: "https://amway-pi.vercel.app/",
    stack: ["React", "Tailwind CSS", "Vercel"],
    category: "web",
  },
  {
    id: 9,
    name: "PlasticPay",
    description:
      "A recycling rewards app where users earn points and cash by scanning and recycling bottles and cans.",
    image: "/images/project-plasticpay.png",
    liveLink: "https://yourprojectlink.com",
    stack: ["React Native", "Supabase", "Expo"],
    category: "mobile",
  },
  {
    id: 10,
    name: "AMO Portfolio",
    description:
      "A modern, animated portfolio built with Next.js, Tailwind CSS, and Framer Motion for a premium experience.",
    image: "/images/profile.png",
    liveLink: "#",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "web",
  },
];

export const projectCategories = [
  { value: "all", label: "All Projects" },
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "fullstack", label: "Full Stack" },
  { value: "tool", label: "Tools" },
];
