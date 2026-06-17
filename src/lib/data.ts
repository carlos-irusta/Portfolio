// Portfolio content data
// Update this file with your real information

export const personal = {
  name: "Carlos",
  role: "Software Developer",
  tagline: "Building reliable software for real businesses.",
  description:
    "I focus on clean architecture, production-ready systems, and solving real problems. No unnecessary complexity — just well-structured code that works.",
  location: "Based remotely",
  availability: "Available for projects",
  email: "carlosirusta2022@gmail.com",
  github: "https://github.com/carlos-irusta",
  linkedin: "https://linkedin.com/in/carlosirusta",
};

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  stack: string[];
  liveUrl?: string;
  sourceUrl?: string;
  image?: string;
  status: "live" | "development" | "coming-soon";
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "sgv",
    name: "SGV",
    description:
      "Multi-tenant SaaS for inventory management and point of sale. Built for real businesses handling stock, sales, and operations at scale.",
    longDescription:
      "Full-stack multi-tenant platform with role-based access, atomic stock operations, real-time inventory tracking, and a production-hardened POS workflow.",
    stack: [
      "Node.js",
      "Express",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind",
    ],
    status: "live",
    featured: true,
    image: "/images/Portada.png",
  },
  {
    id: "project-2",
    name: "Coming Soon",
    description: "New project in development.",
    stack: [],
    status: "coming-soon",
  },
  {
    id: "project-3",
    name: "Coming Soon",
    description: "New project in development.",
    stack: [],
    status: "coming-soon",
  },
];

export interface StackCategory {
  label: string;
  items: string[];
}

export const stack: StackCategory[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "SQL"],
  },
  {
    label: "Frameworks",
    items: ["Next.js", "React", "Node.js", "Express", "Prisma"],
  },
  {
    label: "Tools",
    items: ["Neovim", "Git", "Docker", "Linux"],
  },
  {
    label: "Infrastructure",
    items: ["PostgreSQL", "Vercel"],
  },
];

export const currently = [
  {
    label: "Building",
    value: "SGV — inventory & POS platform",
  },
  {
    label: "Learning",
    value: "Systems architecture & performance optimization",
  },
  {
    label: "Workflow",
    value: "Hyprland, Neovim, minimal tooling",
  },
  {
    label: "Focus",
    value: "Clean code, real-world reliability",
  },
];

export const comingSoon = [
  "Dotfiles & Setup",
  "Dev Tooling",
  "Workflow Notes",
  "Technical Blog",
];

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];
